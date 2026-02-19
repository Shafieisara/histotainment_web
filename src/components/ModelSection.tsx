import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Loader, Sparkles, Play } from 'lucide-react';

// Static preview of the 3D scene – shown until user clicks "Load"
import stoneBasePreview from '../assets/webp/StoneBase.webp';
import { lqip_StoneBase } from '../assets/lqip';
import { ProgressiveImage } from './ProgressiveImage';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
const SPLINE_SCENE = 'https://prod.spline.design/MKhpwKpQFxIejUUa/scene.splinecode';

export const ModelSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Step 1 – is the section near the viewport?
  const [isNearViewport, setIsNearViewport] = useState(false);
  // Step 2 – did the user click "Load 3D"?
  const [userRequestedLoad, setUserRequestedLoad] = useState(false);
  // Step 3 – has Spline finished loading?
  const [splineReady, setSplineReady] = useState(false);

  // Only show the "Load" button once the section scrolls into view (within 200px)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldLoadSpline = isNearViewport && userRequestedLoad;

  return (
    <section className="pt-8 pb-20 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-sm font-medium shadow-lg mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Interaktive Vorschau</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Interaktive Vorschau: Geschichte in 3D begreifen
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Erkunde die detaillierten 3D-Modelle. Nutze Maus oder Touch, um das Modell zu drehen, zu zoomen und interaktive Elemente zu entdecken.
          </p>
        </div>

        <div className="relative w-full h-[500px] bg-stone-100 rounded-2xl overflow-hidden shadow-lg border border-amber-100">

          {shouldLoadSpline ? (
            /* ── Spline viewer ── */
            <div className="absolute inset-0 z-10">
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-stone-100">
                    <div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-md border border-amber-100">
                      <Loader className="w-4 h-4 animate-spin text-amber-700" />
                      <span className="text-sm font-medium text-stone-700">
                        3D-Modell wird geladen …
                      </span>
                    </div>
                  </div>
                }
              >
                <Spline
                  scene={SPLINE_SCENE}
                  onLoad={() => setSplineReady(true)}
                />
              </Suspense>

              {/* Overlay shown while Spline is initialising after mount */}
              {!splineReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-100/80 z-20 pointer-events-none">
                  <div className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-md border border-amber-100">
                    <Loader className="w-4 h-4 animate-spin text-amber-700" />
                    <span className="text-sm font-medium text-stone-700">Szene wird aufgebaut …</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ── Static preview + Load button ── */
            <div className="absolute inset-0">
              {/* Preview image with progressive blur-up */}
              <ProgressiveImage
                src={stoneBasePreview}
                lqip={lqip_StoneBase}
                alt="3D-Modell Vorschau"
                className="w-full h-full"
                style={{ objectFit: 'cover', filter: 'brightness(0.75)' }}
              />

              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

              {/* Load button – only shown after scrolled near */}
              {isNearViewport && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <button
                    onClick={() => setUserRequestedLoad(true)}
                    className="group flex items-center gap-3 px-6 py-4 bg-amber-600 hover:bg-amber-500 active:scale-95 text-white font-bold text-base rounded-2xl shadow-2xl transition-all duration-200 border-2 border-amber-400/40"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-5 h-5 fill-white text-white" />
                    </div>
                    Interaktives 3D-Modell laden
                  </button>
                  <p className="text-white/60 text-xs">
                    ~1.4 MB • Lädt nur auf Wunsch
                  </p>
                </div>
              )}
            </div>
          )}

          {/* UI Overlay (always visible) */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md border border-amber-100">
            <div className="flex items-center gap-3 text-sm font-medium text-stone-700">
              <span className="block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              3D-Konzeptvisualisierung
            </div>
          </div>

          {shouldLoadSpline && (
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <div className="bg-amber-900/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur flex items-center gap-1.5">
                <span>Ziehen zum Drehen • Scrollen zum Zoomen</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
