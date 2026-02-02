/**
 * Base de données des programmes types
 * HNIA Percy - Service de Médecine Physique et Réadaptation
 */

const programmesTypesData = [
    {
        id: 1,
        titre: "Post-opération genou - Renforcement précoce",
        descriptif: "Ce programme s'adresse aux patients en phase précoce de rééducation après une opération du genou.\n\nObjectifs :\n- Récupération de la mobilité\n- Renforcement musculaire progressif\n- Proprioception\n\nFréquence recommandée : 2 à 3 fois par jour\nDurée : 3 à 6 semaines selon progression",
        tags: {
            localisation: "Genou",
            pathologie: "Post-opératoire",
            phase: "Précoce (J0-J21)",
            objectif: "Renforcement + Mobilité"
        },
        exercices: [60, 61, 62, 63, 64, 65]
    }
];
