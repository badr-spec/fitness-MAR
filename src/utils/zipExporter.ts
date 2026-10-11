import JSZip from 'jszip';

// Capture all files in the project
const sourceFiles = import.meta.glob(
  [
    '/src/**/*.{ts,tsx,css}',
    '../**/*.{ts,tsx,css}',
    '/index.html',
    '/package.json',
    '/tsconfig.json',
    '/vite.config.ts',
    '/vercel.json',
  ],
  { query: '?raw', import: 'default', eager: true }
);

export async function downloadProjectZip() {
  const zip = new JSZip();

  // 1. Root configuration files
  zip.file(
    'vercel.json',
    JSON.stringify(
      {
        framework: 'vite',
        buildCommand: 'npm run build',
        outputDirectory: 'dist',
        rewrites: [{ source: '/(.*)', destination: '/index.html' }],
      },
      null,
      2
    )
  );

  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'fitness-mar',
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'vite build',
          preview: 'vite preview',
          lint: 'tsc --noEmit',
        },
        dependencies: {
          '@supabase/supabase-js': '^2.49.1',
          '@tailwindcss/vite': '^4.3.3',
          '@vitejs/plugin-react': '^6.1.1',
          'canvas-confetti': '^1.9.4',
          'lucide-react': '^0.546.0',
          react: '^19.0.1',
          'react-dom': '^19.0.1',
          tailwindcss: '^4.3.3',
          vite: '^8.3.0',
          jszip: '^3.10.1',
        },
        devDependencies: {
          '@types/canvas-confetti': '^1.9.0',
          '@types/node': '^22.14.0',
          '@types/react': '^19.3.0',
          '@types/react-dom': '^19.3.0',
          typescript: '^7.0.2',
        },
      },
      null,
      2
    )
  );

  zip.file(
    'vite.config.ts',
    `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
`
  );

  zip.file(
    'tsconfig.json',
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          useDefineForClassFields: false,
          module: 'ESNext',
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          moduleResolution: 'bundler',
          isolatedModules: true,
          jsx: 'react-jsx',
          skipLibCheck: true,
          noEmit: true,
        },
      },
      null,
      2
    )
  );

  zip.file(
    'index.html',
    `<!doctype html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FitMaghrib - Perte de Poids & Sport à Domicile</title>
    <meta name="description" content="Programme personnalisé de perte de poids avec choix de temps (15/30/45 min), animations GIF, musique d'entraînement, repas marocains équilibrés sur 2 semaines et suivi pour 3 profils." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  );

  zip.file(
    '.gitignore',
    `node_modules
dist
.env
.DS_Store
`
  );

  zip.file(
    'README.md',
    `# FitMaghrib - Programme Perte de Poids & Calisthenics Militaire 🇲🇦

Application trilingue (الدارجة المغربية, Français, العربية) :
- 3 Profils personnalisés (Badr 102kg, Mama Laaziza 64kg stabilisation, Kaoutar 80kg sans impact genoux)
- Calisthenics Militaire Commando avec calcul de perte de poids
- Musique Gym Reels (Phonk, EDM, Hardstyle, Trap)
- Menu marocain sain de 2 semaines renouvelables
- Suivi de progression & Synchronisation Supabase

## Déploiement en 1 clic sur Vercel :
1. Créez un repository sur GitHub et téléversez tous les dossiers (y compris le dossier \`src\`).
2. Connectez-vous sur [vercel.com](https://vercel.com) avec votre compte GitHub.
3. Cliquez sur "Add New... -> Project", importez le repository et cliquez sur "Deploy".
`
  );

  // 2. Add all src/ files
  const addedPaths = new Set<string>();

  for (const [key, content] of Object.entries(sourceFiles)) {
    if (!content || typeof content !== 'string') continue;

    let targetPath = key;

    // Normalize path to clean standard 'src/...' or root files
    if (targetPath.startsWith('/src/')) {
      targetPath = targetPath.slice(1);
    } else if (targetPath.startsWith('../')) {
      targetPath = 'src/' + targetPath.replace(/^\.\.\//, '');
    } else if (targetPath.startsWith('/')) {
      targetPath = targetPath.slice(1);
    }

    // Deduplicate
    if (addedPaths.has(targetPath)) continue;
    addedPaths.add(targetPath);

    // Skip root files already written
    if (
      targetPath === 'package.json' ||
      targetPath === 'vercel.json' ||
      targetPath === 'vite.config.ts' ||
      targetPath === 'tsconfig.json' ||
      targetPath === 'index.html' ||
      targetPath === 'README.md' ||
      targetPath === '.gitignore'
    ) {
      continue;
    }

    zip.file(targetPath, content);
  }

  // Generate and download zip
  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fitness-MAR-complet.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
