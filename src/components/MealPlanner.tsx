import React, { useState } from 'react';
import { Coffee, Utensils, Apple, Moon, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { DayDietPlan, Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface Props {
  mealPlans: DayDietPlan[];
  lang: Language;
  activeProfile: UserProfile;
}

export const MealPlanner: React.FC<Props> = ({ mealPlans, lang, activeProfile }) => {
  const t = TRANSLATIONS[lang];
  const [selectedWeek, setSelectedWeek] = useState<1 | 2>(1);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  const weekDays = mealPlans.filter((p) => p.week === selectedWeek);
  const currentDay = mealPlans.find((p) => p.dayNumber === selectedDayNumber) || mealPlans[0];

  const getProfileSpecificNote = (day: DayDietPlan) => {
    if (activeProfile.id === 'homme_44') return day.profileSpecificAdvice.p1[lang];
    if (activeProfile.id === 'femme_65') return day.profileSpecificAdvice.p2[lang];
    return day.profileSpecificAdvice.p3[lang];
  };

  return (
    <div className="space-y-6">
      {/* Week Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.diet_title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t.diet_subtitle}</p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => {
              setSelectedWeek(1);
              setSelectedDayNumber(1);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedWeek === 1
                ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-sm border border-slate-200/50 dark:border-slate-600'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.week_1}
          </button>
          <button
            onClick={() => {
              setSelectedWeek(2);
              setSelectedDayNumber(8);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedWeek === 2
                ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-sm border border-slate-200/50 dark:border-slate-600'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.week_2}
          </button>
        </div>
      </div>

      {/* Horizontal Day Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full max-w-full min-w-0">
        {weekDays.map((d) => {
          const isActive = d.dayNumber === selectedDayNumber;
          return (
            <button
              key={d.dayNumber}
              onClick={() => setSelectedDayNumber(d.dayNumber)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                isActive
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800'
              }`}
            >
              <span>{t.day_prefix} {d.dayNumber}</span>
            </button>
          );
        })}
      </div>

      {/* Profile specific alert highlight */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 flex items-start gap-3 transition-colors">
        <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider block mb-0.5">
            {t.profile_advice} ({activeProfile.displayName} · {lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'} {activeProfile.weight} {t.kg}) :
          </span>
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
            {getProfileSpecificNote(currentDay)}
          </p>
        </div>
      </div>

      {/* 4 Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Breakfast */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-200 dark:hover:border-amber-700/60 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 flex items-center justify-center">
                  <Coffee className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.breakfast}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                ~{currentDay.breakfast.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1.5">
              {currentDay.breakfast.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentDay.breakfast.description[lang]}
            </p>
          </div>
          {currentDay.breakfast.specialNotes && (
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
              ★ {currentDay.breakfast.specialNotes[lang]}
            </div>
          )}
        </div>

        {/* Lunch */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-200 dark:hover:border-emerald-700/60 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.lunch}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                ~{currentDay.lunch.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1.5">
              {currentDay.lunch.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentDay.lunch.description[lang]}
            </p>
          </div>
          {currentDay.lunch.specialNotes && (
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
              ★ {currentDay.lunch.specialNotes[lang]}
            </div>
          )}
        </div>

        {/* Snack */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-200 dark:hover:border-sky-700/60 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 flex items-center justify-center">
                  <Apple className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.snack}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                ~{currentDay.snack.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1.5">
              {currentDay.snack.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentDay.snack.description[lang]}
            </p>
          </div>
        </div>

        {/* Dinner */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-700/60 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                  <Moon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.dinner}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                ~{currentDay.dinner.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1.5">
              {currentDay.dinner.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentDay.dinner.description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Hydration card */}
      <div className="bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 rounded-2xl p-4 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          <Droplets className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
          <div>
            <span className="text-xs font-bold text-sky-900 dark:text-sky-200 block">{t.hydration} :</span>
            <p className="text-xs text-sky-800 dark:text-sky-300">{currentDay.hydrationTip[lang]}</p>
          </div>
        </div>
        <div className="text-xs font-semibold text-sky-700 dark:text-sky-300 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-sky-100 dark:border-sky-800 shrink-0">
          💧 2.5 Litres
        </div>
      </div>
    </div>
  );
};
