import React, { useState } from 'react';
import { Coffee, Utensils, Apple, Moon, Droplets, Sparkles, CheckCircle2, ShieldCheck, Fish, AlertTriangle, ChevronDown, ChevronUp, HeartPulse } from 'lucide-react';
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
  const [showMamaMedicalGuide, setShowMamaMedicalGuide] = useState<boolean>(true);

  const weekDays = mealPlans.filter((p) => p.week === selectedWeek);
  const currentDay = mealPlans.find((p) => p.dayNumber === selectedDayNumber) || mealPlans[0];

  const getProfileSpecificNote = (day: DayDietPlan) => {
    if (activeProfile.id === 'homme_44') return day.profileSpecificAdvice.p1[lang];
    if (activeProfile.id === 'femme_65') return day.profileSpecificAdvice.p2[lang];
    return day.profileSpecificAdvice.p3[lang];
  };

  const isMama = activeProfile.id === 'femme_65';
  const totalDays = mealPlans.length;

  const week1Label = isMama
    ? (lang === 'darija' ? 'السيمانة 1 (أيام 1 حتى 7)' : lang === 'ar' ? 'الأسبوع الأول (الأيام 1 إلى 7)' : 'Semaine 1 (Jours 1 à 7)')
    : t.week_1;

  const week2Label = isMama
    ? (lang === 'darija' ? 'السيمانة 2 (أيام 8 حتى 15)' : lang === 'ar' ? 'الأسبوع الثاني (الأيام 8 إلى 15)' : 'Semaine 2 (Jours 8 à 15)')
    : (totalDays >= 15
        ? (lang === 'darija' ? 'السيمانة 2 (أيام 8 حتى 15)' : lang === 'ar' ? 'الأسبوع الثاني (الأيام 8 إلى 15)' : 'Semaine 2 (Jours 8 à 15)')
        : t.week_2);

  const dietTitle = isMama
    ? (lang === 'darija' ? 'برنامج 15 يوم للأكل خاص بماما لعزيزة' : lang === 'ar' ? 'برنامج التغذية لـ 15 يوماً لماما لعزيزة' : 'Programme Nutritionnel 15 Jours Mama Laaziza')
    : t.diet_title;

  const dietSubtitle = isMama
    ? (lang === 'darija' ? '15 يوم بأطباق مغربية صحية بدون ملح وبدون سكر، ألياف رطبة للمصران الحساس، حوت الميرلا والسردين، بدون غازات' : lang === 'ar' ? '15 يوماً من الأطباق المحمية بدون ملح أو سكر، لحماية القولون العصبي وخفض الكوليسترول ورفع فيتامين D' : '15 jours sur-mesure : zéro son dur, poissons digestes, sans gaz, sans sel ni sucre')
    : t.diet_subtitle;

  return (
    <div className="space-y-6">
      {/* Week Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{dietTitle}</h3>
            {isMama && (
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300/60">
                {lang === 'darija' || lang === 'ar' ? '15 يوم جديدة ومحدثة' : '15 Jours Mis à Jour'}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{dietSubtitle}</p>
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
            {week1Label}
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
            {week2Label}
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

      {/* Mama Laaziza Medical Analysis & Dietary Rules Banner */}
      {activeProfile.id === 'femme_65' && (
        <div className="bg-gradient-to-br from-amber-50/80 via-emerald-50/60 to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border border-amber-300/80 dark:border-amber-700/60 rounded-3xl p-5 sm:p-6 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{lang === 'darija' || lang === 'ar' ? '🩺 الملف الغذائي والطبي لماما لعزيزة (نتائج التحاليل)' : '🩺 Bilan Médical & Nutritionnel Mama Laaziza'}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-300/60">
                    {lang === 'darija' || lang === 'ar' ? 'متابعة دقيقة' : 'Sur-Mesure'}
                  </span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {lang === 'darija' || lang === 'ar' ? 'تحاليل الكوليسترول وفيتامين D + حماية المصران الحساس وتفادي الغازات والنخالة القاسية' : 'Analyses cholestérol & vit. D + protection côlon sensible, sans gaz ni son dur'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMamaMedicalGuide(!showMamaMedicalGuide)}
              className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950/60 hover:bg-amber-200 dark:hover:bg-amber-900 px-3 py-1.5 rounded-xl border border-amber-300/70 dark:border-amber-700 transition-colors flex items-center gap-1 shrink-0"
            >
              <span>{showMamaMedicalGuide ? (lang === 'darija' || lang === 'ar' ? 'إخفاء' : 'Réduire') : (lang === 'darija' || lang === 'ar' ? 'عرض التفاصيل' : 'Détails')}</span>
              {showMamaMedicalGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showMamaMedicalGuide && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 border-t border-amber-200/60 dark:border-slate-800 text-xs animate-in fade-in duration-200">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-slate-900 dark:text-emerald-300 flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? '1. نتائج التحاليل (الدم والكوليسترول وفيتامين D)' : '1. Analyses Médicales & Bilan'}
                </span>
                <p className="text-[12px] text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الكوليسترول الإجمالي: 2.40 g/L (في تحسن مقارنة بـ 2.55 g/L). ينخفض أكثر مع الحوت الأبيض والمشي.\n• الدهون الثلاثية (1.22) ومخزون الحديد (100.63) والكلى: ممتازة وطبيعية 100%.\n• فيتامين D: ارتفع إلى 21.80 ng/mL (تقدم ممتاز من 8.70 ng/mL). المشي الصباحي (09:30-11:00) والسردين كافيان لتجاوز 30.'
                    : '• Cholestérol total : 2,40 g/L (en baisse vs 2,55). Régulation avec poissons blancs et marche.\n• Triglycérides (1,22), Ferritine (100,63), Reins et Glycémie : 100% parfaits.\n• Vitamine D : 21,80 ng/mL (forte hausse vs 8,70). Sorties au soleil doux pour dépasser 30.'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-slate-900 dark:text-amber-300 flex items-center gap-1.5 text-xs">
                  <Fish className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? '2. أنواع الحوت الموصى بها (بلا قلي)' : '2. Poissons Recommandés (Sans Friture)'}
                </span>
                <p className="text-[12px] text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الحوت الأبيض الهادئ للمصران: الميرلا (Merlan)، الصول (Sole)، الدَّوْرَاد (Daurade)، الكولان (Colin).\n• حوت فيتامين D والأوميغا 3: السردين البلدي طازج في الفرن بالحامض والكمون، الشطون، أو قطعة سلمون.\n• طريقة الطهي: في الفرن أو مبخر أو طاجين خفيف. ممنوع القلي في الزيت نهائياً.'
                    : '• Poissons blancs digestes : Merlan, Sole, Daurade, Colin (zéro graisse saturée).\n• Poissons riches en Vitamine D et Oméga-3 : Sardines fraîches au four au citron et cumin, anchois, saumon.\n• Cuisson : au four, vapeur ou tajine doux. Friture strictement proscrite.'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-slate-900 dark:text-rose-300 flex items-center gap-1.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? '3. المصران الحساس والخبز (تجنب النخالة القاسية)' : '3. Côlon Sensible & Pain (Zéro Son Grossier)'}
                </span>
                <p className="text-[12px] text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الألياف: لا نقطع الألياف بل نأخذ الألياف الذائبة الرطبة (القرعة الخضراء المقشرة، الجزر، القرعة الحمراء).\n• الخبز: ممنوع خبز النخالة الغليظة القاسية لأنها تخدش المصران. الأفضل: خبز القمح أو الشعير المنخول ناعماً ومحمص خفيفاً.\n• ما عندهاش لاغوط (حمض اليوريك): لا يوجد مانع من تناول الأسماك والدجاج المعتدل.'
                    : '• Fibres douces solubles : courgettes épluchées, carottes, potiron doux.\n• Pain : proscrire le son dur/grossier qui irrite la paroi. Préférer farine tamisée fine ou orge douce toastée.\n• Pas d\'acide urique (goutte) : tolérance excellente des protéines blanches.'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-slate-900 dark:text-indigo-300 flex items-center gap-1.5 text-xs">
                  <Droplets className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? '4. الغازات والأعشاب والطونسيو (الضغط الدموي)' : '4. Gaz, Herbes & Tension Artérielle'}
                </span>
                <p className="text-[12px] text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                  {lang === 'darija' || lang === 'ar'
                    ? '• خضروات ممنوعة لتفادي الغازات: الكرنب (الملفوف)، الشفلور، البروكولي، الفلفل الأخضر النيء، اللفت الحار والبقوليات الجافة.\n• أعشاب ممنوعة على ود الطونسيو: ممنوع اليازير (إكليل الجبل) والعرقسوس.\n• أعشاب مسموحة ومريحة: اللويزة، البابونج، الكمون البلدي والنافع لطرد الغازات.'
                    : '• Légumes gazogènes à éviter : choux, chou-fleur, brocoli, poivrons crus, légumineuses dures.\n• Herbes à éviter pour la tension : bannir romarin (Yazir) et réglisse.\n• Herbes douces bienfaitrices : verveine (Louiza), camomille (Babounj), cumin doux.'}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

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
