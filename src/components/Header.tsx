'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePatient } from '../context/PatientContext';

// Composant d'en-tête de l'application
const Header: React.FC = () => {

    return (
        <header className="bg-white shadow-sm py-4 w-full">
            <nav className="flex justify-between items-center w-full px-4">
                <div className="max-w-4xl mx-auto w-full flex justify-between items-center">
                    {/* Groupe pour le logo, le titre "Carnet Médical" et les liens de navigation */}
                    <div className="flex items-center space-x-6">
                        {/* Conteneur pour le logo et le titre "Carnet Médical" */}
                        <Link href="/" className="flex items-center space-x-2 text-primary">
                            {/* Image du logo */}
                            <Image
                                src="/images/health-report.png"
                                alt="Logo Carnet Médical"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="text-2xl font-bold">
                                Carnet Médical
                            </span>
                        </Link>

                        {/* Liens de navigation */}
                        <div className="flex space-x-4">
                            <Link href="/" className="nav-link">
                                Accueil
                            </Link>
                            <Link href="/rendez-vous" className="nav-link">
                                Mes Rendez-vous
                            </Link>
                            <Link href="/dossier" className="nav-link">
                                Dossier Médical
                            </Link>
                            <Link href="/recommandations" className="nav-link">
                                Recommandations
                            </Link>
                        </div>
                    </div>


                </div>
            </nav>
        </header>
    );
};

export default Header;
