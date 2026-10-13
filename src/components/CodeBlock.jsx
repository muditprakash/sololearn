import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const PYTHON_KEYWORDS = new Set([
  "def", "return", "if", "elif", "else", "for", "while", "in", "and", "or",
  "not", "True", "False", "None", "import", "from", "as", "class", "try",
  "except", "finally", "raise", "assert", "with", "yield", "lambda", "break",
  "continue", "pass", "is"
]);

const PYTHON_BUILTINS = new Set([
  "print", "input", "type", "len", "range", "list", "callable", "open",
  "read", "write", "get", "enumerate", "max", "min", "map", "filter",
  "next", "bool", "int", "float", "str", "dict", "set", "tuple", "self", "cls"
]);

function highlightLine(line) {
  // Check for comment
  const commentIdx = line.indexOf("#");
  let codePart = line;
  let commentPart = "";
  if (commentIdx !== -1) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  }

  // Tokenize strings, words, numbers, operators
  const tokenRegex = /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|@\w+|\b[A-Za-z_]\w*\b|\b\d+(?:\.\d+)?\b|:=|\*\*|\/\/|[+\-*/%=<>!]+|[()[\]{}:.,])/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(codePart)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "plain", text: codePart.slice(lastIndex, match.index) });
    }
    const token = match[0];
    if (token.startsWith('"') || token.startsWith("'")) {
      parts.push({ type: "string", text: token });
    } else if (token.startsWith("@")) {
      parts.push({ type: "decorator", text: token });
    } else if (PYTHON_KEYWORDS.has(token)) {
      parts.push({ type: "keyword", text: token });
    } else if (PYTHON_BUILTINS.has(token)) {
      parts.push({ type: "builtin", text: token });
    } else if (/^\d/.test(token)) {
      parts.push({ type: "number", text: token });
    } else if (/^[+\-*/%=<>!]|:=|\*\*|\/\//.test(token)) {
      parts.push({ type: "operator", text: token });
    } else {
      parts.push({ type: "ident", text: token });
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < codePart.length) {
    parts.push({ type: "plain", text: codePart.slice(lastIndex) });
  }
  if (commentPart) {
    parts.push({ type: "comment", text: commentPart });
  }

  return parts;
}

export function CodeBlock({ code, label = "Python 3" }) {
  const [copied, setCopied] = useState(false);

  if (!code) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const lines = code.split("\n");

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <div className="code-block-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="code-block-label">
            <Terminal size={12} /> {label}
          </span>
        </div>
        <button
          type="button"
          className="code-copy-btn"
          onClick={handleCopy}
          title="Copy snippet"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="code-block-pre">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="code-line">
              <span className="line-num">{i + 1}</span>
              <span className="line-content">
                {highlightLine(line).map((tok, j) => (
                  <span key={j} className={`tok-${tok.type}`}>
                    {tok.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

// Helper to render text with inline `code` spans nicely styled
export function FormattedText({ text }) {
  if (!text) return null;
  const parts = String(text).split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
          return (
            <code key={idx} className="inline-code">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </>
  );
}
