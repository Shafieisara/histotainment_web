import React, { useState } from 'react';
import { MapPin, Globe, Info, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const InteractiveConceptB = () => {
    // START HERE: Replace this string with your Google Maps Embed URL
    // 1. Go to Google Maps -> Search "Goslar Marktplatz" (or any spot)
    // 2. Drag the Yellow Person (Pegman) to the street for Street View
    // 3. Click 3-dots (top left) -> "Share or embed image" -> "Embed a map"
    // 4. Copy the "src" from the <iframe> code and paste it below:
    const [embedUrl, setEmbedUrl] = useState<string>("https://www.google.com/maps/embed?pb=!4v1770634868442!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDRtc0NVR1E.!2m2!1d51.90285108106489!2d10.42481414089359!3f245.2416391198422!4f3.364552647197769!5f0.7820865974627469");

    // Example of a working frame if the user hadn't provided one (Generic View)
    // Since we don't have a guaranteed permanent public link, we default to empty to show instructions.

    return (
        <section className="pt-0 pb-20" id="interactive-concept-b">
            <div className="max-w-7xl xl:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Subsection Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-900/40 border border-sky-700/50 text-sky-300 text-sm font-medium shadow-lg mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Interaktive Demo</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Wie sehen 360° Virtual Tours aus?
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Erkunden Sie Goslars historische Gassen hautnah – bequem von zu Hause aus.
                    </p>
                </div>

                {/* Main Interactive Container */}
                <div className="bg-white rounded-2xl shadow-xl shadow-sky-100 border border-sky-100 overflow-hidden max-w-5xl mx-auto">

                    {/* Toolbar / Header of the Card */}
                    <div className="bg-sky-50/30 border-b border-sky-100 p-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                <Globe className="w-5 h-5 text-sky-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-stone-800">Goslar Marktplatz (Beispiel)</h3>
                                <p className="text-xs text-stone-500">Google Street View</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Optional Info Button */}
                            <button className="p-2 text-sky-400 hover:text-sky-600 transition-colors" title="Info">
                                <Info className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* The Embed Window */}
                    <div className="relative w-full h-[500px] md:h-[700px] bg-sky-50/20 group">

                        {embedUrl ? (
                            <iframe
                                src={embedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                                title="Google Street View Goslar"
                            />
                        ) : (
                            /* Placeholder State with Instructions */
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-stone-100">
                                <Globe className="w-16 h-16 text-stone-300 mb-4" />
                                <h4 className="text-xl font-bold text-stone-600 mb-2">Street View Vorschau</h4>
                                <p className="text-stone-500 max-w-md mb-6">
                                    Um die interaktive 360°-Ansicht zu aktivieren, benötigen Sie einen
                                    Google Maps Embed Code.
                                </p>

                                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-left text-sm text-stone-600 max-w-lg w-full">
                                    <h5 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                                        <Info className="w-4 h-4" />
                                        Anleitung zur Einbindung:
                                    </h5>
                                    <ol className="list-decimal list-inside space-y-1 ml-1 text-stone-700">
                                        <li>Öffnen Sie <strong>Google Maps</strong> und suchen Sie "Marktplatz Goslar".</li>
                                        <li>Ziehen Sie das <strong>gelbe Männchen</strong> auf die Karte (Street View).</li>
                                        <li>Klicken Sie oben links auf das <strong>Drei-Punkte-Menü</strong>.</li>
                                        <li>Wählen Sie <strong>"Bild teilen oder einbetten"</strong>.</li>
                                        <li>Klicken Sie auf <strong>"Karte einbetten"</strong> und kopieren Sie den Link (src).</li>
                                        <li>Fügen Sie den Link im Code in <code>InteractiveConceptB.tsx</code> ein.</li>
                                    </ol>
                                </div>

                                {/* Demo Button for checking functionality if they had a link */}
                                <div className="mt-8 flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Oder Embed-Link hier testen..."
                                        className="px-4 py-2 rounded-xl border border-stone-300 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        onChange={(e) => {
                                            // Simple check to ensure it's an embed link
                                            if (e.target.value.includes('google.com/maps/embed')) {
                                                setEmbedUrl(e.target.value);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Overlay Gradient (Optional aesthetics) */}
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Footer / Caption */}
                    <div className="bg-white p-4 border-t border-sky-100 flex justify-end">
                        <a
                            href="https://www.google.de/maps/place/Goslar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline"
                        >
                            Auf Google Maps öffnen
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>

                {/* Matterport Embed Section */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                            Konzept B: Mehr als nur Street View
                        </h3>
                        <p className="text-stone-600 mb-4 text-justify">
                            Während Google Street View in Goslar (oben) momentan lediglich auf 360°-Fotos basiert und keine freie Bewegung in Gebäuden zulässt, bietet <strong>Konzept B</strong> ein echtes räumliches Erlebnis.
                        </p>
                        <p className="text-stone-600 font-medium text-justify">
                            Unser Ziel ist es, diese immersive Technologie für <strong>alle bedeutenden historischen Orte in Goslar</strong> umzusetzen. Nutzer sollen nicht nur davor stehen, sondern eintreten und die Geschichte von innen erleben - wie hier am Beispiel des Zwingers demonstriert:
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl shadow-sky-100 border border-sky-100 overflow-hidden">
                        <div className="bg-sky-50/30 border-b border-sky-100 p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                <Globe className="w-5 h-5 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-stone-800">Zwinger Turm (Beispiel)</h3>
                                <p className="text-xs text-stone-500">Matterport 3D Tour</p>
                            </div>
                        </div>
                        <div className="relative w-full h-[500px] md:h-[700px] bg-sky-50/20">
                            <iframe
                                src="https://my.matterport.com/show/?m=LQuVUzdbFei"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                                title="Matterport 3D Tour"
                            />
                        </div>
                        {/* Footer Link */}
                        <div className="bg-white p-4 border-t border-sky-100 flex justify-end">
                            <a
                                href="https://zwinger.de/der-goslarer-zwinger-in-3d/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline"
                            >
                                Auf Zwinger.de öffnen
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
