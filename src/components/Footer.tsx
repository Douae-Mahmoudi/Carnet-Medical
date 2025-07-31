import React from 'react';

// Composant de pied de page de l'application
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-4 mt-8">
            <div className="container mx-auto px-4 text-center text-gray-600 text-sm max-w-4xl">
                <p>&copy; {new Date().getFullYear()} Carnet Médical Digitalisé. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;

