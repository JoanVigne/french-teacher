const celebrity = [
  {
    nom: "Les daft punk",
    description: "Groupe de musique electronique.",
    category: ["music", "international"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1VVHbEkijgdDeq72K76t0XCp9WruSiMVTw&s",
  },
  {
    nom: "Marie Curie",
    description: "Physicienne et chimiste, lauréate de deux prix Nobel.",
    category: ["science"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl0NWCRv66XaMZS31u96J0KVvPq7D_8Z6CQ&s",
  },
  {
    nom: "Coco Chanel",
    description: "Créatrice de mode, fondatrice de la maison Chanel.",
    category: ["mode"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfGi6rxKyOj_Pdk7G-0OQ31ZtVRHqqp1-tA&s",
  },
  {
    nom: "Brigitte Bardot",
    description: "Actrice et icône de la mode",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKPEQUCfd8Cn9ITgmOC7lwtAXUXaFSAtnBg&s",
  },
  {
    nom: "Edith Piaf",
    description: "Chanteuse, connue pour ses chansons emblématiques.",
    category: ["music"],
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-104402054jpg--.jpg?resize=1200:*",
  },
  {
    nom: "Louis Pasteur",
    description: "Scientifique, pionnier de la microbiologie.",
    category: ["science"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mgFysRiO9V4AGM1LL5yuVHUTXKRg27y7-w&s",
  },
  {
    nom: "David Guetta",
    description: "DJ et producteur de musique, connu mondialement.",
    category: ["music"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhERdy6F80myJmkhAkVUQYjNM2BbnFMtA3g&s",
  },
  {
    nom: "Alain Delon",
    description: "Acteur emblématique du cinéma français.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_ZkM-il5ulVDE7tVf3lizwUwmawJGHrtGw&s",
  },
  {
    nom: "Marion Cotillard",
    description: `Actrice, lauréate d'un Oscar pour son rôle dans "La Vie en Rose".`,
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL7aPuCl4JWsCnl1T0iOo_P0U9BeY05ryow&s",
  },
  {
    nom: "Pierre-Auguste Renoir",
    description: "Peintre impressionniste célèbre",
    category: ["art"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz-Dhtsg3RF45PpiOJUeOrbp944afSc_ltQ&s",
  },
  {
    nom: "Jean-Luc Godard",
    description: "Réalisateur, figure majeure de la Nouvelle Vague.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOIpqzrmJiAB0VN2osAD80X-ErjU_B4vCNg&s",
  },

  {
    nom: "Yves Saint Laurent",
    description: "Designer de mode, pionnier de la haute couture.",
    category: ["mode"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3Dqq6oSMkxdBtSJrMI4oXlummErKCCjs4w&s",
  },
  {
    nom: "Gérard Depardieu",
    description:
      "Acteur, connu pour ses rôles dans le cinéma français et international.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYuQw52FaTRQ7B2NzqrAzqAjL6e30Zuwj8g&s",
  },
  {
    nom: "Omar Sy",
    description: `Acteur, connu pour son rôle dans "Intouchables" et sa carrière à Hollywood.`,
    category: ["cinema", "humour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7QSX5aqClebZ8Yr1LskiuQbs543j_pV59w&s",
  },
  {
    nom: "Claude Monet",
    description:
      "Peintre impressionniste, célèbre pour ses paysages et ses nymphéas.",
    category: ["art"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C1wH5AS5Y2n2Fq8Tzpb2Wg56GnjRjdG12g&s",
  },
  {
    nom: "Jean-Paul Gaultier",
    description:
      "Designer de mode, connu pour ses créations audacieuses et son style unique.",
    category: ["mode"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuvkd1fl4TwxRuKUJGh44_C0ZH_GDPq-HVA&s",
  },
  {
    nom: "Romain Duris",
    description:
      "Acteur, connu pour ses rôles dans des films français et internationaux.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVDMEvjqmqq186LUiQaJAMwr3NMZdHXoGeg&s",
  },
  {
    nom: "Isabelle Huppert",
    description:
      "Actrice, reconnue pour ses performances dans le cinéma d'auteur.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OaX-GvTQa1li1_7YmC0HAUJL2D1JGOcJQ&s",
  },
  {
    nom: "Benoît Magimel",
    description: "Acteur, connu pour ses rôles dans des films primés.",
    category: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7L0fjCZKRZ1jtwhITh2CWEFfC-7ZGOG5sCg&s",
  },
  {
    nom: "Cédric Klapisch",
    description: "Réalisateur, connu pour ses films sur la vie parisienne.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgVvoKCBTZPTXMsQg5Ajp8QrGNy6fVox-Rw&s",
  },
  {
    nom: "Thomas Pesquet",
    description:
      "Astronaute, connu pour ses missions à bord de la Station spatiale internationale.",
    category: ["science"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB299va4NS2VPv9z_Q0Z5_4_dr4uRVRfIU4Q&s",
  },
  {
    nom: "Zinedine Zidane",
    description:
      "Légende du football, vainqueur de la Coupe du Monde 1998 et entraîneur à succès.",
    category: ["sport"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGxfQJaQFArGGw4O4pBNgq1D9jW-rSZyRTQ&s",
  },
  {
    nom: "Thierry Henry",
    description:
      "Ancien attaquant, vainqueur de la Coupe du Monde 1998, considéré comme l'un des meilleurs de sa génération.",
    category: ["sport"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFII6xGcxN_XSyBNGB0LTyHYoR9IRDM09OQ&s",
  },
  {
    nom: "Michel Platini",
    description:
      "Ancien milieu de terrain, triple Ballon d'Or et figure emblématique du football français.",
    category: ["sports"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppatuOr3EZo2zm_HbIqndtJu-ExvHOX00gQ&s",
  },
  {
    nom: "Kylian Mbappé",
    description: "Jeune star du football, vainqueur de la Coupe du Monde 2018.",
    category: ["sports"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReClrdJzXOhOVaLjf4Q0-tF_lYLUkeelRENQ&s",
  },
  {
    nom: "Didier Deschamps",
    description:
      "Ancien joueur et actuel entraîneur de l'équipe nationale, vainqueur de la Coupe du Monde 1998 en tant que joueur et 2018 en tant qu'entraîneur.",
    category: ["sports"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhakY5TKjyhZYvk-v1HTQFeVaxt_I39YoCA&s",
  },
  {
    nom: "Gustave Eiffel",
    description: "Ingénieur, connu pour la Tour Eiffel.",
    category: ["engineering", "architecture"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_xtSob43_88lRrodzpy_1F_jWXaIArZS6Q&s",
  },
  {
    nom: "Simone de Beauvoir",
    description: "Philosophe et féministe, auteur de 'Le Deuxième Sexe'.",
    category: ["philosophie", "feminisme"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO8y50zWuxDWSkhf1GjfQyt48QuxYOGZLDA&s",
  },
  {
    nom: "Cyril Lignac",
    description: "Chef cuisinier et personnalité de la télévision.",
    category: ["cooking", "television"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwGvyOm0u5r-KRyNP-Nfaj0WMxijgBNEarg&s",
  },
  {
    nom: "Dany Boon",
    description: "Acteur et réalisateur, connu pour ses comédies.",
    category: ["cinema", "humour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0bJoAHuEMPhESu8Gv32_t60EMi88WCL6yw&s",
  },
  {
    nom: "Jean Dujardin",
    description: "Acteur, connu mondialement pour son rôle dans 'The Artist'.",
    category: ["cinema", "humour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVdH2z1e7-tPFtSTPXBHf-av9V3A_R99T7Q&s",
  },
  {
    nom: "Louane Emera",
    description: "Chanteuse et actrice, révélée par 'The Voice'.",
    category: ["music", "television"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0do0yAteu-OjkY8TGvX-bUTnNHlj_BmQ1ug&s",
  },
  {
    nom: "Jean-Pierre Pernaut",
    description:
      "Journaliste et présentateur de télévision, connu pour le JT de TF1.",
    category: ["journalisme", "television"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9iLaRhg-wMpXQ978Xy3kFkj1hhTJK098VA&s",
  },
  {
    nom: "Mireille Mathieu",
    description: "Chanteuse, célèbre en France et dans les pays francophones.",
    category: ["music", "international"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rgyon4J6jRjEPI1wkvjCaLnKDgtTanGeBg&s",
  },
  {
    nom: "Florent Pagny",
    description: "Chanteur, connu pour sa carrière musicale en France.",
    category: ["music"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpAM7eQExmlOgQn6tIFSFLpmWA-B_zgK7Mg&s",
  },
  {
    nom: "Catherine Deneuve",
    description: "Actrice, icône du cinéma français.",
    category: ["cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8OCv_jxaF-KvmbjubjNysoRjMdpIZgRkgQ&s",
  },
  {
    nom: "Michel Sardou",
    description: "Chanteur, connu pour ses chansons à succès en France.",
    category: ["music"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq03mpRjAwJrUVkGV9vD_TpAHNo2mI0ejoyw&s",
  },
  {
    nom: "Philippe Etchebest",
    description:
      "Chef cuisinier et personnalité de la télévision, connu pour ses émissions culinaires.",
    category: ["cooking", "television"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThbazMDQZHd5QIlVm22BS0si1UcKK21nkmg&s",
  },
  {
    nom: "Jean-Claude Van Damme",
    description: "Acteur et artiste martial, connu pour ses films d'action.",
    category: ["cinema", "international"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBQFG0nT36KmNKZQ_JUmfhbdT3JwfVEJcEQ&s",
  },
  {
    nom: "Carla Bruni",
    description: "Chanteuse et ancienne première dame de France.",
    category: ["music", "politics", "mode"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7TII9zOodldwwHM_ZReycVQ2jXoaAyejnw&s",
  },
  {
    nom: "Jean-Pierre Foucault",
    description:
      "Animateur de télévision, connu pour ses jeux télévisés et l'élection de miss France.",
    category: ["television", "entertainment"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZMSqOGCoii3zHXcTUsLJfdMwzzT_5RiC2Q&s",
  },
  {
    nom: "Patrick Bruel",
    description: "Chanteur et acteur, très populaire en France.",
    category: ["music", "cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDW9dkjYoQ33EwxY5YJ2udLv5kYxmirsn1w&s",
  },
  {
    nom: "Sophie Marceau",
    description:
      "Actrice, connue pour ses rôles dans des films français et internationaux.",
    category: ["cinema", "international"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYC3vtxSSz9SUCixeCzC2udH2JfSx1kQwCSg&s",
  },
  {
    nom: "Jamel Debbouze",
    description:
      "Humoriste, acteur et producteur, connu pour son style unique et ses spectacles.",
    category: ["humour", "cinema"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSfNNpbaR04VIuFczWpHhH8N1xKa8rqJCfw&s",
  },
  {
    nom: "Karl Lagerfeld",
    description:
      "Styliste, photographe et directeur artistique, célèbre pour son travail avec Chanel.",
    category: ["fashion", "design"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0C7mr06ucK9YEZnzJ6RRvDAmti49ENHSGNA&s",
  },
  {
    nom: "Teddy Riner",
    description:
      "Judoka, multiple champion olympique et multiple champion du monde et d'Europe.",
    category: ["sports"],
    image:
      "https://images.rtl.fr/~r/2000v1332/rtl/www/1264333-teddy-riner-le-2-septembre-2017-a-budapest.jpg",
  },
];
