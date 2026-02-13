const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function build() {
  const src = path.join(
    process.cwd(),
    'public',
    'assets',
    'logonovabranca.png',
  );
  const outDir = path.join(process.cwd(), 'public', 'assets');
  if (!fs.existsSync(src)) {
    console.error('Source logo not found:', src);
    process.exit(1);
  }

  const pwaSizes = [192, 256, 384, 512];
  for (const size of pwaSizes) {
    const outPath = path.join(outDir, `pwa-${size}.png`);
    // create a black background, then composite the logo centered and scaled to 80% of size
    const logo = await sharp(src)
      .resize(Math.round(size * 0.8))
      .png()
      .toBuffer();
    const bg = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      },
    });
    await bg
      .composite([{ input: logo, gravity: 'center' }])
      .png()
      .toFile(outPath);
    console.log('Wrote', outPath);
  }

  // Apple touch icons (common sizes)
  const appleSizes = [180, 167, 152];
  for (const size of appleSizes) {
    const outPath = path.join(outDir, `apple-touch-${size}.png`);
    const logo = await sharp(src)
      .resize(Math.round(size * 0.8))
      .png()
      .toBuffer();
    const bg = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      },
    });
    await bg
      .composite([{ input: logo, gravity: 'center' }])
      .png()
      .toFile(outPath);
    console.log('Wrote', outPath);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
