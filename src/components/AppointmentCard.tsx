import React from 'react';

//  un rendez-vous
export interface RendezVous {
    id: string;
    type: string;
    date: string; // Format ISO 8601 (ex: "2025-08-10T09:30:00Z")
    medecin: string;
    specialite: string;
    lieu: string;
    statut: 'passé' | 'à venir';
}

interface AppointmentCardProps {
    appointment: RendezVous;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
    // Formate la date pour un affichage plus lisible
    const formattedDate = new Date(appointment.date).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const statusColor = appointment.statut === 'à venir' ? 'text-green-600' : 'text-gray-500';

    return (
        <div className="card">
            <h3 className="text-lg font-semibold text-primary mb-2">{appointment.type}</h3>
            <p className="text-gray-700 mb-1">
                <span className="font-medium">Médecin :</span> {appointment.medecin} ({appointment.specialite})
            </p>
            <p className="text-gray-700 mb-1">
                <span className="font-medium">Date :</span> {formattedDate}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-medium">Lieu :</span> {appointment.lieu}
            </p>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${statusColor} bg-opacity-20 ${appointment.statut === 'à venir' ? 'bg-green-100' : 'bg-gray-100'}`}>
        {appointment.statut === 'à venir' ? 'À venir' : 'Passé'}
      </span>
        </div>
    );
};

export default AppointmentCard;

