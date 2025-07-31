// src/pages/index.tsx
'use client'; // Indique que ce composant est un Client Component (nécessaire pour useState et useEffect)

import React, { useState, useEffect } from 'react'; // Importe useState et useEffect
import { usePatient } from '../context/PatientContext'; // Chemin relatif depuis src/pages
import HealthTipCard, { Recommandation } from '../components/HealthTipCard'; // Importe le composant et l'interface Recommandation
import AppointmentCard, { RendezVous } from '../components/AppointmentCard'; // Importe le composant et l'interface RendezVous
import Image from 'next/image'; // Importe le composant Image de Next.js

// Importe les données mockées
// TypeScript devrait maintenant les typer correctement comme des tableaux si tsconfig.json est bien configuré.
import rawRendezvousData from '../data/rendezvous.json';
import rawRecommandationsData from '../data/recommandations.json';

// Assurez-vous que les données importées sont bien typées comme des tableaux des interfaces définies
// Ces assertions de type sont un filet de sécurité si TypeScript a du mal à inférer automatiquement.
const rendezvousData: RendezVous[] = rawRendezvousData as RendezVous[];
const recommandationsData: Recommandation[] = rawRecommandationsData as Recommandation[];

// Composant de la page d'accueil
const HomePage: React.FC = () => {
    const { patient } = usePatient(); // Récupère le prénom du patient depuis le contexte

    // État pour stocker la recommandation du jour, initialisé à undefined
    const [recommandationDuJour, setRecommandationDuJour] = useState<Recommandation | undefined>(undefined);

    // Utilise useEffect pour générer la recommandation aléatoire uniquement côté client
    useEffect(() => {
        if (recommandationsData.length > 0) {
            const randomIndex = Math.floor(Math.random() * recommandationsData.length);
            setRecommandationDuJour(recommandationsData[randomIndex]);
        }
    }, []); // Le tableau vide assure que cet effet ne s'exécute qu'une seule fois après le premier rendu client

    // Logique pour obtenir le dernier rendez-vous passé
    const dernierRendezVous = rendezvousData
        .filter(rdv => rdv.statut === 'passé')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Bienvenue, {patient.prenom}!</h1>

            {/* Aperçu du dernier rendez-vous */}
            <section>
                {/* Image ajoutée avant le titre de la section */}
                <div className="flex items-center space-x-2 mb-4">
                    <Image
                        src="/images/appointment.png" // Chemin relatif au dossier public
                        alt="Icône de rendez-vous"
                        width={32} // Ajustez la taille selon vos préférences
                        height={32} // Ajustez la taille selon vos préférences
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">Votre dernier rendez-vous</h2>
                </div>
                {dernierRendezVous ? (
                    <AppointmentCard appointment={dernierRendezVous} />
                ) : (
                    <p className="text-gray-600">Aucun rendez-vous passé trouvé.</p>
                )}
            </section>

            {/* Aperçu de la recommandation santé du jour */}
            <section>
                {/* Image ajoutée avant le titre de la section */}
                <div className="flex items-center space-x-2 mb-4">
                    <Image
                        src="/images/quality.png" // Chemin relatif au dossier public
                        alt="Icône de recommandation"
                        width={32} // Ajustez la taille selon vos préférences
                        height={32} // Ajustez la taille selon vos préférences
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">Recommandation santé du jour</h2>
                </div>
                {/* Affiche la recommandation seulement si elle a été définie côté client */}
                {recommandationDuJour ? (
                    <HealthTipCard tip={recommandationDuJour} />
                ) : (
                    <p className="text-gray-600">Chargement de la recommandation...</p>
                )}
            </section>
        </div>
    );
};

export default HomePage;
