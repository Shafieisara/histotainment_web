import React from 'react';
import { Globe2, Smartphone, Landmark, ArrowRight } from 'lucide-react';

export const Vision = () => {
    return (
        <section className="py-24 bg-white border-b border-stone-200" id="vision">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                        Historisches Erbe trifft digitale Zukunft
                    </h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        Warum wir Goslar jetzt digital erweitern müssen.
                    </p>
                </div>

                {/* The 3 Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {/* 1. Relevance (Trend) */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                            <Globe2 className="w-8 h-8 text-stone-700" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-3">Relevanz sichern</h3>
                        <p className="text-stone-600 leading-relaxed">
                            Augmented Reality ist der neue Standard im Kulturtourismus.
                            Der Anschluss an internationale Vorbilder sichert Goslars Attraktivität für die Zukunft.
                        </p>
                    </div>

                    {/* 2. Accessibility (Benefits) */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                            <Smartphone className="w-8 h-8 text-stone-700" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-3">Intuitiver Zugang</h3>
                        <p className="text-stone-600 leading-relaxed">
                            Keine teure Hardware, keine Hürden.
                            Besucher nutzen ihr eigenes Smartphone, um Geschichte intuitiv und visuell zu verstehen.
                        </p>
                    </div>

                    {/* 3. Value (Unesco) */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                            <Landmark className="w-8 h-8 text-stone-700" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-3">Werte bewahren</h3>
                        <p className="text-stone-600 leading-relaxed">
                            Wir schaffen digitale Archive und begeistern neue Generationen für die Bausubstanz –
                            aktive Denkmalpflege im digitalen Raum.
                        </p>
                    </div>
                </div>

                {/* Fazit Box - Eye-catching but neutral */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative bg-stone-100 border-2 border-stone-300 rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                            Das Fazit
                        </h3>
                        <p className="text-xl md:text-2xl font-medium text-stone-700 leading-snug">
                            "Ein risikoarmes Pilotprojekt mit maximaler Außenwirkung für das Stadtmarketing."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
