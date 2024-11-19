import Image from 'next/image';
import { CSSProperties } from 'react';

interface ConstrainedImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  priority?: boolean;
}

export default function ConstrainedImage({
  src,
  alt,
  aspectRatio = 4/3,
  priority = false
}: ConstrainedImageProps) {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    height: '0',
    paddingBottom: `${(1/aspectRatio) * 100}%`,
    overflow: 'hidden'
  };

  const imageStyle: CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <div style={containerStyle}>
          <div style={imageStyle}>
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
