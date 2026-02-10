import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

// IMPORT NEW IMAGES
import marktplatzImg from '../assets/Goslar_-_Marktplatz_-_2.jpg';
import kaiserpfalzImg from '../assets/Kaiserpfalz.jpg';
import rammelsbergImg from '../assets/Goslar_Rammelsberg_Haus_A_from_Werkshof.jpg';

const locations = [
  {
    title: "Marktplatz Goslar",
    description: "Der zentrale Platz mit dem Marktbrunnen, umgeben von historischen Gildehäusern und dem Rathaus.",
    image: marktplatzImg // Link to local asset
  },
  {
    title: "Kaiserpfalz",
    description: "Die monumentale Pfalz der Salierkaiser, ein einzigartiges Denkmal weltlicher Baukunst.",
    image: kaiserpfalzImg // Link to local asset
  },
  {
    title: "Rammelsberg Bergwerk",
    description: "UNESCO-Welterbe mit über 1000 Jahren Bergbaugeschichte. Erlebe die faszinierende Welt unter Tage in 3D.",
    image: rammelsbergImg // Link to local asset
  }
];

export const Locations = () => {
  return (
    <section className="py-20 bg-white" id="cities">
      <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-4xl">
            <h2 className="text-sm font-bold text-stone-700 tracking-wider uppercase mb-2">Highlights</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Historische Orte in Goslar</h3>
            <p className="text-stone-600 text-lg">
              Diese Orte wurden detailgetreu rekonstruiert und warten darauf, von dir erkundet zu werden.
            </p>
          </div>
          {/* REMOVED: "Alle Orte ansehen" Button */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">{loc.title}</h4>
                  <p className="text-stone-200 text-sm line-clamp-2">{loc.description}</p>
                  {/* REMOVED: "In AR ansehen" Link */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
