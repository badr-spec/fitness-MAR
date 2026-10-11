import React, { useState } from 'react';
import { PlusCircle, TrendingDown, Calendar, Scale, Award, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProgressLogEntry, UserProfile, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface Props {
  profile: UserProfile;
  lang: Language;
  logs: ProgressLogEntry[];
  onAddLog: (entry: ProgressLogEntry) => void;
  onDeleteLog: (id: string) => void;
}

export const ProgressTracker: React.FC<Props> = ({ profile, lang, logs, onAddLog, onDeleteLog }) => {
  const t = TRANSLATIONS[lang];
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWeight, setNewWeight] = useState<number>(profile.weight);
  const [newWaist, setNewWaist] = useState<number>(95);
  const [newNotes, setNewNotes] = useState('');
  const [newWorkoutMin, setNewWorkoutMin] = useState<number>(profile.recommendedDuration);

  // Sorting logs by date descending
  const sortedLogs = [...logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestWeight = sortedLogs[0]?.weight ?? profile.weight;
  const startingWeight = profile.weight;
  const totalLost = Math.max(0, Number((startingWeight - latestWeight).toFixed(1)));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: ProgressLogEntry = {
      id: `log_${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      weight: Number(newWeight),
      waistCircumference: newWaist ? Number(newWaist) : undefined,
      notes: newNotes,
      completedWorkoutMin: Number(newWorkoutMin),
    };

    onAddLog(entry);
    setShowAddModal(false);
    setNewNotes('');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>{t.starting_weight}</span>
            <Scale className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
            {startingWeight} <span className="text-sm font-normal text-slate-500">{t.kg}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>{t.current_weight}</span>
            <Scale className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-600 tabular-nums">
            {latestWeight} <span className="text-sm font-normal text-slate-500">{t.kg}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>{t.total_lost}</span>
            <TrendingDown className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums flex items-center gap-1">
            -{totalLost} <span className="text-sm font-normal text-slate-500">{t.kg}</span>
          </div>
        </div>
      </div>

      {/* Action Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h3 className="font-bold text-slate-900">{t.history}</h3>
          <p className="text-xs text-slate-500">
            {logs.length} {lang === 'darija' ? 'تسجيلات سابقة' : 'pesées enregistrées'}
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <PlusCircle className="w-4 h-4" />
          {t.add_weight_entry}
        </button>
      </div>

      {/* Add Weight Modal Form */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{t.add_weight_entry}</h3>
            <p className="text-xs text-slate-500 mb-5">
              {lang === 'darija' ? 'سجل الوزن ديال اليوم باش تشوف التقدم فالميزان' : 'Renseignez vos mesures pour actualiser votre courbe.'}
            </p>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.weight_entry_label}
                </label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={newWeight}
                  onChange={(e) => setNewWeight(parseFloat(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.waist_label}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={newWaist}
                  onChange={(e) => setNewWaist(parseFloat(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none"
                  placeholder="ex. 92"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'darija' ? 'شحال دقتي د الرياضة اليوم (دقيقة)' : 'Durée des mouvements réalisés (min)'}
                </label>
                <select
                  value={newWorkoutMin}
                  onChange={(e) => setNewWorkoutMin(parseInt(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={0}>0 (Repos)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.notes_label}
                </label>
                <input
                  type="text"
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none"
                  placeholder={lang === 'darija' ? 'حاس براسي خفيف، كملت الحركات كاملين...' : 'Sensations, énergie, respect du menu...'}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  {lang === 'darija' ? 'إلغاء' : 'Annuler'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
                >
                  {t.save_entry}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Logs Table / List */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {sortedLogs.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            {lang === 'darija' ? 'مازال ماسجلتي حتى وزنة. ضغط على قيد وزنة جديدة لفوق.' : 'Aucune pesée enregistrée pour le moment.'}
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {sortedLogs.map((log) => (
              <div key={log.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex flex-col items-center justify-center font-mono text-xs font-bold shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 mb-0.5" />
                    <span className="text-[10px] text-slate-500">{log.date.slice(5)}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold font-mono text-slate-900 tabular-nums">
                        {log.weight} {t.kg}
                      </span>
                      {log.waistCircumference && (
                        <span className="text-xs text-slate-500 font-mono">
                          · {log.waistCircumference} cm
                        </span>
                      )}
                      {log.completedWorkoutMin && log.completedWorkoutMin > 0 && (
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {log.completedWorkoutMin} min sport
                        </span>
                      )}
                    </div>
                    {log.notes && (
                      <p className="text-xs text-slate-500 mt-0.5">{log.notes}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onDeleteLog(log.id)}
                  className="text-slate-300 hover:text-rose-500 transition-colors p-2"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Motivational Card */}
      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
        <Award className="w-6 h-6 text-emerald-600 shrink-0" />
        <p className="text-xs text-emerald-900 font-medium leading-relaxed">
          {lang === 'darija'
            ? 'الاستمرار هو السر ! كل كيلوغرام كايطيح كايخفف 4 كيلوغرام ديال الضغط على الركابي والمفاصل، والدم كايولي يدور خفيف.'
            : 'La régularité prime sur l\'intensité ! Chaque kilo perdu allège de 4 kilos la pression sur les genoux.'}
        </p>
      </div>
    </div>
  );
};
