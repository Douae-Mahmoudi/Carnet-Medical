import React from 'react';

//une recommandation de santé
export interface Recommandation {
    id: string;
    categorie: string;
    titre: string;
    description: string;
}

interface HealthTipCardProps {
    tip: Recommandation;
}

// Composant pour afficher une carte de recommandation de santé
const HealthTipCard: React.FC<HealthTipCardProps> = ({ tip }) => {
    return (
        <div className="card">
            <h3 className="text-lg font-semibold text-primary mb-2">{tip.titre}</h3>
            <p className="text-gray-700 mb-2">{tip.description}</p>
            <span className="text-sm font-medium text-secondary bg-gray-100 px-3 py-1 rounded-full">
        {tip.categorie}
      </span>
        </div>
    );
};

export default HealthTipCard;

