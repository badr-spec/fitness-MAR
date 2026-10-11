import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, ExternalLink, ShieldCheck, HeartPulse, ChevronRight, ChevronLeft, Disc3, SkipForward, SkipBack, Music2, Sparkles, Flame } from 'lucide-react';
import { Exercise, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import { workoutAudio } from '../utils/audioPlayer';
import { gymAudio, REAL_GYM_TRACKS, GymTrack, MusicCategory } from '../utils/gymAudioEngine';
import { ExerciseAnimation } from './ExerciseAnimation';

interface Props {
  exercises: Exercise[];
  lang: Language;
  selectedDuration: number;
  activeProfileId?: string;
}

export const WorkoutPlayer: React.FC<Props> = ({ exercises, lang, selectedDuration, activeProfileId = 'homme_44' }) => {
  const t = TRANSLATIONS[lang];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingWorkout, setIsPlayingWorkout] = useState(false);
  const [timeLeft, setTimeLeft] = useState(exercises[0]?.durationSeconds || 45);
  const [isResting, setIsResting] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [gymPlaying, setGymPlaying] = useState(false);
  const [currentGymTrack, setCurrentGymTrack] = useState<GymTrack>(gymAudio.getCurrentTrack());
  const [selectedCategory, setSelectedCategory] = useState<MusicCategory>('all');
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const currentExercise = exercises[currentIndex] || exercises[0];

  // Sync active profile with gymAudio engine
  useEffect(() => {
    gymAudio.setProfile(activeProfileId);
    setSelectedCategory('all');
    setCurrentGymTrack(gymAudio.getCurrentTrack());
  }, [activeProfileId]);

  // Subscribe to real gym audio status
  useEffect(() => {
    const unsub = gymAudio.subscribe((playing, track) => {
      setGymPlaying(playing);
      setCurrentGymTrack(track);
    });
    return unsub;
  }, []);

  const handleSelectCategory = (cat: MusicCategory) => {
    setSelectedCategory(cat);
    gymAudio.setCategory(cat);
  };

  // Update timer when exercise changes
  useEffect(() => {
    if (currentExercise) {
      setTimeLeft(currentExercise.durationSeconds);
      setIsResting(false);
      setCurrentSet(1);
    }
  }, [currentIndex, currentExercise]);

  // Workout Interval Timer
  useEffect(() => {
    if (!isPlayingWorkout) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 4 && prev > 1) {
          workoutAudio.playCountdownBeep(false);
        } else if (prev === 1) {
          workoutAudio.playCountdownBeep(true);
        }

        if (prev <= 1) {
          if (!isResting) {
            // Finished work set -> go to rest
            if (currentSet < currentExercise.sets) {
              setIsResting(true);
              return currentExercise.restSeconds;
            } else {
              // Finished all sets for this exercise -> go to next exercise
              if (currentIndex < exercises.length - 1) {
                setCurrentIndex((idx) => idx + 1);
                setIsResting(false);
                return exercises[currentIndex + 1].durationSeconds;
              } else {
                // Workout completed!
                setIsPlayingWorkout(false);
                gymAudio.pause();
                return 0;
              }
            }
          } else {
            // Finished rest -> next set
            setIsResting(false);
            setCurrentSet((s) => s + 1);
            return currentExercise.durationSeconds;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlayingWorkout, isResting, currentSet, currentExercise, currentIndex, exercises]);

  const handleToggleWorkout = () => {
    const nextState = !isPlayingWorkout;
    setIsPlayingWorkout(nextState);
    if (nextState) {
      gymAudio.play();
    } else {
      gymAudio.pause();
    }
  };

  const handleReset = () => {
    setIsPlayingWorkout(false);
    gymAudio.pause();
    setTimeLeft(currentExercise.durationSeconds);
    setIsResting(false);
    setCurrentSet(1);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    gymAudio.setVolume(newVol);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      gymAudio.setVolume(volume || 0.7);
    } else {
      setIsMuted(true);
      gymAudio.setVolume(0);
    }
  };

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(currentExercise.youtubeQuery)}`;

  return (
    <div className="space-y-6">
      {/* Exercise Header & Metadata */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>{t.sets}: {currentSet} / {currentExercise.sets}</span>
              <span>·</span>
              <span>{currentExercise.repsText[lang]}</span>
              <span>·</span>
              <span className="capitalize">{currentExercise.category}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {currentExercise.title[lang]}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {currentExercise.kneeSafe && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {t.knee_safe_badge}
              </span>
            )}
            {currentExercise.seniorFriendly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                <HeartPulse className="w-3.5 h-3.5 text-sky-600" />
                {t.senior_safe_badge}
              </span>
            )}
          </div>
        </div>

        {/* Visual Animation & YouTube Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-7">
            <ExerciseAnimation exercise={currentExercise} isPlaying={isPlayingWorkout || gymPlaying} />

            {/* Direct YouTube tutorial button */}
            <div className="mt-3 flex items-center justify-between">
              <a
                href={youtubeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-rose-50"
              >
                <span className="w-2.5 h-2.5 bg-rose-600 rounded-sm inline-block" />
                {t.open_youtube}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-slate-400">
                {currentIndex + 1} / {exercises.length}
              </span>
            </div>

            {/* MUSIC PLAYER REELS AU-DESSOUS DU GIF */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-3.5">
              {/* Row 1: Player Status & Primary Play Control */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() => gymAudio.toggle()}
                    className="w-11 h-11 shrink-0 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-emerald-500/25"
                    title={gymPlaying ? 'Pause Audio' : 'Play Music'}
                  >
                    {gymPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-mono font-bold flex items-center gap-1.5 truncate">
                        <Disc3 className={`w-3.5 h-3.5 shrink-0 text-emerald-400 ${gymPlaying ? 'animate-spin' : ''}`} />
                        <span>
                          {activeProfileId === 'femme_36'
                            ? (lang === 'darija' ? 'نسخ أصلية كوثر (صوت نقي)' : 'Versions Originales Kaoutar')
                            : (lang === 'darija' ? 'صوتيات بدر الحماسية' : 'Playlist Hype & Cardio Badr')}
                        </span>
                      </p>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono shrink-0">
                        {currentGymTrack.bpm} BPM
                      </span>
                    </div>
                    <p className="text-sm font-black text-white truncate mt-0.5" title={currentGymTrack.title}>
                      {gymPlaying && (
                        <span className="inline-flex items-end gap-0.5 h-3 mr-1.5">
                          <span className="w-1 bg-emerald-400 animate-pulse h-full" />
                          <span className="w-1 bg-emerald-400 animate-pulse h-2/3" />
                          <span className="w-1 bg-emerald-400 animate-pulse h-4/5" />
                        </span>
                      )}
                      {currentGymTrack.title}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">{currentGymTrack.artist}</p>
                  </div>
                </div>

                {/* Track skip & volume controls */}
                <div className="flex items-center justify-end gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => gymAudio.prevTrack()}
                    className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Piste précédente"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => gymAudio.nextTrack()}
                    className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Piste suivante"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <button onClick={handleToggleMute} className="text-slate-400 hover:text-white transition-colors ml-1 p-1">
                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-16 accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                  />
                </div>
              </div>

              {/* Badr Category Filter Tabs */}
              {activeProfileId === 'homme_44' && (
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
                    <button
                      onClick={() => handleSelectCategory('all')}
                      className={`px-2.5 py-1 rounded-lg shrink-0 font-bold transition-all ${
                        selectedCategory === 'all'
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {lang === 'darija' ? 'الكل (11)' : 'Tous (11)'}
                    </button>
                    <button
                      onClick={() => handleSelectCategory('srk')}
                      className={`px-2.5 py-1 rounded-lg shrink-0 font-bold transition-all ${
                        selectedCategory === 'srk'
                          ? 'bg-amber-400 text-slate-950 shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      👑 Best SRK (Shah Rukh Khan)
                    </button>
                    <button
                      onClick={() => handleSelectCategory('amr_diab')}
                      className={`px-2.5 py-1 rounded-lg shrink-0 font-bold transition-all ${
                        selectedCategory === 'amr_diab'
                          ? 'bg-emerald-400 text-slate-950 shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      🌟 Best Amr Diab (عمرو دياب)
                    </button>
                    <button
                      onClick={() => handleSelectCategory('zumba')}
                      className={`px-2.5 py-1 rounded-lg shrink-0 font-bold transition-all ${
                        selectedCategory === 'zumba'
                          ? 'bg-pink-400 text-slate-950 shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      💃 Zumba Dance
                    </button>
                    <button
                      onClick={() => handleSelectCategory('cardio_gym')}
                      className={`px-2.5 py-1 rounded-lg shrink-0 font-bold transition-all ${
                        selectedCategory === 'cardio_gym'
                          ? 'bg-cyan-400 text-slate-950 shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      ⚡ Salle de Sport Cardio
                    </button>
                  </div>
                </div>
              )}

              {/* Kaoutar Original Versions Header Info */}
              {activeProfileId === 'femme_36' && (
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-emerald-300 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      {lang === 'darija'
                        ? 'النسخ الأصلية الرسمية (صوت نقي بدون ميكس / بدون فيديو) :'
                        : 'Versions Originales Officielles (Audio Pur Sans Mix) :'}
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 font-mono">
                      100% Original
                    </span>
                  </div>
                </div>
              )}

              {/* Track selector grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 pt-1">
                {gymAudio.getActivePlaylist().map((trk, i) => {
                  const isCurrent = currentGymTrack.id === trk.id;
                  return (
                    <button
                      key={trk.id}
                      onClick={() => gymAudio.play(i)}
                      className={`py-2 px-2.5 rounded-xl transition-all text-left truncate text-xs flex items-center justify-between gap-2 border ${
                        isCurrent
                          ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20'
                          : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10 hover:border-white/10'
                      }`}
                      title={`${trk.title} - ${trk.artist}`}
                    >
                      <span className="truncate flex-1">{trk.badge || trk.title}</span>
                      <span className={`text-[10px] font-mono shrink-0 ${isCurrent ? 'text-slate-950' : 'text-slate-400'}`}>
                        {trk.bpm} BPM
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Timer & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Interactive Stopwatch Display */}
            <div className={`p-6 rounded-2xl border text-center transition-colors ${
              isResting 
                ? 'bg-amber-50/50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60' 
                : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60'
            }`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {isResting ? t.rest_time : t.work_time}
              </span>

              <div className="my-3 font-mono text-5xl md:text-6xl font-black tabular-nums text-slate-900 dark:text-white">
                {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleToggleWorkout}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95 ${
                    isPlayingWorkout
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {isPlayingWorkout ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlayingWorkout ? t.pause_workout : t.start_workout}
                </button>

                <button
                  onClick={handleReset}
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  title={t.reset_workout}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Exercise Instructions */}
            <div className="space-y-3 bg-white dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60 transition-colors">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {lang === 'darija' ? 'طريقة الحركة بالتفصيل :' : lang === 'ar' ? 'طريقة أداء التمرين :' : 'Instructions pas à pas :'}
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {currentExercise.instructions[lang].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              {currentExercise.precautions[lang] && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900/60 rounded-lg text-xs text-rose-800 dark:text-rose-200 mt-2">
                  <span className="font-semibold">{lang === 'darija' ? 'رد بالك :' : lang === 'ar' ? 'تنبيه :' : 'Attention :'} </span>
                  {currentExercise.precautions[lang]}
                </div>
              )}
            </div>

            {/* Exercise Navigation Footer */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {lang === 'darija' ? 'السابق' : lang === 'ar' ? 'السابق' : 'Précédent'}
              </button>

              <div className="flex items-center gap-1.5">
                {exercises.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex ? 'bg-emerald-600 w-6' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={currentIndex === exercises.length - 1}
                onClick={() => setCurrentIndex((i) => Math.min(exercises.length - 1, i + 1))}
                className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center gap-1 transition-colors"
              >
                {lang === 'darija' ? 'التالي' : lang === 'ar' ? 'التالي' : 'Suivant'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
