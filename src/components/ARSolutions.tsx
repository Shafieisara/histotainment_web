import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Globe, MapPin, Clock, Eye, Sparkles } from 'lucide-react';

const solutions = [
    {
        id: 'ar-timetravel',
        badge: 'Konzept A',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        cardBg: 'bg-white',
        borderColor: 'border-stone-100 border-t-4 border-t-amber-500',
        icon: Smartphone,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-700',
        title: 'AR Time Travel',
        subtitle: 'Augmented Reality Zeitreise-Konzept',
        description: 'Digitale Überlagerung historischer Ansichten an drei zentralen Orten in Goslar. Besucher können per Smartphone-Kamera historische Gebäudeansichten am Originalstandort erleben und Vergangenheit mit Gegenwart vergleichen.',
        features: [
            { icon: Sparkles, text: 'AR-Overlay-Technologie für historische Visualisierung' },
            { icon: Clock, text: 'Zeitvergleich: Mittelalterliche & moderne Ansichten' },
            { icon: Smartphone, text: 'Niederschwelliger Zugang via Smartphone' },
            { icon: MapPin, text: 'Standorte: Marktplatz, Kaiserpfalz, Rammelsberg' }
        ],
        cta: 'Konzept ansehen',
        ctaLink: '#concept-a',
        ctaStyle: 'text-white',
        themeColor: '#f59e0b', // Amber 500
        lightColor: '#fcd34d', // Amber 300 - more vibrant for AR Time Travel
        darkColor: '#b45309'   // Amber 700
    },
    {
        id: '360-tours',
        badge: 'Konzept B',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
        cardBg: 'bg-white',
        borderColor: 'border-stone-100 border-t-4 border-t-sky-500',
        icon: Globe,
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-700',
        title: '360° Virtual Tours',
        subtitle: 'Immersive Rundgänge durch UNESCO-Welterbestätten',
        description: 'Vollständige 360°-Digitalisierung von Goslars UNESCO-Welterbestätten für ortsunabhängigen virtuellen Zugang. Ermöglicht immersive Erlebnisse für Bildung, Tourismus und internationale Zielgruppen.',
        features: [
            { icon: Globe, text: '360°-Dokumentation von Goslars UNESCO-Welterbe' },
            { icon: Eye, text: 'VR-Integration (Meta Quest kompatibel)' },
            { icon: MapPin, text: 'Fokus: Rammelsberg, Kaiserpfalz, Marktkirche' },
            { icon: Sparkles, text: 'Kontextualisierung durch Multimedia-Ebenen' }
        ],
        cta: 'Konzept ansehen',
        ctaLink: '#concept-b',
        ctaStyle: 'text-white',
        themeColor: '#0ea5e9', // Sky 500
        lightColor: '#7dd3fc', // Sky 300 - more vibrant for Virtual Tours
        darkColor: '#0369a1'   // Sky 700
    }
];

export const ARSolutions = () => {
    return (
        <section className="py-20 bg-white" id="solutions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                        Bachelorarbeit-Konzept
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Zwei AR/VR-Ansätze zur Auswahl
                    </h2>
                    <p className="text-stone-600 max-w-3xl mx-auto text-lg mb-6">
                        Im Rahmen meiner <strong>Bachelorarbeit</strong> stelle ich zwei alternative digitale Konzepte
                        für die Vermittlung von <strong>Goslars UNESCO-Welterbe</strong> vor.
                        Beide Ansätze verfolgen unterschiedliche Strategien und Zielgruppen.
                    </p>
                    <div className="bg-stone-50 border-2 border-stone-200 rounded-xl p-6 max-w-3xl mx-auto">
                        <p className="text-stone-700 font-medium">
                            <strong className="text-stone-900">Ihre Entscheidung:</strong> Das von Ihnen präferierte Konzept
                            wird als Schwerpunkt meiner Bachelorarbeit weiterentwickelt und für Goslar implementiert.
                        </p>
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative ${solution.cardBg} ${solution.borderColor} rounded-2xl p-8 border-2 shadow-md hover:shadow-lg transition-all`}
                            style={{ borderTopColor: solution.themeColor }}
                        >
                            {/* Status Badge - Concept Color */}
                            <div
                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6`}
                                style={{ backgroundColor: solution.lightColor, color: solution.darkColor, borderColor: solution.lightColor }}
                            >
                                {solution.badge}
                            </div>

                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 p-3`}
                                style={{ backgroundColor: solution.lightColor }}
                            >
                                <solution.icon className={`w-8 h-8`} style={{ color: solution.darkColor }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                                {solution.title}
                            </h3>
                            <p className="text-sm font-medium text-stone-500 mb-4">
                                {solution.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-stone-600 leading-relaxed mb-6">
                                {solution.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-6 mb-8">
                                {solution.features.map((feature, featureIdx) => (
                                    <div key={featureIdx} className="flex items-start gap-3">
                                        <div
                                            className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5"
                                            style={{ backgroundColor: solution.lightColor }}
                                        >
                                            <feature.icon className="w-4 h-4" style={{ color: solution.darkColor }} />
                                        </div>
                                        <span className="text-sm text-stone-700 leading-relaxed">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href={solution.ctaLink}
                                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg ${solution.ctaStyle}`}
                                style={{ backgroundColor: solution.darkColor }}
                            >
                                {solution.cta} →
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-stone-50 rounded-xl p-6 border border-stone-200 max-w-4xl mx-auto"
                >
                    <h4 className="text-stone-900 font-bold mb-2">Zwei eigenständige Konzepte mit unterschiedlichen Schwerpunkten</h4>
                    <p className="text-stone-600">
                        <strong className="text-amber-800">Konzept A (AR Time Travel):</strong> Fokus auf vor-Ort-Erlebnisse mit Smartphone.
                        <br className="my-2" />
                        <strong className="text-sky-800">Konzept B (360° Virtual Tours):</strong> Fokus auf ortsunabhängigen virtuellen Zugang für Bildungseinrichtungen, Forschung und internationale Zielgruppen.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
