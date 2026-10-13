import React, { useState } from 'react';
import { Download, Smartphone, CheckCircle, Share2, PlusSquare, X, MoreVertical, Compass, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'fr' | 'ar' | 'darija';
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose, lang = 'darija' }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, isInAppBrowser, install } = usePWAInstall();
  const [justInstalled, setJustInstalled] = useState(false);
  const [showManualGuide, setShowManualGuide] = useState(false);
  const [activeGuideTab, setActiveGuideTab] = useState<'android' | 'ios'>(isIOS ? 'ios' : 'android');

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
        setTimeout(() => {
          onClose();
        }, 2200);
        return;
      }
    }
    // If native prompt wasn't triggered or user cancelled, show direct step-by-step guide
    setShowManualGuide(true);
  };

  const texts = {
    darija: {
      title: 'تيليشارجي تطبيق FitMaghrib دابا',
      subtitle: 'خدّام بحال تطبيق أصلي فالتلفون (Android & iPhone) بدون الحاجة لـ Play Store ولا App Store!',
      badge: 'تطبيق رسمي PWA للأجهزة الذكية',
      featuresTitle: 'مميزات التطبيق فالتلفون ديالك:',
      f1: 'دخول مباشر وسريع من شاشة الهاتف الرئيسية بضغطة وحدة',
      f2: 'صوتيات وتمارين رياضية وموسيقى سريعة وبدون انقطاع',
      f3: 'حفظ البروفايل، الأوزان، وجداول التغذية حتى بلا كونيكسيون',
      btnInstall: '📲 تيليشارجي التطبيق دابا فالتلفون',
      btnInstalled: '✅ التطبيق مثبّت بنجاح فالتلفون!',
      inAppWarning: '⚠️ راك فاتح الرابط داخل تطبيق (WhatsApp أو Instagram). خاصك تفتحو فـ Chrome أو Safari باش يتيليشارجا فالتلفون.',
      inAppBtn: 'فتح في المتصفح الخارجي',
      guideTitle: 'طريقة التثبيت فالتلفون:',
      androidTab: 'هواتف Android (Chrome)',
      iosTab: 'هواتف iPhone (Safari)',
      androidStep1: '1. ضغط على النقط الثلاث (⋮) فالفوق على اليمين فمتصفح Chrome.',
      androidStep2: '2. ختار «تثبيت التطبيق» (Installer l\'application) أو «إضافة إلى الشاشة الرئيسية» (Ajouter à l\'écran d\'accueil).',
      androidStep3: '3. أكد التثبيت و غاتبان لك الأيقونة فالتلفون ديالك فوراً!',
      iosStep1: '1. ضغط على زر المشاركة (Share / Partager ⎋) فأسفل متصفح Safari.',
      iosStep2: '2. هبط لتحت شوية وضغط على «Sur l’écran d’accueil» أو «Add to Home Screen ➕».',
      iosStep3: '3. ضغط على «Ajouter / Add» فالفوق وغاتلقا أيقونة FitMaghrib فالتلفون ديالك!',
      close: 'إغلاق',
    },
    ar: {
      title: 'تثبيت تطبيق FitMaghrib على هاتفك',
      subtitle: 'يعمل كتطبيق أصلي ومباشر على أجهزة Android و iPhone دون الحاجة لمتجر التطبيقات!',
      badge: 'تطبيق ويب تقدمي احترافي PWA',
      featuresTitle: 'مميزات التطبيق المثبت على الهاتف:',
      f1: 'تشغيل فوري بلمسة واحدة من شاشتك الرئيسية',
      f2: 'استماع سلس للموسيقى ومؤقت التمارين الرياضية',
      f3: 'حفظ تقدم الأوزان وبرامج التغذية محلياً وسحابياً',
      btnInstall: '📲 تثبيت التطبيق الآن على الهاتف',
      btnInstalled: '✅ تم تثبيت التطبيق بنجاح!',
      inAppWarning: '⚠️ أنت تفتح الرابط من داخل تطبيق (WhatsApp أو Instagram). يرجى فتحه في متصفح Chrome أو Safari لتثبيته.',
      inAppBtn: 'فتح في المتصفح الرئيسي',
      guideTitle: 'خطوات التثبيت المباشر:',
      androidTab: 'أجهزة أندرويد (Chrome)',
      iosTab: 'أجهزة آيفون (Safari)',
      androidStep1: '1. انقر على زر القائمة (الثلاث نقاط ⋮) أعلى متصفح Chrome.',
      androidStep2: '2. اختر «تثبيت التطبيق» (Install app) أو «إضافة إلى الشاشة الرئيسية».',
      androidStep3: '3. اضغط «تثبيت» وستظهر أيقونة FitMaghrib مباشرة في قائمة تطبيقاتك!',
      iosStep1: '1. اضغط على زر المشاركة (Share ⎋) في أسفل متصفح Safari.',
      iosStep2: '2. مرر للأسفل واختر «إضافة إلى الشاشة الرئيسية» (Add to Home Screen ➕).',
      iosStep3: '3. انقر على «إضافة» وستظهر أيقونة التطبيق في شاشتك الرئيسية فوراً!',
      close: 'إغلاق',
    },
    fr: {
      title: 'Installer l\'application FitMaghrib',
      subtitle: 'Fonctionne comme une application native sur Android & iPhone sans passer par Google Play ou App Store !',
      badge: 'Application PWA Officielle',
      featuresTitle: 'Avantages de l\'installation :',
      f1: 'Accès ultra-rapide direct depuis votre écran d\'accueil',
      f2: 'Musique d\'entraînement, chronomètre & suivi de poids',
      f3: 'Fonctionne hors-ligne et consomme très peu de batterie',
      btnInstall: '📲 Installer sur mon téléphone',
      btnInstalled: '✅ Application installée avec succès !',
      inAppWarning: '⚠️ Vous êtes dans un navigateur interne (WhatsApp / Instagram). Ouvrez le lien dans Chrome ou Safari pour installer.',
      inAppBtn: 'Ouvrir dans le navigateur',
      guideTitle: 'Instructions d\'installation :',
      androidTab: 'Android (Chrome)',
      iosTab: 'iPhone (Safari)',
      androidStep1: '1. Appuyez sur les 3 points verticaux (⋮) en haut à droite de Google Chrome.',
      androidStep2: '2. Sélectionnez « Installer l\'application » ou « Ajouter à l\'écran d\'accueil ».',
      androidStep3: '3. Confirmez l\'installation pour retrouver l\'icône FitMaghrib sur votre smartphone !',
      iosStep1: '1. Appuyez sur le bouton Partager (⎋) au bas de Safari.',
      iosStep2: '2. Faites défiler et touchez « Sur l\'écran d\'accueil » (➕).',
      iosStep3: '3. Touchez « Ajouter » en haut à droite.',
      close: 'Fermer',
    },
  }[lang] || {
    title: 'Installer FitMaghrib',
    subtitle: 'Application PWA pour Android & iOS',
    badge: 'PWA Mobile',
    featuresTitle: 'Avantages :',
    f1: 'Accès direct écran d\'accueil',
    f2: 'Chrono et musique sans coupure',
    f3: 'Hors-ligne',
    btnInstall: '📲 Installer l\'application',
    btnInstalled: '✅ Installé !',
    inAppWarning: 'Ouvrez dans Chrome ou Safari pour installer.',
    inAppBtn: 'Ouvrir dans le navigateur',
    guideTitle: 'Instructions :',
    androidTab: 'Android',
    iosTab: 'iPhone',
    androidStep1: '1. Cliquez sur le menu (⋮) dans Chrome',
    androidStep2: '2. Cliquez « Installer l\'application »',
    androidStep3: '3. Confirmez',
    iosStep1: '1. Bouton Partager dans Safari',
    iosStep2: '2. Ajouter sur l\'écran d\'accueil',
    iosStep3: '3. Confirmer',
    close: 'Fermer',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-emerald-500/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition z-10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-1 space-y-4">
          {/* Header with App Logo */}
          <div className="flex items-center gap-3.5 pt-1">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-1 bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 shadow-xl shadow-emerald-950/50 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="FitMaghrib Logo"
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase shadow">
                PRO
              </span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold mb-1 border border-emerald-500/30">
                <Smartphone className="w-3.5 h-3.5" />
                {texts.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                FitMaghrib PRO
              </h3>
              <p className="text-xs text-slate-300">
                {texts.title}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
            {texts.subtitle}
          </p>

          {/* Warning for in-app browsers */}
          {isInAppBrowser && (
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs space-y-2">
              <p className="font-semibold">{texts.inAppWarning}</p>
              <button
                onClick={() => {
                  window.open(window.location.href, '_system');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {texts.inAppBtn}
              </button>
            </div>
          )}

          {/* Feature bullets */}
          <div className="space-y-1.5 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              {texts.featuresTitle}
            </h4>
            <div className="grid gap-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{texts.f1}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{texts.f2}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{texts.f3}</span>
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <div className="pt-1 space-y-2">
            {isInstalled || justInstalled ? (
              <div className="w-full py-3 px-4 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-bold text-center flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                {texts.btnInstalled}
              </div>
            ) : (
              <button
                onClick={handleInstallClick}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Download className="w-5 h-5 animate-bounce shrink-0" />
                <span>{texts.btnInstall}</span>
              </button>
            )}

            {/* Toggle manual guide */}
            {!isInstalled && (
              <button
                onClick={() => setShowManualGuide(!showManualGuide)}
                className="w-full text-center text-xs text-emerald-400 hover:text-emerald-300 py-1 underline font-medium cursor-pointer"
              >
                {showManualGuide ? '▲ إخفاء التعليمات' : '▼ كيفاش تيليشارجي يدوياً فالتلفون ديالك؟'}
              </button>
            )}
          </div>

          {/* Manual Step-by-Step Guide for Android and iOS */}
          {(showManualGuide || isIOS || !isInstallable) && !isInstalled && (
            <div className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                <span className="text-xs font-bold text-slate-200">{texts.guideTitle}</span>
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-700 text-[11px]">
                  <button
                    onClick={() => setActiveGuideTab('android')}
                    className={`px-2 py-0.5 rounded-md font-bold transition ${
                      activeGuideTab === 'android'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Android
                  </button>
                  <button
                    onClick={() => setActiveGuideTab('ios')}
                    className={`px-2 py-0.5 rounded-md font-bold transition ${
                      activeGuideTab === 'ios'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    iPhone
                  </button>
                </div>
              </div>

              {activeGuideTab === 'android' ? (
                <div className="text-xs space-y-2 text-slate-200">
                  <div className="flex items-start gap-2">
                    <MoreVertical className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{texts.androidStep1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Download className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{texts.androidStep2}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{texts.androidStep3}</span>
                  </div>
                </div>
              ) : (
                <div className="text-xs space-y-2 text-slate-200">
                  <div className="flex items-start gap-2">
                    <Share2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{texts.iosStep1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <PlusSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{texts.iosStep2}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{texts.iosStep3}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold text-center transition cursor-pointer"
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

  const labels = {
    darija: { full: '📱 تيليشارجي التطبيق', short: '📱 تيليشارجي' },
    ar: { full: '📱 تثبيت التطبيق', short: '📱 تثبيت' },
    fr: { full: '📱 Installer l\'App', short: '📱 Installer' },
  }[lang] || { full: '📱 Installer', short: '📱 Installer' };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-black shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/40 transition-all active:scale-95 border border-emerald-400/30 whitespace-nowrap shrink-0 cursor-pointer"
        title="Installer FitMaghrib sur votre smartphone"
      >
        <Download className="w-3.5 h-3.5 animate-pulse shrink-0" />
        <span className="hidden sm:inline">{labels.full}</span>
        <span className="sm:hidden text-[11px] font-black">{labels.short}</span>
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

export const PWAInstallBanner: React.FC<{ lang?: 'fr' | 'ar' | 'darija' }> = ({ lang = 'darija' }) => {
  const { isInstalled } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isInstalled || isDismissed) {
    return null;
  }

  const texts = {
    darija: {
      title: 'تيليشارجي FitMaghrib فالتلفون',
      subtitle: 'تطبيق أصلي سريع بدون Play Store',
      btn: 'تيليشارجي',
    },
    ar: {
      title: 'تثبيت FitMaghrib على الهاتف',
      subtitle: 'تطبيق احترافي وسريع بضغطة واحدة',
      btn: 'تثبيت الآن',
    },
    fr: {
      title: 'Installer l\'application FitMaghrib',
      subtitle: 'Accès rapide sur votre écran d\'accueil',
      btn: 'Installer',
    },
  }[lang] || {
    title: 'Installer FitMaghrib',
    subtitle: 'Accès rapide sur écran d\'accueil',
    btn: 'Installer',
  };

  return (
    <>
      <div className="sm:hidden fixed bottom-14 left-2 right-2 z-40 bg-slate-900/95 backdrop-blur-md text-white p-2.5 rounded-2xl border border-emerald-500/40 shadow-2xl flex items-center justify-between gap-2.5 animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/logo.png"
            alt="FitMaghrib Logo"
            className="w-9 h-9 rounded-xl object-cover shrink-0 ring-1 ring-emerald-500/30"
          />
          <div className="min-w-0">
            <h5 className="text-xs font-black text-white truncate flex items-center gap-1">
              <span>{texts.title}</span>
              <span className="text-[9px] bg-amber-400 text-slate-950 px-1 rounded font-bold">PRO</span>
            </h5>
            <p className="text-[10px] text-slate-300 truncate">
              {texts.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-black shadow-md shadow-emerald-600/30 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            {texts.btn}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PWAInstallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </>
  );
};
