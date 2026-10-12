/**
 * Real Gym Music & Reels Audio Engine
 * Supports:
 * - Kaoutar (Femme 36 ans): 100% Original Versions (Shakira ft. Pitbull - Rabiosa, Wisin ft. J.Lo & Ricky Martin - Adrenalina, Shakira - Waka Waka)
 * - Badr (Homme 44 ans): Best SRK Songs (Pretty Woman, It's The Time To Disco, Tujhe Dekha Toh, Kal Ho Naa Ho), Best Amr Diab (Nour El Ain, Tamally Maak, Amarain, Alby), Zumba Dance (Haypa Zumba®), and Salle de Sport Cardio (No More Excuses, Power Workout)
 */

export type MusicCategory = 'all' | 'srk' | 'amr_diab' | 'zumba' | 'cardio_gym' | 'kaoutar_original';

export interface GymTrack {
  id: string;
  title: string;
  artist: string;
  category: 'srk' | 'amr_diab' | 'zumba' | 'cardio_gym' | 'kaoutar_original';
  genre: 'bollywood' | 'arabic_pop' | 'zumba' | 'cardio' | 'latin';
  bpm: number;
  mp3Url: string;
  description: string;
  badge: string;
}

// ==========================================
// BADR (Homme 44) & GENERAL WORKOUT TRACKS
// ==========================================
export const BADR_HYPE_TRACKS: GymTrack[] = [
  // 1. BEST SHAH RUKH KHAN (SRK) SONGS
  {
    id: 'srk_pretty_woman',
    title: 'Pretty Woman (Kal Ho Naa Ho)',
    artist: 'Shah Rukh Khan · Shankar Mahadevan',
    category: 'srk',
    genre: 'bollywood',
    bpm: 130,
    mp3Url: 'https://archive.org/download/KalHoNaaHo2003-Www.portalcineindio.com/KalHoNaaHo-06-PrettyWomanportalcineindio.com.mp3',
    description: 'Rythme Bollywood bhangra ultra énergique et motivant pour le cardio et la bonne humeur',
    badge: '👑 SRK · Pretty Woman',
  },
  {
    id: 'srk_disco',
    title: "It's The Time To Disco (Kal Ho Naa Ho)",
    artist: 'Shah Rukh Khan · Shaan, KK, Vasundhara',
    category: 'srk',
    genre: 'bollywood',
    bpm: 134,
    mp3Url: 'https://archive.org/download/KalHoNaaHo2003-Www.portalcineindio.com/KalHoNaaHo-03-ItsTheTimeToDiscoportalcineindio.com.mp3',
    description: 'Basse club disco explosive avec la voix de SRK pour accélérer le rythme cardiaque',
    badge: '👑 SRK · Time To Disco',
  },
  {
    id: 'srk_ddlj',
    title: 'Tujhe Dekha Toh (DDLJ - Dilwale Dulhania)',
    artist: 'Shah Rukh Khan & Kajol · Kumar Sanu',
    category: 'srk',
    genre: 'bollywood',
    bpm: 112,
    mp3Url: 'https://archive.org/download/LaguIndiaPopuler/Tujhe%20Dekha%20Toh%20-%20Full%20Song%20Dilwale%20Dulhania%20Le%20Jayenge%20Shah%20Rukh%20Khan%20Kajol.mp3',
    description: 'Le chef-d\'œuvre absolu de Shah Rukh Khan pour les étirements et le gainage motivé',
    badge: '👑 SRK · Tujhe Dekha Toh',
  },
  {
    id: 'srk_khnh_theme',
    title: 'Kal Ho Naa Ho (Titre Original)',
    artist: 'Shah Rukh Khan · Sonu Nigam',
    category: 'srk',
    genre: 'bollywood',
    bpm: 118,
    mp3Url: 'https://archive.org/download/KalHoNaaHo2003-Www.portalcineindio.com/KalHoNaaHo-01-KalHoNaaHoportalcineindio.com.mp3',
    description: 'L\'hymne légendaire de SRK pour puiser l\'énergie mentale et dépasser ses limites',
    badge: '👑 SRK · Kal Ho Naa Ho',
  },

  // 2. BEST AMR DIAB SONGS
  {
    id: 'amr_nour_el_ain',
    title: 'Nour El Ain (نور العين - Version Originale CD)',
    artist: 'Amr Diab (عمرو دياب)',
    category: 'amr_diab',
    genre: 'arabic_pop',
    bpm: 128,
    mp3Url: 'https://archive.org/download/Album_AmrDiab_Nour_El_Ain_Original_Quality/Nour%20El%20Ain.mp3',
    description: 'Le hit mondial intemporel d\'Amr Diab avec percussions orientales et espagnoles pour un cardio parfait',
    badge: '🌟 عمرو دياب · نور العين',
  },
  {
    id: 'amr_tamally_maak',
    title: 'Tamally Maak (تملي معاك - Version Originale)',
    artist: 'Amr Diab (عمرو ديab)',
    category: 'amr_diab',
    genre: 'arabic_pop',
    bpm: 120,
    mp3Url: 'https://archive.org/download/amrdiabtamallymaak/Amr%20Diab%20-%20Tamally%20Maak.mp3',
    description: 'Guitare acoustique et tempo régulier idéal pour la cadence de marche et les séries',
    badge: '🌟 عمرو دياب · تملي معاك',
  },
  {
    id: 'amr_amarain',
    title: 'Amarain (قمرين - Version Originale CD)',
    artist: 'Amr Diab (عمرو دياب)',
    category: 'amr_diab',
    genre: 'arabic_pop',
    bpm: 130,
    mp3Url: 'https://archive.org/download/Album_AmrDiab_Amarain_Original_Quality/Amarain.mp3',
    description: 'Rythme rapide et entraînant pour brûler un maximum de calories avec le sourire',
    badge: '🌟 عمرو دياب · قمرين',
  },
  {
    id: 'amr_alby',
    title: 'Alby (قلبي - Duo Amr Diab & Cheb Khaled)',
    artist: 'Amr Diab ft. Cheb Khaled',
    category: 'amr_diab',
    genre: 'arabic_pop',
    bpm: 126,
    mp3Url: 'https://archive.org/download/Album_AmrDiab_Amarain_Original_Quality/Alby.mp3',
    description: 'Fusion festive Raï marocain-algérien et pop égyptienne pleine d\'énergie',
    badge: '🌟 دياب وخالد · قلبي',
  },

  // 3. MUSIC ZUMBA DANCE
  {
    id: 'zumba_haypa',
    title: 'Haypa Zumba® Dance Fitness (Live Love Party)',
    artist: 'MMJ · Zumba Official Fitness',
    category: 'zumba',
    genre: 'zumba',
    bpm: 132,
    mp3Url: 'https://archive.org/download/HaypaByMMJZumbaRDanceFitnessLiveLoveParty/Haypa%20by%20MMJ%20%20Zumba%C2%AE%20%20Dance%20Fitness%20%20Live%20Love%20Party.mp3',
    description: 'Session Zumba Dance pure énergie avec percussions latines et ambiance cours de danse cardio',
    badge: '💃 Zumba Dance 132 BPM',
  },

  // 4. MUSIC SALLE DE SPORT CARDIO
  {
    id: 'cardio_no_excuses',
    title: 'No More Excuses (Gym Cardio Motivation)',
    artist: 'Beast Mode Gym Motivation',
    category: 'cardio_gym',
    genre: 'cardio',
    bpm: 140,
    mp3Url: 'https://archive.org/download/no-more-excuses-gym-motivation/no-more-excuses-gym-motivation.mp3',
    description: 'Rythme intense de salle de sport sans concessions pour pousser ses limites cardio',
    badge: '⚡ Gym Cardio 140 BPM',
  },
  {
    id: 'cardio_workout_power',
    title: 'Power Cardio Workout & Running Motivation',
    artist: 'Salle de Sport Cardio Pump',
    category: 'cardio_gym',
    genre: 'cardio',
    bpm: 136,
    mp3Url: 'https://archive.org/download/WorkoutMotivationMusic/Workout%20Motivation%20Music.mp3',
    description: 'Pression constante et beat entraînant pour le cardio en circuit et calisthenics',
    badge: '🔥 Cardio Salle 136 BPM',
  },
];

// ==========================================
// KAOUTAR (Femme 36) - 100% ORIGINAL VERSIONS
// ==========================================
export const KAOUTAR_ORIGINAL_TRACKS: GymTrack[] = [
  {
    id: 'waka_waka_shakira_original',
    title: 'Waka Waka (This Time for Africa - Original)',
    artist: 'Shakira (شاكيرا)',
    category: 'kaoutar_original',
    genre: 'latin',
    bpm: 128,
    mp3Url: '/audio/shakira_waka_waka.mp3',
    description: 'Version originale culte officielle de Shakira pour garder le tempo cardio avec joie et sans choc pour les genoux',
    badge: '🌍 Shakira · Waka Waka (Original)',
  },
  {
    id: 'adrenalina_wisin_original',
    title: 'Adrenalina (Version Originale)',
    artist: 'Wisin ft. Jennifer Lopez & Ricky Martin (ويسين)',
    category: 'kaoutar_original',
    genre: 'latin',
    bpm: 128,
    mp3Url: '/audio/wisin_adrenalina.mp3',
    description: 'Version originale officielle de Wisin, J.Lo & Ricky Martin - Audio pur haute qualité',
    badge: '⚡ Wisin · Adrenalina (Original)',
  },
  {
    id: 'rabiosa_shakira_original',
    title: 'Rabiosa (Version Originale)',
    artist: 'Shakira ft. Pitbull',
    category: 'kaoutar_original',
    genre: 'latin',
    bpm: 132,
    mp3Url: '/audio/shakira_rabiosa.mp3',
    description: 'Version originale officielle de Shakira & Pitbull - Audio haute fidélité 320 kbps',
    badge: '💃 Shakira · Rabiosa (Original)',
  },
];

export const DEFAULT_HYPE_TRACKS = BADR_HYPE_TRACKS;
export const KAOUTAR_SPECIAL_TRACKS = KAOUTAR_ORIGINAL_TRACKS;
export const REAL_GYM_TRACKS = BADR_HYPE_TRACKS;

class GymAudioEngine {
  private audioEl: HTMLAudioElement | null = null;
  private currentTrackIndex = 0;
  private isPlaying = false;
  private volume = 0.85;
  private activeProfileId = 'homme_44';
  private activeCategory: MusicCategory = 'all';
  private listeners: ((playing: boolean, track: GymTrack) => void)[] = [];

  // Web Audio Synth Components (Fallback Only if offline/error)
  private synthCtx: AudioContext | null = null;
  private synthTimer: number | null = null;
  private synthGain: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.audioEl = new Audio();
        this.audioEl.crossOrigin = 'anonymous';
        this.audioEl.volume = this.volume;
        this.audioEl.loop = false;

        this.audioEl.addEventListener('error', () => {
          // If network MP3 fails or offline, smoothly fallback to synth
          this.fallbackToSynth();
        });

        this.audioEl.addEventListener('ended', () => {
          this.nextTrack();
        });
      } catch {
        // Fallback to synth if Audio element fails
      }
    }
  }

  public setProfile(profileId: string) {
    if (this.activeProfileId !== profileId) {
      this.activeProfileId = profileId;
      this.currentTrackIndex = 0;
      this.activeCategory = 'all';
      if (this.isPlaying) {
        this.play(0);
      } else {
        this.notify();
      }
    }
  }

  public setCategory(cat: MusicCategory) {
    this.activeCategory = cat;
    this.currentTrackIndex = 0;
    if (this.isPlaying) {
      this.play(0);
    } else {
      this.notify();
    }
  }

  public getActiveCategory(): MusicCategory {
    return this.activeCategory;
  }

  public getActivePlaylist(): GymTrack[] {
    if (this.activeProfileId === 'femme_36') {
      return KAOUTAR_ORIGINAL_TRACKS;
    }
    if (this.activeCategory === 'all') {
      return BADR_HYPE_TRACKS;
    }
    const filtered = BADR_HYPE_TRACKS.filter((t) => t.category === this.activeCategory);
    return filtered.length > 0 ? filtered : BADR_HYPE_TRACKS;
  }

  public getCurrentTrack(): GymTrack {
    const list = this.getActivePlaylist();
    return list[this.currentTrackIndex] || list[0];
  }

  public subscribe(fn: (playing: boolean, track: GymTrack) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    const track = this.getCurrentTrack();
    this.listeners.forEach((fn) => fn(this.isPlaying, track));
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioEl) {
      this.audioEl.volume = this.volume;
    }
    if (this.synthGain && this.synthCtx) {
      this.synthGain.gain.setValueAtTime(this.volume, this.synthCtx.currentTime);
    }
    this.notify();
  }

  public async play(trackIndex?: number) {
    const playlist = this.getActivePlaylist();
    if (trackIndex !== undefined && trackIndex >= 0 && trackIndex < playlist.length) {
      this.currentTrackIndex = trackIndex;
    }

    const track = this.getCurrentTrack();
    
    // IMPORTANT: Stop any previous synthetic fallback so user hears the pure original song!
    this.stopSynth();

    if (this.audioEl) {
      try {
        if (this.audioEl.src !== track.mp3Url) {
          this.audioEl.src = track.mp3Url;
        }
        await this.audioEl.play();
        this.isPlaying = true;
        this.notify();
        return;
      } catch {
        // Only run fallback synth if the real audio element actually fails!
        this.fallbackToSynth();
      }
    } else {
      this.fallbackToSynth();
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioEl) {
      try {
        this.audioEl.pause();
      } catch {
        // Ignore
      }
    }
    this.stopSynth();
    this.notify();
  }

  public toggle(trackIndex?: number) {
    if (trackIndex !== undefined && trackIndex !== this.currentTrackIndex) {
      this.play(trackIndex);
      return;
    }
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public nextTrack() {
    const playlist = this.getActivePlaylist();
    this.currentTrackIndex = (this.currentTrackIndex + 1) % playlist.length;
    if (this.isPlaying) {
      this.play();
    } else {
      this.notify();
    }
  }

  public prevTrack() {
    const playlist = this.getActivePlaylist();
    this.currentTrackIndex = (this.currentTrackIndex - 1 + playlist.length) % playlist.length;
    if (this.isPlaying) {
      this.play();
    } else {
      this.notify();
    }
  }

  private fallbackToSynth() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.notify();
    }
    this.startHighHypeSynth();
  }

  /**
   * Offline Web Audio synthesizer (only used when network is unavailable)
   */
  private startHighHypeSynth() {
    this.stopSynth();

    if (!this.synthCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.synthCtx = new AudioCtx();
    }

    if (this.synthCtx.state === 'suspended') {
      this.synthCtx.resume();
    }

    this.synthGain = this.synthCtx.createGain();
    this.synthGain.gain.setValueAtTime(this.volume, this.synthCtx.currentTime);
    this.synthGain.connect(this.synthCtx.destination);

    let step = 0;
    const isLatin = this.activeProfileId === 'femme_36';
    const bpm = this.getCurrentTrack().bpm;
    const tickInterval = (60 / bpm / 4) * 1000;

    const playKick = (now: number, isSubDrop = false) => {
      if (!this.synthCtx || !this.synthGain) return;
      const osc = this.synthCtx.createOscillator();
      const gain = this.synthCtx.createGain();
      const startFreq = isSubDrop ? 180 : 150;
      const endFreq = isSubDrop ? 36 : 42;

      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.12);

      const amp = isSubDrop ? 0.85 : 0.7;
      gain.gain.setValueAtTime(amp, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isSubDrop ? 0.35 : 0.22));

      osc.connect(gain);
      gain.connect(this.synthGain);
      osc.start(now);
      osc.stop(now + (isSubDrop ? 0.38 : 0.25));
    };

    const playSnare = (now: number, isLatinRim = false) => {
      if (!this.synthCtx || !this.synthGain) return;
      const osc = this.synthCtx.createOscillator();
      const gain = this.synthCtx.createGain();

      osc.type = isLatinRim ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(isLatinRim ? 330 : 220, now);

      gain.gain.setValueAtTime(isLatinRim ? 0.45 : 0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.synthGain);
      osc.start(now);
      osc.stop(now + 0.15);
    };

    const playHiHat = (now: number, open = false) => {
      if (!this.synthCtx || !this.synthGain) return;
      const osc = this.synthCtx.createOscillator();
      const gain = this.synthCtx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(8000, now);

      const dur = open ? 0.12 : 0.04;
      gain.gain.setValueAtTime(open ? 0.15 : 0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      osc.connect(gain);
      gain.connect(this.synthGain);
      osc.start(now);
      osc.stop(now + dur + 0.01);
    };

    const runLoop = () => {
      if (!this.isPlaying || !this.synthCtx) return;
      const now = this.synthCtx.currentTime;
      const s = step % 16;

      if (s === 0 || s === 4 || s === 8 || s === 12) playKick(now, s === 0);
      if (s === 4 || s === 12) playSnare(now, isLatin);
      playHiHat(now, s % 4 === 2);

      step++;
      this.synthTimer = window.setTimeout(runLoop, tickInterval);
    };

    runLoop();
  }

  private stopSynth() {
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
  }
}

export const gymAudio = new GymAudioEngine();
