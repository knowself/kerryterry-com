# Development Instructions and Guidelines

## Image Handling Guidelines

### Aspect Ratio Requirements
- All images must maintain their original aspect ratio
- Never stretch or distort images to fit a space
- Use appropriate sizing techniques that preserve aspect ratios
- This applies to ALL images throughout the website, including but not limited to:
  - Website banner
  - Profile photos
  - Gallery images
  - Thumbnails
  - Icons

### Specific Components

#### Website Banner
- Must maintain its original aspect ratio at all times
- Should scale responsively while preserving proportions
- Never stretch or compress the banner vertically
- Use appropriate Next.js Image component settings to ensure aspect ratio preservation

### Best Practices
1. Always use proper image components that respect aspect ratios
2. Test all images across different screen sizes to ensure they maintain proportions
3. When sizing images relatively (e.g., percentage widths), ensure the height scales proportionally
4. Use appropriate CSS properties that maintain aspect ratios (e.g., `object-fit: contain`)
5. Verify image display on both desktop and mobile devices
