export type Dictionary = {
    title: string;
    search: string;
    next: string;
    prev: string;
    loading: string;
    error: string;
    retry: string;
    name: string;
    email: string;
    noResults: string;
    showing: string;
    of: string;
    username: string;
    phone: string;
    website: string;
    company: string;
    address: string;
    online: string;
};

const dictionaries: Record<string, Dictionary> = {
    en: {
        title: "User Dashboard",
        search: "Search by name or email...",
        next: "Next",
        prev: "Previous",
        loading: "Loading users...",
        error: "Failed to load users. Please try again.",
        retry: "Retry",
        name: "Name",
        email: "Email",
        noResults: "No users found",
        showing: "Showing",
        of: "of",
        username: "Username",
        phone: "Phone",
        website: "Website",
        company: "Company",
        address: "Address",
        online: "Online",
    },
    fr: {
        title: "Tableau de Bord",
        search: "Rechercher par nom ou email...",
        next: "Suivant",
        prev: "Précédent",
        loading: "Chargement des utilisateurs...",
        error: "Échec du chargement des utilisateurs. Veuillez réessayer.",
        retry: "Réessayer",
        name: "Nom",
        email: "Email",
        noResults: "Aucun utilisateur trouvé",
        showing: "Affichage",
        of: "de",
        username: "Nom d'utilisateur",
        phone: "Téléphone",
        website: "Site web",
        company: "Entreprise",
        address: "Adresse",
        online: "En ligne",
    },
};

export const getDictionary = (lang: string): Dictionary => {
    return dictionaries[lang] || dictionaries.en;
};
