import React, { useState } from 'react';
import { Target, TrendingDown, Calendar, ShieldAlert, Award, Clock, Dumbbell, Utensils, Ban, Droplets, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';
import { UserProfile, MonthlyWeightGoal, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface Props {
  profile: UserProfile;
  lang: Language;
  onSelectDuration?: (duration: 15 | 30 | 45) => void;
  onNavigateToWorkout?: () => void;
}

export const GoalCalculator: React.FC<Props> = ({ profile, lang, onSelectDuration, onNavigateToWorkout }) => {
  const t = TRANSLATIONS[lang];
  const [selectedSpeed, setSelectedSpeed] = useState<MonthlyWeightGoal>(4);
  const [activePlanTab, setActivePlanTab] = useState<'sport' | 'repas' | 'interdits' | 'semaines'>('sport');

  // Calculations
  const weightStart = profile.weight;
  const heightM = profile.height / 100;
  const currentBmi = (weightStart / (heightM * heightM)).toFixed(1);

  // Losses
  const lossIn3Months = selectedSpeed * 3;
  const lossIn6Months = selectedSpeed * 6;

  const target3M = Math.max(45, Number((weightStart - lossIn3Months).toFixed(1)));
  const target6M = Math.max(45, Number((weightStart - lossIn6Months).toFixed(1)));

  const bmi3M = (target3M / (heightM * heightM)).toFixed(1);
  const bmi6M = (target6M / (heightM * heightM)).toFixed(1);

  // Calorie deficit per speed
  const deficitKcal = selectedSpeed === 2 ? 450 : selectedSpeed === 4 ? 850 : 1300;
  const targetDailyCalories = Math.max(1200, profile.dailyCalorieBudget - (deficitKcal - 500));
  const recommendedWorkoutDuration: 15 | 30 | 45 = selectedSpeed === 2 ? 15 : selectedSpeed === 4 ? 30 : 45;

  // Profile-specific tailored action items for the selected objective
  const getActionPlan = () => {
    if (profile.id === 'homme_44') {
      // Badr: 44 yo, 102kg, sedentary, no addiction
      return {
        name: 'Badr (بدر)',
        sportTitle: lang === 'darija' ? 'حركات بدر فالدار (15 إلى 30 دقيقة)' : 'Programme Sport Maison pour Badr',
        sportSteps: [
          lang === 'darija'
            ? `المدة: ${recommendedWorkoutDuration} دقيقة فاليوم (4 إلى 5 أيام فالأسبوع). ابدا خفيف وما تنهجش بزاف.`
            : `Durée : ${recommendedWorkoutDuration} min/jour (4 à 5 fois/semaine). Reprise sans sauts pour protéger les chevilles.`,
          lang === 'darija'
            ? 'الحركات الأساسية: بوكس من فوق الكرسي، طلوع خفيف للركبة، دفع الحائط (Wall Pushup)، وحركات البطن والكرش وأنت ناعس.'
            : 'Exercices clés : Boxe assis/debout, montées de genoux douces, pompes contre le mur et gainage fessier au sol.',
          lang === 'darija'
            ? 'التوقيت المفضل: قبل الفطور بـ 20 دقيقة أو فالعشية قبل العشاء مع كأس ماء كبير.'
            : 'Meilleur créneau : Le matin à jeun ou en fin d\'après-midi avec un grand verre d\'eau.',
        ],
        repasTitle: lang === 'darija' ? 'ماكلة بدر اليومية المضبوطة' : 'Alimentation Quotidienne pour Badr',
        repasSteps: [
          lang === 'darija'
            ? 'الفطور (08:30): 2 بيضات بلديات مسلوقين + ربع خبزة شعير أو قمح كامل + معلقة زيت العود + أتاي بلا سكر نهائياً.'
            : 'Petit-déjeuner (08h30) : 2 œufs durs + 40g pain d\'orge complet + 1 c.à.s huile d\'olive + thé vert 0 sucre.',
          lang === 'darija'
            ? 'الغداء (13:30): طاجين الخضرة باللحم البقري الهبرة أو الصدر د الدجاج (بلا بطاطا مقلية) + شلاظة مغربية بمطيشة وخيار وبصلة.'
            : 'Déjeuner (13h30) : Tajine de légumes avec bœuf maigre ou poulet (sans friture) + grande salade marocaine crue.',
          lang === 'darija'
            ? 'اللمجة (17:00): تفاحة خضراء أو 10 حبات د اللوز مصلوحين + ماء دافي.'
            : 'Goûter (17h00) : 1 pomme verte + 10 amandes non salées + grand verre d\'eau tiède.',
          lang === 'darija'
            ? 'العشاء (20:00 كأقصى حد): صوبة الخضار الخفيفة (كرافس، لفت، خيزو، قرعة) أو ياغورت طبيعي بدون سكر. ممنوع الماكلة مورا 20:30.'
            : 'Dîner (avant 20h00 impératif) : Soupe veloutée de légumes légers (courgettes, céleri) ou yaourt nature sans sucre.',
        ],
        interdits: [
          lang === 'darija' ? 'قطع السكر فالمشروبات وأتاي والقهوة 100%.' : 'Zéro sucre dans le thé et le café à 100%.',
          lang === 'darija' ? 'ممنوع الخبز الأبيض والكرواصون والمسمن فالعشية.' : 'Supprimer le pain blanc, msemmen et viennoiseries.',
          lang === 'darija' ? 'ممنوع المونادا والعصائر المصنعة (كتحبس حرق الشحم).' : 'Interdire sodas et jus industriels.',
          lang === 'darija' ? 'ممنوع الأكل قدام التلفازة مورا 20:30 بالليل.' : 'Zéro grignotage nocturne devant la télévision.',
        ],
        semaines: [
          { s: 'Semaine 1', desc: lang === 'darija' ? 'خروج الماء الزائد وفشوش الكرش (-1.5 إلى -2 كلغ)' : 'Perte d\'eau et dégonflement du ventre (-1.5 à -2 kg)' },
          { s: 'Semaine 2', desc: lang === 'darija' ? 'تحسن التنفس وخفة فالحركة اليومية (-1 كلغ)' : 'Meilleur souffle et disparition de la lourdeur (-1 kg)' },
          { s: 'Semaine 3-4', desc: lang === 'darija' ? 'حرق الشحمة العميقة ونقصان واضح فالحزام (-2 كلغ)' : 'Brûlage des graisses profondes et baisse de tour de taille (-2 kg)' },
        ],
      };
    } else if (profile.id === 'femme_65') {
      // Mama Laaziza: 65 yo, 64kg, walks 1h30 2x/wk, no salt, no sugar, vit D & cholesterol surveillance, STRICT WEIGHT STABILIZATION AT 64KG
      return {
        name: 'Mama Laaziza (ماما لعزيزة)',
        sportTitle: lang === 'darija' ? 'تسيير المشي المنظم (1h30 مرتين فالسيمانة) بدون حركات مجهدة' : 'Gestion de la Marche (1h30 2x/semaine) - Sans Exercices Éprouvants',
        sportSteps: [
          lang === 'darija'
            ? 'تثبيت الوزن في 64 كلغ: بدون أي حركات رياضية شاقة أو تمارين متعبة. المشي 1h30 مرتين في الأسبوع كافي 100% لتنشيط الدورة الدموية.'
            : 'Maintien et stabilisation à 64 kg : Zéro mouvement forcé ou épuisant. Les 2 sorties de marche de 1h30 suffisent amplement.',
          lang === 'darija'
            ? 'توقيت المشي: الخروج في الصباح الهادئ تحت أشعة الشمس الخفيفة (بين 09:30 و 11:00) لتثبيت الكالسيوم وفيتامين د في العظام.'
            : 'Créneau idéal : Sortie matinale au soleil doux (09h30 - 11h00) pour stimuler la fixation de la vitamine D osseuse.',
          lang === 'darija'
            ? 'الاحتياطات: ارتداء حذاء مريح بنعل سميك وطبي لامتصاص الصدمات، والمشي على أرض مستوية بدون طلعات حادة.'
            : 'Précautions : Baskets à semelles amortissantes, sol plat (parc, corniche) et allure régulière modérée sans essoufflement.',
        ],
        repasTitle: lang === 'darija' ? 'نظام الأكل لتثبيت الوزن عند 64 كلغ (بدون ملح، بدون سكر، لحماية الكوليسترول)' : 'Régime Spécifique de Stabilisation 64 kg (Sans sel, sans sucre, anti-cholestérol)',
        repasSteps: [
          lang === 'darija'
            ? 'الفطور: حسوة البلبولة بالشعير البلدي والنافع وزيت الزيتون البكر (بدون ذرة ملح) + كاس حليب منزوع الدسم مدعم بفيتامين د.'
            : 'Petit-déjeuner : Soupe d\'orge (Belboula) à l\'huile d\'olive et fenouil (zéro sel) + lait écrémé enrichi vit D.',
          lang === 'darija'
            ? 'الغداء: سردين مشوي فالفران بالأعشاب والكمون والثومة (ممتاز للكوليسترول وفيتامين د) + شلاظة الباربا وخيزو مسلوق بلا ملحة.'
            : 'Déjeuner : Sardines au four aux herbes et cumin (oméga-3 et vit D) + salade de betterave sans sel.',
          lang === 'darija'
            ? 'اللمجة: حبة فاكهة (إجاص أو تفاح) + 5 حبات كركاع (غني بالأوميغا 3) + لويزة سخونة بلا سكر.'
            : 'Goûter : 1 poire ou pomme + 5 cerneaux de noix + infusion de verveine apaisante sans sucre.',
          lang === 'darija'
            ? 'العشاء: شوربة القرع الأحمر والكرفس بزيت الزيتون ورشة كمون (بدون ملح) أو ياغورت طبيعي بدون سكر.'
            : 'Dîner : Velouté doux de courge et céleri à l\'huile d\'olive et cumin (zéro sel) ou yaourt nature sans sucre.',
        ],
        interdits: [
          lang === 'darija' ? 'الملحة فالمأكولات والطواجن نهائياً (استعملي الحامض والكمون والزعتر للتبنين).' : 'Zéro sel de table (remplacer par jus de citron frais, thym et cumin).',
          lang === 'darija' ? 'السكر والحلويات والشباكية تماماً لحماية الشرايين.' : 'Zéro sucre raffiné, gâteaux et viennoiseries.',
          lang === 'darija' ? 'الشحوم والزبدة الرومية والمقليات لحماية الكوليسترول.' : 'Bannir les fritures, margarines et viandes grasses.',
          lang === 'darija' ? 'الأكلات الثقيلة ليلاً بعد الساعة الثامنة مساءً.' : 'Éviter tout repas lourd après 20h00.',
        ],
        semaines: [
          { s: 'Stabilisation 64 kg', desc: lang === 'darija' ? 'استقرار تام للوزن في 64 كلغ وتوازن ضغط الدم بدون انتفاخ القدمين' : 'Poids stabilisé à 64 kg, tension artérielle équilibrée' },
          { s: 'Santé Os & Vit D', desc: lang === 'darija' ? 'تقوية العظام والمفاصل بفضل السردين والمشي الصباحي تحت الشمس' : 'Renforcement osseux via oméga-3 et marche au soleil' },
          { s: 'Bilan Sanguin', desc: lang === 'darija' ? 'تحاليل كوليسترول وسكر تراكمي ممتازة ومثالية عند الطبيب' : 'Bilan lipidique et glycémie parfaitement stabilisés' },
        ],
      };
    } else {
      // Kaoutar: 36 yo, 80kg, walks 30min/day, knee pain (rkabi)
      return {
        name: 'Kaoutar (كوثر)',
        sportTitle: lang === 'darija' ? 'برنامج كوثر: زيرو ضغط على الركابي (Zero Impact)' : 'Programme Spécifique Kaoutar (Zéro Pression Genoux)',
        sportSteps: [
          lang === 'darija'
            ? `المدة: ${recommendedWorkoutDuration} دقيقة فاليوم (4 إلى 5 أيام) مع المشي العادي 30 دقيقة بحذاء رياضي مريح ممتص للصدمات.`
            : `Durée : ${recommendedWorkoutDuration} min/jour (4 à 5x/semaine) + maintien des 30 min de marche sur sol plat avec bonnes baskets.`,
          lang === 'darija'
            ? 'الحركات الممنوعة: السكوات الهابط بزاف، القفز، الفينت (Fentes) لأنها كتقيس الركبة.'
            : 'Mouvements strictement interdits : Squats profonds, fentes avant et sauts avec impact.',
          lang === 'darija'
            ? 'الحركات المسموحة والممتازة: بلانك ناعسة، تجباد الأرداف (Glute Bridge)، تقوية عضلات البطن، وتمرين الحزام بدون ثني الركبة.'
            : 'Mouvements autorisés & efficaces : Pont fessier au sol (Glute bridge), gainage coudes, travail des bras et abdos assis.',
          lang === 'darija'
            ? 'الموسيقى المحفزة: مشغلة دابا موسيقى Rabiosa ديال Shakira و Adrenalina ديال Wisin باش تنشطي بلا ملل !'
            : 'Musique Hype : Playlist dédiée avec Shakira Rabiosa & Wisin Adrenalina pour vous motiver !',
        ],
        repasTitle: lang === 'darija' ? 'ماكلة كوثر لتخفيف الوزن على الركبتين ومحاربة الالتهاب' : 'Alimentation Anti-Inflammatoire pour Kaoutar',
        repasSteps: [
          lang === 'darija'
            ? 'الفطور: عجة بيض بالخرقوم البلدي (مضاد طبيعي لالتهاب المفاصل) + نصف خبزة قمح كامل + قهوة كحلة أو شاي بلا سكر.'
            : 'Petit-déjeuner : Omelette aux œufs et curcuma (anti-inflammatoire naturel) + pain complet + boisson non sucrée.',
          lang === 'darija'
            ? 'الغداء: حوت أبيض أو سلمون/طون مع بروكولي وخضار مبخرة + نصف زلافة عدس أو لوبيا بيضاء للبروتين النباتي.'
            : 'Déjeuner : Poisson blanc ou thon avec brocolis/légumes vapeur + lentilles pour les fibres et protéines.',
          lang === 'darija'
            ? 'اللمجة: ياغورت بروتين أو كاس حليب اللوز + حبة موز صغيرة قبل المشي.'
            : 'Goûter : Yaourt protéiné ou poignée d\'amandes + petite banane.',
          lang === 'darija'
            ? 'العشاء: شلاظة غنية بالأوراق الخضراء وصدر الدجاج المشوي قبل الساعة 20:00.'
            : 'Dîner : Salade verte au blanc de poulet grillé et citron avant 20h00.',
        ],
        interdits: [
          lang === 'darija' ? 'الحلويات والسكر الأبيض لي كيزيدو التهاب المفاصل والألم.' : 'Sucre raffiné et pâtisseries (facteurs d\'inflammation des cartilages).',
          lang === 'darija' ? 'المقليات والزيوت المهدرجة والوجبات السريعة.' : 'Fritures, chips et fast-foods gras.',
          lang === 'darija' ? 'المشي على حذاء بكعب عالي أو حذاء قاصح.' : 'Chaussures rigides ou talons hauts pendant la période de perte.',
        ],
        semaines: [
          { s: 'Semaine 1', desc: lang === 'darija' ? 'نقصان أول 1.5 كلغ وتخفيف الثقل المباشر على الركبتين' : 'Première baisse de 1.5 kg : soulagement immédiat des rotules' },
          { s: 'Semaine 2-3', desc: lang === 'darija' ? 'تقوية عضلات الفخذ لي هازين المفصل ونقصان الألم بـ 60%' : 'Renforcement des quadriceps pour stabiliser l\'articulation' },
          { s: 'Semaine 4', desc: lang === 'darija' ? 'وصول لـ -4 حتى -6 كلغ والمشي كيولي ساهل وممتع' : 'Atteinte de l\'objectif mensuel : marche redevenue fluide et sans gêne' },
        ],
      };
    }
  };

  const plan = getActionPlan();

  return (
    <div className="space-y-6">
      {/* Speed Selector Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900">{t.goals_title}</h3>
            </div>
            <p className="text-xs text-slate-500">{t.choose_speed}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-emerald-50 px-3.5 py-1.5 rounded-2xl border border-emerald-100 text-xs self-start sm:self-auto">
            <span className="text-slate-500">{lang === 'darija' ? 'البروفيل النشط :' : 'Profil Actif :'}</span>
            <span className="font-bold text-emerald-800">{plan.name}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">{lang === 'darija' || lang === 'ar' ? 'الوزن الحالي :' : 'Poids actuel :'}</span>
            <span className="font-mono font-bold text-emerald-900">{profile.weight} {t.kg}</span>
          </div>
        </div>

        {/* 3 Speed Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 2 kg/month */}
          <div
            onClick={() => {
              setSelectedSpeed(2);
              onSelectDuration?.(15);
            }}
            className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
              selectedSpeed === 2
                ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span dir="ltr" className="text-2xl font-black font-mono tabular-nums text-slate-900 bg-white px-2.5 py-1 rounded-xl border border-slate-200 shadow-xs">
                  -2 kg
                </span>
                <span dir="ltr" className="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold">
                  15 min / jour
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">{t.speed_2kg}</h4>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                {lang === 'darija' ? 'حركات خفيفة ومستمرة، كاتحافظ على صحتك وماكاتردش الوزن.' : 'Rythme doux et pérenne, parfait pour préserver la masse osseuse.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Déficit :</span>
              <span className="font-bold text-emerald-700">-450 kcal / jour</span>
            </div>
          </div>

          {/* 4 kg/month */}
          <div
            onClick={() => {
              setSelectedSpeed(4);
              onSelectDuration?.(30);
            }}
            className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
              selectedSpeed === 4
                ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span dir="ltr" className="text-2xl font-black font-mono tabular-nums text-emerald-600 bg-white px-2.5 py-1 rounded-xl border border-emerald-200 shadow-xs">
                  -4 kg
                </span>
                <span dir="ltr" className="text-xs px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold">
                  ★ 30 min / jour
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">{t.speed_4kg}</h4>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                {lang === 'darija' ? 'أحسن ريتم متوازن: كيطيح الشحم بالمعقول والجلد كيتجمع.' : 'L\'équilibre parfait recommandé par les médecins et coachs.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Déficit :</span>
              <span className="font-bold text-emerald-700">-850 kcal / jour</span>
            </div>
          </div>

          {/* 6 kg/month */}
          <div
            onClick={() => {
              setSelectedSpeed(6);
              onSelectDuration?.(45);
            }}
            className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
              selectedSpeed === 6
                ? 'bg-rose-50/70 border-rose-500 ring-2 ring-rose-500/20 shadow-md'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span dir="ltr" className="text-2xl font-black font-mono tabular-nums text-rose-600 bg-white px-2.5 py-1 rounded-xl border border-rose-200 shadow-xs">
                  -6 kg
                </span>
                <span dir="ltr" className="text-xs px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 font-bold">
                  45 min / jour
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">{t.speed_6kg}</h4>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                {lang === 'darija' ? 'حرق قوي وسريع، كيبغي التزام صارم بالماكلة والرياضة.' : 'Rythme commando intensif pour une transformation radicale rapide.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Déficit :</span>
              <span className="font-bold text-rose-700">-1300 kcal / jour</span>
            </div>
          </div>
        </div>

        {/* Warning if 6kg chosen for Mama Laaziza */}
        {selectedSpeed === 6 && profile.id === 'femme_65' && (
          <div className="mt-5 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                {lang === 'darija' ? 'تنبيه صحي مهم (ماما لعزيزة - تثبيت 64 كلغ) :' : 'Conseil médical (Mama Laaziza - Stabilisation 64 kg) :'}
              </span>{' '}
              {lang === 'darija'
                ? 'خسارة 6 كيلو فشهر قاصحة على المفاصل ونقص فيتامين د. الهدف الأساسي لماما لعزيزة هو تثبيت الوزن في 64 كلغ والمحافظة على الصحة.'
                : 'Une perte trop rapide de 6 kg/mois n\'est pas recommandée. La priorité absolue de Mama Laaziza est la stabilisation parfaite à 64 kg.'}
            </div>
          </div>
        )}
      </div>

      {/* CORE FEATURE: CLARIFIED ACTION PLAN (CHNO KHASS NDIR FIH DABA) */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-900/40 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'darija' ? 'دليل العمل التطبيقي الواضح' : 'PLAN D\'ACTION CLAIR & DÉTAILLÉ'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {lang === 'darija'
                ? `شنو خاصك دير بالضبط فهاد الهدف (-${selectedSpeed} كلغ / شهر) ؟`
                : `Que devez-vous faire exactement pour perdre -${selectedSpeed} kg/mois ?`}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {lang === 'darija'
                ? `برنامج يومي خطوة بخطوة مخصص لـ ${plan.name} : الرياضة، الوجبات، والممنوعات.`
                : `Consignes quotidiennes strictes et étapes concrètes adaptées pour ${plan.name}.`}
            </p>
          </div>

          {/* Quick Tab Switcher */}
          <div className="grid grid-cols-2 sm:flex sm:items-center p-1 bg-white/10 rounded-2xl text-xs font-bold w-full sm:w-auto gap-1">
            <button
              onClick={() => setActivePlanTab('sport')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activePlanTab === 'sport' ? 'bg-emerald-500 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>{lang === 'darija' ? 'الرياضة' : 'Sport'}</span>
            </button>
            <button
              onClick={() => setActivePlanTab('repas')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activePlanTab === 'repas' ? 'bg-emerald-500 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{lang === 'darija' ? 'الماكلة' : 'Repas'}</span>
            </button>
            <button
              onClick={() => setActivePlanTab('interdits')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activePlanTab === 'interdits' ? 'bg-emerald-500 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Ban className="w-3.5 h-3.5" />
              <span>{lang === 'darija' ? 'الممنوعات' : 'À Bannir'}</span>
            </button>
            <button
              onClick={() => setActivePlanTab('semaines')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activePlanTab === 'semaines' ? 'bg-emerald-500 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'darija' ? 'السيمانات' : 'Planning'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Sport Checklist */}
        {activePlanTab === 'sport' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                <Dumbbell className="w-4 h-4" />
                {plan.sportTitle}
              </h4>
              <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-xl">
                {recommendedWorkoutDuration} min / jour
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plan.sportSteps.map((step, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold font-mono text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {onNavigateToWorkout && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    onSelectDuration?.(recommendedWorkoutDuration);
                    onNavigateToWorkout();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  <span>{lang === 'darija' ? `بدا حصة ${recommendedWorkoutDuration} دقيقة دابا مع الموسيقى` : `Lancer la séance de ${recommendedWorkoutDuration} min maintenant`}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Repas Checklist */}
        {activePlanTab === 'repas' && (
          <div className="space-y-4">
            <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              {plan.repasTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {plan.repasSteps.map((repas, idx) => {
                const titles = [
                  lang === 'darija' ? 'الفطور' : 'Ftour (Matin)',
                  lang === 'darija' ? 'الغداء' : 'Ghdha (Midi)',
                  lang === 'darija' ? 'اللمجة' : 'Goûter (17h)',
                  lang === 'darija' ? 'العشاء' : '3cha (Soir)',
                ];
                return (
                  <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      {titles[idx]}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">{repas}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl text-xs text-emerald-200 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {lang === 'darija'
                  ? 'قاعدة الماء: شرب 2.5 إلى 3 لترات ماء يومياً (كأس كبير عند الاستيقاظ + كأس قبل كل وجبة بنصف ساعة).'
                  : 'Règle d\'or de l\'eau : Boire 2.5L à 3L d\'eau/jour (1 grand verre au lever + 1 verre 30 min avant chaque repas).'}
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Interdits Checklist */}
        {activePlanTab === 'interdits' && (
          <div className="space-y-4">
            <h4 className="font-bold text-rose-400 text-sm flex items-center gap-2">
              <Ban className="w-4 h-4" />
              {lang === 'darija' ? 'الممنوعات لي خاص تقطعهم نهائياً طيلة فترة الريجيم :' : 'Les 4 Interdits Majeurs pour Atteindre ce Poids :'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {plan.interdits.map((item, idx) => (
                <div key={idx} className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Semaine par semaine */}
        {activePlanTab === 'semaines' && (
          <div className="space-y-4">
            <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {lang === 'darija' ? 'التطور المنتظر أسبوعاً بأسبوع :' : 'Résultats Attendus Semaine par Semaine :'}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plan.semaines.map((sem, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">{sem.s}</span>
                  <p className="text-xs text-slate-200 leading-relaxed">{sem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3 Months & 6 Months Projections Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3 Months Target */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-slate-900">{t.projection_3_months}</h4>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                90 {lang === 'darija' ? 'يوم' : lang === 'ar' ? 'يوماً' : 'jours'}
              </span>
            </div>

            <div className="flex items-baseline gap-3 my-4">
              <span className="text-4xl font-extrabold font-mono text-slate-900 tabular-nums">
                {target3M} <span className="text-lg font-normal text-slate-500">{t.kg}</span>
              </span>
              <span className="text-sm font-semibold text-emerald-600 flex items-center gap-0.5">
                <TrendingDown className="w-4 h-4" /> -{lossIn3Months} {t.kg}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {lang === 'darija'
                ? `من هنا لـ 3 أشهر غاتكون طيحتي ${lossIn3Months} كيلو كاملة، المقاسات د الحوايج غايتبدلو والكرش غاتنقص بزاف.`
                : `En 3 mois, vous aurez éliminé ${lossIn3Months} kg. Changement visible de tour de taille et regain complet d'énergie.`}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">IMC Projeté</span>
              <span className="font-semibold text-slate-800 font-mono">{bmi3M}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Séance Conseillée</span>
              <span className="font-semibold text-emerald-700">{recommendedWorkoutDuration} min / jour</span>
            </div>
          </div>
        </div>

        {/* 6 Months Target */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h4 className="font-bold text-slate-900">{t.projection_6_months}</h4>
              </div>
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                180 {lang === 'darija' ? 'يوم' : lang === 'ar' ? 'يوماً' : 'jours'}
              </span>
            </div>

            <div className="flex items-baseline gap-3 my-4">
              <span className="text-4xl font-extrabold font-mono text-slate-900 tabular-nums">
                {target6M} <span className="text-lg font-normal text-slate-500">{t.kg}</span>
              </span>
              <span className="text-sm font-semibold text-indigo-600 flex items-center gap-0.5">
                <TrendingDown className="w-4 h-4" /> -{lossIn6Months} {t.kg}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {lang === 'darija'
                ? `من هنا لـ 6 أشهر غاتوصل لـ ${target6M} كلغ، الوزن المثالي لي كايثبت وماكيرجعش نهائياً، مع صحة جديدة ومناعة قوية.`
                : `À 6 mois, vous atteignez ${target6M} kg stabilisés. Nouveau métabolisme de base et fin définitive de l'effet yo-yo.`}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">IMC Projeté</span>
              <span className="font-semibold text-slate-800 font-mono">{bmi6M}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Transformation</span>
              <span className="font-semibold text-indigo-700">
                {lang === 'darija' ? 'تثبيت الوزن المثالي' : 'Stabilisation Définitive'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
