import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold text-slate-100 tracking-tight block mb-4">
              Goslar
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Konzeptentwurf für das Stadtmarketing Goslar.
              Eine Vision für interaktives Erleben von Geschichte.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-amber-600 transition-colors">Über das Projekt</a></li>
              <li><a href="#cities" className="hover:text-amber-600 transition-colors">Standorte</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />sara.shafiei.sarvestani@tu-clausthal.de
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Goslar AR. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <Link to="/impressum" className="hover:text-amber-600 transition-colors">Impressum</Link>
            <span className="text-slate-700">•</span>
            <Link to="/datenschutz" className="hover:text-amber-600 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
