import './globals.css'; // Importe les styles globaux depuis le même dossier 'app'
import { Inter } from 'next/font/google';
import { PatientProvider } from '../context/PatientContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Carnet Médical Digitalisé',
    description: 'Suivi médical personnalisé pour les patients',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <PatientProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
                    {children}
                </main>
                <Footer />
            </div>
        </PatientProvider>
        </body>
        </html>
    );
}

