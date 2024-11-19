const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Define the images we need with their dimensions
const PLACEHOLDER_IMAGES = [
  {
    name: 'kerry-teaching.png',
    width: 800,
    height: 1000,
    text: 'Kerry Teaching Piano'
  },
  {
    name: 'piano-close.png',
    width: 800,
    height: 1000,
    text: 'Piano Close-up'
  },
  {
    name: 'kerry-terry.png',
    width: 1200,
    height: 630,
    text: 'Kerry Terry'
  },
  {
    name: 'og-image.png',
    width: 1200,
    height: 630,
    text: 'Kerry Terry Piano'
  },
  {
    name: 'placeholder.png',
    width: 800,
    height: 600,
    text: 'Image Placeholder'
  },
  {
    name: 'logo.png',
    width: 512,
    height: 512,
    text: 'KT'
  },
  // Slideshow images
  {
    name: 'slide-1.png',
    width: 800,
    height: 600,
    text: 'Piano Studio 1'
  },
  {
    name: 'slide-2.png',
    width: 800,
    height: 600,
    text: 'Piano Studio 2'
  },
  {
    name: 'slide-3.png',
    width: 800,
    height: 600,
    text: 'Piano Studio 3'
  },
  {
    name: 'slide-4.png',
    width: 800,
    height: 600,
    text: 'Piano Studio 4'
  },
  {
    name: 'slide-5.png',
    width: 800,
    height: 600,
    text: 'Piano Studio 5'
  }
];

// Create a placeholder image with text
async function createPlaceholder({ name, width, height, text }) {
  const svgBuffer = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#F4EEEC"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="${Math.min(width, height) * 0.1}px" 
        fill="#C7493B" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `);

  const outputPath = path.join(IMAGES_DIR, name);

  await sharp(svgBuffer)
    .png()
    .toFile(outputPath);

  console.log(`Created ${name}`);
}

// Create all placeholder images
async function generatePlaceholders() {
  // Ensure images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Remove existing placeholder images
  const existingFiles = fs.readdirSync(IMAGES_DIR);
  for (const file of existingFiles) {
    fs.unlinkSync(path.join(IMAGES_DIR, file));
  }

  // Generate each placeholder
  for (const image of PLACEHOLDER_IMAGES) {
    await createPlaceholder(image);
  }
}

generatePlaceholders().catch(console.error);
