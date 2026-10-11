export interface MilitaryExercise {
  id: string;
  name: {
    fr: string;
    ar: string;
    darija: string;
  };
  profileTarget: 'all' | 'homme_44' | 'femme_65' | 'femme_36';
  targetMuscles: string;
  reps: string;
  sets: number;
  restSeconds: number;
  epocBurnScore: 'high' | 'extreme' | 'moderate';
  kneeSafe: boolean;
  description: {
    fr: string;
    ar: string;
    darija: string;
  };
  tacticalTip: {
    fr: string;
    ar: string;
    darija: string;
  };
  animationType: 'military_pushup' | 'military_squat' | 'commando_plank' | 'chair_dips' | 'australian_rows' | 'hollow_body' | 'wall_sit';
  youtubeQuery: string;
}

export const MILITARY_CALISTHENICS_DATA: MilitaryExercise[] = [
  {
    id: 'mil_pushup',
    name: {
      fr: 'Pompes Militaires Commandos (Inclinées ou au Sol)',
      ar: 'تمرين الضغط العسكري كوماندوز',
      darija: 'بومب عسكرية كوماندوز (فالحيط، على الطابلة ولا فالأرض)',
    },
    profileTarget: 'all',
    targetMuscles: 'Pectoraux, Triceps, Sangle abdominale, Deltoïdes',
    reps: '10 à 15 reps strictes',
    sets: 4,
    restSeconds: 45,
    epocBurnScore: 'high',
    kneeSafe: true,
    description: {
      fr: 'Corps gainé comme une barre de fer. Descendez le torse à 5 cm du support, coudes à 45 degrés le long du corps, puis repoussez puissamment.',
      ar: 'جسم مشدود كالحديد. انزل بالصدر حتى يقترب من السطح واصعد بقوة مع ثبات الجذع.',
      darija: 'زير كرشك وضهرك بحال لوحة العود. هبط صدرك حتى يقرب للأرض ودفع بقوة وتفركع النفس.',
    },
    tacticalTip: {
      fr: 'Pour le profil 1 (102kg), commencez sur une table solide ou le mur pour soulager les poignets.',
      ar: 'للرجل (102 كغ)، ابدأ على طاولة ثابتة لتخفيف الضغط على المعصمين.',
      darija: 'للراجل 102 كلغ، بدا فوق طابلة صحيحة باش ماتضغطش على معاصم يديك.',
    },
    animationType: 'military_pushup',
    youtubeQuery: 'military push ups proper form calisthenics',
  },
  {
    id: 'mil_squat',
    name: {
      fr: 'Squat Tactique Commando au Poids du Corps',
      ar: 'سكوات عسكري تكتيكي بالوزن الذاتي',
      darija: 'سكوات عسكري ثقيل بالوزن ديال الجسم (حارق الشحم)',
    },
    profileTarget: 'homme_44',
    targetMuscles: 'Quadriceps, Fessiers, Ischios, Tronc',
    reps: '12 à 15 reps',
    sets: 4,
    restSeconds: 60,
    epocBurnScore: 'extreme',
    kneeSafe: false,
    description: {
      fr: 'Pieds ancrés dans le sol largeur des épaules. Descendez les hanches vers l\'arrière comme pour vous asseoir sur une caisse, puis explosez en montant en contractant les fessiers.',
      ar: 'ثبّت قدميك بعرض الكتفين. اهبط بالحوض للخلف بانضباط ثم اصعد للأعلى مع قبض المقعدة.',
      darija: 'حط رجليك مزيان فالأرض قد كتافك. هبط مقعدتك بحال إلى غاتجلس وعاود طلع بجهد وزير العضلات.',
    },
    tacticalTip: {
      fr: 'Les mains sont jointes devant le menton en garde de combat pour garder le buste parfaitement droit.',
      ar: 'اجعل اليدين مضمومتين أمام الصدر لحفظ استقامة الظهر.',
      darija: 'جمع يديك عند وجهك باش ضهرك يبقى مسرح وواقف.',
    },
    animationType: 'military_squat',
    youtubeQuery: 'calisthenics bodyweight squat military training',
  },
  {
    id: 'mil_dips',
    name: {
      fr: 'Dips Militaires sur Chaise ou Support Rigide',
      ar: 'ديبس عسكري بين كرسيين للذراعين والصدر',
      darija: 'ديبس كوماندوز فكرسي صحيح (لتقوية اليدين والكتف)',
    },
    profileTarget: 'all',
    targetMuscles: 'Triceps, Pectoraux inférieurs, Épaules',
    reps: '8 à 12 reps',
    sets: 3,
    restSeconds: 45,
    epocBurnScore: 'high',
    kneeSafe: true,
    description: {
      fr: 'Dos au support, mains agrippées à l\'assise, jambes tendues ou fléchies. Descendez jusqu\'à avoir les coudes à 90 degrés, puis repoussez fermement.',
      ar: 'ظهرك للمسند، امسك الحافة واثنِ المرفقين حتى 90 درجة ثم ادفع للأعلى.',
      darija: 'عطي بضهرك للكرسي، حط يديك فالقنت وهبط بكوعك لـ 90 درجة وعاود دفع بيديك الفوق.',
    },
    tacticalTip: {
      fr: 'Ne laissez pas vos épaules s\'enrouler vers l\'avant.',
      ar: 'حافظ على استقامة الكتفين والصدر للأمام.',
      darija: 'خلي صدرك مفرود وماتكمش كتافك.',
    },
    animationType: 'chair_dips',
    youtubeQuery: 'chair dips calisthenics military form',
  },
  {
    id: 'mil_plank',
    name: {
      fr: 'Planche Commando Militaire (Gainage d\'Acier)',
      ar: 'بلانك كوماندوز عسكري لشد البطن والظهر',
      darija: 'بلانك عسكري كوماندوز (تفركيع شحمة الكرش والخواصر)',
    },
    profileTarget: 'all',
    targetMuscles: 'Abdominaux profonds, Transverse, Lombaires, Épaules',
    reps: '30 à 60 secondes en apnée contrôlée',
    sets: 3,
    restSeconds: 45,
    epocBurnScore: 'high',
    kneeSafe: true,
    description: {
      fr: 'En appui sur les avant-bras et la pointe des pieds (ou genoux si débutant). Rétroversion du bassin, nombril aspiré vers la colonne vertébrale.',
      ar: 'ارتكاز على الساعدين وأصابع القدمين مع شفط البطن للداخل واستقامة كاملة.',
      darija: 'تكا على كوعيك وصباع رجليك، زير كرشك بحال شي حد غايضربك فيها وماتعوجش ضهرك.',
    },
    tacticalTip: {
      fr: 'Contractez les fessiers au maximum pour verrouiller les lombaires.',
      ar: 'اقبض عضلات المقعدة لحماية أسفل الظهر.',
      darija: 'زير مقعدتك وكرشك مزيان باش تحمي السنسول د الظهر.',
    },
    animationType: 'commando_plank',
    youtubeQuery: 'military plank core strength calisthenics',
  },
  {
    id: 'mil_rows',
    name: {
      fr: 'Tirage Australien Commando (Inverted Rows)',
      ar: 'تجديف أسترالي عكسي لتقوية الظهر والأكتاف',
      darija: 'تجباد الكوماندوز تحت طابلة صحيحة (تقوية السنسول والكتف بلا ركابي)',
    },
    profileTarget: 'femme_36',
    targetMuscles: 'Grand dorsal, Trapèzes, Biceps, Arrière d\'épaules',
    reps: '10 à 12 reps',
    sets: 4,
    restSeconds: 45,
    epocBurnScore: 'extreme',
    kneeSafe: true,
    description: {
      fr: 'Allongé sous une table solide ou une barre basse. Attrapez le bord et tirez votre poitrine vers le haut. ZÉRO impact sur les genoux !',
      ar: 'استلقِ أسفل طاولة ثابتة، امسك الحافة واسحب صدرك للأعلى. خالٍ تماماً من إجهاد الركبة!',
      darija: 'نعس تحت طابلة صحيحة، شد فالقنت وتيري بصدرك الفوق. 0% ضغط على الركابي!',
    },
    tacticalTip: {
      fr: 'Le meilleur exercice au monde pour un dos sculpté et une posture militaire sans toucher aux genoux.',
      ar: 'أفضل تمرين لنحت الظهر وتعديل القامة بدون لمس مفصل الركبة.',
      darija: 'أحسن حركة فالكاليستنيكس كتقد الظهر وتقويه بلا ماتقيس ركبتك نهائياً.',
    },
    animationType: 'australian_rows',
    youtubeQuery: 'inverted rows calisthenics back under table',
  },
  {
    id: 'mil_wall_sit',
    name: {
      fr: 'Chaise Militaire Isométrique au Mur (Wall Sit)',
      ar: 'الكرسي العسكري الثابت على الجدار',
      darija: 'الكرسي فالصح فالحيط (ثبات عسكري كيقوي العظام)',
    },
    profileTarget: 'femme_65',
    targetMuscles: 'Quadriceps, Adducteurs, Renforcement osseux',
    reps: '20 à 40 secondes statiques',
    sets: 3,
    restSeconds: 60,
    epocBurnScore: 'moderate',
    kneeSafe: true,
    description: {
      fr: 'Dos collé au mur, descendez à une hauteur confortable (pas besoin d\'aller à 90° si débutant). Maintenez la position en respirant profondément.',
      ar: 'ظهرك مسنود على الحائط، انزل لارتفاع مريح واثبت مع التنفس العميق.',
      darija: 'لصق ضهرك فالصحيح مع الحيط، هبط شوية وثبت فبلاصتك وتنفس مزيان.',
    },
    tacticalTip: {
      fr: 'Stimule la minéralisation osseuse et la fixation du calcium/vitamine D par contraction isométrique.',
      ar: 'يحفز تثبيت الكالسيوم وفيتامين د في العظام بفضل الانقباض المتساوي.',
      darija: 'كيتبت الكالسيوم وفيتامين د فالعظام وكيقوي العظام بلا ريب.',
    },
    animationType: 'wall_sit',
    youtubeQuery: 'wall sit isometric exercise benefits seniors',
  },
];
