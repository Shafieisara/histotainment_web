import React from 'react';
import { Mail, Send } from 'lucide-react';

export const Contact = () => {
    const handleContact = () => {
        window.location.href = 'mailto:sara.shafiei.sarvestani@tu-clausthal.de?subject=Anfrage zu Goslar AR Histotainment';
    };

    return (
        <section className="py-20 bg-stone-50 border-t-2 border-stone-300 relative z-10" id="contact">
            <div className="max-w-7xl xl:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100/40 border border-stone-200 text-stone-700 text-sm font-medium mb-6">
                        <Mail className="w-4 h-4" />
                        <span>Kontakt aufnehmen</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                        Wir freuen uns auf Ihre <br className="hidden md:block" /> <span className="text-stone-700">Nachricht</span>
                    </h2>

                    <p className="text-lg text-stone-600">
                        Haben Sie Fragen zum Projekt oder Interesse an einer Zusammenarbeit? <br className="hidden md:block" />
                        Schreiben Sie uns direkt.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <button
                        type="button"
                        onClick={handleContact}
                        className="w-full py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold text-base text-white"
                        style={{ backgroundColor: '#000000' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1c1917';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#000000';
                        }}
                    >
                        <Send className="w-5 h-5" />
                        <span>Kontakt aufnehmen</span>
                    </button>

                    <p className="text-xs text-center text-stone-400 mt-4">
                        Durch Absenden öffnet sich Ihr Standard-E-Mail-Programm.
                    </p>
                </div>
            </div>
        </section>
    );
};
