import React, { useState, useEffect, useMemo } from "react";
import {
  Terminal,
  Type,
  GitBranch,
  Boxes,
  FileWarning,
  Database,
  Sparkles,
  Cpu,
  SearchCode,
  PackageCheck,
  Flame,
  Zap,
  Heart,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  BookOpen,
  Compass,
  Award,
  CheckCircle2,
  Play,
  Code2,
  HelpCircle,
  Trophy,
  RotateCcw,
  Unlock,
  Lock,
  ChevronDown,
  ChevronUp,
  Bookmark
} from "lucide-react";
import {
  COURSE_MODULES,
  ALL_QUESTIONS,
  getRankForXp
} from "./data/questionsData";
import { LessonPlayer } from "./components/LessonPlayer";
import { QuestionBankView } from "./components/QuestionBankView";
import { PracticeArenaView } from "./components/PracticeArenaView";
import { soundFX } from "./utils/sound";

const STORAGE_KEY = "solopy_python_core_state_v1";

const MODULE_ICONS = {
  Terminal,
  Type,
  GitBranch,
  Boxes,
  FileWarning,
  Database,
  Sparkles,
  Cpu,
  SearchCode,
  PackageCheck
};

const DEFAULT_USER_STATE = {
  xp: 0,
  streak: 1,
  hearts: 5,
  unlimitedHearts: true,
  freeNavigation: true, // Let user jump to any module/lesson freely by default
  completedLessons: [], // array of lessonNumbers (1..102)
  questionHistory: {}, // { [qId]: { isCorrect, selectedOption, attempts } }
  bookmarks: [], // array of qIds
  learnerName: "Python Learner"
};

export default function App() {
  const [userState, setUserState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_USER_STATE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_USER_STATE;
  });

  const [activeTab, setActiveTab] = useState("learn"); // 'learn' | 'bank' | 'arena'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("solopy_theme") || "dark";
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSession, setActiveSession] = useState(null);
  const [collapsedModules, setCollapsedModules] = useState({});
  const [selectedModuleFilter, setSelectedModuleFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch {
      // ignore
    }
  }, [userState]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("solopy_theme", theme);
  }, [theme]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.enabled = next;
  };

  // Record an individual question answer
  const handleRecordAnswer = (questionId, isCorrect, selectedOption, earnedXp) => {
    setUserState((prev) => {
      const prevHist = prev.questionHistory[questionId] || { attempts: 0 };
      const nextHearts =
        !isCorrect && !prev.unlimitedHearts
          ? Math.max(0, prev.hearts - 1)
          : prev.hearts;

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        hearts: nextHearts,
        questionHistory: {
          ...prev.questionHistory,
          [questionId]: {
            isCorrect,
            selectedOption,
            attempts: prevHist.attempts + 1,
            updatedAt: Date.now()
          }
        }
      };
    });
  };

  // Mark a lesson complete
  const handleCompleteLesson = (lessonNumber) => {
    setUserState((prev) => {
      const alreadyDone = prev.completedLessons.includes(lessonNumber);
      return {
        ...prev,
        completedLessons: alreadyDone
          ? prev.completedLessons
          : [...prev.completedLessons, lessonNumber],
        xp: alreadyDone ? prev.xp : prev.xp + 10
      };
    });
  };

  const handleToggleBookmark = (questionId) => {
    soundFX.playClick();
    setUserState((prev) => {
      const exists = prev.bookmarks.includes(questionId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter((id) => id !== questionId)
          : [...prev.bookmarks, questionId]
      };
    });
  };

  const handleUpdateLearnerName = (name) => {
    setUserState((prev) => ({ ...prev, learnerName: name }));
  };

  // Start a specific lesson (1..102)
  const startLesson = (mod, lesson, showConceptFirst = true) => {
    soundFX.playClick();
    const enrichedQuestions = lesson.questions.map((q) => ({
      ...q,
      moduleId: mod.id,
      moduleTitle: mod.title,
      moduleColor: mod.color,
      lessonNumber: lesson.lessonNumber,
      lessonTitle: lesson.title,
      lessonType: lesson.type,
      conceptSummary: lesson.conceptSummary,
      conceptCode: lesson.conceptCode
    }));

    setActiveSession({
      mode: "lesson",
      title: `${lesson.lessonNumber}. ${lesson.title}`,
      subtitle: mod.title,
      moduleColor: mod.color,
      lessonNumber: lesson.lessonNumber,
      showConceptFirst,
      questions: enrichedQuestions
    });
  };

  // Start a full module quiz or custom practice deck
  const startCustomQuiz = (questions, title, color = "#10b981") => {
    soundFX.playClick();
    setActiveSession({
      mode: "practice",
      title,
      subtitle: "Interactive Quiz Session",
      moduleColor: color,
      lessonNumber: null,
      showConceptFirst: false,
      questions
    });
  };

  // Find the next sequential lesson after current activeSession.lessonNumber
  const handleNextLesson = useMemo(() => {
    if (!activeSession || !activeSession.lessonNumber) return null;
    const nextNum = activeSession.lessonNumber + 1;
    for (const mod of COURSE_MODULES) {
      for (const lesson of mod.lessons) {
        if (lesson.lessonNumber === nextNum) {
          return () => startLesson(mod, lesson, true);
        }
      }
    }
    return null;
  }, [activeSession]);

  // Compute Next Recommended Lesson for the Hero "Continue Learning" button
  const nextRecommended = useMemo(() => {
    for (const mod of COURSE_MODULES) {
      for (const lesson of mod.lessons) {
        if (!userState.completedLessons.includes(lesson.lessonNumber)) {
          return { mod, lesson };
        }
      }
    }
    return {
      mod: COURSE_MODULES[0],
      lesson: COURSE_MODULES[0].lessons[0]
    };
  }, [userState.completedLessons]);

  const solvedQuestionsCount = useMemo(() => {
    return Object.values(userState.questionHistory || {}).filter(
      (h) => h.isCorrect
    ).length;
  }, [userState.questionHistory]);

  const overallCoursePct = Math.round(
    (userState.completedLessons.length / 102) * 100
  );

  const { current: currentRank, next: nextRank } = getRankForXp(userState.xp);

  const toggleModuleCollapse = (modId) => {
    setCollapsedModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const handleResetProgress = () => {
    if (
      window.confirm(
        "Are you sure you want to reset your XP, completed lessons, and question history?"
      )
    ) {
      setUserState(DEFAULT_USER_STATE);
    }
  };

  const visibleModules =
    selectedModuleFilter === "all"
      ? COURSE_MODULES
      : COURSE_MODULES.filter((m) => m.id === Number(selectedModuleFilter));

  return (
    <div className="app-shell">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="navbar-inner">
          <div
            className="brand-logo"
            onClick={() => setActiveTab("learn")}
            role="button"
            tabIndex={0}
          >
            <div className="brand-icon-wrap">🐍</div>
            <div className="brand-text">
              <span className="brand-name">SoloPy</span>
              <span className="brand-tag">Python Core</span>
            </div>
          </div>

          <nav className="main-nav-tabs">
            <button
              type="button"
              className={`nav-tab-btn ${activeTab === "learn" ? "active" : ""}`}
              onClick={() => setActiveTab("learn")}
            >
              <Compass size={17} />
              <span>Learning Path</span>
              <span className="nav-pill-count">102</span>
            </button>

            <button
              type="button"
              className={`nav-tab-btn ${activeTab === "bank" ? "active" : ""}`}
              onClick={() => setActiveTab("bank")}
            >
              <BookOpen size={17} />
              <span>MCQ Bank</span>
              <span className="nav-pill-count">108</span>
            </button>

            <button
              type="button"
              className={`nav-tab-btn ${activeTab === "arena" ? "active" : ""}`}
              onClick={() => setActiveTab("arena")}
            >
              <Award size={17} />
              <span>Practice & Certificate</span>
            </button>
          </nav>

          <div className="navbar-stats-bar">
            <div className="stat-chip streak" title="Daily Streak">
              <Flame size={16} fill="#f97316" color="#f97316" />
              <span>{userState.streak}d</span>
            </div>

            <div className="stat-chip xp" title={`Rank: ${currentRank.title}`}>
              <Zap size={16} fill="#f59e0b" color="#f59e0b" />
              <span>{userState.xp} XP</span>
            </div>

            <button
              type="button"
              className="stat-chip hearts"
              onClick={() =>
                setUserState((p) => ({
                  ...p,
                  unlimitedHearts: !p.unlimitedHearts,
                  hearts: 5
                }))
              }
              title="Click to toggle Unlimited Hearts vs 5 Hearts"
            >
              <Heart size={16} fill="#ef4444" color="#ef4444" />
              <span>{userState.unlimitedHearts ? "∞" : userState.hearts}</span>
            </button>

            <button
              type="button"
              className="nav-icon-btn"
              onClick={toggleSound}
              title={soundEnabled ? "Sound Effects On" : "Sound Effects Muted"}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <button
              type="button"
              className="nav-icon-btn"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              title="Toggle Dark / Light Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="main-workspace">
        {activeTab === "learn" && (
          <div className="learn-layout">
            {/* Left / Center Column: Sololearn Module & Lesson Tree */}
            <div className="learn-path-column">
              {/* Hero Course Banner */}
              <div className="course-hero-banner">
                <div className="hero-banner-left">
                  <div className="hero-course-pill">
                    <span>PYTHON CORE CERTIFICATION COURSE</span>
                  </div>
                  <h1>Master Python Core — 10 Modules, 108 Interactive MCQs</h1>
                  <p>
                    Learn step-by-step with Sololearn-style bite-sized concept
                    cards, code examples, module quizzes, and hands-on code
                    projects.
                  </p>
                  <div className="hero-cta-row">
                    <button
                      type="button"
                      className="btn-hero-continue"
                      onClick={() =>
                        startLesson(
                          nextRecommended.mod,
                          nextRecommended.lesson,
                          true
                        )
                      }
                    >
                      <Play size={18} fill="currentColor" />
                      <span>
                        {userState.completedLessons.length === 0
                          ? "Start Lesson 1: Welcome to Python!"
                          : `Continue: ${nextRecommended.lesson.lessonNumber}. ${nextRecommended.lesson.title}`}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="btn-hero-secondary"
                      onClick={() =>
                        startCustomQuiz(
                          [...ALL_QUESTIONS]
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 10),
                          "Quick 10-Q Warmup",
                          "#3b82f6"
                        )
                      }
                    >
                      <Zap size={16} /> Quick 10-Q Quiz
                    </button>
                  </div>
                </div>

                <div className="hero-banner-right">
                  <div className="hero-radial-progress">
                    <div className="radial-inner">
                      <span className="radial-pct">{overallCoursePct}%</span>
                      <span className="radial-label">Course Path</span>
                    </div>
                  </div>
                  <div className="hero-mini-metrics">
                    <div>
                      <strong>{userState.completedLessons.length}/102</strong>{" "}
                      Lessons
                    </div>
                    <div>
                      <strong>{solvedQuestionsCount}/108</strong> MCQs Solved
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Filter Bar */}
              <div className="module-pill-scroller">
                <button
                  type="button"
                  className={`mod-filter-chip ${
                    selectedModuleFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => setSelectedModuleFilter("all")}
                >
                  All 10 Modules
                </button>
                {COURSE_MODULES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={`mod-filter-chip ${
                      Number(selectedModuleFilter) === m.id ? "active" : ""
                    }`}
                    style={
                      Number(selectedModuleFilter) === m.id
                        ? { background: m.color, borderColor: m.color, color: "#fff" }
                        : {}
                    }
                    onClick={() => setSelectedModuleFilter(m.id)}
                  >
                    M{m.id}: {m.shortTitle}
                  </button>
                ))}
              </div>

              {/* Modules List */}
              <div className="modules-stack">
                {visibleModules.map((mod) => {
                  const ModIcon = MODULE_ICONS[mod.icon] || Terminal;
                  const modLessonsCount = mod.lessons.length;
                  const modCompletedLessons = mod.lessons.filter((l) =>
                    userState.completedLessons.includes(l.lessonNumber)
                  ).length;
                  const modProgressPct = Math.round(
                    (modCompletedLessons / modLessonsCount) * 100
                  );
                  const isCollapsed = !!collapsedModules[mod.id];
                  const modAllQuestions = ALL_QUESTIONS.filter(
                    (q) => q.moduleId === mod.id
                  );

                  return (
                    <section key={mod.id} className="module-card">
                      {/* Module Header */}
                      <div
                        className="module-card-header"
                        style={{ borderTop: `4px solid ${mod.color}` }}
                      >
                        <div className="module-header-top">
                          <div className="module-title-group">
                            <div
                              className="module-icon-badge"
                              style={{ background: mod.gradient }}
                            >
                              <ModIcon size={24} color="#fff" />
                            </div>
                            <div>
                              <div className="module-eyebrow">
                                MODULE {mod.id} OF 10 • {modLessonsCount} LESSONS
                                • {modAllQuestions.length} QUESTIONS
                              </div>
                              <h2 className="module-name">{mod.title}</h2>
                              <p className="module-desc">{mod.description}</p>
                            </div>
                          </div>

                          <div className="module-header-actions">
                            <button
                              type="button"
                              className="btn-module-quiz"
                              style={{
                                background: `${mod.color}18`,
                                color: mod.color,
                                borderColor: `${mod.color}40`
                              }}
                              onClick={() =>
                                startCustomQuiz(
                                  modAllQuestions,
                                  `${mod.title} — Complete Quiz (${modAllQuestions.length} Qs)`,
                                  mod.color
                                )
                              }
                            >
                              <Play size={14} fill="currentColor" />
                              <span>Quiz Module ({modAllQuestions.length} Qs)</span>
                            </button>

                            <button
                              type="button"
                              className="btn-collapse-toggle"
                              onClick={() => toggleModuleCollapse(mod.id)}
                              title={isCollapsed ? "Expand Module" : "Collapse Module"}
                            >
                              {isCollapsed ? (
                                <ChevronDown size={20} />
                              ) : (
                                <ChevronUp size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="module-progress-row">
                          <div className="module-progress-bar">
                            <div
                              className="module-progress-fill"
                              style={{
                                width: `${modProgressPct}%`,
                                background: mod.gradient
                              }}
                            />
                          </div>
                          <span className="module-progress-label">
                            {modCompletedLessons}/{modLessonsCount} completed (
                            {modProgressPct}%)
                          </span>
                        </div>
                      </div>

                      {/* Sololearn Lesson Nodes Grid */}
                      {!isCollapsed && (
                        <div className="lessons-node-grid">
                          {mod.lessons.map((lesson) => {
                            const isCompleted =
                              userState.completedLessons.includes(
                                lesson.lessonNumber
                              );
                            const isCurrentNext =
                              nextRecommended.lesson.lessonNumber ===
                              lesson.lessonNumber;
                            const isLocked =
                              !userState.freeNavigation &&
                              !isCompleted &&
                              !isCurrentNext &&
                              lesson.lessonNumber > 1 &&
                              !userState.completedLessons.includes(
                                lesson.lessonNumber - 1
                              );

                            const allLessonQsCorrect = lesson.questions.every(
                              (q) => userState.questionHistory?.[q.id]?.isCorrect
                            );

                            return (
                              <div
                                key={lesson.lessonNumber}
                                className={`lesson-node-card ${
                                  isCompleted ? "completed" : ""
                                } ${isCurrentNext ? "current-next" : ""} ${
                                  lesson.type === "quiz"
                                    ? "node-quiz"
                                    : lesson.type === "project"
                                    ? "node-project"
                                    : ""
                                } ${isLocked ? "locked" : ""}`}
                                onClick={() => {
                                  if (!isLocked) {
                                    startLesson(mod, lesson, true);
                                  }
                                }}
                              >
                                <div className="lesson-node-left">
                                  <div
                                    className="lesson-status-circle"
                                    style={
                                      isCompleted || allLessonQsCorrect
                                        ? {
                                            background: mod.color,
                                            borderColor: mod.color,
                                            color: "#fff"
                                          }
                                        : isCurrentNext
                                        ? {
                                            borderColor: mod.color,
                                            color: mod.color
                                          }
                                        : {}
                                    }
                                  >
                                    {isLocked ? (
                                      <Lock size={15} />
                                    ) : isCompleted || allLessonQsCorrect ? (
                                      <CheckCircle2 size={18} />
                                    ) : lesson.type === "quiz" ? (
                                      <Trophy size={16} />
                                    ) : lesson.type === "project" ? (
                                      <Code2 size={16} />
                                    ) : (
                                      <span>{lesson.lessonNumber}</span>
                                    )}
                                  </div>

                                  <div className="lesson-node-info">
                                    <div className="lesson-node-topline">
                                      <span className="lesson-num-tag">
                                        #{lesson.lessonNumber}
                                      </span>
                                      {lesson.type === "quiz" && (
                                        <span className="node-type-badge quiz">
                                          Milestone Quiz
                                        </span>
                                      )}
                                      {lesson.type === "project" && (
                                        <span className="node-type-badge project">
                                          Code Project
                                        </span>
                                      )}
                                      <span className="lesson-q-ids">
                                        {lesson.questions
                                          .map((q) => q.id)
                                          .join(", ")}
                                      </span>
                                    </div>
                                    <h3 className="lesson-node-title">
                                      {lesson.title}
                                    </h3>
                                  </div>
                                </div>

                                <div className="lesson-node-actions">
                                  <button
                                    type="button"
                                    className="btn-node-quiz-direct"
                                    title="Jump straight to MCQ"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (!isLocked) {
                                        startLesson(mod, lesson, false);
                                      }
                                    }}
                                  >
                                    <HelpCircle size={14} />
                                    <span>MCQ</span>
                                  </button>

                                  <span
                                    className="btn-node-learn"
                                    style={{ color: mod.color }}
                                  >
                                    <Play size={14} fill="currentColor" />
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>

            {/* Right Sidebar: Learner Profile, Rank & Quick Controls */}
            <aside className="learn-sidebar">
              {/* Rank & XP Card */}
              <div className="sidebar-card rank-card">
                <div className="rank-header">
                  <div className="rank-avatar">{currentRank.badge}</div>
                  <div>
                    <span className="rank-level-tag">
                      LEVEL {currentRank.level}
                    </span>
                    <h3 className="rank-title">{currentRank.title}</h3>
                  </div>
                </div>

                <div className="xp-progress-block">
                  <div className="xp-labels">
                    <span>{userState.xp} XP</span>
                    <span>
                      {nextRank
                        ? `${nextRank.minXp} XP (${nextRank.title})`
                        : "Max Rank Reached!"}
                    </span>
                  </div>
                  <div className="xp-bar-track">
                    <div
                      className="xp-bar-fill"
                      style={{
                        width: nextRank
                          ? `${Math.min(
                              100,
                              Math.round(
                                ((userState.xp - currentRank.minXp) /
                                  (nextRank.minXp - currentRank.minXp)) *
                                  100
                              )
                            )}%`
                          : "100%"
                      }}
                    />
                  </div>
                </div>

                <div className="sidebar-stats-mini-grid">
                  <div className="mini-stat">
                    <span className="ms-val">{solvedQuestionsCount}/108</span>
                    <span className="ms-lbl">MCQs Mastered</span>
                  </div>
                  <div className="mini-stat">
                    <span className="ms-val">
                      {userState.completedLessons.length}/102
                    </span>
                    <span className="ms-lbl">Lessons Done</span>
                  </div>
                  <div className="mini-stat">
                    <span className="ms-val">
                      {userState.bookmarks?.length || 0}
                    </span>
                    <span className="ms-lbl">Bookmarked</span>
                  </div>
                </div>
              </div>

              {/* Navigation Mode Settings Card */}
              <div className="sidebar-card settings-card">
                <h4>Learning Preferences</h4>
                <div className="setting-toggle-row">
                  <div>
                    <strong>Open Navigation Mode</strong>
                    <p>Jump to any lesson or module without lock restrictions</p>
                  </div>
                  <button
                    type="button"
                    className={`pill-switch ${
                      userState.freeNavigation ? "on" : "off"
                    }`}
                    onClick={() =>
                      setUserState((p) => ({
                        ...p,
                        freeNavigation: !p.freeNavigation
                      }))
                    }
                  >
                    {userState.freeNavigation ? (
                      <>
                        <Unlock size={13} /> Unlocked
                      </>
                    ) : (
                      <>
                        <Lock size={13} /> Strict
                      </>
                    )}
                  </button>
                </div>

                <div className="setting-toggle-row">
                  <div>
                    <strong>Unlimited Hearts</strong>
                    <p>Learn stress-free without losing lives on mistakes</p>
                  </div>
                  <button
                    type="button"
                    className={`pill-switch ${
                      userState.unlimitedHearts ? "on" : "off"
                    }`}
                    onClick={() =>
                      setUserState((p) => ({
                        ...p,
                        unlimitedHearts: !p.unlimitedHearts,
                        hearts: 5
                      }))
                    }
                  >
                    {userState.unlimitedHearts ? "∞ Active" : "5 Hearts"}
                  </button>
                </div>
              </div>

              {/* Quick Practice Launcher */}
              <div className="sidebar-card quick-links-card">
                <h4>Quick Challenges</h4>
                <button
                  type="button"
                  className="sidebar-action-btn"
                  onClick={() =>
                    startCustomQuiz(
                      ALL_QUESTIONS.filter((q) => q.lessonType === "quiz"),
                      "All 10 Module Quizzes",
                      "#8b5cf6"
                    )
                  }
                >
                  <Trophy size={16} color="#8b5cf6" />
                  <span>All 10 Module Quizzes</span>
                </button>

                <button
                  type="button"
                  className="sidebar-action-btn"
                  onClick={() =>
                    startCustomQuiz(
                      ALL_QUESTIONS.filter((q) => q.lessonType === "project"),
                      "All 9 Code Projects",
                      "#10b981"
                    )
                  }
                >
                  <Code2 size={16} color="#10b981" />
                  <span>All 9 Code Projects</span>
                </button>

                {userState.bookmarks?.length > 0 && (
                  <button
                    type="button"
                    className="sidebar-action-btn"
                    onClick={() =>
                      startCustomQuiz(
                        ALL_QUESTIONS.filter((q) =>
                          userState.bookmarks.includes(q.id)
                        ),
                        "Bookmarked Questions",
                        "#f59e0b"
                      )
                    }
                  >
                    <Bookmark size={16} color="#f59e0b" />
                    <span>
                      Practice Bookmarks ({userState.bookmarks.length})
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  className="sidebar-reset-btn"
                  onClick={handleResetProgress}
                >
                  <RotateCcw size={14} /> Reset My Progress
                </button>
              </div>
            </aside>
          </div>
        )}

        {activeTab === "bank" && (
          <QuestionBankView
            userState={userState}
            onToggleBookmark={handleToggleBookmark}
            onStartCustomQuiz={(qs, title) =>
              startCustomQuiz(qs, title, "#3b82f6")
            }
          />
        )}

        {activeTab === "arena" && (
          <PracticeArenaView
            userState={userState}
            onUpdateLearnerName={handleUpdateLearnerName}
            onStartCustomQuiz={startCustomQuiz}
          />
        )}
      </div>

      {/* Interactive Sololearn Lesson & Quiz Modal */}
      {activeSession && (
        <LessonPlayer
          session={activeSession}
          userState={userState}
          onRecordAnswer={handleRecordAnswer}
          onCompleteLesson={handleCompleteLesson}
          onToggleBookmark={handleToggleBookmark}
          onNextLesson={handleNextLesson}
          onClose={() => setActiveSession(null)}
        />
      )}
    </div>
  );
}
