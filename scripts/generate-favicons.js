const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const FAVICON_SIZES = [16, 32, 180, 192, 512];
const SOURCE_IMAGE = path.join(__dirname, '../public/images/logo.png');
const OUTPUT_DIR = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    const image = sharp(SOURCE_IMAGE);
    
    // Generate PNG favicons
    for (const size of FAVICON_SIZES) {
      const fileName = size === 180 
        ? 'apple-touch-icon.png'
        : size === 192 
          ? 'android-chrome-192x192.png'
          : size === 512 
            ? 'android-chrome-512x512.png'
            : `favicon-${size}x${size}.png`;

      await image
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(OUTPUT_DIR, fileName));
      
      console.log(`Generated ${fileName}`);
    }

    // Generate ICO file (16x16 and 32x32)
    const icoBuffer = await image
      .resize(32, 32)
      .toFormat('ico')
      .toBuffer();
    
    await fs.writeFile(path.join(OUTPUT_DIR, 'favicon.ico'), icoBuffer);
    console.log('Generated favicon.ico');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
