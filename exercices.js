/**
 * Base de données des exercices de rééducation
 * HNIA Percy - Service de Médecine Physique et Réadaptation
 * 
 * Structure des exercices :
 * - id: identifiant unique (number)
 * - titre: nom de l'exercice (string)
 * - description: instructions détaillées (string)
 * - zones: tableau des zones du corps concernées (string[])
 * - types: tableau des types d'exercice (string[])
 * - materiel: tableau du matériel nécessaire (string[])
 * - photos: tableau d'objets {url, alt} (object[])
 */

/**
 * Catégories disponibles pour le filtrage et la classification
 */
const categoriesData = {
    zones: ['Cheville et pied', 'Cervicales', 'Coude', 'Dos', 'Épaule', 'Genou', 'Hanche', 'Lombaires', 'Poignet et main'],
    types: ['Étirement', 'Renforcement', 'Mobilité', 'Proprioception', 'Équilibre', 'Gainage', 'LCA', 'Sauts'],
    materiel: ['Sans matériel', 'Bâton', 'Élastique', 'Ballon', 'Coussin proprioceptif', 'Sangle', 'Tapis', 'Chaise', 'Step']
};

/**
 * Liste complète des exercices
 */
const exercicesData = [
    // ============================================
    // FICHE 1 - ÉTIREMENTS (23 exercices)
    // ============================================
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
            { url: "https://i.postimg.cc/xCNjW7dJ/image21.png", alt: "Étirement pelvi-trochantérien" }
        ]
    },
    {
        id: 15,
        titre: "Étirement iliaque et psoas",
        description: "En fente avant, un genou à terre. Se tenir si nécessaire et garder le dos droit. Possibilité de poser le pied sur une petite marche.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/zGQ99fHk/image22.png", alt: "Étirement psoas - position 1" },
            { url: "https://i.postimg.cc/xC3pTj8b/image23.png", alt: "Étirement psoas - position 2" },
            { url: "https://i.postimg.cc/TPrCC2VY/image24.png", alt: "Variante avec marche" }
        ]
    },
    {
        id: 16,
        titre: "Étirement TFL (tenseur du fascia lata)",
        description: "Position debout, jambes croisées. Se pencher sur le côté pour étirer la face externe de la hanche.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/pryQbPFv/image25.png", alt: "Étirement TFL - position 1" },
            { url: "https://i.postimg.cc/qRvyypQy/image26.png", alt: "Étirement TFL - position 2" }
        ]
    },
    {
        id: 17,
        titre: "Étirement ischio-jambiers",
        description: "Option 1 : Allongé sur le dos, tendre la jambe à étirer en ramenant la pointe de pied vers soi (soit avec les mains, soit avec une serviette) et garder bien l'autre jambe plaquée au sol. Option 2 : Face à une petite marche, le bassin bien rectiligne, poser le talon sur la marche, jambe tendue. Ramener les orteils vers vous et se pencher en avant. Rentrer le ventre et serrer les fesses.",
        zones: ["Genou", "Hanche"],
        types: ["Étirement"],
        materiel: ["Sangle"],
        photos: [
            { url: "https://i.postimg.cc/sXbPrt9c/image27.png", alt: "Étirement IJ - position 1" },
            { url: "https://i.postimg.cc/gkmXZzJv/image28.png", alt: "Étirement IJ - position 2" },
            { url: "https://i.postimg.cc/7YZP4fhW/image29.png", alt: "Avec sangle" },
            { url: "https://i.postimg.cc/Qxw2ztTc/image30.png", alt: "Variante debout" }
        ]
    },
    {
        id: 18,
        titre: "Étirement quadriceps",
        description: "Option 1 : Debout, garder le dos bien droit et les genoux collés l'un à l'autre. Penser à serrer les fesses. Possible de varier la rotation pour insister sur un chef du quadriceps. Option 2 : Position à genoux, se pencher en arrière, en appui sur les mains pour étirer les deux quadriceps en même temps.",
        zones: ["Genou"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/BZwk86NV/image31.png", alt: "Étirement quadriceps - debout" },
            { url: "https://i.postimg.cc/PJBSSCRD/image32.png", alt: "Étirement quadriceps - à genoux" }
        ]
    },
    {
        id: 19,
        titre: "Étirement sartorius",
        description: "Position en fente avec rotation du bassin pour cibler le sartorius.",
        zones: ["Hanche", "Genou"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/C5fNnFLm/image33.png", alt: "Étirement sartorius" }
        ]
    },
    {
        id: 20,
        titre: "Étirement adducteurs",
        description: "Se mettre en assis-tailleur, les pieds joints. Rapprocher les talons le plus possible des fesses. Se tenir bien droit et se pencher en avant tout en écartant les genoux sur les côtés.",
        zones: ["Hanche"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/TwBs4Nyf/image34.png", alt: "Étirement adducteurs - position 1" },
            { url: "https://i.postimg.cc/pT5GzQ0v/image35.png", alt: "Étirement adducteurs - position 2" },
            { url: "https://i.postimg.cc/RVS1zQc0/image36.png", alt: "Étirement adducteurs - position 3" },
            { url: "https://i.postimg.cc/xjtJLrbG/image37.png", alt: "Variante" }
        ]
    },
    {
        id: 21,
        titre: "Étirement triceps sural (mollets)",
        description: "En fente avant, le pied arrière dans l'axe, genou bien tendu. Enfoncer le talon dans le sol en tendant la jambe et en se penchant en avant.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/QtNNMtSH/image38.png", alt: "Étirement triceps sural - position 1" },
            { url: "https://i.postimg.cc/RFqr8nX3/image39.png", alt: "Étirement triceps sural - position 2" }
        ]
    },
    {
        id: 22,
        titre: "Étirement tibial antérieur",
        description: "En position à genoux, fesses sur les talons, orteils pointés vers l'arrière.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Jz1RxtVJ/image40.png", alt: "Étirement tibial antérieur" }
        ]
    },
    {
        id: 23,
        titre: "Automassage aponévrose plantaire",
        description: "Automassage avec une balle de tennis sous le pied.",
        zones: ["Cheville et pied"],
        types: ["Étirement"],
        materiel: ["Ballon"],
        photos: [
            { url: "https://i.postimg.cc/TPzSkHLH/image41.png", alt: "Automassage plantaire" }
        ]
    },

    // ============================================
    // FICHE 2 - ÉTIREMENTS RACHIS (6 exercices)
    // ============================================
    {
        id: 24,
        titre: "Étirement plan latéral du rachis",
        description: "Penchez-vous sur le côté gauche en saisissant le bras droit. Vous devez ressentir l'étirement sur tout le côté droit de l'épaule jusqu'à la hanche. Possible d'attraper l'encadrement d'une porte.",
        zones: ["Dos", "Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/4yQSx64Y/image1.png", alt: "Étirement latéral rachis - position 1" },
            { url: "https://i.postimg.cc/3N8Z9P7j/image2.png", alt: "Étirement latéral rachis - position 2" }
        ]
    },
    {
        id: 25,
        titre: "Étirement plan postérieur",
        description: "Position assise ou debout, enrouler le dos en ramenant le menton vers la poitrine et les bras vers l'avant.",
        zones: ["Dos", "Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Hnvbzn6m/image3.png", alt: "Étirement postérieur - position 1" },
            { url: "https://i.postimg.cc/0jzz8f0H/image4.png", alt: "Mobilisation flexion lombaire" }
        ]
    },
    {
        id: 26,
        titre: "Étirement plan antérieur",
        description: "Extension du rachis en position allongée ou debout, mains derrière la tête.",
        zones: ["Dos", "Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/sxG2F2VR/image5.png", alt: "Étirement plan antérieur" }
        ]
    },
    {
        id: 27,
        titre: "Étirement carré des lombes",
        description: "Sur le côté au bord du lit, laisser le tronc s'affaisser pour étirer le côté opposé.",
        zones: ["Lombaires"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/LssYC2gv/image6.png", alt: "Étirement carré des lombes" }
        ]
    },
    {
        id: 28,
        titre: "Étirement grand dorsal",
        description: "Couché sur le dos, les mains derrière la tête. Ramener les genoux vers vous puis laisser tomber sur le côté droit un genou après l'autre jusqu'à ce qu'ils touchent le sol. Tenir la position. Attention à laisser les épaules en contact avec le sol.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/fyQbNNk3/image7.png", alt: "Étirement grand dorsal - position 1" },
            { url: "https://i.postimg.cc/2yYCt7XS/image8.png", alt: "Étirement grand dorsal - position 2" }
        ]
    },
    {
        id: 29,
        titre: "Étirement diaphragme",
        description: "Position de relaxation pour étirer le diaphragme et favoriser la respiration profonde.",
        zones: ["Dos"],
        types: ["Étirement"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Y96HQmq4/image9.png", alt: "Étirement diaphragme" }
        ]
    },

    // ============================================
    // FICHE 3 - MOBILITÉ (19 exercices)
    // ============================================
    {
        id: 30,
        titre: "Mobilité flexion-extension cervicale",
        description: "Asseyez-vous, maintenez la tête avec les mains. Enroulez progressivement la tête, les épaules et le tronc vers l'avant. Collez le menton au torse.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/d1b9cL83/image1.png", alt: "Mobilisation flexion cervicale" }
        ]
    },
    {
        id: 31,
        titre: "Mobilité rotations cervicales",
        description: "Tourner la tête de droite à gauche de manière contrôlée.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/x1pMSXQf/image2.png", alt: "Mobilisation rotations cervicales" }
        ]
    },
    {
        id: 32,
        titre: "Mobilité antépulsion et rétropulsion cervicales",
        description: "Avancer et reculer la tête en gardant le regard horizontal.",
        zones: ["Cervicales"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/SskyTGPp/image3.png", alt: "Mobilisation antépulsion" },
            { url: "https://i.postimg.cc/YqGwxVSL/image4.png", alt: "Mobilisation rétropulsion" }
        ]
    },
    {
        id: 33,
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
        id: 34,
        titre: "Mobilité flexion-extension thoracique",
        description: "Option 1 : Debout pieds décalés du mur, rapprocher le thorax du mur tout en levant le(s) bras. Option 2 : En position assise, aller le plus loin possible vers l'arrière tout en prenant appui sur le dossier de la chaise.",
        zones: ["Dos"],
        types: ["Mobilité"],
        materiel: ["Chaise"],
        photos: [
            { url: "https://i.postimg.cc/0N2v7NKc/image6.png", alt: "Mobilisation extension thoracique" },
            { url: "https://i.postimg.cc/76GpNJH6/image7.png", alt: "Mobilisation avec chaise" }
        ]
    },
    {
        id: 35,
        titre: "Mobilité rotations thoraco-lombaires",
        description: "Assis sur une chaise, toucher les genoux gauche puis droit alternativement avec la main opposée.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: ["Chaise"],
        photos: [
            { url: "https://i.postimg.cc/9FVnDn7r/image8.jpg", alt: "Rotation thoraco-lombaire - photo" },
            { url: "https://i.postimg.cc/RZhGf5VZ/image9.png", alt: "Rotation thoraco-lombaire" }
        ]
    },
    {
        id: 36,
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
        id: 37,
        titre: "Mobilité flexion-extension thoraco-lombaires (dos rond - dos creux)",
        description: "Faire le dos rond en soufflant, pousser au maximum sur les bras et regarder ses genoux, puis le dos creux en inspirant et en regardant en l'air.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/ZR4d8pF0/image11.png", alt: "Dos rond" },
            { url: "https://i.postimg.cc/vmdgyfKp/image12.png", alt: "Dos creux" }
        ]
    },
    {
        id: 38,
        titre: "Mobilité extension lombaire",
        description: "Sur le ventre, redresser le buste en appui sur les avant-bras, pousser dans ses coudes sans que le bassin ne se décolle et sans contracter les fesses.",
        zones: ["Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Kv647tmQ/image13.png", alt: "Extension lombaire - position 1" },
            { url: "https://i.postimg.cc/9M0WHfWC/image14.png", alt: "Extension lombaire - position 2" }
        ]
    },
    {
        id: 39,
        titre: "Mobilité flexion lombaire",
        description: "Amener les mains le plus loin possible afin d'étirer au maximum la colonne. Possibilité d'utiliser un ballon à faire rouler vers l'avant.",
        zones: ["Lombaires"],
        types: ["Mobilité"],
        materiel: ["Ballon"],
        photos: [
            { url: "https://i.postimg.cc/9fF4zCWx/image15.png", alt: "Flexion lombaire" },
            { url: "https://i.postimg.cc/wT87LhqD/image16.png", alt: "Flexion avec ballon" }
        ]
    },
    {
        id: 40,
        titre: "Mobilisation de l'épaule et recentrage",
        description: "Assis, l'avant-bras reposant sur une serviette posée sur une table. Faire glisser le bras d'avant en arrière puis sur le côté. Possible de monter la hauteur de la table. Possible de mettre un élastique qui tracte l'épaule vers l'arrière et le bas. En position assise, le coude reposant sur un ballon dégonflé (ou la table) un peu en avant de votre épaule. Écraser le ballon avec votre coude tout en abaissant votre épaule.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: ["Ballon", "Élastique"],
        photos: [
            { url: "https://i.postimg.cc/3wsHVFb2/image17.png", alt: "Mobilisation épaule - serviette" },
            { url: "https://i.postimg.cc/DZrRDkXt/image18.png", alt: "Mobilisation épaule - ballon" }
        ]
    },
    {
        id: 41,
        titre: "Mobilité épaule avec ballon contre le mur",
        description: "Debout face au mur, faire rouler le ballon avec la main de haut en bas puis sur les côtés.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: ["Ballon"],
        photos: [
            { url: "https://i.postimg.cc/fLfgC74W/image19.jpg", alt: "Mobilité avec ballon - photo" },
            { url: "https://i.postimg.cc/NMDpmgTH/image20.png", alt: "Mobilité avec ballon" }
        ]
    },
    {
        id: 42,
        titre: "Mobilité épaule en position allongée",
        description: "Assis ou allongé, lever les bras le plus haut possible en contrôlant les épaules en position basse.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/SR5LfjKY/image21.png", alt: "Élévation bras - position 1" },
            { url: "https://i.postimg.cc/pr9zrxBv/image22.png", alt: "Élévation bras - position 2" },
            { url: "https://i.postimg.cc/15wMrcDv/image23.png", alt: "Extension thoracique avec élévation" },
            { url: "https://i.postimg.cc/VsbFzBZ0/image24.png", alt: "Ouverture épaule" }
        ]
    },
    {
        id: 43,
        titre: "Mobilité pendulaire de l'épaule",
        description: "Assis ou debout, se pencher en avant et laisser le bras tomber vers le bas. Faire des petits mouvements circulaires avec le bras complètement relâché.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/cHtf40m9/image25.png", alt: "Pendulaire" },
            { url: "https://i.postimg.cc/13R6VpBY/image26.png", alt: "Pendulaire - vue de profil" }
        ]
    },
    {
        id: 44,
        titre: "Mobilisation de la scapula",
        description: "Bras le long du corps, reculer les épaules. Descendre et serrer les omoplates au maximum comme pour les amener vers les poches arrière du pantalon.",
        zones: ["Épaule", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/RV4J2ckB/image27.png", alt: "Mobilisation scapula" }
        ]
    },
    {
        id: 45,
        titre: "Mobilité flexion de hanche",
        description: "Amener le genou vers la poitrine de manière contrôlée.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/kXTGZLNx/image28.png", alt: "Flexion de hanche - position 1" },
            { url: "https://i.postimg.cc/YCJrB7vW/image29.png", alt: "Flexion de hanche - position 2" }
        ]
    },
    {
        id: 46,
        titre: "Mobilité rotations de hanche",
        description: "Mouvements de rotation interne et externe de la hanche.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/xTwh013t/image30.png", alt: "Rotations de hanche" }
        ]
    },
    {
        id: 47,
        titre: "Mobilité flexion-extension de genou",
        description: "Plier et tendre le genou de manière contrôlée.",
        zones: ["Genou"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/W3ySX5Wp/image31.png", alt: "Flexion-extension genou" }
        ]
    },
    {
        id: 48,
        titre: "Mobilité flexion dorsale de cheville",
        description: "Ramener la pointe de pied vers soi en position assise ou debout.",
        zones: ["Cheville et pied"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            { url: "https://i.postimg.cc/Hn5K5Gpf/image32.png", alt: "Flexion dorsale - position 1" },
            { url: "https://i.postimg.cc/4dHFkCh9/image33.png", alt: "Flexion dorsale - position 2" }
        ]
    }
];
