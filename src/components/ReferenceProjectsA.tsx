import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin, Award, Smartphone } from 'lucide-react';

// Konzept A: AR Time Travel - AR & VR Erlebnisse
const arVrProjects = [
    {
        name: "TimeRide",
        cities: "Köln, Berlin, München, Dresden, Frankfurt, Münster",
        description: "VR-Zeitreisen in die Geschichte deutscher Städte. Besucher erleben mit VR-Brillen historische Momente wie das unzerstörte Köln der 1920er Jahre.",
        technology: "Virtual Reality, 360° Video",
        visitors: "Über 500.000 Besucher jährlich",
        website: "https://timeride.de",
        icon: MapPin
    },
    {
        name: "Deutschlandmuseum Berlin",
        cities: "Berlin",
        description: "Preisgekröntes immersives Geschichtsmuseum mit 2000 Jahren deutscher Geschichte. Ausgezeichnet als 'Best Themed Museum 2024'.",
        technology: "4D-Spezialeffekte, Interaktive Displays",
        visitors: "Familienfreundlich, alle Altersgruppen",
        website: "https://deutschlandmuseum.de",
        icon: Award
    },
    {
        name: "ARmob Trier",
        cities: "Trier, Rheinland-Pfalz",
        description: "Universitätsprojekt mit 105 digitalen Rekonstruktionen römischer Stätten. AR-Integration historischer Bauwerke in die aktuelle Landschaft.",
        technology: "Augmented Reality, 3D-Modelle",
        visitors: "UNESCO-Welterbe Römerbauten",
        website: "https://www.trier-info.de",
        icon: Award
    },
    {
        name: "Zwinger Dresden",
        cities: "Dresden, Sachsen",
        description: "Barockes Gesamtkunstwerk mit 'Zwinger Xperience'. Multimedia-Ausstellung mit VR-Stationen und beeindruckenden 360°-Projektionen.",
        technology: "VR-Stationen, Multimedia",
        visitors: "UNESCO-Welterbe Dresdner Elbtal",
        website: "https://www.der-dresdner-zwinger.de",
        icon: MapPin
    },
    {
        name: "Barockschloss Mannheim",
        cities: "Mannheim, Baden-Württemberg",
        description: "VR-Rekonstruktion des kurfürstlichen Appartements. Besucher erleben unzugängliche Räume virtuell in ihrer ursprünglichen Pracht.",
        technology: "Virtual Reality, 3D-Rekonstruktion",
        visitors: "Teil der Staatlichen Schlösser BW",
        website: "https://www.schloss-mannheim.de",
        icon: MapPin
    }
];

export const ReferenceProjectsA = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl xl:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Warum es funktioniert: Ähnliche erfolgreiche Projekte
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Diese Referenzprojekte zeigen, wie AR/VR-Technologie erfolgreich für historische Vermittlung eingesetzt wird.
                    </p>
                </div>

                {/* Konzept A: AR & VR Experiences */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-amber-100">
                            <Smartphone className="w-4 h-4 text-amber-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900">Referenzprojekte: AR Time Travel</h3>
                            <p className="text-xs text-stone-500">Ähnliche AR/VR Erlebnisse</p>
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
