import React from 'react';
import { Globe2, Smartphone, GraduationCap, TrendingUp } from 'lucide-react';

export const GlobalTrendSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 skew-x-12 opacity-50 pointer-events-none" />

      <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-800 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
            <TrendingUp className="w-3 h-3" />
            Globaler Standard
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Histotainment:<br />Die Zukunft des Tourismus
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Weltweit setzen führende Kulturstandorte auf Augmented Reality, um Geschichte neu zu erzählen.
            Für eine UNESCO-Welterbestadt wie Goslar ist dieser Schritt nicht nur eine Chance,
            sondern eine Notwendigkeit, um relevant zu bleiben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Global Trend */}
          <div className="group relative p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Weltweit bewährt</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              Von Rom bis London: Digitale Erweiterungen sind längst Teil des modernen Städteerlebnisses.
              Dieses Projekt schließt Goslar an internationale Standards an und zeigt Innovationskraft im Harz.
            </p>
          </div>

          {/* Card 2: Young Target Group */}
          <div className="group relative p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Jugend erreichen</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              Städte suchen händeringend nach Wegen, Geschichte für jüngere Zielgruppen interessant zu machen.
              Die Verbindung von Bildung und Unterhaltung (Gamification) ist genau der Trend, den sie brauchen.
            </p>
          </div>

          {/* Card 3: Education & Entertainment */}
          <div className="group relative p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Bildung trifft Emotion</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              Trockene Fakten bleiben selten hängen. Durch immersive Erlebnisse wird Wissen emotional verankert.
              Ein didaktisch wertvolles Instrument, das den Bildungsauftrag der Stadt modern interpretiert.
            </p>
          </div>
        </div>

        {/* Call to Action / Summary Line */}
        <div className="mt-16 text-center">
          <p className="inline-block px-6 py-3 bg-stone-900 text-stone-300 rounded-xl text-sm font-medium border border-stone-700">
            Fazit: Ein risikoarmes Pilotprojekt mit maximaler Außenwirkung für das Stadtmarketing.
          </p>
        </div>
      </div>
    </section>
  );
};
