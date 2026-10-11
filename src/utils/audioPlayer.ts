/**
 * Web Audio API based real-time synthesizer for workout music and cue beeps.
 * Produces authentic rhythmic workout beats without external audio asset dependencies.
 */

class WorkoutAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentTrack: 'energy' | 'pulse' | 'flow' | 'zen' = 'energy';
  private timerId: number | null = null;
  private step = 0;
  private masterGain: GainNode | null = null;
  private volume = 0.6;
  private listeners: ((playing: boolean, track: string) => void)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume() {
    return this.volume;
  }

  public subscribe(fn: (playing: boolean, track: string) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying, this.currentTrack));
  }

  // Plays a synthesized kick drum
  private playKick(time: number, power = 1) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(38, time + 0.12);

    gain.gain.setValueAtTime(0.7 * power, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.25);
  }

  // Plays a synthesized snare/clap
  private playSnare(time: number, snap = 1) {
    if (!this.ctx || !this.masterGain) return;
    // Noise buffer
    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3 * snap, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start(time);
    whiteNoise.stop(time + 0.18);
  }

  // Plays a rhythmic hi-hat
  private playHiHat(time: number, open = false) {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * (open ? 0.08 : 0.03);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7500;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (open ? 0.08 : 0.03));

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + (open ? 0.1 : 0.04));
  }

  // Plays a bass synthesizer note
  private playBass(time: number, freq: number, duration = 0.2) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, time);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Plays an ambient chord / pad
  private playPad(time: number, freqs: number[], duration = 0.8) {
    if (!this.ctx || !this.masterGain) return;
    freqs.forEach((f) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, time);

      gain.gain.setValueAtTime(0.01, time);
      gain.gain.linearRampToValueAtTime(0.09, time + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + duration);
    });
  }

  // Step sequencer engine for 16-step loop
  private tick() {
    if (!this.isPlaying || !this.ctx) return;
    const now = this.ctx.currentTime;
    const s = this.step % 16;

    if (this.currentTrack === 'energy') {
      // Moroccan Chaabi-Workout energetic beat (128 BPM = ~117ms per 16th note)
      if (s === 0 || s === 4 || s === 8 || s === 12) this.playKick(now, 1);
      if (s === 4 || s === 12) this.playSnare(now, 1);
      if (s % 2 === 0) this.playHiHat(now, s % 4 === 2);

      // Bass groove
      const bassNotes = [55, 55, 65.4, 73.4, 55, 55, 82.4, 73.4];
      this.playBass(now, bassNotes[Math.floor(s / 2)], 0.16);

    } else if (this.currentTrack === 'pulse') {
      // Cardio Electro Pulse (120 BPM)
      if (s === 0 || s === 6 || s === 10) this.playKick(now, 0.9);
      if (s === 4 || s === 12) this.playSnare(now, 0.8);
      if (s % 2 === 0) this.playHiHat(now, false);
      if (s === 0 || s === 8) this.playBass(now, 65.4, 0.3);

    } else if (this.currentTrack === 'flow') {
      // Smooth Senior / Knee flow (95 BPM)
      if (s === 0 || s === 8) this.playKick(now, 0.6);
      if (s === 4 || s === 12) this.playSnare(now, 0.4);
      if (s % 4 === 2) this.playHiHat(now, false);
      if (s === 0) this.playPad(now, [130.8, 164.8, 196.0], 1.2);
      if (s === 8) this.playPad(now, [146.8, 174.6, 220.0], 1.2);

    } else {
      // Zen Recovery (70 BPM)
      if (s === 0) {
        this.playPad(now, [174.6, 220.0, 261.6, 329.6], 2.2);
      }
      if (s === 8) {
        this.playPad(now, [164.8, 196.0, 246.9, 293.7], 2.2);
      }
    }

    this.step++;
    const stepIntervalMs =
      this.currentTrack === 'energy'
        ? 117
        : this.currentTrack === 'pulse'
        ? 125
        : this.currentTrack === 'flow'
        ? 158
        : 214;

    this.timerId = window.setTimeout(() => this.tick(), stepIntervalMs);
  }

  public play(track?: 'energy' | 'pulse' | 'flow' | 'zen') {
    this.initContext();
    if (track) {
      this.currentTrack = track;
    }
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.step = 0;
    this.tick();
    this.notify();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public toggle(track?: 'energy' | 'pulse' | 'flow' | 'zen') {
    if (track && track !== this.currentTrack) {
      this.currentTrack = track;
      if (!this.isPlaying) {
        this.play(track);
      } else {
        this.notify();
      }
      return;
    }
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(track);
    }
  }

  public setTrack(track: 'energy' | 'pulse' | 'flow' | 'zen') {
    this.currentTrack = track;
    this.notify();
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      currentTrack: this.currentTrack,
      volume: this.volume,
    };
  }

  // Audio cues for timer intervals
  public playCountdownBeep(high = false) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.value = high ? 880 : 440;
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (high ? 0.4 : 0.2));

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + (high ? 0.45 : 0.25));
  }
}

export const workoutAudio = new WorkoutAudioEngine();
