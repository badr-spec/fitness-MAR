import React from 'react';
import { User, Activity, AlertCircle, Heart, ShieldCheck, Check, Fish, AlertTriangle, Droplets } from 'lucide-react';
import { UserProfile, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import { MamaQuranRadio } from './MamaQuranRadio';

interface Props {
  profiles: UserProfile[];
  activeProfile: UserProfile;
  onSelectProfile: (profile: UserProfile) => void;
  lang: Language;
}

export const ProfileSelector: React.FC<Props> = ({ profiles, activeProfile, onSelectProfile, lang }) => {
  const t = TRANSLATIONS[lang];

  const getProfileTitle = (id: string) => {
    if (id === 'homme_44') return t.profile_1_title;
    if (id === 'femme_65') return t.profile_2_title;
    return t.profile_3_title;
  };

  const getProfileDesc = (id: string) => {
    if (id === 'homme_44') return t.profile_1_desc;
    if (id === 'femme_65') return t.profile_2_desc;
    return t.profile_3_desc;
  };

  const calculateBmi = (weight: number, heightCm: number) => {
    const h = heightCm / 100;
    return (weight / (h * h)).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* 3 Profile Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((p) => {
          const isSelected = p.id === activeProfile.id;
          const bmi = calculateBmi(p.weight, p.height);

          return (
            <div
              key={p.id}
              onClick={() => onSelectProfile(p)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all text-left relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {p.gender === 'male' ? 'H' : 'F'}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate">{getProfileTitle(p.id)}</h4>
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md inline-flex flex-wrap items-center gap-1 mt-1">
                        <span>{lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'}</span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">{p.weight} {t.kg}</span>
                        <span className="text-slate-400 font-normal">·</span>
                        <span className="text-slate-600 dark:text-slate-400 font-normal">{p.height} {t.cm}</span>
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {getProfileDesc(p.id)}
                </p>
              </div>

              {/* Badges / Specific Constraints */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  IMC {bmi}
                </span>

                {p.id === 'homme_44' && (
                  <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium">
                    {lang === 'darija' ? 'بدون مشي' : 'Sédentaire'}
                  </span>
                )}

                {p.id === 'femme_65' && (
                  <>
                    <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-medium">
                      {lang === 'darija' ? 'بلا سكر وبلا ملحة' : 'Sans sel/sucre'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-medium">
                      {lang === 'darija' ? 'فيتامين د' : 'Vitamine D'}
                    </span>
                  </>
                )}

                {p.id === 'femme_36' && (
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {lang === 'darija' ? 'حماية الركابي' : 'Zéro impact genoux'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Profile Detailed Dashboard Panel */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-700/60">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              {t.active_profile}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {getProfileTitle(activeProfile.id)}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {getProfileDesc(activeProfile.id)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-auto">
            <div className="bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl text-center shadow-inner">
              <span className="text-[10px] text-emerald-300 font-semibold block">
                {lang === 'darija' || lang === 'ar' ? 'الوزن الحالي' : 'Poids Actuel'}
              </span>
              <span className="text-base sm:text-lg font-black font-mono text-emerald-300">
                {activeProfile.weight} {t.kg}
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl text-center">
              <span className="text-[10px] text-slate-300 block">{t.bmi}</span>
              <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                {calculateBmi(activeProfile.weight, activeProfile.height)}
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl text-center">
              <span className="text-[10px] text-slate-300 block">Objectif 3M</span>
              <span className="text-base sm:text-lg font-bold font-mono text-white">
                {activeProfile.targetWeight3Months} kg
              </span>
            </div>
          </div>
        </div>

        {/* 4 Diagnostic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-xs">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-slate-300">{t.walking_habits}</span>
            </div>
            <p className="text-slate-200 font-medium">
              {activeProfile.id === 'homme_44' && (lang === 'darija' ? 'ماكايتمشاش كاع، كيبدا من الصفر فالدار' : 'Aucune marche préalable, reprise progressive.')}
              {activeProfile.id === 'femme_65' && (lang === 'darija' ? 'المشي ساعة ونصف مرتين فالسيمانة' : 'Marche 1h30 deux fois par semaine.')}
              {activeProfile.id === 'femme_36' && (lang === 'darija' ? 'المشي 30 دقيقة يومياً' : 'Marche quotidienne de 30 minutes.')}
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="font-semibold text-slate-300">
                {lang === 'darija' ? 'الريجيم الطبي' : 'Spécificités Nutrition'}
              </span>
            </div>
            <p className="text-slate-200 font-medium">
              {activeProfile.id === 'homme_44' && (lang === 'darija' ? 'شبع عالي ببروتينات نقية وخضار للحد من الشهية' : 'Protéines maigres & volume de légumes pour la satiété.')}
              {activeProfile.id === 'femme_65' && (lang === 'darija' ? 'ناقص سكر وملحة، غني بالسردين لفيتامين د' : 'Hypoglicémique & hyposodé, sardines & Vit D.')}
              {activeProfile.id === 'femme_36' && (lang === 'darija' ? 'أغذية مضادة لالتهاب المفاصل (كركم، أوميغا 3)' : 'Aliments anti-inflammatoires (curcuma, oméga 3).')}
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="font-semibold text-slate-300">
                {lang === 'darija' ? 'سلامة المفاصل والركابي' : 'Précautions Articulaires'}
              </span>
            </div>
            <p className="text-slate-200 font-medium">
              {activeProfile.id === 'homme_44' && (lang === 'darija' ? 'حركات بدون قفز لتفادي الضغط على الكواحل' : 'Low impact, protection chevilles et dos.')}
              {activeProfile.id === 'femme_65' && (lang === 'darija' ? 'تقوية لطيفة للعظام والتوازن والحوض' : 'Maintien de la densité osseuse et de l\'équilibre.')}
              {activeProfile.id === 'femme_36' && (lang === 'darija' ? 'ممنوع السكوات الغارق، تمارين جالسة ومستلقية' : 'Zéro flexion profonde, exercices assis ou au sol.')}
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-slate-300">
                {lang === 'darija' ? 'الحصة المنصوح بها' : 'Durée Quotidienne'}
              </span>
            </div>
            <p className="text-emerald-400 font-bold text-sm">
              {activeProfile.recommendedDuration} minutes / jour
            </p>
          </div>
        </div>

        {/* Mama Laaziza 4 Key Medical & Nutrition Pillars (Points 1, 2, 3, 4) */}
        {activeProfile.id === 'femme_65' && (
          <div className="mt-6 pt-6 border-t border-slate-700/60 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-black text-amber-300 flex items-center gap-2">
                <span>{lang === 'darija' || lang === 'ar' ? '🩺 الملف الطبي والغذائي الخاص بماما لعزيزة (1 - 4) :' : '🩺 Bilan Médical & Directives Nutritionnelles (1 à 4) :'}</span>
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {lang === 'darija' || lang === 'ar' ? 'متابعة التحاليل' : 'Validé Analyses'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Point 1 */}
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-emerald-300 flex items-center gap-1.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0">1</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? 'نتائج التحاليل (الدم والكوليسترول وفيتامين D)' : 'Analyses Médicales & Bilan'}
                </span>
                <p className="text-[12px] text-slate-100 leading-relaxed font-medium whitespace-pre-line">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الكوليسترول الإجمالي: 2.40 g/L (في تحسن مقارنة بـ 2.55 g/L). ينخفض أكثر مع الحوت الأبيض والمشي.\n• الدهون الثلاثية (1.22) ومخزون الحديد (100.63) والكلى: ممتازة وطبيعية 100%.\n• فيتامين D: ارتفع إلى 21.80 ng/mL (تقدم ممتاز من 8.70 ng/mL). المشي الصباحي (09:30-11:00) والسردين كافيان لتجاوز 30.'
                    : '• Cholestérol total : 2,40 g/L (en baisse vs 2,55). Régulation avec poissons blancs et marche.\n• Triglycérides (1,22), Ferritine (100,63), Reins et Glycémie : 100% parfaits.\n• Vitamine D : 21,80 ng/mL (forte hausse vs 8,70). Sorties au soleil doux pour dépasser 30.'}
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-amber-300 flex items-center gap-1.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0">2</span>
                  <Fish className="w-4 h-4 text-cyan-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? 'أنواع الحوت الموصى بها (بلا قلي)' : 'Poissons Recommandés (Sans Friture)'}
                </span>
                <p className="text-[12px] text-slate-100 leading-relaxed font-medium whitespace-pre-line">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الحوت الأبيض الهادئ للمصران: الميرلا (Merlan)، الصول (Sole)، الدَّوْرَاد (Daurade)، الكولان (Colin).\n• حوت فيتامين D والأوميغا 3: السردين البلدي طازج في الفرن بالحامض والكمون، الشطون، أو قطعة سلمون.\n• طريقة الطهي: في الفرن أو مبخر أو طاجين خفيف. ممنوع القلي في الزيت نهائياً.'
                    : '• Poissons blancs digestes : Merlan, Sole, Daurade, Colin (zéro graisse saturée).\n• Poissons riches en Vitamine D et Oméga-3 : Sardines fraîches au four au citron et cumin, anchois, saumon.\n• Cuisson : au four, vapeur ou tajine doux. Friture strictement proscrite.'}
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-rose-300 flex items-center gap-1.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 font-black text-xs flex items-center justify-center shrink-0">3</span>
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? 'المصران الحساس والخبز (تجنب النخالة القاسية)' : 'Côlon Sensible & Pain (Zéro Son Grossier)'}
                </span>
                <p className="text-[12px] text-slate-100 leading-relaxed font-medium whitespace-pre-line">
                  {lang === 'darija' || lang === 'ar'
                    ? '• الألياف: لا نقطع الألياف بل نأخذ الألياف الذائبة الرطبة (القرعة الخضراء المقشرة، الجزر، القرعة الحمراء).\n• الخبز: ممنوع خبز النخالة الغليظة القاسية لأنها تخدش المصران. الأفضل: خبز القمح أو الشعير المنخول ناعماً ومحمص خفيفاً.\n• ما عندهاش لاغوط (حمض اليوريك): لا يوجد مانع من تناول الأسماك والدجاج المعتدل.'
                    : '• Fibres douces solubles : courgettes épluchées, carottes, potiron doux.\n• Pain : proscrire le son dur/grossier qui irrite la paroi. Préférer farine tamisée fine ou orge douce toastée.\n• Pas d\'acide urique (goutte) : tolérance excellente des protéines blanches.'}
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 shadow-sm space-y-2">
                <span className="font-black text-indigo-300 flex items-center gap-1.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 font-black text-xs flex items-center justify-center shrink-0">4</span>
                  <Droplets className="w-4 h-4 text-indigo-400 shrink-0" />
                  {lang === 'darija' || lang === 'ar' ? 'الغازات والأعشاب والطونسيو (الضغط الدموي)' : 'Gaz, Herbes & Tension Artérielle'}
                </span>
                <p className="text-[12px] text-slate-100 leading-relaxed font-medium whitespace-pre-line">
                  {lang === 'darija' || lang === 'ar'
                    ? '• خضروات ممنوعة لتفادي الغازات: الكرنب (الملفوف)، الشفلور، البروكولي، الفلفل الأخضر النيء، اللفت الحار والبقوليات الجافة.\n• أعشاب ممنوعة على ود الطونسيو: ممنوع اليازير (إكليل الجبل) والعرقسوس.\n• أعشاب مسموحة ومريحة: اللويزة، البابونج، الكمون البلدي والنافع لطرد الغازات.'
                    : '• Légumes gazogènes à éviter : choux, chou-fleur, brocoli, poivrons crus, légumineuses dures.\n• Herbes à éviter pour la tension : bannir romarin (Yazir) et réglisse.\n• Herbes douces bienfaitrices : verveine (Louiza), camomille (Babounj), cumin doux.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Special Radio Mohammed VI du Saint Coran for Mama Aziza (femme_65) */}
        {activeProfile.id === 'femme_65' && (
          <div className="mt-6 pt-6 border-t border-slate-700/60">
            <MamaQuranRadio lang={lang} />
          </div>
        )}
      </div>
    </div>
  );
};
