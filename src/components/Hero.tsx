import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ArrowRight } from 'lucide-react';

// WebP version of hero image
import goslarHeroImage from '../assets/webp/Goslar_Marktplatz.webp';
import { lqip_Goslar_Marktplatz } from '../assets/lqip';

export const Hero = () => {
  const [heroLoaded, setHeroLoaded] = React.useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Image with progressive blur-up */}
      <div className="absolute inset-0 z-0">
        {/* Blurred LQIP – visible immediately */}
        <img
          src={lqip_Goslar_Marktplatz}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(20px)',
            transform: 'scale(1.08)',
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.5s ease',
            opacity: heroLoaded ? 0 : 1,
          }}
        />
        {/* Full WebP image fades in on top */}
        <img
          src={goslarHeroImage}
          alt="Historic Goslar Market Square"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.6s ease',
            opacity: heroLoaded ? 1 : 0,
          }}
          onLoad={() => setHeroLoaded(true)}
        />
        {/* Overlay gradient for readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight drop-shadow-xl">
            Geschichte hautnah<br />
            erleben.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-stone-200 font-light leading-relaxed drop-shadow-lg">
            Eintauchen in die Vergangenheit.<br className="hidden md:block" />
            Ob vor Ort am Originalschauplatz oder digital von überall.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white hover:bg-stone-900 text-lg font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <Smartphone className="w-5 h-5" />
              Über das Projekt
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              Zu den Konzepten
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
