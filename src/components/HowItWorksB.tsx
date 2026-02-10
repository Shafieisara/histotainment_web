import React from 'react';
import { Globe, MousePointer, Info } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
    {
        id: 1,
        title: "Website öffnen",
        description: "Besuche die virtuelle Tour-Plattform bequem von Laptop, Tablet oder VR-Headset aus.",
        icon: Globe,
        color: "sky"
    },
    {
        id: 2,
        title: "Navigation",
        description: "Bewege dich frei durch die 360°-Ansichten und erkunde historische Orte in jede Richtung.",
        icon: MousePointer,
        color: "sky"
    },
    {
        id: 3,
        title: "Entdecken",
        description: "Klicke auf Informationspunkte, um Details zur Geschichte und Bedeutung der Orte zu erfahren.",
        icon: Info,
        color: "sky"
    }
];

export const HowItWorksB = () => {
    return (
        <section className="pt-8 pb-20" id="how-it-works-b">
            <div className="max-w-7xl xl:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-sky-700 tracking-wider uppercase mb-2">Anleitung</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">So funktioniert die virtuelle Tour</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Container - No image, just icon-based */}
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 shadow-lg bg-gradient-to-br from-sky-50 to-white">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <step.icon className="w-16 h-16 text-sky-600" />
                                    </div>
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center font-serif font-bold text-sky-700 shadow-md border border-sky-100">
                                    {step.id}
                                </div>
                            </div>

                            {/* Icon & Text */}
                            <div className="bg-white p-4 rounded-2xl shadow-md w-full relative -mt-12 z-10 max-w-[90%] mx-auto group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-sky-50 rounded-full text-sky-700">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h4>
                                <p className="text-stone-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
