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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{t.diet_title}</h3>
          <p className="text-xs text-slate-500">{t.diet_subtitle}</p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => {
              setSelectedWeek(1);
              setSelectedDayNumber(1);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedWeek === 1
                ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
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
                ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
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
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <span>{t.day_prefix} {d.dayNumber}</span>
            </button>
          );
        })}
      </div>

      {/* Profile specific alert highlight */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-0.5">
            {t.profile_advice} ({activeProfile.displayName} · {lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'} {activeProfile.weight} {t.kg}) :
          </span>
          <p className="text-sm font-medium text-emerald-800">
            {getProfileSpecificNote(currentDay)}
          </p>
        </div>
      </div>

      {/* 4 Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Breakfast */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-200 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Coffee className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{t.breakfast}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500">
                ~{currentDay.breakfast.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm mb-1.5">
              {currentDay.breakfast.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentDay.breakfast.description[lang]}
            </p>
          </div>
          {currentDay.breakfast.specialNotes && (
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-amber-700 font-medium">
              ★ {currentDay.breakfast.specialNotes[lang]}
            </div>
          )}
        </div>

        {/* Lunch */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{t.lunch}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500">
                ~{currentDay.lunch.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm mb-1.5">
              {currentDay.lunch.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentDay.lunch.description[lang]}
            </p>
          </div>
          {currentDay.lunch.specialNotes && (
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium">
              ★ {currentDay.lunch.specialNotes[lang]}
            </div>
          )}
        </div>

        {/* Snack */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-sky-200 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Apple className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{t.snack}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500">
                ~{currentDay.snack.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm mb-1.5">
              {currentDay.snack.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentDay.snack.description[lang]}
            </p>
          </div>
        </div>

        {/* Dinner */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Moon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{t.dinner}</h4>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500">
                ~{currentDay.dinner.caloriesApprox} kcal
              </span>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm mb-1.5">
              {currentDay.dinner.title[lang]}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentDay.dinner.description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Hydration card */}
      <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Droplets className="w-5 h-5 text-sky-600 shrink-0" />
          <div>
            <span className="text-xs font-bold text-sky-900 block">{t.hydration} :</span>
            <p className="text-xs text-sky-800">{currentDay.hydrationTip[lang]}</p>
          </div>
        </div>
        <div className="text-xs font-semibold text-sky-700 bg-white px-3 py-1.5 rounded-lg border border-sky-100 shrink-0">
          💧 2.5 Litres
        </div>
      </div>
    </div>
  );
};
