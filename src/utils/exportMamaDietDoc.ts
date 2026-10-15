import { MAMA_LAAZIZA_15_DAYS_MEALS } from '../data/mamaMeals';
import { Language } from '../types';

export function generateMamaDietDocHtml(lang: Language = 'fr'): string {
  const isArabic = lang === 'ar' || lang === 'darija';
  const dir = isArabic ? 'rtl' : 'ltr';

  const docTitle = isArabic
    ? 'برنامج التغذية الخاص بماما لعزيزة - أسبوعان (15 يوماً)'
    : 'Programme Alimentaire Médical Mama Laaziza - 2 Semaines (15 Jours)';

  const subtitle = isArabic
    ? 'حمية تثبيت 64 كلغ: بدون ملح، بدون سكر، ألياف رطبة للمصران الحساس، وحوت الميرلا والسردين لفيتامين D'
    : 'Stabilisation 64 kg : Zéro sel, Zéro sucre, Fibres douces pour côlon sensible, Merlan & Sardines au four';

  let daysHtml = '';

  MAMA_LAAZIZA_15_DAYS_MEALS.forEach((day, index) => {
    const isLast = index === MAMA_LAAZIZA_15_DAYS_MEALS.length - 1;
    const dayTitle = isArabic ? `اليوم ${day.dayNumber} (الأسبوع ${day.week})` : `JOUR ${day.dayNumber} (Semaine ${day.week})`;
    const ftourLabel = isArabic ? 'الفطور (Ftour)' : 'Petit-déjeuner (Ftour)';
    const ghdaLabel = isArabic ? 'الغداء (Ghdha)' : 'Déjeuner (Ghdha)';
    const kskroutLabel = isArabic ? 'كاسكروط / اللمجة (Goûter)' : 'Collation / Goûter (Kskrout)';
    const achaLabel = isArabic ? 'العشاء (3cha)' : 'Dîner léger (3cha)';
    const waterLabel = isArabic ? '💧 ترطيب وشرب الماء الدافئ' : '💧 Hydratation & Eau Tiède';
    const adviceLabel = isArabic ? '🩺 نصيحة اليوم الطبية لماما لعزيزة' : '🩺 Conseil Médical Spécifique Mama Laaziza';

    const bTitle = day.breakfast.title[lang] || day.breakfast.title.fr;
    const bDesc = day.breakfast.description[lang] || day.breakfast.description.fr;
    const bNotes = day.breakfast.specialNotes ? (day.breakfast.specialNotes[lang] || day.breakfast.specialNotes.fr) : '';

    const lTitle = day.lunch.title[lang] || day.lunch.title.fr;
    const lDesc = day.lunch.description[lang] || day.lunch.description.fr;
    const lNotes = day.lunch.specialNotes ? (day.lunch.specialNotes[lang] || day.lunch.specialNotes.fr) : '';

    const sTitle = day.snack.title[lang] || day.snack.title.fr;
    const sDesc = day.snack.description[lang] || day.snack.description.fr;

    const dTitle = day.dinner.title[lang] || day.dinner.title.fr;
    const dDesc = day.dinner.description[lang] || day.dinner.description.fr;

    const water = day.hydrationTip[lang] || day.hydrationTip.fr;
    const pAdvice = day.profileSpecificAdvice.p2[lang] || day.profileSpecificAdvice.p2.fr;

    daysHtml += `
    <div class="day-page" style="page-break-after: always; padding: 25px 30px; font-family: 'Segoe UI', Arial, sans-serif; direction: ${dir};">
      <!-- Header Banner -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border-bottom: 3px solid #059669;">
        <tr>
          <td style="padding: 10px 0; text-align: ${isArabic ? 'right' : 'left'};">
            <span style="background-color: #059669; color: #ffffff; padding: 4px 12px; font-size: 13px; font-weight: bold; border-radius: 4px; display: inline-block;">
              ${dayTitle}
            </span>
            <h1 style="color: #064e3b; margin: 8px 0 4px 0; font-size: 22px;">FitMaghrib PRO · Mama Laaziza</h1>
            <p style="color: #047857; margin: 0; font-size: 13px; font-weight: 600;">${subtitle}</p>
          </td>
          <td style="text-align: ${isArabic ? 'left' : 'right'}; vertical-align: top; padding: 10px 0;">
            <span style="font-size: 12px; color: #475569; font-weight: bold; border: 1px solid #cbd5e1; padding: 5px 10px; border-radius: 6px; display: inline-block;">
              ${isArabic ? 'الميزان المستهدف: 64 كلغ' : 'Poids Cible : 64 kg'}
            </span>
          </td>
        </tr>
      </table>

      <!-- Breakfast (Ftour) -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
        <tr>
          <td style="padding: 12px 16px;">
            <div style="color: #166534; font-size: 14px; font-weight: bold; margin-bottom: 4px;">
              🍳 ${ftourLabel} · <span style="color: #047857; font-size: 12px;">~${day.breakfast.caloriesApprox} kcal</span>
            </div>
            <div style="font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 4px;">${bTitle}</div>
            <div style="font-size: 12px; color: #334155; line-height: 1.5;">${bDesc}</div>
            ${bNotes ? `<div style="margin-top: 6px; font-size: 11px; color: #047857; font-style: italic;">💡 ${bNotes}</div>` : ''}
          </td>
        </tr>
      </table>

      <!-- Lunch (Ghdha) -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
        <tr>
          <td style="padding: 12px 16px;">
            <div style="color: #166534; font-size: 14px; font-weight: bold; margin-bottom: 4px;">
              🍲 ${ghdaLabel} · <span style="color: #047857; font-size: 12px;">~${day.lunch.caloriesApprox} kcal</span>
            </div>
            <div style="font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 4px;">${lTitle}</div>
            <div style="font-size: 12px; color: #334155; line-height: 1.5;">${lDesc}</div>
            ${lNotes ? `<div style="margin-top: 6px; font-size: 11px; color: #047857; font-style: italic;">💡 ${lNotes}</div>` : ''}
          </td>
        </tr>
      </table>

      <!-- Snack (Kskrout) -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px;">
        <tr>
          <td style="padding: 12px 16px;">
            <div style="color: #92400e; font-size: 14px; font-weight: bold; margin-bottom: 4px;">
              🍎 ${kskroutLabel} · <span style="color: #b45309; font-size: 12px;">~${day.snack.caloriesApprox} kcal</span>
            </div>
            <div style="font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 4px;">${sTitle}</div>
            <div style="font-size: 12px; color: #334155; line-height: 1.5;">${sDesc}</div>
          </td>
        </tr>
      </table>

      <!-- Dinner (3cha) -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px;">
        <tr>
          <td style="padding: 12px 16px;">
            <div style="color: #115e59; font-size: 14px; font-weight: bold; margin-bottom: 4px;">
              🥣 ${achaLabel} · <span style="color: #0f766e; font-size: 12px;">~${day.dinner.caloriesApprox} kcal</span>
            </div>
            <div style="font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 4px;">${dTitle}</div>
            <div style="font-size: 12px; color: #334155; line-height: 1.5;">${dDesc}</div>
          </td>
        </tr>
      </table>

      <!-- Hydration & Special Advice -->
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
        <tr>
          <td style="padding: 12px 16px; width: 50%; vertical-align: top; border-${isArabic ? 'left' : 'right'}: 1px solid #e2e8f0;">
            <div style="font-size: 12px; font-weight: bold; color: #0284c7; margin-bottom: 4px;">${waterLabel}</div>
            <div style="font-size: 11px; color: #334155; line-height: 1.4;">${water}</div>
          </td>
          <td style="padding: 12px 16px; width: 50%; vertical-align: top;">
            <div style="font-size: 12px; font-weight: bold; color: #059669; margin-bottom: 4px;">${adviceLabel}</div>
            <div style="font-size: 11px; color: #334155; line-height: 1.4;">${pAdvice}</div>
          </td>
        </tr>
      </table>

      <!-- Footer of the page -->
      <div style="margin-top: 25px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 10px;">
        FitMaghrib PRO · Page ${day.dayNumber} / ${MAMA_LAAZIZA_15_DAYS_MEALS.length} · Régime Médical Personnalisé
      </div>
    </div>
    ${!isLast ? '<br clear="all" style="page-break-before: always; mso-break-type: section-break;" />' : ''}
    `;
  });

  return `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>${docTitle}</title>
      <style>
        @page Section1 {
          size: 21.0cm 29.7cm;
          margin: 1.8cm 1.8cm 1.8cm 1.8cm;
          mso-header-margin: 1.0cm;
          mso-footer-margin: 1.0cm;
          mso-paper-source: 0;
        }
        div.Section1 {
          page: Section1;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
        }
        .day-page {
          page-break-after: always;
          page-break-inside: avoid;
        }
        @media print {
          .day-page {
            page-break-after: always;
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${daysHtml}
      </div>
    </body>
    </html>
  `;
}

export function downloadMamaDietDoc(lang: Language = 'fr') {
  const content = generateMamaDietDocHtml(lang);
  const blob = new Blob(['\ufeff', content], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = lang === 'fr' 
    ? 'Programme_Alimentaire_Mama_Laaziza_2Semaines.doc' 
    : 'برنامج_ماكلة_ماما_لعزيزة_أسبوعين.doc';
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
