# Smooth Carousel

A smooth, continuous-motion image carousel optimized for Next.js applications. This carousel provides a seamless, infinite scrolling experience with smooth transitions between images.

## Features

- 🎨 Smooth, continuous motion
- 🔄 Infinite scrolling
- 📱 Responsive design
- 🎯 Next.js Image optimization
- 💪 TypeScript support
- ⚡ Performance optimized
- 🛠 Configurable speed and spacing

## Installation

```bash
npm install @kerryterry/smooth-carousel
# or
yarn add @kerryterry/smooth-carousel
```

## Usage

```tsx
import { SmoothCarousel } from '@kerryterry/smooth-carousel';

const MyComponent = () => {
  const images = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
  ];

  return (
    <SmoothCarousel 
      images={images}
      height={400}      // Optional: default 400px
      speed={0.267}     // Optional: default 0.267% per frame
      spacing={50}      // Optional: default 50%
      className="my-carousel"  // Optional: custom className
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| images | `CarouselImage[]` | Required | Array of images to display |
| height | `number` | 400 | Height of carousel in pixels |
| speed | `number` | 0.267 | Movement speed (percentage per frame) |
| spacing | `number` | 50 | Distance between images (percentage) |
| className | `string` | '' | Custom className for container |

### CarouselImage Type

```typescript
interface CarouselImage {
  src: string;  // Image source URL
  alt: string;  // Alt text for accessibility
}
```

## Performance

The carousel is optimized for performance with:
- GPU-accelerated animations
- Next.js Image optimization
- Minimal re-renders
- Memory-efficient animation loop

## Browser Support

Supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Kerry Terry
