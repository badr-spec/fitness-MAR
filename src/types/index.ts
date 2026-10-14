export type Language = 'darija' | 'fr' | 'ar';

export type WorkoutDuration = 15 | 30 | 45 | 90;

export type MonthlyWeightGoal = 2 | 4 | 6; // kg per month

export interface UserProfile {
  id: string;
  displayName: string;
  nameKey: string;
  age: number;
  gender: 'male' | 'female';
  weight: number; // in kg
  height: number; // in cm
  walkingHabit: string;
  medicalConditions: string[];
  jointPrecautions: string[];
  lifestyleNotes: string;
  avatarSeed: string;
  recommendedDuration: WorkoutDuration;
  targetWeight3Months: number;
  targetWeight6Months: number;
  dailyCalorieBudget: number;
}

export interface Exercise {
  id: string;
  title: {
    fr: string;
    ar: string;
    darija: string;
  };
  category: 'cardio' | 'strength' | 'mobility' | 'core';
  targetMuscles: string;
  durationSeconds: number;
  repsText: {
    fr: string;
    ar: string;
    darija: string;
  };
  sets: number;
  restSeconds: number;
  kneeSafe: boolean;
  seniorFriendly: boolean;
  intensity: 'low' | 'moderate' | 'high';
  animationType:
    | 'seated_punches'
    | 'glute_bridge'
    | 'wall_pushup'
    | 'standing_march'
    | 'chair_squat'
    | 'arm_circles'
    | 'standing_side_reach'
    | 'straight_leg_raise'
    | 'bird_dog'
    | 'pelvic_tilt'
    | 'step_touch';
  instructions: {
    fr: string[];
    ar: string[];
    darija: string[];
  };
  precautions: {
    fr: string;
    ar: string;
    darija: string;
  };
  youtubeQuery: string;
  musicType: 'energy' | 'pulse' | 'flow' | 'zen';
}

export interface Meal {
  title: {
    fr: string;
    ar: string;
    darija: string;
  };
  description: {
    fr: string;
    ar: string;
    darija: string;
  };
  caloriesApprox: number;
  proteinApprox: number; // grams
  specialNotes?: {
    fr: string;
    ar: string;
    darija: string;
  };
}

export interface DayDietPlan {
  dayNumber: number; // 1 to 14
  week: 1 | 2;
  breakfast: Meal;
  lunch: Meal;
  snack: Meal;
  dinner: Meal;
  hydrationTip: {
    fr: string;
    ar: string;
    darija: string;
  };
  profileSpecificAdvice: {
    p1: { fr: string; ar: string; darija: string };
    p2: { fr: string; ar: string; darija: string };
    p3: { fr: string; ar: string; darija: string };
  };
}

export interface ProgressLogEntry {
  id: string;
  date: string;
  weight: number;
  waistCircumference?: number;
  notes?: string;
  completedWorkoutMin?: number;
}
