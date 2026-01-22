/**
 * Base de données des exercices de rééducation
 * HNIA Percy - Service de Médecine Physique et Réadaptation
 */

const categoriesData = {
    zones: [
        "Cheville et pied",
        "Cervicales",
        "Coude",
        "Dos",
        "Épaule",
        "Genou",
        "Hanche",
        "Lombaires",
        "Poignet et main"
    ],
    types: [
        "Étirement",
        "Renforcement",
        "Gainage",
        "Mobilité",
        "Proprioception",
        "Sauts",
        "Course"
    ],
    materiel: [
        "Appareil de muscu",
        "Balnéo",
        "Balle",
        "Bâton",
        "Coussin proprioceptif",
        "Élastique",
        "Poids",
        "Sangle",
        "Swiss ball"
    ]
};

const exercicesData = [

    {
        id: 1,
        titre: "Étirement muscles latéraux du cou",
        description: "Mettez la main gauche sur l'épaule droite en la fixant/l'abaissant vers le bas. Penchez la tête sur le côté gauche et la tourner légèrement vers l'épaule droite tout en rentrant le menton. Puis faire l'inverse. Possible de pencher la tête plus ou moins vers l'avant pour travailler sur un autre chef.",
        zones: ["Cervicales"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/9QMm5561/image1.png", alt: "Étirement trapèze" },
            { url: "https://i.postimg.cc/yxKJjv8q/image2.png", alt: "Position de la main" }
        ]
    },
    {
        id: 2,
        titre: "Étirement grand et petit pectoral",
        description: "Position dans l'encadrement d'une porte, bras à 90 degrés. Se pencher en avant pour sentir l'étirement au niveau de la poitrine.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/rwxBXj8Y/image3.png", alt: "Étirement pectoral" },
            { url: "https://i.postimg.cc/dtMT6R0s/image4.png", alt: "Vue de profil" }
        ]
    },
    {
        id: 3,
        titre: "Étirement rhomboïde",
        description: "Bras tendus devant soi, mains jointes. Arrondir le haut du dos en poussant les mains vers l'avant.",
        zones: ["Dos", "Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/JnVWvhHG/image5.png", alt: "Étirement rhomboïde" }
        ]
    },
    {
        id: 4,
        titre: "Étirement deltoïde et infra-épineux",
        description: "Passez le bras droit devant le torse. Avec la main gauche, poussez le coude vers la gauche, en gardant l'épaule baissée. Le tronc doit rester fixe.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/wvcnrQpK/image6.png", alt: "Étirement deltoïde" },
            { url: "https://i.postimg.cc/QxRSpK2N/image7.png", alt: "Vue de face" }
        ]
    },
    {
        id: 5,
        titre: "Étirement supra-épineux",
        description: "Position assise ou debout. Amener le bras en travers du corps au niveau de la poitrine.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/3J727CQc/image8.png", alt: "Étirement supra-épineux" }
        ]
    },
    {
        id: 6,
        titre: "Étirement subscapulaire",
        description: "Bras en rotation interne derrière le dos. Tirer doucement le poignet vers le côté opposé.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/gjGr9sLL/image9.png", alt: "Étirement subscapulaire" }
        ]
    },
    {
        id: 7,
        titre: "Étirement petit rond",
        description: "Position similaire au subscapulaire avec variation d'angle.",
        zones: ["Épaule"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/4xHfSq2V/image10.png", alt: "Étirement petit rond" }
        ]
    },
    {
        id: 8,
        titre: "Étirement biceps brachial",
        description: "Bras tendu en arrière, paume vers le haut. Se tenir à un support fixe et tourner le corps pour accentuer l'étirement.",
        zones: ["Coude"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/dtpvrnQD/image11.png", alt: "Étirement biceps - position 1" },
            { url: "https://i.postimg.cc/7hb8TJpX/image12.png", alt: "Étirement biceps - position 2" }
        ]
    },
    {
        id: 9,
        titre: "Étirement triceps brachial",
        description: "Lever le bras au-dessus de la tête, plier le coude. Avec l'autre main, tirer doucement le coude vers l'arrière.",
        zones: ["Coude"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/QdQPCqFr/image13.png", alt: "Étirement triceps" }
        ]
    },
    {
        id: 10,
        titre: "Étirement épicondyliens et extenseurs du poignet",
        description: "Bras tendu devant, paume vers le bas. Avec l'autre main, ramener les doigts vers soi.",
        zones: ["Coude", "Poignet et main"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/PxCnCwGM/image14.png", alt: "Étirement épicondyliens" }
        ]
    },
    {
        id: 11,
        titre: "Étirement fléchisseurs du poignet",
        description: "Bras tendu devant, paume vers le haut. Avec l'autre main, ramener les doigts vers le sol.",
        zones: ["Coude", "Poignet et main"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Zqq1Qdqn/image15.png", alt: "Étirement fléchisseurs poignet" }
        ]
    },
    {
        id: 12,
        titre: "Étirement fessiers",
        description: "Allongé sur le dos, ramener un genou vers la poitrine en maintenant avec les deux mains.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/BnSy8KHM/image16.png", alt: "Étirement fessiers - position 1" },
            { url: "https://i.postimg.cc/4NNbVb2k/image17.png", alt: "Étirement fessiers - position 2" },
            { url: "https://i.postimg.cc/HsxXVWjJ/image18.png", alt: "Étirement fessiers - position 3" }
        ]
    },
    {
        id: 13,
        titre: "Étirement piriforme",
        description: "Allongé sur le dos, placer le bord latéral du pied sur le genou opposé. À l'aide d'une main rapprocher la cuisse vers la poitrine et pousser le genou avec l'autre main.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/prgWWBpY/image19.png", alt: "Étirement piriforme" },
            { url: "https://i.postimg.cc/TYgLyyGS/image20.png", alt: "Vue détaillée" }
        ]
    },
    {
        id: 14,
        titre: "Étirement pelvi-trochantérien",
        description: "Étirement des muscles profonds de la hanche : piriforme, obturateur interne, jumeaux, carré fémoral.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/63LwZcGf/image21.png", alt: "Étirement pelvi-trochantérien" }
        ]
    },
    {
        id: 15,
        titre: "Étirement psoas",
        description: "Position de fente avant, genou arrière au sol. Pousser le bassin vers l'avant en gardant le buste droit.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/VLJYpVYg/image22.png", alt: "Étirement psoas - position 1" },
            { url: "https://i.postimg.cc/Y2QnF91P/image23.png", alt: "Étirement psoas - position 2" }
        ]
    },
    {
        id: 16,
        titre: "Étirement quadriceps",
        description: "Debout, plier le genou et attraper la cheville. Ramener le talon vers la fesse en gardant les genoux serrés.",
        zones: ["Genou"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/qqkH6F6p/image24.png", alt: "Étirement quadriceps debout" },
            { url: "https://i.postimg.cc/Dyh2FPYY/image25.png", alt: "Étirement quadriceps allongé" }
        ]
    },
    {
        id: 17,
        titre: "Étirement ischio-jambiers",
        description: "Jambe tendue devant, pointe de pied vers soi. Se pencher en avant en gardant le dos droit.",
        zones: ["Genou", "Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/xCN2s2dq/image26.png", alt: "Étirement ischio-jambiers debout" },
            { url: "https://i.postimg.cc/Y0Yb1szY/image27.png", alt: "Étirement ischio-jambiers assis" }
        ]
    },
    {
        id: 18,
        titre: "Étirement adducteurs",
        description: "Position assise, plantes de pieds jointes. Pousser doucement les genoux vers le sol avec les coudes.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Fz9m71cw/image28.png", alt: "Étirement adducteurs - position papillon" }
        ]
    },
    {
        id: 19,
        titre: "Étirement TFL (tenseur du fascia lata)",
        description: "Debout, croiser une jambe derrière l'autre. Incliner le tronc du côté opposé à la jambe étirée.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/zB4k2Pq4/image29.png", alt: "Étirement TFL" }
        ]
    },
    {
        id: 20,
        titre: "Étirement mollets (gastrocnémiens)",
        description: "Jambe arrière tendue, talon au sol. Se pencher vers l'avant en gardant le talon collé au sol.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/TY41ZztT/image30.png", alt: "Étirement mollets - gastrocnémiens" }
        ]
    },
    {
        id: 21,
        titre: "Étirement soléaire",
        description: "Position similaire aux gastrocnémiens mais genou arrière légèrement fléchi.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/NFqPR7kz/image31.png", alt: "Étirement soléaire" }
        ]
    },
    {
        id: 22,
        titre: "Étirement jambier antérieur",
        description: "Debout ou assis, poser le dos du pied au sol et pousser doucement vers le bas.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/v8tBmhTZ/image32.png", alt: "Étirement jambier antérieur" }
        ]
    },
    {
        id: 23,
        titre: "Étirement voûte plantaire",
        description: "Assis, saisir les orteils et les ramener vers soi pour étirer la plante du pied.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/gkMJTLLg/image33.png", alt: "Étirement voûte plantaire" }
        ]
    },

    {
        id: 24,
        titre: "Étirement cervical en flexion",
        description: "Menton vers la poitrine, mains derrière la tête pour accentuer l'étirement.",
        zones: ["Cervicales"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/sDBKc9Ks/image1.png", alt: "Flexion cervicale" }
        ]
    },
    {
        id: 25,
        titre: "Étirement cervical en rotation",
        description: "Tourner la tête d'un côté, main sur le côté opposé de la tête pour accentuer la rotation.",
        zones: ["Cervicales"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/XqZhN8jr/image2.png", alt: "Rotation cervicale" }
        ]
    },
    {
        id: 26,
        titre: "Étirement masse commune (dos)",
        description: "Debout ou assis, arrondir complètement le dos en ramenant le menton vers la poitrine.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/6QSg31KN/image3.png", alt: "Étirement masse commune - position 1" },
            { url: "https://i.postimg.cc/4dvtyHTZ/image4.png", alt: "Étirement masse commune - position 2" }
        ]
    },
    {
        id: 27,
        titre: "Étirement carré des lombes",
        description: "Debout, incliner le tronc sur le côté en levant le bras opposé au-dessus de la tête.",
        zones: ["Lombaires"],
        types: ["Étirement"],
        materiel: ["Swiss ball"],
        photos: [
            { url: "https://i.postimg.cc/SKXL2RYn/image5.png", alt: "Étirement carré des lombes" }
        ]
    },
    {
        id: 28,
        titre: "Étirement lombaires en flexion",
        description: "Assis ou allongé, ramener les genoux vers la poitrine.",
        zones: ["Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/QNFSt5Zb/image6.png", alt: "Flexion lombaire - position 1" },
            { url: "https://i.postimg.cc/tgCkfYVS/image7.png", alt: "Flexion lombaire - position 2" }
        ]
    },
    {
        id: 29,
        titre: "Étirement lombaires en rotation",
        description: "Allongé sur le dos, ramener un genou vers la poitrine puis le faire passer de l'autre côté.",
        zones: ["Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/C5VTSQFK/image8.png", alt: "Rotation lombaire" }
        ]
    },

    {
        id: 30,
        titre: "Mobilité flexion-extension cervicale",
        description: "Faire des mouvements de 'oui' avec la tête : menton vers la poitrine puis regarder vers le plafond.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/MGz2dQSx/image1.png", alt: "Flexion cervicale" },
            { url: "https://i.postimg.cc/VvLhBQbP/image2.png", alt: "Extension cervicale" }
        ]
    },
    {
        id: 31,
        titre: "Mobilité rotations cervicales",
        description: "Faire des mouvements de 'non' avec la tête : tourner la tête à gauche puis à droite.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/59VTwDsy/image3.png", alt: "Rotation cervicale gauche" },
            { url: "https://i.postimg.cc/4dXsKvzN/image4.png", alt: "Rotation cervicale droite" }
        ]
    },
    {
        id: 32,
        titre: "Mobilité inclinaisons cervicales",
        description: "Incliner la tête d'un côté puis de l'autre en rapprochant l'oreille de l'épaule.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Dz7DRY2v/image5.png", alt: "Inclinaisons cervicales" }
        ]
    },
    {
        id: 33,
        titre: "Mobilité flexion-extension thoracique",
        description: "Option 1 : Debout pieds décalés du mur, rapprocher le thorax du mur tout en levant les bras. Option 2 : En position assise, aller le plus loin possible vers l'arrière tout en prenant appui sur le dossier.",
        zones: ["Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/0N2v7NKc/image6.png", alt: "Mobilisation extension thoracique" },
            { url: "https://i.postimg.cc/76GpNJH6/image7.png", alt: "Mobilisation assise" }
        ]
    },
    {
        id: 34,
        titre: "Mobilité rotations thoraco-lombaires",
        description: "Assis, toucher les genoux gauche puis droit alternativement avec la main opposée.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/9FVnDn7r/image8.jpg", alt: "Rotation thoraco-lombaire" },
            { url: "https://i.postimg.cc/RZhGf5VZ/image9.png", alt: "Rotation thoraco-lombaire" }
        ]
    },
    {
        id: 35,
        titre: "Mobilité inclinaisons thoraco-lombaires",
        description: "Position debout, incliner le tronc sur le côté.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/mDy7J82p/image10.png", alt: "Inclinaisons thoraco-lombaires" }
        ]
    },
    {
        id: 36,
        titre: "Mobilité flexion-extension thoraco-lombaires (dos rond - dos creux)",
        description: "Faire le dos rond puis le dos creux de manière contrôlée.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/ZR4d8pF0/image11.png", alt: "Dos rond" },
            { url: "https://i.postimg.cc/vmdgyfKp/image12.png", alt: "Dos creux" }
        ]
    },
    {
        id: 37,
        titre: "Mobilité extension lombaire",
        description: "Sur le ventre, redresser le buste en appui sur les avant-bras sans décoller le bassin.",
        zones: ["Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Kv647tmQ/image13.png", alt: "Extension lombaire" },
            { url: "https://i.postimg.cc/9M0WHfWC/image14.png", alt: "Extension lombaire 2" }
        ]
    },
    {
        id: 38,
        titre: "Mobilité flexion lombaire",
        description: "Amener les mains le plus loin possible pour étirer la colonne.",
        zones: ["Lombaires"],
        types: ["Mobilité"],
        materiel: ["Swiss ball"],
        photos: [
            { url: "https://i.postimg.cc/9fF4zCWx/image15.png", alt: "Flexion lombaire" },
            { url: "https://i.postimg.cc/wT87LhqD/image16.png", alt: "Flexion lombaire swiss ball" }
        ]
    },
    {
        id: 39,
        titre: "Mobilisation de l'épaule et recentrage",
        description: "Mobilisation douce de l'épaule en appui.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: ["Swiss ball", "Élastique"],
        photos: [
            { url: "https://i.postimg.cc/3wsHVFb2/image17.png", alt: "Mobilisation épaule" },
            { url: "https://i.postimg.cc/DZrRDkXt/image18.png", alt: "Mobilisation épaule swiss ball" }
        ]
    },
    {
        id: 40,
        titre: "Mobilité épaule avec swiss ball contre le mur",
        description: "Faire rouler le swiss ball contre le mur avec la main.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: ["Swiss ball"],
        photos: [
            { url: "https://i.postimg.cc/fLfgC74W/image19.jpg", alt: "Mobilité épaule mur" },
            { url: "https://i.postimg.cc/NMDpmgTH/image20.png", alt: "Mobilité épaule" }
        ]
    },
    {
        id: 41,
        titre: "Mobilité épaule en position allongée",
        description: "Lever les bras en position allongée.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/SR5LfjKY/image21.png", alt: "Élévation bras" },
            { url: "https://i.postimg.cc/pr9zrxBv/image22.png", alt: "Élévation bras 2" }
        ]
    },
    {
        id: 42,
        titre: "Mobilité pendulaire de l'épaule",
        description: "Laisser le bras pendre et effectuer des cercles.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/cHtf40m9/image25.png", alt: "Pendulaire" },
            { url: "https://i.postimg.cc/13R6VpBY/image26.png", alt: "Pendulaire profil" }
        ]
    },
    {
        id: 43,
        titre: "Mobilisation de la scapula",
        description: "Reculer et abaisser les épaules.",
        zones: ["Épaule", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/RV4J2ckB/image27.png", alt: "Mobilisation scapula" }
        ]
    },
    {
        id: 44,
        titre: "Mobilité flexion de hanche",
        description: "Amener le genou vers la poitrine.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/kXTGZLNx/image28.png", alt: "Flexion hanche" },
            { url: "https://i.postimg.cc/YCJrB7vW/image29.png", alt: "Flexion hanche 2" }
        ]
    },
    {
        id: 45,
        titre: "Mobilité rotations de hanche",
        description: "Rotations internes et externes de la hanche.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/xTwh013t/image30.png", alt: "Rotations hanche" }
        ]
    },
    {
        id: 46,
        titre: "Mobilité flexion-extension de genou",
        description: "Plier et tendre le genou.",
        zones: ["Genou"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/W3ySX5Wp/image31.png", alt: "Flexion-extension genou" }
        ]
    },
    {
        id: 47,
        titre: "Mobilité flexion dorsale de cheville",
        description: "Ramener la pointe de pied vers soi en position assise ou debout.",
        zones: ["Cheville et pied"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Hn5K5Gpf/image32.png", alt: "Flexion dorsale" },
            { url: "https://i.postimg.cc/4dHFkCh9/image33.png", alt: "Flexion dorsale 2" }
        ]
    },

    {
        id: 48,
        titre: "Quadriceps chaise bipodal",
        description: "Position chaise avec un élastique au-dessus des genoux. Sans douleur ni instabilité et sans sensation de déviation du genou vers l’intérieur.",
        zones: ["Genou"],
        types: ["Renforcement"],
        materiel: ["Élastique"],
        photos: [
            { url: "https://i.postimg.cc/m2gHwqh3/img11.jpg", alt: "Quadriceps chaise bipodal" }
        ]
    },
    {
        id: 49,
        titre: "Quadriceps chaise unipodal",
        description: "Position chaise sur une jambe.",
        zones: ["Genou"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/yxFSG4c9/img1.jpg", alt: "Quadriceps chaise unipodal" }
        ]
    },
    {
        id: 50,
        titre: "Quadriceps squat avec charge",
        description: "Squat avec charge libre. Possibilité d’ajouter un élastique pour le contrôle de l’axe.",
        zones: ["Genou"],
        types: ["Renforcement"],
        materiel: ["Poids"],
        photos: [
            { url: "https://i.postimg.cc/brdB0gt5/img4.jpg", alt: "Squat avec charge" }
        ]
    },
    {
        id: 51,
        titre: "Pont fessier",
        description: "Pieds au sol, décoller le bassin en gardant l’alignement tronc-bassin.",
        zones: ["Hanche", "Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/rmHJTkDN/img5.jpg", alt: "Pont fessier" }
        ]
    },
    {
        id: 52,
        titre: "Pont fessier unipodal",
        description: "Un pied au sol, décoller le bassin en maintenant l’horizontalité.",
        zones: ["Hanche", "Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/8PSyzTKN/img8.jpg", alt: "Pont fessier unipodal" },
            { url: "https://i.postimg.cc/28rwf2y6/img14.jpg", alt: "Pont fessier unipodal jambe tendue" }
        ]
    },
    {
        id: 53,
        titre: "Moyen fessier battements avec élastique",
        description: "Battements de jambes avec élastique au-dessus des genoux.",
        zones: ["Hanche"],
        types: ["Renforcement"],
        materiel: ["Élastique"],
        photos: [
            { url: "https://i.postimg.cc/RhNv3cVv/img13.jpg", alt: "Moyen fessier élastique" }
        ]
    },
    {
        id: 54,
        titre: "Montées sur pointes unipodales",
        description: "Monter sur la pointe d’un pied en contrôlant la stabilité.",
        zones: ["Cheville et pied"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/MG7HxbXs/img12.jpg", alt: "Montées sur pointes unipodales" }
        ]
    }

];