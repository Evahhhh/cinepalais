const products = [
  {
    id: 1,
    name: "Ramen",
    category: "animation",
    price: 10,
    imageSrc: "/assets/meal/ramen.jpg",
    imageAlt: "ramen ponyo sur la falaise",
    emporter: "Oui",
    livraison: "Oui",
    rating: 4,
    description:
      "Un bol de ramen qui danse avec les vagues de l'océan, accompagné de poissons en forme de poissons et d'algues qui fredonnent des mélodies joyeuses.",
  },
  {
    id: 2,
    name: "Spaghetti à la bolognaise",
    category: "animation",
    price: 15,
    imageSrc: "/assets/meal/spaghettis.jpg",
    imageAlt: "spaghetti la belle et le clochard",
    emporter: "Non",
    livraison: "Oui",
    rating: 5,
    description:
      "Une montagne de spaghettis qui s'entrelacent comme un baiser passionné sous un ciel de sauce tomate étoilé, avec deux boulettes de viande qui s'étreignent tendrement au sommet.",
  },
  {
    id: 3,
    name: "Ratatouille",
    category: "animation",
    price: 15,
    imageSrc: "/assets/meal/ratatouille.jpg",
    imageAlt: "ratatouille de ratatouille",
    emporter: "Oui",
    livraison: "Non",
    rating: 3,
    description:
      "Une danse colorée de légumes qui s'entremêlent avec grâce, créant une symphonie de saveurs qui mettra même le critique culinaire le plus sévère à genoux.",
  },
  {
    id: 4,
    name: "Gumbo",
    category: "animation",
    price: 17,
    imageSrc: "/assets/meal/gumbo.jpg",
    imageAlt: "gumbo de la princesse et la grenouille",
    emporter: "Oui",
    livraison: "Non",
    rating: 4,
    description:
      "Un chaudron magique débordant de crevettes dansantes, de saucisses qui swinguent et de légumes qui font le moonwalk, créant un tourbillon de saveurs cajun.",
  },
  {
    id: 5,
    name: "Haggis",
    category: "animation",
    price: 9,
    imageSrc: "/assets/meal/haggis.jpg",
    imageAlt: "haggis de rebelle",
    emporter: "Non",
    livraison: "Non",
    rating: 2,
    description:
      "Un plat courageux qui ose mélanger les traditions, avec un haggis écossais qui porte une flèche sur son dos et une pincée d'esprit rebelle.",
  },
  {
    id: 6,
    name: "Bao buns",
    category: "animation",
    price: 12,
    imageSrc: "/assets/meal/buns.png",
    imageAlt: "bao buns de bao",
    emporter: "Oui",
    livraison: "Non",
    rating: 5,
    description:
      "Des petits coussins moelleux qui cachent des secrets délicieux, comme des petites créatures farceuses qui vous font sourire à chaque bouchée.",
  },
  {
    id: 7,
    name: "Poulet frit",
    category: "film",
    price: 17,
    imageSrc: "/assets/meal/poulet.png",
    imageAlt: "poulet frit de la couleur des sentiments",
    emporter: "Non",
    livraison: "Non",
    rating: 4,
    description:
      "Un poulet croustillant qui porte avec fierté les couleurs de l'âme, avec une panure qui réconforte et une marinade qui guérit les cœurs brisés.",
  },
  {
    id: 8,
    name: "Pain des morts",
    category: "animation",
    price: 5,
    imageSrc: "/assets/meal/pain.png",
    imageAlt: "pain des morts de coco",
    emporter: "Oui",
    livraison: "Oui",
    rating: 3,
    description:
      "Un pain qui résonne avec l'écho des ancêtres, saupoudré de sucre comme les souvenirs doux-amers qui nous lient à nos racines.",
  },
  {
    id: 9,
    name: "Pizza",
    category: "film",
    price: 12,
    imageSrc: "/assets/meal/pizza.png",
    imageAlt: "pizza de mange prie aime",
    emporter: "Non",
    livraison: "Oui",
    rating: 5,
    description:
      "Une pizza qui capture l'essence de l'Italie, avec des ingrédients qui chantent une ode à la joie, à la spiritualité et à la passion.",
  },
  {
    id: 10,
    name: "Croissant et café",
    category: "film",
    price: 6,
    imageSrc: "/assets/meal/croissant.png",
    imageAlt: "croissant et café de diamants sur canapé",
    emporter: "Oui",
    livraison: "Oui",
    rating: 4,
    description:
      "Un croissant qui brille comme un diamant, trempé dans un café qui chuchote des secrets élégants, créant un petit-déjeuner digne des plus grandes stars de la haute couture.",
  },
  {
    id: 11,
    name: "Pomme empoisonnée",
    category: "animation",
    price: 2,
    imageSrc: "/assets/meal/pomme.jpg",
    imageAlt: "pomme empoisonnée de blanche neige",
    emporter: "Oui",
    livraison: "Non",
    rating: 1,
    description:
      "Une pomme qui brille comme un rubis, avec une peau aussi rouge que le sang et un cœur aussi noir que la nuit, qui vous fera tomber dans un sommeil profond.",
  },
  {
    id: 12,
    name: "Oeufs aux plats et bacons",
    category: "animation",
    price: 6,
    imageSrc: "/assets/meal/oeufs.jpg",
    imageAlt: "oeufs aux plats du château ambulant",
    emporter: "Oui",
    livraison: "Non",
    rating: 5,
    description:
      "Des œufs qui dansent dans la poêle, avec du bacon qui chante une chanson joyeuse, créant un petit-déjeuner qui vous fera danser toute la journée.",
  },
  {
    id: 13,
    name: "Potion magique",
    category: "film",
    price: 12,
    imageSrc: "/assets/meal/potion.jpg",
    imageAlt: "potion magique d'astérix et obélix",
    emporter: "Non",
    livraison: "Non",
    rating: 5,
    description:
      "Une potion qui vous donnera la force d'un dieu, avec des ingrédients qui vous feront sentir comme un enfant à nouveau, avec une énergie qui durera toute la journée.",
  },
  {
    id: 14,
    name: "Donut",
    category: "animation",
    price: 4,
    imageSrc: "/assets/meal/donut.jpg",
    imageAlt: "Donut d'Homer Simpson",
    emporter: "Oui",
    livraison: "Oui",
    rating: 4,
    description:
      "Un donut qui vous fera dire mmhhhh",
  },
  {
    id: 15,
    name: "Pâté de crabe croustillant",
    category: "animation",
    price: 11,
    imageSrc: "/assets/meal/pateDeCrabe.jpg",
    imageAlt: "Pâté de crabe croustillant de bob l'éponge",
    emporter: "Oui",
    livraison: "Oui",
    rating: 5,
    description:
      "Un pâté de crabe croustillant pour lequel personne ne peut résister",
  },
  {
    id: 16,
    name: "Miel",
    category: "animation",
    price: 2,
    imageSrc: "/assets/meal/miel.jpg",
    imageAlt: "Miel de Winnie l'ourson",
    emporter: "Oui",
    livraison: "Non",
    rating: 2,
    description:
      "Le fameux miel dont Winnie L'ourson raffole",
  },
  {
    id: 17,
    name: "Lot de Glands",
    category: "animation",
    price: 2,
    imageSrc: "/assets/meal/gland.jpg",
    imageAlt: "Glands de l'âge de glace",
    emporter: "Oui",
    livraison: "Non",
    rating: 2,
    description:
      "Un lot de glands pour Scrat, si vous le trouvez bien sûr.",
  },
  {
    id: 18,
    name: "Buffet garni",
    category: "animation",
    price: 20,
    imageSrc: "/assets/meal/buffet.jpg",
    imageAlt: "Buffet garni du voyage de chihiro",
    emporter: "Non",
    livraison: "Non",
    rating: 5,
    description:
      "Un buffet garni qui saura ravir vos papilles et combler la faim des plus grands",
  },
  {
    id: 19,
    name: "Cookies",
    category: "animation",
    price: 3,
    imageSrc: "/assets/meal/cookies.jpg",
    imageAlt: "Cookies de Vector",
    emporter: "Oui",
    livraison: "Non",
    rating: 4,
    description:
      "Des cookies avec de délicieuse pépites de caramel.",
  }
];

export default products;
