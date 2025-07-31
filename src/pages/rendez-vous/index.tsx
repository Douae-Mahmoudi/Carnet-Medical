// src/pages/rendez-vous/index.tsx
import React, { useState, useEffect } from 'react';
import AppointmentCard, { RendezVous } from '../../components/AppointmentCard'; // Importe le composant et l'interface RendezVous
import FilterTabs from '../../components/FilterTabs'; // Chemin relatif depuis src/pages/rendez-vous

// Importe les données mockées
import rawRendezvousData from '../../data/rendezvous.json'; // Chemin relatif depuis src/pages/rendez-vous

// Assurez-vous que les données importées sont bien typées comme un tableau de RendezVous
const rendezvousData: RendezVous[] = rawRendezvousData as RendezVous[]; // Assertion de type pour s'assurer que c'est un tableau de RendezVous

// Composant de la page des rendez-vous
const RendezVousPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('Tous'); // État pour le filtre actif
    const [filteredAppointments, setFilteredAppointments] = useState<RendezVous[]>([]); // État pour les rendez-vous filtrés

    // Options de filtre disponibles
    const filters = ['Tous', 'À venir', 'Passés'];

    // Effet pour filtrer les rendez-vous chaque fois que le filtre actif change
    useEffect(() => {
        let appointmentsToDisplay = rendezvousData; // Utilise les données typées

        if (activeFilter === 'À venir') {
            appointmentsToDisplay = rendezvousData.filter(rdv => new Date(rdv.date) > new Date());
        } else if (activeFilter === 'Passés') {
            appointmentsToDisplay = rendezvousData.filter(rdv => new Date(rdv.date) <= new Date());
        }

        // Tri par date pour les rendez-vous à venir (du plus proche au plus lointain)
        // et par date décroissante pour les rendez-vous passés
        appointmentsToDisplay.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            if (activeFilter === 'Passés') {
                return dateB - dateA; // Du plus récent au plus ancien pour les passés
            }
            return dateA - dateB; // Du plus ancien au plus récent (à venir ou tous)
        });

        setFilteredAppointments(appointmentsToDisplay);
    }, [activeFilter]); // Déclenche l'effet lorsque activeFilter change

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Mes Rendez-vous</h1>

            {/* Composant de filtres */}
            <FilterTabs
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />

            {/* Liste des rendez-vous filtrés */}
            <div className="grid gap-4">
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map(appointment => (
                        <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))
                ) : (
                    <p className="text-gray-600">Aucun rendez-vous ne correspond à ce filtre.</p>
                )}
            </div>
        </div>
    );
};

export default RendezVousPage;
