import { DayDietPlan } from '../types';

export const MEAL_PLAN_14_DAYS: DayDietPlan[] = [
  // --- SEMAINE 1 ---
  {
    dayNumber: 1,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour Énergie : Pain Complet & Huile d\'Olive',
        ar: 'فطور الطاقة: خبز القمح الكامل وزيت الزيتون البكر',
        darija: 'فطور بلدي: طرف خبيز القمح مع معلقة زيت بلدية وبيض بلدي مسلوق',
      },
      description: {
        fr: '60g pain complet au levain, 1 œuf dur, 1 c. à café d\'huile d\'olive extra vierge, thé à la menthe sans sucre.',
        ar: '60غ خبز قمح كامل، بيضة مسلوقة، ملعقة صغيرة زيت زيتون بكر، شاي بالنعناع بدون سكر.',
        darija: 'طرف ديال خبز القمح 60غ، بيضة مسلوقة، معلقة صغيرة د الزيت البلدية، كاس أتاي بنعناع بلا سكر.',
      },
      caloriesApprox: 340,
      proteinApprox: 15,
      specialNotes: {
        fr: 'Riche en vitamine D naturelle (jaune d\'œuf) et acides gras sains.',
        ar: 'غني بفيتامين د وأوميغا 3 المفيد للقلب.',
        darija: 'مفيد بزاف لفيتامين د والمناعة بصفر البيض والزيت.',
      },
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poulet aux Légumes de Saison',
        ar: 'الغداء: طاجين دجاج بلدي بالخضار المشكلة',
        darija: 'الغدا: طاجين الدجاج بالخضرة (قرعة، خيزو، جلبانة) بلا زيت بزاف',
      },
      description: {
        fr: '130g blanc de poulet sans peau, courgettes, carottes, haricots verts, cumin, curcuma, 50g pain complet ou 4 c. à soupe de couscous orge.',
        ar: '130غ صدر دجاج بدون جلد، كوسة، جزر، فاصوليا خضراء، توابل مغربية صحية مع القليل من خبز القمح.',
        darija: 'صدر دجاج 130غ منقي من الجلذة، مطيب مع القرعة الخضرا وخيزو واللوبيا الخضرا، معلقة زيت وحدة وكركم وكمون، مع ربع خبزة قمح.',
      },
      caloriesApprox: 480,
      proteinApprox: 38,
      specialNotes: {
        fr: 'Cuisson à feu doux pour préserver les nutriments sans friture.',
        ar: 'طهي هادئ بدون قلي للحفاظ على الفيتامينات.',
        darija: 'الطياب على المهل بماء الخضرة، قمة البنة والصحة.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme & Amandes Locales',
        ar: 'لمجة: تفاحة طازجة وحفنة لوز بلدي',
        darija: 'كاسكروط: تفاحة بلدية و 7 حبات د اللوز مقرمش',
      },
      description: {
        fr: '1 pomme moyenne, 7 amandes non salées, infusion de verveine (louiza) sans sucre.',
        ar: 'تفاحة متوسطة مع 7 حبات لوز نيء غير مملح، شاي اللويزة بدون سكر.',
        darija: 'تفاحة، 7 حبات لوز بلا ملحة، كاس د اللويزة سخونة بلا سكر.',
      },
      caloriesApprox: 160,
      proteinApprox: 4,
    },
    dinner: {
      title: {
        fr: '3cha : Soupe Veloutée de Courge & Salade Marocaine',
        ar: 'العشاء: حساء القرع الأحمر وسلطة مغربية خفيفة',
        darija: 'العشا: صوبة خفيفة د القرعة الحمرا ومطيشة وخيار مقطعين رقاق',
      },
      description: {
        fr: 'Bol de soupe de potiron/courgettes aux épices douces (sans crème), salade marocaine (tomate, concombre, persil, citron).',
        ar: 'طبق شوربة قرع أحمر خفيف، وسلطة طماطم وخيار بالبقدونس وعصير الليمون.',
        darija: 'زلافة صوبة د القرعة الحمرا خفيفة بلا كريمة، مع شلاظة مغربية بمطيشة والخيار وشوية الحامض.',
      },
      caloriesApprox: 240,
      proteinApprox: 6,
    },
    hydrationTip: {
      fr: 'Boire 2 à 2,5 litres d\'eau plate répartis sur la journée.',
      ar: 'شرب 2 إلى 2.5 لتر من الماء الموزع على مدار اليوم.',
      darija: 'شرب من 2 حتى ل 2.5 لتر ديال الما مقسمة على النهار كامل.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'Badr (Poids actuel : 102kg) : Ajoutez 30g de poulet au déjeuner pour la satiété.',
        ar: 'بدر (الوزن الحالي: 102 كغ): أضف 30غ إضافية من الدجاج للشبع.',
        darija: 'بدر (الوزن الحالي: 102 كلغ): زيد طريف د الدجاج فالغدا باش تشبع وماتخطفكش الجوعة.',
      },
      p2: {
        fr: 'Mama Laaziza (Poids actuel : 64kg) : Ne rajoutez AUCUN sel dans le tajine, compensez avec jus de citron et coriandre fraîche.',
        ar: 'ماما لعزيزة (الوزن الحالي: 64 كغ): لا تضعي الملح في الطاجين واستعيضي عنه بالليمون الحامض والكزبرة.',
        darija: 'ماما لعزيزة (الوزن الحالي: 64 كلغ): قطعي الملحة نهائياً فالمكلة، ديري الحامض والكمون والقزبور يعطيو البنة.',
      },
      p3: {
        fr: 'Kaoutar (Poids actuel : 80kg · Genoux) : Ajoutez une pincée généreuse de curcuma (antioxydant protecteur des articulations).',
        ar: 'كوثر (الوزن الحالي: 80 كغ · ألم الركبة): أكثري من الكركم البلدي كمضاد طبيعي لالتهاب المفاصل.',
        darija: 'كوثر (الوزن الحالي: 80 كلغ · الركابي): كب معلقة د الكركم البلدي فالطاجين راه كيبرا بيه المفصل.',
      },
    },
  },

  {
    dayNumber: 2,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Hssoua d\'Orge (Tchicha) au Thym',
        ar: 'فطور: حسوة شعير (تشيشة) بالزعتر وزيت الزيتون',
        darija: 'فطور: حسوة البلبولة د الشعير بالزعتر والنافع ونقيطة زيت بلدية',
      },
      description: {
        fr: 'Bol de soupe d\'orge concassée (tchicha beldi) infusée au zaatar sauvage, 1 cuillère à café d\'huile d\'olive, 1 portion de fromage frais faible en sel.',
        ar: 'شوربة دشيشة الشعير بالزعتر البري مع قطرات زيت الزيتون وقطعة جبن طري خفيف الملح.',
        darija: 'زلافة بلبولة الشعير طايبة بالزعتر وشوية د الحليب قليل الدسم وقطرة زيت بلدية، طريف جبن خفيف.',
      },
      caloriesApprox: 310,
      proteinApprox: 12,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Sardines Marocaines Grillées au Four & Zaalouk Léger',
        ar: 'الغداء: سردين مغربي مشوي بالفرن وزعلوك باذنجان صحي',
        darija: 'الغدا: حوت السردين مشوي فالفران مشرمل مع زعلوك الدنجال بلا زيت بزاف',
      },
      description: {
        fr: '150g sardines fraîches marinées (chermoula sans excès d\'huile ni sel), cuites au four, zaalouk d\'aubergines grillées à la vapeur, 50g pain complet.',
        ar: '150غ سردين طازج مشوي، زعلوك باذنجان مشوي بالثوم والكمون، ربع خبز قمح كامل.',
        darija: '150غ سردين فالفران بالشرمولة البلدية، مع زعلوك الدنجال مبخر ومصوطي بمسحة زيت وثومة وكمون، وربع خبزة قمح.',
      },
      caloriesApprox: 460,
      proteinApprox: 36,
      specialNotes: {
        fr: 'EXCEPTIONNEL POUR LE PROFIL 2 : Le sardine est la meilleure source naturelle de Vitamine D et Oméga-3.',
        ar: 'ممتاز لمرضى نقص فيتامين د والكوليسترول بفضل أوميغا 3 الطبيعي.',
        darija: 'أحسن وجبة لنقص فيتامين د والكوليسترول حيت السردين عامر أوميغا 3 وفيتامين د.',
      },
    },
    snack: {
      title: {
        fr: 'Kskrout : Yaourt Nature & Graines de Chia ou Lin',
        ar: 'لمجة: زبادي طبيعي غير محلى مع بذور الكتان',
        darija: 'كاسكروط: دانون مسوس مع معلقة صغيورة زريعة الكتان مطحونة',
      },
      description: {
        fr: '1 yaourt nature sans sucre, 1 c. à café de graines de lin moulues (oméga 3), thé vert à la menthe.',
        ar: 'زبادي طبيعي بدون سكر، ملعقة بذور الكتان، شاي أخضر.',
        darija: 'ياغورت طبيعي مسوس مع معلقة د زريعة الكتان، وكاس أتاي بلا سكر.',
      },
      caloriesApprox: 130,
      proteinApprox: 6,
    },
    dinner: {
      title: {
        fr: '3cha : Salade Tiède de Lentilles Marocaines (Adas Light)',
        ar: 'العشاء: سلطة عدس دافئة بالخضار والكمون',
        darija: 'العشا: زليفة صغيرة د العدس طايب بالخضرة وشوية الكسبرة والكمون',
      },
      description: {
        fr: '1 bol modéré de lentilles mijotées avec tomates fraîches, carottes en petits dés, cumin et ail (sans gras animal).',
        ar: 'شوربة عدس بالخضار والطماطم والكمون خفيفة الهضم ومغذية.',
        darija: 'زلافة عدس بالخضرة مقطعة رقيقة وثومة وكمون، خفيف ومريح للمصران.',
      },
      caloriesApprox: 290,
      proteinApprox: 16,
    },
    hydrationTip: {
      fr: 'Ajouter une rondelle de citron ou feuilles de menthe dans votre carafe d\'eau.',
      ar: 'أضف شريحة ليمون وأوراق نعناع لقنينة الماء.',
      darija: 'دير طريف الحامض ونعناع فقرعة الما باش تفتح ليك الشهية للماء.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Parfait pour le transit et faire baisser l\'appétit du soir.',
        ar: 'ممتاز للألياف والسيطرة على الجوع الليلي.',
        darija: 'كيشبع ومفيد للمصران وماكيخليكش تجوع بالليل.',
      },
      p2: {
        fr: 'P2 : Privilégier les sardines (manger les arêtes fines riches en calcium pour les os et vit D).',
        ar: 'السردين غني بالكالسيوم وفيتامين د الهامين لهشاشة العظام.',
        darija: 'السردين كنز لعظامك وفيتامين د، كولي الشوك الرقيق راه عامر كالسيوم.',
      },
      p3: {
        fr: 'P3 : Les oméga-3 des sardines et graines de lin lubrifient les articulations.',
        ar: 'أوميغا 3 يقلل احتكاك وألم مفصل الركبة.',
        darija: 'الزيوت د السردين وزريعة الكتان كيدهنو المفاصل وينقصو حريق الركبة.',
      },
    },
  },

  {
    dayNumber: 3,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Flocons d\'Avoine Marocains au Lait Léger & Cannelle',
        ar: 'فطور: شوفان بحليب خفيف وقرفة مع ثمرتين',
        darija: 'فطور: حسوة الشوفان بالحليب قليل الدسم والقرفة و 2 ثمرات مجهول',
      },
      description: {
        fr: '45g flocons d\'avoine cuits dans lait écrémé ou végétal, saupoudrés de cannelle de Ceylan, 2 dattes.',
        ar: '45غ شوفان مطبوخ بحليب قليل الدسم مع قرفة وحبتي تمر.',
        darija: '45غ شوفان مطبوخ فكاس حليب خفيف، رشة قرفة بلدية، و 2 حبات تمر.',
      },
      caloriesApprox: 320,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Bœuf Maigre aux Artichauts & Petits Pois',
        ar: 'الغداء: طاجين لحم عجل هبرة بالقوق والجلبانة',
        darija: 'الغدا: طاجين هبرة اللحم البقري الصغير مع القوق والجلبانة ومطيشة',
      },
      description: {
        fr: '120g bœuf maigre mijoté sans graisse ajoutée avec cœurs d\'artichauts et petits pois frais, coriandre, gingembre.',
        ar: '120غ لحم بقر قليل الدهن مطهو مع قلوب الخرشوف والبازلاء والزنجبيل.',
        darija: '120غ لحم هبرة ناشف من الشحمة، مع القوق والجلبانة وسكينجبير طري وشوية القزبور، مع ربع خبز قمح.',
      },
      caloriesApprox: 490,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Orange Tranchée à la Cannelle',
        ar: 'لمجة: برتقالة مقطعة بالقرفة وماء الزهر',
        darija: 'كاسكروط: ليمونة مقطعة رقيقة مرشوشة بالقرفة وشوية د ماء الزهر قطيرة',
      },
      description: {
        fr: '1 belle orange marocaine découpée en rondelles, saupoudrée de cannelle moulue.',
        ar: 'برتقالة مقطعة دوائر مع رشة قرفة بلدية منعشة.',
        darija: 'برتقالة بلدية مقطعة دوائر مع رشة د القرفة، باردة ومنعشة.',
      },
      caloriesApprox: 90,
      proteinApprox: 2,
    },
    dinner: {
      title: {
        fr: '3cha : Salade Royale de Thon au Naturel & Œuf Mollet',
        ar: 'العشاء: سلطة غنية بالتونة الطبيعية والبيض المسلوق',
        darija: 'العشا: شلاظة منوعة بالخص ومطيشة وطون مصفى من الزيت وبيض مسلوق',
      },
      description: {
        fr: 'Grande assiette de laitue, concombre, tomates cerises, 1 boîte de thon au naturel (sans huile), 1 œuf dur, vinaigre de cidre.',
        ar: 'سلطة خضراء غنية بالخس، علبة تونة بالماء، بيضة مسلوقة وتتبيلة خل التفاح وزيت خفيف.',
        darija: 'طبسيل خضرا كبير بالخص والخيار ومطيشة، حك طون ناشف من الزيت، وبيضة مسلوقة، مع شوية خل التفاح.',
      },
      caloriesApprox: 310,
      proteinApprox: 28,
    },
    hydrationTip: {
      fr: 'Une grande tasse de thé au thym tiède après le dîner aide à la digestion.',
      ar: 'كوب شاي الزعتر الدافئ بعد العشاء يعزز الهضم.',
      darija: 'كاس د الزعتر دافي من ورا العشا كيريح المعدة والمصران.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Richesse en fer et protéines pour le tonus musculaire.',
        ar: 'غني بالبروتين والحديد للحفاظ على الكتلة العضلية.',
        darija: 'اللحم الهبرة والطون كيعطيوك بروتين واعر للعضلات باش يطيح غير الشحم.',
      },
      p2: {
        fr: 'P2 : Ne pas saler la salade, le thon en boîte apporte déjà ses minéraux.',
        ar: 'لا تضعي الملح في السلطة نظراً لوجوده الطبيعي في التونة.',
        darija: 'ماديريش الملح فالشلاظة حيت الطون ديجا فيه شوية الأملاح الطبيعية.',
      },
      p3: {
        fr: 'P3 : Le gingembre dans le tajine combat activement l\'inflammation des genoux.',
        ar: 'الزنجبيل يهدئ التهاب المفاصل ويسكن آلام الركبة.',
        darija: 'سكينجبير الطري كيهدن الحريق وكيخفف الصهد فالمفاصل.',
      },
    },
  },

  {
    dayNumber: 4,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Toast Complet à l\'Avocat & Omelette Blanche',
        ar: 'فطور: توست قمح بالأفوكادو مع بيض خفيف',
        darija: 'فطور: ربع خبزة قمح مع ربع حبة أفوكا ممعوسة وأومليط بالبيض والزعتر',
      },
      description: {
        fr: '50g pain complet, 1/4 d\'avocat écrasé avec citron, 1 œuf entier + 1 blanc d\'œuf en omelette cuite sans matière grasse.',
        ar: 'توست قمح كامل، ربع حبة أفوكادو مهروسة مع ليمون، بيضة وبياض بيضة مطهوان بدون زيت.',
        darija: 'ربع خبزة قمح، ربع أفوكا ممعوسة مع الحامض، بيضة بلدية مطربة مع الزعتر طايبة فمقلاة ماتلصقش.',
      },
      caloriesApprox: 330,
      proteinApprox: 16,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poisson Blanc (Loup ou Merlan) à la Charmoula',
        ar: 'الغداء: طاجين سمك أبيض صحي بالشرمولة والخضار',
        darija: 'الغدا: طاجين الحوت الأبيض (ميرنا أو باجو) بالخضرة وشرمولة بلدي',
      },
      description: {
        fr: '150g filet de poisson blanc cuit en tajine avec rondelles de carottes, poivrons rouges, tomates, ail, persil, coriandre et citron confit maison (faible sel).',
        ar: '150غ سمك أبيض مع فلفل أحمر، جزر، ثوم، ليمون، كزبرة وطماطم طازجة.',
        darija: '150غ حوت أبيض طايب فطويجين مع الفلفلة حمرا وخيزو ومطيشة وثومة وقزبور وحامض، خفيف وبنين.',
      },
      caloriesApprox: 420,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Poignée de Noix de Grenoble (Guergaa)',
        ar: 'لمجة: 4 حبات جوز (كركاع) بلدي',
        darija: 'كاسكروط: 4 حبات د الكركاع البلدي مع كاس أتاي مشحر بلا سكر',
      },
      description: {
        fr: '4 cerneaux de noix (acides gras essentiels anti-inflammatoires), thé vert sans sucre.',
        ar: '4 حبات جوز طازج غني بأوميغا 3 وشاي أخضر.',
        darija: '4 حبات كركاع بلدي فيهم زيوت نقية للمخ والمفاصل، مع أتاي بلا سكر.',
      },
      caloriesApprox: 140,
      proteinApprox: 3,
    },
    dinner: {
      title: {
        fr: '3cha : Taktouka Légère & Filet de Colin Vapeur',
        ar: 'العشاء: تكتوكة فلفل وطماطم صحية مع سمك فيليه مبخر',
        darija: 'العشا: تكتوكة الفلفلة ومطيشة مشويين مع طريف حوت مبخر وشوية كمون',
      },
      description: {
        fr: 'Poivrons et tomates grillés réduits en taktouka avec 1 filet de colin ou cabillaud vapeur assaisonné au cumin et jus de citron.',
        ar: 'تكتوكة فلفل وطماطم مشوية مع قطعة سمك مبخرة بالليمون والكمون.',
        darija: 'فلفلة ومطيشة مشويين ومصوبين تكتوكة خفيفة مع طريف حوت مبخر كيذوب فالفم.',
      },
      caloriesApprox: 280,
      proteinApprox: 26,
    },
    hydrationTip: {
      fr: 'Boire un verre d\'eau à température ambiante dès le réveil.',
      ar: 'اشرب كوب ماء معتدل فور الاستيقاظ.',
      darija: 'شرب كاس د الما دافي أول ماتفيق من النعاس باش تفيق الكبدة والمعدة.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Repas digeste favorisant un sommeil réparateur et la lipolyse nocturne.',
        ar: 'وجبة خفيفة تحفز حرق الدهون أثناء النوم.',
        darija: 'عشا خفيف كيعاون الكرش تهضم وينعس الواحد مرتاح ويحرق الشحم فالليل.',
      },
      p2: {
        fr: 'P2 : Le poisson blanc est pauvre en cholestérol et sans sel ajouté.',
        ar: 'السمك الأبيض خفيف على الكوليسترول ومناسب للنظام قليل الملح.',
        darija: 'الحوت الأبيض مافيهش الكوليسترول وخفيف بزاف على القلب وضغط الدم.',
      },
      p3: {
        fr: 'P3 : Les noix sont réputées pour soulager l\'arthrose et protéger les cartilages.',
        ar: 'الجوز غني بمضادات الأكسدة التي تحمي غضروف الركبة.',
        darija: 'الكركاع كيحمي الغضروف ديال الركبة من الاحتكاك.',
      },
    },
  },

  {
    dayNumber: 5,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Bissara Légère aux Fèves & Cumin',
        ar: 'فطور: بيصارة الفول خفيفة بالكمون وزيت الزيتون',
        darija: 'فطور: زليفة صغيرة د البيصارة خفيفة بالكمون وفليفلة حارة ونقيطة زيت بلدية',
      },
      description: {
        fr: '1 petit bol de purée de fèves sèches (bissara) mijotée sans excès d\'huile, cumin, paprika, 1 filet d\'huile d\'olive, 40g pain orge.',
        ar: 'صحن صغير بصارة فول خفيفة بالكمون وزيت الزيتون البكر مع خبز شعير.',
        darija: 'زليفة صغيورة بيصارة طايبة بالثومة والكمون وقطيرة زيت العود، مع شوية خبز الشعير.',
      },
      caloriesApprox: 340,
      proteinApprox: 14,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Brochettes de Dinde Marinées & Salade de Poivrons Mechouia',
        ar: 'الغداء: قطبان صدر ديك رومي مشوي مع سلطة مشوية',
        darija: 'الغدا: قطبان بيبي مشويين مشرملين مع سلطة مشوية (فلفلة ومطيشة وثومة مشوية)',
      },
      description: {
        fr: '140g de filet de dinde en brochettes marinées aux herbes et paprika doux, grillées, salade méchouia sans excès d\'huile, 50g riz complet.',
        ar: '140غ قطبان صدر رومي مشوي، سلطة مشوية تونسية/مغربية، قليل من الأرز الكامل.',
        darija: '140غ قطبان صدر بيبي مشويين فالمجمر ولا المقلاة، مع سلطة مشوية بالثومة والكمون، وشوية روز كامل مسلوق.',
      },
      caloriesApprox: 450,
      proteinApprox: 40,
    },
    snack: {
      title: {
        fr: 'Kskrout : Salade de Fruits Frais (Grenade & Clémentine)',
        ar: 'لمجة: حبات الرمان وكليمانتين طازج',
        darija: 'كاسكروط: زليفة الرمان مع ماندارينا مفرتة وشوية قطرات ماء زهر',
      },
      description: {
        fr: 'Bol de graines de grenade et quartiers de mandarine, sans sucre ajouté.',
        ar: 'صحن رمان ويوسفي بدون سكر، غني بمضادات الأكسدة.',
        darija: 'رمان وماندارين منقيين ومفرتين، بنان ومنعشين وبلا سكر.',
      },
      caloriesApprox: 120,
      proteinApprox: 2,
    },
    dinner: {
      title: {
        fr: '3cha : Salade Chaude de Chou-fleur & Carottes au Cumin',
        ar: 'العشاء: سلطة شوفلور وجزر بالكمون والكزبرة',
        darija: 'العشا: شوفلور وخيزو مبخرين ومصوطيين بشوية الكمون والحامض مع بيضة مسلوقة',
      },
      description: {
        fr: 'Chou-fleur et carottes vapeur dorés légèrement avec persil plat, ail, cumin et jus de citron, 1 œuf dur pour l\'apport protéiné.',
        ar: 'قرنبيط وجزر مطهوان على البخار مع كمون وليمون وبيضة مسلوقة.',
        darija: 'شوفلور وخيزو مبخرين ومشرملين بالثومة والكمون والحامض، مع بيضة مسلوقة.',
      },
      caloriesApprox: 260,
      proteinApprox: 14,
    },
    hydrationTip: {
      fr: 'La bissara et les légumes riches en fibres nécessitent une bonne hydratation pour un transit fluide.',
      ar: 'أكثر من شرب الماء لمساعدة الألياف على تليين الأمعاء.',
      darija: 'شرب الما مزيان فاش تاكل البيصارة باش تسرح المصران وماتنفخش.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Protéines maigres de dinde optimales pour la fonte adipeuse.',
        ar: 'بروتين الديك الرومي مثالي لبناء العضلات وخسارة الدهون.',
        darija: 'صدر بيبي ناشف من الدهنيات وكيعطي فورمة واعرة للراجل.',
      },
      p2: {
        fr: 'P2 : Ne pas saler la bissara, assaisonner uniquement avec le cumin et l\'ail.',
        ar: 'تبّلي البيصارة بالكمون والثوم فقط وتجنبي الملح تماماً.',
        darija: 'ماديريش الملح فبيصارة، الكمون والثومة كافيين للبنة.',
      },
      p3: {
        fr: 'P3 : Les antioxydants de la grenade sont puissamment protecteurs articulaires.',
        ar: 'مضادات أكسدة الرمان تمنع تآكل غضاريف الركبتين.',
        darija: 'الرمان واعر بزاف لتهدئة الصهد والتورام فالركابي.',
      },
    },
  },

  {
    dayNumber: 6,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Crêpe Mille Trous (Baghrir) Légère au Miel Pur & Huile d\'Olive',
        ar: 'فطور: حبة بغرير قمح خفيفة مع ملعقة عسل حر وزيت زيتون',
        darija: 'فطور: حبة بغرير طايبة بدقيق القمح الكامل مع نص معلقة عسل حر وزيت بلدية',
      },
      description: {
        fr: '1 grand baghrir à base de semoule complète / blé complet (sans sucre dans la pâte), 1 c. à café d\'huile d\'olive, 1/2 c. à café de miel pur d\'oranger ou d\'euphorbe, thé à la menthe.',
        ar: 'حبة بغرير بدقيق القمح، نصف ملعقة عسل حر، ملعقة زيت زيتون، شاي بالنعناع.',
        darija: 'حبة بغرير القمح، دهينة خفيفة د الزيت والعسل الحر، وكاس أتاي بنعناع منعنع بلا سكر.',
      },
      caloriesApprox: 290,
      proteinApprox: 8,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Couscous Traditionnel du Vendredi Allégé (Tfaya Light ou 7 Légumes)',
        ar: 'الغداء: كسكس الجمعة الصحي بسبع خضار ولحم عجل أو دجاج منزوع الجلد',
        darija: 'الغدا: كسكسو الجمعة الخفيف بسبع خضاري ودجاج بلدي بلا سمن وبلا دهن',
      },
      description: {
        fr: 'Assiette raisonnable de semoule complète ou d\'orge (tchicha), garnie généreusement de courge rouge, courgettes, carottes, navets, chou et 120g de poulet fermier.',
        ar: 'صحن كسكس صحي بشعير أو قمح كامل مع وفرة في الخضار و120غ دجاج.',
        darija: 'طبسيل كسكسو معتدل ديال البلبولة أو القمح مع الخضرة الكثيرة (القرعة، خيزو، اللفت، المكور) و 120غ دجاج بلدي.',
      },
      caloriesApprox: 510,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Thé à la Menthe & 2 Figues Sèches',
        ar: 'لمجة: حبتان من التين المجفف (شريحة) مع شاي أخضر',
        darija: 'كاسكروط: 2 حبات الشريحة البلدية وكاس أتاي سخون بلا سكر',
      },
      description: {
        fr: '2 figues sèches (riches en calcium et fibres), infusion chaude.',
        ar: 'حبتان تين مجفف غنيتان بالألياف والكالسيوم.',
        darija: '2 شريحات عامرين كالسيوم للعظام ومزيانين للهضم.',
      },
      caloriesApprox: 110,
      proteinApprox: 2,
    },
    dinner: {
      title: {
        fr: '3cha : Salade de Concombre Râpé à l\'Origan & Fromage Frais',
        ar: 'العشاء: سلطة خيار مبشور بالزعتر وجبن قريش خفيف',
        darija: 'العشا: خيار محكوك بالزعتر والحامض مع طريف جبن بلدي خفيف',
      },
      description: {
        fr: 'Concombre râpé avec yaourt grec 0% ou fromage frais maigre, menthe séchée, jus de citron.',
        ar: 'خيار مبشور مع زبادي يوناني قليل الدسم ونعناع مجفف وعصير ليمون.',
        darija: 'خيار محكوك مع ياغورت طبيعي بدون دسم ورشة نعناع يابس وشوية الحامض، كيهضم الكسكسو.',
      },
      caloriesApprox: 180,
      proteinApprox: 14,
    },
    hydrationTip: {
      fr: 'Après le couscous, marchez lentement 15 minutes et buvez de l\'eau tiède.',
      ar: 'المشي الخفيف لـ15 دقيقة بعد وجبة الكسكس يساعد على توازن السكر.',
      darija: 'مور الكسكسو ماديرش القيلولة نيشان، تحرك شوية 15 دقيقة فالدار باش يتهضم.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Remplissez la moitié de l\'assiette de couscous avec les légumes (courge, navet, carotte) et réduisez la semoule.',
        ar: 'املأ نصف صحن الكسكس بالخضار وخفف من حبيبات الكسكس.',
        darija: 'عمر الطبسيل بالخضرة ونقص من السميدة، شبع بالقرعة وخيزو واللفت.',
      },
      p2: {
        fr: 'P2 : Couscous d\'orge (Tchicha) parfait pour réguler le cholestérol et la glycémie.',
        ar: 'كسكس الشعير (الدشيشة) ممتاز لضبط الكوليسترول ومستوى السكر.',
        darija: 'كسكسو البلبولة كيحيد الكوليسترول وضابط ممتاز للسكر، وماديريش السمن الحار.',
      },
      p3: {
        fr: 'P3 : Les figues sèches apportent du calcium végétal protecteur pour les articulations.',
        ar: 'التين المجفف يمد المفاصل بالكالسيوم والمغنيسيوم الطبيعيين.',
        darija: 'الشريحة عامرة كالسيوم ومغنيزيوم كيعاونو الركبة والعظام.',
      },
    },
  },

  {
    dayNumber: 7,
    week: 1,
    breakfast: {
      title: {
        fr: 'Ftour : Shakshuka aux Tomates Fraîches & Œufs Mollets',
        ar: 'فطور: شكشوكة طماطم طازجة بالبيض والكمون',
        darija: 'فطور: مطيشة محكوكة بالثومة والكمون و 2 بيضات بلديين طايبين فالطويجين الصغير',
      },
      description: {
        fr: 'Tomates fraîches réduites avec ail, persil et cumin, 2 œufs pochés dedans, 40g pain complet.',
        ar: 'طماطم مطهوة مع ثوم وكمون مع بيضتين مسلوقتين بالصلصة وخبز قمح.',
        darija: 'مطيشة محكوكة مع الثومة والكمون والقزبور ومفقوصين عليها 2 بيضات، وربع خبزة قمح.',
      },
      caloriesApprox: 350,
      proteinApprox: 18,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tagine de Bœuf aux Haricots Verts (Loubia Khadra)',
        ar: 'الغداء: طاجين لحم هبرة بالفاصوليا الخضراء والكزبرة',
        darija: 'الغدا: طاجين اللحم الصغير باللوبيا الخضرا ومطيشة والزعفران حر',
      },
      description: {
        fr: '130g bœuf maigre mijoté avec 200g de haricots verts frais, ail, coriandre et un soupçon de safran pur.',
        ar: '130غ لحم بقر خالي من الشحم مع فاصوليا خضراء طازجة وثوم وزعفران حر.',
        darija: 'طويجين اللحم هبرة باللوبيا الخضرا بكثرة، الثومة، القزبور والزعفران شعرة، مع ربع خبز قمح.',
      },
      caloriesApprox: 470,
      proteinApprox: 37,
    },
    snack: {
      title: {
        fr: 'Kskrout : Tisane de Camomille & 1 Poire',
        ar: 'لمجة: إجاصة طازجة مع شاي البابونج المهدئ',
        darija: 'كاسكروط: بوعويدة بلدية طايبة مع كاس د البابونج دافي كيهدن الأعصاب',
      },
      description: {
        fr: '1 poire mûre avec infusion de camomille sans sucre.',
        ar: 'إجاصة طازجة مع منقوع البابونج.',
        darija: 'بوعويدة حلوة طبيعياً مع كاس د البابونج دافي بلا سكر.',
      },
      caloriesApprox: 110,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Harira Végétarienne Légère (Sans Farine Blanche)',
        ar: 'العشاء: حريرة مغربية صحية خفيفة بدون دقيق أبيض',
        darija: 'العشا: حريرة مغربية بلدية مدورة بالخضرة مطحونة أو الشوفان بلا فورص',
      },
      description: {
        fr: 'Bol de harira légère préparée avec tomates, céleri (krafes), persil, lentilles et un peu de pois chiches, liée avec de la purée de carotte ou d\'avoine (zéro farine blanche raffinée).',
        ar: 'شوربة حريرة صحية بالكرفس والعدس وقليل من الحمص بدون دقيق أبيض مكرر.',
        darija: 'زلافة حريرة كتشهي بالكرافص والقزبور والعدس وشوية الحمص، مدورة بالخضرة المطحونة بلا دقيق أبيض ثقيل.',
      },
      caloriesApprox: 270,
      proteinApprox: 12,
    },
    hydrationTip: {
      fr: 'Bilan de fin de semaine : vérifiez votre consommation moyenne d\'eau (au moins 2L par jour).',
      ar: 'اختم الأسبوع الأول بالتأكد من المحافظة على شرب لترين من الماء يومياً.',
      darija: 'نهاية السيمانة الأولى: تأكد راك شربتي 2 لتر د الما فاليوم ومكمل الطريق بنجاح!',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Félicitations ! Première semaine bouclée, vous devez déjà ressentir un ventre plus léger.',
        ar: 'أحسنت! إتمام الأسبوع الأول يخفف من انتفاخ البطن وثقل الجسم.',
        darija: 'برافو عليك! السيمانة الأولى كملات وغاتحس بكرشك ولات خفيفة وفشات.',
      },
      p2: {
        fr: 'P2 : Le céleri et la tomate fraîche sont excellents pour éliminer les toxines sans élévation de tension.',
        ar: 'الكرفس منشط رائع للكلى ومساعد على خفض ضغط الدم.',
        darija: 'الكرافص فالحريرة كيهبط الطنسيون وينقي الكلاوي.',
      },
      p3: {
        fr: 'P3 : Pas de chocs sur les genoux aujourd\'hui, faites votre routine d\'étirements doux.',
        ar: 'التزمي بتمارين الإطالة الهادئة بدون إجهاد لمفصل الركبة.',
        darija: 'ديري الحركات الخفيفة ديال التمديد ناعسة بلا ما تجهدي ركابيك.',
      },
    },
  },

  // --- SEMAINE 2 (Cycles repeating day 8 to 14) ---
  {
    dayNumber: 8,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Œufs Brouillés au Cumin & Pain d\'Orge',
        ar: 'فطور: بيض مخفوق بالكمون وزيت الزيتون مع خبز شعير',
        darija: 'فطور: 2 بيضات مطربين بالكمون ونقيطة زيت العود مع ربع خبزة شعير',
      },
      description: {
        fr: '2 œufs battus cuits à feu doux avec 1 c. à café d\'huile d\'olive et cumin, 40g pain d\'orge, thé sans sucre.',
        ar: 'بيضتان مخفوقتان مع كمون وزيت زيتون وخبز شعير وشاي غير محلى.',
        darija: '2 بيضات بلديين طايبين فالمهل مع كمون وشوية زيت بلدية، وخبز الشعير، وأتاي بلا سكر.',
      },
      caloriesApprox: 320,
      proteinApprox: 15,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Kefta de Sardine Maison aux Herbes',
        ar: 'الغداء: طاجين كفتة السردين الطازج بصلصة الطماطم والأعشاب',
        darija: 'الغدا: طويجين كفتة السردين مصوبة فالدار بمطيشة محكوكة والكمون والفلفلة حمرا',
      },
      description: {
        fr: '150g de sardines fraîches hachées avec ail, persil, cumin, piment doux, mijotées dans un coulis de tomates fraîches sans sucre ajouté.',
        ar: '150غ كفتة سردين طازج مع طماطم وثوم وبقدونس وتوابل مغربية.',
        darija: '150غ كفتة السردين مطحونة مع الثومة والربيع والكمون طايبة فمطيشة طرية، كنز من الفيتامينات.',
      },
      caloriesApprox: 440,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Yaourt Maigre & Graines de Sésame (Zenjlane)',
        ar: 'لمجة: زبادي طبيعي مع سمسم محمص غني بالكالسيوم',
        darija: 'كاسكروط: دانون مسوس مع معلقة د الزنجلان محمر عامر كالسيوم',
      },
      description: {
        fr: '1 yaourt nature avec 1 c. à café de graines de sésame (championne du calcium naturel).',
        ar: 'زبادي طبيعي مع ملعقة سمسم غني بالكالسيوم للعظام.',
        darija: 'ياغورت مسوس مع معلقة د الزنجلان محمر، كيقوي العظام والركابي.',
      },
      caloriesApprox: 140,
      proteinApprox: 6,
    },
    dinner: {
      title: {
        fr: '3cha : Salade Zaalouk de Courgettes (Zaalouk El-Guer\'a Khadra)',
        ar: 'العشاء: زعلوك الكوسة (القرع الأخضر) الصحي مع بيضة مسلوقة',
        darija: 'العشا: زعلوك القرعة الخضرا مشرملة بالثومة والكمون والحامض مع بيضة مسلوقة',
      },
      description: {
        fr: 'Courgettes râpées et cuites avec ail, coriandre, cumin et jus de citron, servies tièdes avec 1 œuf dur.',
        ar: 'زعلوك كوسة خضراء بالثوم والليمون والكمون مع بيضة مسلوقة.',
        darija: 'قرعة خضرا محكوكة ومشرملة بحال زعلوك الدنجال، خفيفة وبنينة وماكتغلظش نهائياً.',
      },
      caloriesApprox: 230,
      proteinApprox: 12,
    },
    hydrationTip: {
      fr: 'Gardez toujours une gourde d\'eau à portée de main pendant le télétravail ou à la maison.',
      ar: 'اجعل قنينة الماء في متناول يدك دوماً.',
      darija: 'خلي قرعة الما حداك ديما فالطابلة وفالصالون باش ماتنساش تشرب.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Les sardines apportent une satiété prolongée qui évite tout grignotage.',
        ar: 'السردين يمنح شعوراً طويلاً بالشبع يمنع الرغبة في الأكل الزائد.',
        darija: 'كفتة السردين كتعمر المعدة وماتخليكش تقلب على السقاطة.',
      },
      p2: {
        fr: 'P2 : Double dose de calcium et Vitamine D (Sardines + Sésame) idéale pour vos bilans.',
        ar: 'جرعة ممتازة من فيتامين د والكالسيوم لتقوية العظام.',
        darija: 'السردين والزنجلان هما الدوا الطبيعي لنقص فيتامين د وهشاشة العظام.',
      },
      p3: {
        fr: 'P3 : Très riche en oméga-3 pour soulager les gonflements du genou.',
        ar: 'أوميغا 3 الطبيعي يخفف من تورم مفصل الركبة.',
        darija: 'كفتة السردين كتبرد التورام فالمفصل د الركبة.',
      },
    },
  },

  {
    dayNumber: 9,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Fromage Jben Frais Maison & Concombre',
        ar: 'فطور: جبن بلدي طازج قليل الملح مع خيار وطماطم وخبز قمح',
        darija: 'فطور: طريف جبن بلدي ناقص ملحة مع خيارة مقشرة وطماطم وربع خبزة قمح',
      },
      description: {
        fr: '50g pain complet, 50g fromage frais traditionnel peu salé (jben), tranches de concombre frais croquants, menthe.',
        ar: 'خبز قمح، جبن أبيض طازج قليل الملح، شرائح خيار ونعناع.',
        darija: 'ربع خبزة قمح، طريف جبن بلدي ناقص ملحة، خيارة مقطعة مع ورقات النعناع.',
      },
      caloriesApprox: 290,
      proteinApprox: 14,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine d\'Agneau Maigre ou Veau aux Haricots Blancs Frais (Loubia)',
        ar: 'الغداء: طاجين فاصوليا بيضاء (لوبيا مغربية) صحية باللحم الهبرة',
        darija: 'الغدا: طويجين اللوبيا البيضاء طايبة بمطيشة والثومة وطريف لحم هبرة صغير',
      },
      description: {
        fr: 'Assiette modérée de haricots blancs mijotés à la marocaine avec tomates fraîches râpées, ail, cumin, 100g de veau maigre.',
        ar: 'فاصوليا بيضاء مطهوة بالطماطم والكمون ولحم عجل قليل الدهن.',
        darija: 'طويجين اللوبيا البيضا البلدية طايبة بمطيشة والثومة والكمون وطريف لحم هبرة صغير.',
      },
      caloriesApprox: 490,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Pomme Cuite au Four à la Cannelle',
        ar: 'لمجة: تفاحة مخبوزة بالقرفة الدافئة',
        darija: 'كاسكروط: تفاحة طايبة فالفران ومرشوشة بالقرفة (كتجي معسلة بلا سكر)',
      },
      description: {
        fr: '1 pomme évidée et cuite au four avec cannelle, douce et réconfortante.',
        ar: 'تفاحة مطهوة بالفرن بنكهة القرفة الطبيعية بدون سكر.',
        darija: 'تفاحة طايبة فالفران ومدردر عليها القرفة، كتحس بالحلاوة الطبيعية بلا سكر.',
      },
      caloriesApprox: 95,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Salade de Betteraves Râpées & Blanc de Poulet Émincé',
        ar: 'العشاء: سلطة باربا (شمندر) طازجة مع شرائح دجاج مسلوق',
        darija: 'العشا: شلاظة الباربا مسلوقة ومقطعة مع شوية البصلة والمعدنوس وطريفات صدر دجاج',
      },
      description: {
        fr: 'Salade de betteraves cuites à la vapeur avec persil et oignon rouge, accompagnée de 80g de blanc de poulet grillé émincé.',
        ar: 'سلطة شمندر مبخر مع بقدونس وبصل أحمر مع 80غ شرائح صدر دجاج.',
        darija: 'باربا مسلوقة مع البصلة والمعدنوس وعصير الحامض، مع طريفات صدر دجاج مشويين.',
      },
      caloriesApprox: 280,
      proteinApprox: 22,
    },
    hydrationTip: {
      fr: 'La betterave est un excellent détoxifiant pour le foie et la circulation.',
      ar: 'الشمندر ممتاز لتنشيط الدورة الدموية وتنقية الكبد.',
      darija: 'الباربا كترد الدم نقي وكتفتح الوجه وتصفي الكبدة.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Les haricots blancs apportent des fibres lentes prévenant les fringales.',
        ar: 'ألياف الفاصوليا تساعد على تنظيم الشهية وإحراق الدهون.',
        darija: 'اللوبيا كتشبع ببطء وماتخليكش تحس بالسخفة.',
      },
      p2: {
        fr: 'P2 : Ne mettez pas de sel dans les haricots blancs, mettez beaucoup de cumin pour la digestion.',
        ar: 'أكثري من الكمون في اللوبيا لتسهيل الهضم وتفادي الملح.',
        darija: 'كثري الكمون فاللوبيا باش ماتنفخش وماديريش الملح.',
      },
      p3: {
        fr: 'P3 : Les nitrates naturels de la betterave améliorent l\'oxygénation des muscles des jambes.',
        ar: 'عناصر الشمندر تنشط الدورة الدموية في الساقين ومفاصل الركبة.',
        darija: 'الباربا كتسرح الدورة الدموية فالرجلين والركابي.',
      },
    },
  },

  {
    dayNumber: 10,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Bol de Semoule d\'Orge (Belboula) au Lait Écrémé & Graines de Cumin',
        ar: 'فطور: حساء بلبولة الشعير بالحليب قليل الدسم وبذور الكراويا أو النافع',
        darija: 'فطور: زلافة حسوة بلبولة الشعير بالحليب خفيف الدسم مع حبة حلاوة والنافع',
      },
      description: {
        fr: 'Bol de soupe de belboula d\'orge cuite à l\'eau puis liée avec du lait écrémé, parfumée aux graines d\'anis ou de fenouil.',
        ar: 'حساء بلبولة الشعير بالحليب الخفيف ونكهة اليانسون أو الشمر.',
        darija: 'زلافة بلبولة الشعير مطيبة بالنافع وحبة حلاوة وحليب خفيف، دافية ومريحة.',
      },
      caloriesApprox: 280,
      proteinApprox: 11,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Dinde aux Courgettes Rondes & Tomates Fraîches',
        ar: 'الغداء: طاجين صدر ديك رومي بالكوسة المستديرة والطماطم',
        darija: 'الغدا: طاجين بيبي بالقرعة الخضرا ومطيشة والزعتر وشوية سكينجبير',
      },
      description: {
        fr: '140g escalope de dinde coupée en morceaux, mijotée avec courgettes rondes, tomates fraîches, persil, ail et gingembre.',
        ar: '140غ صدر ديك رومي مطهو مع كوسة وطماطم وزنجبيل وثوم.',
        darija: 'طويجين صدر بيبي مع القرعة الخضرا ومطيشة وسكينجبير طري، مع ربع خبزة قمح.',
      },
      caloriesApprox: 420,
      proteinApprox: 38,
    },
    snack: {
      title: {
        fr: 'Kskrout : Concombre Tranché au Citron & 5 Noix de Cajou',
        ar: 'لمجة: شرائح خيار بالحامض مع 5 حبات كاجو غير مملح',
        darija: 'كاسكروط: خيارة مقطعة بالحامض مع 5 حبات كاجو بلا ملحة',
      },
      description: {
        fr: 'Tranches de concombre au jus de citron frais avec 5 noix de cajou nature non salées.',
        ar: 'خيار منعش مع القليل من الكاجو الطبيعي.',
        darija: 'خيار مقطع بالحامض، مقرمش ومنعش، مع 5 حبات كاجو بلا ملحة.',
      },
      caloriesApprox: 120,
      proteinApprox: 4,
    },
    dinner: {
      title: {
        fr: '3cha : Omelette aux Épinards Marocains (Salade d\'Épinards & Œufs)',
        ar: 'العشاء: أومليت السبانخ المغربية بالثوم والليمون والكمون',
        darija: 'العشا: سبانخ (ليزيبينار) مصوطيين بالثومة والحامض ومفقوص عليهم 2 بيضات',
      },
      description: {
        fr: 'Épinards frais tombés à la poêle avec ail, persil et jus de citron, 2 œufs battus cuits en omelette sans huile.',
        ar: 'سبانخ طازجة مطهوة مع الثوم والليمون وأومليت بيضتين بدون دهون.',
        darija: 'سبانخ مشحرين بالثومة والحامض والكمون مع 2 بيضات، عشا خفيف عامرة حديد وفيتامينات.',
      },
      caloriesApprox: 270,
      proteinApprox: 19,
    },
    hydrationTip: {
      fr: 'Les épinards apportent potassium et magnésium, buvez de l\'eau pour optimiser leur absorption.',
      ar: 'المغنيسيوم في السبانخ يرخي العضلات ويهدئ التشنجات.',
      darija: 'السبانخ عامرين مغنيزيوم كيرخيو العضلات ويعاونو على النعاس العميق.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Très forte teneur en fer pour oxygéner les muscles et brûler les graisses.',
        ar: 'الحديد والبروتين يعززان أكسدة الدهون وتحسين النفس أثناء الحركة.',
        darija: 'السبانخ والبيض كيعطيو قوة للعضلات باش تحرق الشحم بلا ماتعيا.',
      },
      p2: {
        fr: 'P2 : Zéro sel dans les épinards, l\'acidité du citron frais rehausse le goût à merveille.',
        ar: 'استخدمي عصير الليمون بدلاً من الملح مع السبانخ.',
        darija: 'ديري الحامض بكثرة فالسبانخ وبلا ملحة، كيعطي مذاق واعر.',
      },
      p3: {
        fr: 'P3 : Le magnésium prévient les crampes et la raideur des genoux.',
        ar: 'المغنيسيوم يمنع التشنجات حول مفصل الركبة.',
        darija: 'المغنيزيوم كيحيد التزيار والتشنج لي كيكون حدا الركبة.',
      },
    },
  },

  {
    dayNumber: 11,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Pain Complet Grillé, Huile d\'Argan ou Olive & Thé Vert',
        ar: 'فطور: خبز قمح كامل مع ملعقة زيت أركان أو زيت زيتون وشاي أخضر',
        darija: 'فطور: خبيز القمح مسخن مع معلقة د زيت أركان أو زيت بلدية وكاس أتاي بنعناع بلا سكر',
      },
      description: {
        fr: '50g pain complet, 1 c. à café d\'huile d\'argan alimentaire ou huile d\'olive, 1 œuf dur, thé vert sans sucre.',
        ar: 'خبز قمح، ملعقة زيت أركان صحي، بيضة مسلوقة، شاي أخضر.',
        darija: 'طرف خبز قمح 50غ، معلقة زيت أركان ولا زيت العود، بيضة مسلوقة، أتاي بلا سكر.',
      },
      caloriesApprox: 310,
      proteinApprox: 13,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poisson Mrouzia Épicé Doux (Cabillaud ou Saumon)',
        ar: 'الغداء: طاجين سمك بالبصل والزبيب بدون سكر مضاف',
        darija: 'الغدا: طاجين الحوت بالبصلة المشلظة وشوية الزبيب الصغير والقرفة والكركم',
      },
      description: {
        fr: '140g filet de poisson cuit sur lit d\'oignons fondants avec une pincée de cannelle, curcuma, 1 cuillère à café de petits raisins secs, 50g pain complet.',
        ar: 'سمك مطهو مع بصل مكرمل طبيعياً وقرفة وقليل من الزبيب وكركم.',
        darija: 'طريف حوت طايب مع البصلة والقرفة وشوية الزبيب بلا سكر مضاف، بنين ومعلك صحياً.',
      },
      caloriesApprox: 460,
      proteinApprox: 35,
    },
    snack: {
      title: {
        fr: 'Kskrout : Kaki Marocain ou Pamplemousse Rose',
        ar: 'لمجة: حبة كاكي أو نصف حبة غريب فروت (ليمون هندي)',
        darija: 'كاسكروط: حبة كاكي حلوة طبيعياً ولا نص بمبلوموس',
      },
      description: {
        fr: '1 fruit de saison frais et hydratant.',
        ar: 'فاكهة موسمية غنية بفيتامين ج والألياف.',
        darija: 'ديسير خفيف ومنعش فيه فيتامينات وألياف كتحيد الرغبة فالحلاوة.',
      },
      caloriesApprox: 100,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Salade de Pois Chiches Façon Marocaine (Hommos au Cumin)',
        ar: 'العشاء: سلطة حمص مسلوق بالكمون والطماطم والبقدونس',
        darija: 'العشا: زليفة صغيرة د الحمص مسلوق مع مطيشة وبصلة مقطعة رقيقة وشوية الكمون والحامض',
      },
      description: {
        fr: 'Pois chiches tendres mélangés avec dés de tomates, oignon rouge, persil plat, cumin et jus de citron.',
        ar: 'حمص مسلوق ومتبل بالكمون والليمون والخضار الطازجة.',
        darija: 'حمص مسلوق مع مطيشة وبصلة والربيع والكمون والحامض، مشبع وصحي بزاف.',
      },
      caloriesApprox: 270,
      proteinApprox: 13,
    },
    hydrationTip: {
      fr: 'Boire un grand verre d\'eau 20 minutes avant le dîner pour limiter la taille des portions.',
      ar: 'اشرب كوب ماء قبل العشاء بـ20 دقيقة لتفادي الإفراط في الأكل.',
      darija: 'شرب كاس كبير د الما ثلث ساعة قبل العشا باش تشبع دغيا وما تاكلش بزايد.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : L\'huile d\'argan apporte des antioxydants exceptionnels pour votre système cardiovasculaire.',
        ar: 'زيت أركان غني بمضادات الأكسدة التي تحمي القلب والشرايين.',
        darija: 'زيت أركان كيحمي القلب والشرايين ويصفي الكوليسترول.',
      },
      p2: {
        fr: 'P2 : Ne rajoutez pas de sel sur les pois chiches, le citron et le cumin suffisent largement.',
        ar: 'اكتفي بالليمون والكمون لتتبيل الحمص بدون ملح.',
        darija: 'ديري الحامض والكمون فالحمص، راه بنين وبلا ما تحتاجي ملحة.',
      },
      p3: {
        fr: 'P3 : Le curcuma et l\'argan forment un duo anti-inflammatoire puissant pour les genoux.',
        ar: 'الكركم وزيت أركان يخففان احتكاك الغضاريف.',
        darija: 'الكركم وأركان دوا معتبر لتزييت غضروف الركبة.',
      },
    },
  },

  {
    dayNumber: 12,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Toast Avocat & Blanc de Poulet Fumé Maison',
        ar: 'فطور: توست قمح بأفوكادو وشرائح ديك رومي صحية',
        darija: 'فطور: ربع خبزة قمح مع ربع أفوكا وطريفات بيبي طيبين بالثومة والابزار',
      },
      description: {
        fr: '50g pain complet, 1/4 avocat écrasé, 50g filet de dinde grillé froid, thé à la menthe sans sucre.',
        ar: 'خبز قمح، ربع أفوكادو، 50غ صدر رومي مطهو، شاي بالنعناع.',
        darija: 'خبز قمح 50غ، ربع أفوكا ممعوسة، صدر بيبي مشوي، أتاي بنعناع بلا سكر.',
      },
      caloriesApprox: 320,
      proteinApprox: 18,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Bœuf Maigre aux Pruneaux Allégé (Sans Sucre Ajouté)',
        ar: 'الغداء: طاجين لحم بالبرقوق الصحي بدون سكر مضاف',
        darija: 'الغدا: طويجين اللحم بالبرقوق طايب بالقرفة والزعفران والبرقوق مغسول ومسلوق بلا سكر',
      },
      description: {
        fr: '130g bœuf maigre mijoté avec oignons, cannelle, gingembre, curcuma, garni de 3 pruneaux cuits à l\'eau pure sans sirop de sucre, 40g pain complet.',
        ar: '130غ لحم بقر مع بصل وقرفة وزعفران مع 3 حبات برقوق مطهو بالماء بدون سكر مكرر.',
        darija: 'طويجين اللحم بالبرقوق، البرقوق طايب غير فالما والقرفة بلا سنيدة وبلا سكر، مع ربع خبزة قمح.',
      },
      caloriesApprox: 480,
      proteinApprox: 36,
    },
    snack: {
      title: {
        fr: 'Kskrout : Yaourt Nature & 1 Cuillère de Son d\'Avoine',
        ar: 'لمجة: زبادي طبيعي ونخالة الشوفان',
        darija: 'كاسكروط: دانون مسوس مع معلقة د نخالة الشوفان (كتنقص الكوليسترول)',
      },
      description: {
        fr: '1 yaourt nature sans sucre + 1 c. à soupe de son d\'avoine (bêta-glucanes qui piègent le cholestérol).',
        ar: 'زبادي طبيعي مع نخالة الشوفان التي تسحب الكوليسترول الزائد من الجسم.',
        darija: 'ياغورت طبيعي مع معلقة نخالة الشوفان، كتلصق فالكوليسترول وتخرجو برة.',
      },
      caloriesApprox: 130,
      proteinApprox: 7,
    },
    dinner: {
      title: {
        fr: '3cha : Salade Chaude d\'Aubergines Vapeur & Filet de Loup',
        ar: 'العشاء: باذنجان مبخر بالشرمولة الخفيفة مع سمك أبيض',
        darija: 'العشا: دنجال مبخر ومشرمل مع طريف حوت أبيض فالفران',
      },
      description: {
        fr: 'Aubergines cuites à la vapeur assaisonnées d\'ail, coriandre et citron, avec un pavé de poisson blanc au four.',
        ar: 'باذنجان مبخر ومتبل بالثوم والليمون مع فيليه سمك بالفرن.',
        darija: 'دنجال مبخر ومطقطق بالثومة والحامض والقزبور مع طريف حوت مشوي فالفران.',
      },
      caloriesApprox: 260,
      proteinApprox: 26,
    },
    hydrationTip: {
      fr: 'Buvez de l\'eau tiède avec un filet de jus de citron vert le soir.',
      ar: 'اشرب ماءً دافئاً مع قطرات ليمون حامض مساءً.',
      darija: 'شرب كاس د الما دافي فيه شوية الحامض بالليل كيريح الجهاز الهضمي.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Le tajine de pruneaux version santé comble les envies de saveurs marocaines sans excès de sucre.',
        ar: 'البرقوق بدون سكر يلبي رغبة الحلاوة بشكل صحي.',
        darija: 'طاجين البرقوق بلا سكر كيعطيك حلاوة طبيعية وكيحيد التوحام د الماكلة.',
      },
      p2: {
        fr: 'P2 : Le son d\'avoine est scientifiquement prouvé pour faire chuter le mauvais cholestérol LDL.',
        ar: 'نخالة الشوفان ممتازة لتخفيض الكوليسترول الضار LDL.',
        darija: 'نخالة الشوفان كتهبط الكوليسترول الضار بشكل ملحوظ.',
      },
      p3: {
        fr: 'P3 : Les pruneaux contiennent du bore, un oligo-élément qui renforce les os et les genoux.',
        ar: 'البرقوق غني بالبورون الذي يدعم قوة العظام والمفاصل.',
        darija: 'البرقوق فيه معادن كتقوي عظام الساقين والركبة.',
      },
    },
  },

  {
    dayNumber: 13,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Hssoua de Maïs (Baddaz) ou Orge aux Herbes',
        ar: 'فطور: حسوة ذرة أو شعير بالأعشاب والزعتر',
        darija: 'فطور: حسوة خفيفة بالبلبولة مع الزعتر وفليو وشوية زيت بلدية',
      },
      description: {
        fr: 'Bol de soupe traditionnelle d\'orge ou maïs mijotée avec origan, menthe pouliot (fliyou) et filet d\'huile d\'olive.',
        ar: 'حساء شعير دافئ بالأعشاب الطبية وزيت الزيتون.',
        darija: 'زليفة حسوة د الشعير مطيبة بالزعتر وفليو وقطيرة زيت بلدية، كدفّي وتسرح القصبة الهوائية.',
      },
      caloriesApprox: 290,
      proteinApprox: 9,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Brochettes de Poitrine de Poulet Grillé & Salade Marocaine Façon Fès',
        ar: 'الغداء: قطبان دجاج مشوي مع سلطة مغربية فاسية طازجة',
        darija: 'الغدا: قطبان صدر دجاج مشويين فالمجمر مع شلاظة بمطيشة والخيار والفلفلة مقطعين رقاق',
      },
      description: {
        fr: '140g de blanc de poulet en brochettes marinées aux épices douces, grande salade de tomates, concombres, poivrons rouges et menthe fraîche, 50g pain complet.',
        ar: '140غ قطبان دجاج مشوي مع سلطة خضار طازجة وربع خبز قمح.',
        darija: '140غ قطبان صدر دجاج مشويين مع شلاظة مغربية عامرة منعشة بالحامض وربع خبزة قمح.',
      },
      caloriesApprox: 450,
      proteinApprox: 39,
    },
    snack: {
      title: {
        fr: 'Kskrout : Deux Mandarines & Infusion de Louiza',
        ar: 'لمجة: حبتان من اليوسفي (ماندارين) مع منقوع اللويزة',
        darija: 'كاسكروط: 2 ماندالينات حلوين وكاس د اللويزة سخونة بلا سكر',
      },
      description: {
        fr: '2 mandarines de Berkane ou du Souss, infusion de verveine apaisante.',
        ar: 'حبتان يوسفي مع شاي لويزة مهدئ.',
        darija: '2 حبات ماندالين حلوين مع كاس اللويزة مهدئ للأعصاب.',
      },
      caloriesApprox: 90,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Salade de Haricots Blancs Tièdes (Loubia Salade) & Thon',
        ar: 'العشاء: سلطة فاصوليا بيضاء دافئة بالتونة والليمون والبقدونس',
        darija: 'العشا: شلاظة د اللوبيا البيضا دافية مع طون مصفى وبصلة ومعدنوس وحامض',
      },
      description: {
        fr: 'Haricots blancs égouttés, 80g de thon au naturel, oignon rouge haché fin, persil plat, huile d\'olive légère et citron.',
        ar: 'فاصوليا بيضاء مع تونة بالماء وبصل وبقدونس وليمون.',
        darija: 'لوبيا بيضا مسلوقة مع طون ناشف وبصيلة والربيع والحامض، خفيفة ومشبعة.',
      },
      caloriesApprox: 310,
      proteinApprox: 24,
    },
    hydrationTip: {
      fr: 'Une bonne hydratation le samedi prépare le corps aux activités du weekend.',
      ar: 'حافظ على شرب الماء بانتظام قبل عطلة نهاية الأسبوع.',
      darija: 'شرب الما مزيان باش تحس بالنشاط فالويكاند.',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Les brochettes de poulet sont riches en leucine, acide aminé qui protège votre masse musculaire.',
        ar: 'بروتين الدجاج يحمي العضلات أثناء حرق الدهون.',
        darija: 'البروتين د الدجاج كيحمي العضلة ويخليك تحرق غير الشحم والكرش.',
      },
      p2: {
        fr: 'P2 : Ne pas saler la salade de thon, le citron et le persil apportent tout l\'arôme.',
        ar: 'اعتمدي على الليمون والبقدونس لنكهة لذيذة دون الحاجة للملح.',
        darija: 'الحامض والمعدنوس كافيين يعطيو بنة بلا غرام د الملحة.',
      },
      p3: {
        fr: 'P3 : Les protéines et le zinc soutiennent la reconstruction des tissus du genou.',
        ar: 'الزنك والبروتين يدعمان تجدد أربطة الركبة.',
        darija: 'البروتين والزنك كيعاونو أربطة الركبة تعمر وتصحاح.',
      },
    },
  },

  {
    dayNumber: 14,
    week: 2,
    breakfast: {
      title: {
        fr: 'Ftour : Œufs Pochés, Tomates Cerises & Thé à l\'Absinthe (Chiba) sans Sucre',
        ar: 'فطور: بيضتان مسلوقتان مع طماطم كرزية وشاي بالشيبة بدون سكر',
        darija: 'فطور: 2 بيضات بلديين مسلوقين مع طماطم كرزية وخبيز القمح وكاس أتاي بالشيبة بلا سكر',
      },
      description: {
        fr: '2 œufs mollets ou durs, tomates cerises au sel de céleri ou sans sel, 40g pain complet, thé marocain à la chiba (en hiver) ou menthe.',
        ar: 'بيضتان، طماطم، خبز قمح كامل وشاي مغربي بالشيبة أو النعناع بدون سكر.',
        darija: '2 بيضات مسلوقين، مطيشة صغيرة، ربع خبز قمح، وكاس أتاي بالشيبة بلا سكر.',
      },
      caloriesApprox: 320,
      proteinApprox: 16,
    },
    lunch: {
      title: {
        fr: 'Ghdha : Tajine de Poulet Fermier au Citron Confit & Olives Vertes Dessalées',
        ar: 'الغداء: طاجين دجاج بلدي بالليمون المخلل والزيتون منزوع الملح',
        darija: 'الغدا: طويجين الدجاج البلدي بالحامض مصير والزيتون مغسول مزيان من الملحة والزعفران حر',
      },
      description: {
        fr: '140g poulet fermier sans peau mijoté avec oignons caramélisés aux épices marocaines, quartier de citron confit maison, quelques olives dessalées dans l\'eau bouillante, 50g pain complet.',
        ar: '140غ دجاج بلدي مع بصل وزعفران حر وقليل من الزيتون منزوع الملح وليمون مخلل.',
        darija: 'طويجين الدجاج البلدي محمر وناشف، مع البصلة المدغمرة والزعفران شعرة وزيتونات مسلوقين باش تحيد ملحتهم، مع ربع خبزة قمح.',
      },
      caloriesApprox: 480,
      proteinApprox: 38,
    },
    snack: {
      title: {
        fr: 'Kskrout : Pêche ou Pomme & Tisane de Thym Frais',
        ar: 'لمجة: تفاحة طازجة مع شاي الزعتر الدافئ',
        darija: 'كاسكروط: تفاحة بلدية مع كاس د الزعتر دافي بلا سكر',
      },
      description: {
        fr: '1 fruit frais croquant avec une infusion digestive de zaatar sauvage.',
        ar: 'تفاحة طازجة مع منقوع الزعتر البري.',
        darija: 'تفاحة مع كاس د الزعتر كينقي الكرش من الغازات.',
      },
      caloriesApprox: 90,
      proteinApprox: 1,
    },
    dinner: {
      title: {
        fr: '3cha : Soupe Détox de Courgettes & Poireaux à la Coriandre',
        ar: 'العشاء: حساء تنقية الجسم من الكوسة والكراث والكزبرة مع جبن طري',
        darija: 'العشا: صوبة د القرعة الخضرا والبروار والكرافص والقزبور مع طريف جبن خفيف',
      },
      description: {
        fr: 'Soupe onctueuse légère de courgettes, poireaux et céleri mixée avec un filet d\'huile d\'olive, accompagnée d\'une portion de fromage frais faible en matières grasses.',
        ar: 'شوربة كوسة وكراث خفيفة مع قطعة جبن طازج قليل الدسم.',
        darija: 'صوبة د القرعة الخضرا والبروار والكرافص، خفيفة كتمسح الكرش ومريحة للمصران مع طريف جبن بلدي.',
      },
      caloriesApprox: 220,
      proteinApprox: 10,
    },
    hydrationTip: {
      fr: 'Félicitations pour ces 2 semaines ! Ce programme se répète en boucle avec succès.',
      ar: 'مبروك إتمام أسبوعي البرنامج بنجاح! يمكنك الآن إعادة الدورة بنفس الثبات.',
      darija: 'مبروك عليك كملتي السيمانتين بنجاح! هاد البرنامج دابا كيتعاود دورياً وغاتشوف نتيجة معتبرة فالميزان!',
    },
    profileSpecificAdvice: {
      p1: {
        fr: 'P1 : Vous avez complété 14 jours de discipline nutritionnelle sans faim ni privation excessive.',
        ar: 'لقد حققت التوازن الغذائي دون حرمان وستلاحظ انخفاضاً واضحاً في قياس الخصر.',
        darija: 'كملتي 14 يوم بنجاح بلا جوع وبلا حرمان، ودابا دورة جديدة لنقصان الكيلوات!',
      },
      p2: {
        fr: 'P2 : Grâce aux olives bien dessalées et aux poissons, votre tension et cholestérol restent parfaitement sous contrôle.',
        ar: 'الزيتون المغسول من الملح والأسماك حافظا على توازن ضغطك وكوليسترولك.',
        darija: 'الزيتون مسلوق من الملحة والحوت عاونو بزاف الطنسيون والكوليسترول يبقاو مقادين.',
      },
      p3: {
        fr: 'P3 : Les antioxydants consommés ont diminué la sensibilité de vos genoux.',
        ar: 'المواد المضادة للأكسدة خففت من حساسية مفصل الركبة.',
        darija: 'الماكلة الصحية خففت الحريق والضغط على الركابي بزاف.',
      },
    },
  },
];
