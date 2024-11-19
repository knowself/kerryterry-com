import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface SmoothCarouselProps {
  /**
   * Array of images to display in the carousel
   */
  images: CarouselImage[];
  
  /**
   * Height of the carousel in pixels
   * @default 400
   */
  height?: number;

  /**
   * Speed of movement in percentage per frame
   * @default 0.133
   */
  speed?: number;

  /**
   * Distance between images as a percentage
   * @default 50
   */
  spacing?: number;

  /**
   * Custom className for the container
   */
  className?: string;

  /**
   * Pause animation on hover
   * @default false
   */
  pauseOnHover?: boolean;

  /**
   * Custom loading component
   */
  loadingComponent?: React.ReactNode;

  /**
   * Custom error component
   */
  errorComponent?: React.ReactNode;

  /**
   * Callback when an image fails to load
   */
  onImageError?: (image: CarouselImage) => void;
}

/**
 * SmoothCarousel component that provides a continuous, smooth-scrolling image carousel
 * optimized for Next.js applications.
 */
export const SmoothCarousel: React.FC<SmoothCarouselProps> = ({ 
  images,
  height = 400,
  speed = 0.133,
  spacing = 50,
  className = '',
  pauseOnHover = false,
  loadingComponent = <div className="animate-pulse bg-gray-200 w-full h-full" />,
  errorComponent = <div className="bg-red-100 w-full h-full flex items-center justify-center text-red-500">Failed to load image</div>,
  onImageError
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const positionRef = useRef(0);
  const [transform, setTransform] = useState('translateX(0%)');
  const [nextTransform, setNextTransform] = useState(`translateX(${spacing}%)`);
  const [isPaused, setIsPaused] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [errorStates, setErrorStates] = useState<Record<string, boolean>>({});

  const handleImageLoad = useCallback((src: string) => {
    setLoadingStates(prev => ({ ...prev, [src]: false }));
  }, []);

  const handleImageError = useCallback((image: CarouselImage) => {
    setErrorStates(prev => ({ ...prev, [image.src]: true }));
    setLoadingStates(prev => ({ ...prev, [image.src]: false }));
    onImageError?.(image);
  }, [onImageError]);

  useEffect(() => {
    if (images.length < 2) return;
    if (isPaused) return;

    const frameRate = 60;
    const movePerFrame = speed;
    const resetPoint = -spacing;

    const animate = () => {
      positionRef.current -= movePerFrame;
      
      if (positionRef.current <= resetPoint) {
        positionRef.current = 0;
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
      }

      setTransform(`translateX(${positionRef.current}%)`);
      setNextTransform(`translateX(${positionRef.current + spacing}%)`);
    };

    const interval = setInterval(animate, 1000 / frameRate);
    return () => clearInterval(interval);
  }, [images.length, nextIndex, speed, spacing, isPaused]);

  if (!images.length) return null;
  if (images.length === 1) {
    return (
      <div 
        className={`w-full overflow-hidden bg-gray-50 ${className}`}
        data-testid="carousel-container"
      >
        <div className="relative" style={{ height: `${height}px` }}>
          {loadingStates[images[0].src] && loadingComponent}
          {errorStates[images[0].src] ? (
            errorComponent
          ) : (
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              onLoad={() => handleImageLoad(images[0].src)}
              onError={() => handleImageError(images[0])}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`w-full overflow-hidden bg-gray-50 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      data-testid="carousel-container"
    >
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
          {loadingStates[images[currentIndex].src] && loadingComponent}
          {errorStates[images[currentIndex].src] ? (
            errorComponent
          ) : (
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              onLoad={() => handleImageLoad(images[currentIndex].src)}
              onError={() => handleImageError(images[currentIndex])}
            />
          )}
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
          {loadingStates[images[nextIndex].src] && loadingComponent}
          {errorStates[images[nextIndex].src] ? (
            errorComponent
          ) : (
            <Image
              src={images[nextIndex].src}
              alt={images[nextIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              onLoad={() => handleImageLoad(images[nextIndex].src)}
              onError={() => handleImageError(images[nextIndex])}
            />
          )}
        </div>
      </div>
    </div>
  );
};
