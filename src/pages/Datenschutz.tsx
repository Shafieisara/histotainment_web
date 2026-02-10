import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Datenschutz = () => {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif font-bold mb-4">Datenschutzerklärung</h1>
                    <p className="text-stone-300">Informationen gemäß DSGVO</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 mb-6">

                    {/* Einleitung */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">Allgemeine Hinweise</h3>
                        <p className="text-stone-600 mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                        </p>
                        <p className="text-stone-600">
                            Diese Website ist ein Konzeptprojekt für eine Bachelor-Arbeit und sammelt derzeit
                            <strong> keine personenbezogenen Daten</strong>. Es werden keine Cookies gesetzt,
                            keine Tracking-Tools verwendet und keine Daten an Dritte weitergegeben.
                        </p>
                    </section>

                    {/* Datenerfassung */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">2. Datenerfassung auf dieser Website</h2>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Welche Daten werden erfasst?</h3>
                        <p className="text-stone-600 mb-4">
                            Derzeit werden auf dieser Website keine personenbezogenen Daten aktiv erfasst oder gespeichert.
                        </p>

                        <h3 className="text-lg font-medium text-stone-800 mb-2">Server-Logs (technisch notwendig)</h3>
                        <p className="text-stone-600 mb-2">
                            Beim Besuch dieser Website können automatisch folgende technische Informationen in
                            Server-Logfiles erfasst werden:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 mb-4 ml-4">
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p className="text-stone-600">
                            Diese Daten werden ausschließlich zu technischen Zwecken erfasst und nicht mit
                            anderen Datenquellen zusammengeführt.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">3. Cookies</h2>
                        <p className="text-stone-600">
                            Diese Website verwendet derzeit <strong>keine Cookies</strong>. Sollten in Zukunft
                            Cookies zum Einsatz kommen, werden Sie entsprechend informiert und können der
                            Verwendung widersprechen.
                        </p>
                    </section>

                    {/* Analyse-Tools */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">4. Analyse-Tools und Tracking</h2>
                        <p className="text-stone-600">
                            Diese Website verwendet derzeit <strong>keine Analyse-Tools oder Tracking-Dienste</strong>
                            wie Google Analytics, Facebook Pixel oder ähnliche Technologien.
                        </p>
                    </section>

                    {/* Kontaktformular */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">5. Kontaktaufnahme</h2>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">Kontaktformular</h3>
                        <p className="text-stone-600 mb-4">
                            Wenn Sie das Kontaktformular auf unserer Website nutzen, werden die von Ihnen eingegebenen
                            Daten (Name, E-Mail-Adresse, Betreff, Nachricht) nicht auf unserem Webserver gespeichert.
                            Stattdessen wird durch Klick auf "Senden" automatisch Ihr lokales E-Mail-Programm geöffnet
                            und eine E-Mail erstellt.
                        </p>
                        <p className="text-stone-600 mb-4">
                            Der Versand der E-Mail erfolgt anschließend durch Sie über Ihren eigenen E-Mail-Provider.
                            Wir erhalten diese Daten erst, wenn Sie die E-Mail aktiv absenden.
                        </p>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">E-Mail-Kontakt</h3>
                        <p className="text-stone-600 mb-4">
                            Bei der Kontaktaufnahme mit uns per E-Mail werden Ihre Angaben zur Bearbeitung der
                            Kontaktanfrage und deren Abwicklung verarbeitet.
                        </p>
                        <p className="text-stone-600">
                            Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die
                            Erforderlichkeit regelmäßig; ferner gelten die gesetzlichen Archivierungspflichten.
                        </p>
                    </section>

                    {/* Ihre Rechte */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">6. Ihre Rechte</h2>
                        <p className="text-stone-600 mb-2">
                            Sie haben jederzeit das Recht auf:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 mb-4 ml-4">
                            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                            <li>Berichtigung unrichtiger Daten</li>
                            <li>Löschung Ihrer Daten</li>
                            <li>Einschränkung der Datenverarbeitung</li>
                            <li>Datenübertragbarkeit</li>
                            <li>Widerspruch gegen die Verarbeitung</li>
                            <li>Beschwerde bei einer Aufsichtsbehörde</li>
                        </ul>
                        <p className="text-stone-600">
                            Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an
                            die im Impressum angegebene Kontaktadresse.
                        </p>
                    </section>

                    {/* SSL-Verschlüsselung */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
                        <p className="text-stone-600">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                            Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
                        </p>
                    </section>

                    {/* AI Content Generation */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">8. Nutzung von KI-Tools (Künstliche Intelligenz)</h2>
                        <p className="text-stone-600 mb-4">
                            Diese Website verwendet Bilder und Grafiken, die teilweise mit Hilfe von
                            <strong> Künstlicher Intelligenz (AI)</strong> generiert wurden, insbesondere:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 mb-4 ml-4">
                            <li>Google Gemini AI Image Generator</li>
                        </ul>
                        <p className="text-stone-600 mb-4">
                            <strong>Wichtig:</strong> Die AI-Tools werden ausschließlich zur Erstellung von
                            Bildmaterial verwendet. Es werden <strong>keine Nutzerdaten</strong> an diese
                            AI-Dienste übermittelt oder verarbeitet. Die Bildgenerierung erfolgte im Vorfeld
                            der Website-Erstellung durch den Entwickler.
                        </p>
                        <p className="text-stone-600">
                            Wenn Sie unsere Website besuchen, findet keine Interaktion mit AI-Diensten statt.
                        </p>
                    </section>

                    {/* Externe Links */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">9. Externe Links</h2>
                        <p className="text-stone-600">
                            Diese Website kann Links zu externen Websites enthalten. Für die Inhalte und
                            Datenschutzpraktiken dieser externen Seiten sind ausschließlich deren Betreiber
                            verantwortlich. Bitte beachten Sie die jeweiligen Datenschutzerklärungen.
                        </p>
                    </section>

                    {/* Änderungen */}
                    <section>
                        <h2 className="text-2xl font-semibold text-stone-900 mb-4">10. Änderungen der Datenschutzerklärung</h2>
                        <p className="text-stone-600">
                            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                            aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                            in der Datenschutzerklärung umzusetzen.
                        </p>
                        <p className="text-stone-600 mt-2">
                            <strong>Stand:</strong> Februar 2026
                        </p>
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
