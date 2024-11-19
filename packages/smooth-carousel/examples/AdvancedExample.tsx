import { useState } from 'react';
import { SmoothCarousel } from '../src/SmoothCarousel';

const images = [
  { src: '/examples/product1.jpg', alt: 'Product 1' },
  { src: '/examples/product2.jpg', alt: 'Product 2' },
  { src: '/examples/product3.jpg', alt: 'Product 3' },
];

export const AdvancedExample = () => {
  const [speed, setSpeed] = useState(0.133);
  const [spacing, setSpacing] = useState(50);
  const [height, setHeight] = useState(400);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Advanced Carousel Configuration</h2>
      
      <div className="mb-8">
        <SmoothCarousel 
          images={images} 
          height={height}
          speed={speed}
          spacing={spacing}
          pauseOnHover={isPaused}
          className="shadow-lg rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Speed ({speed})
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Spacing ({spacing}%)
          </label>
          <input
            type="range"
            min="25"
            max="100"
            step="5"
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Height ({height}px)
          </label>
          <input
            type="range"
            min="200"
            max="600"
            step="50"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-center">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={isPaused}
              onChange={(e) => setIsPaused(e.target.checked)}
              className="mr-2"
            />
            Pause on Hover
          </label>
        </div>
      </div>
    </div>
  );
};
