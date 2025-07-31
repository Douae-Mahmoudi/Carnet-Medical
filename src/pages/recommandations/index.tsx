// src/pages/recommandations/index.tsx
import React, { useState, useEffect } from 'react';
import HealthTipCard, { Recommandation } from '../../components/HealthTipCard'; // Importe le composant et l'interface Recommandation
import FilterTabs from '../../components/FilterTabs'; // Chemin relatif depuis src/pages/recommandations

// Importe les données mockées
import rawRecommandationsData from '../../data/recommandations.json'; // Chemin relatif depuis src/pages/recommandations

// Assurez-vous que les données importées sont bien typées comme un tableau de Recommandation
const recommandationsData: Recommandation[] = rawRecommandationsData as Recommandation[]; // Assertion de type

// Composant de la page des recommandations santé
const RecommandationsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('Tous'); // État pour la catégorie active
    const [filteredRecommandations, setFilteredRecommandations] = useState<Recommandation[]>([]); // État pour les recommandations filtrées

    // Récupère toutes les catégories uniques des recommandations
    // Utilise les données typées pour s'assurer que .map(rec => rec.categorie) est valide
    const categories = ['Tous', ...new Set(recommandationsData.map(rec => rec.categorie))];

    // Effet pour filtrer les recommandations chaque fois que la catégorie active change
    useEffect(() => {
        if (activeCategory === 'Tous') {
            setFilteredRecommandations(recommandationsData);
        } else {
            // Utilise les données typées pour s'assurer que .filter(rec => rec.categorie === activeCategory) est valide
            setFilteredRecommandations(recommandationsData.filter(rec => rec.categorie === activeCategory));
        }
    }, [activeCategory]); // Déclenche l'effet lorsque activeCategory change

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Recommandations Santé</h1>

            {/* Composant de filtres par catégorie */}
            <FilterTabs
                filters={categories}
                activeFilter={activeCategory}
                onFilterChange={setActiveCategory}
            />

            {/* Liste des recommandations filtrées */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRecommandations.length > 0 ? (
                    filteredRecommandations.map(tip => (
                        <HealthTipCard key={tip.id} tip={tip} />
                    ))
                ) : (
                    <p className="text-gray-600 col-span-full">Aucune recommandation ne correspond à cette catégorie.</p>
                )}
            </div>
        </div>
    );
};

export default RecommandationsPage;
