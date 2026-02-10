import React from 'react';
import { MapPin, ScanLine, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import ortBesuchenImg from 'figma:asset/94467f8e2f7836b3b0fa30490a24ba6f9f8087f6.png';
import scannenImg from 'figma:asset/0830329a7f9cfe99b6b8aa647f9e9d3fe5477557.png';
import vergangenheitErlebenImg from 'figma:asset/1a1e0ad5f4acf16545ee8e6abf926b762f6d098f.png';

const steps = [
  {
    id: 1,
    title: "Ort besuchen",
    description: "Reise nach Goslar und begib dich zu den markierten UNESCO-Standorten.",
    icon: MapPin,
    image: ortBesuchenImg
  },
  {
    id: 2,
    title: "Scannen",
    description: "Nutze deine Smartphone-Kamera, um Gebäude und Plätze zu erfassen.",
    icon: ScanLine,
    image: scannenImg
  },
  {
    id: 3,
    title: "Vergangenheit erleben",
    description: "Sieh historische Rekonstruktionen als Overlay direkt auf deinem Bildschirm.",
    icon: Eye,
    image: vergangenheitErlebenImg
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20" id="how-it-works-a">
      <div className="max-w-7xl xl:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-700 tracking-wider uppercase mb-2">Anleitung</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">So funktioniert die Zeitreise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg border border-amber-100 group-hover:border-amber-300 transition-colors">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/20 transition-colors" />

                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center font-serif font-bold text-amber-700 shadow-md border border-amber-100">
                  {step.id}
                </div>
              </div>

              {/* Icon & Text */}
              <div className="bg-white p-4 rounded-2xl shadow-md border border-amber-100 w-full relative -mt-12 z-10 max-w-[90%] mx-auto group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-50 rounded-full text-amber-700 ring-4 ring-amber-50/50">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
