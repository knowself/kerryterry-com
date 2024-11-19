import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}>
      <Image
        src={src}
        alt={alt}
        fill={!width || !height}
        width={width}
        height={height}
        quality={85}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`object-cover ${!width || !height ? 'absolute' : ''}`}
      />
    </div>
  );
}
