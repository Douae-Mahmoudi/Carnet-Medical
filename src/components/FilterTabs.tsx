import React from 'react';
import classNames from 'classnames'; // Importe la librairie classnames pour gérer les classes conditionnelles

interface FilterTabsProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void; // Fonction de rappel pour le changement de filtre
}

// Composant pour afficher des onglets de filtre
const FilterTabs: React.FC<FilterTabsProps> = ({ filters, activeFilter, onFilterChange }) => {
    return (
        <div className="flex space-x-2 mb-6">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={classNames(
                        "px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                        {
                            "bg-primary text-white shadow-md": activeFilter === filter, // Styles pour le filtre actif
                            "bg-gray-200 text-gray-700 hover:bg-gray-300": activeFilter !== filter, // Styles pour les filtres inactifs
                        }
                    )}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;

