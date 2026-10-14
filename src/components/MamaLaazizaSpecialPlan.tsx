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
  Check
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { MamaQuranRadio } from './MamaQuranRadio';

interface Props {
  profile: UserProfile;
  lang: Language;
  onNavigateToDiet?: () => void;
}

export const MamaLaazizaSpecialPlan: React.FC<Props> = ({ profile, lang, onNavigateToDiet }) => {
  const [activeTab, setActiveTab] = useState<'marche' | 'eau' | 'conseils' | 'menu'>('marche');
  const [walkSeconds, setWalkSeconds] = useState(0);
  const [isWalkTimerActive, setIsWalkTimerActive] = useState(false);

  // Daily water glasses tracker (8 glasses = 2 Liters)
  const todayKey = new Date().toISOString().slice(0, 10);
  const [waterGlasses, setWaterGlasses] = useState<number>(() => {
    const saved = localStorage.getItem(`mama_water_${todayKey}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const toggleWaterGlass = (index: number) => {
    const newCount = index + 1 === waterGlasses ? index : index + 1;
    setWaterGlasses(newCount);
    localStorage.setItem(`mama_water_${todayKey}`, newCount.toString());
  };

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
      heroBadge: 'برنامج خاص وحصري لماما لعزيزة (تثبيت 64 كلغ)',
      heroTitle: 'المشي اليومي (1h30) · شرب الماء · نصائح الصحة وتثبيت 64kg',
      heroSubtitle: 'خطة مخصصة لماما لعزيزة ترتكز بالكامل على المشي المنظم في الهواء الطلق، شرب الماء بانتظام، نصائح تثبيت الوزن عند 64 كلغ، وحماية الضغط والعظام، مع الاستماع المباشر لإذاعة محمد السادس للقرآن الكريم (بدون أي أغاني أو حركات رياضية مجهدة).',
      weightCardTitle: 'الوزن المستهدف للتثبيت',
      currentWeight: '64 كلغ (الوزن المثالي المستقر)',
      weightSub: 'الهدف: الحفاظ على 64kg بدون زيادة وبدون نزول حاد، مع توازن الكتلة العضلية والمائية وحماية العظام.',
      walkCardTitle: 'تنظيم حصص المشي المنظم',
      walkSub: '1h30 دقيقة مشي مريح في الهواء الطلق (مرتين في الأسبوع)',
      walkNote: 'المشي الهادئ وشرب الماء بانتظام كافيان 100% لتنشيط الدورة الدموية وحرق السعرات وتثبيت الوزن دون الحاجة لأي حركات مجهدة.',
      
      tabMarche: '🚶‍♀️ المشي والمدة (1h30)',
      tabEau: '💧 شرب الماء والترطيب',
      tabConseils: '🩺 نصائح الصحة وتثبيت 64kg',
      tabMenu: '🍲 ماكلة خاصة للتثبيت',

      // Tab 1: Marche & Duration
      marcheTitle: 'دليل تسيير المشي والمدة المنصوح بها (1h30):',
      marcheTiming: 'مرتين في الأسبوع (الثلاثاء والجمعة أو الأربعاء والسبت)',
      marcheDurationTitle: 'شحال مدة المشي؟ (1h30 دقيقة = 90 دقيقة)',
      marcheDurationDesc: 'مدة المشي المحددة لماما لعزيزة هي ساعة ونصف (1h30) بوتيرة هادئة ومستمرة. هذه المدة كافية لحرق السعرات وتنشيط القلب بدون سرعة وبدون لهاث وبدون أي ضغط على الركابي.',
      marcheRule1Title: 'قبل الخروج للمشي (30 دقيقة قبل):',
      marcheRule1Desc: 'شرب كأس كبير من الماء معتدل الحرارة، وتناول 3 حبات لوز أو نصف موزة لتفادي هبوط السكر.',
      marcheRule2Title: 'خلال حصة 1h30 دقيقة:',
      marcheRule2Desc: 'المشي بخطوات مريحة في حديقة أو كورنيش مستوٍ، مع ارتداء حذاء مريح ذو قاعدة طبية لامتصاص الصدمات وحماية المفاصل.',
      marcheRule3Title: 'الاستفادة من أشعة الشمس وفيتامين (D):',
      marcheRule3Desc: 'المشي في الصباح بين 09:30 و 11:00 للاستفادة من أشعة الشمس الطبيعية لرفع فيتامين D فوق 30 وتثبيت الكالسيوم في العظام.',
      marcheRule4Title: 'بعد العودة للمنزل:',
      marcheRule4Desc: 'شرب كأسين من الماء الدافئ تدريجياً، ورفع الرجلين على وسادة لمدة 10 دقائق لراحة الدورة الدموية.',

      // Tab 2: Eau & Hydration
      eauTitle: 'دليل شرب الماء والترطيب اليومي لماما لعزيزة:',
      eauTarget: 'الهدف اليومي: 1.5 لتر إلى 2 لتر (8 كؤوس من الماء الدافئ يومياً)',
      eauTrackerTitle: 'تتبع كؤوس الماء لليوم (اضغطي لتسجيل الكأس):',
      eauRule1Title: '1. كأس ماء دافئ على الريق فور الاستيقاظ (08:00):',
      eauRule1Desc: 'يغسل الكليتين بلطف، ينشط الأمعاء والمصران، ويطرد السموم المتراكمة أثناء النوم.',
      eauRule2Title: '2. كأس ماء 30 دقيقة قبل المشي (09:00):',
      eauRule2Desc: 'يرطب العضلات والأوتار ويمنع الشد العضلي وجفاف الحلق أثناء الخروج.',
      eauRule3Title: '3. رشفات صغيرة أثناء المشي عند الإحساس بالعطش:',
      eauRule3Desc: 'حمل قنينة ماء صغيرة وترطيب الفم برشفات هادئة بدون بلع كميات كبيرة دفعة واحدة.',
      eauRule4Title: '4. كأسان من الماء الدافئ بعد العودة من المشي (11:15):',
      eauRule4Desc: 'شرب كأسين تدريجياً لتعويض ما فقده الجسم مع العرق ولتليين المفاصل.',
      eauRule5Title: '5. كأس ماء قبل كل وجبة بنصف ساعة (قبل الغداء والعشاء):',
      eauRule5Desc: 'يسهل عملية الهضم، يحمي جدار المعدة، ويساعد على عدم الإفراط في الأكل.',
      eauRule6Title: '6. شاي الأعشاب المسائي (اللويزة أو البابونج بدون سكر):',
      eauRule6Desc: 'يوفر ترطيباً ممتازاً للأعصاب ويساعد على نوم هادئ بدون أي تأثير على ضغط الدم.',
      eauWarningTitle: '⚠️ قاعدة ذهبية في شرب الماء:',
      eauWarningDesc: 'الابتعاد التام عن شرب الماء البارد أو المثلج! الماء الدافئ أو المعتدل بدرجة حرارة الغرفة يحمي المصران الحساس ويمنع تشنج المعدة. الشرب جالسة وعلى 3 دفعات كما في السنة الشريفة.',

      // Tab 3: Medical & Health
      healthTitle: 'النصائح الطبية وقواعد تثبيت الوزن عند 64 كلغ:',
      h1: 'الملح والطونسيو (الضغط الدموي): الامتناع التام عن الملح واستبداله بالليمون الحامض والكمون البلدي وزيت الزيتون. وتجنب الأعشاب التي ترفع الضغط كاليازير (إكليل الجبل) والعرقسوس، واعتماد اللويزة والبابونج فقط.',
      h2: 'المصران الحساس والخبز: الاعتماد على ألياف ذائبة رطبة (القرعة الخضراء المقشرة، الجزر، القرعة الحمراء). وتجنب الخبز بالنخالة القاسية، واعتماد خبز القمح اللين أو الشعير المنخول ناعماً.',
      h3: 'تفادي الغازات والنفخة: الامتناع عن الكرنب (الملفوف)، الشفلور، البروكولي، والفلفل النيء، واستعمال الكمون والنافع لطرد الغازات.',
      h4: 'أنواع الأسماك والكوليسترول: الأسماك البيضاء الخفيفة (الميرلا، الصول، الدَّوْرَاد) + السردين الطازج بالفرن بدون قلي (غني بالأوميغا 3 وفيتامين D لرفعه فوق 30).',
      h5: 'تثبيت الوزن في 64 كلغ: ميزان متوازن (1450 سعرة حرارية/يوم) بدون حمية قاسية وبدون صدمات، للحفاظ على قوة العظام وتفادي هشاشة العظام.',

      // Tab 4: Menu
      menuTitle: 'برنامج الأكل اليومي المخصص لتثبيت 64 كلغ (بدون ملح وبدون سكر):',
      menuFtour: 'الفطور (08:30):',
      menuFtourDesc: 'زلافة حسوة الشعير (بلبولة بلدي) بزيت العود النافع وحبة حلاوة (بدون ملح) + كاس حليب معقم خالي الدسم + شاي أعشاب باللويزة بدون سكر.',
      menuGhda: 'الغداء (13:30):',
      menuGhdaDesc: 'طاجين الخضر الموسمية (قرعة سلاوية وخضراء، جلبانة، خيزو) مع سمك السردين الطازج في الفرن بالكمون والثوم والليمون الحامض + ربع خبز شعير كامل.',
      menuKskrout: 'كاسكروط / اللمجة (17:00):',
      menuKskroutDesc: 'تفاحة أو إجاصة طازجة + 5 حبات جوز (كركاع) بلدي غني بالأوميغا 3 المفيد للدماغ والقلب + مغلي البابونج أو اللويزة.',
      menuAcha: 'العشاء (19:30):',
      menuAchaDesc: 'شوربة خفيفة بالقرع الأحمر والكرفس واللفت بزيت الزيتون البكر ورشة كمون (بدون ملح) أو ياغورت طبيعي بدون سكر.',
    },
    ar: {
      heroBadge: 'برنامج خاص وحصري لماما لعزيزة (تثبيت 64 كغ)',
      heroTitle: 'المشي اليومي (1h30) · شرب الماء · نصائح الصحة وتثبيت 64 كغ',
      heroSubtitle: 'خطة مخصصة لماما لعزيزة ترتكز بالكامل على المشي المنظم في الهواء الطلق، شرب الماء بانتظام، نصائح تثبيت الوزن عند 64 كغ، وحماية الضغط والعظام، مع الاستماع المباشر لإذاعة محمد السادس للقرآن الكريم (بدون أي أغانٍ أو تمارين مجهدة).',
      weightCardTitle: 'الوزن المستهدف للتثبيت',
      currentWeight: '64 كغ (الوزن المثالي المستقر)',
      weightSub: 'الهدف: الحفاظ على 64 كغ بدون زيادة وبدون نزول حاد، مع توازن الكتلة العضلية والمائية وحماية العظام.',
      walkCardTitle: 'تنظيم حصص المشي المنظم',
      walkSub: 'ساعة ونصف (1h30) مشي مريح في الهواء الطلق (مرتين في الأسبوع)',
      walkNote: 'المشي الهادئ وشرب الماء بانتظام كافيان تماماً لتنشيط الدورة الدموية وحرق السعرات وتثبيت الوزن دون الحاجة لأي حركات مجهدة.',
      
      tabMarche: '🚶‍♀️ المشي والمدة (1h30)',
      tabEau: '💧 شرب الماء والترطيب',
      tabConseils: '🩺 نصائح الصحة وتثبيت 64 كغ',
      tabMenu: '🍲 وجبات التثبيت المتوازنة',

      marcheTitle: 'دليل تسيير المشي والمدة المنصوح بها (1h30):',
      marcheTiming: 'مرتان في الأسبوع (الثلاثاء والجمعة أو الأربعاء والسبت)',
      marcheDurationTitle: 'كم مدة المشي؟ (1h30 = 90 دقيقة)',
      marcheDurationDesc: 'مدة المشي المحددة لماما لعزيزة هي ساعة ونصف (1h30) بوتيرة هادئة ومستمرة. هذه المدة كافية لحرق السعرات وتنشيط القلب بدون سرعة وبدون إجهاد وبدون أي ضغط على الركبتين.',
      marcheRule1Title: 'قبل الخروج للمشي (بـ 30 دقيقة):',
      marcheRule1Desc: 'شرب كأس كبير من الماء معتدل الحرارة، وتناول 3 حبات لوز لتفادي هبوط السكر.',
      marcheRule2Title: 'أثناء حصة المشي (1h30):',
      marcheRule2Desc: 'المشي بخطوات مريحة في حديقة مستوية مع ارتداء حذاء مريح ممتص للصدمات لحماية المفاصل.',
      marcheRule3Title: 'الاستفادة من فيتامين د الطبيعي:',
      marcheRule3Desc: 'المشي صباحاً تحت أشعة الشمس المعتدلة بين 09:30 و 11:00 لرفع فيتامين D وتثبيت الكالسيوم في العظام.',
      marcheRule4Title: 'بعد العودة إلى المنزل:',
      marcheRule4Desc: 'شرب كأسين من الماء الدافئ تدريجياً وإراحة القدمين على وسادة لمدة 10 دقائق.',

      eauTitle: 'دليل شرب الماء والترطيب اليومي لماما لعزيزة:',
      eauTarget: 'الهدف اليومي: 1.5 لتر إلى 2 لتر (8 كؤوس من الماء الدافئ يومياً)',
      eauTrackerTitle: 'تتبع كؤوس الماء اليومية (اضغطي لتسجيل الكأس):',
      eauRule1Title: '1. كأس ماء دافئ على الريق فور الاستيقاظ:',
      eauRule1Desc: 'ينشط الكليتين والأمعاء ويطرد السموم بلطف.',
      eauRule2Title: '2. كأس ماء قبل المشي بـ 30 دقيقة:',
      eauRule2Desc: 'يرطب العضلات والأوتار ويمنع التشنج العضلي.',
      eauRule3Title: '3. رشفات صغيرة أثناء المشي:',
      eauRule3Desc: 'ترطيب الحلق بهدوء دون شرب كميات كبيرة دفعة واحدة.',
      eauRule4Title: '4. كأسان من الماء الدافئ بعد العودة من المشي:',
      eauRule4Desc: 'تعويض السوائل المفقودة وتليين المفاصل.',
      eauRule5Title: '5. كأس ماء قبل كل وجبة بنصف ساعة:',
      eauRule5Desc: 'يسهل الهضم ويحمي جدار المعدة.',
      eauRule6Title: '6. شاي الأعشاب المسائي (لويزة أو بابونج بدون سكر):',
      eauRule6Desc: 'ترطيب مهدئ للأعصاب يساعد على النوم العميق دون التأثير على الضغط.',
      eauWarningTitle: '⚠️ قاعدة ذهبية في شرب الماء:',
      eauWarningDesc: 'ممنوع شرب الماء البارد أو المثلج! الماء الدافئ أو المعتدل يحمي القولون الحساس ويمنع التشنج. الشرب جالسة وعلى 3 دفعات.',

      healthTitle: 'النصائح الطبية وتثبيت الوزن عند 64 كغ:',
      h1: 'الملح وضغط الدم: تقليل الملح واستبداله بالليمون والكمون وزيت الزيتون. تجنب اليازير وعرق السوس، واعتماد اللويزة والبابونج.',
      h2: 'القولون الحساس والخبز: اعتماد ألياف ذائبة رطبة (القرع الأخضر، الجزر، القرع الأحمر). تجنب خبز النخالة القاسية.',
      h3: 'تفادي الغازات: تجنب الكرنب، الشفلور، البروكولي، والفلفل النيء. استعمال الكمون واليانسون.',
      h4: 'الأسماك وفيتامين د: الأسماك البيضاء (الميرلا، الصول) والسردين الطازج بالفرن بدون قلي لرفع فيتامين D فوق 30.',
      h5: 'تثبيت 64 كغ: ميزان طاقة متوازن (1450 سعرة حرارية/يوم) بدون حمية قاسية لحماية كثافة العظام.',

      menuTitle: 'البرنامج الغذائي اليومي لتثبيت الوزن (64 كغ):',
      menuFtour: 'الفطور (08:30):',
      menuFtourDesc: 'حساء شعير بلدي (بلبولة) بزيت الزيتون واليانسون (بدون ملح) + كأس حليب خالي الدسم + شاي لويزة بدون سكر.',
      menuGhda: 'الغداء (13:30):',
      menuGhdaDesc: 'طاجين الخضار الموسمية مع سمك السردين الطازج في الفرن بالكمون والثوم والليمون + ربع خبز شعير كامل.',
      menuKskrout: 'اللمجة (17:00):',
      menuKskroutDesc: 'تفاحة أو إجاصة طازجة + 5 حبات جوز بلدي غني بالأوميغا 3 + مغلي البابونج.',
      menuAcha: 'العشاء (19:30):',
      menuAchaDesc: 'شوربة خفيفة بالقرع الأحمر والكرفس بزيت الزيتون البكر والكمون (بدون ملح) أو ياغورت طبيعي بدون سكر.',
    },
    fr: {
      heroBadge: 'Programme Dédié Mama Laaziza (Stabilisation 64 kg)',
      heroTitle: 'Marche Quotidienne (1h30) · Hydratation · Conseils Santé & 64kg',
      heroSubtitle: 'Plan exclusif axé à 100% sur la marche active en plein air, l\'hydratation régulière en eau tiède, la stabilisation du poids à 64 kg et la protection articulaire/tension, avec la Radio Mohammed VI du Saint Coran (zéro musique/chansons, zéro exercice éprouvant).',
      weightCardTitle: 'Poids Cible de Stabilisation',
      currentWeight: '64 kg (Poids Idéal Stable)',
      weightSub: 'Objectif : Maintenir 64 kg sans reprise et sans fonte musculaire, en préservant le capital osseux.',
      walkCardTitle: 'Gestion des Séances de Marche',
      walkSub: '1h30 de marche douce en plein air (2x par semaine)',
      walkNote: 'La marche sereine et une bonne hydratation suffisent à 100% pour la circulation et le maintien du poids, sans aucun mouvement contraignant.',
      
      tabMarche: '🚶‍♀️ Marche & Durée (1h30)',
      tabEau: '💧 Hydratation & Eau',
      tabConseils: '🩺 Conseils Santé & 64kg',
      tabMenu: '🍲 Menu de Stabilisation',

      marcheTitle: 'Guide de la Marche et Durée Recommandée (1h30) :',
      marcheTiming: '2 fois par semaine (Mardi/Vendredi ou Mercredi/Samedi)',
      marcheDurationTitle: 'Quelle durée de marche ? (1h30 = 90 minutes)',
      marcheDurationDesc: 'La durée recommandée pour Mama Laaziza est de 1 heure et demie (1h30) à allure régulière et confortable. Cette durée brûle les graisses en douceur, renforce le cœur sans essoufflement et ne sollicite pas les genoux.',
      marcheRule1Title: 'Avant de sortir marcher (30 min avant) :',
      marcheRule1Desc: 'Boire un grand verre d\'eau tempérée et prendre 3 amandes ou 1/2 banane pour stabiliser la glycémie.',
      marcheRule2Title: 'Pendant la séance de 1h30 :',
      marcheRule2Desc: 'Marche sur terrain plat (parc ou corniche) avec de bonnes chaussures de marche à semelles amortissantes.',
      marcheRule3Title: 'Exposition au soleil doux (Vitamine D) :',
      marcheRule3Desc: 'Sortie matinale entre 09h30 et 11h00 pour fixer la Vitamine D naturelle et renforcer les os.',
      marcheRule4Title: 'Après le retour à la maison :',
      marcheRule4Desc: 'Boire 2 verres d\'eau tiède par petites gorgées et surélever les jambes 10 minutes sur un coussin.',

      eauTitle: 'Guide de l\'Hydratation Quotidienne pour Mama Laaziza :',
      eauTarget: 'Objectif : 1,5 L à 2 L d\'eau tiède par jour (8 verres)',
      eauTrackerTitle: 'Suivi des verres d\'eau du jour (Cliquez pour valider) :',
      eauRule1Title: '1. Un grand verre d\'eau tiède à jeun au réveil (08h00) :',
      eauRule1Desc: 'Purifie les reins, active le transit intestinal en douceur et élimine les toxines nocturnes.',
      eauRule2Title: '2. Un verre d\'eau 30 minutes avant la marche (09h00) :',
      eauRule2Desc: 'Hydrate les tendons et les articulations, prévient les crampes et la gorge sèche.',
      eauRule3Title: '3. Petites gorgées régulières pendant la marche :',
      eauRule3Desc: 'Garder une petite bouteille et humidifier la gorge par petites gorgées lentes si sensation de soif.',
      eauRule4Title: '4. Deux verres d\'eau tiède au retour de marche (11h15) :',
      eauRule4Desc: 'Réhydratation progressive pour détendre la musculature et compenser la transpiration.',
      eauRule5Title: '5. Un verre d\'eau 30 minutes avant chaque repas :',
      eauRule5Desc: 'Facilite la digestion et protège l\'estomac contre les aigreurs.',
      eauRule6Title: '6. Tisane du soir (Verveine / Louiza ou Camomille sans sucre) :',
      eauRule6Desc: 'Hydratation apaisante pour le système nerveux et sommeil réparateur sans impact sur la tension.',
      eauWarningTitle: '⚠️ Règle d\'or pour l\'eau :',
      eauWarningDesc: 'Bannir l\'eau glacée ! Toujours tiède ou à température ambiante pour éviter les spasmes du côlon irritable. Boire assise et en 3 gorgées.',

      healthTitle: 'Directives Médicales & Stabilisation à 64 kg :',
      h1: 'Sans sel & Tension : Zéro sel de table, assaisonner au jus de citron frais et cumin doux. Proscrire le romarin (Yazir) et la réglisse. Tisanes de verveine et camomille autorisées.',
      h2: 'Côlon sensible & Pain : Fibres douces cuites (courgettes épluchées, carottes, potiron). Bannir le son dur qui irrite. Préférer le pain de farine tamisée douce ou orge.',
      h3: 'Zéro gaz : Éviter les choux, chou-fleur, brocoli et poivrons crus. Cumin doux et anis vert recommandés.',
      h4: 'Poissons & Vitamine D : Poissons blancs digestes (merlan, sole, colin) et sardines fraîches au four pour dépasser 30 ng/mL de Vitamine D.',
      h5: 'Stabilisation 64 kg : 1450 kcal/jour adaptées à la marche, zéro régime d\'éviction violent pour préserver la masse osseuse.',

      menuTitle: 'Menu de Stabilisation 64 kg (Sans Sel & Sans Sucre) :',
      menuFtour: 'Petit-déjeuner (08h30) :',
      menuFtourDesc: 'Bouillon d\'orge douce (belboula) à l\'huile d\'olive et anis vert (sans sel) + lait écrémé + thé verveine sans sucre.',
      menuGhda: 'Déjeuner (13h30) :',
      menuGhdaDesc: 'Tajine de légumes doux avec sardines fraîches au four au citron et cumin + 1/4 de pain d\'orge tamisé.',
      menuKskrout: 'Goûter (17h00) :',
      menuKskroutDesc: '1 pomme ou poire douce + 5 cerneaux de noix (oméga 3) + infusion camomille.',
      menuAcha: 'Dîner (19h30) :',
      menuAchaDesc: 'Soupe légère potiron-céleri à l\'huile d\'olive et cumin (sans sel) ou yaourt nature sans sucre.',
    },
  }[lang];

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

          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-semibold text-amber-200">
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-amber-400" />
              <span>{lang === 'darija' || lang === 'ar' ? 'المشي 1h30 (مرتين فالسيمانة)' : 'Marche 1h30 (2x/semaine)'}</span>
            </span>
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'darija' || lang === 'ar' ? 'شرب 2L ماء دافئ يومياً' : '2L Eau Tiède / Jour'}</span>
            </span>
            <span className="bg-black/30 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'darija' || lang === 'ar' ? 'تثبيت 64kg بدون ملح وبدون سكر' : 'Stabilisation 64kg Sans Sel/Sucre'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Button & Live Player: Radio Mohammed VI du Saint Coran (No songs, peaceful Quran recitation) */}
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

      {/* 4 Interactive Tabs Navigation (Grid 2x2 on mobile for full visibility) */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 pb-1 border-b border-slate-200 dark:border-slate-800 w-full max-w-full">
        <button
          onClick={() => setActiveTab('marche')}
          className={`px-3 py-2.5 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            activeTab === 'marche'
              ? 'bg-amber-600 text-white shadow-sm ring-1 ring-amber-500'
              : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
          }`}
        >
          <Footprints className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="truncate">{content.tabMarche}</span>
        </button>

        <button
          onClick={() => setActiveTab('eau')}
          className={`px-3 py-2.5 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            activeTab === 'eau'
              ? 'bg-cyan-700 text-white shadow-sm ring-1 ring-cyan-600'
              : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
          }`}
        >
          <Droplets className="w-4 h-4 text-cyan-300 shrink-0" />
          <span className="truncate">{content.tabEau}</span>
        </button>

        <button
          onClick={() => setActiveTab('conseils')}
          className={`px-3 py-2.5 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            activeTab === 'conseils'
              ? 'bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-600'
              : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="truncate">{content.tabConseils}</span>
        </button>

        <button
          onClick={() => setActiveTab('menu')}
          className={`px-3 py-2.5 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            activeTab === 'menu'
              ? 'bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-600'
              : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
          }`}
        >
          <Utensils className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="truncate">{content.tabMenu}</span>
        </button>
      </div>

      {/* Tab Panels */}
      {/* 1. Marche Management & Duration */}
      {activeTab === 'marche' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in fade-in duration-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
              <Footprints className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-base font-extrabold">{content.marcheTitle}</h3>
            </div>
            <span className="text-xs font-bold bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-xl border border-amber-200 dark:border-amber-800/60 self-start sm:self-auto">
              {content.marcheTiming}
            </span>
          </div>

          {/* Explanation: Ch7al Duration */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/40 dark:border-amber-700/50 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-extrabold text-sm">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h4>{content.marcheDurationTitle}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              {content.marcheDurationDesc}
            </p>
          </div>

          {/* Interactive Walking Stopwatch & Progress */}
          <div className="bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-slate-50 dark:to-slate-850 rounded-2xl p-5 border border-amber-300/40 dark:border-amber-700/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {lang === 'darija' || lang === 'ar' ? 'كرونو المشي التفاعلي لماما لعزيزة (هدف 1h30)' : 'Chronomètre de Marche Active (Cible 1h30)'}
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
                {walkProgressPct}%
              </span>
            </div>

            {/* Time Display */}
            <div className="text-center py-2">
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
                {formatWalkTime(walkSeconds)}
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mt-1">
                {lang === 'darija' || lang === 'ar' ? 'الهدف الموصى به: 01:30:00 (ساعة ونصف)' : 'Objectif : 01:30:00 (1h30 de marche)'}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-emerald-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${walkProgressPct}%` }}
              />
            </div>

            {/* Walk Controls */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <button
                onClick={() => setIsWalkTimerActive(!isWalkTimerActive)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md ${
                  isWalkTimerActive
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isWalkTimerActive ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>{lang === 'darija' || lang === 'ar' ? 'توقيف مؤقت' : 'Pause'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>{lang === 'darija' || lang === 'ar' ? 'بداي المشي دابا' : 'Démarrer la marche'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsWalkTimerActive(false);
                  setWalkSeconds(0);
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{lang === 'darija' || lang === 'ar' ? 'إعادة من الصفر' : 'Réinitialiser'}</span>
              </button>
            </div>

            {/* Hydration Reminder inside Walk Timer */}
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/30 flex items-center gap-2.5 text-xs text-cyan-900 dark:text-cyan-200">
              <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>
                {lang === 'darija' || lang === 'ar'
                  ? 'تذكير أثناء المشي: اشربي رشفات صغيرة من الماء كل 30 دقيقة لترطيب المفاصل وتفادي الجفاف.'
                  : 'Rappel pendant la marche : buvez de petites gorgées d\'eau toutes les 30 minutes.'}
              </span>
            </div>
          </div>

          {/* 4 Essential Walking Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                <Coffee className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4>{content.marcheRule1Title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule1Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                <Footprints className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h4>{content.marcheRule2Title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule2Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                <Sun className="w-4 h-4 text-amber-500" />
                <h4>{content.marcheRule3Title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule3Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-xs">
                <Heart className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <h4>{content.marcheRule4Title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.marcheRule4Desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Hydratation & Drinking Water Guide (Tchrab Lma) */}
      {activeTab === 'eau' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in fade-in duration-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
              <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-base font-extrabold">{content.eauTitle}</h3>
            </div>
            <span className="text-xs font-bold bg-cyan-50 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-xl border border-cyan-200 dark:border-cyan-800/60 self-start sm:self-auto">
              {content.eauTarget}
            </span>
          </div>

          {/* Interactive 8 Glasses of Water Tracker */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-slate-50 dark:to-slate-850 border border-cyan-300/40 dark:border-cyan-700/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{content.eauTrackerTitle}</span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {lang === 'darija' || lang === 'ar'
                    ? `شربتِ ${waterGlasses} من أصل 8 كؤوس (${(waterGlasses * 0.25).toFixed(2)} لتر / 2 لتر)`
                    : `${waterGlasses} verres sur 8 bus (${(waterGlasses * 0.25).toFixed(2)}L / 2L)`}
                </p>
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-400/30">
                {Math.round((waterGlasses / 8) * 100)}%
              </span>
            </div>

            {/* 8 Glasses Buttons */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 pt-1">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => {
                const isDrunk = idx < waterGlasses;
                return (
                  <button
                    key={idx}
                    onClick={() => toggleWaterGlass(idx)}
                    className={`py-3 px-2 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isDrunk
                        ? 'bg-gradient-to-b from-cyan-500 to-teal-600 text-white border-cyan-400 shadow-md ring-2 ring-cyan-400/30'
                        : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700 hover:border-cyan-400'
                    }`}
                  >
                    <Droplets className={`w-5 h-5 ${isDrunk ? 'text-white fill-white' : 'text-slate-300 dark:text-slate-600'}`} />
                    <span className="text-[10px] font-bold">
                      {isDrunk ? `✓ كاس ${idx + 1}` : `كاس ${idx + 1}`}
                    </span>
                    <span className="text-[8.5px] opacity-80">250 ml</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Golden Temperature Warning */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/40 dark:border-amber-700/50 space-y-1">
            <h4 className="text-xs font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{content.eauWarningTitle}</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              {content.eauWarningDesc}
            </p>
          </div>

          {/* Detailed Water Drinking Moments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{content.eauRule1Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule1Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-emerald-500" />
                <span>{content.eauRule2Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule2Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span>{content.eauRule3Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule3Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{content.eauRule4Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule4Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-emerald-500" />
                <span>{content.eauRule5Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule5Desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>{content.eauRule6Title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{content.eauRule6Desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Medical & Health Recommendations & Stabilisation 64kg */}
      {activeTab === 'conseils' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-extrabold">{content.healthTitle}</h3>
          </div>

          <div className="grid gap-3.5">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{content.h1}</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{content.h2}</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{content.h3}</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{content.h4}</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
              <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{content.h5}</span>
            </div>
          </div>
        </div>
      )}

      {/* 4. Complete Balanced Meals for 64kg Stabilisation (No salt, no sugar) */}
      {activeTab === 'menu' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-in fade-in duration-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
              <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-extrabold">{content.menuTitle}</h3>
            </div>
            {onNavigateToDiet && (
              <button
                onClick={onNavigateToDiet}
                className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline self-start sm:self-auto"
              >
                {lang === 'darija' || lang === 'ar' ? 'عرض جدول 15 يوماً كاملاً ←' : 'Voir tout le menu 15 jours ←'}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Breakfast */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-xs">
                <Coffee className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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
    </div>
  );
};
