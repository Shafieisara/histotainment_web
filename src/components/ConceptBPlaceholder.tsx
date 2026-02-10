
import React from 'react';
import { Globe, RefreshCw, Layers } from 'lucide-react';

export const ConceptBPlaceholder = () => {
    return (
        <section className="py-24 bg-sky-50/30 border-t border-sky-100" id="concept-b">
            <div className="max-w-7xl xl:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                        Konzept B
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        360° Virtual Tours
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Ortsunabhängige Erkundung von Goslar durch immersive 360°-Technologie.
                        <br /><span className="text-sm text-sky-600 font-medium">(In Entwicklung)</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Placeholder 1: Virtual Tours */}
                    <div className="border-2 border-dashed border-sky-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white/50 h-64 justify-center hover:bg-white hover:border-sky-300 transition-all group">
                        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Globe className="w-8 h-8 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Virtuelle Rundgänge</h3>
                        <p className="text-stone-500 text-sm">
                            Interaktive 360°-Panoramen der historischen Altstadt und Welterbestätten.
                        </p>
                    </div>

                    {/* Placeholder 2: VR Integration */}
                    <div className="border-2 border-dashed border-sky-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white/50 h-64 justify-center hover:bg-white hover:border-sky-300 transition-all group">
                        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <RefreshCw className="w-8 h-8 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">VR-Integration</h3>
                        <p className="text-stone-500 text-sm">
                            Vollständig immersive Erlebnisse kompatibel mit VR-Headsets (z.B. Meta Quest).
                        </p>
                    </div>

                    {/* Placeholder 3: Multimedia Context */}
                    <div className="border-2 border-dashed border-sky-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white/50 h-64 justify-center hover:bg-white hover:border-sky-300 transition-all group">
                        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Layers className="w-8 h-8 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Multimedia-Kontext</h3>
                        <p className="text-stone-500 text-sm">
                            Einbindung von Audio-Guides, historischen Dokumenten und Experten-Interviews.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
