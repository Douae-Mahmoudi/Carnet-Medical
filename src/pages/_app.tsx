// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { PatientProvider } from '../context/PatientContext'; // Importe le PatientProvider
import Header from '../components/Header'; // Importe le composant Header
import Footer from '../components/Footer'; // Importe le composant Footer
import '../app/globals.css'; // Assurez-vous d'importer vos styles globaux ici

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // Enveloppe toute l'application avec le PatientProvider
        <PatientProvider>
            <Header /> {/* Le Header peut utiliser usePatient car il est à l'intérieur du Provider */}
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <Component {...pageProps} /> {/* C'est ici que vos pages (comme index.tsx) sont rendues */}
            </main>
            <Footer /> {/* Le Footer est également inclus dans le layout global */}
        </PatientProvider>
    );
}

export default MyApp;
