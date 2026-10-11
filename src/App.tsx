import React, { useState, useEffect } from 'react';
import { Dumbbell, CalendarDays, Target, TrendingUp, Users, Database, Globe, Shield, Scale } from 'lucide-react';
import { UserProfile, Language, WorkoutDuration, ProgressLogEntry } from './types';
import { PROFILES } from './data/profiles';
import { EXERCISES } from './data/exercises';
import { MEAL_PLAN_14_DAYS } from './data/meals';
import { TRANSLATIONS } from './utils/translations';
import { ProfileSelector } from './components/ProfileSelector';
import { WorkoutPlayer } from './components/WorkoutPlayer';
import { MealPlanner } from './components/MealPlanner';
import { GoalCalculator } from './components/GoalCalculator';
import { ProgressTracker } from './components/ProgressTracker';
import { SupabaseSync } from './components/SupabaseSync';
import { MilitaryCalisthenics } from './components/MilitaryCalisthenics';
import { PWAInstallButton } from './components/PWAInstallButton';
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

  const [activeTab, setActiveTab] = useState<'profiles' | 'workout' | 'military' | 'diet' | 'goals' | 'progress' | 'supabase'>('profiles');

  const [activeProfileId, setActiveProfileId] = useState<string>(() => {
    return localStorage.getItem('fitmaghrib_profile_id') || 'homme_44';
  });

  const [selectedDuration, setSelectedDuration] = useState<WorkoutDuration>(15);

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

  // Sync lang direction and storage
  useEffect(() => {
    localStorage.setItem('fitmaghrib_lang', lang);
    document.documentElement.dir = lang === 'fr' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'ar';
  }, [lang]);

  // Sync profile storage
  useEffect(() => {
    localStorage.setItem('fitmaghrib_profile_id', activeProfileId);
    setSelectedDuration(activeProfile.recommendedDuration);
  }, [activeProfileId, activeProfile]);

  // Sync logs storage
  useEffect(() => {
    localStorage.setItem('fitmaghrib_logs', JSON.stringify(logsByProfile));
  }, [logsByProfile]);

  const handleSelectProfile = (profile: UserProfile) => {
    setActiveProfileId(profile.id);
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* =========================================================================
          TOP BAR CONTRACT:
          [Brand title, one line] — [4–5 nav links, 1–2 word labels, single-line] — [1 primary action]
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4 md:gap-8 min-w-0">
          {/* Zone 1: Brand Wordmark (single line, no subtitle) with custom professional logo */}
          <div className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0">
            <img
              src="/icon.svg"
              alt="FitMaghrib Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-md ring-1 ring-emerald-500/20 object-contain bg-emerald-950 shrink-0"
            />
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-mono flex items-center gap-1">
              <span>FitMaghrib</span>
              <span className="text-[9px] sm:text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-md">PRO</span>
            </span>
          </div>

          {/* Zone 2: 4-5 Navigation Links (1-2 word labels, single line) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('profiles')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'profiles' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_profiles}
            </button>

            <button
              onClick={() => setActiveTab('workout')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'workout' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_workout}
            </button>

            <button
              onClick={() => setActiveTab('military')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-bold ${
                activeTab === 'military' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-emerald-800'
              }`}
            >
              🎖️ {t.nav_military}
            </button>

            <button
              onClick={() => setActiveTab('diet')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'diet' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_diet}
            </button>

            <button
              onClick={() => setActiveTab('goals')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'goals' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_goals}
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'progress' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_progress}
            </button>

            <button
              onClick={() => setActiveTab('supabase')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'supabase' ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent'
              }`}
            >
              {t.nav_supabase}
            </button>
          </nav>

          {/* Zone 3: Actions (PWA Install Button + Language Switcher) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* PWA In-App Install Button */}
            <PWAInstallButton lang={lang} />

            <div className="flex items-center p-0.5 sm:p-1 bg-slate-100 rounded-xl text-xs shrink-0">
              <button
                onClick={() => setLang('darija')}
                className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                  lang === 'darija' ? 'bg-white text-emerald-800 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                دارجة
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                  lang === 'fr' ? 'bg-white text-emerald-800 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                  lang === 'ar' ? 'bg-white text-emerald-800 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                عربية
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 overflow-x-hidden min-w-0">
        {/* Quick Profile Kicker Banner */}
        <section className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-500 block">{t.active_profile} :</span>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                <span className="font-bold text-slate-900 text-sm">
                  {activeProfile.id === 'homme_44' && t.profile_1_title}
                  {activeProfile.id === 'femme_65' && t.profile_2_title}
                  {activeProfile.id === 'femme_36' && t.profile_3_title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                  <Scale className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'}</span>
                  <span className="font-mono text-emerald-950 font-black">{activeProfile.weight} {t.kg}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('profiles')}
              className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
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

        {/* Tab 2: Workout (15 / 30 / 45 min) or Mama Laaziza Special Stabilisation Plan */}
        {activeTab === 'workout' && (
          <section className="space-y-6">
            {activeProfile.id === 'femme_65' ? (
              <MamaLaazizaSpecialPlan profile={activeProfile} lang={lang} />
            ) : (
              <>
                {/* Duration Selector Strip */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{t.workout_title}</h3>
                    <p className="text-xs text-slate-500">{t.workout_subtitle}</p>
                  </div>

                  {/* 15 / 30 / 45 min buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                      {t.choose_duration}
                    </span>
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                      <button
                        onClick={() => setSelectedDuration(15)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 15
                            ? 'bg-white text-emerald-700 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        15 min
                      </button>
                      <button
                        onClick={() => setSelectedDuration(30)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 30
                            ? 'bg-white text-emerald-700 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        30 min
                      </button>
                      <button
                        onClick={() => setSelectedDuration(45)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedDuration === 45
                            ? 'bg-white text-emerald-700 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
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

        {/* Tab: Military Calisthenics Bootcamp */}
        {activeTab === 'military' && (
          <section className="space-y-6">
            <MilitaryCalisthenics
              profile={activeProfile}
              lang={lang}
            />
          </section>
        )}

        {/* Tab 3: Diet Plan (14 Days) */}
        {activeTab === 'diet' && (
          <section className="space-y-6">
            <MealPlanner
              mealPlans={MEAL_PLAN_14_DAYS}
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

        {/* Tab 6: Supabase & Vercel / GitHub */}
        {activeTab === 'supabase' && (
          <section className="space-y-6">
            <SupabaseSync lang={lang} />
          </section>
        )}
      </main>

      {/* Mobile Bottom Tab Bar (Ergonomic Thumb Zone) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
        <div className="grid grid-cols-7 items-center h-15 px-0.5 max-w-full overflow-hidden w-full">
          <button
            onClick={() => setActiveTab('profiles')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'profiles' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'بروفيل' : 'Profils'}</span>
          </button>

          <button
            onClick={() => setActiveTab('workout')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'workout' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <Dumbbell className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'حركات' : 'Sport'}</span>
          </button>

          <button
            onClick={() => setActiveTab('military')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'military' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <Shield className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'عسكري' : 'Commando'}</span>
          </button>

          <button
            onClick={() => setActiveTab('diet')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'diet' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <CalendarDays className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'ماكلة' : 'Repas'}</span>
          </button>

          <button
            onClick={() => setActiveTab('goals')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'goals' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <Target className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'الهدف' : 'Objectif'}</span>
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'progress' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">{lang === 'darija' ? 'ميزان' : 'Suivi'}</span>
          </button>

          <button
            onClick={() => setActiveTab('supabase')}
            className={`flex flex-col items-center justify-center py-1 transition-colors min-w-0 ${
              activeTab === 'supabase' ? 'text-emerald-700 font-bold' : 'text-slate-500'
            }`}
          >
            <Database className="w-4 h-4 shrink-0" />
            <span className="text-[8.5px] mt-0.5 truncate max-w-full">Cloud</span>
          </button>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 pb-24 md:pb-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">FitMaghrib</span>
            <span>·</span>
            <span>Programme de Perte de Poids & Mouvements Maison</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Darija / Français / العربية</span>
            <span>·</span>
            <span>GitHub & Supabase Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
