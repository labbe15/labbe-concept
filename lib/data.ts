export type ServiceContent = {
  intro: string;
  section2Title: string;
  paragraphs: [string, string, string];
  materialsTitle: string;
  materialsBody: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  heroImage: string;
  content: ServiceContent;
};

export const SERVICES: Service[] = [
  {
    slug: "fenetres-et-portes",
    name: "Fenêtres & Portes",
    shortName: "fenêtres et portes",
    description:
      "PVC, aluminium, mixte bois-alu. Pose neuve ou remplacement. Mono, double ou triple vitrage selon vos besoins thermiques et acoustiques.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
    content: {
      intro:
        "La fenêtre est bien plus qu'une ouverture sur l'extérieur — elle définit la luminosité d'un intérieur, son confort thermique et le caractère architectural d'une façade. Chez Labbe Concept, chaque remplacement ou pose neuve est précédée d'un diagnostic précis de l'existant, d'un relevé de cotes minutieux et d'un conseil personnalisé sur le matériau et le vitrage adaptés à votre exposition.",
      section2Title: "L'excellence thermique et acoustique",
      paragraphs: [
        "Le choix du matériau détermine l'esthétique autant que les performances. Le PVC offre une isolation thermique remarquable pour un rapport qualité-prix imbattable. L'aluminium séduit par sa finesse de profil, sa robustesse et sa palette de teintes RAL quasi-illimitée. Le mixte bois-aluminium combine la chaleur naturelle du bois côté intérieur avec la résistance de l'aluminium face aux intempéries.",
        "Le vitrage est le cœur thermique de la fenêtre. Je travaille principalement avec du double vitrage à faible émissivité (Ug ≤ 1,1 W/m².K) et du triple vitrage pour les expositions nord ou les projets BBC. Chaque vitrage est sélectionné en fonction de l'orientation de la pièce, de l'altitude et des objectifs de performance énergétique — conformément aux exigences de la RE2020.",
        "De la dépose soigneuse de l'ancien châssis à la mise en œuvre des mousse expansive et joints d'étanchéité, chaque étape de la pose conditionne les performances finales. Je prends en charge l'ensemble du chantier : dépose, calfeutrement, pose, finitions intérieures et extérieures. Votre intérieur est laissé propre et net à chaque fin de journée.",
      ],
      materialsTitle: "Matériaux & Finitions",
      materialsBody:
        "PVC blanc, couleur ou bois-imitation. Aluminium laqué toutes teintes RAL — thermolaqué ou anodisé. Mixte bois-alu en chêne, pin ou épicéa. Vitrages feuilletés, décoratifs, anti-effraction jusqu'au niveau P4. Quincailleries Winkhaus et Roto. Références : Rehau, Schüco, Aliplast.",
    },
  },
  {
    slug: "volets-et-stores",
    name: "Volets & Stores",
    shortName: "volets et stores",
    description:
      "Volets battants, roulants, BSO. Motorisation et intégration domotique. Toutes configurations, toutes dimensions.",
    heroImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&q=85",
    content: {
      intro:
        "Volets battants en aluminium ou PVC, volets roulants motorisés, stores à bandes orientables (BSO) — chaque solution répond à un besoin précis de protection solaire, de sécurité et de confort visuel. Depuis 15 ans, j'interviens sur tous types de configurations, du remplacement d'une paire de volets battants à l'automatisation complète d'une maison.",
      section2Title: "Protection solaire et intimité maîtrisées",
      paragraphs: [
        "Le volet battant reste la référence esthétique dans l'habitat traditionnel du Tarn. Je les pose en aluminium thermolaqué, quasi-sans entretien, ou en PVC pour les budgets maîtrisés. Chaque paire est posée avec des gonds réglables et des systèmes d'arrêt qui résistent aux vents violents du Midi — une réalité à ne pas négliger en Occitanie.",
        "Le volet roulant motorisé offre le confort absolu : une touche de télécommande ou une application smartphone suffit à obscurcir une pièce ou à réduire la surchauffe estivale. Je travaille avec les motorisations Somfy et Nice, reconnues pour leur fiabilité et leur écosystème domotique. L'intégration dans une installation existante est toujours possible en rénovation.",
        "Le store à bandes orientables (BSO) est la solution haut de gamme pour les façades vitrées exposées sud ou ouest. Il tamise la lumière sans la bloquer totalement, réduit la surchauffe en été et protège de la pluie. En aluminium laqué, il vieillit sans entretien et s'harmonise avec toutes les façades contemporaines.",
      ],
      materialsTitle: "Gammes & Motorisations",
      materialsBody:
        "Volets battants aluminium et PVC, toutes teintes RAL. Volets roulants aluminium ou PVC avec coffre rénovation ou neuf. BSO lames 80mm orientables. Motorisations Somfy, Nice, Came. Télécommandes, timer, capteur solaire et vent, intégration Tahoma et Home By Somfy. Normes NF EN 13659.",
    },
  },
  {
    slug: "pergolas-et-verandas",
    name: "Pergolas & Vérandas",
    shortName: "pergolas et vérandas",
    description:
      "Structures aluminium bioclimatiques à lames orientables. Vérandas sur mesure. Création d'espaces de vie extérieurs haut de gamme.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    content: {
      intro:
        "La pergola bioclimatique est devenue l'extension naturelle du salon pour les maisons du Sud. Elle transforme une terrasse en véritable pièce à vivre à ciel ouvert, utilisable neuf mois sur douze grâce à ses lames orientables qui gèrent lumière, ventilation et protection. Labbe Concept conçoit et pose ces structures sur mesure dans tout le Tarn.",
      section2Title: "Un espace de vie au fil des saisons",
      paragraphs: [
        "La pergola bioclimatique à lames aluminium orientables représente le summum du confort extérieur. Les lames pivotent de 0° à 135° pour moduler l'ensoleillement à la seconde, s'inclinent pour laisser passer la pluie en cas d'averse légère, et se ferment hermétiquement pour une protection totale. Capteur de pluie et anémomètre peuvent être intégrés pour une gestion automatique.",
        "La véranda est une architecture à part entière. Elle doit s'intégrer au bâti existant, respecter les règles d'urbanisme locales et offrir un confort thermique quatre saisons. Je propose des vérandas en aluminium thermolaqué avec vitrages isolants — toit en verre feuilleté ou en polycarbonate alvéolaire selon le budget et l'usage. Chaque projet fait l'objet d'un plan de conception avant signature.",
        "L'implantation est une science en elle-même dans notre région. L'exposition aux vents d'autan, l'ensoleillement estival et les pluies automnales guident le choix des matériaux et des orientations. Fort de 15 ans de pose dans le Tarn, je connais les contraintes locales et je peux anticiper les problèmes que vous ne soupçonnez pas encore.",
      ],
      materialsTitle: "Structures & Options",
      materialsBody:
        "Pergolas aluminium extrudé, lames 120mm ou 150mm orientables motorisées. Structures autoportantes ou adossées. Éclairage LED intégré dans les lames et les poteaux. Stores zip ou rideaux enroulables sur les côtés. Gouttières intégrées dans les poteaux. Charge neige et vent calculée selon la zone climatique Tarn. Garantie 10 ans structure.",
    },
  },
  {
    slug: "portails-et-clotures",
    name: "Portails & Clôtures",
    shortName: "portails et clôtures",
    description:
      "Portails aluminium, acier ou PVC. Clôtures sur mesure. Automatisation et motorisation incluses.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=85",
    content: {
      intro:
        "Le portail est la première image de votre propriété. Il définit le ton architectural de l'ensemble, doit résister aux intempéries du Midi et offrir une sécurité réelle. Labbe Concept propose des portails aluminium coulissants ou battants, sur mesure, motorisés et connectés à votre smartphone.",
      section2Title: "Sécurité, esthétique et confort d'accès",
      paragraphs: [
        "L'aluminium s'est imposé comme le matériau de référence pour les portails modernes. Léger, rigide, insensible à la corrosion et disponible dans toutes les teintes RAL, il offre des designs épurés contemporains comme des imitations bois très convaincantes. Les lames peuvent être ajourées pour laisser passer la lumière ou pleines pour préserver l'intimité.",
        "La motorisation n'est plus un luxe mais une évidence. Je monte principalement des motorisations CAME, BFT et Somfy, reconnues pour leur robustesse dans les conditions difficiles. Télécommande, badge de proximité, interphone vidéo, ouverture à distance par application — toutes les options sont disponibles et peuvent évoluer avec le temps.",
        "La clôture doit être cohérente avec le portail, le style de la maison et les contraintes du terrain. Je pose des clôtures rigides en panneau soudé, des clôtures ajourées en aluminium ou des grillages torsadés en limite de propriété. Chaque projet est étudié en fonction des servitudes locales et du plan local d'urbanisme de votre commune.",
      ],
      materialsTitle: "Matériaux & Motorisations",
      materialsBody:
        "Portails aluminium extrudé, acier galvanisé et thermolaqué, PVC. Toutes teintes RAL. Modèles contemporains, classiques, à barreaux ou à lames pleines. Motorisations CAME, BFT, Somfy. Interphones vidéo, digicode, badge RFID. Clôtures rigides, ajourées, grillage torsadé. Piliers béton ou maçonnés sur demande.",
    },
  },
  {
    slug: "escaliers",
    name: "Escaliers",
    shortName: "escaliers",
    description:
      "Escaliers bois massif, métal ou mixte. Conception et pose sur mesure. Garde-corps aluminium et inox.",
    heroImage:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=85",
    content: {
      intro:
        "Un escalier est le pivot de la verticalité d'une maison. Il structure l'espace, révèle le caractère de l'intérieur et doit tenir ses promesses pendant des décennies. Labbe Concept conçoit et pose des escaliers sur mesure en bois massif, métal ou mixte, avec garde-corps aluminium ou inox.",
      section2Title: "Conception sur mesure, structure durable",
      paragraphs: [
        "Chaque escalier commence par un relevé précis de la trémie, du plancher haut et des contraintes architecturales. Limon central ou double limon, marches droites ou balancées, quart tournant ou deux-quarts — chaque configuration est étudiée pour optimiser le confort de montée et l'emprise au sol. Je collabore avec des menuisiers agenceurs locaux pour la réalisation des éléments bois.",
        "Le bois massif apporte une chaleur incomparable. Chêne, hêtre, pin sylvestre ou frêne — chaque essence a ses qualités et sa palette de teintes après finition. Le métal lacépique ou brut de forge peut être associé au bois pour un résultat industriel ou contemporain. Les marches en verre trempé feuilleté sont disponibles pour les intérieurs très lumineux.",
        "Le garde-corps est l'élément de sécurité mais aussi l'accessoire décoratif de l'escalier. Je propose des rampes en aluminium anodisé, en inox brossé ou en verre feuilleté avec main-courante bois ou inox. Chaque modèle est conforme aux normes NF P01-012 et P01-013 pour les ERP et habitations privées.",
      ],
      materialsTitle: "Matériaux & Configurations",
      materialsBody:
        "Structures bois massif : chêne, hêtre, pin, frêne. Structures métal : acier thermolaqué, inox. Mixte bois-métal. Marches bois, métal, verre feuilleté. Garde-corps aluminium, inox, verre. Rampes toutes dimensions. Hauteur marche 17-20cm, giron 28-32cm. Normes NF P01-012 et P01-013.",
    },
  },
  {
    slug: "portes-de-garage",
    name: "Portes de Garage",
    shortName: "portes de garage",
    description:
      "Sectionnelles, basculantes, enroulables. Motorisation automatique, télécommande et accès smartphone.",
    heroImage:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=85",
    content: {
      intro:
        "La porte de garage représente souvent 30 à 40% de la façade d'un pavillon. Son aspect conditionne l'harmonie de l'ensemble autant que son isolation thermique et acoustique. Labbe Concept pose des portes sectionnelles, basculantes et enroulables, motorisées, dans tous les matériaux et toutes les dimensions.",
      section2Title: "Confort, isolation et sécurité",
      paragraphs: [
        "La porte sectionnelle est aujourd'hui la référence technique : ses panneaux articulés s'escamotent parfaitement au plafond du garage, sans empiéter sur l'allée d'accès. Son joint périphérique assure une étanchéité irréprochable aux intempéries et aux insectes. Les modèles double paroi remplis de mousse polyuréthane atteignent Ud ≤ 1,1 W/m².K — un gain thermique significatif pour un garage chauffé ou mitoyen à la maison.",
        "La motorisation est systématiquement incluse dans mes devis, car son coût à la pose est marginal comparé à une installation ultérieure. Je monte des motorisations Somfy, CAME et Hormann qui résistent à 10 000 cycles d'utilisation minimum. L'application smartphone permet d'ouvrir ou fermer à distance, de consulter l'historique d'accès et de gérer les accès de votre famille.",
        "Pour les ouvertures non standard — très larges, très hautes, ou dans des garages avec plafond bas — la porte enroulable ou basculante offre des solutions adaptées. Chaque relevé de cotes est effectué sur place avant chiffrage pour éviter les mauvaises surprises lors de la pose.",
      ],
      materialsTitle: "Gammes & Options",
      materialsBody:
        "Portes sectionnelles acier double paroi, aluminium nervuré, PVC. Motifs : lisse, rainuré, vitré. Toutes teintes RAL. Motorisations Somfy, CAME, Hormann. Télécommande, clavier mural, application smartphone. Système anti-pincement des doigts. Serrure mécanique et électromécanique. Hublots en verre feuilleté sur demande.",
    },
  },
  {
    slug: "terrasses-bois",
    name: "Terrasses Bois",
    shortName: "terrasses bois",
    description:
      "Terrasses en bois exotique, pin traité ou composite. Conception, fourniture et pose. Finitions soignées.",
    heroImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
    content: {
      intro:
        "Une terrasse en bois prolonge l'espace de vie vers l'extérieur, crée une transition naturelle entre l'intérieur et le jardin et supporte quinze ans d'usage intensif si elle est bien conçue. Labbe Concept prend en charge l'intégralité du projet : de l'étude du terrain et des contraintes d'accès à la pose et aux finitions.",
      section2Title: "L'art de la terrasse bien posée",
      paragraphs: [
        "La structure portante est ce que personne ne voit, mais qui conditionne tout. Solivage bois traité classe 4 ou aluminium, ancrages inox sur plots réglables ou sur dalle béton, espacement des lambourdes calculé en fonction des essences choisies et des charges d'usage — chaque détail compte pour obtenir une terrasse stable, sans fléchissement ni bruit de craquement après quelques étés.",
        "Le choix de l'essence est une question d'esthétique, de budget et d'entretien. Le pin sylvestre traité autoclave classe 4 est économique et accepte bien les finitions teintées. L'ipé et le cumaru sont des bois exotiques d'une densité exceptionnelle qui vieillissent en grisaillant naturellement sans entretien. Le composite à base de fibres de bois et de PVC recyclé offre la durabilité maximale avec le moins d'entretien.",
        "Les finitions font la différence entre une terrasse ordinaire et une terrasse premium. Lames à clipser pour un rendu sans vis apparent, profils de rive en aluminium anodisé, margelles de piscine biseautées, jonctions avec seuil de porte traités dans les règles — autant de détails que je soigne sur chaque chantier pour un résultat impeccable et durable.",
      ],
      materialsTitle: "Essences & Structures",
      materialsBody:
        "Bois massif : pin sylvestre traité classe 4, ipé, cumaru, bangkirai. Composite : fibres de bois et PVC recyclé. Structures : solivage bois ou aluminium sur plots réglables. Lames 145mm ou 120mm, 21mm d'épaisseur. Pose à clipser ou visée. Finitions : huile, saturateur, lasure. Profils aluminium de rive et margelle.",
    },
  },
  {
    slug: "automatismes",
    name: "Automatismes",
    shortName: "automatismes",
    description:
      "Motorisation de portails, volets, portes de garage. Intégration domotique. Marques Somfy, Nice, Came.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85",
    content: {
      intro:
        "L'automatisation d'une maison ne nécessite pas de partir de zéro. En rénovation comme en neuf, il est possible de motoriser portail, volets et porte de garage existants pour obtenir un confort d'utilisation quotidien et une gestion à distance depuis n'importe où dans le monde.",
      section2Title: "La maison connectée, sans la complexité",
      paragraphs: [
        "Somfy est la référence mondiale de la motorisation de fermetures. Depuis les moteurs de volets roulants jusqu'aux systèmes de contrôle centralisés Tahoma et Home By Somfy, l'écosystème est cohérent, fiable et interopérable avec Amazon Alexa, Google Home et Apple HomeKit. Je suis revendeur et installateur agréé Somfy dans le Tarn.",
        "La motorisation d'un portail existant est souvent une opération d'une demi-journée. Un vérin ou un moteur bras est installé sur les vantaux, une armoire électrique est posée en limite de propriété, et la mise en service est effectuée avant mon départ de chantier. Je programme les télécommandes, teste les sécurités et vous forme à l'utilisation.",
        "L'intégration domotique avancée permet de créer des scénarios : fermeture automatique des volets au coucher du soleil, ouverture du portail lors du déverrouillage de votre voiture, simulation de présence en vacances. Ces automatisations sont accessibles via une simple application et ne nécessitent aucune compétence technique particulière.",
      ],
      materialsTitle: "Marques & Systèmes",
      materialsBody:
        "Motorisations Somfy, Nice, CAME, BFT. Gestion centralisée : Tahoma by Somfy, Home By Somfy. Compatibilité : Alexa, Google Home, Apple HomeKit. Capteurs : vent, pluie, ensoleillement. Alimentation secours sur batterie. Télécommande, badge RFID, interphone vidéo, clavier à code. SAV et dépannage sur l'ensemble du département.",
    },
  },
];

export const VILLES = [
  { slug: "gaillac", name: "Gaillac", dept: "81" },
  { slug: "albi", name: "Albi", dept: "81" },
  { slug: "cahuzac-sur-vere", name: "Cahuzac-sur-Vère", dept: "81" },
  { slug: "castres", name: "Castres", dept: "81" },
  { slug: "lavaur", name: "Lavaur", dept: "81" },
  { slug: "cordes-sur-ciel", name: "Cordes-sur-Ciel", dept: "81" },
  { slug: "carmaux", name: "Carmaux", dept: "81" },
  { slug: "mazamet", name: "Mazamet", dept: "81" },
  { slug: "rabastens", name: "Rabastens", dept: "81" },
  { slug: "realmont", name: "Réalmont", dept: "81" },
  { slug: "saint-sulpice", name: "Saint-Sulpice", dept: "81" },
  { slug: "puylaurens", name: "Puylaurens", dept: "81" },
];
