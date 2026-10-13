import React, { useState } from 'react';
import { Download, Smartphone, CheckCircle, Share2, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'fr' | 'ar' | 'darija';
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose, lang = 'darija' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [justInstalled, setJustInstalled] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setJustInstalled(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }
  };

  const texts = {
    darija: {
      title: 'تيليشارجي تطبيق FitMaghrib دابا',
      subtitle: 'خدّام بحال تطبيق أصلي فالتلفون (Android & iPhone) بدون الحاجة لـ Play Store ولا App Store!',
      badge: 'تطبيق احترافي PWA',
      featuresTitle: 'مميزات التطبيق فالتلفون:',
      f1: 'دخول سريع بضغطة وحدة من شاشة هاتفك الرئيسية',
      f2: 'صوتيات وتمارين رياضية وموسيقى سريعة وبدون انقطاع',
      f3: 'حفظ البروفايل، الأوزان، والريجيم حتى بلا كونيكسيون دائم',
      btnInstall: '📲 تيليشارجي التطبيق دابا فالتلفون',
      btnInstalled: '✅ التطبيق مثبّت بنجاح فالتلفون!',
      iosTitle: 'طريقة التثبيت على iPhone / iPad (Safari):',
      iosStep1: '1. ضغط على زر المشاركة (Share / Partager ⎋) فأسفل متصفح Safari.',
      iosStep2: '2. هبط لتحت شوية وضغط على «Sur l’écran d’accueil» أو «Add to Home Screen ➕».',
      iosStep3: '3. ضغط على «Ajouter / Add» فالفوق وغاتلقا أيقونة FitMaghrib فالتلفون ديالك!',
      close: 'إغلاق',
    },
    ar: {
      title: 'تثبيت تطبيق FitMaghrib على هاتفك',
      subtitle: 'يعمل كتطبيق أصلي ومباشر على أجهزة Android و iPhone دون الحاجة لمتجر التطبيقات!',
      badge: 'تطبيق ويب تقدمي احترافي PWA',
      featuresTitle: 'مميزات التطبيق المثبت:',
      f1: 'تشغيل فوري بلمسة واحدة من الشاشة الرئيسية',
      f2: 'استماع سلس للموسيقى ومؤقت التمارين الرياضية',
      f3: 'حفظ تقدم الأوزان وبرامج التغذية محلياً وسحابياً',
      btnInstall: '📲 تثبيت التطبيق الآن',
      btnInstalled: '✅ تم تثبيت التطبيق بنجاح!',
      iosTitle: 'طريقة التثبيت على هواتف iPhone / iPad:',
      iosStep1: '1. اضغط على زر المشاركة (Share ⎋) في متصفح Safari.',
      iosStep2: '2. مرر للأسفل واختر «إضافة إلى الشاشة الرئيسية» (Add to Home Screen ➕).',
      iosStep3: '3. انقر على «إضافة» وستظهر أيقونة التطبيق في شاشتك الرئيسية!',
      close: 'إغلاق',
    },
    fr: {
      title: 'Installer l\'application FitMaghrib',
      subtitle: 'Fonctionne comme une application native sur Android & iPhone sans passer par les stores !',
      badge: 'Application PWA Officielle',
      featuresTitle: 'Avantages de l\'installation :',
      f1: 'Accès ultra-rapide direct depuis votre écran d\'accueil',
      f2: 'Musique d\'entraînement, chronomètre & suivi de poids',
      f3: 'Fonctionne hors-ligne et consomme très peu de batterie',
      btnInstall: '📲 Installer sur mon téléphone',
      btnInstalled: '✅ Application installée avec succès !',
      iosTitle: 'Installation sur iPhone / iPad (Safari) :',
      iosStep1: '1. Appuyez sur le bouton Partager (⎋) en bas de Safari.',
      iosStep2: '2. Faites défiler et touchez « Sur l\'écran d\'accueil » (➕).',
      iosStep3: '3. Touchez « Ajouter » en haut à droite.',
      close: 'Fermer',
    },
  }[lang] || {
    title: 'Installer l\'application FitMaghrib',
    subtitle: 'Application PWA pour Android & iOS',
    badge: 'PWA',
    featuresTitle: 'Avantages :',
    f1: 'Accès direct écran d\'accueil',
    f2: 'Chrono et musique',
    f3: 'Hors-ligne',
    btnInstall: '📲 Installer l\'application',
    btnInstalled: '✅ Installé !',
    iosTitle: 'Installation iPhone :',
    iosStep1: '1. Bouton Partager dans Safari',
    iosStep2: '2. Ajouter sur l\'écran d\'accueil',
    iosStep3: '3. Confirmer',
    close: 'Fermer',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-500/30 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with App Logo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-2xl p-1 bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 shadow-xl shadow-emerald-950/50 flex items-center justify-center shrink-0">
            <img
              src="/icon.svg"
              alt="FitMaghrib Logo"
              className="w-full h-full object-contain rounded-xl"
            />
            <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase shadow">
              PRO
            </span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-1 border border-emerald-500/30">
              <Smartphone className="w-3.5 h-3.5" />
              {texts.badge}
            </div>
            <h3 className="text-xl font-black text-white tracking-tight">
              FitMaghrib
            </h3>
            <p className="text-xs text-slate-400">
              {texts.title}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 mb-5 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/5">
          {texts.subtitle}
        </p>

        {/* Feature bullets */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            {texts.featuresTitle}
          </h4>
          <div className="grid gap-2 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{texts.f1}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{texts.f2}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{texts.f3}</span>
            </div>
          </div>
        </div>

        {/* Action button based on state */}
        <div className="space-y-3">
          {isInstalled || justInstalled ? (
            <div className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-bold text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              {texts.btnInstalled}
            </div>
          ) : isInstallable ? (
            <button
              onClick={handleInstallClick}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
            >
              <Download className="w-5 h-5 animate-bounce" />
              {texts.btnInstall}
            </button>
          ) : null}

          {/* iOS Safari instructions if on iOS or if install prompt not natively fired */}
          {(isIOS || (!isInstallable && !isInstalled)) && (
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 text-xs space-y-2.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Share2 className="w-4 h-4" />
                <span>{texts.iosTitle}</span>
              </div>
              <p className="text-slate-300">{texts.iosStep1}</p>
              <p className="text-slate-300 flex items-center gap-1.5">
                <span>{texts.iosStep2}</span>
                <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" />
              </p>
              <p className="text-slate-300">{texts.iosStep3}</p>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold text-center transition"
          >
            {texts.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export const PWAInstallButton: React.FC<{ lang?: 'fr' | 'ar' | 'darija' }> = ({ lang = 'darija' }) => {
  const { isInstalled } = usePWAInstall();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const label = {
    darija: '📱 تيليشارجي التطبيق',
    ar: '📱 تثبيت التطبيق',
    fr: '📱 Installer l\'App',
  }[lang] || '📱 Installer';

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/40 transition-all active:scale-95 border border-emerald-400/30 whitespace-nowrap shrink-0"
        title="Installer FitMaghrib sur votre smartphone"
      >
        <Download className="w-3.5 h-3.5 animate-pulse shrink-0" />
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden text-[10px] font-bold">App</span>
        {isInstalled && (
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 shrink-0" title="Installé" />
        )}
      </button>

      <PWAInstallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </>
  );
};
