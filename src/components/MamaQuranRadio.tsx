import React, { useState, useRef, useEffect } from 'react';
import { 
  Radio, 
  Play, 
  Square, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Heart, 
  Footprints, 
  CheckCircle2, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
  compact?: boolean;
}

interface Station {
  id: string;
  nameAr: string;
  nameFr: string;
  reciterAr: string;
  reciterFr: string;
  url: string;
  descriptionAr: string;
  descriptionFr: string;
  badge: string;
}

const STATIONS: Station[] = [
  {
    id: 'mohammed_vi_koshi',
    nameAr: 'إذاعة محمد السادس للقرآن الكريم (تلاوات مغربية ورش)',
    nameFr: 'Radio Mohammed VI du Saint Coran (Récitation Marocaine Warsh)',
    reciterAr: 'الشيخ العيون الكوشي (مقرئ المغرب الأول)',
    reciterFr: 'Cheikh Al-Oyoon Al-Koushi (Grand Récitateur Marocain)',
    url: 'https://backup.qurango.net/radio/aloyoon_alkoshi',
    descriptionAr: 'قراءة مغربية أصيلة برواية ورش عن نافع، ترتاح لها النفس أثناء المشي والسكينة',
    descriptionFr: 'Lecture marocaine authentique selon Warsh an-Nafi, apaisante et idéale pour la marche',
    badge: '🇲🇦 البث المغربي',
  },
  {
    id: 'general_quran',
    nameAr: 'الإذاعة العامة للقرآن الكريم (بث مباشر 24/7)',
    nameFr: 'Radio Coran Générale (Direct Continu 24/7)',
    reciterAr: 'نخبة من كبار قراء العالم الإسلامي',
    reciterFr: 'Grands Récitateurs du Monde Islamique',
    url: 'https://backup.qurango.net/radio/mix',
    descriptionAr: 'بث قرآني مستمر بدون توقف بأجمل التلاوات الخاشعة والأدعية المباركة',
    descriptionFr: 'Diffusion continue non-stop des plus belles récitations et invocations',
    badge: '🌟 البث المتواصل',
  },
  {
    id: 'khuchoo_quran',
    nameAr: 'إذاعة التلاوات الخاشعة والمؤثرة',
    nameFr: 'Radio Récitations Apaisantes & Khuchoo',
    reciterAr: 'تلاوات هادئة لراحة البال والقلب',
    reciterFr: 'Récitations calmes pour la sérénité et le calme intérieur',
    url: 'https://backup.qurango.net/radio/salma',
    descriptionAr: 'تلاوات هادئة لتهدئة الأعصاب وتخفيف التوتر واستقرار ضغط الدم',
    descriptionFr: 'Récitations très douces pour évacuer le stress et accompagner le repos',
    badge: '🌿 سكينة وراحة',
  },
];

export const MamaQuranRadio: React.FC<Props> = ({ lang, compact = false }) => {
  const [selectedStation, setSelectedStation] = useState<Station>(STATIONS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize or handle station changes
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const handleTogglePlay = async () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setIsLoading(false);
    } else {
      setHasError(false);
      setIsLoading(true);

      try {
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }

        const audio = audioRef.current;
        audio.src = selectedStation.url;
        audio.volume = isMuted ? 0 : volume;
        audio.preload = 'auto';

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((err) => {
              console.warn('Audio playback waiting for stream buffer:', err);
              // Retry with direct stream
              setTimeout(() => {
                audio.play()
                  .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                  })
                  .catch(() => {
                    setIsLoading(false);
                    setHasError(true);
                  });
              }, 600);
            });
        }
      } catch (e) {
        console.error('Audio stream play error:', e);
        setIsLoading(false);
        setHasError(true);
      }
    }
  };

  const handleStationSelect = (station: Station) => {
    setSelectedStation(station);
    setHasError(false);

    if (isPlaying && audioRef.current) {
      setIsLoading(true);
      audioRef.current.pause();
      audioRef.current.src = station.url;
      audioRef.current.play()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (isMuted && newVol > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    } else {
      setIsMuted(!isMuted);
    }
  };

  const isRtl = lang === 'darija' || lang === 'ar';

  if (compact) {
    return (
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl border border-amber-400/40 shadow-sm">
        <button
          onClick={handleTogglePlay}
          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all shadow-md shrink-0 ${
            isPlaying 
              ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
              : 'bg-emerald-600 text-white hover:bg-emerald-500'
          }`}
          title={isPlaying ? 'إيقاف' : 'تشغيل إذاعة القرآن الكريم'}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isPlaying ? (
            <Square className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-xs font-black truncate text-amber-200">
              {isRtl ? 'إذاعة محمد السادس للقرآن الكريم' : 'Radio Mohammed VI Coran'}
            </span>
          </div>
          <p className="text-[10px] text-emerald-200/80 truncate">
            {isRtl ? selectedStation.reciterAr : selectedStation.reciterFr}
          </p>
        </div>

        {isPlaying && (
          <div className="flex items-center gap-0.5 px-2">
            <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-4 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white border-2 border-amber-400/50 shadow-2xl p-5 sm:p-7 relative">
      {/* Decorative Islamic geometric glow accents */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header section with live badge and title */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-400/40">
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {isRtl ? 'إذاعة محمد السادس للقرآن الكريم' : 'Radio Mohammed VI du Saint Coran'}
            </span>
            <span className="flex items-center gap-1 bg-red-600 text-white px-1.5 py-0.2 rounded-full text-[9px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              {isRtl ? 'مباشر' : 'DIRECT'}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>{isRtl ? 'بث القرآن الكريم باللغة العربية' : 'Saint Coran en Arabe (Direct)'}</span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
            {isRtl 
              ? 'مخصص لماما لعزيزة للاستماع والسكينة أثناء حصص المشي 1h30 وفي أوقات الراحة في البيت.' 
              : 'Dédié pour Mama Laaziza : diffusion apaisante pendant les 1h30 de marche et au repos chez soi.'}
          </p>
        </div>

        {/* Large easy Play / Stop button for Mama Aziza */}
        <div className="flex items-center gap-3 self-start sm:self-center">
          <button
            onClick={handleTogglePlay}
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-black text-sm transition-all shadow-xl active:scale-95 cursor-pointer ${
              isPlaying
                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 ring-4 ring-amber-400/30'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white ring-4 ring-emerald-500/30'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{isRtl ? 'جاري الاتصال...' : 'Connexion...'}</span>
              </>
            ) : isPlaying ? (
              <>
                <Square className="w-5 h-5 fill-current" />
                <span>{isRtl ? 'إيقاف البث' : 'Arrêter la Radio'}</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>{isRtl ? 'تشغيل البث الآن' : 'Écouter en Direct'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Currently playing station highlight & animated sound wave */}
      <div className="relative z-10 my-4 p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 min-w-0">
          <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
            {isRtl ? 'المحطة المشغلة حالياً :' : 'Station Sélectionnée :'}
          </span>
          <h4 className="text-base sm:text-lg font-black text-white truncate">
            {isRtl ? selectedStation.nameAr : selectedStation.nameFr}
          </h4>
          <p className="text-xs text-emerald-200/90 font-medium truncate">
            {isRtl ? selectedStation.reciterAr : selectedStation.reciterFr} · {isRtl ? selectedStation.descriptionAr : selectedStation.descriptionFr}
          </p>
        </div>

        {/* Sound visualizer animation and Volume controls */}
        <div className="flex items-center gap-3 shrink-0">
          {isPlaying && (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-900/60 border border-emerald-500/30">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-6 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-3 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="w-1.5 h-5 bg-teal-300 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
              <span className="text-xs font-bold text-amber-300 ml-1.5">
                {isRtl ? 'يتم البث' : 'À l\'écoute'}
              </span>
            </div>
          )}

          {/* Volume control */}
          <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
            <button
              onClick={toggleMute}
              className="text-slate-300 hover:text-white transition-colors"
              title={isMuted ? 'إلغاء الكتم' : 'كتم الصوت'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 sm:w-20 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Station Selector Cards */}
      <div className="relative z-10 space-y-2.5">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
          {isRtl ? 'اختر المحطة أو القارئ المفضل لماما لعزيزة :' : 'Choisir la station ou récitation préférée :'}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STATIONS.map((station) => {
            const isCurrent = selectedStation.id === station.id;
            return (
              <button
                key={station.id}
                onClick={() => handleStationSelect(station)}
                className={`text-right p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-br from-emerald-800/80 to-teal-900/90 border-amber-400 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {station.badge}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 ring-2 ring-white/50" />
                  )}
                </div>

                <div className="space-y-0.5 w-full">
                  <h5 className="text-xs font-bold text-white line-clamp-1">
                    {isRtl ? station.nameAr : station.nameFr}
                  </h5>
                  <p className="text-[11px] text-emerald-200/90 font-medium line-clamp-1">
                    {isRtl ? station.reciterAr : station.reciterFr}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Helpful health note for Mama Aziza */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-200/80">
        <div className="flex items-center gap-2">
          <Footprints className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {isRtl 
              ? 'موصى به: شغّلي الراديو وارتدي السماعات أثناء حصة المشي (1h30) لراحة نفسية تامة وتنظيم دقات القلب.' 
              : 'Conseil bien-être : Écoutez la radio pendant vos 1h30 de marche pour une marche sereine et rythmée.'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-300 font-bold">
          <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{isRtl ? 'بالصحة والسلامة لماما لعزيزة' : 'Bonne marche et santé à Mama Laaziza'}</span>
        </div>
      </div>

      {hasError && (
        <div className="relative z-10 mt-3 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-xs text-red-200 flex items-center justify-between">
          <span>{isRtl ? 'تعذر تحميل البث حالياً، يرجى إعادة المحاولة بعد لحظات.' : 'Flux temporairement indisponible, veuillez réessayer.'}</span>
          <button
            onClick={handleTogglePlay}
            className="px-2.5 py-1 rounded-lg bg-red-800 hover:bg-red-700 text-white font-bold"
          >
            {isRtl ? 'إعادة المحاولة' : 'Réessayer'}
          </button>
        </div>
      )}
    </div>
  );
};
