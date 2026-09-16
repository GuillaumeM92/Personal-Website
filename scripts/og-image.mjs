// Régénère l'image de partage (src/assets/og-cover.jpg, 1200×630)
// l'icône iOS (public/apple-touch-icon.png, 180×180)
// et public/favicon.ico (16, 32 et 48 px, rendus depuis public/favicon.svg).
//
//   node scripts/og-image.mjs
//
// À relancer seulement si le titre ou la photo changent.

import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';

// Fichier .ico contenant des images PNG : [[taille, buffer], …].
const ico = (images) => {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(([size, png], i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size % 256, e);
    head.writeUInt8(size % 256, e + 1);
    head.writeUInt16LE(1, e + 4);
    head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(png.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([head, ...images.map(([, png]) => png)]);
};

const b64 = async (p) => (await readFile(p)).toString('base64');
const portrait = await b64('src/assets/portrait.png');
const ship = await readFile('src/assets/petit-vaisseau-icon.svg', 'utf8');
const fonts = [
  ['Space Grotesk', 'node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2'],
  ['Inter', 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
];
const fontCss = (
  await Promise.all(
    fonts.map(
      async ([name, file]) =>
        `@font-face{font-family:'${name}';src:url(data:font/woff2;base64,${await b64(file)}) format('woff2');font-weight:100 900}`,
    ),
  )
).join('');

// Étoiles déterministes, pour que l'image ne change pas à chaque génération.
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const stars = Array.from({ length: 140 }, () => {
  const r = (0.4 + rand() * 1.4).toFixed(2);
  return `<circle cx="${(rand() * 1200).toFixed(1)}" cy="${(rand() * 630).toFixed(1)}" r="${r}" fill="#dcecf4" opacity="${(0.2 + rand() * 0.6).toFixed(2)}"/>`;
}).join('');

const og = `<!doctype html><html><head><style>${fontCss}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;overflow:hidden;background:#04080f;color:#e4edf3;font-family:Inter,sans-serif;position:relative}
  .glow{position:absolute;inset:0;background:radial-gradient(700px 420px at 88% 10%,rgba(56,214,224,.18),transparent 60%),radial-gradient(600px 400px at 0% 100%,rgba(255,122,77,.10),transparent 60%)}
  svg.stars{position:absolute;inset:0}
  .copy{position:absolute;left:84px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center;gap:26px}
  .role{font:500 20px/1 ui-monospace,Menlo,monospace;letter-spacing:.1em;white-space:nowrap;text-transform:uppercase;color:#38d6e0;display:flex;align-items:center;gap:14px}
  .role:before{content:'';width:40px;height:2px;background:#38d6e0}
  h1{font:700 104px/0.92 'Space Grotesk';letter-spacing:-.045em;background:linear-gradient(180deg,#fff 30%,#9fb3c2);-webkit-background-clip:text;color:transparent}
  p{font-size:28px;line-height:1.4;color:#b9c8d3}
  .url{font:600 22px/1 'Space Grotesk';color:#8298a9;margin-top:10px}
  .visual{position:absolute;right:70px;top:115px;width:400px;height:400px}
  .ring{position:absolute;inset:0;border-radius:50%;border:2px dashed rgba(56,214,224,.28)}
  .photo{position:absolute;inset:48px;border-radius:50%;background:url(data:image/png;base64,${portrait}) 50% 30%/cover;border:2px solid #264057;box-shadow:0 0 0 14px rgba(4,8,15,.7),0 30px 90px -20px rgba(56,214,224,.45)}
  .ship{position:absolute;width:62px;height:62px;right:18px;top:40px;transform:rotate(135deg);filter:drop-shadow(0 0 14px rgba(56,214,224,.7))}
  .ship svg{width:100%;height:100%}
</style></head><body>
  <div class="glow"></div>
  <svg class="stars" viewBox="0 0 1200 630">${stars}</svg>
  <div class="copy">
    <div class="role">MLOps · Azure · Databricks</div>
    <h1>Guillaume<br>Merle</h1>
    <p>Industrialisation de plateformes data &amp; IA.<br>Créateur de Space Defender sur Steam.</p>
    <div class="url">guillaume-merle.fr</div>
  </div>
  <div class="visual"><div class="ring"></div><div class="photo"></div><div class="ship">${ship}</div></div>
</body></html>`;

const icon = `<!doctype html><html><head><style>${fontCss}
  *{margin:0}
  body{width:180px;height:180px;display:grid;place-items:center;background:linear-gradient(145deg,#0d2230,#04080f 70%);color:#38d6e0;font:700 78px/1 'Space Grotesk';letter-spacing:-.04em}
</style></head><body>GM</body></html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(og, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'src/assets/og-cover.jpg', type: 'jpeg', quality: 86 });
  console.log('✓ src/assets/og-cover.jpg');

  await page.setViewportSize({ width: 180, height: 180 });
  await page.setContent(icon, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/apple-touch-icon.png' });
  console.log('✓ public/apple-touch-icon.png');

  // favicon.ico : Safari n'affiche pas les favicons SVG.
  const svg = await readFile('public/favicon.svg', 'utf8');
  const pngs = [];
  for (const size of [16, 32, 48]) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`<style>*{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
    pngs.push([size, await page.screenshot({ omitBackground: true })]);
  }
  await writeFile('public/favicon.ico', ico(pngs));
  console.log('✓ public/favicon.ico');
} finally {
  await browser.close();
}
