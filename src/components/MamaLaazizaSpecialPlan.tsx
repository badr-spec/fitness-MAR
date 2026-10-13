import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Footprints, 
  Apple, 
  Utensils, 
  Sun, 
  ShieldCheck, 
  Scale, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Droplets, 
  AlertCircle,
  Coffee,
  Clock,
  Salad,
  Radio,
  Play,
  Pause,
  RotateCcw,
  Dumbbell
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { MamaQuranRadio } from './MamaQuranRadio';

interface Props {
  profile: UserProfile;
  lang: Language;
  onNavigateToDiet?: () => void;
}

export const MamaLaazizaSpecialPlan: React.FC<Props> = ({ profile, lang, onNavigateToDiet }) => {
  const [activeTab, setActiveTab] = useState<'stabilisation' | 'marche' | 'menu' | 'recommandations'>('stabilisation');
  const [walkSeconds, setWalkSeconds] = useState(0);
  const [isWalkTimerActive, setIsWalkTimerActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isWalkTimerActive) {
      interval = setInterval(() => {
        setWalkSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isWalkTimerActive]);

  const formatWalkTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${hrs}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const walkTargetSec = 90 * 60; // 1h30 = 5400s
  const walkProgressPct = Math.min(100, Math.round((walkSeconds / walkTargetSec) * 100));

  const content = {
    darija: {
      heroBadge: 'برنامج خاص وحصري لماما لعزيزة (الوزن الحالي: 64 كلغ)',
      heroTitle: 'حركات رياضية خفيفة · تنظيم المشي (1h30) · تثبيت الوزن (64 kg)',
      heroSubtitle: 'خطة متكاملة تجمع بين حركات رياضية وتمارين خفيفة في البيت لتليين المفاصل، وتنظيم حصص المشي المنعشة (1h30 مرتين فالسيمانة)، حمية متوازنة بدون ملح وبدون سكر، مع راديو محمد السادس للقرآن الكريم.',
      weightCardTitle: 'الوزن المستهدف للتثبيت',
      currentWeight: '64 كلغ (الوزن المثالي المستقر)',
      weightSub: 'الهدف: الحفاظ على 64kg بدون زيادة وبدون نزول حاد، مع توازن الكتلة العضلية والمائية.',
      walkCardTitle: 'تسيير حصص المشي المنظم',
      walkSub: '1h30 دقيقة مشي مريح في الهواء الطلق (2 مرات في الأسبوع)',
      walkNote: 'المشي مع الحركات الخفيفة كافيان 100% لتنشيط الدورة الدموية وحرق السعرات اليومية وتفادي تيبس المفاصل.',
      
      tabStabilisation: '🎯 تثبيت الوزن',
      tabMarche: '🚶‍♀️ تنظيم المشي 1h30',
      tabMenu: '🍲 ماكلة خاصة للتثبيت',
      tabRecommandations: '🩺 نصائح صحية (سكر/ملح/عظام)',

      // Tab 1: Stabilisation
      stabTitle: 'خطة تثبيت الوزن عند 64 كلغ بالضبط:',
      stabP1: 'تثبيت الوزن في 64 كلغ (Stabilisation) أهم بكثير من النزول الحاد، للحفاظ على قوة العظام وكثافتها وتفادي هشاشة العظام (Ostéoporose) أو فقدان العضلات.',
      stabStep1Title: '1. ميزان الطاقة المتوازن (1450 سعرة حرارية/يوم):',
      stabStep1Desc: 'السعرات الحرارية التي تتناولها ماما لعزيزة تساوي تماماً ما تحرقه عبر الأنشطة اليومية وحصص المشي، وبالتالي يبقى الميزان ثابتاً في 64 كلغ أسبوعاً بعد أسبوع.',
      stabStep2Title: '2. تفادي تقلبات الوزن والماء:',
      stabStep2Desc: 'الابتعاد الكامل عن الملح يمنع احتباس السوائل (Rétention d\'eau)، مما يحافظ على خفة القدمين واستقرار ضغط الدم دون انتفاخ.',
      stabStep3Title: '3. تثبيت الكولسترول والسكر التراكمي:',
      stabStep3Desc: 'استبدال الدهون المشبعة بالأوميغا 3 (السردين وزيت الزيتون) يحمي الشرايين ويبقي مؤشرات الدم ممتازة عند الطبيب.',

      // Tab 2: Marche
      marcheTitle: 'دليل تسيير حصص المشي (1h30 مرتين في الأسبوع):',
      marcheTiming: 'أفضل الأيام: الثلاثاء والجمعة أو الأربعاء والسبت (يوم مشي متبوع بيومين راحة)',
      marcheRule1Title: 'قبل الخروج للمشي (30 دقيقة قبل):',
      marcheRule1Desc: 'شرب كأس ماء معتدل الحرارة، وتناول 3 حبات لوز أو نصف موزة لتفادي هبوط السكر المفاجئ أثناء المشي.',
      marcheRule2Title: 'خلال حصة 1h30 دقيقة:',
      marcheRule2Desc: 'مشي بوتيرة متوسطة هادئة ومستمرة في حديقة أو كورنيش مستوٍ، مع ارتداء حذاء مريح ذو قاعدة طبية لامتصاص الصدمات.',
      marcheRule3Title: 'الاستفادة من أشعة الشمس وفيتامين (D):',
      marcheRule3Desc: 'المشي في الصباح بين 09:30 و 11:00 للاستفادة من أشعة الشمس الطبيعية لتثبيت الكالسيوم في العظام.',
      marcheRule4Title: 'بعد العودة للمنزل:',
      marcheRule4Desc: 'شرب كأسين من الماء الدافئ تدريجياً، ورفع الرجلين على وسادة لمدة 10 دقائق لراحة الدورة الدموية.',

      // Tab 3: Menu Stabilisation
      menuTitle: 'برنامج الأكل اليومي المخصص لتثبيت 64 كلغ:',
      menuFtour: 'الفطور (08:30):',
      menuFtourDesc: 'زلافة حسوة الشعير (بلبولة بلدي) بزيت العود النافع وحبة حلاوة (بدون ملح) + كاس حليب معقم خالي الدسم + شاي أعشاب باللويزة بدون سكر.',
      menuGhda: 'الغداء (13:30):',
      menuGhdaDesc: 'طاجين الخضر الموسمية (قرعة سلاوية وخضراء، جلبانة، خيزو) مع سمك السردين الطازج في الفرن بالكمون والثوم والليمون الحامض + ربع خبز شعير كامل.',
      menuKskrout: 'كاسكروط / اللمجة (17:00):',
      menuKskroutDesc: 'تفاحة أو إجاصة طازجة + 5 حبات جوز (كركاع) بلدي غني بالأوميغا 3 المفيد للدماغ والقلب + مغلي البابونج أو اللويزة.',
      menuAcha: 'العشاء (19:30):',
      menuAchaDesc: 'شوربة خفيفة بالقرع الأحمر والكرفس واللفت بزيت الزيتون البكر ورشة كمون (بدون ملح) أو ياغورت طبيعي بدون سكر.',

      // Tab 4: Health guidelines
      healthTitle: 'القواعد الذهبية والطبية لماما لعزيزة:',
      h1: 'الملح والطونسيو: تقليل الملح واستبداله بالليمون الحامض والكمون البلدي. وتجنب الأعشاب التي ترفع الضغط كاليازير (إكليل الجبل) والعرقسوس، واعتماد اللويزة والبابونج فقط.',
      h2: 'المصران الحساس والخبز: الاعتماد على ألياف ذائبة رطبة (القرعة الخضراء المقشرة، الجزر، القرعة الحمراء). وتجنب الخبز بالنخالة القاسية، واعتماد خبز القمح اللين أو الشعير المنخول ناعماً.',
      h3: 'تفادي الغازات والنفخة: الامتناع عن الكرنب (الملفوف)، الشفلور، البروكولي، والفلفل النيء، واستعمال الكمون والنافع لطرد الغازات.',
      h4: 'أنواع الأسماك والكوليسترول: الأسماك البيضاء الخفيفة (الميرلا، الصول، الدَّوْرَاد) + السردين الطازج بالفرن بدون قلي (أوميغا 3 وفيتامين D لرفعه فوق 30).',
      h5: 'المشي وأشعة الشمس: المشي 1h30 مرتين أسبوعياً صباحاً (09:30-11:00) لتثبيت فيتامين D على العظام وتنشيط الدورة الدموية.',
    },
    ar: {
      heroBadge: 'برنامج خاص وحصري لماما لعزيزة (الوزن الحالي: 64 كغ)',
      heroTitle: 'حركات رياضية خفيفة · تنظيم المشي (1h30) · تثبيت الوزن (64 كغ)',
      heroSubtitle: 'خطة متكاملة تجمع بين الحركات الرياضية الخفيفة في البيت لتليين المفاصل وتقوية الجسم، وتنظيم حصص المشي الخارجي (1h30 مرتين أسبوعياً)، حمية بدون ملح وبدون سكر، وراديو القرآن الكريم.',
      weightCardTitle: 'الوزن المستهدف للتثبيت',
      currentWeight: '64 كغ (الوزن المثالي المستقر)',
      weightSub: 'الهدف: الحفاظ على 64 كغ بدون زيادة وبدون نزول حاد، مع توازن الكتلة العضلية والمائية.',
      walkCardTitle: 'تنظيم حصص المشي الخارجي',
      walkSub: 'ساعة ونصف (1h30) مشي مريح في الهواء الطلق (مرتين في الأسبوع)',
      walkNote: 'المشي مع الحركات الرياضية الخفيفة كافيان تماماً لتنشيط الدورة الدموية وتفادي تيبس المفاصل.',
      
      tabStabilisation: '🎯 تثبيت الوزن',
      tabMarche: '🚶‍♀️ تنظيم المشي 1h30',
      tabMenu: '🍲 وجبات التثبيت',
      tabRecommandations: '🩺 نصائح صحية (سكر/ملح/عظام)',

      stabTitle: 'خطة تثبيت الوزن عند 64 كغ بالضبط:',
      stabP1: 'تثبيت الوزن عند 64 كغ أهم بكثير من النزول الحاد، للحفاظ على قوة العظام وكثافتها وتفادي هشاشة العظام أو فقدان الكتلة العضلية.',
      stabStep1Title: '1. ميزان الطاقة المتوازن (1450 سعرة حرارية/يوم):',
      stabStep1Desc: 'السعرات الحرارية اليومية تعادل تماماً الاحتياج الحقيقي مع المشي، فيبقى الوزن ثابتاً في 64 كغ دائماً.',
      stabStep2Title: '2. تفادي احتباس السوائل:',
      stabStep2Desc: 'الامتناع الكامل عن الملح يمنع احتباس الماء ويحافظ على خفة القدمين واستقرار ضغط الدم.',
      stabStep3Title: '3. حماية الكوليسترول والشرايين:',
      stabStep3Desc: 'الاعتماد على دهون الأوميغا 3 الطبيعية (السردين وزيت الزيتون) يحمي صحة القلب والأوعية الدموية.',

      marcheTitle: 'دليل تنظيم المشي (1h30 مرتين أسبوعياً):',
      marcheTiming: 'الأيام المثالية: الثلاثاء والجمعة أو الأربعاء والسبت',
      marcheRule1Title: 'قبل الخروج للمشي (بـ 30 دقيقة):',
      marcheRule1Desc: 'شرب كأس ماء وتناول 3 حبات لوز لتفادي هبوط الطاقة.',
      marcheRule2Title: 'أثناء حصة المشي (1h30):',
      marcheRule2Desc: 'المشي بوتيرة مريحة ومنتظمة في حديقة مستوية مع ارتداء حذاء مريح ممتص للصدمات.',
      marcheRule3Title: 'الاستفادة من فيتامين د الطبيعي:',
      marcheRule3Desc: 'المشي صباحاً تحت أشعة الشمس المعتدلة بين 09:30 و 11:00 لتثبيت الكالسيوم في العظام.',
      marcheRule4Title: 'بعد العودة إلى المنزل:',
      marcheRule4Desc: 'شرب كأسين من الماء تدريجياً وإراحة القدمين على وسادة لمدة 10 دقائق.',

      menuTitle: 'البرنامج الغذائي اليومي لتثبيت الوزن (64 كغ):',
      menuFtour: 'الفطور (08:30):',
      menuFtourDesc: 'حساء شعير بلدي (بلبولة) بزيت الزيتون واليانسون (بدون ملح) + كأس حليب خالي الدسم + شاي لويزة بدون سكر.',
      menuGhda: 'الغداء (13:30):',
      menuGhdaDesc: 'طاجين خضار موسمية بدون دهون مهدرجة مع سمك سردين مشوي بالفرن بالليمون والكمون + ربع رغيف شعير كامل.',
      menuKskrout: 'لمجة المساء (17:00):',
      menuKskroutDesc: 'تفاحة أو إجاصة طازجة + 5 حبات جوز غني بالأوميغا 3 + شاي بابونج مهدئ بدون سكر.',
      menuAcha: 'العشاء (19:30):',
      menuAchaDesc: 'شوربة قرع أحمر وكرفس دافئة بزيت الزيتون البكر ورشة كمون (بدون ملح) أو زبادي طبيعي غير محلى.',

      healthTitle: 'القواعد الغذائية والطبية لصحة ماما لعزيزة:',
      h1: 'الملح وضغط الدم: تقليل الملح واستبداله بعصير الليمون والكمون. وتجنب الأعشاب الرافعة للضغط مثل إكليل الجبل (اليازير) والعرقسوس، والاكتفاء باللويزة والبابونج.',
      h2: 'القولون الحساس والخبز: الاعتماد على الألياف الذائبة اللطيفة (الكوسة، الجزر، اليقطين). وتجنب خبز النخالة الخشنة واعتماد خبز القمح اللين المنخول أو دقيق الشعير الناعم.',
      h3: 'منع الغازات والانتفاخ: تجنب الملفوف، القرنبيط، البروكلي، والفلفل النيء، واستعمال الكمون واليانسون لتهدئة البطن.',
      h4: 'أنواع الأسماك والكوليسترول: الأسماك البيضاء سهلة الهضم (الميرلا، الصول، الدَّوْرَاد) مع السردين الطازج المشوي بالفرن (أوميغا 3 وفيتامين د).',
      h5: 'المشي وفيتامين د: المشي ساعة ونصف مرتين أسبوعياً تحت الشمس الصباحية المعتدلة لدعم كثافة العظام.',
    },
    fr: {
      heroBadge: 'Programme Sur-Mesure pour Mama Laaziza (Poids Actuel : 64 kg)',
      heroTitle: 'Exercices Doux Seniors · Organisation de la Marche (1h30) · Stabilisation (64 kg)',
      heroSubtitle: 'Plan complet associant mouvements doux à domicile pour la mobilité articulaire, sorties de marche (1h30 2x/semaine), équilibre sans sel/sucre et Radio Coran en direct.',
      weightCardTitle: 'Poids Idéal à Stabiliser',
      currentWeight: '64 kg (Poids Stable et Idéal)',
      weightSub: 'Objectif : Maintenir 64 kg sans fluctuation, préserver la masse osseuse et le tonus vital.',
      walkCardTitle: 'Gestion des Sorties Marche',
      walkSub: '1h30 de marche agréable en extérieur (2 fois par semaine)',
      walkNote: 'La marche et les exercices doux réguliers suffisent amplement pour la vitalité et la santé des articulations.',
      
      tabStabilisation: '🎯 Stabilisation',
      tabMarche: '🚶‍♀️ Marche 1h30',
      tabMenu: '🍲 Menu Dédié',
      tabRecommandations: '🩺 Santé & Équilibre',

      stabTitle: 'Plan de Stabilisation à 64 kg :',
      stabP1: 'La stabilisation à 64 kg est la priorité absolue : elle préserve le capital osseux et évite la fonte musculaire tout en maintenant une forme olympique.',
      stabStep1Title: '1. Équilibre calorique neutre (1450 kcal/jour) :',
      stabStep1Desc: 'L\'apport correspond exactement à la dépense avec les 2 sorties de marche, assurant un poids parfaitement fixe à 64 kg.',
      stabStep2Title: '2. Élimination de la rétention d\'eau :',
      stabStep2Desc: 'Le zéro sel prévient tout œdème des chevilles et stabilise la tension artérielle.',
      stabStep3Title: '3. Protection cardiaque et cholestérol :',
      stabStep3Desc: 'Riche en acides gras oméga-3 (sardines, huile d\'olive vierge) pour maintenir un bilan sanguin irréprochable.',

      marcheTitle: 'Guide de Gestion de la Marche (1h30 2x/semaine) :',
      marcheTiming: 'Jours conseillés : Mardi & Vendredi ou Mercredi & Samedi',
      marcheRule1Title: 'Avant de partir (30 min avant) :',
      marcheRule1Desc: 'Boire un verre d\'eau et prendre 3 amandes pour stabiliser la glycémie.',
      marcheRule2Title: 'Pendant la sortie de 1h30 :',
      marcheRule2Desc: 'Allure modérée et régulière, baskets amortissantes sur terrain plat sans dénivelé abrupt.',
      marcheRule3Title: 'Bénéfice Vitamine D & Soleil :',
      marcheRule3Desc: 'Marche le matin entre 09h30 et 11h00 sous le soleil doux pour fixer le calcium dans les os.',
      marcheRule4Title: 'Après la sortie :',
      marcheRule4Desc: 'Hydratation progressive avec 2 verres d\'eau tiède et surélévation des jambes 10 minutes.',

      menuTitle: 'Menu Quotidien Spécifique de Stabilisation :',
      menuFtour: 'Petit-déjeuner (08h30) :',
      menuFtourDesc: 'Soupe d\'orge (Belboula) à l\'huile d\'olive et anis (sans sel) + lait écrémé + infusion de verveine sans sucre.',
      menuGhda: 'Déjeuner (13h30) :',
      menuGhdaDesc: 'Tajine de légumes de saison sans friture avec sardines fraîches au four au citron et cumin + 40g pain d\'orge.',
      menuKskrout: 'Goûter (17h00) :',
      menuKskroutDesc: '1 pomme ou poire fraîche + 5 cerneaux de noix (oméga-3) + infusion douce sans sucre.',
      menuAcha: 'Dîner (19h30) :',
      menuAchaDesc: 'Velouté doux de courge, carotte et céleri à l\'huile d\'olive vierge (zéro sel) ou yaourt nature.',

      healthTitle: 'Règles d\'or & Directives Médicales pour Mama Laaziza :',
      h1: 'Sel & Tension Artérielle : Réduire le sel au profit du citron et cumin. Bannir le romarin (Yazir) et la réglisse ; privilégier verveine (Louiza) et camomille.',
      h2: 'Côlon Sensible & Pain : Préférer les fibres solubles douces (courgettes épluchées, carottes, potiron). Zéro son grossier dans le pain ; choisir farine tamisée ou orge fine.',
      h3: 'Zéro Gaz & Ballonnements : Éviter choux, chou-fleur, brocoli et poivrons crus. Utiliser cumin doux et graines d\'anis pour apaiser.',
      h4: 'Poissons & Cholestérol : Poissons blancs digestes (Merlan, Sole, Daurade, Colin) + sardines fraîches au four au citron/cumin sans friture.',
      h5: 'Marche & Vitamine D : Marche 1h30 2x/semaine le matin au soleil doux (09h30-11h00) pour dépasser 30 ng/mL.',
    },
  }[lang] || {
    heroBadge: 'Mama Laaziza',
    heroTitle: 'Stabilisation 64kg',
    heroSubtitle: 'Régime adapté et gestion de la marche',
    weightCardTitle: 'Poids stable',
    currentWeight: '64 kg',
    weightSub: 'Maintien du poids idéal',
    walkCardTitle: 'Sorties marche',
    walkSub: '1h30 2x/semaine',
    walkNote: 'Activité suffisante',
    tabStabilisation: 'Stabilisation',
    tabMarche: 'Marche 1h30',
    tabMenu: 'Menu',
    tabRecommandations: 'Santé',
    stabTitle: 'Stabilisation',
    stabP1: 'Maintien du poids à 64 kg.',
    stabStep1Title: 'Calories adaptées',
    stabStep1Desc: '1450 kcal',
    stabStep2Title: 'Zéro sel',
    stabStep2Desc: 'Pas de rétention d\'eau',
    stabStep3Title: 'Cholestérol',
    stabStep3Desc: 'Oméga 3 et sardines',
    marcheTitle: 'Marche 1h30',
    marcheTiming: '2x par semaine',
    marcheRule1Title: 'Avant',
    marcheRule1Desc: 'Eau et amandes',
    marcheRule2Title: 'Sortie',
    marcheRule2Desc: 'Terrain plat',
    marcheRule3Title: 'Soleil',
    marcheRule3Desc: 'Vitamine D',
    marcheRule4Title: 'Après',
    marcheRule4Desc: 'Repos jambes',
    menuTitle: 'Menu',
    menuFtour: 'Ftour',
    menuFtourDesc: 'Belboula',
    menuGhda: 'Ghdha',
    menuGhdaDesc: 'Tajine sardines',
    menuKskrout: 'Goûter',
    menuKskroutDesc: 'Fruits et noix',
    menuAcha: 'Dîner',
    menuAchaDesc: 'Soupe légumes',
    healthTitle: 'Santé',
    h1: 'Sans sel',
    h2: 'Sans sucre',
    h3: 'Vitamine D',
    h4: 'Cholestérol',
    h5: 'Hydratation',
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero Banner with Golden Amber & Emerald Elegance */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white p-6 sm:p-8 border border-amber-400/30 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-400/30">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{content.heroBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {content.heroTitle}
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {content.heroSubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-amber-200">
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'darija' || lang === 'ar' ? 'حركات رياضية خفيفة وآمنة' : 'Exercices Maison Doux'}</span>
            </span>
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-amber-400" />
              <span>{lang === 'darija' || lang === 'ar' ? 'المشي المنظم 1h30 (مرتين أسبوعياً)' : 'Marche Active 1h30 (2x/semaine)'}</span>
            </span>
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'darija' || lang === 'ar' ? 'تثبيت 64kg بدون ملح وبدون سكر' : 'Stabilisation 64kg Sans Sel/Sucre'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Button & Live Player: Radio Mohammed VI du Saint Coran en Arabe */}
      <MamaQuranRadio lang={lang} />

      {/* Top Two Pillar Metric Cards: Stable Weight & Walk Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Stable Weight Focus */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0 shadow-inner">
            <Scale className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              {content.weightCardTitle}
            </span>
            <h4 className="text-xl font-black text-slate-900 dark:text-white">
              {content.currentWeight}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {content.weightSub}
            </p>
          </div>
        </div>

        {/* Card 2: Walk Management */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-inner">
            <Footprints className="w-6 h-6 text-amber-700 dark:text-amber-400" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              {content.walkCardTitle}
            </span>
            <h4 className="text-lg font-black text-slate-900 dark:text-white">
              {content.walkSub}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {content.walkNote}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 dark:border-slate-800 w-full max-w-full min-w-0">
        <button
          onClick={() => setActiveTab('stabilisation')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'stabilisation'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {content.tabStabilisation}
        </button>

        <button
          onClick={() => setActiveTab('marche')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'marche'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {content.tabMarche}
        </button>

        <button
          onClick={() => setActiveTab('menu')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'menu'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {content.tabMenu}
        </button>

        <button
          onClick={() => setActiveTab('recommandations')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'recommandations'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {content.tabRecommandations}
        </button>
      </div>

      {/* Tab Panels */}
      {/* 1. Stabilisation Plan */}
      {activeTab === 'stabilisation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-400">
            <Scale className="w-5 h-5" />
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{content.stabTitle}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed bg-emerald-50/50 dark:bg-emerald-950/40 p-3.5 rounded-2xl border border-emerald-100 dark:border-emerald-800/60">
            {content.stabP1}
          </p>

          <div className="grid gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{content.stabStep1Title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.stabStep1Desc}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{content.stabStep2Title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.stabStep2Desc}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{content.stabStep3Title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.stabStep3Desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Marche Management */}
      {activeTab === 'marche' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
              <Footprints className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-base font-extrabold">{content.marcheTitle}</h3>
            </div>
            <span className="text-xs font-bold bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-xl border border-amber-200 dark:border-amber-800/60 self-start sm:self-auto">
              {content.marcheTiming}
            </span>
          </div>

          {/* Interactive Walking Stopwatch & Progress */}
          <div className="bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-slate-50 dark:to-slate-850 rounded-2xl p-5 border border-amber-300/40 dark:border-amber-700/50 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {lang === 'darija' || lang === 'ar' ? 'عداد وقت حصة المشي (الهدف: 1h30 دقيقة)' : 'Chronomètre Séance Marche (Objectif : 1h30)'}
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-900 dark:text-white mt-1">
                  {formatWalkTime(walkSeconds)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsWalkTimerActive(!isWalkTimerActive)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95 ${
                    isWalkTimerActive
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {isWalkTimerActive ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>{lang === 'darija' || lang === 'ar' ? 'إيقاف مؤقت' : 'Pause'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>{lang === 'darija' || lang === 'ar' ? 'بدء المشي' : 'Démarrer Marche'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsWalkTimerActive(false);
                    setWalkSeconds(0);
                  }}
                  className="px-3 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'darija' || lang === 'ar' ? 'إعادة' : 'Reset'}</span>
                </button>
              </div>
            </div>

            {/* Progress Bar to 1h30 */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <span>{lang === 'darija' || lang === 'ar' ? 'التقدم نحو ساعة ونصف :' : 'Progression vers 1h30 :'} {walkProgressPct}%</span>
                <span>{walkSeconds >= walkTargetSec ? '🎉 تم إكمال الحصة بنجاح !' : `${Math.max(0, Math.round((walkTargetSec - walkSeconds)/60))} دقيقة متبقية`}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-300"
                  style={{ width: `${walkProgressPct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{content.marcheRule1Title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule1Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{content.marcheRule2Title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule2Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{content.marcheRule3Title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule3Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{content.marcheRule4Title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule4Desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Special Menu for Stabilisation & 15-Day Plan Link */}
      {activeTab === 'menu' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
              <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-extrabold">{content.menuTitle}</h3>
            </div>
            {onNavigateToDiet && (
              <button
                onClick={onNavigateToDiet}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors self-start sm:self-auto"
              >
                <span>{lang === 'darija' || lang === 'ar' ? 'عرض برنامج الـ 15 يوماً بالكامل 📅' : 'Voir les 15 Jours Complets 📅'}</span>
              </button>
            )}
          </div>

          {/* Quick Announcement of 15 days update */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 dark:text-emerald-200">
              <p className="font-bold">
                {lang === 'darija'
                  ? 'تم تحديث برنامج 15 يوماً كاملاً في التطبيق بالأطباق اليومية المخصصة:'
                  : lang === 'ar'
                  ? 'تم تحديث جدول الـ 15 يوماً بالكامل في التطبيق ليناسب تحاليل الدم والمصران الحساس:'
                  : 'Programme de 15 jours complet mis à jour pour le profil Mama Laaziza :'}
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                {lang === 'darija'
                  ? '• حوت الميرلا والصول بالفرن (أبيض خفيف) والسردين لرفع فيتامين D وخفض الكوليسترول.\n• الخبز منخول ناعم بدون نخالة قاسية لتفادي تجريح المصران.\n• كوسة مقشرة وجزر وقرع أحمر (زيرو غازات وبدون ملح ولا سكر).'
                  : lang === 'ar'
                  ? '• أسماك بيضاء وسردين بالفرن، ألياف ذائبة رطبة، استبعاد النخالة القاسية، وزيرو ملح وسكر.'
                  : '• Poissons blancs digestes & sardines au four, zéro son dur, zéro sel ni sucre.'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Breakfast */}
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs">
                <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{content.menuFtour}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{content.menuFtourDesc}</p>
            </div>

            {/* Lunch */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-xs">
                <Salad className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{content.menuGhda}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{content.menuGhdaDesc}</p>
            </div>

            {/* Snack */}
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs">
                <Apple className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{content.menuKskrout}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{content.menuKskroutDesc}</p>
            </div>

            {/* Dinner */}
            <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-teal-900 dark:text-teal-300 font-bold text-xs">
                <Utensils className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{content.menuAcha}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{content.menuAchaDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Health & Medical Recommendations */}
      {activeTab === 'recommandations' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-extrabold">{content.healthTitle}</h3>
          </div>

          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{content.h1}</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{content.h2}</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{content.h3}</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{content.h4}</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <Droplets className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span>{content.h5}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
