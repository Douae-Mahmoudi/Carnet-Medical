'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

//  les données du patient
interface Patient {
    prenom: string;
    nom: string;
}

interface PatientContextType {
    patient: Patient;
    setPatient: (patient: Patient) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

// Props pour le fournisseur de contexte
interface PatientProviderProps {
    children: ReactNode;
}

// Composant fournisseur de contexte
export const PatientProvider: React.FC<PatientProviderProps> = ({ children }) => {
    // État local pour stocker les informations du patient
    const [patient, setPatient] = useState<Patient>({ prenom: 'Alice', nom: 'Durand' }); // Données mockées du patient

    return (
        <PatientContext.Provider value={{ patient, setPatient }}>
            {children}
        </PatientContext.Provider>
    );
};

export const usePatient = () => {
    const context = useContext(PatientContext);
    if (context === undefined) {
        // Lance une erreur si le hook est utilisé en dehors d'un PatientProvider
        throw new Error('usePatient doit être utilisé à l\'intérieur d\'un PatientProvider');
    }
    return context;
};
