// src/pages/dossier/index.tsx
import React from 'react';

// Importe les données mockées du dossier médical
import rawDossierData from '../../data/dossier.json'; // Chemin relatif depuis src/pages/dossier

// Définition de l'interface pour un Traitement
interface Traitement {
    nom: string;
    posologie: string;
    debut: string;
    fin: string | null;
}

// Définition de l'interface pour la structure complète du dossier médical
interface DossierMedical {
    antecedents: string[];
    allergies: string[];
    traitements: Traitement[];
}

// Assurez-vous que les données importées sont bien typées
const dossierData: DossierMedical = rawDossierData as DossierMedical;

// Composant pour afficher une section générique du dossier (Antécédents, Allergies)
interface DossierSectionProps {
    title: string;
    items: string[];
}

const DossierSection: React.FC<DossierSectionProps> = ({ title, items }) => (
    <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        {items.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600">Aucun(e) {title.toLowerCase()} enregistré(e).</p>
        )}
    </div>
);

// Composant pour afficher les traitements en cours
interface TraitementsSectionProps {
    traitements: Traitement[];
}

const TraitementsSection: React.FC<TraitementsSectionProps> = ({ traitements }) => (
    <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Traitements en cours</h2>
        {traitements.length > 0 ? (
            <ul className="space-y-3 text-gray-700">
                {traitements.map((traitement, index) => (
                    <li key={index} className="border-b border-gray-100 pb-2 last:border-b-0">
                        <p><span className="font-medium">{traitement.nom}</span>: {traitement.posologie}</p>
                        <p className="text-sm text-gray-500">
                            Début: {new Date(traitement.debut).toLocaleDateString('fr-FR')}
                            {traitement.fin && ` - Fin: ${new Date(traitement.fin).toLocaleDateString('fr-FR')}`}
                        </p>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600">Aucun traitement en cours enregistré.</p>
        )}
    </div>
);


// Composant principal de la page du dossier médical
const DossierMedicalPage: React.FC = () => {
    // Accède aux propriétés de dossierData, qui est maintenant correctement typé
    const { antecedents, allergies, traitements } = dossierData;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Mon Dossier Médical</h1>

            {/* Section des antécédents médicaux */}
            <DossierSection title="Antécédents Médicaux" items={antecedents} />

            {/* Section des allergies */}
            <DossierSection title="Allergies" items={allergies} />

            {/* Section des traitements en cours */}
            <TraitementsSection traitements={traitements} />
        </div>
    );
};

export default DossierMedicalPage;
