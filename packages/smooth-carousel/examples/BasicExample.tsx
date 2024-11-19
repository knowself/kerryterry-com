import { SmoothCarousel } from '../src/SmoothCarousel';

const images = [
  { src: '/examples/landscape1.jpg', alt: 'Beautiful landscape 1' },
  { src: '/examples/landscape2.jpg', alt: 'Beautiful landscape 2' },
  { src: '/examples/landscape3.jpg', alt: 'Beautiful landscape 3' },
];

export const BasicExample = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Basic Carousel</h2>
      <SmoothCarousel images={images} height={400} />
    </div>
  );
};
