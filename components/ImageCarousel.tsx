import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  height?: number;
}

export default function ImageCarousel({ 
  images,
  height = 400 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const positionRef = useRef(0);
  const [transform, setTransform] = useState('translateX(0%)');
  const [nextTransform, setNextTransform] = useState('translateX(50%)');

  useEffect(() => {
    const frameRate = 60; // 60fps
    const movePerFrame = 0.03325; // Reduced from 0.0665 (half speed again)
    const resetPoint = -50; // Reset when current image reaches -50%

    const animate = () => {
      positionRef.current -= movePerFrame;
      
      if (positionRef.current <= resetPoint) {
        // Seamlessly reset by keeping the next image in exactly the same spot
        positionRef.current = 0;
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
      }

      // Update transforms with precise values
      setTransform(`translateX(${positionRef.current}%)`);
      setNextTransform(`translateX(${positionRef.current + 50}%)`);
    };

    const interval = setInterval(animate, 1000 / frameRate);
    return () => clearInterval(interval);
  }, [images.length, nextIndex]);

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Current Image */}
        <div 
          className="absolute w-full h-full"
          style={{
            transform: transform,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Next Image */}
        <div 
          className="absolute w-full h-full"
          style={{
            transform: nextTransform,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <Image
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
