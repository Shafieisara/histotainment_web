import React, { useState, useEffect, useRef } from 'react';

interface ProgressiveImageProps {
    src: string;
    lqip: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    draggable?: boolean;
    loading?: 'lazy' | 'eager';
}

/**
 * Progressive blur-up image component (like Facebook / Twitter).
 * 1. Instantly shows a blurred tiny placeholder (from lqip base64).
 * 2. Silently loads the full image in the background.
 * 3. Smoothly cross-fades to the full image once loaded.
 */
export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
    src,
    lqip,
    alt,
    className = '',
    style,
    draggable,
    loading = 'lazy',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // If the image is already in cache the onLoad event won't fire
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, [src]);

    return (
        <div
            className={className}
            style={{ position: 'relative', overflow: 'hidden', ...style }}
        >
            {/* Blurred LQIP placeholder — always visible until full image loads */}
            <img
                src={lqip}
                alt=""
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'inherit',
                    filter: 'blur(12px)',
                    transform: 'scale(1.05)', // hides blur edges
                    transition: 'opacity 0.4s ease',
                    opacity: isLoaded ? 0 : 1,
                    pointerEvents: 'none',
                }}
            />

            {/* Full resolution image — fades in on top */}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading={loading}
                draggable={draggable}
                onLoad={() => setIsLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'inherit',
                    transition: 'opacity 0.5s ease',
                    opacity: isLoaded ? 1 : 0,
                }}
            />
        </div>
    );
};
