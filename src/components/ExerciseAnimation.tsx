import React, { useEffect, useState } from 'react';
import { Exercise } from '../types';

interface Props {
  exercise: Exercise;
  isPlaying?: boolean;
}

export const ExerciseAnimation: React.FC<Props> = ({ exercise, isPlaying = true }) => {
  const [phase, setPhase] = useState(0);
  const [viewMode, setViewMode] = useState<'trainer' | 'muscles'>('trainer');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % 60);
    }, 38);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Sine curve 0 to 1
  const t = (Math.sin((phase / 60) * Math.PI * 2) + 1) / 2;

  const renderRealisticTrainer = () => {
    const isSquat = exercise.animationType === 'chair_squat' || exercise.animationType === 'step_touch';
    const isPunches = exercise.animationType === 'seated_punches';
    const isWallPushup = exercise.animationType === 'wall_pushup';
    const isGluteBridge = exercise.animationType === 'glute_bridge';
    const isLegRaise = exercise.animationType === 'straight_leg_raise';
    const isMarch = exercise.animationType === 'standing_march';

    if (isSquat) {
      // Realistic Squat as in the user's uploaded image (Male athlete, black sportswear, blue mat, dumbbells)
      const hipY = 125 + t * 45; // 125 standing up, 170 deep squat
      const kneeY = 168 + t * 6;
      const kneeLeftX = 120 - t * 14;
      const kneeRightX = 180 + t * 14;
      const torsoY = hipY - 50;
      const headY = torsoY - 20;

      return (
        <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
          {/* Gym Studio Background gradient */}
          <rect width="320" height="250" fill="url(#studioGrad)" rx="16" />
          <defs>
            <linearGradient id="studioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="matGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {/* Blue Gym Workout Mat (Perspective) */}
          <polygon points="40,215 280,215 260,232 60,232" fill="url(#matGrad)" opacity="0.9" />

          {/* Dumbbells resting on the blue mat (Right side, matching the user image) */}
          <g transform="translate(240, 218)">
            <rect x="0" y="2" width="16" height="4" fill="#38bdf8" rx="2" />
            <circle cx="0" cy="4" r="5" fill="#0369a1" />
            <circle cx="16" cy="4" r="5" fill="#0369a1" />
          </g>

          {/* Trainer Shadow on Mat */}
          <ellipse cx="150" cy="222" rx={55 + t * 15} ry={12} fill="#000" opacity="0.45" />

          {/* Feet & Athletic Shoes */}
          <ellipse cx="108" cy="220" rx="14" ry="6" fill="#1e293b" />
          <path d="M 98 220 Q 112 214 122 220" stroke="#f8fafc" strokeWidth="2" fill="none" />
          <ellipse cx="192" cy="220" rx="14" ry="6" fill="#1e293b" />
          <path d="M 182 220 Q 196 214 206 220" stroke="#f8fafc" strokeWidth="2" fill="none" />

          {/* Shins & Calves (Black athletic socks) */}
          <line x1="108" y1="220" x2={kneeLeftX} y2={kneeY} stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
          <line x1="192" y1="220" x2={kneeRightX} y2={kneeY} stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />

          {/* Knees joint accents */}
          <circle cx={kneeLeftX} cy={kneeY} r="7" fill={viewMode === 'muscles' ? '#ef4444' : '#1e293b'} />
          <circle cx={kneeRightX} cy={kneeY} r="7" fill={viewMode === 'muscles' ? '#ef4444' : '#1e293b'} />

          {/* Thighs (Quadriceps - Black athletic shorts) */}
          <line x1={kneeLeftX} y1={kneeY} x2="140" y2={hipY} stroke="#1e293b" strokeWidth="15" strokeLinecap="round" />
          <line x1={kneeRightX} y1={kneeY} x2="160" y2={hipY} stroke="#1e293b" strokeWidth="15" strokeLinecap="round" />

          {/* Shorts Basin */}
          <ellipse cx="150" cy={hipY} rx="26" ry="12" fill="#0f172a" />

          {/* Torso & Athletic Black T-Shirt */}
          <path
            d={`M 132 ${hipY} Q 128 ${torsoY + 10} 134 ${torsoY} L 166 ${torsoY} Q 172 ${torsoY + 10} 168 ${hipY} Z`}
            fill="#18181b"
          />

          {/* Head & Hair/Beard (Matching Trainer in image) */}
          <ellipse cx="150" cy={headY} rx="12" ry="14" fill="#d97706" />
          {/* Hair & Beard */}
          <path d={`M 138 ${headY - 2} Q 150 ${headY - 18} 162 ${headY - 2} L 162 ${headY + 6} Q 150 ${headY + 16} 138 ${headY + 6} Z`} fill="#1c1917" opacity="0.9" />
          <ellipse cx="150" cy={headY - 2} rx="10" ry="11" fill="#f59e0b" />

          {/* Arms clasped in front of chest (Squat guard form from user's image) */}
          <path
            d={`M 134 ${torsoY + 5} Q 140 ${torsoY + 22} 150 ${torsoY + 18} Q 160 ${torsoY + 22} 166 ${torsoY + 5}`}
            stroke="#f59e0b"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Clasped Hands */}
          <circle cx="150" cy={torsoY + 18} r="6" fill="#d97706" />

          {/* Dynamic Rep Direction Arrow */}
          <g transform="translate(150, 45)">
            <circle cx="0" cy="0" r="16" fill="#10b981" opacity="0.2" />
            <path
              d={t > 0.5 ? 'M 0 -8 L 0 8 M -5 3 L 0 8 L 5 3' : 'M 0 8 L 0 -8 M -5 -3 L 0 -8 L 5 -3'}
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
    }

    if (isPunches) {
      // Seated High-Cadence Shadowboxing
      const punchR = Math.sin((phase / 30) * Math.PI * 2);
      const punchL = -punchR;
      return (
        <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
          <rect width="320" height="250" fill="#090d16" rx="16" />
          {/* Gym Chair */}
          <path d="M 80 150 L 140 150 L 140 225 M 80 85 L 80 225" stroke="#475569" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Blue Mat */}
          <line x1="50" y1="225" x2="270" y2="225" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />

          {/* Seated Trainer Body */}
          <circle cx="130" cy="90" r="14" fill="#f59e0b" />
          <path d="M 118 90 Q 130 76 142 90 L 142 98 Q 130 106 118 98 Z" fill="#1c1917" />
          {/* Torso */}
          <rect x="115" y="104" width="30" height="46" rx="4" fill="#18181b" />
          {/* Legs on Chair */}
          <path d="M 130 150 L 175 150 L 175 225" stroke="#0f172a" strokeWidth="12" fill="none" strokeLinecap="round" />
          <ellipse cx="180" cy="225" rx="12" ry="5" fill="#334155" />

          {/* Left Fist Punching Out */}
          <line x1="130" y1="115" x2={175 + punchL * 45} y2="115" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          <circle cx={175 + punchL * 45} cy="115" r="8" fill="#e11d48" />

          {/* Right Fist Punching Out */}
          <line x1="130" y1="128" x2={175 + punchR * 45} y2="128" stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
          <circle cx={175 + punchR * 45} cy="128" r="8" fill="#0284c7" />

          {/* Shockwaves */}
          <path d={`M ${185 + punchL * 45} 105 Q ${195 + punchL * 45} 115 ${185 + punchL * 45} 125`} stroke="#f43f5e" strokeWidth="2.5" fill="none" opacity={punchL > 0.3 ? 0.9 : 0.1} />
        </svg>
      );
    }

    if (isGluteBridge) {
      // Pelvic Glute Bridge
      const lift = 160 - t * 45;
      return (
        <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
          <rect width="320" height="250" fill="#090d16" rx="16" />
          {/* Blue Gym Mat */}
          <line x1="30" y1="200" x2="290" y2="200" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />

          {/* Head & Upper Back on Mat */}
          <circle cx="70" cy="188" r="14" fill="#f59e0b" />
          <line x1="70" y1="188" x2="100" y2="190" stroke="#18181b" strokeWidth="12" strokeLinecap="round" />

          {/* Torso Rising in Bridge */}
          <line x1="100" y1="190" x2="165" y2={lift} stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
          {/* Thighs */}
          <line x1="165" y1={lift} x2="220" y2="165" stroke="#0f172a" strokeWidth="14" strokeLinecap="round" />
          {/* Shins */}
          <line x1="220" y1="165" x2="228" y2="200" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
          {/* Feet */}
          <ellipse cx="234" cy="200" rx="12" ry="5" fill="#334155" />

          {/* Core activation aura */}
          <circle cx="165" cy={lift} r="10" fill="#10b981" opacity="0.4" />
        </svg>
      );
    }

    if (isWallPushup) {
      // Pushup movement
      const pushLean = 140 + t * 35;
      return (
        <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
          <rect width="320" height="250" fill="#090d16" rx="16" />
          {/* Wall Support */}
          <line x1="250" y1="35" x2="250" y2="225" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
          {/* Floor Mat */}
          <line x1="30" y1="225" x2="290" y2="225" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />

          {/* Body plank line */}
          <line x1="85" y1="220" x2={pushLean} y2="100" stroke="#18181b" strokeWidth="18" strokeLinecap="round" />
          {/* Head */}
          <circle cx={pushLean + 10} cy="82" r="14" fill="#f59e0b" />
          {/* Arms pressing against wall */}
          <line x1={pushLean - 10} y1="110" x2={pushLean + 25} y2="125" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          <line x1={pushLean + 25} y1="125" x2="250" y2="120" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          {/* Shoes */}
          <ellipse cx="80" cy="223" rx="12" ry="5" fill="#334155" />
        </svg>
      );
    }

    if (isLegRaise) {
      // Knee-safe leg raise
      const legY = 195 - t * 45;
      return (
        <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
          <rect width="320" height="250" fill="#090d16" rx="16" />
          <line x1="30" y1="200" x2="290" y2="200" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />

          <circle cx="70" cy="186" r="14" fill="#f59e0b" />
          <line x1="82" y1="190" x2="140" y2="190" stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
          {/* Resting bent leg */}
          <path d="M 140 190 L 175 155 L 185 200" stroke="#334155" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Straight leg lifting */}
          <line x1="140" y1="190" x2="235" y2={legY} stroke="#10b981" strokeWidth="12" strokeLinecap="round" />
          <ellipse cx="238" cy={legY} rx="12" ry="5" fill="#0284c7" />

          {/* Knee shield icon */}
          <circle cx="185" cy={(190 + legY) / 2} r="8" fill="#38bdf8" />
        </svg>
      );
    }

    // Default: Standing High Knees / March
    const marchY = Math.sin((phase / 30) * Math.PI * 2);
    const leftK = 175 - Math.max(0, marchY) * 35;
    const rightK = 175 - Math.max(0, -marchY) * 35;

    return (
      <svg viewBox="0 0 320 250" className="w-full h-full drop-shadow-md">
        <rect width="320" height="250" fill="#090d16" rx="16" />
        <line x1="40" y1="225" x2="280" y2="225" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />

        <circle cx="160" cy="75" r="14" fill="#f59e0b" />
        <rect x="145" y="89" width="30" height="52" rx="5" fill="#18181b" />

        {/* Arms */}
        <line x1="145" y1="105" x2={125 - marchY * 20} y2="135" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
        <line x1="175" y1="105" x2={195 + marchY * 20} y2="135" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />

        {/* Left Leg */}
        <line x1="150" y1="141" x2="140" y2={leftK} stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
        <line x1="140" y1={leftK} x2="140" y2="225" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="140" cy="225" rx="10" ry="4" fill="#334155" />

        {/* Right Leg */}
        <line x1="170" y1="141" x2="180" y2={rightK} stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
        <line x1="180" y1={rightK} x2="180" y2="225" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="180" cy="225" rx="10" ry="4" fill="#334155" />
      </svg>
    );
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-2 border border-slate-800 shadow-2xl">
      {/* Visual Canvas Demo */}
      <div className="w-full h-full max-h-[240px] flex items-center justify-center">
        {renderRealisticTrainer()}
      </div>

      {/* Top Banner Badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          GIF 60 FPS
        </span>
      </div>

      {/* View Mode Toggle (Entraîneur / Biomécanique) */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900/80 backdrop-blur-md p-1 rounded-lg border border-slate-800 text-[10px]">
        <button
          onClick={() => setViewMode('trainer')}
          className={`px-2 py-1 rounded font-medium transition-colors ${
            viewMode === 'trainer' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Coach
        </button>
        <button
          onClick={() => setViewMode('muscles')}
          className={`px-2 py-1 rounded font-medium transition-colors ${
            viewMode === 'muscles' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Muscles
        </button>
      </div>

      {/* Muscle Focus Bar */}
      <div className="absolute bottom-3 inset-x-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800/80 text-xs flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-white">{exercise.targetMuscles}</span>
        </div>
        <span className="text-emerald-400 font-mono font-bold">{exercise.durationSeconds}s / série</span>
      </div>
    </div>
  );
};
