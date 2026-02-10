import React from 'react';
import { Layers, Lightbulb, History, Users } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: "Intuitives Verständnis",
    desc: "Geschichte visuell begreifen statt nur Texte zu lesen."
  },
  {
    icon: Layers,
    title: "Keine extra Hardware",
    desc: "Nutze einfach dein Smartphone. Keine VR-Brille notwendig."
  },
  {
    icon: History,
    title: "Ortsbezogenes Storytelling",
    desc: "Geschichten entfalten sich genau dort, wo sie passiert sind."
  },
  {
    icon: Users,
    title: "Für alle Altersgruppen",
    desc: "Leicht verständliche Bedienung für Jung und Alt."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-stone-700 tracking-wider uppercase mb-2">Warum AR-Histotainment?</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Geschichte wird lebendig,<br />wenn wir sie sehen.
            </h3>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Klassische Tafeln und Audioguides sind informativ, aber oft abstrakt.
              Unsere AR-Technologie schließt die Lücke zwischen Vorstellungskraft und Realität,
              indem sie vergangene Epochen nahtlos in das heutige Stadtbild integriert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-2xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-700 mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{benefit.title}</h4>
                <p className="text-stone-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
