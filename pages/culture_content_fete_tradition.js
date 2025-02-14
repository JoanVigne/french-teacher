const fetes = {
  nationales: [
    {
      nom: "Jour de l'An",
      date: "1er janvier",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1CrXT09GKJiiz7N9KELSfpfndj8wqAUqSQ&s",
      description: "Célébration du Nouvel An.",
      traditions: ["Repas festifs", "Échanges de vœux", "Feux d'artifice"],
    },
    {
      nom: "Galette des Rois",
      date: "6 janvier",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsRItz1PEbXNQ6UiJKz9aQUSbveSpZm0mIg&s",
      description: "Célébration de l'Épiphanie.",
      traditions: ["Partage d'une galette", "Trouver la fève"],
    },
    {
      nom: "Chandeleur",
      date: "2 février",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50J5_ndd_hQGaGJ79XUKYt1ZginVNmSEdkQ&s",
      description:
        "Fête chrétienne célébrant la présentation de Jésus au Temple.",
      traditions: [
        "Faire sauter des crêpes",
        "Tenir une pièce de monnaie pour porter chance",
      ],
    },
    {
      nom: "Lundi de Pâques",
      date: "date variable (mars ou avril)",
      image:
        "https://img-4.linternaute.com/HceHoCzXBDZoln5vf0VzKeEBZgc=/1500x/smart/87778088859a40be815f998394c0570c/ccmcms-linternaute/57062137.jpg",
      description: "Fête chrétienne célébrant la résurrection de Jésus.",
      traditions: ["Chasses aux œufs en chocolat", "Repas en famille"],
    },
    {
      nom: "Fête du Travail",
      date: "1er mai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Nd4S_ZkuCudl3T2dhpnFQ_TjOfNCAicfag&s",
      description: "Célébration des droits des travailleurs.",
      traditions: ["Distribution de muguet", "Manifestation des syndicats"],
    },
    {
      nom: "Victoire 1945",
      date: "8 mai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS984Saz6UnAsS_L6mZfJtGbnuDM1eEI9KMtg&s",
      description:
        "Commémoration de la fin de la Seconde Guerre mondiale en Europe.",
      traditions: ["Cérémonies officielles", "Dépôts de gerbes"],
    },
    {
      nom: "Fête Nationale",
      date: "14 juillet",
      image:
        " https://media.ouest-france.fr/v1/pictures/fc95696697a87679ba400dec21561625-15275699.jpg?width=1260&client_id=eds&sign=0e076d7a7742b2c74096efa8788b266a3bdd7fb56220095d92ed69be13919cd0",
      description: "Commémoration de la prise de la Bastille en 1789.",
      traditions: ["Défilés militaires", "Feux d'artifice", "Concerts"],
    },
    {
      nom: "Toussaint",
      date: "1er novembre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwEz1Y9FQoxDtCruzFl0aje869yCL2JGuKw&s",
      description: "Commémoration de tous les saints et des défunts.",
      traditions: ["Visites aux cimetières", "Fleurir les tombes"],
    },
    {
      nom: "Armistice 1918",
      date: "11 novembre",
      image:
        "https://www.francebleu.fr/s3/cruiser-production-eu3/2024/11/2a8d19a7-20a7-4392-ab84-30d1d449b08c/1200x680_sc_000-36m77dp.jpg",
      description: "Commémoration de la fin de la Première Guerre mondiale.",
      traditions: ["Cérémonies officielles", "Dépôts de gerbes"],
    },
    {
      nom: "Noël",
      date: "25 décembre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2e6BhXe2X5nBOocf1DDwds8TG-Fb0m-0p2Q&s",
      description: "Célébration de la naissance de Jésus.",
      traditions: [
        "Repas en famille",
        "Échanges de cadeaux",
        "Marchés de Noël",
      ],
    },
  ],
  regionales: [
    {
      nom: "Fête de la Saint-Nicolas",
      date: "6 décembre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRPw9mzwSodAsO35koBdwPUCqMdTK-GVf3g&s",
      description:
        "La célébration de la Saint Nicolas honore le saint patron des enfants et des marins.",
      regions: ["Lorraine", "Alsace", "Belgique"],
      traditions: [
        "Défilés avec des chars décorés",
        "Distribution de friandises et de pains d'épices",
        "Marchés de Noël",
        "Chants et musiques traditionnels",
        "Visites de Saint Nicolas dans les écoles et les maisons",
      ],
      activités: [
        "Animations pour les enfants",
        "Spectacles de rue",
        "Ateliers de bricolage",
        "Concours de décorations de Noël",
      ],
    },
    {
      nom: "Fête des Vendanges",
      date: "Automne (généralement en septembre ou octobre)",
      image:
        "https://lacadieredazur.fr/wp-content/uploads/2022/07/13214160-diaporama.jpg",
      description:
        "Célébration de la récolte des raisins dans les régions viticoles de France.",
      regions: ["Bordeaux", "Bourgogne", "Alsace", "Champagne", "Languedoc"],
      traditions: [
        "Dégustations de vin",
        "Visites de caves",
        "Marchés de produits locaux",
        "Animations musicales et culturelles",
        "Défilés de chars décorés",
        "Ateliers de vendanges",
      ],
      activités: [
        "Promenades dans les vignes",
        "Démonstrations de pressage de raisin",
        "Repas festifs avec des plats régionaux",
        "Concours de vin",
      ],
    },
    {
      nom: "Férias",
      description:
        "Célébrations festives dans le sud-ouest de la France, à Bayonne, Nîmes et Dax pour les plus connues, souvent liées aux corridas.",
      date: "Été",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWG2zsGF8Q7q91_Dn7PXcffo4yhIGs8T3YDg&s",
      traditions: [
        "Corridas",
        "Défilés et parades",
        "Concerts de musique live",
        "Bals et soirées dansantes",
        "Stands de nourriture et boissons",
        "Jeux et activités traditionnels",
        "Ambiance festive dans les rues",
      ],
    },
  ],
};
