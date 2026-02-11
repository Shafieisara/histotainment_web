import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin, Award, Smartphone } from 'lucide-react';

// Konzept A: Storytelling & Hidden Gems
const arVrProjects = [
    {
        name: "TimeRide Go!",
        cities: "Köln, Dresden, München",
        description: "Geführte Stadttouren mit VR-Brille. Hier steht nicht die Technik, sondern der emotionale »Blick in die Vergangenheit« im Vordergrund. Perfektes Vorbild für Storytelling.",
        technology: "VR & Mobile Guides",
        visitors: "Hohe Emotionalisierung",
        website: "https://timeride.de/timeridego/",
        icon: Smartphone
    },
    {
        name: "Yona App (Lübeck)",
        cities: "Lübeck",
        description: "Eine AR-App, die 'Zeitfenster' öffnet. Besonders stark: Die Integration von Audio-Guides, die historische Figuren zu Wort kommen lassen.",
        technology: "AR & Audio-Storytelling",
        visitors: "Fokus auf Individualtouristen",
        website: "https://www.yona.app",
        icon: MapPin
    },
    {
        name: "Essen 1887",
        cities: "Essen",
        description: "Eine Mixed-Reality-Stadtführung, bei der Hologramme von Schauspielern die Geschichte der Stadt erzählen. Ein Paradebeispiel für »Character-driven Storytelling«.",
        technology: "Mixed Reality & GPS",
        visitors: "Immersives Theater",
        website: "https://www.essen1887.de",
        icon: Award
    },
    {
        name: "WDR AR 1933-1945",
        cities: "Digital / Überall",
        description: "Zeitzeugen berichten als Hologramme von ihren Erlebnissen im Krieg. Zeigt eindrucksvoll, wie man schwere Themen sensibel und persönlich vermittelt.",
        technology: "AR & Zeitzeugen-Interviews",
        visitors: "Bildung & Gedenken",
        website: "https://1933-1945.wdr.de/",
        icon: Smartphone
    },
    {
        name: "Histpad (Schlösser)",
        cities: "Albrechtsburg Meissen u.a.",
        description: "Tablet-Guide mit 'Zeittoren'. Besucher scannen Räume und sehen das historische Leben. Verbindet Gamification mit fundiertem Wissen.",
        technology: "Tablet-AR & Schatzsuche",
        visitors: "Interaktiv für Familien",
        website: "https://www.histovery.com/de/",
        icon: MapPin
    }
];

export const ReferenceProjectsA = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl lg:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Warum es funktioniert: Storytelling & Immersion
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Diese Referenzprojekte zeigen, wie man Geschichte durch Erzählungen und Audio-Guides lebendig macht.
                    </p>
                </div>

                {/* Konzept A: AR & VR Experiences */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-amber-100">
                            <Smartphone className="w-4 h-4 text-amber-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900">Best Practices: Storytelling & Audio-Guides</h3>
                            <p className="text-xs text-stone-500">Wie andere Städte Geschichte erzählen</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {arVrProjects.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-4 shadow-md border border-stone-100 border-t-4 hover:shadow-lg transition-shadow"
                                style={{ borderTopColor: '#f59e0b' }}
                            >
                                <h4 className="text-base font-bold text-stone-900 mb-1">{project.name}</h4>
                                <p className="text-xs font-medium mb-2" style={{ color: '#b45309' }}>{project.cities}</p>
                                <p className="text-stone-600 text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium group"
                                    style={{ color: '#b45309' }}
                                >
                                    Website
                                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
