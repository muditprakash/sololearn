import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  Heart,
  Zap,
  Bookmark,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Trophy,
  RotateCcw,
  Sparkles,
  Code2,
  ChevronRight
} from "lucide-react";
import { CodeBlock, FormattedText } from "./CodeBlock";
import { soundFX } from "../utils/sound";

export function LessonPlayer({
  session, // { mode: 'lesson' | 'module_exam' | 'practice', title, subtitle, moduleColor, questions, lessonNumber, showConceptFirst }
  userState,
  onRecordAnswer, // (questionId, isCorrect, selectedOption) => void
  onCompleteLesson, // (lessonNumber, stats) => void
  onToggleBookmark, // (questionId) => void
  onNextLesson, // optional () => void
  onClose
}) {
  // Stage can be: 'concept' -> 'question' -> 'summary'
  const hasConcept =
    session.showConceptFirst &&
    session.questions.length > 0 &&
    session.questions[0].conceptSummary;

  const [stage, setStage] = useState(hasConcept ? "concept" : "question");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    wrong: 0,
    xpEarned: 0,
    answers: []
  });

  // Reset state when session changes (e.g. clicking "Next Lesson")
  useEffect(() => {
    const startWithConcept =
      session.showConceptFirst &&
      session.questions.length > 0 &&
      session.questions[0].conceptSummary;
    setStage(startWithConcept ? "concept" : "question");
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);
    setSessionStats({
      correct: 0,
      wrong: 0,
      xpEarned: 0,
      answers: []
    });
  }, [session]);

  const currentQ = session.questions[currentIdx];
  const totalQ = session.questions.length;

  const progressPct =
    stage === "concept"
      ? 10
      : stage === "summary"
      ? 100
      : Math.round(
          ((currentIdx + (isSubmitted ? 1 : 0.3)) / totalQ) *
            (hasConcept ? 90 : 100) +
            (hasConcept ? 10 : 0)
        );

  const handleSelectOption = useCallback(
    (optKey) => {
      if (isSubmitted) return;
      soundFX.playClick();
      setSelectedOption(optKey);
    },
    [isSubmitted]
  );

  const handleCheckAnswer = useCallback(() => {
    if (!selectedOption || isSubmitted || !currentQ) return;
    const isCorrect = selectedOption === currentQ.answer;
    setIsSubmitted(true);

    if (isCorrect) {
      soundFX.playCorrect();
    } else {
      soundFX.playWrong();
    }

    const earned = isCorrect ? 20 : 5;
    setSessionStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      xpEarned: prev.xpEarned + earned,
      answers: [
        ...prev.answers,
        {
          questionId: currentQ.id,
          selected: selectedOption,
          correctAnswer: currentQ.answer,
          isCorrect
        }
      ]
    }));

    onRecordAnswer(currentQ.id, isCorrect, selectedOption, earned);
  }, [selectedOption, isSubmitted, currentQ, onRecordAnswer]);

  const handleContinue = useCallback(() => {
    if (stage === "concept") {
      soundFX.playClick();
      setStage("question");
      return;
    }

    if (currentIdx + 1 < totalQ) {
      soundFX.playClick();
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowHint(false);
    } else {
      soundFX.playComplete();
      setStage("summary");
      if (session.lessonNumber) {
        onCompleteLesson(session.lessonNumber, sessionStats);
      }
    }
  }, [
    stage,
    currentIdx,
    totalQ,
    session.lessonNumber,
    sessionStats,
    onCompleteLesson
  ]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (stage === "concept") {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleContinue();
        }
        return;
      }
      if (stage === "question") {
        const keyUpper = e.key.toUpperCase();
        if (!isSubmitted) {
          if (["A", "1"].includes(keyUpper)) handleSelectOption("A");
          if (["B", "2"].includes(keyUpper)) handleSelectOption("B");
          if (["C", "3"].includes(keyUpper)) handleSelectOption("C");
          if (["D", "4"].includes(keyUpper)) handleSelectOption("D");
          if (e.key === "Enter" && selectedOption) {
            e.preventDefault();
            handleCheckAnswer();
          }
        } else {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleContinue();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    stage,
    isSubmitted,
    selectedOption,
    handleSelectOption,
    handleCheckAnswer,
    handleContinue
  ]);

  const handleRetryMistakes = () => {
    setStage("question");
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);
    setSessionStats({
      correct: 0,
      wrong: 0,
      xpEarned: 0,
      answers: []
    });
  };

  if (!currentQ) return null;

  const isBookmarked = userState.bookmarks?.includes(currentQ.id);
  const accuracy =
    sessionStats.correct + sessionStats.wrong > 0
      ? Math.round(
          (sessionStats.correct /
            (sessionStats.correct + sessionStats.wrong)) *
            100
        )
      : 100;

  return (
    <div className="player-overlay">
      <div className="player-container">
        {/* Top Progress Header */}
        <header className="player-header">
          <button
            type="button"
            className="player-close-btn"
            onClick={onClose}
            title="Exit Lesson"
          >
            <X size={20} />
          </button>

          <div className="player-progress-track">
            <div
              className="player-progress-fill"
              style={{
                width: `${progressPct}%`,
                background: session.moduleColor || "#10b981"
              }}
            />
          </div>

          <div className="player-header-stats">
            {hasConcept && stage !== "summary" && (
              <div className="player-stage-tabs">
                <button
                  type="button"
                  className={`stage-tab ${stage === "concept" ? "active" : ""}`}
                  onClick={() => setStage("concept")}
                >
                  <BookOpen size={14} /> Learn
                </button>
                <button
                  type="button"
                  className={`stage-tab ${stage === "question" ? "active" : ""}`}
                  onClick={() => setStage("question")}
                >
                  <HelpCircle size={14} /> Quiz ({currentIdx + 1}/{totalQ})
                </button>
              </div>
            )}

            <div className="player-stat-pill hearts" title="Hearts / Lives">
              <Heart size={16} fill="#ef4444" color="#ef4444" />
              <span>{userState.unlimitedHearts ? "∞" : userState.hearts}</span>
            </div>

            <div className="player-stat-pill xp" title="Total XP">
              <Zap size={16} fill="#f59e0b" color="#f59e0b" />
              <span>{userState.xp}</span>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="player-body">
          {stage === "concept" && (
            <div className="concept-card animate-fade-in">
              <div className="concept-badge-row">
                <span
                  className="concept-module-pill"
                  style={{
                    background: `${session.moduleColor}20`,
                    color: session.moduleColor
                  }}
                >
                  {currentQ.moduleTitle}
                </span>
                <span className="concept-lesson-num">
                  Lesson {currentQ.lessonNumber} of 102
                </span>
              </div>

              <h1 className="concept-title">{currentQ.lessonTitle}</h1>

              <div className="concept-explanation-box">
                <div className="concept-icon-header">
                  <Sparkles size={18} color={session.moduleColor || "#10b981"} />
                  <span>Key Concept</span>
                </div>
                <p className="concept-text">
                  <FormattedText text={currentQ.conceptSummary} />
                </p>
              </div>

              {currentQ.conceptCode && (
                <div className="concept-code-section">
                  <div className="concept-code-title">
                    <Code2 size={16} /> Interactive Example
                  </div>
                  <CodeBlock code={currentQ.conceptCode} label="example.py" />
                </div>
              )}

              <div className="concept-tip-callout">
                <Lightbulb size={18} className="tip-icon" />
                <div>
                  <strong>Sololearn Pro Tip:</strong> Read the code snippet
                  above carefully—the upcoming quiz question tests this exact
                  concept!
                </div>
              </div>
            </div>
          )}

          {stage === "question" && (
            <div className="question-card animate-fade-in">
              <div className="question-meta-bar">
                <div className="question-badges">
                  <span
                    className="q-badge-id"
                    style={{
                      background: `${currentQ.moduleColor || "#10b981"}22`,
                      color: currentQ.moduleColor || "#10b981"
                    }}
                  >
                    {currentQ.id}
                  </span>
                  <span className="q-badge-topic">
                    {currentQ.lessonNumber}. {currentQ.lessonTitle}
                  </span>
                  {currentQ.lessonType === "quiz" && (
                    <span className="q-badge-type quiz">Module Quiz</span>
                  )}
                  {currentQ.lessonType === "project" && (
                    <span className="q-badge-type project">Code Project</span>
                  )}
                </div>

                <div className="question-actions">
                  <button
                    type="button"
                    className={`icon-action-btn ${showHint ? "active" : ""}`}
                    onClick={() => setShowHint((h) => !h)}
                    title="Show Concept Hint"
                  >
                    <Lightbulb size={17} />
                    <span>Hint</span>
                  </button>
                  <button
                    type="button"
                    className={`icon-action-btn ${isBookmarked ? "bookmarked" : ""}`}
                    onClick={() => onToggleBookmark(currentQ.id)}
                    title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
                  >
                    <Bookmark
                      size={17}
                      fill={isBookmarked ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>

              <h2 className="question-prompt">
                <FormattedText text={currentQ.question} />
              </h2>

              {currentQ.code && (
                <div className="question-code-wrap">
                  <CodeBlock code={currentQ.code} label="snippet.py" />
                </div>
              )}

              {showHint && (
                <div className="question-hint-box animate-fade-in">
                  <Lightbulb size={16} />
                  <div>
                    <strong>Concept Hint: </strong>
                    <FormattedText text={currentQ.conceptSummary} />
                  </div>
                </div>
              )}

              <div className="options-grid">
                {Object.entries(currentQ.options).map(([optKey, optVal]) => {
                  const isSelected = selectedOption === optKey;
                  const isCorrectAnswer = currentQ.answer === optKey;

                  let statusClass = "";
                  if (isSubmitted) {
                    if (isCorrectAnswer) {
                      statusClass = "correct";
                    } else if (isSelected && !isCorrectAnswer) {
                      statusClass = "wrong";
                    } else {
                      statusClass = "dimmed";
                    }
                  } else if (isSelected) {
                    statusClass = "selected";
                  }

                  return (
                    <button
                      key={optKey}
                      type="button"
                      className={`mcq-option-btn ${statusClass}`}
                      onClick={() => handleSelectOption(optKey)}
                      disabled={isSubmitted}
                    >
                      <span className="option-letter">{optKey}</span>
                      <span className="option-text">
                        <FormattedText text={optVal} />
                      </span>
                      {isSubmitted && isCorrectAnswer && (
                        <CheckCircle2 size={20} className="option-status-icon correct" />
                      )}
                      {isSubmitted && isSelected && !isCorrectAnswer && (
                        <XCircle size={20} className="option-status-icon wrong" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="keyboard-hint">
                Tip: Press <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> to
                choose and <kbd>Enter</kbd> to submit
              </div>
            </div>
          )}

          {stage === "summary" && (
            <div className="summary-card animate-fade-in">
              <div className="summary-trophy-ring">
                <Trophy size={48} color="#f59e0b" />
              </div>
              <h1 className="summary-title">
                {accuracy >= 75 ? "Lesson Complete!" : "Practice Complete!"}
              </h1>
              <p className="summary-subtitle">{session.title}</p>

              <div className="summary-stats-grid">
                <div className="summary-stat-box xp">
                  <span className="stat-label">XP Earned</span>
                  <span className="stat-val">+{sessionStats.xpEarned} XP</span>
                </div>
                <div className="summary-stat-box accuracy">
                  <span className="stat-label">Accuracy</span>
                  <span className="stat-val">{accuracy}%</span>
                </div>
                <div className="summary-stat-box score">
                  <span className="stat-label">Score</span>
                  <span className="stat-val">
                    {sessionStats.correct} / {totalQ}
                  </span>
                </div>
              </div>

              <div className="summary-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleRetryMistakes}
                >
                  <RotateCcw size={17} /> Practice Again
                </button>

                {onNextLesson ? (
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={onNextLesson}
                  >
                    <span>Next Lesson</span>
                    <ChevronRight size={19} />
                  </button>
                ) : (
                  <button type="button" className="btn-primary" onClick={onClose}>
                    <span>Back to Learning Path</span>
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>

              {onNextLesson && (
                <button
                  type="button"
                  className="summary-back-link"
                  onClick={onClose}
                >
                  Return to Course Map
                </button>
              )}
            </div>
          )}
        </main>

        {/* Sololearn-style Sticky Feedback & Action Footer */}
        {stage !== "summary" && (
          <footer
            className={`player-footer ${
              isSubmitted
                ? selectedOption === currentQ.answer
                  ? "footer-correct"
                  : "footer-wrong"
                : ""
            }`}
          >
            <div className="player-footer-inner">
              {stage === "concept" ? (
                <div className="footer-concept-bar">
                  <span className="footer-Subtext">
                    Ready to test what you just learned? ({totalQ}{" "}
                    {totalQ === 1 ? "question" : "questions"})
                  </span>
                  <button
                    type="button"
                    className="btn-check ready"
                    onClick={handleContinue}
                  >
                    <span>Start Quiz</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : !isSubmitted ? (
                <div className="footer-unsubmitted-bar">
                  <button
                    type="button"
                    className="btn-skip"
                    onClick={() => {
                      setShowHint(true);
                    }}
                  >
                    Need a Hint?
                  </button>
                  <button
                    type="button"
                    className={`btn-check ${selectedOption ? "ready" : "disabled"}`}
                    disabled={!selectedOption}
                    onClick={handleCheckAnswer}
                  >
                    Check Answer
                  </button>
                </div>
              ) : (
                <div className="footer-feedback-bar">
                  <div className="feedback-details">
                    <div className="feedback-headline">
                      {selectedOption === currentQ.answer ? (
                        <>
                          <CheckCircle2 size={24} className="fb-icon-correct" />
                          <span>Spot on! +20 XP</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={24} className="fb-icon-wrong" />
                          <span>
                            Not quite! Correct answer: {currentQ.answer}){" "}
                            <FormattedText
                              text={currentQ.options[currentQ.answer]}
                            />
                          </span>
                        </>
                      )}
                    </div>
                    <p className="feedback-explanation">
                      <FormattedText text={currentQ.explanation} />
                    </p>
                  </div>

                  <button
                    type="button"
                    className={`btn-continue ${
                      selectedOption === currentQ.answer ? "correct" : "wrong"
                    }`}
                    onClick={handleContinue}
                  >
                    <span>
                      {currentIdx + 1 < totalQ ? "Continue" : "Finish"}
                    </span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
