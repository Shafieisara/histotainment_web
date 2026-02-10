import React from 'react';
import { GlobalTrendSection } from './GlobalTrendSection';
import { Locations } from './Locations';
import { Benefits } from './Benefits';
import { Unesco } from './Unesco';

export const ProjectContext = () => {
    return (
        <>
            <GlobalTrendSection />
            <Locations />
            <Benefits />
            <Unesco />
        </>
    );
};
