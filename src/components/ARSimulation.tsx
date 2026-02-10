import React, { useRef, useEffect, useState } from 'react';
import { Smartphone, Scan, Sparkles } from 'lucide-react';
import goslarImage from '../assets/Marktplatz_Goslar-extra.jpg';
import historicImage from '../assets/Marktplatz_Goslar-extra.-historical.jpg';

export const ARSimulation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lensRef = useRef<HTMLDivElement>(null);
    const innerImageRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const lens = lensRef.current;
        const innerImage = innerImageRef.current;
        if (!container || !lens || !innerImage) return;

        const updateInnerImagePosition = () => {
            const containerRect = container.getBoundingClientRect();
            const lensRect = lens.getBoundingClientRect();

            // Calculate lens center in pixels relative to container
            const lensCenterX = lensRect.left + lensRect.width / 2 - containerRect.left;
            const lensCenterY = lensRect.top + lensRect.height / 2 - containerRect.top;

            // Inner image MUST be the same size as container for the effect to work
            innerImage.style.width = `${containerRect.width}px`;
            innerImage.style.height = `${containerRect.height}px`;

            // The inner image is positioned at (0,0) within the lens
            // To show the correct portion, we shift it by -lensCenterX + lensWidth/2
            // This aligns the lens center with the corresponding point on the inner image
            const offsetX = -lensCenterX + lensRect.width / 2;
            const offsetY = -lensCenterY + lensRect.height / 2;
            innerImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        // Initial position
        updateInnerImagePosition();
        setIsLoaded(true);
        window.addEventListener('resize', updateInnerImagePosition);

        // Update on mouse move
        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

            // Update lens position
            lens.style.left = `${x}%`;
            lens.style.top = `${y}%`;

            // Update inner image position to match
            requestAnimationFrame(updateInnerImagePosition);
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => {
            setIsHovering(false);
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseenter', onMouseEnter);
        container.addEventListener('mouseleave', onMouseLeave);

        return () => {
            window.removeEventListener('resize', updateInnerImagePosition);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseenter', onMouseEnter);
            container.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <section className="py-20 bg-amber-950 relative overflow-hidden" id="ar-demo">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl xl:max-w-[98%] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />
            </div>

            <style>{`
                @keyframes ar-idle-loop {
                    0% { left: 35%; top: 45%; }
                    25% { left: 55%; top: 40%; }
                    50% { left: 65%; top: 55%; }
                    75% { left: 45%; top: 60%; }
                    100% { left: 35%; top: 45%; }
                }
                .ar-idle-lens { animation: ar-idle-loop 12s ease-in-out infinite; }
            `}</style>

            <div className="max-w-7xl xl:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16 items-center">

                {/* Text Content */}
                <div className="text-center max-w-3xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-sm font-medium shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        <span>Interaktive Demo</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 leading-tight">
                        Interaktive Demo: Ein Fenster in die <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Vergangenheit</span>
                    </h2>

                    <p className="text-lg text-amber-100/80 leading-relaxed max-w-2xl mx-auto">
                        Erlebe Goslar wie noch nie zuvor. Unsere AR-Technologie legt historische Ansichten nahtlos über die heutige Realität.
                    </p>
                </div>

                {/* AR Simulation Container */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/50 border-4 border-amber-900/50 bg-stone-950 cursor-crosshair group touch-none select-none z-10"
                    style={{ minHeight: '600px', display: 'block' }}
                >
                    {/* Base Layer */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                            src={goslarImage}
                            alt="Modern Goslar"
                            className="w-full h-full object-cover opacity-70"
                            loading="lazy"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-stone-900/30" />
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>

                    {/* The Phone Lens - Realistic Modern Smartphone */}
                    <div
                        ref={lensRef}
                        className={`absolute z-50 pointer-events-none overflow-hidden`}
                        style={{
                            width: '300px',
                            height: '600px',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            border: '12px solid #1a1a1a',
                            borderRadius: '40px',
                            background: '#000',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* Loading overlay */}
                        {!isLoaded && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center bg-stone-950/80">
                                <div className="rounded-2xl border border-amber-500/40 bg-black/40 px-4 py-3 text-sm text-amber-100 shadow-lg backdrop-blur">
                                    AR-Demo wird vorbereitet …
                                </div>
                            </div>
                        )}
                        {/* Phone Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black z-50 rounded-b-2xl"
                            style={{
                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}
                        />

                        {/* Screen Content */}
                        <div
                            ref={innerImageRef}
                            className="absolute top-0 left-0"
                        >
                            <img
                                src={historicImage}
                                className="w-full h-full object-cover"
                                alt="Historic Goslar 1520"
                                loading="lazy"
                                draggable={false}
                            />

                            {/* Screen Overlay with Status Bar */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* AR Info Overlay */}
                                <div className="absolute top-12 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white font-medium border border-white/20">
                                    <span className="opacity-80">1520 AD</span>
                                </div>
                                <div className="absolute bottom-8 left-4 right-4 bg-black/70 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                                    <div className="text-white text-sm font-semibold">Marktplatz Goslar</div>
                                    <div className="text-white/60 text-xs mt-0.5">Historische Ansicht</div>
                                </div>
                            </div>
                        </div>

                        {/* Screen Glare Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-[28px]" />
                    </div>

                    <div className="absolute bottom-6 left-6 px-3 py-1 bg-stone-900/80 backdrop-blur text-stone-400 text-xs rounded-lg border border-white/10 pointer-events-none z-40">
                        Vorschau
                    </div>

                </div>
            </div>
        </section>
    );
};
