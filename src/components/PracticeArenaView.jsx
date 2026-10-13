import React, { useState } from "react";
import {
  Zap,
  Flame,
  RotateCcw,
  Bookmark,
  Trophy,
  Award,
  Code2,
  Play,
  Layers,
  CheckCircle2,
  Sparkles,
  Printer
} from "lucide-react";
import { COURSE_MODULES, ALL_QUESTIONS, getRankForXp } from "../data/questionsData";

export function PracticeArenaView({
  userState,
  onUpdateLearnerName,
  onStartCustomQuiz
}) {
  const [nameInput, setNameInput] = useState(
    userState.learnerName || "Python Developer"
  );

  const wrongQuestions = ALL_QUESTIONS.filter(
    (q) =>
      userState.questionHistory?.[q.id] &&
      !userState.questionHistory[q.id].isCorrect
  );

  const bookmarkedQuestions = ALL_QUESTIONS.filter((q) =>
    userState.bookmarks?.includes(q.id)
  );

  const unansweredQuestions = ALL_QUESTIONS.filter(
    (q) => !userState.questionHistory?.[q.id]
  );

  const projectAndQuizQuestions = ALL_QUESTIONS.filter(
    (q) => q.lessonType === "quiz" || q.lessonType === "project"
  );

  const solvedCount = Object.values(userState.questionHistory || {}).filter(
    (h) => h.isCorrect
  ).length;

  const completionPct = Math.round((solvedCount / ALL_QUESTIONS.length) * 100);
  const { current: currentRank } = getRankForXp(userState.xp);

  const handleRandomSprint = (count = 10) => {
    const pool = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    onStartCustomQuiz(pool, `Quick ${count}-Question Sprint`, "#f59e0b");
  };

  return (
    <div className="arena-view animate-fade-in">
      {/* Practice Modes Section */}
      <div className="arena-section-header">
        <div>
          <h1 className="arena-title">Practice Arena & Challenge Modes</h1>
          <p className="arena-subtitle">
            Sharpen your Python skills with targeted drills, mistake reviews, and
            module exams.
          </p>
        </div>
      </div>

      <div className="arena-modes-grid">
        <div className="arena-mode-card sprint">
          <div className="mode-icon-box" style={{ background: "#f59e0b20", color: "#f59e0b" }}>
            <Zap size={24} />
          </div>
          <h3>Daily 10-Question Sprint</h3>
          <p>
            A randomized 10-question rapid review pulled from all 10 Python Core
            modules.
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            onClick={() => handleRandomSprint(10)}
          >
            <Play size={16} /> Start 10-Q Sprint
          </button>
        </div>

        <div className="arena-mode-card mistakes">
          <div className="mode-icon-box" style={{ background: "#ef444420", color: "#ef4444" }}>
            <RotateCcw size={24} />
          </div>
          <h3>Mistake Crusher ({wrongQuestions.length})</h3>
          <p>
            Re-attempt questions you previously missed until you achieve 100%
            mastery.
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            disabled={wrongQuestions.length === 0}
            onClick={() =>
              onStartCustomQuiz(
                wrongQuestions,
                "Mistake Crusher Review",
                "#ef4444"
              )
            }
          >
            <Play size={16} />{" "}
            {wrongQuestions.length > 0
              ? `Review ${wrongQuestions.length} Mistakes`
              : "Zero Mistakes! 🎉"}
          </button>
        </div>

        <div className="arena-mode-card projects">
          <div className="mode-icon-box" style={{ background: "#8b5cf620", color: "#8b5cf6" }}>
            <Code2 size={24} />
          </div>
          <h3>Quizzes & Code Projects ({projectAndQuizQuestions.length})</h3>
          <p>
            Test yourself on all 10 Module Quizzes and 9 SoloPy Code Projects
            (FizzBuzz, Fibonacci, OOP & more).
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            onClick={() =>
              onStartCustomQuiz(
                projectAndQuizQuestions,
                "Module Quizzes & Code Projects",
                "#8b5cf6"
              )
            }
          >
            <Play size={16} /> Start Projects Challenge
          </button>
        </div>

        <div className="arena-mode-card bookmarks">
          <div className="mode-icon-box" style={{ background: "#3b82f620", color: "#3b82f6" }}>
            <Bookmark size={24} />
          </div>
          <h3>Bookmarked Deck ({bookmarkedQuestions.length})</h3>
          <p>
            Practice the specific questions you bookmarked during lessons or in
            the Question Bank.
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            disabled={bookmarkedQuestions.length === 0}
            onClick={() =>
              onStartCustomQuiz(
                bookmarkedQuestions,
                "Bookmarked Questions Deck",
                "#3b82f6"
              )
            }
          >
            <Play size={16} />{" "}
            {bookmarkedQuestions.length > 0
              ? `Practice ${bookmarkedQuestions.length} Bookmarked`
              : "No Bookmarks Yet"}
          </button>
        </div>

        <div className="arena-mode-card unanswered">
          <div className="mode-icon-box" style={{ background: "#10b98120", color: "#10b981" }}>
            <Flame size={24} />
          </div>
          <h3>Unanswered Questions ({unansweredQuestions.length})</h3>
          <p>
            Jump straight into questions you haven't attempted yet to reach 100%
            course completion.
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            disabled={unansweredQuestions.length === 0}
            onClick={() =>
              onStartCustomQuiz(
                unansweredQuestions.slice(0, 20),
                "Unanswered Questions Batch",
                "#10b981"
              )
            }
          >
            <Play size={16} />{" "}
            {unansweredQuestions.length > 0
              ? `Practice Next ${Math.min(20, unansweredQuestions.length)} Unanswered`
              : "All 108 Answered! 🏆"}
          </button>
        </div>

        <div className="arena-mode-card marathon">
          <div className="mode-icon-box" style={{ background: "#ec489920", color: "#ec4899" }}>
            <Trophy size={24} />
          </div>
          <h3>Full 108-Q Certification Exam</h3>
          <p>
            The ultimate Python Core marathon: all 108 questions from Q1 to Q108
            in one comprehensive session.
          </p>
          <button
            type="button"
            className="btn-primary full-width"
            onClick={() =>
              onStartCustomQuiz(
                ALL_QUESTIONS,
                "Full Python Core 108-Q Exam",
                "#ec4899"
              )
            }
          >
            <Play size={16} /> Start Full 108-Q Exam
          </button>
        </div>
      </div>

      {/* Module-by-Module Full Quiz Selector */}
      <div className="arena-module-exams-section">
        <h2 className="section-subheading">
          <Layers size={20} /> Module-by-Module Exam Decks
        </h2>
        <div className="module-exams-grid">
          {COURSE_MODULES.map((mod) => {
            const modQs = ALL_QUESTIONS.filter((q) => q.moduleId === mod.id);
            const modSolved = modQs.filter(
              (q) => userState.questionHistory?.[q.id]?.isCorrect
            ).length;

            return (
              <div key={mod.id} className="module-exam-pill-card">
                <div className="mod-exam-info">
                  <span
                    className="mod-exam-badge"
                    style={{ background: `${mod.color}22`, color: mod.color }}
                  >
                    Module {mod.id}
                  </span>
                  <h4>{mod.shortTitle}</h4>
                  <span className="mod-exam-meta">
                    {modSolved}/{modQs.length} Mastered • {mod.lessons.length}{" "}
                    Lessons
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-mod-start"
                  style={{ borderColor: mod.color, color: mod.color }}
                  onClick={() =>
                    onStartCustomQuiz(modQs, `${mod.title} — Full Quiz`, mod.color)
                  }
                >
                  <Play size={14} /> Quiz ({modQs.length})
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sololearn-Style Certificate Section */}
      <div className="certificate-section">
        <div className="cert-controls-header">
          <div>
            <h2 className="section-subheading">
              <Award size={20} /> Sololearn-Style Python Core Certificate
            </h2>
            <p className="arena-subtitle">
              Customize your name below. Your live mastery score and XP rank
              automatically appear on your certificate!
            </p>
          </div>
          <div className="cert-name-form">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
                onUpdateLearnerName(e.target.value);
              }}
              placeholder="Enter your full name..."
              className="cert-name-input"
            />
            <button
              type="button"
              className="btn-secondary"
              onClick={() => window.print()}
            >
              <Printer size={16} /> Print / Save PDF
            </button>
          </div>
        </div>

        <div className="sololearn-certificate">
          <div className="cert-decorative-corner top-left" />
          <div className="cert-decorative-corner bottom-right" />

          <div className="cert-inner">
            <div className="cert-brand-row">
              <div className="cert-logo-badge">
                <span>🐍 SoloPy</span>
              </div>
              <span className="cert-id">
                CERT-PYCORE-{100000 + userState.xp}
              </span>
            </div>

            <p className="cert-pre-title">CERTIFICATE OF ACHIEVEMENT</p>
            <h2 className="cert-course-name">Python Core — Complete Mastery</h2>
            <p className="cert-awarded-to">This certifies that</p>
            <h1 className="cert-recipient-name">
              {nameInput.trim() || "Python Developer"}
            </h1>
            <p className="cert-description">
              has demonstrated proficiency across the 10-Module Python Core
              curriculum covering Basic Concepts, Strings, Control Structures,
              Functions, Exceptions & Files, Data Structures, Functional
              Programming, OOP, Regular Expressions, and Pythonic Packaging.
            </p>

            <div className="cert-metrics-row">
              <div className="cert-metric">
                <span className="cm-label">Questions Mastered</span>
                <span className="cm-value">
                  {solvedCount} / {ALL_QUESTIONS.length} ({completionPct}%)
                </span>
              </div>
              <div className="cert-metric">
                <span className="cm-label">Total XP Earned</span>
                <span className="cm-value">{userState.xp} XP</span>
              </div>
              <div className="cert-metric">
                <span className="cm-label">Developer Rank</span>
                <span className="cm-value">
                  {currentRank.badge} {currentRank.title}
                </span>
              </div>
            </div>

            <div className="cert-footer-row">
              <div className="cert-sig">
                <div className="sig-line">SoloPy Curriculum Board</div>
                <span>Verified Interactive Assessment</span>
              </div>
              <div className="cert-seal">
                <Sparkles size={22} />
                <span>PYTHON 3 CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
