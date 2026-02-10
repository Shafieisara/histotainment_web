import React from 'react';
import { GraduationCap, Lightbulb, Target } from 'lucide-react';

import { Hero } from './Hero';

export const AboutProject = () => {
    return (
        <>
            <Hero />
            <section className="py-20 bg-white border-b border-stone-200" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-stone-100 text-stone-800 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                            Über das Projekt
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                            Eine Vision für Goslars digitale Zukunft
                        </h2>
                        <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                            Konzeptstudie für ein innovatives Bachelor-Arbeitsprojekt
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Text Content */}
                        <div>
                            <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                                Projektinitiative
                            </h3>
                            <p className="text-stone-600 mb-4 leading-relaxed">
                                Dieses Projekt wird von <strong>Sara Sarvestani</strong>, Studentin im Studiengang
                                Digital Management an der Technischen Universität Clausthal, als Konzept für eine
                                potenzielle Bachelor-Arbeit entwickelt.
                            </p>
                            <p className="text-stone-600 mb-4 leading-relaxed">
                                Die Idee: Die UNESCO-Welterbestadt Goslar durch moderne XR-Technologien (AR & VR)
                                für Besucher:innen noch erlebbarer und faszinierender zu gestalten.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                Diese Website dient als Konzeptpräsentation für die Stadtverwaltung Goslar,
                                um das Potenzial dieser Innovation aufzuzeigen.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-stone-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-900 mb-1">Akademisches Projekt</h4>
                                    <p className="text-stone-600 text-sm">
                                        Konzept für Bachelor-Arbeit im Digital Management an der TU Clausthal
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                                    <Lightbulb className="w-6 h-6 text-stone-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-900 mb-1">Innovation trifft Tradition</h4>
                                    <p className="text-stone-600 text-sm">
                                        Moderne Technologie für jahrhundertealtes Kulturerbe
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                                    <Target className="w-6 h-6 text-stone-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-900 mb-1">Ziel</h4>
                                    <p className="text-stone-600 text-sm">
                                        Neue Besuchererlebnisse schaffen und jüngere Zielgruppen erreichen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
