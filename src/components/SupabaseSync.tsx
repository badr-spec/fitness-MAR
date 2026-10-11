import React, { useState } from 'react';
import { Database, Copy, Check, ExternalLink, Globe, Terminal, Shield, RefreshCw, Download, FolderArchive, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import { downloadProjectZip } from '../utils/zipExporter';

interface Props {
  lang: Language;
}

export const SupabaseSync: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [supabaseUrl, setSupabaseUrl] = useState(() => localStorage.getItem('fitmaghrib_sb_url') || '');
  const [supabaseKey, setSupabaseKey] = useState(() => localStorage.getItem('fitmaghrib_sb_key') || '');
  const [copiedSql, setCopiedSql] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const sqlSchema = `-- ==========================================
-- FitMaghrib - Supabase PostgreSQL Schema
-- ==========================================

-- 1. Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS fitmaghrib_profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  height NUMERIC NOT NULL,
  walking_habit TEXT,
  medical_conditions TEXT[],
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Table de progression des pesées
CREATE TABLE IF NOT EXISTS fitmaghrib_progress_logs (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  profile_id TEXT REFERENCES fitmaghrib_profiles(id) ON DELETE CASCADE,
  log_date DATE NOT NULL DEFAULT CURRENT_DATE,
  weight NUMERIC NOT NULL,
  waist_cm NUMERIC,
  workout_min INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Activer Row Level Security (RLS)
ALTER TABLE fitmaghrib_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE fitmaghrib_progress_logs ENABLE ROW LEVEL SECURITY;

-- Politique d'accès libre en lecture/écriture pour la clé publique anon
CREATE POLICY "Public anonymous access" ON fitmaghrib_profiles
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Public anonymous access logs" ON fitmaghrib_progress_logs
  FOR ALL USING (true) WITH CHECK (true);
`;

  const handleCopySql = () => {
    navigator.clipboard.writeText(sqlSchema);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const handleSaveCredentials = () => {
    localStorage.setItem('fitmaghrib_sb_url', supabaseUrl);
    localStorage.setItem('fitmaghrib_sb_key', supabaseKey);
    setStatusMessage(lang === 'darija' ? 'تم حفظ معلومات Supabase بنجاح !' : 'Identifiants Supabase enregistrés !');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleTestConnection = async () => {
    if (!supabaseUrl || !supabaseKey) {
      setTestStatus('error');
      setStatusMessage(lang === 'darija' ? 'المرجو إدخال رابط ومشروع سوبابيز والساروت' : 'Veuillez saisir l\'URL et la clé Supabase.');
      return;
    }

    try {
      setTestStatus('testing');
      const sb = createClient(supabaseUrl.trim(), supabaseKey.trim());
      const { error } = await sb.from('fitmaghrib_profiles').select('id').limit(1);

      if (error && error.code !== 'PGRST116' && !error.message.includes('relation "fitmaghrib_profiles" does not exist')) {
        throw error;
      }

      setTestStatus('success');
      setStatusMessage(
        lang === 'darija'
          ? 'الاتصال مع Supabase ناجح 100% !'
          : 'Connexion Supabase réussie avec succès !'
      );
    } catch (err: unknown) {
      setTestStatus('error');
      const msg = err instanceof Error ? err.message : 'Erreur de connexion';
      setStatusMessage(`Erreur : ${msg}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* DIRECT ZIP DOWNLOAD & GITHUB EXPORT BOX */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md mb-3">
            <FolderArchive className="w-4 h-4 text-emerald-200" />
            <span>{lang === 'darija' ? 'تيليشارجي المشروع مباشرة' : 'Téléchargement Direct du Projet'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            {lang === 'darija'
              ? 'باغي تحط المشروع فـ GitHub بنقرة واحدة ؟ ها هو ملف الـ .ZIP واجد !'
              : 'Exportez le projet complet en .ZIP prêt pour GitHub & Vercel'}
          </h3>

          <p className="text-xs sm:text-sm text-emerald-50 mt-2 leading-relaxed">
            {lang === 'darija'
              ? 'كليكي على الزر لتحت باش ينزل عندك ملف fitmaghrib-project.zip فـ Downloads ديالك. فكو وحطو مباشرة فـ github.com عبر المتصفح.'
              : 'Cliquez ci-dessous pour télécharger instantanément l\'archive fitmaghrib-project.zip contenant tous les fichiers sources prêts pour GitHub.'}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => downloadProjectZip()}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all active:scale-95"
            >
              <Download className="w-5 h-5 text-emerald-700" />
              {lang === 'darija' ? '📦 تيليشارجي كود المشروع كامل (.ZIP)' : '📦 Télécharger le Projet Complet (.ZIP)'}
            </button>
          </div>
        </div>
      </div>

      {/* Supabase Config Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-slate-900">{t.supabase_title}</h3>
        </div>
        <p className="text-xs text-slate-500 mb-6">{t.supabase_desc}</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.supabase_url}
            </label>
            <input
              type="text"
              value={supabaseUrl}
              onChange={(e) => setSupabaseUrl(e.target.value)}
              placeholder="https://xyzcompany.supabase.co"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.supabase_anon_key}
            </label>
            <input
              type="password"
              value={supabaseKey}
              onChange={(e) => setSupabaseKey(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleSaveCredentials}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors"
            >
              {t.save_config}
            </button>

            <button
              onClick={handleTestConnection}
              disabled={testStatus === 'testing'}
              className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              {testStatus === 'testing' && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
              {t.test_connection}
            </button>

            <button
              onClick={() => {
                const logs = localStorage.getItem('fitmaghrib_logs') || '{}';
                const blob = new Blob([logs], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `fitmaghrib_backup_${new Date().toISOString().split('T')[0]}.json`;
                a.click();
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
            >
              📥 Exporter Données (JSON)
            </button>
          </div>

          {statusMessage && (
            <div
              className={`p-3 rounded-xl text-xs font-medium ${
                testStatus === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : testStatus === 'error'
                  ? 'bg-rose-50 text-rose-800 border border-rose-200'
                  : 'bg-sky-50 text-sky-800 border border-sky-200'
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>
      </div>

      {/* SQL Script Generator */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {lang === 'darija' ? 'كود SQL ديال جداول سوبابيز :' : 'Script SQL pour créer les tables Supabase :'}
            </h4>
            <p className="text-xs text-slate-500">
              {lang === 'darija' ? 'كوليه فـ Supabase SQL Editor واضغط Run' : 'Copiez et collez dans l\'éditeur SQL de Supabase puis cliquez sur "Run".'}
            </p>
          </div>

          <button
            onClick={handleCopySql}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSql ? t.sql_copied : t.copy_sql}
          </button>
        </div>

        <pre className="p-4 bg-slate-950 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto max-h-60 leading-relaxed">
          {sqlSchema}
        </pre>
      </div>

      {/* GitHub & Vercel Deployment Instructions */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-emerald-400" />
          <h4 className="font-bold text-white text-base">{t.deploy_vercel_guide}</h4>
        </div>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
            <span className="font-semibold text-emerald-400 block">
              1. {lang === 'darija' ? 'رفع الكود على GitHub :' : 'Initialiser et pousser sur GitHub :'}
            </span>
            <div className="bg-black/40 p-2.5 rounded-lg font-mono text-[11px] text-slate-300 space-y-1">
              <p>git init</p>
              <p>git add .</p>
              <p>git commit -m "feat: FitMaghrib perte de poids"</p>
              <p>git remote add origin https://github.com/votre-user/fitmaghrib.git</p>
              <p>git push -u origin main</p>
            </div>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
            <span className="font-semibold text-emerald-400 block">
              2. {lang === 'darija' ? 'النشر على Vercel بنقرة واحدة :' : 'Déployer sur Vercel :'}
            </span>
            <p>
              {lang === 'darija'
                ? 'دخل لـ vercel.com، ربط حساب GitHub ديالك، وعزل مستودع FitMaghrib. فيرسل غاتكتاشف Vite تلقائياً وغادير Build و Deploy مباشرة.'
                : 'Connectez-vous sur Vercel.com, importez votre dépôt GitHub. Vercel détecte automatiquement le projet Vite et génère l\'URL publique en quelques secondes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
