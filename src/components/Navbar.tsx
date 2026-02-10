import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              Histotainment für Goslar
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">Über das Projekt</a>
            <a href="#cities" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">Standorte</a>
            <a href="#concept-a" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">Konzept A</a>
            <a href="#concept-b" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">Konzept B</a>
            <a href="#contact" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 p-2 rounded-md hover:bg-stone-200 focus:outline-none"
              aria-label={isOpen ? 'Navigation schließen' : 'Navigation öffnen'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
            id="mobile-nav"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Über das Projekt</a>
              <a href="#cities" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Standorte</a>
              <a href="#concept-a" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Konzept A</a>
              <a href="#concept-b" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Konzept B</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Kontakt</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
