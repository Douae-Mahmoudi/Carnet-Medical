// tailwind.config.mjs (à la racine de votre projet)
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Le chemin vers tous les fichiers qui utilisent des classes Tailwind
    content: [
        "./src/**/*.{js,ts,jsx,tsx,css}", // Assurez-vous que cela couvre tous vos fichiers React et CSS
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5', // Une couleur primaire pour l'application
                secondary: '#6B7280', // Une couleur secondaire
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'], // Définition de la police Inter
            },
        },
    },
    plugins: [],
};
