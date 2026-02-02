/**
 * Base de données des exercices de rééducation - Exercices 1 à 29
 * HNIA Percy - Service de Médecine Physique et Réadaptation
 * 
 * STATUT : En cours de construction
 * - ✅ Exercices 1-12, 14, 23-29 complétés
 * - ⏳ Exercices 13, 15-22 en attente
 */

const exercices1Data = [

    {
        id: 1,
        titre: "Étirement du trapèze (muscles latéraux du cou)",
        description: "Objectif : étirer le trapèze et les muscles latéraux du cou afin de diminuer les tensions cervicales. Consigne : mettez la main gauche sur l'épaule droite en la fixant et en l'abaissant vers le bas. Penchez la tête sur le côté gauche et tournez-la légèrement vers l'épaule droite tout en rentrant le menton. Puis faire l'inverse. Il est possible de pencher la tête plus ou moins vers l'avant pour travailler sur un autre chef.",
        zones: ["Cervicales", "Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex01_img01.png",
                alt: "Étirement du trapèze"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex01_img02.png",
                alt: "Position de la main sur l'épaule"
            }
        ]
    },

    {
        id: 2,
        titre: "Étirement du grand et du petit pectoral",
        description: "Objectif : étirer les muscles de la poitrine afin de favoriser l'ouverture thoracique et la mobilité de l'épaule. Consigne : positionnez-vous dans l'encadrement d'une porte, bras à 90 degrés. Avancez le buste vers l'avant jusqu'à ressentir l'étirement au niveau de la poitrine.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex02_img01.png",
                alt: "Étirement du grand et du petit pectoral"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex02_img02.png",
                alt: "Étirement pectoral vue de profil"
            }
        ]
    },

    {
        id: 3,
        titre: "Étirement du rhomboïde",
        description: "Objectif : étirer les muscles rhomboïdes afin de diminuer les tensions entre les omoplates et améliorer la mobilité du haut du dos. Consigne : bras tendus devant vous, mains jointes. Arrondissez le haut du dos en poussant les mains vers l'avant.",
        zones: ["Dos", "Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex03_img01.png",
                alt: "Étirement du rhomboïde"
            }
        ]
    },

    {
        id: 4,
        titre: "Étirement du deltoïde et de l'infra-épineux",
        description: "Objectif : étirer les muscles de l'arrière et du côté de l'épaule afin de diminuer les tensions et d'améliorer la mobilité de l'articulation de l'épaule. Consigne : passez le bras droit devant le torse. Avec la main gauche, poussez le coude vers la gauche en gardant l'épaule bien abaissée. Le tronc doit rester fixe. Répétez de l'autre côté.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex04_img01.png",
                alt: "Étirement du deltoïde et de l'infra-épineux"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex04_img02.png",
                alt: "Position du bras devant le torse"
            }
        ]
    },

    {
        id: 5,
        titre: "Étirement du supra-épineux",
        description: "Objectif : étirer le muscle supra-épineux afin de diminuer les tensions sur la partie supérieure de l'épaule. Consigne : bras amené en travers du corps, légèrement relevé. Maintenir la position afin de ressentir l'étirement sur le dessus de l'épaule.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex05_img01.png",
                alt: "Étirement du supra-épineux"
            }
        ]
    },

    {
        id: 6,
        titre: "Étirement du subscapulaire",
        description: "Objectif : étirer le muscle subscapulaire afin d'améliorer la mobilité de l'épaule et de diminuer les tensions à l'avant de l'articulation. Consigne : bras fléchi à 90 degrés, coude collé au corps. En appui contre un mur ou un encadrement de porte, faire pivoter l'avant-bras vers l'extérieur jusqu'à ressentir l'étirement à l'avant de l'épaule.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex06_img01.png",
                alt: "Étirement du subscapulaire"
            }
        ]
    },

    {
        id: 7,
        titre: "Étirement du petit rond",
        description: "Objectif : étirer le muscle petit rond afin de diminuer les tensions à l'arrière de l'épaule et améliorer la mobilité de l'articulation. Consigne : bras fléchi à 90 degrés, coude collé au corps. En appui contre un mur ou un encadrement de porte, faire pivoter l'avant-bras vers l'extérieur jusqu'à ressentir l'étirement à l'arrière de l'épaule.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex07_img01.png",
                alt: "Étirement du petit rond"
            }
        ]
    },

    {
        id: 8,
        titre: "Étirement du biceps brachial",
        description: "Objectif : étirer le muscle biceps brachial afin de diminuer les tensions à l'avant du bras et améliorer la mobilité de l'épaule et du coude. Consigne : en position à quatre pattes, placer les paumes de main bien à plat au sol, bras tendus. Laisser descendre progressivement le thorax vers le sol afin de mettre en tension l'avant des épaules et des bras. Variante : debout, bras tendus en arrière du corps, mains jointes ou maintenues ensemble. Éloigner doucement les bras du dos en gardant les épaules basses et le buste droit jusqu'à ressentir l'étirement à l'avant du bras.",
        zones: ["Épaule", "Coude"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex08_img01.png",
                alt: "Étirement du biceps brachial à quatre pattes"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex08_img02.png",
                alt: "Étirement du biceps brachial bras en arrière debout"
            }
        ]
    },

    {
        id: 9,
        titre: "Étirement du triceps brachial",
        description: "Objectif : étirer le muscle triceps brachial afin de diminuer les tensions à l'arrière du bras et améliorer la mobilité de l'épaule et du coude. Consigne : lever un bras au-dessus de la tête, coude fléchi. Avec l'autre main, tirer doucement le coude vers l'arrière en gardant l'épaule abaissée jusqu'à ressentir l'étirement à l'arrière du bras.",
        zones: ["Épaule", "Coude"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex09_img01.png",
                alt: "Étirement du triceps brachial"
            }
        ]
    },

    {
        id: 10,
        titre: "Étirement des extenseurs du poignet",
        description: "Objectif : étirer les muscles extenseurs du poignet et de l'avant-bras afin de diminuer les tensions au niveau du poignet et du coude. Consigne : bras tendu devant soi, paume de la main orientée vers le bas. Avec l'autre main, fléchir doucement le poignet vers le bas en gardant le coude tendu jusqu'à ressentir l'étirement à l'arrière de l'avant-bras.",
        zones: ["Coude", "Poignet et main"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex10_img01.png",
                alt: "Étirement des extenseurs du poignet"
            }
        ]
    },

    {
        id: 11,
        titre: "Étirement des fléchisseurs du poignet",
        description: "Objectif : étirer les muscles fléchisseurs du poignet et de l'avant-bras afin de diminuer les tensions au niveau du poignet et du coude. Consigne : bras tendu devant soi, paume de la main orientée vers le haut. Avec l'autre main, tirer doucement la main et les doigts vers le bas en gardant le coude tendu jusqu'à ressentir l'étirement à l'avant de l'avant-bras.",
        zones: ["Coude", "Poignet et main"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex11_img01.png",
                alt: "Étirement des fléchisseurs du poignet"
            }
        ]
    },

    {
        id: 12,
        titre: "Étirement des fessiers",
        description: "Objectif : étirer les muscles fessiers afin de diminuer les tensions au niveau de la hanche et améliorer la mobilité de l'articulation. Consigne : en position assise, croiser une jambe au-dessus de l'autre et effectuer une rotation douce du tronc du côté de la jambe croisée afin de ressentir l'étirement de la fesse. Variante 1 : debout, poser le pied d'une jambe sur un support, genou fléchi, et incliner légèrement le buste vers l'avant en gardant le dos droit. Variante 2 : allongé sur le dos, fléchir une jambe et ramener le genou vers la poitrine à l'aide des mains, l'autre jambe restant au sol.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex12_img01.png",
                alt: "Étirement des fessiers en position assise avec rotation du tronc"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex12_img02.png",
                alt: "Étirement des fessiers debout pied sur support"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex12_img03.png",
                alt: "Étirement des fessiers allongé genou poitrine"
            }
        ]
    },

    {
        id: 14,
        titre: "Étirement des pelvi-trochantériens",
        description: "Objectif : étirer les muscles pelvi-trochantériens afin de diminuer les tensions profondes au niveau de la fesse et améliorer la mobilité de la hanche. Consigne : debout, poser le pied d'une jambe sur un support (chaise, banc ou marche), genou fléchi. Incliner légèrement le buste vers l'avant en gardant le dos droit jusqu'à ressentir l'étirement au niveau de la fesse et de la hanche.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex14_img01.png",
                alt: "Étirement des pelvi-trochantériens debout pied sur support"
            }
        ]
    },

    {
        id: 23,
        titre: "Étirement de l'aponévrose plantaire",
        description: "Objectif : diminuer les tensions de l'aponévrose plantaire et soulager les douleurs sous le pied. Consigne : en position assise ou debout, placer une balle sous la voûte plantaire. Faire rouler lentement la balle d'avant en arrière sous le pied en adaptant la pression selon la tolérance.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: ["Balle"],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex23_img01.png",
                alt: "Automassage de l'aponévrose plantaire avec une balle"
            }
        ]
    },

    {
        id: 24,
        titre: "Étirement du plan latéral du rachis",
        description: "Objectif : étirer les muscles latéraux du tronc afin d'améliorer la souplesse du rachis et de diminuer les tensions sur le côté du dos.\n\nConsigne : Penchez-vous sur le côté gauche en saisissant le bras droit au-dessus de la tête. Laissez le tronc s'incliner progressivement jusqu'à ressentir l'étirement sur tout le côté droit, de l'épaule jusqu'à la hanche. Maintenez la position sans douleur. Il est possible de s'aider de l'encadrement d'une porte pour stabiliser la posture.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex24_img01.png",
                alt: "Étirement du plan latéral du rachis en position debout, inclinaison du tronc sur le côté"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex24_img02.png",
                alt: "Étirement latéral du rachis avec appui du bras au-dessus de la tête"
            }
        ]
    },

    {
        id: 25,
        titre: "Étirement du plan postérieur du rachis",
        description: "Objectif : étirer les muscles postérieurs du dos afin d'améliorer la mobilité globale du rachis et de diminuer les tensions dorsales.\n\nConsigne : En position debout ou assise, fléchissez progressivement le tronc vers l'avant en laissant la tête et les bras se relâcher. Cherchez à arrondir le dos en douceur jusqu'à ressentir un étirement sur l'ensemble de la chaîne postérieure du rachis. Maintenez la position quelques secondes sans provoquer de douleur.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex25_img01.png",
                alt: "Étirement du plan postérieur du rachis en flexion du tronc vers l'avant"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex25_img02.png",
                alt: "Étirement du dos en position arrondie, tête relâchée vers le sol"
            }
        ]
    },

    {
        id: 26,
        titre: "Étirement du plan antérieur du rachis",
        description: "Objectif : étirer les muscles antérieurs du tronc afin d'améliorer l'extension du rachis et de diminuer les sensations de raideur sur l'avant du corps.\n\nConsigne : En position debout ou assise, redressez le buste puis amenez doucement le tronc vers l'arrière en ouvrant la poitrine. Laissez les épaules partir légèrement en arrière tout en gardant le contrôle du mouvement. Maintenez la position quelques secondes sans douleur et respirez calmement.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex26_img01.png",
                alt: "Étirement du plan antérieur du rachis avec ouverture de la poitrine"
            }
        ]
    },

    {
        id: 27,
        titre: "Étirement du dos / Prière",
        description: "Objectif : étirer l'ensemble du dos afin de favoriser le relâchement des tensions et d'améliorer la mobilité globale du rachis.\n\nConsigne : En position assise sur les talons, avancez les mains le plus loin possible devant vous. Laissez le buste s'abaisser vers le sol en cherchant à vous agrandir et à allonger le dos. Étirez les bras loin devant, sans forcer, comme dans une position de prière. Maintenez la posture en respirant calmement.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex27_img01.png",
                alt: "Étirement du dos en position de prière, assis sur les talons avec les bras étirés vers l'avant"
            }
        ]
    },

    {
        id: 28,
        titre: "Étirement du grand dorsal",
        description: "Objectif : étirer le muscle grand dorsal afin d'améliorer la mobilité du tronc et de l'épaule, et de diminuer les tensions sur le côté du dos.\n\nConsigne : Allongé sur le dos, placez les mains derrière la tête. Ramenez les genoux vers vous puis laissez-les tomber doucement sur le côté, un genou après l'autre, jusqu'à toucher le sol. Maintenez la position quelques secondes en veillant à garder les épaules en contact avec le sol. Respirez calmement sans forcer.",
        zones: ["Dos", "Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex28_img01.png",
                alt: "Étirement du grand dorsal allongé sur le dos, genoux ramenés puis basculés sur le côté"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex28_img02.png",
                alt: "Étirement du grand dorsal en position à genoux, bras étiré loin devant pour allonger le flanc et l'épaule"
            }
        ]
    },

    {
        id: 29,
        titre: "Étirement du diaphragme",
        description: "Objectif : favoriser la mobilité du diaphragme afin d'améliorer la respiration, de diminuer les tensions abdominales et de faciliter le relâchement du tronc.\n\nConsigne : En position assise sur les talons, placez les mains de chaque côté de l'abdomen, sous les côtes. Inspirez profondément en cherchant à ouvrir la cage thoracique, puis accompagnez l'expiration en maintenant une légère pression avec les mains. Concentrez-vous sur une respiration lente et ample, sans forcer.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex29_img01.png",
                alt: "Étirement du diaphragme en position assise sur les talons, mains placées sous les côtes pour accompagner la respiration"
            }
        ]
    }

];
