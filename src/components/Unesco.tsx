import React from 'react';
import { BookOpen, Landmark } from 'lucide-react';

export const Unesco = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-slate-200">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1532154078493-c1c3eef2023c?q=80&w=2000&auto=format&fit=crop"
          alt="Texture"
          className="w-full h-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl xl:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800/40 border border-stone-600/50 rounded-full text-stone-300 text-sm font-semibold mb-8">
            <Landmark className="w-4 h-4" />
            <span>Kultur & Erbe</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 mb-6">
            UNESCO & Kultureller Mehrwert
          </h2>

          <p className="text-lg md:text-xl text-stone-400 mb-12 leading-relaxed">
            Unser Projekt widmet sich der digitalen Denkmalpflege.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm shadow-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-stone-300" />
                Bildung & Vermittlung
              </h3>
              <p className="text-stone-400">
                Wir machen Geschichte zugänglich für neue Generationen und fördern das Verständnis
                für die Bedeutung des kulturellen Erbes durch moderne Technologie.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm shadow-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-stone-300" />
                Digitale Bewahrung
              </h3>
              <p className="text-stone-400">
                Durch die digitale Archivierung und Visualisierung tragen wir dazu bei,
                das Wissen über historische Bausubstanz dauerhaft zu sichern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
