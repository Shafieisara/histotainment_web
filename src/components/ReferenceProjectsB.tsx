import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Users, Award, Globe, MapPin } from 'lucide-react';

// Konzept B: 360° Virtual Tours - NUR virtuelle Rundgänge
const virtual360Projects = [
    {
        name: "Pergamonmuseum Berlin",
        cities: "Berlin (Museumsinsel)",
        description: "UNESCO-Weltkulturerbe mit 360°-VR-Touren. Digitaler Zugang zu antiken Sammlungen und monumentalen Bauwerken der Antikensammlung.",
        technology: "360° Virtual Reality Tour",
        visitors: "Teil der Staatlichen Museen Berlin",
        website: "https://www.smb.museum/museen-einrichtungen/pergamonmuseum/",
        icon: Award
    },
    {
        name: "Deutsches Museum München",
        cities: "München",
        description: "Weltweit größtes Technik-Museum mit VR Lab. Interaktive VR-Erlebnisse zu Wissenschaft, Technik und Innovation für alle Altersgruppen.",
        technology: "Virtual Reality Lab, 360° Rundgänge",
        visitors: "1,5 Mio. Besucher jährlich",
        website: "https://www.deutsches-museum.de",
        icon: Award
    },
    {
        name: "UNESCO Welterbe VR App",
        cities: "Deutschlandweit (46 UNESCO-Stätten)",
        description: "Offizielle VR-App der Deutschen Zentrale für Tourismus. 360°-Panoramen aller deutschen UNESCO-Welterbestätten, Mehrspielermodus.",
        technology: "Virtual Reality, Mixed Reality",
        visitors: "Meta Quest Platform, kostenlos",
        website: "https://www.meta.com/experiences/5718790074868037/",
        icon: Users
    },
    {
        name: "Klassik Stiftung Weimar",
        cities: "Weimar, Thüringen",
        description: "Virtuelle Rundgänge durch Goethe-Wohnhaus, Goethe Gartenhaus und Schloss Tiefurt. UNESCO-Welterbe 'Klassisches Weimar' digital erlebbar.",
        technology: "360° Virtuelle Touren",
        visitors: "UNESCO-Welterbe, Kulturhauptstadt",
        website: "https://www.klassik-stiftung.de",
        icon: Award
    },
    {
        name: "Völklinger Hütte",
        cities: "Völklingen, Saarland",
        description: "UNESCO-Weltkulturerbe Industriekultur mit 360° Virtual Experience und VR-Schulprogrammen. Google Arts & Culture Partner.",
        technology: "360° VR-Tour",
        visitors: "200.000+ jährlich",
        website: "https://www.voelklinger-huette.org",
        icon: MapPin
    }
];

export const ReferenceProjectsB = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl xl:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Warum es funktioniert: Ähnliche erfolgreiche Projekte
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Diese Referenzprojekte zeigen, wie 360°-Technologie erfolgreich für virtuelle Rundgänge eingesetzt wird.
                    </p>
                </div>

                {/* Konzept B: 360° Virtual Tours */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-sky-100">
                            <Globe className="w-4 h-4 text-sky-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900">Referenzprojekte: 360° Virtual Tours</h3>
                            <p className="text-xs text-stone-500">Ähnliche virtuelle Rundgänge</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {virtual360Projects.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-4 shadow-md border border-stone-100 border-t-4 hover:shadow-lg transition-shadow"
                                style={{ borderTopColor: '#0ea5e9' }}
                            >
                                <h4 className="text-base font-bold text-stone-900 mb-1">{project.name}</h4>
                                <p className="text-xs font-medium mb-2" style={{ color: '#0369a1' }}>{project.cities}</p>
                                <p className="text-stone-600 text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium group"
                                    style={{ color: '#0369a1' }}
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
