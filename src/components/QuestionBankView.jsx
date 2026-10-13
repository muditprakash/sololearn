import React, { useState, useMemo } from "react";
import {
  Search,
  Eye,
  EyeOff,
  Bookmark,
  CheckCircle2,
  XCircle,
  Circle,
  Play,
  Filter
} from "lucide-react";
import { COURSE_MODULES, ALL_QUESTIONS } from "../data/questionsData";
import { CodeBlock, FormattedText } from "./CodeBlock";

export function QuestionBankView({
  userState,
  onToggleBookmark,
  onStartCustomQuiz
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [revealAll, setRevealAll] = useState(false);
  const [revealedIds, setRevealedIds] = useState({});

  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      if (selectedModule !== "all" && q.moduleId !== Number(selectedModule)) {
        return false;
      }
      if (typeFilter !== "all" && q.lessonType !== typeFilter) {
        return false;
      }

      const qHistory = userState.questionHistory?.[q.id];
      const isBookmarked = userState.bookmarks?.includes(q.id);

      if (statusFilter === "correct" && (!qHistory || !qHistory.isCorrect)) {
        return false;
      }
      if (statusFilter === "wrong" && (!qHistory || qHistory.isCorrect)) {
        return false;
      }
      if (statusFilter === "unanswered" && qHistory) {
        return false;
      }
      if (statusFilter === "bookmarked" && !isBookmarked) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inId = q.id.toLowerCase().includes(query);
        const inLesson = q.lessonTitle.toLowerCase().includes(query);
        const inQuestion = q.question.toLowerCase().includes(query);
        const inCode = (q.code || "").toLowerCase().includes(query);
        const inOptions = Object.values(q.options).some((opt) =>
          opt.toLowerCase().includes(query)
        );
        return inId || inLesson || inQuestion || inCode || inOptions;
      }

      return true;
    });
  }, [searchQuery, selectedModule, statusFilter, typeFilter, userState]);

  const toggleRevealCard = (qId) => {
    setRevealedIds((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="bank-view animate-fade-in">
      <div className="bank-header-card">
        <div>
          <h1 className="bank-title">Python Core — Complete 108 MCQ Bank</h1>
          <p className="bank-subtitle">
            Browse, search, bookmark, or study all 108 questions across 10
            modules and 102 lessons.
          </p>
        </div>

        <div className="bank-header-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setRevealAll((r) => !r)}
          >
            {revealAll ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>{revealAll ? "Hide Answers" : "Reveal All Answers"}</span>
          </button>

          {filteredQuestions.length > 0 && (
            <button
              type="button"
              className="btn-primary"
              onClick={() =>
                onStartCustomQuiz(
                  filteredQuestions,
                  `Filtered Quiz (${filteredQuestions.length} Qs)`
                )
              }
            >
              <Play size={16} />
              <span>Quiz These ({filteredQuestions.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bank-filters-bar">
        <div className="search-input-wrap">
          <Search size={17} className="search-icon" />
          <input
            type="text"
            placeholder="Search by Q#, lesson, keyword, or Python syntax (e.g. Q42, lambda, __init__)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bank-search-input"
          />
        </div>

        <div className="filter-selects">
          <div className="select-wrap">
            <Filter size={14} />
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option value="all">All 10 Modules (108 Qs)</option>
              {COURSE_MODULES.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="correct">Mastered (Correct)</option>
            <option value="wrong">Needs Review (Mistakes)</option>
            <option value="unanswered">Unanswered</option>
            <option value="bookmarked">Bookmarked ★</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Lesson Types</option>
            <option value="lesson">Standard Lessons</option>
            <option value="quiz">Module Quizzes</option>
            <option value="project">Code Projects</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="bank-results-count">
        Showing <strong>{filteredQuestions.length}</strong> of{" "}
        <strong>{ALL_QUESTIONS.length}</strong> questions
      </div>

      {/* Questions List */}
      <div className="bank-questions-list">
        {filteredQuestions.map((q) => {
          const history = userState.questionHistory?.[q.id];
          const isBookmarked = userState.bookmarks?.includes(q.id);
          const isAnswerVisible = revealAll || revealedIds[q.id];

          return (
            <div key={q.id} className="bank-q-card">
              <div className="bank-q-top">
                <div className="bank-q-badges">
                  <span
                    className="bank-q-number"
                    style={{
                      background: `${q.moduleColor}20`,
                      color: q.moduleColor
                    }}
                  >
                    {q.id}
                  </span>
                  <span className="bank-q-module">{q.moduleTitle}</span>
                  <span className="bank-q-lesson">
                    • {q.lessonNumber}. {q.lessonTitle}
                  </span>
                </div>

                <div className="bank-q-right-meta">
                  {history ? (
                    history.isCorrect ? (
                      <span className="status-tag correct">
                        <CheckCircle2 size={14} /> Solved
                      </span>
                    ) : (
                      <span className="status-tag wrong">
                        <XCircle size={14} /> Review
                      </span>
                    )
                  ) : (
                    <span className="status-tag unanswered">
                      <Circle size={13} /> Unanswered
                    </span>
                  )}

                  <button
                    type="button"
                    className={`icon-action-btn ${isBookmarked ? "bookmarked" : ""}`}
                    onClick={() => onToggleBookmark(q.id)}
                    title="Toggle Bookmark"
                  >
                    <Bookmark
                      size={16}
                      fill={isBookmarked ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>

              <h3 className="bank-q-prompt">
                <FormattedText text={q.question} />
              </h3>

              {q.code && (
                <div className="bank-q-code">
                  <CodeBlock code={q.code} label="Python" />
                </div>
              )}

              <div className="bank-q-options">
                {Object.entries(q.options).map(([optKey, optText]) => {
                  const isCorrectOpt = q.answer === optKey;
                  const highlightCorrect = isAnswerVisible && isCorrectOpt;

                  return (
                    <div
                      key={optKey}
                      className={`bank-opt-pill ${
                        highlightCorrect ? "correct-highlight" : ""
                      }`}
                    >
                      <span className="bank-opt-key">{optKey})</span>
                      <span className="bank-opt-val">
                        <FormattedText text={optText} />
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bank-q-footer">
                <button
                  type="button"
                  className="btn-reveal-toggle"
                  onClick={() => toggleRevealCard(q.id)}
                >
                  {isAnswerVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>
                    {isAnswerVisible
                      ? "Hide Answer"
                      : "Show Answer & Explanation"}
                  </span>
                </button>

                {isAnswerVisible && (
                  <div className="bank-answer-box animate-fade-in">
                    <div className="bank-answer-line">
                      <strong>
                        Answer: {q.answer}){" "}
                        <FormattedText text={q.options[q.answer]} />
                      </strong>
                    </div>
                    <p className="bank-answer-exp">
                      <FormattedText text={q.explanation} />
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <div className="empty-state-card">
            <p>No questions match your current search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
