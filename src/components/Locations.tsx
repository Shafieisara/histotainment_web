import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin } from 'lucide-react';
import { ProgressiveImage } from './ProgressiveImage';

// WebP versions – dramatically smaller than originals
import marktplatzImg from '../assets/webp/Goslar_-_Marktplatz_-_2.webp';
import kaiserpfalzImg from '../assets/webp/Kaiserpfalz.webp';
import rammelsbergImg from '../assets/webp/Goslar_Rammelsberg_Haus_A_from_Werkshof.webp';
import kemenateImg from '../assets/webp/kemenate_roever.webp';
import heiligeskreuzImg from '../assets/webp/heiliges_kreuz.webp';
import annenhausImg from '../assets/webp/annenhaus.webp';
import brusttuchImg from '../assets/webp/brusttuch.webp';
import moenchehausImg from '../assets/webp/moenchehaus.webp';
import siemenshausImg from '../assets/webp/siemenshaus.webp';

import {
  lqip_Goslar___Marktplatz___2,
  lqip_Kaiserpfalz,
  lqip_Goslar_Rammelsberg_Haus_A_from_Werkshof,
  lqip_kemenate_roever,
  lqip_heiliges_kreuz,
  lqip_annenhaus,
  lqip_brusttuch,
  lqip_moenchehaus,
  lqip_siemenshaus,
} from '../assets/lqip';

const famousLocations = [
  {
    title: "Marktplatz Goslar",
    description: "Der zentrale Platz mit dem Marktbrunnen, umgeben von historischen Gildehäusern und dem Rathaus.",
    image: marktplatzImg,
    lqip: lqip_Goslar___Marktplatz___2,
  },
  {
    title: "Kaiserpfalz",
    description: "Die monumentale Pfalz der Salierkaiser, ein einzigartiges Denkmal weltlicher Baukunst.",
    image: kaiserpfalzImg,
    lqip: lqip_Kaiserpfalz,
  },
  {
    title: "Rammelsberg Bergwerk",
    description: "UNESCO-Welterbe mit über 1000 Jahren Bergbaugeschichte. Erlebe die faszinierende Welt unter Tage in 3D.",
    image: rammelsbergImg,
    lqip: lqip_Goslar_Rammelsberg_Haus_A_from_Werkshof,
  }
];

const hiddenGems = [
  {
    title: "Kemenate Röver",
    description: "Ein seltenes romanisches Wohnhaus (um 1100). Zeugnis der frühesten bürgerlichen Baukultur.",
    image: kemenateImg,
    lqip: lqip_kemenate_roever,
    tag: "Romanik (1100)"
  },
  {
    title: "Großes Heiliges Kreuz",
    description: "Eines der ältesten erhaltenen Hospitäler (1254). Ort der Fürsorge und Sozialgeschichte.",
    image: heiligeskreuzImg,
    lqip: lqip_heiliges_kreuz,
    tag: "Gotik (1254)"
  },
  {
    title: "St. Annenhaus",
    description: "Das älteste vollständig erhaltene Fachwerkhaus (1488). Ein Hospiz der Spätgotik.",
    image: annenhausImg,
    lqip: lqip_annenhaus,
    tag: "Gotik (1488)"
  },
  {
    title: "Das Brusttuch",
    description: "Reich verziertes Patrizierhaus (1521) der Frührenaissance mit der berühmten Butterhanne.",
    image: brusttuchImg,
    lqip: lqip_brusttuch,
    tag: "Renaissance (1521)"
  },
  {
    title: "Mönchehaus",
    description: "Ehemaliges Ackerbürgerhaus (1528), heute Museum für moderne Kunst. Spannender Kontrast.",
    image: moenchehausImg,
    lqip: lqip_moenchehaus,
    tag: "Renaissance (1528)"
  },
  {
    title: "Siemenshaus",
    description: "Stattliches Barock-Bürgerhaus (1693). Stammhaus der Industriellenfamilie Siemens.",
    image: siemenshausImg,
    lqip: lqip_siemenshaus,
    tag: "Barock (1693)"
  }
];

export const Locations = () => {
  return (
    <section className="py-24 bg-stone-50" id="locations-overview">
      <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION 1: FAMOUS LOCATIONS */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-4xl">
              <h2 className="text-sm font-bold text-stone-700 tracking-wider uppercase mb-2">Highlights</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Historische Wahrzeichen</h3>
              <p className="text-stone-600 text-lg">
                Diese weltbekannten Orte bilden das Herzstück von Goslar und sind Startpunkt deiner Zeitreise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {famousLocations.map((loc, idx) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <ProgressiveImage
                    src={loc.image}
                    lqip={loc.lqip}
                    alt={loc.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-2xl font-serif font-bold text-white mb-2">{loc.title}</h4>
                    <p className="text-stone-200 text-sm line-clamp-2">{loc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: HIDDEN GEMS */}
        <div className="pt-24 border-t border-stone-200 mt-40">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-4 border border-stone-300">
              <Sparkles className="w-3 h-3" />
              <span>Verborgene Schätze</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Nicht nur Wahrzeichen, sondern Zeitzeugen
            </h2>
            <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              Erlebe Goslar jenseits der bekannten Postkartenmotive. Diese sechs Orte stehen beispielhaft für verschiedene Epochen – von der Romanik bis zum Barock – und erzählen die Geschichte der Bürger, Handwerker und Kaufleute.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {hiddenGems.map((loc, idx) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 hover:border-stone-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProgressiveImage
                    src={loc.image}
                    lqip={loc.lqip}
                    alt={loc.title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

                  {/* CONTENT: Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-4 w-full z-40">
                    <h3 className="text-lg font-serif font-bold text-white mb-1 leading-tight">{loc.title}</h3>
                    <p className="text-stone-200 text-xs leading-snug line-clamp-2 opacity-90">
                      {loc.description}
                    </p>
                  </div>
                </div>

                {/* TAG: Top Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 100,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    border: '1px solid #e7e5e4',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1c1917',
                    pointerEvents: 'none'
                  }}
                >
                  {loc.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
