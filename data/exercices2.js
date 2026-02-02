/**
 * Base de données des exercices de rééducation - Exercices 30 à 59
 * HNIA Percy - Service de Médecine Physique et Réadaptation
 */

const exercices2Data = [
    {
        id: 30,
        titre: "Flexion – extension cervicale",
        description: "Objectif : améliorer la mobilité de la colonne cervicale et diminuer les raideurs du cou en favorisant des mouvements fluides et contrôlés.\n\nConsigne : En position assise, maintenez la tête avec les mains. Enroulez progressivement la tête, les épaules puis le tronc vers l'avant jusqu'à coller le menton au torse. Revenez ensuite lentement en position redressée et effectuez le mouvement inverse en ouvrant la poitrine et en regardant vers le haut. Réalisez les mouvements sans à-coups, dans une amplitude confortable.",
        zones: ["Cervicales", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex30_img01.png",
                alt: "Flexion et extension cervicale en position assise, enroulement puis redressement progressif du rachis"
            }
        ]
    },
    {
        id: 31,
        titre: "Rotations cervicales",
        description: "Objectif : améliorer la mobilité en rotation de la colonne cervicale et diminuer les tensions du cou en favorisant des mouvements lents et contrôlés.\n\nConsigne : En position assise, tournez lentement la tête vers la droite puis vers la gauche, comme pour regarder par-dessus l'épaule. Le buste reste immobile et les épaules détendues. Effectuez les rotations dans une amplitude confortable, sans forcer et sans provoquer de douleur.",
        zones: ["Cervicales", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex31_img01.png",
                alt: "Rotation cervicale en position assise, tête tournée alternativement à droite et à gauche"
            }
        ]
    },
    {
        id: 32,
        titre: "Antépulsion et rétropulsion cervicale",
        description: "Objectif : améliorer la mobilité antéro-postérieure de la colonne cervicale et diminuer les tensions du cou en travaillant le contrôle du mouvement de la tête.\n\nConsigne : En position assise, avancez doucement la tête vers l'avant en gardant le regard horizontal, puis reculez-la en rentrant le menton, comme pour faire un double menton. Le buste reste immobile et les épaules détendues. Effectuez les mouvements lentement, dans une amplitude confortable et sans douleur.",
        zones: ["Cervicales", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex32_img01.png",
                alt: "Antépulsion cervicale en position assise, tête avancée vers l'avant sans bouger le buste"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex32_img02.png",
                alt: "Rétropulsion cervicale avec menton rentré, tête reculée dans l'axe du corps"
            }
        ]
    },
    {
        id: 33,
        titre: "Inclinaisons cervicales",
        description: "Objectif : améliorer la mobilité latérale de la colonne cervicale et diminuer les tensions du cou.\n\nConsigne : En position assise, inclinez lentement la tête sur le côté en rapprochant l'oreille de l'épaule, puis revenez au centre avant de changer de côté. Le buste reste immobile et les épaules détendues. Réalisez le mouvement dans une amplitude confortable, sans forcer et sans douleur.",
        zones: ["Cervicales", "Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex33_img01.png",
                alt: "Inclinaison cervicale en position assise, tête penchée sur le côté avec épaules relâchées"
            }
        ]
    },
    {
        id: 34,
        titre: "Flexion – extension thoracique",
        description: "Objectif : améliorer la mobilité de la colonne thoracique afin de limiter les raideurs dorsales.\n\nConsigne : Option 1 : Debout, les pieds légèrement décalés du mur, rapprochez le thorax du mur tout en levant un ou deux bras. Option 2 : En position assise, allez le plus loin possible vers l'arrière en prenant appui sur le dossier de la chaise. Réalisez les mouvements lentement, sans douleur.",
        zones: ["Dos"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex34_img01.png",
                alt: "Flexion-extension thoracique debout près d'un mur avec élévation des bras"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex34_img02.png",
                alt: "Extension thoracique en position assise avec appui sur le dossier de la chaise"
            }
        ]
    },
    {
        id: 35,
        titre: "Rotations thoraco-lombaires",
        description: "Objectif : améliorer la mobilité en rotation de la colonne thoracique et lombaire afin de faciliter les mouvements du tronc.\n\nConsigne : En position assise sur une chaise, tournez le tronc en touchant alternativement le genou gauche puis le genou droit avec la main opposée. Le bassin reste stable et le mouvement est fluide et contrôlé.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex35_img01.png",
                alt: "Rotation thoraco-lombaire en position assise, main opposée venant toucher le genou"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex35_img02.png",
                alt: "Rotation thoraco-lombaire en position debout, tronc tourné avec bassin stable"
            }
        ]
    },
    {
        id: 36,
        titre: "Inclinaisons thoraco-lombaires",
        description: "Objectif : améliorer la mobilité latérale de la colonne thoracique et lombaire afin de diminuer les raideurs du tronc.\n\nConsigne : En position assise ou debout, inclinez lentement le tronc sur le côté en laissant glisser la main le long de la cuisse. Revenez au centre puis changez de côté. Le bassin reste stable et le mouvement est contrôlé, sans douleur.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex36_img01.png",
                alt: "Inclinaison thoraco-lombaire du tronc sur le côté avec bassin stable"
            }
        ]
    },
    {
        id: 37,
        titre: "Dos rond / dos creux",
        description: "Objectif : améliorer la mobilité en flexion et en extension de la colonne thoraco-lombaire et coordonner le mouvement avec la respiration.\n\nConsigne : En appui sur les bras, inspirez en creusant doucement le dos et en regardant vers le haut. Expirez en arrondissant le dos au maximum, en poussant sur les bras et en regardant vers les genoux. Enchaînez lentement les deux positions, sans douleur.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex37_img01.png",
                alt: "Dos creux en appui sur les bras, colonne en extension"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex37_img02.png",
                alt: "Dos rond en appui sur les bras, colonne fléchie"
            }
        ]
    },
    {
        id: 38,
        titre: "Extension lombaire / Sphinx",
        description: "Objectif : améliorer la mobilité en extension de la colonne lombaire et diminuer les tensions du bas du dos.\n\nConsigne : Allongé sur le ventre, placez-vous en appui sur les avant-bras et redressez le buste. Poussez doucement dans les coudes pour accentuer l'extension, sans décoller le bassin et sans contracter les fesses. Maintenez quelques secondes puis relâchez.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex38_img01.png",
                alt: "Extension lombaire en position sphinx, appui sur les avant-bras avec bassin au sol"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex38_img02.png",
                alt: "Extension lombaire progressive en appui sur les coudes, buste redressé"
            }
        ]
    },
    {
        id: 39,
        titre: "Flexion lombaire",
        description: "Objectif : améliorer la mobilité en flexion de la colonne lombaire et favoriser l'étirement du dos.\n\nConsigne : En position assise ou debout, amenez les mains le plus loin possible vers l'avant en laissant le dos s'arrondir progressivement. Il est possible d'utiliser un ballon que l'on fait rouler vers l'avant pour accompagner le mouvement. Réalisez l'exercice lentement, sans douleur.",
        zones: ["Dos", "Lombaires"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex39_img01.png",
                alt: "Flexion lombaire avec dos arrondi, mains avancées vers l'avant"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex39_img02.png",
                alt: "Flexion lombaire assistée avec ballon roulé vers l'avant"
            }
        ]
    },
    {
        id: 40,
        titre: "Mobilisation de l'épaule et recentrage",
        description: "Objectif : améliorer la mobilité de l'épaule et favoriser le recentrage articulaire afin de diminuer les tensions.\n\nConsigne : En position assise, l'avant-bras reposant sur une serviette posée sur une table, faites glisser le bras d'avant en arrière puis sur le côté. Il est possible d'ajouter un élastique qui tracte l'épaule vers l'arrière et le bas. Variante : coude posé sur un ballon ou la table, écrasez légèrement vers le bas en abaissant l'épaule. Mouvement lent et sans douleur.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex40_img01.png",
                alt: "Mobilisation de l'épaule assis avec avant-bras glissant sur une table"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex40_img02.png",
                alt: "Recentrage de l'épaule avec coude posé sur un ballon et abaissement de l'épaule"
            }
        ]
    },
    {
        id: 43,
        titre: "Pendulaire",
        description: "Objectif : favoriser la détente de l'épaule et améliorer la mobilité passive de l'articulation gléno-humérale.\n\nConsigne : Assis ou debout, penchez-vous légèrement en avant et laissez le bras pendre vers le bas, complètement relâché. Effectuez de petits mouvements circulaires avec le bras, dans un sens puis dans l'autre, sans contracter l'épaule. Le mouvement doit rester doux et sans douleur.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex43_img01.png",
                alt: "Exercice pendulaire de l'épaule, bras relâché effectuant de petits cercles vers le bas"
            }
        ]
    },
    {
        id: 44,
        titre: "Mobilisation de la scapula",
        description: "Objectif : améliorer la mobilité de la scapula et favoriser le contrôle des épaules afin d'optimiser la posture.\n\nConsigne : Debout ou assis, bras le long du corps, reculez les épaules puis abaissez-les en serrant les omoplates comme pour les amener vers les poches arrière du pantalon. Maintenez brièvement puis relâchez. Mouvement lent, sans douleur.",
        zones: ["Épaule"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex44_img01.png",
                alt: "Mobilisation de la scapula avec épaules reculées et omoplates serrées"
            }
        ]
    },
    {
        id: 45,
        titre: "Flexion de hanche",
        description: "Objectif : améliorer la mobilité en flexion de la hanche et faciliter les mouvements fonctionnels du membre inférieur.\n\nConsigne : En position allongée sur le dos ou assise, amenez le genou vers la poitrine puis revenez lentement à la position de départ. Le mouvement est fluide et contrôlé. Il est possible d'utiliser un swiss ball ou un élastique pour accompagner l'exercice. Réalisez sans douleur.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: ["Swiss ball", "Élastique"],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex45_img01.png",
                alt: "Flexion de hanche allongée sur le dos avec genou ramené vers la poitrine"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex45_img02.png",
                alt: "Flexion de hanche assistée avec swiss ball ou élastique"
            }
        ]
    },
    {
        id: 46,
        titre: "Rotations de hanche",
        description: "Objectif : améliorer la mobilité en rotation de l'articulation de la hanche.\n\nConsigne : En position assise ou allongée, effectuez des rotations de la hanche en amenant le genou vers l'intérieur puis vers l'extérieur. Le bassin reste stable et le mouvement est lent et contrôlé, sans douleur.",
        zones: ["Hanche"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex46_img01.png",
                alt: "Rotations de hanche, genou déplacé vers l'intérieur puis l'extérieur avec bassin stable"
            }
        ]
    },
    {
        id: 47,
        titre: "Flexion – extension de genou",
        description: "Objectif : améliorer la mobilité du genou et faciliter les mouvements de flexion et d'extension.\n\nConsigne : En position assise ou allongée, pliez puis tendez le genou de manière lente et contrôlée. Le mouvement doit rester fluide et indolore, sans à-coups.",
        zones: ["Genou"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex47_img01.png",
                alt: "Flexion puis extension du genou en position assise"
            }
        ]
    },
    {
        id: 48,
        titre: "Flexion dorsale de cheville",
        description: "Objectif : améliorer la mobilité en flexion dorsale de la cheville afin de faciliter la marche et les appuis.\n\nConsigne : En position assise ou debout, ramenez la pointe du pied vers vous puis revenez lentement à la position de départ. Le mouvement est contrôlé et réalisé dans une amplitude confortable, sans douleur.",
        zones: ["Cheville et pied"],
        types: ["Mobilité"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex48_img01.png",
                alt: "Flexion dorsale de cheville, pointe du pied ramenée vers le tibia"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex48_img02.png",
                alt: "Flexion dorsale de cheville en appui, mouvement contrôlé"
            }
        ]
    },
    {
        id: 49,
        titre: "Gainage latéral",
        description: "Objectif : renforcer les muscles latéraux du tronc et améliorer la stabilité.\n\nConsigne : Sur le côté, les jambes l'une sur l'autre, en appui sur l'avant-bras. Décoller le bassin en maintenant l'alignement tête, tronc et bassin.\n\nOption 1 : sur les genoux.\nOption 2 : possibilité de lever la jambe et ou le bras supérieur.\nOption 3 : en appui sur les pieds.",
        zones: ["Dos", "Lombaires"],
        types: ["Gainage", "Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex49_img01.jpeg",
                alt: "Gainage latéral en appui sur l'avant-bras"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex49_img02.jpeg",
                alt: "Gainage latéral sur les genoux"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex49_img03.jpeg",
                alt: "Gainage latéral en appui sur les pieds"
            }
        ]
    },
    {
        id: 50,
        titre: "Gainage latéral dynamique",
        description: "Objectif : renforcer le gainage latéral dynamique et le contrôle du tronc.\n\nConsigne : En gainage sur le côté, tendre le bras supérieur vers le haut puis le ramener sous le tronc en maintenant le gainage.",
        zones: ["Dos", "Lombaires"],
        types: ["Gainage", "Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex50_img01.jpeg",
                alt: "Gainage latéral dynamique avec mouvement du bras"
            }
        ]
    },
    {
        id: 51,
        titre: "Abdos : ciseaux",
        description: "Objectif : renforcer la ceinture abdominale en contrôle actif.\n\nConsigne : Baisser alternativement les jambes. Mettre les mains sous le bassin pour éviter de creuser les lombaires lors de la descente des jambes. Expirer lors de la descente et freiner le mouvement.\n\nOption : possibilité de descendre les deux jambes en même temps.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex51_img01.jpeg",
                alt: "Abdominaux en ciseaux, descente alternée des jambes"
            }
        ]
    },
    {
        id: 52,
        titre: "Abdos : bras et jambes",
        description: "Objectif : renforcer les abdominaux et la coordination croisée.\n\nConsigne : Option 1 : allongé sur le dos, lever les bras au-dessus de la tête, lever les jambes tendues à 45 degrés, contracter les abdos en rentrant le nombril.\n\nOption 2 : alterner une jambe et un bras opposé puis l'autre.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex52_img01.jpeg",
                alt: "Abdominaux bras et jambes, position de départ"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex52_img02.jpeg",
                alt: "Abdominaux bras et jambes avec élévation à 45 degrés"
            },
            {
                url: "https://onceuponablind.fr/Images/exercices/ex52_img03.jpeg",
                alt: "Abdominaux en coordination croisée bras et jambe opposés"
            }
        ]
    },
    {
        id: 53,
        titre: "Abdos : la corde",
        description: "Objectif : renforcer les abdominaux et engager les épaules.\n\nConsigne : Allongé sur le dos, genoux pliés, faire comme si vous grimpiez à la corde avec vos mains en engageant les épaules.\n\nOption : possible de le faire en pliant les hanches et les genoux à 90 degrés.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex53_img01.jpeg",
                alt: "Exercice abdominal dit de la corde, engagement des épaules"
            }
        ]
    },
    {
        id: 54,
        titre: "Abdos : hypopressif",
        description: "Objectif : renforcer la sangle abdominale profonde par le travail expiratoire.\n\nConsigne : Allongé sur le dos, les genoux pliés. Souffler, appuyer sur les cuisses avec les mains et rentrer le nombril au maximum. Tenir l'expiration le plus longtemps possible.\n\nOption 2 : faire la même chose les mains croisées sur le torse en décollant la tête et les épaules.\nOption 3 : même consigne avec les hanches pliées à 90 degrés.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex54_img01.jpeg",
                alt: "Abdominaux hypopressifs en position allongée"
            }
        ]
    },
    {
        id: 55,
        titre: "Abdos : russian twist",
        description: "Objectif : renforcer les abdominaux obliques et le contrôle du tronc.\n\nConsigne : Assis, lever les jambes pliées, tourner le buste vers la droite puis vers la gauche.\n\nOption : possible de rajouter un poids dans les mains.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: ["Poids"],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex55_img01.jpeg",
                alt: "Abdominaux russian twist en position assise"
            }
        ]
    },
    {
        id: 56,
        titre: "Abdos : le pingouin",
        description: "Objectif : renforcer les abdominaux latéraux.\n\nConsigne : Allongé sur le dos, genoux pliés. Faire de l'auto-grandissement puis aller toucher vos chevilles l'une après l'autre.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex56_img01.jpeg",
                alt: "Abdominaux latéraux avec toucher alterné des chevilles"
            }
        ]
    },
    {
        id: 57,
        titre: "Abdos : obliques",
        description: "Objectif : renforcer les muscles obliques de l'abdomen.\n\nConsigne : Allongé sur le dos, genoux fléchis. Décoller légèrement les épaules et amener alternativement le coude vers le genou opposé, en contrôlant le mouvement et sans tirer sur la nuque.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex57_img01.jpeg",
                alt: "Renforcement des abdominaux obliques en rotation"
            }
        ]
    },
    {
        id: 58,
        titre: "Abdos : la chandelle",
        description: "Objectif : renforcer les abdominaux et le contrôle du bassin.\n\nConsigne : Sur le dos, décoller les jambes et les tendre vers le plafond. Placer les mains sous les fesses. Essayer de décoller les fesses du sol comme si vous vouliez toucher le plafond avec les pieds.",
        zones: ["Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex58_img01.jpeg",
                alt: "Abdominaux en chandelle avec élévation des jambes et du bassin"
            }
        ]
    },
    {
        id: 59,
        titre: "Auto-grandissement",
        description: "Objectif : améliorer la posture et l'auto-élongation du rachis.\n\nConsigne : Assis ou debout, essayer de toucher le plafond avec la tête sans lever les épaules, et étirer les bras vers les pieds. Penser à rentrer le menton et à tenir la position minimum 30 secondes.",
        zones: ["Dos", "Lombaires"],
        types: ["Renforcement"],
        materiel: [],
        photos: [
            {
                url: "https://onceuponablind.fr/Images/exercices/ex59_img01.png",
                alt: "Auto-grandissement en position assise ou debout"
            }
        ]
    }
];
