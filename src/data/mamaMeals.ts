import { DayDietPlan } from '../types';

export const MAMA_LAAZIZA_15_DAYS_MEALS: DayDietPlan[] = [
  // ==========================================
  // SEMAINE 1 (JOURS 1 À 7)
  // ==========================================
  {
    dayNumber: 1,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Velouté d\'Orge Fin (Belboula), Huile d\'Olive, Cumin & Verveine',
        ar: 'فطور: حسوة بلبولة الشعير الرقيقة المنخولة بزيت الزيتون والكمون والنافع + شاي اللويزة',
        darija: 'فطور مهدئ: حسوة بلبولة الشعير الرقيقة منخولة طايبة بزيت العود وشوية الكمون والنافع + كاس لويزة دافئة',
      },
      description: {
        fr: 'Bol de velouté d\'orge fine tamisée (sans son agressif pour le côlon), 1 c. à café d\'huile d\'olive extra vierge, pincée de cumin et graines d\'anis doux, infusion de verveine (louiza) sans sucre.',
        ar: 'شوربة شعير ناعمة منخولة بدون نخالة خشنة، زيت زيتون بكر، رشة كمون ويانسون، شاي اللويزة المهدئ.',
        darija: 'زلافة بلبولة الشعير الرقيقة منقية ومنخولة مفيهاش النخالة الحارشة، معلقة زيت بلدية، شوية الكمون والنافع، وكاس لويزة دافي بلا سكر.',
      },
      caloriesApprox: 310,
      proteinApprox: 10,
      specialNotes: {
        fr: 'Fibres solubles très douces, zéro irritation de la paroi intestinale, zéro sucre rapide.',
        ar: 'ألياف ذائبة رطبة تحمي القولون العصبي وتلين الأمعاء بلطف.',
        darija: 'ألياف رطبة ومريحة للمصران الحساس ومكاديرش الغازات.',
      },
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Merlan aux Courgettes Épluchées, Carottes & Cumin',
        ar: 'الغداء: طاجين فيليه الميرلا بالقرعة الخضراء المقشرة والجزر والكمون والحامض',
        darija: 'الغدا: طاجين فيليه الميرلا بالقرعة الخضرا منقية ومقطعة، خيزو، الكمون، عصير الحامض + خبيز قمح منخول',
      },
      description: {
        fr: '140g filet de merlan frais (poisson blanc digeste, zéro graisse saturée) mijoté à l\'huile d\'olive avec courgettes bien épluchées, carottes tendres, cumin doux et jus de citron (sans sel ajouté), 40g pain de blé tamisé.',
        ar: '140غ فيليه سمك الميرلا الأبيض الخفيف مع الكوسة المقشرة والجزر وعصير الليمون والكمون، مع ربع خبز قمح منخول.',
        darija: 'حوت الميرلا أبيض خفيف مافيهش الشوك، طايب فالطاجين مع القرعة الخضرا مقشرة وخيزو والكمون والحامض، مع ربع خبيز قمح منخول بلا نخالة غليظة.',
      },
      caloriesApprox: 420,
      proteinApprox: 34,
      specialNotes: {
        fr: 'Poisson blanc protecteur du cholestérol. Courgettes et carottes : zéro gaz.',
        ar: 'سمك أبيض يخفض الكوليسترول، والكوسة والجزر لا يسببان أي غازات.',
        darija: 'الميرلا كتهبط الكوليسترول والقرعة وخيزو كيهدنو المصران.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Cuite Vapeur, 5 Amandes Douces & Verveine',
        ar: 'لمجة: تفاحة مطهوة على البخار + 5 حبات لوز بلدي غير مملح + منقوع اللويزة',
        darija: 'كاسكروط: تفاحة مقشرة ومفورة على البخار + 5 حبات لوز بلدي مسوس + كاس لويزة',
      },
      description: {
        fr: 'Pomme épluchée et cuite vapeur facile à digérer, 5 amandes locales non salées, thé de verveine relaxant.',
        ar: 'تفاحة مقشرة ومبخرة سهلة الهضم، 5 حبات لوز نيء، كاس لويزة مهدئة للأعصاب والقولون.',
        darija: 'تفاحة منقية ومبخرة كتهضم بلا نفخة، 5 حبات لوز بلدي مسوس، وكاس د اللويزة سخونة.',
      },
      caloriesApprox: 130,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Courge Rouge (Potiron) & Carottes, Cumin & Huile d\'Olive',
        ar: 'العشاء: حساء القرع الأحمر والجزر بالكمون وزيت الزيتون البكر',
        darija: 'العشا: صوبة رطبة د القرعة الحمرا وخيزو بزيت العود ورشة كمون (بدون ملح)',
      },
      description: {
        fr: 'Soupe onctueuse et veloutée de potiron et carottes mixée avec un filet d\'huile d\'olive extra vierge et du cumin (sans crème, sans choux, sans sel).',
        ar: 'شوربة قرع أحمر وجزر مهروسة ناعمة بزيت الزيتون ورشة كمون مهدئة للمعدة والقولون.',
        darija: 'زلافة صوبة د القرعة الحمرا وخيزو خفيفة ملساء بزيت العود وشوية الكمون، مريحة للنوم.',
      },
      caloriesApprox: 210,
      proteinApprox: 5,
    },
    hydrationTip: {
      fr: 'Boire de l\'eau tiède par petites gorgées tout au long de la journée pour détendre le côlon.',
      ar: 'شرب الماء الفاتر برشفات صغيرة على مدار اليوم لتليين الأمعاء بلطف.',
      darija: 'شرب الما دافي بشوية على طول النهار كيعاون المصران يخدم مرتاح بلا قبض.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : Portion normale.', ar: 'بدر: حصة معتدلة.', darija: 'بدر: كمية عادية.' },
      p2: {
        fr: 'Mama Laaziza : Repas 100% sans son grossier, sans sel et sans choux. Votre côlon reste parfaitement calme.',
        ar: 'ماما لعزيزة: وجبات اليوم خالية من النخالة القاسية والملح والخضار المسببة للغازات لحماية القولون.',
        darija: 'ماما لعزيزة: ماكلة اليوم مريحة 100% للمصران بلا نخالة حارشة وبلا نفخة وبلا ملحة.',
      },
      p3: { fr: 'Kaoutar : Anti-inflammatoire.', ar: 'كوثر: مضاد للالتهاب.', darija: 'كوثر: صحي للمفاصل.' },
    },
  },

  {
    dayNumber: 2,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Œuf Fermier Dur au Cumin, Pain Fin Toasté & Tisane de Camomille',
        ar: 'فطور: بيضة بلدية مسلوقة بالكمون + خبز قمح منخول محمص + منقوع البابونج',
        darija: 'فطور: بيضة بلدية مسلوقة مع رشة كمون + طريف خبيز قمح منخول محمص بزيت العود + كاس بابونج دافئ',
      },
      description: {
        fr: '1 œuf dur fermier saupoudré de cumin (digeste, riche en choline et vitamine D), 40g pain de blé tendre sans son grossier légèrement toasté, filet d\'huile d\'olive, infusion de camomille (babounj).',
        ar: 'بيضة بلدية مسلوقة بالكمون، 40غ خبز قمح لين منخول محمص خفيفاً بزيت الزيتون، شاي البابونج المهدئ.',
        darija: 'بيضة مسلوقة مع شوية الكمون، ربع خبيز قمح منخول محمص مدهون بزيت العود، كاس بابونج كيرخي المصران.',
      },
      caloriesApprox: 320,
      proteinApprox: 14,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Sardines Fraîches au Four au Citron & Cumin, Pommes de Terre Vapeur',
        ar: 'الغداء: سردين بلدي طازج في الفرن بالليمون الحامض والكمون + بطاطس وجزر مبخرين',
        darija: 'الغدا: سردين بلدي منقي فالفران بالحامض والكمون والقزبور (بلا قلي) + بطاطا وخيزو مبخرين',
      },
      description: {
        fr: '130g sardines fraîches nettoyées et cuites au four sur papier sulfurisé avec jus de citron, cumin et persil (zéro friture), accompagnées de carottes et pommes de terre à la vapeur avec un filet d\'huile d\'olive.',
        ar: '130غ سردين طازج بالفرن بالليمون والكمون والكزبرة (غني بفيتامين D وأوميغا 3)، مع جزر وبطاطس على البخار.',
        darija: 'سردين طري فالفران كيعمر فيتامين D وكيهبط الكوليسترول، مع خيزو وبطاطا مبخرين وشوية زيت العود والكمون.',
      },
      caloriesApprox: 460,
      proteinApprox: 36,
      specialNotes: {
        fr: 'Source majeure de vitamine D (pour dépasser 30 ng/mL) et d\'acides gras oméga-3.',
        ar: 'مصدر أساسي لفيتامين د لرفعه فوق 30، ولأوميغا 3 لحماية القلب.',
        darija: 'السردين كيعوض نقص فيتامين D فالتحاليل وكيحمي الشرايين.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Compote Maison Pomme & Poire Douce à la Cannelle',
        ar: 'لمجة: كمبوت تفاح وإجاص منزلي مطهو على البخار برشة قرفة خفيفة',
        darija: 'كاسكروط: تفاحة وإجاصة منقيين ومبخرين وممعوسين برشة قرفة خفيفة بلا سكر',
      },
      description: {
        fr: 'Compote tiède de pomme et poire pelées sans sucre ajouté, infusion douce de verveine.',
        ar: 'تفاح وإجاص مقشران ومطهوان على البخار بدون سكر، مع شاي اللويزة الدافئ.',
        darija: 'فاكهة مبخرة كتهضم دغيا وماكتخمرش فالمصران، مع كاس د اللويزة.',
      },
      caloriesApprox: 110,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Soupe Veloutée de Courgettes & Yaourt Nature Sans Sucre',
        ar: 'العشاء: حساء الكوسة المقشرة الناعم بزيت الزيتون وياغورت طبيعي',
        darija: 'العشا: صوبة خفيفة د القرعة الخضرا مقشرة ومطحونة بزيت العود + حك ياغورت مسوس',
      },
      description: {
        fr: 'Velouté digeste de courgettes épluchées et carottes au cumin et coriandre, accompagné d\'un yaourt nature sans sucre aux ferments actifs doux pour la flore intestinale.',
        ar: 'شوربة كوسة مقشرة وجزر بالكمون والكزبرة، مع زبادي طبيعي غير محلى لدعم بكتيريا الأمعاء النافعة.',
        darija: 'صوبة د القرعة الخضرا وخيزو ملساء كتمسح المصران، مع ياغورت طبيعي مسوس فيه الخمائر النافعة.',
      },
      caloriesApprox: 220,
      proteinApprox: 8,
    },
    hydrationTip: {
      fr: 'Penser à boire un grand verre d\'eau tiède après la sortie marche de 1h30.',
      ar: 'شرب كأس كبير من الماء الفاتر بعد حصة المشي الصباحي (1h30).',
      darija: 'شرب كاس كبير د الما دافي مور حصة المشي باش ترطبي الجسم والمفاصل.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Les sardines au four apportent la vitamine D essentielle notée sur votre bilan sanguin.',
        ar: 'ماما لعزيزة: السردين المشوي بالفرن يدعم النقص المسجل في فيتامين د بتحاليلك دون إجهاد المصران.',
        darija: 'ماما لعزيزة: السردين فالفران كيقاد فيتامين D بلا مايضر المصران حيت مافيهش القلي.',
      },
      p3: { fr: 'Kaoutar : Oméga 3.', ar: 'كوثر: أوميغا 3.', darija: 'كوثر: أوميغا 3.' },
    },
  },

  {
    dayNumber: 3,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Porridge d\'Avoine Doux à l\'Eau, Anis & Huile d\'Olive',
        ar: 'فطور: عصيدة شوفان ناعمة مطبوخة بالماء وزيت الزيتون وحبة حلاوة + كاس لويزة',
        darija: 'فطور: شوفان رطب طايب فالما مع معلقة زيت بلدية وحبة حلاوة مطحونة + كاس لويزة بلا سكر',
      },
      description: {
        fr: 'Flocons d\'avoine fins cuits dans l\'eau avec 1 c. à café d\'huile d\'olive et graines de fenouil/anis doux (anti-gaz), servi tiède avec une infusion de verveine.',
        ar: 'شوفان ناعم مطبوخ بالماء وزيت الزيتون واليانسون الطارد للغازات، مع شاي اللويزة بدون سكر.',
        darija: 'زلافة شوفان خفيف طايب فالما بزيت العود وشوية حبة حلاوة كتطرد الغازات، مع كاس د اللويزة.',
      },
      caloriesApprox: 290,
      proteinApprox: 9,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Blanc de Poulet Fermier aux Courgettes & Haricots Verts Tendres',
        ar: 'الغداء: طاجين صدر دجاج بلدي بدون جلد بالقرعة الخضراء واللوبيا الخضراء الطرية بالكركم',
        darija: 'الغدا: طويجين صدر دجاج بلدي بالقرعة الخضرا واللوبيا الخضرا الطرية بالكركم والكمون (بلا بصل حار ولا ثوم نيء)',
      },
      description: {
        fr: '130g blanc de poulet fermier sans peau mijoté avec courgettes épluchées, haricots verts extra-fins bien cuits, curcuma doux, cumin et coriandre (sans oignons crus ni ail lourd), 40g pain tamisé.',
        ar: '130غ صدر دجاج بلدي بدون جلد مع كوسة مقشرة وفاصوليا خضراء طرية مطبوخة جيداً بالكركم والكمون، مع ربع خبز منخول.',
        darija: 'طريف صدر دجاج بلدي طايب بالمهل مع قريعة خضرا ولوبيا خضرا مسلوقة ومطيبة مزيان، كركم بلدي وشوية الكمون، مع ربع خبزة قمح منخولة.',
      },
      caloriesApprox: 430,
      proteinApprox: 38,
    },
    snack: {
      title: {
        fr: 'Kskrout : Poire Douce Épluchée & Infusion de Fleurs de Camomille',
        ar: 'لمجة: إجاصة حلوة ناضجة مقشرة + شاي البابونج المهدئ للقولون',
        darija: 'كاسكروط: بوعويدة (إجاصة) طايبة ومنقية مزيان + كاس بابونج دافئ كيهدن الحريق',
      },
      description: {
        fr: 'Poire bien mûre sans peau (très douce pour les intestins délicats), accompagnée d\'une infusion de camomille.',
        ar: 'إجاصة ناضجة مقشرة لطيفة جداً على الأمعاء الحساسة، مع شاي البابونج.',
        darija: 'إجاصة رطبة منقية كتمشي ساهلة فالمصران، مع كاس البابونج كيحيد التشنجات.',
      },
      caloriesApprox: 100,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron au Céleri Tendre & Huile d\'Olive',
        ar: 'العشاء: حساء القرع الأحمر والكرفس الخفيف بزيت الزيتون البكر',
        darija: 'العشا: صوبة خفيفة د القرعة الحمرا مع عويد كرافص طري وزيت العود ورشة كمون',
      },
      description: {
        fr: 'Soupe onctueuse de potiron et carotte mixée avec une pointe de céleri et de l\'huile d\'olive extra vierge (zéro crème, zéro sel).',
        ar: 'شوربة قرع أحمر وجزر دافئة مهروسة بزيت الزيتون البكر ورشة كمون مهدئة.',
        darija: 'صوبة د القرعة الحمرا دافية ولذيذة كترخي الجسم وكتحمي الشرايين قبل النعاس.',
      },
      caloriesApprox: 200,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Infusion de verveine tiède 30 minutes avant le coucher pour détendre les muscles digestifs.',
      ar: 'شرب شاي اللويزة الفاتر قبل النوم بـ 30 دقيقة لإرخاء عضلات الجهاز الهضمي.',
      darija: 'كويس د اللويزة دافي نص ساعة قبل النعاس كيرخي عضلات المصران وكيجيب نعاس هادئ.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : Bien.', ar: 'بدر: جيد.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Les haricots verts extra-fins bien cuits apportent des fibres douces sans créer de gaz.',
        ar: 'ماما لعزيزة: الفاصوليا الخضراء المطهوة جيداً تزود الجسم بألياف لينة دون أي انتفاخ.',
        darija: 'ماما لعزيزة: اللوبيا الخضرا طرية وطايبة مزيان كتعطي ألياف رطبة ومكتنفخش الكرش.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 4,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Velouté d\'Orge Fin (Belboula), Fromage Frais Doux & Verveine',
        ar: 'فطور: حسوة الشعير الرقيقة بالنافع وزيت الزيتون + قطعة جبن بلدي طري غير مملح + لويزة',
        darija: 'فطور: حسوة بلبولة الشعير الرقيقة بالنافع وزيت العود + طريف جبن بلدي طري مسوس + كاس لويزة دافئة',
      },
      description: {
        fr: 'Soupe d\'orge fine tamisée cuite à l\'huile d\'olive et graines d\'anis doux, 30g de fromage frais doux non salé (pauvre en lactose), infusion de verveine sans sucre.',
        ar: 'شوربة شعير ناعمة بزيت الزيتون واليانسون، 30غ جبن طازج غير مملح قليل اللاكتوز، شاي اللويزة.',
        darija: 'بلبولة الشعير الرقيقة مريحة للمصران مع زيت العود وطريف جبن بلدي طري مسوس، مع كاس د اللويزة.',
      },
      caloriesApprox: 320,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Filet de Sole (ou Colin) au Four, Purée Carottes-Courgettes au Cumin',
        ar: 'الغداء: فيليه سمك الصول (Sole) أو الكولان بالفرن + بيوريه الجزر والقرعة الخضراء',
        darija: 'الغدا: سمك الصول (أو الكولان) فالفران بالحامض والكمون + بيوريه خيزو والقرعة الخضرا ممعوسين بزيت العود',
      },
      description: {
        fr: '140g filet de sole ou colin (poisson blanc ultra-léger et digeste, zéro gras saturé) cuit au four au citron et cumin, accompagné d\'une écrasée tiède de carottes et courgettes épluchées à l\'huile d\'olive, 40g pain tamisé.',
        ar: '140غ فيليه صول أو كولان بالفرن بعصير الليمون والكمون، بيوريه جزر وكوسة مقشرة بزيت الزيتون، مع ربع خبز منخول.',
        darija: 'حوت الصول خفيف بزاف وزوين للمصران كيهبط الكوليسترول، مع خيزو وقريعة مسلوقين وممعوسين بزيت العود والكمون.',
      },
      caloriesApprox: 410,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : 4 Cerneaux de Noix Locales & Tisane Apaisante de Camomille',
        ar: 'لمجة: 4 حبات جوز (كركاع) بلدي غني بالأوميغا 3 + شاي البابونج المهدئ',
        darija: 'كاسكروط: 4 حبات كركاع بلدي فيهم أوميغا 3 للمخ والقلب + كاس د البابونج دافئ',
      },
      description: {
        fr: '4 cerneaux de noix marocaines riches en acides gras oméga-3 végétaux, servis avec une infusion digestive de camomille.',
        ar: '4 حبات جوز بلدي غنية بأوميغا 3 المفيدة للقلب والشرايين، مع شاي البابونج.',
        darija: 'كركاع بلدي كيعاون الشرايين والذاكرة، مع كاس البابونج كيحيد تشنج المصران.',
      },
      caloriesApprox: 130,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Crème d\'Orge Légère au Cumin & Huile d\'Olive Vierge',
        ar: 'العشاء: حساء بلبولة الشعير الخفيف بزيت الزيتون ورشة كمون مهدئة',
        darija: 'العشا: زلافة حسوة بلبولة خفيفة بزيت الزيتون ورشة كمون كتهدن المصران',
      },
      description: {
        fr: 'Bol léger de belboula fine tamisée cuite longuement avec du cumin doux et un filet d\'huile d\'olive (zéro sel, zéro produit laitier le soir pour le confort digestif).',
        ar: 'شوربة شعير ناعمة خفيفة مطبوخة بالكمون وزيت الزيتون لراحة المعدة والأمعاء ليلاً.',
        darija: 'حسوة خفيفة كتنزل على المصران بحال البلسم، مكتنفخش وكتساعد على النوم المريح.',
      },
      caloriesApprox: 190,
      proteinApprox: 5,
    },
    hydrationTip: {
      fr: 'Garder une bouteille d\'eau tempérée à portée de main pendant la journée.',
      ar: 'الحفاظ على قارورة ماء معتدل الحرارة للشرب منها بانتظام.',
      darija: 'خلي قرعة الما حداك شربي منها جرعات صغار بلا ما تعمري كرشك فدقة وحدة.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : Portion active.', ar: 'بدر: حصة جيدة.', darija: 'بدر: ممتاز.' },
      p2: {
        fr: 'Mama Laaziza : La sole est l\'un des poissons les plus digestes au monde : zéro résidu lourd pour le côlon.',
        ar: 'ماما لعزيزة: سمك الصول من أسهل الأسماك هضماً وخالٍ تماماً من الدهون الثقيلة على القولون.',
        darija: 'ماما لعزيزة: حوت الصول خفيف بزاف، كيعطي البروتين النقي بلا ما يتقل على المصران ولا يرفع الكوليسترول.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: مزيان.' },
    },
  },

  {
    dayNumber: 5,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Œuf Dur au Cumin, Pain Fin Toasté à l\'Huile d\'Olive & Verveine',
        ar: 'فطور: بيضة مسلوقة بالكمون + خبز قمح منخول محمص بزيت الزيتون + شاي اللويزة',
        darija: 'فطور: بيضة مسلوقة مع رشة كمون + ربع خبز قمح منخول محمص بزيت العود + كاس لويزة دافئة',
      },
      description: {
        fr: '1 œuf dur au cumin, 40g pain de blé tendre sans son grossier légèrement toasté avec un filet d\'huile d\'olive, thé de verveine (louiza) sans sucre.',
        ar: 'بيضة مسلوقة بالكمون، 40غ خبز قمح لين منخول محمص بزيت الزيتون، شاي اللويزة.',
        darija: 'بيضة بلدية مسلوقة، طريف خبيز محمص بلا نخالة حارشة مدهون بزيت العود، مع كاس د اللويزة.',
      },
      caloriesApprox: 310,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poulet Fermier aux Courgettes, Carottes & Pommes de Terre',
        ar: 'الغداء: طاجين دجاج بلدي بالقرعة الخضراء المقشرة والجزر والبطاطس الصغيرة بالكركم',
        darija: 'الغدا: طاجين دجاج بلدي بالقرعة الخضرا مقشرة وخيزو وبطاطا صغيرة، طايب بالكركم والكمون والحامض',
      },
      description: {
        fr: '130g poulet fermier sans peau mijoté à feu doux avec courgettes épluchées, carottes et une petite pomme de terre, assaisonné de curcuma, cumin et jus de citron (sans piments, sans ail lourd), 40g pain tamisé.',
        ar: '130غ دجاج بلدي مع كوسة مقشرة وجزر وبطاطس صغيرة بالكركم والكمون وعصير الليمون، مع ربع خبز منخول.',
        darija: 'طويجين الدجاج البلدي بالخضيرة الطرية المنقية، طايب بماء الخضرة والكركم والكمون، خفيف ولذيذ.',
      },
      caloriesApprox: 440,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Douce Épluchée & Infusion Digestif d\'Anis et Fenouil (Nafaâ)',
        ar: 'لمجة: تفاحة حلوة مقشرة + منقوع اليانسون والشمر (النافع) الطارد للغازات',
        darija: 'كاسكروط: تفاحة حلوة مقشرة + كاس د النافع وحبة حلاوة مغليين كيطردو الغازات والنفخة',
      },
      description: {
        fr: 'Pomme épluchée croquante et douce, accompagnée d\'une infusion de graines de nafaâ (anis/fenouil) réputées pour soulager les ballonnements.',
        ar: 'تفاحة مقشرة طازجة، مع منقوع بذور النافع لطرد الغازات وراحة الأمعاء.',
        darija: 'تفاحة منقية، مع كاس د مغلي النافع كيمسح الغازات وكيخلي الكرش خفيفة.',
      },
      caloriesApprox: 95,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Patate Douce à l\'Huile d\'Olive',
        ar: 'العشاء: حساء القرع الأحمر والبطاطس الحلوة الناعمة بزيت الزيتون البكر',
        darija: 'العشا: صوبة ناعمة د القرعة الحمرا وبطاطا حلوة بزيت العود ورشة كمون خفيفة',
      },
      description: {
        fr: 'Velouté réconfortant de courge rouge et patate douce mixées avec un filet d\'huile d\'olive extra vierge (douceur absolue pour l\'estomac et les intestins).',
        ar: 'شوربة قرع أحمر وبطاطس حلوة مهروسة ناعمة بزيت الزيتون والكمون، مهدئة ومغذية.',
        darija: 'صوبة رطبة د القرعة الحمرا وبطاطا حلوة، كتدوز خفيفة وكتعطي نوم عميق بلا ثقل.',
      },
      caloriesApprox: 210,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Hydratation régulière entre les repas plutôt que pendant les repas pour éviter la distension.',
      ar: 'شرب الماء بين الوجبات وليس أثناء الأكل لتفادي تمدد المعدة والانتفاخ.',
      darija: 'شربي الما بين الوجبات ماشي وسط الماكلة باش ما تنفخلكش الكرش.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : Bien.', ar: 'بدر: جيد.', darija: 'بدر: ممتاز.' },
      p2: {
        fr: 'Mama Laaziza : L\'infusion de nafaâ au goûter est souveraine pour chasser les gaz sans aucun effet sur la tension.',
        ar: 'ماما لعزيزة: منقوع النافع طارد ممتاز للغازات دون أي تأثير على ضغط الدم.',
        darija: 'ماما لعزيزة: مغلي النافع وحبة حلاوة كيطرد الغازات وكيخلي الطونسيو مقاد بلا مشاكل.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 6,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Crème d\'Orge Fine (Belboula), Huile d\'Olive & Camomille',
        ar: 'فطور: حساء بلبولة الشعير الرطبة الناعمة بزيت الزيتون واليانسون + شاي البابونج',
        darija: 'فطور: حسوة بلبولة الشعير الرقيقة طايبة مزيان بزيت العود والنافع + كاس بابونج دافئ',
      },
      description: {
        fr: 'Bol de crème d\'orge fine tamisée cuite longuement avec de l\'huile d\'olive et de l\'anis doux, infusion de fleurs de camomille sans sucre.',
        ar: 'شوربة شعير ناعمة بزيت الزيتون واليانسون، شاي البابونج المهدئ للأمعاء.',
        darija: 'حسوة رطبة بزيت العود والنافع، مع كاس د البابونج كيرخي المصران.',
      },
      caloriesApprox: 300,
      proteinApprox: 10,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Daurade au Four aux Carottes & Courgettes Épluchées, Citron & Cumin',
        ar: 'الغداء: سمك الدَّوْرَاد (Daurade) في الفرن مع شرائح الجزر والقرعة الخضراء والكمون والحامض',
        darija: 'الغدا: حوتة الدَّوْرَاد فالفران مع خيزو وقريعة خضرا مقشرين ومقطعين، بالكمون والحامض وزيت العود',
      },
      description: {
        fr: '140g daurade fraîche cuite au four sur lit de carottes et courgettes épluchées avec jus de citron et cumin (zéro matière grasse saturée), 40g pain tamisé.',
        ar: '140غ سمك دَوْرَاد طازج بالفرن مع جزر وكوسة مقشرة وعصير الليمون والكمون، مع ربع خبز منخول.',
        darija: 'حوت الدَّوْرَاد أبيض ممتاز ولذيذ كينقص الكوليسترول وخفيف على المصران، مع خضر مبخرة.',
      },
      caloriesApprox: 430,
      proteinApprox: 37,
    },
    snack: {
      title: {
        fr: 'Kskrout : Yaourt Nature Fermenté & Demi-Banane Mûre Écrasée',
        ar: 'لمجة: ياغورت طبيعي بدون سكر مع نصف موزة ناضجة مهروسة',
        darija: 'كاسكروط: حك ياغورت طبيعي مسوس مع نص بنانة طايبة ممعوسة بالفرشيطة',
      },
      description: {
        fr: 'Yaourt nature sans sucre (probiotiques bénéfiques pour régénérer la flore du côlon) avec une demi-banane bien mûre écrasée facile à digérer.',
        ar: 'زبادي طبيعي يدعم بكتيريا الأمعاء النافعة مع نصف موزة ناضجة سهلة الهضم.',
        darija: 'ياغورت مسوس كيعطي الخمائر النافعة للمصران، مع نص بنانة طايبة كتمشي رطبة.',
      },
      caloriesApprox: 140,
      proteinApprox: 6,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté de Courgettes Épluchées & Coriandre Fraîche à l\'Huile d\'Olive',
        ar: 'العشاء: حساء الكوسة المقشرة والكزبرة الطازجة بزيت الزيتون ورشة كمون',
        darija: 'العشا: صوبة خفيفة د القرعة الخضرا مقشرة والقزبور طري مطحونين بزيت العود والكمون',
      },
      description: {
        fr: 'Soupe verte douce de courgettes bien épluchées, coriandre fraîche et cumin à l\'huile d\'olive extra vierge (apaisement complet de l\'intestin).',
        ar: 'شوربة كوسة مقشرة مع كزبرة وكمون وزيت زيتون، مهدئة ومريحة للقولون تماماً.',
        darija: 'صوبة د القرعة الخضرا ملساء ولذيذة كتمسح المصران قبل النعاس.',
      },
      caloriesApprox: 190,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Boire un verre d\'eau tiède avant d\'aller marcher le lendemain matin.',
      ar: 'شرب كأس ماء فاتر قبل الخروج لحصة المشي في الصباح.',
      darija: 'شربي كاس ماء دافي قبل ما تخرجي للمشي فالصباح.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : La daurade apporte d\'excellents acides aminés sans graisse saturée, protégeant vos artères.',
        ar: 'ماما لعزيزة: سمك الدَّوْرَاد بروتين نقي ممتاز يحمي الشرايين ويخفض الكوليسترول.',
        darija: 'ماما لعزيزة: حوت الدَّوْرَاد كيعطي بروتين نقي كينقي الشرايين وكيساعد على تثبيت 64 كلغ.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 7,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Pain Fin Toasté à l\'Huile d\'Olive, Œuf Dur au Cumin & Verveine',
        ar: 'فطور: شريحة خبز قمح منخول محمص بزيت الزيتون مع بيضة مسلوقة + شاي لويزة',
        darija: 'فطور: طريف خبز قمح منخول ومحمص مدهون بزيت العود مع بيضة مسلوقة بالكمون + كاس لويزة دافئة',
      },
      description: {
        fr: '40g pain de blé sans son grossier toasté à l\'huile d\'olive, 1 œuf dur au cumin, thé de verveine (louiza).',
        ar: 'خبز قمح منخول محمص بزيت الزيتون، بيضة مسلوقة بالكمون، شاي اللويزة.',
        darija: 'خبيز محمص بلا نخالة حارشة، بيضة مسلوقة بالكمون، كاس د اللويزة سخونة.',
      },
      caloriesApprox: 310,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Sardines Fraîches au Four au Citron & Cumin, Carottes Vapeur Tièdes',
        ar: 'الغداء: سردين طازج في الفرن بالكمون والحامض + سلطة جزر مسلوق دافئ بالكمون وزيت الزيتون',
        darija: 'الغدا: سردين بلدي فالفران بالحامض والكمون والقزبور + خيزو مسلوق دافئ متبل بالكمون وعصير الليمون وزيت العود',
      },
      description: {
        fr: '130g sardines fraîches au four au citron et cumin (deuxième sortie hebdomadaire de poisson gras riche en vitamine D et oméga-3), carottes tendres vapeur écrasées au cumin et huile d\'olive, 40g pain tamisé.',
        ar: '130غ سردين بالفرن بالليمون والكمون (الحصة الثانية أسبوعياً لفيتامين د)، جزر دافئ بالكمون وزيت الزيتون، ربع خبز منخول.',
        darija: 'سردين فالفران الحصة الثانية فالسيمانة لرفع فيتامين D، مع خيزو مسلوق ومتبل بالكمون وزيت العود.',
      },
      caloriesApprox: 460,
      proteinApprox: 36,
      specialNotes: {
        fr: 'Répétition clé des sardines pour fixer la vitamine D après la marche matinale.',
        ar: 'تكرار وجبة السردين مرتين أسبوعياً أساسي لدعم فيتامين د بعد المشي الشمسي.',
        darija: 'السردين 2 مرات فالسيمانة هو سر صعود فيتامين D وتحسن الكوليسترول.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Cuite Vapeur Écrasée, 5 Amandes Douces & Camomille',
        ar: 'لمجة: تفاحة مطهوة على البخار ومهروسة + 5 حبات لوز بلدي + كاس بابونج',
        darija: 'كاسكروط: تفاحة مفورة وممعوسة بالفرشيطة + 5 حبات لوز مسوسين + كاس بابونج دافئ',
      },
      description: {
        fr: 'Pomme cuite pelée écrasée à la cannelle douce, 5 amandes non salées, infusion de camomille.',
        ar: 'تفاحة مقشرة ومبخرة، 5 حبات لوز نيء، منقوع البابونج المهدئ.',
        darija: 'تفاحة مبخرة كتهضم بلا عذاب، 5 حبات لوز، كاس البابونج.',
      },
      caloriesApprox: 130,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Carottes à la Coriandre, Yaourt Nature',
        ar: 'العشاء: شوربة قرع أحمر وجزر دافئة بالكزبرة وزيت الزيتون + ياغورت طبيعي',
        darija: 'العشا: صوبة رطبة د القرعة الحمرا وخيزو بزيت العود والقزبور + ياغورت طبيعي مسوس',
      },
      description: {
        fr: 'Soupe douce de potiron et carottes mixée à l\'huile d\'olive et coriandre fraîche (sans sel), 1 yaourt nature sans sucre.',
        ar: 'شوربة قرع أحمر وجزر بزيت الزيتون والكزبرة بدون ملح، مع زبادي طبيعي.',
        darija: 'صوبة د القرعة الحمرا وخيزو مع ياغورت مسوس، خفيفة وصحية 100%.',
      },
      caloriesApprox: 220,
      proteinApprox: 8,
    },
    hydrationTip: {
      fr: 'Félicitations pour la Semaine 1 : digestion apaisée et zéro gonflement.',
      ar: 'مبروك إتمام الأسبوع الأول: هضم هادئ وبطون مستقرة بدون أي انتفاخ.',
      darija: 'مبروك إتمام السيمانة اللولة: المصران تهنى والغازات مشاو والميزان مستقر فـ 64 كلغ.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : Semaine 1 OK.', ar: 'بدر: الأسبوع 1 تم.', darija: 'بدر: كملتي السيمانة 1.' },
      p2: {
        fr: 'Mama Laaziza : 7 jours sans crise de côlon et avec un excellent apport en oméga-3 et vitamine D.',
        ar: 'ماما لعزيزة: أسبوع كامل بدون أي تهيج للقولون مع تغذية ممتازة لخفض الكوليسترول ورفع فيتامين د.',
        darija: 'ماما لعزيزة: 7 أيام دازت بسلام، المصران هاني بلا نخالة حارشة ولا غازات، والحوت دار خدمتو فالتحاليل.',
      },
      p3: { fr: 'Kaoutar : Semaine 1 OK.', ar: 'كوثر: أسبوع 1 تم.', darija: 'كوثر: سيمانة 1 دازت.' },
    },
  },

  // ==========================================
  // SEMAINE 2 (JOURS 8 À 15)
  // ==========================================
  {
    dayNumber: 8,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Porridge d\'Avoine Doux, Cumin, Huile d\'Olive & Verveine',
        ar: 'فطور: زلافة شوفان ناعم بزيت الزيتون ورشة كمون خفيفة + شاي اللويزة بدون سكر',
        darija: 'فطور: شوفان رطب طايب فالما مع زيت العود ورشة كمون خفيفة وحبة حلاوة + كاس د اللويزة',
      },
      description: {
        fr: 'Flocons d\'avoine fins cuits dans l\'eau avec de l\'huile d\'olive et une pincée de cumin et d\'anis doux, thé de verveine tiède.',
        ar: 'شوفان ناعم مطبوخ بالماء وزيت الزيتون ورشة كمون ويانسون، شاي اللويزة.',
        darija: 'شوفان ناعم طايب بالماء وزيت العود، مهدئ للمصران، مع كاس د اللويزة.',
      },
      caloriesApprox: 290,
      proteinApprox: 9,
      specialNotes: {
        fr: 'Démarrage de la deuxième semaine dans la continuité du confort digestif.',
        ar: 'بداية الأسبوع الثاني بنفس الهدوء المعوي والراحة.',
        darija: 'السيمانة الثانية بنفس الراحة للمصران وتثبيت 64 كلغ.',
      },
    },
    lunch: {
      title: {
        fr: 'Ghdha : Merlan en Tajine Doux aux Courgettes & Haricots Verts Tendres',
        ar: 'الغداء: فيليه الميرلا في طاجين طيني بالقرعة الخضراء واللوبيا الخضراء الطرية بدون ملح',
        darija: 'الغدا: فيليه الميرلا فطويجين بالقرعة الخضرا واللوبيا الخضرا الطرية بالكمون والحامض وزيت العود',
      },
      description: {
        fr: '140g filet de merlan cuit à l\'étouffée avec courgettes bien épluchées et haricots verts extra-fins, cumin doux, curcuma et jus de citron (sans tomates acides), 40g pain tamisé.',
        ar: '140غ ميرلا مطهوة بهدوء مع كوسة مقشرة وفاصوليا خضراء طرية بالكمون والكركم وعصير الليمون، ربع خبز منخول.',
        darija: 'حوت الميرلا الأبيض بالقرعة الخضرا واللوبيا الخضرا منقيين، طايب بلا حوامض قاصحة، رائع للمصران.',
      },
      caloriesApprox: 410,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Poire Mûre Épluchée & Infusion de Fleurs de Camomille',
        ar: 'لمجة: إجاصة ناضجة مقشرة + كاس مغلي البابونج المهدئ',
        darija: 'كاسكروط: بوعويدة (إجاصة) طايبة ومنقية مزيان + كاس بابونج دافئ',
      },
      description: {
        fr: 'Poire bien mûre épluchée, infusion de camomille relaxante.',
        ar: 'إجاصة ناضجة مقشرة مع شاي البابونج المهدئ.',
        darija: 'إجاصة منقية كتمشي رطبة، مع كاس البابونج كيحيد التشنج.',
      },
      caloriesApprox: 100,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Carottes, Yaourt Nature Fermenté',
        ar: 'العشاء: حساء القرع الأحمر والجزر الدافئ + ياغورت طبيعي مسوس',
        darija: 'العشا: صوبة رطبة د القرعة الحمرا وخيزو بزيت العود + حك ياغورت مسوس',
      },
      description: {
        fr: 'Soupe veloutée de potiron et carottes mixée à l\'huile d\'olive et coriandre (sans sel), 1 yaourt nature sans sucre.',
        ar: 'شوربة قرع أحمر وجزر مهروسة بزيت الزيتون والكزبرة بدون ملح، مع زبادي طبيعي.',
        darija: 'صوبة د القرعة الحمرا وخيزو مع ياغورت مسوس فيه الخمائر النافعة.',
      },
      caloriesApprox: 220,
      proteinApprox: 8,
    },
    hydrationTip: {
      fr: 'Penser à boire de l\'eau tiède régulièrement.',
      ar: 'شرب الماء الفاتر بانتظام.',
      darija: 'شربي الما دافي بانتظام طوال اليوم.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Le merlan blanc continue de faire baisser le cholestérol sans agresser votre intestin.',
        ar: 'ماما لعزيزة: سمك الميرلا الأبيض يخفض الكوليسترول برفق ويحمي بطانة القولون.',
        darija: 'ماما لعزيزة: الميرلا كتهبط الكوليسترول ومكتخليش المصران يتقلق.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 9,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Velouté d\'Orge Fin (Belboula), Fromage Frais Doux & Verveine',
        ar: 'فطور: حسوة بلبولة الشعير المنخولة بزيت الزيتون والنافع + قطعة جبن بلدي أبيض طازج خفيف',
        darija: 'فطور: حسوة بلبولة الشعير الرقيقة بالنافع وزيت العود + طريف جبن بلدي طري مسوس + كاس لويزة دافئة',
      },
      description: {
        fr: 'Crème d\'orge fine tamisée cuite à l\'huile d\'olive et anis doux, 30g fromage frais doux non salé, thé de verveine sans sucre.',
        ar: 'شوربة شعير ناعمة بزيت الزيتون واليانسون، 30غ جبن طازج غير مملح، شاي اللويزة.',
        darija: 'بلبولة الشعير الرقيقة بالنافع وزيت العود مع جبن طري مسوس وكاس د اللويزة.',
      },
      caloriesApprox: 320,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poulet Fermier aux Pommes de Terre Vapeur & Carottes au Curcuma',
        ar: 'الغداء: طاجين دجاج بلدي بدون جلد بالبطاطس المبخرة والجزر والكزبرة والكركم البلدي',
        darija: 'الغدا: طويجين دجاج بلدي بالبطاطا وخيزو مقشرين ومبخرين ومطيبين بالكركم والكمون والكزبرة والحامض',
      },
      description: {
        fr: '130g poulet fermier sans peau mijoté avec carottes douces et pommes de terre vapeur écrasées au cumin et curcuma (sans piments, sans oignons crus), 40g pain tamisé.',
        ar: '130غ دجاج بلدي مع جزر وبطاطس بالكركم والكمون والكزبرة وعصير الليمون، ربع خبز منخول.',
        darija: 'دجاج بلدي منقي طايب بالكركم والكمون مع خيزو وبطاطا، خفيف وساهل فالهضم.',
      },
      caloriesApprox: 440,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : 4 Amandes Douces Locales & Infusion Chaude de Verveine',
        ar: 'لمجة: 4 حبات لوز بلدي غير مملح + كاس لويزة دافئة مهدئة',
        darija: 'كاسكروط: 4 حبات لوز بلدي مسوسين + كاس لويزة دافئة كترخي الطونسيو',
      },
      description: {
        fr: '4 amandes locales douces croquantes, infusion de verveine relaxante pour la tension et les intestins.',
        ar: '4 حبات لوز بلدي نيء، شاي اللويزة المهدئ لضغط الدم وللمصران.',
        darija: 'لوز بلدي مسوس مع كاس لويزة دافي كيرخي الطونسيو والمصران.',
      },
      caloriesApprox: 110,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Soupe Veloutée de Courgettes & Potiron à l\'Huile d\'Olive Vierge',
        ar: 'العشاء: شوربة القرع الأحمر والكوسة الناعمة بزيت الزيتون ورشة كمون',
        darija: 'العشا: صوبة ناعمة د القرعة الحمرا والقرعة الخضرا مطحونين بزيت العود ورشة كمون',
      },
      description: {
        fr: 'Velouté digeste associant potiron et courgettes épluchées mixés avec un filet d\'huile d\'olive et du cumin (zéro sel).',
        ar: 'شوربة قرع أحمر وكوسة مقشرة بزيت الزيتون والكمون بدون ملح.',
        darija: 'صوبة رطبة بزاف د القرعة الحمرا والخضرا، كتدوز خفيفة وكتنقي الكرش.',
      },
      caloriesApprox: 200,
      proteinApprox: 5,
    },
    hydrationTip: {
      fr: 'Garder l\'eau tiède plutôt que glacée pour éviter les spasmes intestinaux.',
      ar: 'شرب الماء الفاتر وتجنب الماء المثلج لمنع تقلصات القولون.',
      darija: 'بعدي من الما البارد بزاف، الما دافي كيحمي المصران من التشنجات.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : La verveine au goûter maintient votre tension artérielle parfaitement stable.',
        ar: 'ماما لعزيزة: شاي اللويزة في المساء يحافظ على استقرار ضغط الدم دون أي تهيج.',
        darija: 'ماما لعزيزة: اللويزة فالعشية كترخي الطونسيو وكتخليك مرتاحة.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 10,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Œuf Fermier au Cumin, Pain Fin Toasté à l\'Huile d\'Olive & Camomille',
        ar: 'فطور: بيضة بلدية مسلوقة بالكمون + خبز قمح لين منخول ومحمص + كاس بابونج دافئ',
        darija: 'فطور: بيضة بلدية مسلوقة مع شوية الكمون + خبيز قمح منخول محمص بزيت العود + كاس بابونج دافئ',
      },
      description: {
        fr: '1 œuf dur au cumin, 40g pain de blé sans son grossier toasté à l\'huile d\'olive, infusion de camomille (babounj).',
        ar: 'بيضة مسلوقة بالكمون، خبز قمح منخول محمص بزيت الزيتون، شاي البابونج.',
        darija: 'بيضة مسلوقة بالكمون، خبيز محمص بلا نخالة حارشة مدهون بزيت العود، كاس بابونج.',
      },
      caloriesApprox: 310,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Pageot (ou Sole) au Four aux Courgettes & Carottes Vapeur au Cumin',
        ar: 'الغداء: سمك الباجو أو الصول في الفرن بورق الطهي مع خضر مبخرة (جزر وقرعة خضراء) بالكمون',
        darija: 'الغدا: سمك الباجو (أو الصول) فالفران بورق الطهي مع خيزو وقريعة خضرا مقشرين ومبخرين بالكمون والحامض',
      },
      description: {
        fr: '140g filet de pageot ou sole au four en papillote avec jus de citron et cumin, accompagné de carottes et courgettes vapeur à l\'huile d\'olive, 40g pain tamisé.',
        ar: '140غ فيليه باجو أو صول بالفرن بالليمون والكمون، جزر وكوسة مقشرة على البخار بزيت الزيتون، ربع خبز منخول.',
        darija: 'حوت الباجو أو الصول فالفران خفيف بلا زيت ثقيلة، مع خضيرة مبخرة بالكمون والحامض.',
      },
      caloriesApprox: 420,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Douce Épluchée & Tisane de Verveine',
        ar: 'لمجة: تفاحة مقشرة ناضجة + شاي لويزة مهدئ',
        darija: 'كاسكروط: تفاحة بلدية منقية ومقطعة + كاس د اللويزة دافي بلا سكر',
      },
      description: {
        fr: 'Pomme douce pelée sans peau, infusion de verveine apaisante.',
        ar: 'تفاحة مقشرة ناعمة، شاي اللويزة المهدئ.',
        darija: 'تفاحة منقية كتهضم ساهلة، مع كاس د اللويزة سخونة.',
      },
      caloriesApprox: 95,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Crème d\'Orge Légère à l\'Huile d\'Olive & Cumin',
        ar: 'العشاء: حساء بلبولة الشعير الخفيف بزيت الزيتون ورشة كمون',
        darija: 'العشا: زلافة حسوة بلبولة الشعير الرقيقة بزيت الزيتون ورشة كمون كتهدن المصران',
      },
      description: {
        fr: 'Bol de velouté d\'orge fine tamisée cuite à l\'huile d\'olive et cumin doux (dîner léger zéro fermentation).',
        ar: 'شوربة شعير ناعمة خفيفة بزيت الزيتون والكمون بدون ملح.',
        darija: 'حسوة بلبولة خفيفة بزيت العود وشوية الكمون، زيرو تخمر وزيرو غازات.',
      },
      caloriesApprox: 190,
      proteinApprox: 5,
    },
    hydrationTip: {
      fr: 'Boire un verre d\'eau tiède après le dîner.',
      ar: 'شرب كأس ماء فاتر بعد العشاء.',
      darija: 'شربي كاس ما دافي بعد العشا.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Le poisson blanc en papillote préserve 100% des protéines sans aucune graisse cuite.',
        ar: 'ماما لعزيزة: السمك المطهو بورق الطهي يحافظ على جودة البروتين دون أي دهون محروقة.',
        darija: 'ماما لعزيزة: الحوت الأبيض فورق الطهي كيعطي بنة نقية بلا نقطة زيت محروقة.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 11,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Porridge d\'Avoine Doux, Huile d\'Olive, Anis & Verveine',
        ar: 'فطور: عصيدة شوفان ناعمة بزيت الزيتون وحبة حلاوة + شاي اللويزة بدون سكر',
        darija: 'فطور: شوفان رطب طايب فالما بزيت العود وشوية حبة حلاوة + كاس لويزة بلا سكر',
      },
      description: {
        fr: 'Flocons d\'avoine fins cuits dans l\'eau avec de l\'huile d\'olive et graines de fenouil doux, infusion de verveine.',
        ar: 'شوفان ناعم مطبوخ بالماء وزيت الزيتون واليانسون، شاي اللويزة.',
        darija: 'شوفان خفيف بزيت العود والنافع، مع كاس د اللويزة سخونة.',
      },
      caloriesApprox: 290,
      proteinApprox: 9,
    },
    lunch: {
      title: {
        fr: 'Sardines au Four au Citron & Cumin, Purée de Pommes de Terre & Carottes au Cumin',
        ar: 'الغداء: سردين بلدي في الفرن بالحامض والكمون + بيوريه بطاطس وجزر بزيت الزيتون ورشة كمون',
        darija: 'الغدا: سردين بلدي طازج فالفران بالحامض والكمون والقزبور + بطاطا وخيزو ممعوسين بزيت العود وشوية الكمون',
      },
      description: {
        fr: '130g sardines fraîches nettoyées cuites au four au citron et cumin (apport majeur en vitamine D), accompagnées d\'une purée maison tiède de pommes de terre et carottes à l\'huile d\'olive, 40g pain tamisé.',
        ar: '130غ سردين بالفرن بالليمون والكمون (لدعم فيتامين D)، بيوريه بطاطس وجزر بزيت الزيتون، ربع خبز منخول.',
        darija: 'سردين فالفران الحصة الأسبوعية لرفع فيتامين D وخفض الكوليسترول، مع بيوريه بطاطا وخيزو بزيت العود.',
      },
      caloriesApprox: 460,
      proteinApprox: 36,
      specialNotes: {
        fr: 'Vitamine D & Oméga-3 : combinaison essentielle pour votre bilan sanguin.',
        ar: 'فيتامين د وأوميغا 3: الدمج الأساسي لتحسين التحاليل وتنشيط المناعة.',
        darija: 'السردين كيعاون التحليلة د فيتامين D تطلع فوق 30 إن شاء الله.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Compote Maison de Pomme & Poire sans Sucre',
        ar: 'لمجة: كمبوت تفاح وإجاص منزلي بدون سكر مضاف',
        darija: 'كاسكروط: تفاحة وإجاصة مبخرين وممعوسين برشة قرفة خفيفة بلا سكر',
      },
      description: {
        fr: 'Compote tiède de pomme et poire pelées à la cannelle douce, thé de camomille.',
        ar: 'تفاح وإجاص مقشران ومبخران مع رشة قرفة وشاي البابونج.',
        darija: 'فاكهة مبخرة كتهضم بلا نفخة، مع كاس البابونج دافئ.',
      },
      caloriesApprox: 110,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Carottes à la Coriandre Fraîche',
        ar: 'العشاء: حساء القرع الأحمر والجزر الدافئ بالكزبرة وزيت الزيتون',
        darija: 'العشا: صوبة القرعة الحمرا وخيزو الدافئة بالقزبور وزيت العود ورشة كمون',
      },
      description: {
        fr: 'Soupe de potiron et carottes mixée à l\'huile d\'olive extra vierge et coriandre (sans sel).',
        ar: 'شوربة قرع أحمر وجزر بزيت الزيتون والكزبرة بدون ملح.',
        darija: 'صوبة د القرعة الحمرا وخيزو ملساء كتمسح المصران قبل النعاس.',
      },
      caloriesApprox: 200,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Bien s\'hydrater après la sortie de marche de 1h30.',
      ar: 'شرب الماء بانتظام بعد حصة المشي الصباحي (1h30).',
      darija: 'شربي الما دافي بعد حصة المشي فالهواء الطلق.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Deuxième ration de sardines de la semaine : votre taux de vitamine D progresse vers la cible > 30.',
        ar: 'ماما لعزيزة: حصة السردين الثانية لهذا الأسبوع لدعم مستويات فيتامين د والوصول إلى الهدف الطبي المطلوب.',
        darija: 'ماما لعزيزة: الحوت البلدي كيعوض النقص فالتحاليل وكيخلي العظام صحاح.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 12,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Velouté d\'Orge Fin (Belboula), Huile d\'Olive, Anis & Verveine',
        ar: 'فطور: حسوة بلبولة رقيقة بزيت الزيتون واليانسون + ربع خبز قمح منخول + شاي لويزة',
        darija: 'فطور: حسوة بلبولة الشعير الرقيقة بالنافع وزيت العود + ربع خبز قمح منخول + كاس لويزة دافئة',
      },
      description: {
        fr: 'Soupe d\'orge fine tamisée cuite à l\'huile d\'olive et anis doux, 30g pain de blé sans son grossier, thé de verveine sans sucre.',
        ar: 'شوربة شعير ناعمة بزيت الزيتون واليانسون، 30غ خبز قمح منخول، شاي اللويزة.',
        darija: 'بلبولة الشعير الرقيقة بالنافع وزيت العود مع خبيز منخول وكاس لويزة دافي.',
      },
      caloriesApprox: 310,
      proteinApprox: 10,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Blanc de Poulet Fermier Vapeur aux Courgettes, Carottes & Pommes de Terre au Cumin',
        ar: 'الغداء: صدر دجاج بلدي مطهو على البخار مع خضار مشكلة مهدئة (قرعة، جزر، بطاطس) ومتبل بالكمون',
        darija: 'الغدا: صدر دجاج بلدي مبخر مع قريعة خضرا وخيزو وبطاطا مقشرين ومبخرين، متبلين بالكمون وعصير الحامض وزيت العود',
      },
      description: {
        fr: '130g blanc de poulet fermier sans peau cuit à la vapeur avec courgettes épluchées, carottes et pommes de terre, nappé d\'un filet d\'huile d\'olive, jus de citron et cumin doux, 40g pain tamisé.',
        ar: '130غ صدر دجاج بلدي على البخار مع كوسة وجزر وبطاطس بزيت الزيتون والليمون والكمون، ربع خبز منخول.',
        darija: 'صدر دجاج بلدي مبخر مع خضيرة منقية بالكمون والحامض وزيت العود، خفيف وساهل فالهضم.',
      },
      caloriesApprox: 430,
      proteinApprox: 37,
    },
    snack: {
      title: {
        fr: 'Kskrout : 5 Amandes Douces Locales & Infusion de Graines de Nafaâ (Anis)',
        ar: 'لمجة: 5 حبات لوز بلدي غير مملح + مغلي النافع وحبة حلاوة',
        darija: 'كاسكروط: 5 حبات لوز بلدي مسوسين + كاس د مغلي النافع كيطرد الغازات والنفخة',
      },
      description: {
        fr: '5 amandes douces sans sel, infusion de graines d\'anis/fenouil (nafaâ) pour garder le ventre plat et détendu.',
        ar: '5 حبات لوز نيء، شاي النافع واليانسون لطرد الغازات.',
        darija: 'لوز بلدي مسوس مع كاس النافع كيطرد الغازات وكيخلي المصران هاني.',
      },
      caloriesApprox: 120,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Compote de Pomme Tiède & Yaourt Nature Fermenté',
        ar: 'العشاء: تفاحة مسلوقة مهروسة + ياغورت طبيعي مسوس بدون سكر',
        darija: 'العشا: تفاحة مقشرة ومبخرة ممعوسة بالفرشيطة + حك ياغورت طبيعي مسوس',
      },
      description: {
        fr: 'Pomme cuite pelée écrasée à la cannelle douce avec un yaourt nature sans sucre (dîner ultra-léger et apaisant pour la nuit).',
        ar: 'تفاحة مقشرة ومطهوة على البخار مع علبة زبادي طبيعي تدعم بكتيريا الأمعاء.',
        darija: 'تفاحة مبخرة مع ياغورت مسوس، عشاء خفيف ومريح 100% للنوم.',
      },
      caloriesApprox: 180,
      proteinApprox: 6,
    },
    hydrationTip: {
      fr: 'Boire de l\'eau tiède par petites gorgées.',
      ar: 'شرب الماء الفاتر برشفات صغيرة.',
      darija: 'شربي الما دافي بشوية على طول النهار.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Le dîner pomme vapeur et yaourt nature permet un repos digestif complet du côlon.',
        ar: 'ماما لعزيزة: عشاء التفاح المبخر والزبادي يمنح القولون راحة تامة طوال الليل.',
        darija: 'ماما لعزيزة: عشا خفيف بالتفاح المبخر والياغورت كيخلي المصران يرتاح وينعس خفيف.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 13,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Œuf Dur au Cumin, Pain d\'Orge Fin Toasté à l\'Huile d\'Olive & Verveine',
        ar: 'فطور: بيضة مسلوقة بالكمون + خبز شعير منخول ومحمص خفيفاً بزيت الزيتون + شاي لويزة',
        darija: 'فطور: بيضة بلدية مسلوقة بالكمون + خبيز شعير منخول ومحمص مدهون بزيت العود + كاس لويزة دافئة',
      },
      description: {
        fr: '1 œuf dur au cumin, 40g pain d\'orge tamisé (sans son dur) toasté à l\'huile d\'olive, thé de verveine sans sucre.',
        ar: 'بيضة مسلوقة بالكمون، 40غ خبز شعير ناعم منخول محمص بزيت الزيتون، شاي اللويزة.',
        darija: 'بيضة مسلوقة، خبيز شعير منخول بلا نخالة حارشة محمص بزيت العود، مع كاس د اللويزة سخونة.',
      },
      caloriesApprox: 310,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Filet de Merlan au Four, Carottes & Haricots Verts Tendres au Cumin',
        ar: 'الغداء: فيليه سمك الميرلا في الفرن بشرائح الليمون والكمون وزيت الزيتون مع جزر ولوبيا خضراء طرية',
        darija: 'الغدا: حوت الميرلا فالفران بالحامض والكمون وزيت العود مع خيزو ولوبيا خضرا طرية مسلوقين ومتبلين',
      },
      description: {
        fr: '140g filet de merlan cuit au four avec jus de citron, cumin et filet d\'huile d\'olive, accompagné de carottes et haricots verts extra-fins bien cuits, 40g pain tamisé.',
        ar: '140غ ميرلا بالفرن بالليمون والكمون، جزر وفاصوليا خضراء طرية بزيت الزيتون، ربع خبز منخول.',
        darija: 'فيليه الميرلا أبيض وخفيف كيهبط الكوليسترول، مع خيزو ولوبيا خضرا طايبين مزيان.',
      },
      caloriesApprox: 410,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Poire Douce Épluchée & Infusion de Camomille',
        ar: 'لمجة: إجاصة حلوة مقشرة + كاس لويزة مهدئة',
        darija: 'كاسكروط: بوعويدة (إجاصة) حلوة ومنقية مزيان + كاس لويزة دافئ',
      },
      description: {
        fr: 'Poire bien mûre pelée, thé de verveine apaisant.',
        ar: 'إجاصة ناضجة مقشرة، شاي اللويزة المهدئ.',
        darija: 'إجاصة منقية كتمشي رطبة، مع كاس د اللويزة سخونة.',
      },
      caloriesApprox: 100,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Courgettes à l\'Huile d\'Olive',
        ar: 'العشاء: شوربة القرع الأحمر والكوسة المهروسة بزيت الزيتون ورشة كمون',
        darija: 'العشا: صوبة ناعمة د القرعة الحمرا والقرعة الخضرا بزيت العود ورشة كمون خفيفة',
      },
      description: {
        fr: 'Soupe veloutée de courge rouge et courgettes épluchées mixées à l\'huile d\'olive et cumin (zéro sel).',
        ar: 'شوربة قرع أحمر وكوسة مقشرة بزيت الزيتون والكمون بدون ملح.',
        darija: 'صوبة رطبة د القرعة الحمرا والخضرا، خفيفة ومهدئة للنوم.',
      },
      caloriesApprox: 195,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Boire un verre d\'eau tiède le soir.',
      ar: 'شرب كأس ماء فاتر في المساء.',
      darija: 'شربي كاس ما دافي فالعشية.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Le merlan blanc reste le poisson idéal pour faire baisser le cholestérol en toute sécurité.',
        ar: 'ماما لعزيزة: سمك الميرلا الأبيض يواصل خفض الكوليسترول وحماية الأوعية الدموية بأمان.',
        darija: 'ماما لعزيزة: حوت الميرلا الأبيض كينقي الكوليسترول وخفيف بزاف على المصران.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 14,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Crème d\'Orge Fine (Belboula), Huile d\'Olive, Anis & Camomille',
        ar: 'فطور: حسوة الشعير الرقيقة بالنافع وزيت الزيتون البكر + شاي البابونج بدون سكر',
        darija: 'فطور: حسوة بلبولة الشعير الرقيقة بالنافع وزيت العود + كاس بابونج دافئ بلا سكر',
      },
      description: {
        fr: 'Bol de crème d\'orge fine tamisée cuite à l\'huile d\'olive et graines d\'anis doux, infusion de fleurs de camomille.',
        ar: 'شوربة شعير ناعمة بزيت الزيتون واليانسون، شاي البابونج.',
        darija: 'بلبولة الشعير الرقيقة بالنافع وزيت العود، كاس بابونج دافي كيرخي المصران.',
      },
      caloriesApprox: 300,
      proteinApprox: 10,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Daurade (ou Sole) au Tajine aux Courgettes Épluchées, Carottes, Cumin & Citron',
        ar: 'الغداء: طاجين سمك الدَّوْرَاد أو الصول بالقرعة الخضراء المقشرة والجزر والكمون والحامض',
        darija: 'الغدا: طويجين الدَّوْرَاد (أو الصول) بالقرعة الخضرا مقشرة وخيزو والكمون وعصير الحامض وزيت العود',
      },
      description: {
        fr: '140g daurade fraîche mijotée à l\'huile d\'olive avec courgettes bien épluchées, carottes tendres, cumin doux et jus de citron (sans sel ajouté), 40g pain tamisé.',
        ar: '140غ دَوْرَاد أو صول مع كوسة مقشرة وجزر والكمون وعصير الليمون، ربع خبز منخول.',
        darija: 'حوت الدَّوْرَاد فطويجين بالخضيرة المنقية والكمون والحامض، قمة اللذة والصحة بلا ملحة.',
      },
      caloriesApprox: 420,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Douce Épluchée, 4 Cerneaux de Noix Locales & Verveine',
        ar: 'لمجة: تفاحة ناضجة مقشرة + 4 حبات جوز (كركاع) بلدي + شاي اللويزة',
        darija: 'كاسكروط: تفاحة حلوة مقشرة + 4 حبات كركاع بلدي فيهم أوميغا 3 + كاس لويزة دافئة',
      },
      description: {
        fr: 'Pomme pelée sans peau, 4 cerneaux de noix (acides gras oméga-3 protecteurs), infusion de verveine tiède.',
        ar: 'تفاحة مقشرة، 4 حبات جوز بلدي، شاي اللويزة.',
        darija: 'تفاحة منقية، كركاع بلدي كيحمي القلب، كاس لويزة سخونة.',
      },
      caloriesApprox: 135,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Courgettes & Carottes à l\'Huile d\'Olive',
        ar: 'العشاء: صوبة خفيفة بالقرعة الخضراء والجزر مع ملعقة زيت زيتون ورشة كمون',
        darija: 'العشا: صوبة خفيفة د القرعة الخضرا مقشرة وخيزو بزيت العود ورشة كمون (بدون ملح)',
      },
      description: {
        fr: 'Soupe onctueuse de courgettes épluchées et carottes mixée à l\'huile d\'olive et cumin (zéro sel, zéro fermentation).',
        ar: 'شوربة كوسة مقشرة وجزر بزيت الزيتون والكمون بدون ملح.',
        darija: 'صوبة د القرعة وخيزو ملساء كتمسح الكرش، خفيفة وصحية 100%.',
      },
      caloriesApprox: 190,
      proteinApprox: 4,
    },
    hydrationTip: {
      fr: 'Garder l\'hydratation douce par gorgées.',
      ar: 'شرب الماء على رشفات مهدئة.',
      darija: 'شربي الما دافي بانتظام.',
    },
    profileSpecificAdvice: {
      p1: { fr: 'Badr : OK.', ar: 'بدر: ممتاز.', darija: 'بدر: مزيان.' },
      p2: {
        fr: 'Mama Laaziza : Bravo ! 14 jours de discipline sans son grossier, sans sel et sans choux. Votre poids reste fixé à 64 kg.',
        ar: 'ماما لعزيزة: مبروك 14 يوماً من الانضباط بدون نخالة قاسية وبدون ملح وبدون غازات، ووزنك ثابت في 64 كلغ.',
        darija: 'ماما لعزيزة: الله يعطيك الصحة! 14 يوم دازت بسلام، المصران هاني والوزن ثابت فـ 64 كلغ.',
      },
      p3: { fr: 'Kaoutar : OK.', ar: 'كوثر: جيد.', darija: 'كوثر: تمام.' },
    },
  },

  {
    dayNumber: 15,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Crème d\'Orge Fine Douce, Cumin, Huile d\'Olive & Infusion Verveine',
        ar: 'فطور: حساء الشعير الرطب (بلبولة رقيقة منخولة) بزيت الزيتون والكمون وشاي اللويزة',
        darija: 'فطور مهدئ: بلبولة رقيقة منخولة طايبة مزيان بزيت العود وشوية الكمون وكاس د اللويزة بلا سكر',
      },
      description: {
        fr: 'Velouté d\'orge fine tamisée (sans son agressif pour le côlon), 1 c. à café d\'huile d\'olive extra vierge, pincée de cumin et graines d\'anis doux (nafaâ), infusion de verveine (louiza) sans sucre.',
        ar: 'شوربة شعير ناعمة منخولة بدون نخالة قاسية، ملعقة زيت زيتون بكر، رشة كمون ويانسون، شاي اللويزة المهدئ للأعصاب وللمصران.',
        darija: 'زلافة بلبولة الشعير الرقيقة منخولة مفيهاش النخالة الحارشة على المصران، مع زيت العود وشوية النافع والكمون وكاس اللويزة كيرخي الطونسيو والمصران.',
      },
      caloriesApprox: 310,
      proteinApprox: 12,
      specialNotes: {
        fr: 'Fibres solubles très douces, zéro irritation intestinale, zéro sucre rapide.',
        ar: 'ألياف ذائبة رطبة تحمي بطانة القولون بدون أي تهيج.',
        darija: 'ألياف رطبة وصحية مريحة للمصران وماكاديرش الغازات.',
      },
    },
    lunch: {
      title: {
        fr: 'Ghdha : Filet de Merlan au Four, Courgettes & Carottes Vapeur au Cumin',
        ar: 'الغداء: فيليه سمك الميرلا بالفرن مع كوسة وجزر مطهوان على البخار بالكمون',
        darija: 'الغدا: سمك الميرلا (أو الصول) فالفران مع القرعة الخضرا وخيزو مبخرين بالكمون والحامض',
      },
      description: {
        fr: '140g filet de merlan frais (poisson blanc ultra-digeste, zéro graisse saturée) cuit au four avec jus de citron et cumin, accompagné de courgettes épluchées et carottes vapeur, 40g pain de blé tendre sans son grossier.',
        ar: '140غ فيليه ميرلا طازج بالفرن مع عصير الليمون والكمون، كوسة مقشرة وجزر على البخار، مع قطعة خبز قمح لين منخول.',
        darija: 'حوت الميرلا أبيض خفيف بزاف على المصران وبلا شوك، طايب فالفران بالحامض والكمون، مع خيزو وقريعة خضرا مقشرين ومبخرين، وطريف خبيز منخول.',
      },
      caloriesApprox: 430,
      proteinApprox: 35,
      specialNotes: {
        fr: 'Zéro gaz : courgettes et carottes sont les légumes les plus digestes pour le côlon.',
        ar: 'خالٍ من الغازات: الكوسة والجزر هما الألطف على القولون العصبي.',
        darija: 'زيرو غازات: القرعة وخيزو كيهدنو المصران والحوت الأبيض كيهبط الكوليسترول.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Compote de Pomme Tiède Maison & Tisane de Camomille',
        ar: 'لمجة: تفاحة مطهوة على البخار (كومبوت بدون سكر) مع منقوع البابونج',
        darija: 'كاسكروط: تفاحة بلدية طايبة على البخار وممعوسة مع كاس د البابونج دافي',
      },
      description: {
        fr: 'Pomme cuite pelée et écrasée à la cannelle douce (sans sucre ajouté), accompagnée d\'une infusion de fleurs de camomille (babounj) apaisante pour le système digestif.',
        ar: 'تفاحة مقشرة ومطهوة على البخار مع رشة قرفة خفيفة بدون سكر، مع كأس بابونج مهدئ للمصران.',
        darija: 'تفاحة منقية ومفورة كتهضم بسرعة ومكتنفخش المصران، مع كاس البابونج كيحيد التشنجات.',
      },
      caloriesApprox: 110,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Velouté Doux de Potiron & Carottes à la Coriandre, Yaourt Nature',
        ar: 'العشاء: حساء القرع الأحمر والجزر بالكزبرة الطازجة وياغورت طبيعي',
        darija: 'العشا: صوبة رطبة د القرعة الحمرا وخيزو بالقزبور وزيت العود مع ياغورت طبيعي',
      },
      description: {
        fr: 'Soupe veloutée onctueuse de potiron et carottes mixée à l\'huile d\'olive extra vierge et coriandre (sans crème ni choux), 1 yaourt nature sans sucre fermenté bénéfique pour la flore intestinale.',
        ar: 'شوربة قرع أحمر وجزر مهروسة بزيت الزيتون والكزبرة (بدون ملح ولا كريمة)، مع علبة زبادي طبيعي تدعم بكتيريا الأمعاء النافعة.',
        darija: 'صوبة د القرعة الحمرا وخيزو خفيفة ولذيذة كتحمي الشرايين، مع حك ياغورت طبيعي مسوس فيه الخمائر النافعة للمصران.',
      },
      caloriesApprox: 210,
      proteinApprox: 7,
    },
    hydrationTip: {
      fr: 'Boire de l\'eau tiède par petites gorgées tout au long de la journée pour hydrater le côlon en douceur.',
      ar: 'شرب الماء الفاتر على رشفات صغيرة على مدار اليوم لترطيب الأمعاء بلطف.',
      darija: 'شرب الما دافي بشوية على طول النهار كيعاون المصران يخدم مرتاح بلا قبض.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'Badr : 15 jours de discipline accomplis avec succès ! Continuez sur cette excellente lancée.',
        ar: 'بدر: أكملت 15 يوماً من الانضباط الرياضي والغذائي، حافظ على هذا الإيقاع الممتاز.',
        darija: 'بدر: تبارك الله كملتي 15 يوم متواصلة، الكريشة نقصات والجهد زاد!',
      },
      p2: {
        fr: 'Mama Laaziza : Bravo ! 15 jours de repas sur-mesure sans son agressif, sans choux, sans sel et riches en poissons blancs et oméga-3. Votre côlon est apaisé, votre cholestérol régulé et votre vitamine D renforcée.',
        ar: 'ماما لعزيزة: مبروك 15 يوماً من التغذية المصممة خصيصاً لحماية المصران الحساس، خفض الكوليسترول، ورفع فيتامين د مع المشي المنتظم.',
        darija: 'ماما لعزيزة: الله يعطيك الصحة! 15 يوم بماكلة نقية بلا نخالة حارشة وبلا غازات، الحوت المزيان والقرعة واللويزة والمشي فالشميشة خلو المصران هاني والطونسيو مقاد والكوليسترول كيهبط.',
      },
      p3: {
        fr: 'Kaoutar : Programme 15 jours complété sans aucune douleur aux genoux grâce aux anti-inflammatoires naturels.',
        ar: 'كوثر: أنهيت 15 يوماً بنجاح ودون أي ألم في الركبتين.',
        darija: 'كوثر: 15 يوم دازت بامتياز والركابي مزيانين مع حركات بدون صدمات.',
      },
    },
  },
];
