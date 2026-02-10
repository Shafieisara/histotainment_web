import React from 'react';
import { Smartphone, Globe } from 'lucide-react';

interface ConceptHeaderProps {
    concept: 'A' | 'B';
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export const ConceptHeader = ({ concept, title, description, icon }: ConceptHeaderProps) => {
    const isConceptA = concept === 'A';
    const badgeColor = isConceptA 
        ? 'bg-amber-100 text-amber-800 border-amber-200' 
        : 'bg-sky-100 text-sky-800 border-sky-200';
    const iconBgColor = isConceptA ? '#fcd34d' : '#7dd3fc'; // Amber-300 for AR Time Travel, Sky-300 for Virtual Tours
    const iconTextColor = isConceptA ? '#b45309' : '#0369a1'; // Match ARSolutions exact colors
    const defaultIcon = isConceptA ? <Smartphone className="w-6 h-6" /> : <Globe className="w-6 h-6" />;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md p-3"
                    style={{
                        backgroundColor: iconBgColor,
                        color: iconTextColor
                    }}
                >
                    {icon || defaultIcon}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-block px-4 py-1.5 ${badgeColor} text-xs font-bold tracking-wider uppercase rounded-full border`}>
                            Konzept {concept}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-lg text-stone-600 max-w-3xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
