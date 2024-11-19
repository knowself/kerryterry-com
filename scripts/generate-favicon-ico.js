const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

const SOURCE_IMAGE = path.join(__dirname, '../public/images/logo.png');
const OUTPUT_FILE = path.join(__dirname, '../public/favicon.ico');

async function generateFaviconIco() {
  try {
    const image = sharp(SOURCE_IMAGE);
    
    // Generate 16x16 and 32x32 PNGs with high quality
    const png16 = await image
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 244, g: 238, b: 236, alpha: 1 },
        kernel: sharp.kernel.lanczos3
      })
      .png()
      .toBuffer();
    
    const png32 = await image
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 244, g: 238, b: 236, alpha: 1 },
        kernel: sharp.kernel.lanczos3
      })
      .png()
      .toBuffer();

    // Create ICO file with both sizes
    const icoBuffer = await toIco([png16, png32], {
      resize: false,
      sizes: [16, 32]
    });

    // Write the ICO file
    await fs.writeFile(OUTPUT_FILE, icoBuffer);
    console.log('Successfully generated favicon.ico');

  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    process.exit(1);
  }
}

generateFaviconIco();
