import React, { Suspense } from 'react';
import { Navbar } from '../components/Navbar';
import { AboutProject } from '../components/AboutProject';
import { ProjectContext } from '../components/ProjectContext';
import { ARSolutions } from '../components/ARSolutions';
import { ConceptHeader } from '../components/ConceptHeader';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

// ── Lazy-load all heavy / below-fold sections ──────────────────────────────
// They are downloaded only when the user actually navigates to the page
// and React is ready — they do NOT block the initial paint.

const ModelSection = React.lazy(() => import('../components/ModelSection').then(m => ({ default: m.ModelSection })));
const HowItWorks = React.lazy(() => import('../components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const ARSimulation = React.lazy(() => import('../components/ARSimulation').then(m => ({ default: m.ARSimulation })));
const ReferenceProjectsA = React.lazy(() => import('../components/ReferenceProjectsA').then(m => ({ default: m.ReferenceProjectsA })));
const HowItWorksB = React.lazy(() => import('../components/HowItWorksB').then(m => ({ default: m.HowItWorksB })));
const InteractiveConceptB = React.lazy(() => import('../components/InteractiveConceptB').then(m => ({ default: m.InteractiveConceptB })));
const ReferenceProjectsB = React.lazy(() => import('../components/ReferenceProjectsB').then(m => ({ default: m.ReferenceProjectsB })));
// Note: Locations is rendered inside ProjectContext — do NOT add it here

// Minimal section-level fallback spinner
const SectionFallback = () => (
    <div className="flex justify-center items-center py-24">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

export const Home = () => {
    return (
        <div className="bg-stone-50 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 scroll-smooth">
            <style>{`html { scroll-behavior: smooth; }`}</style>
            <Navbar />
            <main>
                {/* Above-fold: loaded eagerly */}
                {/* Note: Hero is rendered inside AboutProject, do NOT render it here */}
                <AboutProject />
                <ProjectContext />
                <ARSolutions />



                {/* ── Concept A: AR Zeitreise & Storytelling ── */}
                <section
                    id="concept-a"
                    className="relative bg-amber-50 border-t border-stone-200"
                    style={{
                        borderLeftWidth: '8px',
                        borderLeftColor: '#f59e0b',
                        borderLeftStyle: 'solid'
                    }}
                >
                    <ConceptHeader
                        concept="A"
                        title="AR Zeitreise & Storytelling"
                        description="Erleben Sie Goslars Geschichte hautnah. Lauschen Sie Audio-Guides, entdecken Sie verborgene Details an historischen Bürgerhäusern und reisen Sie virtuell durch die Jahrhunderte."
                    />
                    <Suspense fallback={<SectionFallback />}>
                        <ModelSection />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <HowItWorks />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <ARSimulation />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <ReferenceProjectsA />
                    </Suspense>
                </section>

                {/* Visual Separator */}
                <div className="h-1 bg-gradient-to-r from-amber-500 via-stone-300 to-sky-500" />

                {/* ── Concept B: 360° Virtual Tours ── */}
                <section
                    id="concept-b"
                    className="relative"
                    style={{
                        backgroundColor: '#e0f2fe',
                        borderLeftWidth: '8px',
                        borderLeftColor: '#0ea5e9',
                        borderLeftStyle: 'solid'
                    }}
                >
                    <ConceptHeader
                        concept="B"
                        title="360° Virtual Tours"
                        description="Vollständige 360°-Digitalisierung von Goslars UNESCO-Welterbestätten für ortsunabhängigen virtuellen Zugang. Ermöglicht immersive Erlebnisse für Bildung, Tourismus und internationale Zielgruppen."
                    />
                    <Suspense fallback={<SectionFallback />}>
                        <HowItWorksB />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <InteractiveConceptB />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <ReferenceProjectsB />
                    </Suspense>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};
