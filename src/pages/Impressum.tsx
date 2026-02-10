import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Impressum = () => {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-bold mb-4">Impressum</h1>
                    <p className="text-stone-300">Angaben gemäß § 5 TMG</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 mb-6">
                    {/* Angaben gemäß TMG */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Verantwortlich für den Inhalt</h2>
                        <p className="text-stone-700 mb-2">
                            <strong>Sara Sarvestani</strong>
                        </p>
                        <p className="text-stone-600">
                            Studentin der Technischen Universität Clausthal<br />
                            Studiengang: Digital Management<br />
                            Matrikelnummer: 504645
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Kontakt</h2>
                        <p className="text-stone-600">
                            E-Mail: <a href="mailto:sss17@tu-clausthal.de" className="text-amber-700 hover:text-amber-600">sss17@tu-clausthal.de</a>
                        </p>
                    </section>

                    {/* Universität */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Hochschule</h2>
                        <p className="text-stone-600">
                            Technische Universität Clausthal<br />
                            Adolph-Roemer-Straße 2a<br />
                            38678 Clausthal-Zellerfeld<br />
                            Deutschland
                        </p>
                        <p className="text-stone-600 mt-2">
                            Website: <a href="https://www.tu-clausthal.de" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600">www.tu-clausthal.de</a>
                        </p>
                    </section>

                    {/* Projekt */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Über dieses Projekt</h2>
                        <p className="text-stone-600">
                            Diese Website dient als Konzeptvorstellung für ein Bachelor-Arbeitsprojekt
                            zum Thema "Augmented Reality Histotainment für UNESCO-Welterbestadt Goslar".
                        </p>
                        <p className="text-stone-600 mt-2">
                            Das Projekt wird in Kooperation mit der Technischen Universität Clausthal entwickelt
                            und soll der Stadtverwaltung Goslar als Projektvorschlag präsentiert werden.
                        </p>
                    </section>

                    {/* Haftungsausschluss */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Haftungsausschluss</h2>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">Haftung für Inhalte</h3>
                        <p className="text-stone-600 mb-4">
                            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                        </p>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Haftung für Links</h3>
                        <p className="text-stone-600 mb-4">
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                        </p>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Urheberrecht</h3>
                        <p className="text-stone-600">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                            Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                    </section>

                    {/* Bildnachweise */}
                    <section>
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">Bildnachweise</h2>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Reale Fotografien</h3>
                        <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                            <li>
                                <strong>Marktplatz Goslar (modern):</strong> Eigene Fotografie / Public Domain
                            </li>
                            <li>
                                <strong>Kaiserpfalz, Zwinger-Turm, Kaiserworth:</strong> Wikimedia Commons / Public Domain
                            </li>
                        </ul>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">KI-generierte Bilder</h3>
                        <p className="text-stone-600 mb-2">
                            Folgende Visualisierungen wurden mithilfe von <strong>Künstlicher Intelligenz (AI)</strong> erstellt:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                            <li>
                                <strong>Historische Marktplatz-Ansicht (1520):</strong> Generiert mit Google Gemini AI Image Generator basierend auf historischen Beschreibungen
                            </li>
                            <li>
                                <strong>Hero-Bild (Goslar Panorama):</strong> Generiert mit Google Gemini AI
                            </li>
                            <li>
                                <strong>Dekorative Hintergründe und Grafiken:</strong> Teilweise mit AI-Tools erstellt
                            </li>
                        </ul>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Technische Ressourcen</h3>
                        <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                            <li>
                                <strong>Icons:</strong> Lucide React Icons (MIT License, Open Source)
                            </li>
                            <li>
                                <strong>Frameworks:</strong> React, TypeScript, Tailwind CSS
                            </li>
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                            <p className="text-stone-700 text-sm">
                                <strong>Hinweis:</strong> Die KI-generierten historischen Darstellungen dienen ausschließlich
                                zu Visualisierungszwecken und erheben keinen Anspruch auf historische Genauigkeit.
                                Sie basieren auf allgemein zugänglichen historischen Informationen und sollen
                                eine atmosphärische Vorstellung vom mittelalterlichen Goslar vermitteln.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Zurück Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Zurück zur Startseite
                </Link>
            </div>
        </div>
    );
};
