"use client";
import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ src, alt, className, priority, width, height }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        height={height}
        priority={priority}
        className={`
          transition-all duration-700 ease-in-out
          ${isLoading ? 'scale-105 blur-2xl' : 'scale-100 blur-0'}
          ${className}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setLoading(false)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
        style={{ objectFit: 'contain', objectPosition: 'top' }}
      />
    </div>
  );
};

export default OptimizedImage;
