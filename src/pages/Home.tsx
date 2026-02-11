import React from 'react';
import { Navbar } from '../components/Navbar';
import { AboutProject } from '../components/AboutProject';
import { ProjectContext } from '../components/ProjectContext'; // New component

import { ARSimulation } from '../components/ARSimulation';
import { ModelSection } from '../components/ModelSection';
import { HowItWorks } from '../components/HowItWorks';
import { ARSolutions } from '../components/ARSolutions';
import { Locations } from '../components/Locations';
import { ReferenceProjectsA } from '../components/ReferenceProjectsA';
import { InteractiveConceptB } from '../components/InteractiveConceptB';
import { HowItWorksB } from '../components/HowItWorksB';
import { ReferenceProjectsB } from '../components/ReferenceProjectsB';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ConceptHeader } from '../components/ConceptHeader';

export const Home = () => {
    return (
        <div className="bg-stone-50 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 scroll-smooth">
            <style>{`html { scroll-behavior: smooth; }`}</style>
            <Navbar />
            <main>
                <AboutProject />
                <ProjectContext />

                <ARSolutions />



                {/* Concept A: AR Time Travel */}
                <section
                    id="concept-a"
                    className="relative bg-amber-50 border-t border-stone-200"
                    style={{
                        borderLeftWidth: '8px',
                        borderLeftColor: '#f59e0b', // amber-500
                        borderLeftStyle: 'solid'
                    }}
                >
                    <ConceptHeader
                        concept="A"
                        title="AR Zeitreise & Storytelling"
                        description="Erleben Sie Goslars Geschichte hautnah. Lauschen Sie Audio-Guides, entdecken Sie verborgene Details an historischen Bürgerhäusern und reisen Sie virtuell durch die Jahrhunderte."
                    />
                    <ModelSection />
                    <HowItWorks />
                    <ARSimulation />
                    <ReferenceProjectsA />
                </section>

                {/* Visual Separator */}
                <div className="h-1 bg-gradient-to-r from-amber-500 via-stone-300 to-sky-500" />

                {/* Concept B: 360° Virtual Tours */}
                <section
                    id="concept-b"
                    className="relative"
                    style={{
                        backgroundColor: '#e0f2fe', // sky-100 - matches ARSolutions
                        borderLeftWidth: '8px',
                        borderLeftColor: '#0ea5e9', // sky-500
                        borderLeftStyle: 'solid'
                    }}
                >
                    <ConceptHeader
                        concept="B"
                        title="360° Virtual Tours"
                        description="Vollständige 360°-Digitalisierung von Goslars UNESCO-Welterbestätten für ortsunabhängigen virtuellen Zugang. Ermöglicht immersive Erlebnisse für Bildung, Tourismus und internationale Zielgruppen."
                    />
                    <HowItWorksB />
                    <InteractiveConceptB />
                    <ReferenceProjectsB />
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};
