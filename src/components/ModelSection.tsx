import React, { Suspense } from 'react';
import { Loader, Sparkles } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const ModelSection = () => {
  return (
    <section className="pt-8 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Spline 3D Viewer - Lazy Loaded */}
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
              <Spline scene="https://prod.spline.design/MKhpwKpQFxIejUUa/scene.splinecode" />
            </Suspense>
          </div>

          {/* UI Overlay */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md border border-amber-100">
            <div className="flex items-center gap-3 text-sm font-medium text-stone-700">
              <div className="flex gap-1">
                <span className="block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              </div>
              3D-Konzeptvisualisierung
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20 pointer-events-none">
            <div className="bg-amber-900/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur flex items-center gap-1.5">
              <span>Ziehen zum Drehen • Scrollen zum Zoomen</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
