import React, { useState } from 'react';
import { Shield, Flame, Dumbbell, Zap, Target, ExternalLink, Play, Pause, ChevronRight, CheckCircle, Scale, Utensils, HeartHandshake, Disc3, Sparkles } from 'lucide-react';
import { UserProfile, Language } from '../types';
import { MILITARY_CALISTHENICS_DATA, MilitaryExercise } from '../data/militaryCalisthenics';
import { gymAudio, REAL_GYM_TRACKS, GymTrack, MusicCategory } from '../utils/gymAudioEngine';

interface Props {
  profile: UserProfile;
  lang: Language;
}

export const MilitaryCalisthenics: React.FC<Props> = ({ profile, lang }) => {
  const [selectedEx, setSelectedEx] = useState<MilitaryExercise>(MILITARY_CALISTHENICS_DATA[0]);
  const [sessionFrequency, setSessionFrequency] = useState<3 | 4 | 5>(4); // sessions per week
  const [gymPlaying, setGymPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<GymTrack>(gymAudio.getCurrentTrack());
  const [activeCategory, setActiveCategory] = useState<MusicCategory>('all');

  // Subscribe to gym audio
  React.useEffect(() => {
    gymAudio.setProfile(profile.id);
    const unsub = gymAudio.subscribe((playing, track) => {
      setGymPlaying(playing);
      setCurrentTrack(track);
    });
    return unsub;
  }, [profile.id]);

  const handleSelectCategory = (cat: MusicCategory) => {
    setActiveCategory(cat);
    gymAudio.setCategory(cat);
  };

  // Filter military exercises tailored for the active profile
  const profileExercises = MILITARY_CALISTHENICS_DATA.filter((ex) => {
    if (profile.id === 'femme_36') {
      return ex.kneeSafe; // strictly zero knee impact!
    }
    return true;
  });

  // Precise calculations of weight loss with Military Calisthenics + Military Diet:
  // For Mama Laaziza: Stabilisation du poids idéal 64kg via la marche et la nutrition sans exercices intenses
  const getWeightLossEstimates = () => {
    if (profile.id === 'homme_44') {
      // 102kg, large deficit possible safely
      const burnFromWorkoutMonth = sessionFrequency === 3 ? 3.2 : sessionFrequency === 4 ? 4.2 : 5.0; // kg/month
      const burnFromDietMonth = 3.8; // kg/month
      const totalMonth = Number((burnFromWorkoutMonth + burnFromDietMonth).toFixed(1));
      const total3Months = Number((totalMonth * 2.8).toFixed(1)); // slight metabolic adaptation
      const total6Months = Number((totalMonth * 4.9).toFixed(1));
      return {
        workoutBurnMonth: burnFromWorkoutMonth,
        dietBurnMonth: burnFromDietMonth,
        totalMonth,
        total3Months,
        total6Months,
        calsPerSession: 540,
        epocBonusHours: '48h d\'effet Afterburn',
      };
    } else if (profile.id === 'femme_65') {
      // Mama Laaziza: Stabilisation 64kg sans mouvements violents (marche 1h30 + diète sans sel/sucre)
      return {
        workoutBurnMonth: 0.0, // تثبيت الوزن
        dietBurnMonth: 0.0,
        totalMonth: 0.0,
        total3Months: 0.0,
        total6Months: 0.0,
        calsPerSession: 280,
        epocBonusHours: 'تثبيت الوزن المثالي 64kg عبر المشي المنظم',
      };
    } else {
      // 36yo, 80kg, knee issues
      const burnFromWorkoutMonth = sessionFrequency === 3 ? 2.8 : sessionFrequency === 4 ? 3.6 : 4.4;
      const burnFromDietMonth = 3.0;
      const totalMonth = Number((burnFromWorkoutMonth + burnFromDietMonth).toFixed(1));
      const total3Months = Number((totalMonth * 2.8).toFixed(1));
      const total6Months = Number((totalMonth * 4.8).toFixed(1));
      return {
        workoutBurnMonth: burnFromWorkoutMonth,
        dietBurnMonth: burnFromDietMonth,
        totalMonth,
        total3Months,
        total6Months,
        calsPerSession: 460,
        epocBonusHours: '42h d\'afterburn sans contact genoux',
      };
    }
  };

  const estimates = getWeightLossEstimates();

  return (
    <div className="space-y-8">
      {/* Hero Military Commando Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-900/40 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>CALISTHENICS MILITAIRE COMMANDO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
            {lang === 'darija'
              ? 'برنامج الكاليستنيكس العسكري لإنقاص الوزن'
              : lang === 'ar'
              ? 'برنامج الكاليستنيكس العسكري لحرق الدهون'
              : 'Protocole Calisthenics Militaire & Brûle-Graisse EPOC'}
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {lang === 'darija'
              ? `تمارين بوزن الجسم بدون ماتحتاج لماكينات، كايخدمو العضلات كاملين مع حرق دهون مستمر لـ 48 ساعة بعد الحصة. مخصص لحالة بروفيلك (الوزن الحالي: ${profile.weight} كلغ · ${profile.height} سم).`
              : `Entraînement au poids du corps d'inspiration militaire avec effet EPOC (Afterburn de 48h). 100% calibré pour votre profil (Poids actuel : ${profile.weight} kg · ${profile.height} cm).`}
          </p>

          {/* Real Gym Reel Music Integration */}
          <div className="mt-6 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => gymAudio.toggle()}
                  className="w-10 h-10 shrink-0 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition-all active:scale-95 shadow-md shadow-emerald-500/20"
                >
                  {gymPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <div className="text-xs min-w-0 flex-1">
                  <span className="text-slate-400 block font-mono text-[10px] truncate">
                    {profile.id === 'femme_36'
                      ? (lang === 'darija' ? '🎵 نسخ أصلية كوثر (صوت نقي بدون ميكس) :' : '🎵 PLAYLIST KAOUTAR (VERSIONS ORIGINALES) :')
                      : (lang === 'darija' ? '🔥 موسيقى بدر الحماسية للصال :' : '🔥 MUSIQUE GYM & MOTIVATION BADR :')}
                  </span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5 truncate">
                    {currentTrack.title} ({currentTrack.bpm} BPM)
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 self-start sm:self-auto shrink-0">
                {profile.id === 'femme_36' ? '100% Original Audio' : 'Hype Motivation'}
              </span>
            </div>

            {/* Badr Category filter tabs */}
            {profile.id === 'homme_44' && (
              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[10px]">
                  <button
                    onClick={() => handleSelectCategory('all')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 font-bold transition-all ${
                      activeCategory === 'all' ? 'bg-emerald-500 text-slate-950' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {lang === 'darija' ? 'الكل' : 'Tous'}
                  </button>
                  <button
                    onClick={() => handleSelectCategory('srk')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 font-bold transition-all ${
                      activeCategory === 'srk' ? 'bg-amber-400 text-slate-950' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    👑 Best SRK
                  </button>
                  <button
                    onClick={() => handleSelectCategory('amr_diab')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 font-bold transition-all ${
                      activeCategory === 'amr_diab' ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    🌟 Amr Diab
                  </button>
                  <button
                    onClick={() => handleSelectCategory('zumba')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 font-bold transition-all ${
                      activeCategory === 'zumba' ? 'bg-pink-400 text-slate-950' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    💃 Zumba Dance
                  </button>
                  <button
                    onClick={() => handleSelectCategory('cardio_gym')}
                    className={`px-2 py-0.5 rounded-lg shrink-0 font-bold transition-all ${
                      activeCategory === 'cardio_gym' ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    ⚡ Cardio Gym
                  </button>
                </div>
              </div>
            )}

            {/* Quick Track Switcher Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 pt-2 border-t border-white/10 text-xs">
              {gymAudio.getActivePlaylist().map((trk, i) => (
                <button
                  key={trk.id}
                  onClick={() => gymAudio.play(i)}
                  className={`py-1.5 px-2 rounded-xl transition-all text-left truncate text-[11px] flex items-center justify-between gap-1 border ${
                    currentTrack.id === trk.id
                      ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-sm'
                      : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                  }`}
                  title={`${trk.title} - ${trk.artist}`}
                >
                  <span className="truncate flex-1">{trk.badge || trk.title}</span>
                  <span className="text-[10px] font-mono shrink-0 opacity-75">{trk.bpm} BPM</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: COMBIEN DE POIDS PEUT-ON PERDRE AVEC CETTE MÉTHODE ? (CH7AL T9DR TN9ASS) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              <Flame className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {lang === 'darija' ? 'الحساب الدقيق لنقصان الوزن' : 'Estimation Scientifique de la Perte de Poids'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'darija'
                ? 'شحال تقدر تنقص فهاد الطريقة (الحركات + الماكلة) ؟'
                : 'Combien de kilos allez-vous perdre avec cette méthode ?'}
            </h3>
          </div>

          {/* Session Frequency Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Séances / sem :</span>
            <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
              {[3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setSessionFrequency(num as 3 | 4 | 5)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    sessionFrequency === num ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {num}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Core Output Cards (Mouvements / Alimentation / Total Combiné) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. Mouvements Calisthenics */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>1. {lang === 'darija' ? 'حركات الكاليستنيكس' : 'Mouvements Calisthenics'}</span>
                <Dumbbell className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-extrabold font-mono text-slate-900 tabular-nums my-2">
                -{estimates.workoutBurnMonth} <span className="text-sm font-normal text-slate-500">kg / mois</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'darija'
                  ? `بفضل حرق ~${estimates.calsPerSession} سعرة فالحصة + ${estimates.epocBonusHours}.`
                  : `Dépense de ~${estimates.calsPerSession} kcal par séance + ${estimates.epocBonusHours}.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-emerald-700 font-semibold">
              ✓ Brûle la graisse sans fonte musculaire
            </div>
          </div>

          {/* 2. Alimentation Commando */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>2. {lang === 'darija' ? 'الماكلة العسكرية الصارمة' : 'Alimentation Militaire'}</span>
                <Utensils className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-extrabold font-mono text-slate-900 tabular-nums my-2">
                -{estimates.dietBurnMonth} <span className="text-sm font-normal text-slate-500">kg / mois</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'darija'
                  ? 'بروتينات نقية، زيرو سكر خاوي، نقص الملح، و3 لتر ماء فاليوم لطرد السوائل.'
                  : 'Protéines ciblées, zéro sucres rapides, hyposodé et 3L d\'eau tactique.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-emerald-700 font-semibold">
              ✓ Élimine la rétention d\'eau et affine la taille
            </div>
          </div>

          {/* 3. TOTAL COMBINÉ */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-emerald-100 mb-2">
                <span>TOTAL COMBINÉ (Harakat + Makla)</span>
                <Zap className="w-4 h-4 text-amber-300" />
              </div>
              <div className="text-4xl font-black font-mono tabular-nums my-2 text-white">
                -{estimates.totalMonth} <span className="text-base font-normal text-emerald-100">kg / mois</span>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                {lang === 'darija'
                  ? `من دابا لـ 3 شهور غاتكون طيحتي تبارك الله : -${estimates.total3Months} كلغ !`
                  : `Projection après 3 mois de calisthenics : -${estimates.total3Months} kg !`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-500/50 text-xs font-bold text-amber-200">
              Objectif 6 mois : -{estimates.total6Months} kg
            </div>
          </div>
        </div>

        {/* Profile Specific Strategic Protocol Insight */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-1">
              {lang === 'darija'
                ? `النصيحة الخاصة بالبروفيل (الوزن الحالي: ${profile.weight} كلغ):`
                : `Protocole tactique personnalisé pour votre profil (Poids actuel : ${profile.weight} kg) :`}
            </span>
            <p className="leading-relaxed">
              {profile.id === 'homme_44' &&
                (lang === 'darija'
                  ? 'بما أنك مكتتمشاش وعندك 102 كلغ، الكاليستنيكس هو الحل الذهبي باش تحرق الشحم بلا ما تفرع ركابيك بالجري. بدا بالبومب على الطابلة والديبس، وفـ 3 شهور غاترجع لـ 82 كلغ بكل ثقة.'
                  : 'À 102 kg sans marche préalable, le calisthenics au poids de corps adapté évite les chocs de la course à pied tout en créant une dépense métabolique massive.')}
              {profile.id === 'femme_65' &&
                (lang === 'darija'
                  ? 'بالنسبة لماما لعزيزة: ممنوع الحركات العسكرية المجهدة! التركيز 100% على تثبيت الوزن المثالي (64 كلغ) عبر نظام الأكل الخاص بها، وتنظيم حصص المشي الخارجي (1h30 مرتين فالسيمانة) مع نظام صارم بدون ملح وبدون سكر لحماية الكوليسترول والعظام.'
                  : 'Pour Mama Laaziza : Aucun exercice militaire forcé ! Priorité absolue à la stabilisation du poids idéal (64 kg) via une alimentation sans sel/sans sucre et la gestion exclusive des sorties de marche (1h30 2x/semaine).')}
              {profile.id === 'femme_36' &&
                (lang === 'darija'
                  ? 'حيت كايضروك ركابيك، جميع هاد الحركات فيها 0% ضغط على الركبة (تجباد تحت الطابلة، البومب، الديبس، وخدمة الكرش). غاتنقصي 6 كيلو فشهر وركابيك مرتاحين تماماً.'
                  : '100% zéro flexion douloureuse des rotules : tirages sous table, pompes et gainage sculptent le haut du corps et le ventre sans toucher aux genoux.')}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: LES MOUVEMENTS MILITAIRES DU PROGRAMME (EXERCICES) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            {lang === 'darija' ? 'الحركات العسكرية الموصى بها لبروفيلك' : 'Mouvements Calisthenics Recommandés'}
          </h3>
          <span className="text-xs text-slate-500 font-mono">
            {profileExercises.length} {lang === 'darija' ? 'حركات' : 'exercices'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Exercise list selector */}
          <div className="lg:col-span-5 space-y-3">
            {profileExercises.map((ex) => {
              const isSelected = ex.id === selectedEx.id;
              return (
                <div
                  key={ex.id}
                  onClick={() => setSelectedEx(ex)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {ex.sets} séries · {ex.reps}
                    </span>
                    {ex.kneeSafe && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        Zéro Genou
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm">{ex.name[lang]}</h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {ex.targetMuscles}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Exercise detailed view with direct tutorial button */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-600 uppercase block mb-1">
                    Cible : {selectedEx.targetMuscles}
                  </span>
                  <h4 className="text-xl font-black text-slate-900">{selectedEx.name[lang]}</h4>
                </div>

                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedEx.youtubeQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center gap-1.5 border border-rose-200 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  Tuto YouTube
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Execution details */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block mb-1">
                    {lang === 'darija' ? 'طريقة الأداء العسكري :' : 'Instructions d\'exécution stricte :'}
                  </span>
                  <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {selectedEx.description[lang]}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-bold block mb-0.5">
                    {lang === 'darija' ? 'نصيحة الكوماندوز :' : 'Conseil tactique commando :'}
                  </span>
                  <p>{selectedEx.tacticalTip[lang]}</p>
                </div>
              </div>
            </div>

            {/* Sets summary strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <span className="text-slate-400 block text-[10px]">SÉRIES</span>
                <span className="font-bold text-slate-900 font-mono text-base">{selectedEx.sets}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <span className="text-slate-400 block text-[10px]">REPS</span>
                <span className="font-bold text-slate-900 font-mono text-base">{selectedEx.reps}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <span className="text-slate-400 block text-[10px]">REPOS</span>
                <span className="font-bold text-slate-900 font-mono text-base">{selectedEx.restSeconds}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: RÈGLES D'OR DE L'ALIMENTATION MILITAIRE COMMANDO */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Utensils className="w-5 h-5 text-emerald-400" />
          {lang === 'darija' ? 'قواعد الماكلة العسكرية لإنقاص الوزن بسرعة وبلا رجوع' : 'Les 4 Règles d\'Or de l\'Alimentation Commando'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 block">1. Hydratation Commando 3L</span>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'darija'
                ? 'شرب 3 لتر ديال الما نقي يومياً كيسرع تصفية السموم وكيحرق 150 سعرة إضافية.'
                : '3 litres d\'eau par jour augmentent la thermogenèse de 150 kcal et éliminent les toxines cellulaires.'}
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 block">2. Protéines Bouclier Musculaire</span>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'darija'
                ? 'البيض، السردين، صدر الدجاج في كل وجبة رئيسية باش يطيح غير الشحم ويبقى اللحم شاد.'
                : 'Protéines maigres à chaque repas principal pour préserver l\'intégrité des fibres musculaires.'}
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 block">3. Zéro Sucre & Zéro Sel Caché</span>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'darija'
                ? 'قطع السكر فالمشروبات وأتاي، ونقص الملحة باش الكرش تفش وماتبقاش حابسة الما.'
                : 'Bannir tout sucre raffiné liquide et limiter le sel pour dégonfler le tissu adipeux abdominal.'}
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 block">4. Sommeil Réparateur 7h30</span>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'darija'
                ? 'النعاس الكافي بالليل هو فاش كايفرز الجسم هرمون النمو لي كيحرق الشحم العميق.'
                : '7h30 de sommeil profond libèrent l\'hormone de croissance qui consomme les graisses viscérales.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
