import React, { useState, useEffect } from 'react';
import { Dumbbell, CalendarDays, Target, TrendingUp, Users, Globe, Shield, Scale, Radio, Sun, Moon, Footprints } from 'lucide-react';
import { UserProfile, Language, WorkoutDuration, ProgressLogEntry } from './types';
import { PROFILES } from './data/profiles';
import { EXERCISES } from './data/exercises';
import { MEAL_PLAN_14_DAYS } from './data/meals';
import { MAMA_LAAZIZA_15_DAYS_MEALS } from './data/mamaMeals';
import { TRANSLATIONS } from './utils/translations';
import { ProfileSelector } from './components/ProfileSelector';
import { WorkoutPlayer } from './components/WorkoutPlayer';
import { MealPlanner } from './components/MealPlanner';
import { GoalCalculator } from './components/GoalCalculator';
import { ProgressTracker } from './components/ProgressTracker';
import { MilitaryCalisthenics } from './components/MilitaryCalisthenics';
import { PWAInstallButton, PWAInstallBanner } from './components/PWAInstallButton';
import { MamaLaazizaSpecialPlan } from './components/MamaLaazizaSpecialPlan';

// Pre-seeded initial logs for each profile
const INITIAL_LOGS: Record<string, ProgressLogEntry[]> = {
  homme_44: [
    { id: 'h1', date: '2026-09-01', weight: 102.0, waistCircumference: 112, notes: 'Début du programme, reprise douce', completedWorkoutMin: 15 },
    { id: 'h2', date: '2026-09-15', weight: 100.2, waistCircumference: 110, notes: 'Moins de fringales le soir', completedWorkoutMin: 15 },
    { id: 'h3', date: '2026-10-01', weight: 98.4, waistCircumference: 107, notes: 'Énergie en nette hausse, souffle amélioré', completedWorkoutMin: 15 },
  ],
  femme_65: [
    { id: 'f1', date: '2026-09-01', weight: 64.0, waistCircumference: 88, notes: 'Démarrage régime sans sel/sucre et sardines', completedWorkoutMin: 15 },
    { id: 'f2', date: '2026-09-20', weight: 63.1, waistCircumference: 86.5, notes: 'Tension artérielle stable', completedWorkoutMin: 15 },
    { id: 'f3', date: '2026-10-05', weight: 62.4, waistCircumference: 85, notes: 'Articulations souples et sensation de légèreté', completedWorkoutMin: 15 },
  ],
  femme_36: [
    { id: 's1', date: '2026-09-01', weight: 80.0, waistCircumference: 96, notes: 'Marche 30min maintenue, genoux surveillés', completedWorkoutMin: 30 },
    { id: 's2', date: '2026-09-18', weight: 78.5, waistCircumference: 93, notes: 'Mouvements assis très confortables', completedWorkoutMin: 30 },
    { id: 's3', date: '2026-10-06', weight: 77.2, waistCircumference: 91, notes: 'Moins de douleurs rotuliennes', completedWorkoutMin: 30 },
  ],
};

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('fitmaghrib_lang') as Language) || 'darija';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('fitmaghrib_theme') as 'light' | 'dark') || 'light';
  });

  const [activeTab, setActiveTab] = useState<'profiles' | 'workout' | 'military' | 'diet' | 'goals' | 'progress'>('profiles');

  const [activeProfileId, setActiveProfileId] = useState<string>(() => {
    return localStorage.getItem('fitmaghrib_profile_id') || 'homme_44';
  });

  const [selectedDuration, setSelectedDuration] = useState<WorkoutDuration>(15);
  const [mamaWorkoutSubView, setMamaWorkoutSubView] = useState<'exercises' | 'walking'>('exercises');

  const [logsByProfile, setLogsByProfile] = useState<Record<string, ProgressLogEntry[]>>(() => {
    const saved = localStorage.getItem('fitmaghrib_logs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_LOGS;
      }
    }
    return INITIAL_LOGS;
  });

  const activeProfile = PROFILES.find((p) => p.id === activeProfileId) || PROFILES[0];
  const t = TRANSLATIONS[lang];

  // Sync theme
  useEffect(() => {
    localStorage.setItem('fitmaghrib_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync lang direction and storage
  useEffect(() => {
    localStorage.setItem('fitmaghrib_lang', lang);
    document.documentElement.dir = lang === 'fr' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'ar';
  }, [lang]);

  // Sync profile storage & avoid military tab for Mama Laaziza and Kaoutar
  useEffect(() => {
    localStorage.setItem('fitmaghrib_profile_id', activeProfileId);
    setSelectedDuration(activeProfile.recommendedDuration);
    if (activeProfileId !== 'homme_44' && activeTab === 'military') {
      setActiveTab('workout');
    }
  }, [activeProfileId, activeProfile, activeTab]);

  // Sync logs storage
  useEffect(() => {
    localStorage.setItem('fitmaghrib_logs', JSON.stringify(logsByProfile));
  }, [logsByProfile]);

  const handleSelectProfile = (profile: UserProfile) => {
    setActiveProfileId(profile.id);
    if (profile.id !== 'homme_44' && activeTab === 'military') {
      setActiveTab('workout');
    }
  };

  const handleAddLog = (newLog: ProgressLogEntry) => {
    setLogsByProfile((prev) => ({
      ...prev,
      [activeProfile.id]: [newLog, ...(prev[activeProfile.id] || [])],
    }));
  };

  const handleDeleteLog = (id: string) => {
    setLogsByProfile((prev) => ({
      ...prev,
      [activeProfile.id]: (prev[activeProfile.id] || []).filter((l) => l.id !== id),
    }));
  };

  // Filter exercises adapted for the active profile
  const filteredExercises = EXERCISES.filter((ex) => {
    if (activeProfile.id === 'femme_36') {
      // Must be 100% knee safe!
      return ex.kneeSafe;
    }
    if (activeProfile.id === 'femme_65') {
      // Must be senior friendly & safe
      return ex.seniorFriendly;
    }
    return true;
  });

  // Take subset according to chosen duration
  const exerciseCount = selectedDuration === 15 ? 4 : selectedDuration === 30 ? 6 : 8;
  const currentSessionExercises = filteredExercises.slice(0, Math.min(exerciseCount, filteredExercises.length));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden w-full max-w-full">
      {/* =========================================================================
          TOP BAR CONTRACT:
          Mobile: Clean brand + actions row, followed by full-width 3-language segmented bar.
          Desktop: Single-line brand + nav links + actions (theme, PWA, 3 languages).
          Zero horizontal overflow, 100% visible on all smartphone viewports.
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 min-w-0 w-full">
          {/* Zone 1: Brand Wordmark (single line, no subtitle) with custom professional logo */}
          <div className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0">
            <img
              src="/logo.png"
              alt="FitMaghrib Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl shadow-md ring-1 ring-emerald-500/20 object-cover shrink-0"
            />
            <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 dark:text-white font-mono flex items-center gap-1">
              <span>FitMaghrib</span>
              <span className="text-[9px] sm:text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/80 text-emerald-800 dark:text-emerald-200 px-1.5 py-0.5 rounded-md">PRO</span>
            </span>
          </div>

          {/* Zone 2: 4-5 Navigation Links for Tablet/Desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => setActiveTab('profiles')}
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'profiles' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_profiles}
            </button>

            <button
              onClick={() => setActiveTab('workout')}
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'workout' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_workout}
            </button>

            {/* Commando 3skri: Only visible for Badr (homme_44) */}
            {activeProfile.id === 'homme_44' && (
              <button
                onClick={() => setActiveTab('military')}
                className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-bold ${
                  activeTab === 'military' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400' : 'border-transparent text-emerald-800 dark:text-emerald-400'
                }`}
              >
                🎖️ {t.nav_military}
              </button>
            )}

            <button
              onClick={() => setActiveTab('diet')}
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'diet' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_diet}
            </button>

            <button
              onClick={() => setActiveTab('goals')}
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'goals' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_goals}
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className={`hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'progress' ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_progress}
            </button>
          </nav>

          {/* Zone 3: Actions (Theme Toggle + Language Switcher on Desktop + PWA Install) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Desktop Language Switcher (hidden on mobile, mobile has full 3-button bar below) */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs shrink-0">
              <button
                onClick={() => setLang('darija')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'darija' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                دارجة
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'fr' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'ar' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                عربية
              </button>
            </div>

            {/* Dark Mode Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm cursor-pointer active:scale-95"
              title={theme === 'dark' ? (lang === 'fr' ? 'Mode clair' : 'الوضع النهاري') : (lang === 'fr' ? 'Mode sombre' : 'الوضع المظلم')}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline text-[11px] font-bold">{lang === 'fr' ? 'Clair' : 'نهاري'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200 shrink-0" />
                  <span className="hidden sm:inline text-[11px] font-bold">{lang === 'fr' ? 'Sombre' : 'مظلم'}</span>
                </>
              )}
            </button>

            {/* PWA In-App Install Button */}
            <PWAInstallButton lang={lang} />
          </div>
        </div>

        {/* Mobile Dedicated 3-Language Segmented Bar (sm:hidden) */}
        {/* Guarantees 100% visibility of all 3 languages on any smartphone without clipping or horizontal scroll */}
        <div className="sm:hidden w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/90 dark:bg-slate-850/90 px-2.5 py-1.5">
          <div className="grid grid-cols-3 gap-1.5 w-full max-w-full">
            <button
              onClick={() => setLang('darija')}
              className={`py-1.5 px-1 rounded-xl text-xs font-black transition-all text-center flex items-center justify-center gap-1 ${
                lang === 'darija'
                  ? 'bg-emerald-600 text-white shadow-md ring-1 ring-emerald-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>🇲🇦</span>
              <span>الدارجة</span>
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`py-1.5 px-1 rounded-xl text-xs font-black transition-all text-center flex items-center justify-center gap-1 ${
                lang === 'fr'
                  ? 'bg-emerald-600 text-white shadow-md ring-1 ring-emerald-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>🇫🇷</span>
              <span>Français</span>
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`py-1.5 px-1 rounded-xl text-xs font-black transition-all text-center flex items-center justify-center gap-1 ${
                lang === 'ar'
                  ? 'bg-emerald-600 text-white shadow-md ring-1 ring-emerald-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>🇸🇦</span>
              <span>العربية</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 overflow-x-hidden min-w-0">
        {/* Quick Profile Kicker Banner */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-500 dark:text-slate-400 block">{t.active_profile} :</span>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {activeProfile.id === 'homme_44' && t.profile_1_title}
                  {activeProfile.id === 'femme_65' && t.profile_2_title}
                  {activeProfile.id === 'femme_36' && t.profile_3_title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold">
                  <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'}</span>
                  <span className="font-mono text-emerald-950 dark:text-emerald-200 font-black">{activeProfile.weight} {t.kg}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {activeProfile.id === 'femme_65' && (
              <button
                onClick={() => {
                  setActiveTab('workout');
                  setMamaWorkoutSubView('walking');
                }}
                className="text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/50 hover:bg-amber-200 dark:hover:bg-amber-900/70 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-700/60 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Radio className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 animate-pulse" />
                <span>{lang === 'darija' || lang === 'ar' ? '📻 راديو محمد السادس (القرآن)' : '📻 Radio Mohammed VI (Coran)'}</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('profiles')}
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors"
            >
              {t.switch_profile}
            </button>
          </div>
        </section>

        {/* Tab 1: Profiles */}
        {activeTab === 'profiles' && (
          <section className="space-y-6">
            <ProfileSelector
              profiles={PROFILES}
              activeProfile={activeProfile}
              onSelectProfile={handleSelectProfile}
              lang={lang}
            />
          </section>
        )}

        {/* Tab 2: Workout (15 / 30 / 45 min) & Mama Laaziza Sport + Marche Plan */}
        {activeTab === 'workout' && (
          <section className="space-y-6">
            {/* If active profile is Mama Laaziza: Provide dual switcher between Sport (Exercices Doux) & Marche 1h30 + Stabilisation */}
            {activeProfile.id === 'femme_65' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-2 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-2">
                <button
                  onClick={() => setMamaWorkoutSubView('exercises')}
                  className={`w-full sm:flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    mamaWorkoutSubView === 'exercises'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Dumbbell className="w-4 h-4 shrink-0" />
                  <span>{lang === 'darija' || lang === 'ar' ? '🏋️‍♀️ حركات رياضية في البيت (15/30 دقيقة)' : '🏋️‍♀️ Exercices Maison Doux'}</span>
                </button>
                <button
                  onClick={() => setMamaWorkoutSubView('walking')}
                  className={`w-full sm:flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    mamaWorkoutSubView === 'walking'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Footprints className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>{lang === 'darija' || lang === 'ar' ? '🚶‍♀️ تنظيم المشي (1h30) وتثبيت 64kg والراديو' : '🚶‍♀️ Marche 1h30, Stabilisation & Radio'}</span>
                </button>
              </div>
            )}

            {activeProfile.id === 'femme_65' && mamaWorkoutSubView === 'walking' ? (
              <MamaLaazizaSpecialPlan
                profile={activeProfile}
                lang={lang}
                onNavigateToDiet={() => setActiveTab('diet')}
              />
            ) : (
              <>
                {/* Duration Selector Strip */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeProfile.id === 'femme_65'
                        ? (lang === 'darija' || lang === 'ar' ? 'حركات رياضية خاصة بماما لعزيزة (تليين المفاصل والعظام)' : 'Exercices Maison Doux - Mama Laaziza')
                        : t.workout_title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {activeProfile.id === 'femme_65'
                        ? (lang === 'darija' || lang === 'ar' ? 'تمارين خفيفة وآمنة 100% لكبار السن مع كرسي وحائط للحفاظ على الرشاقة والنشاط' : 'Mouvements doux sans impact, sécurisés pour préserver les articulations et la vitalité')
                        : t.workout_subtitle}
                    </p>
                  </div>

                  {/* 15 / 30 / 45 min buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
                      {t.choose_duration}
                    </span>
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                      <button
                        onClick={() => setSelectedDuration(15)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 15
                            ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        15 min
                      </button>
                      <button
                        onClick={() => setSelectedDuration(30)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 30
                            ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        30 min
                      </button>
                      <button
                        onClick={() => setSelectedDuration(45)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 45
                            ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        45 min
                      </button>
                    </div>
                  </div>
                </div>

                {/* Workout Player with Animated GIF simulation, YouTube link, and MP3 music below */}
                <WorkoutPlayer
                  exercises={currentSessionExercises}
                  lang={lang}
                  selectedDuration={selectedDuration}
                  activeProfileId={activeProfile.id}
                />
              </>
            )}
          </section>
        )}

        {/* Tab: Military Calisthenics Bootcamp (Exclusively for Badr / homme_44) */}
        {activeTab === 'military' && activeProfile.id === 'homme_44' && (
          <section className="space-y-6">
            <MilitaryCalisthenics
              profile={activeProfile}
              lang={lang}
            />
          </section>
        )}

        {/* Tab 3: Diet Plan (15 Days for Mama Laaziza, 14 Days for others) */}
        {activeTab === 'diet' && (
          <section className="space-y-6">
            <MealPlanner
              mealPlans={activeProfile.id === 'femme_65' ? MAMA_LAAZIZA_15_DAYS_MEALS : MEAL_PLAN_14_DAYS}
              lang={lang}
              activeProfile={activeProfile}
            />
          </section>
        )}

        {/* Tab 4: Goals & Projections */}
        {activeTab === 'goals' && (
          <section className="space-y-6">
            <GoalCalculator
              profile={activeProfile}
              lang={lang}
              onSelectDuration={(dur) => {
                setSelectedDuration(dur);
                setActiveTab('workout');
              }}
              onNavigateToWorkout={() => {
                setActiveTab('workout');
              }}
            />
          </section>
        )}

        {/* Tab 5: Progression Log */}
        {activeTab === 'progress' && (
          <section className="space-y-6">
            <ProgressTracker
              profile={activeProfile}
              lang={lang}
              logs={logsByProfile[activeProfile.id] || []}
              onAddLog={handleAddLog}
              onDeleteLog={handleDeleteLog}
            />
          </section>
        )}
      </main>

      {/* Mobile Bottom Tab Bar (Ergonomic Thumb Zone) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg">
        <div className={`grid ${activeProfile.id === 'homme_44' ? 'grid-cols-6' : 'grid-cols-5'} items-center h-15 px-0.5 max-w-full overflow-hidden w-full`}>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'profiles' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'بروفيل' : 'Profils'}</span>
          </button>

          <button
            onClick={() => setActiveTab('workout')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'workout' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Dumbbell className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">
              {lang === 'darija' ? 'حركات' : lang === 'ar' ? 'رياضة' : 'Sport'}
            </span>
          </button>

          {/* Commando 3skri: Only visible for Badr (homme_44) */}
          {activeProfile.id === 'homme_44' && (
            <button
              onClick={() => setActiveTab('military')}
              className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
                activeTab === 'military' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Shield className="w-4 h-4 shrink-0" />
              <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'عسكري' : 'Commando'}</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('diet')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'diet' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <CalendarDays className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'ماكلة' : 'Repas'}</span>
          </button>

          <button
            onClick={() => setActiveTab('goals')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'goals' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Target className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'الهدف' : 'Objectif'}</span>
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'progress' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'ميزان' : 'Suivi'}</span>
          </button>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12 pb-24 md:pb-6 text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">FitMaghrib PRO</span>
            <span>·</span>
            <span>Programme de Perte de Poids & Mouvements Maison</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 dark:text-slate-500">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'fr' ? 'Mode clair' : 'الوضع النهاري (Clair)'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>{lang === 'fr' ? 'Mode sombre' : 'الوضع المظلم (Sombre)'}</span>
                </>
              )}
            </button>
            <span>Darija / Français / العربية</span>
            <span>·</span>
            <span>100% Mobile Ready</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating PWA Install Banner */}
      <PWAInstallBanner lang={lang} />
    </div>
  );
}
