// Génère les CV PDF (FR et EN) à partir des pages /cv/ et /en/cv/.
//
//   npm run cv:pdf
//
// Construit le site, le sert en local, imprime chaque page avec Chromium (Playwright),
// puis écrit les PDF dans public/cv/ (versionnés) et dist/cv/ (prêts à déployer).
// Première utilisation : npx playwright install chromium

import { build, preview } from 'astro';
import { chromium } from 'playwright';
import { mkdir, copyFile } from 'node:fs/promises';

const targets = [
  { path: '/cv/', file: 'guillaume-merle-cv.pdf' },
  { path: '/en/cv/', file: 'guillaume-merle-resume.pdf' },
];

await build({ logLevel: 'warn' });
const server = await preview({ logLevel: 'warn', server: { port: 4329 } });
const browser = await chromium.launch();

try {
  await mkdir('public/cv', { recursive: true });
  await mkdir('dist/cv', { recursive: true });
  const page = await browser.newPage();

  for (const { path, file } of targets) {
    await page.goto(`http://localhost:4329${path}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: 'print' });

    const pages = await page.evaluate(() => {
      const sheet = document.querySelector('.sheet');
      const mm = sheet.getBoundingClientRect().width / 210;
      return Math.ceil(sheet.scrollHeight / (297 * mm) - 0.01);
    });
    if (pages > 1) console.warn(`⚠ ${path} déborde sur ${pages} pages A4.`);

    await page.pdf({
      path: `public/cv/${file}`,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    await copyFile(`public/cv/${file}`, `dist/cv/${file}`);
    console.log(`✓ public/cv/${file}`);
  }
} finally {
  await browser.close();
  await server.stop();
}
