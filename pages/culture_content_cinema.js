const cinema = [
  {
    title: "Amélie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKj1Z5ZkG84G67XAvx7Vbn2eqoP1u3ByhSg&s",
    description:
      "Une jeune serveuse timide à Montmartre décide d'apporter du bonheur aux gens qui l'entourent.",
  },
  {
    title: "L'Auberge Espagnole",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLsHRYuYmY7k7NmTxVDGLbvg8e76UR3aYGw&s",
    description:
      "Un étudiant français découvre la vie en colocation multiculturelle à Barcelone.",
  },
  {
    title: "La haine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZed8xSio6DiMWOT6fLsS_zfGUz3PU89SKQA&s",
    description:
      "Chronique percutante d'une journée sous tension dans la banlieue parisienne après une bavure policière.",
  },
  {
    title: "Le Dîner de Cons",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfh-I9Fp-EeDp1OzhRaWKg1y_xeQKRaiAtw&s",
    description:
      "Un éditeur parisien organise un dîner où chacun doit inviter un 'con', mais la soirée prend une tournure inattendue.",
  },
  {
    title: "Intouchables",
    image:
      "https://i0.wp.com/arktimes.com/wp-content/uploads/2019/04/2380219-movie_review1-1.jpg?fit=600%2C424&ssl=1",
    description:
      "L'amitié improbable entre un riche aristocrate handicapé et son aide-soignant issu des banlieues.",
  },
  {
    title: "La Grande Vadrouille",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadwRYQH5kHt1gwQcVKhfYjeDcf5m-jafIiQ&s",
    description:
      "Deux Français ordinaires aident des aviateurs britanniques à échapper aux nazis pendant la Seconde Guerre mondiale.",
  },
  {
    title: "Les Choristes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfD6CzrU-kqmgltFTUwNqlObZewWymLTDow&s",
    description:
      "Un professeur de musique transforme la vie d'enfants difficiles grâce au chant.",
  },
  {
    title: "La Vie en Rose",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NHWOQOhGbMbYXdXEvA5xBZoAqCagFcU87w&s",
    description:
      "Biopic sur la vie tourmentée de la célèbre chanteuse Édith Piaf.",
  },
  {
    title: "Bienvenue chez les Ch'tis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZJq2ehgSfH1r_ZMNj8bt-urhWvPT_HRF4Q&s",
    description:
      "Un postier du sud de la France est muté dans le Nord et découvre une région chaleureuse malgré les clichés.",
  },
  {
    title: "La Famille Bélier",
    image: "https://i.scdn.co/image/ab67616d00001e020c7da73ac4e823e2e36c79b2",
    description:
      "Une adolescente entendante dans une famille sourde doit choisir entre son talent musical et son rôle auprès des siens.",
  },
  {
    title: "Les Petits Mouchoirs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCgE-EGakpMU9P-dC0vuYASsg8fKDIJZOSQ&s",
    description:
      "Un groupe d'amis part en vacances malgré l'hospitalisation de l'un des leurs, révélant tensions et secrets.",
  },
  {
    title: "Le Grand Bleu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tZtkbAKtwwe069edZPHpRvBHKs2zrNTojA&s",
    description:
      "Un plongeur en apnée vit une relation intense avec la mer et son plus grand rival.",
  },
  {
    title: "Les Visiteurs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhTNgv8u8WLt852BuApG5nM53NXF-dqZNCg&s",
    description:
      "Un chevalier du Moyen Âge et son écuyer se retrouvent projetés dans le XXe siècle par erreur.",
  },
  {
    title: "OSS 117",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXQBUy1F1cj1QQjStmtks8Evgix5xmoStng&s",
    description:
      "Une parodie hilarante des films d'espionnage avec un agent français aussi prétentieux que maladroit.",
  },
  {
    title: "Qu'est-ce qu'on a fait au Bon Dieu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67MVjuR6Unz8d3BfqPKFuVpSJCC7NcAA1Gw&s",
    description:
      "Un couple bourgeois catholique voit ses préjugés mis à rude épreuve quand leurs filles épousent des hommes de cultures différentes.",
  },
  {
    title: "Les Bronzés",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT22NzZJW2n7LRFFit6KdziatHeUhO-JzAlg&s",
    description:
      "Les aventures hilarantes d’un groupe de vacanciers dans un club de vacances.",
  },
  {
    title: "Les Bronzés font du ski",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBW6tO2EJaMd-40l6nxfmqDwh-O7WOFG6WKQ&s",
    description:
      "Les mêmes vacanciers partent au ski, avec des situations encore plus absurdes.",
  },
  {
    title: "Babysitting (2014)",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e2457807cac16d5cf8342f631b6a6b1b7fc02d794d7e55e3733bb70abdedbb86.jpg",
    description:
      "Une soirée de baby-sitting dégénère en chaos total, filmée façon caméra embarquée.",
  },
  {
    title: "Rabbi Jacob",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdzGQ3glRZ9zI8t9nXlrkpxcQKiTctzyfXg&s",
    description:
      "Un industriel raciste se retrouve contraint de se déguiser en rabbin pour échapper à des poursuivants.",
  },
  {
    title: "La Cage aux Folles",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDulYoR_sEzm3j8u9lAp3Rh4Ten8M7CUfikw&s",
    description:
      "Un couple homosexuel doit jouer les hétéros pour impressionner des futurs beaux-parents conservateurs.",
  },
  {
    title: "Un prophète",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz9LeNyC9cLisTXnm9Rct3X3PK3vAZlpueg&s",
    description:
      "Un jeune délinquant d'origine maghrébine évolue dans un univers carcéral violent.",
  },
  {
    title: "Nikita",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnANDM7GaegCF0o8qQllbmhUp-oFPORJV1w&s",
    description:
      "Une criminelle est formée pour devenir une tueuse d’élite au service du gouvernement.",
  },
  {
    title: "Les Rivières pourpres",
    image:
      "https://i0.wp.com/maze.fr/wp-content/uploads/2020/04/les_rivieres_pourpres.jpg?resize=800%2C400&ssl=1",
    description:
      "Un thriller sombre où deux policiers enquêtent sur une série de meurtres mystérieux dans une université isolée.",
  },
  {
    title: "Ne le dis à personne",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteNDKOlqjWrz4Fme7eIDE0ykjf5dSatkuDg&s",
    description:
      "Un médecin reçoit des indices troublants suggérant que sa femme, supposée morte depuis huit ans, est toujours en vie.",
  },
  {
    title: "La Sortie de l'Usine Lumière à Lyon",
    video: "https://youtu.be/DfY0mRn-NT0?si=vn3IEwjkzJPMgBFS",
    description:
      "Un des tout premiers films de l'histoire du cinéma, montrant des ouvriers quittant l'usine Lumière en 1895.",
  },
  {
    title: "Le Voyage dans la Lune",
    video: "https://youtu.be/apWTcPQVB6o?si=J8e7E4rjQsXGr3NH",
    description:
      "Un chef-d'œuvre du cinéma muet de Georges Méliès, racontant l'expédition surréaliste d'un groupe d'astronomes sur la Lune.",
  },
  {
    title: "Nos jours heureux",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ947NpOPBtfGhP-Ni7tjslU-bshTlJHNXFA&s",
    description:
      "Une comédie chaleureuse sur les joies et galères d’une colonie de vacances gérée par des animateurs dépassés.",
  },
  {
    title: "La vie est un long fleuve tranquille",
    image:
      "https://www.programme-tv.net/imgre/fit/~1~tel~2021~08~27~dcbc4c9a-cdc4-4321-a999-e46f69875851.jpeg/1200x600/crop-from/top/quality/80/focus-point/645,371/la-vie-est-un-long-fleuve-tranquille-tfx-raviolis-immaculee-conception-et-bigoterie-les-dessous-d-une-comedie-culte.jpg",
    description:
      "Deux familles que tout oppose découvrent qu'un échange de bébés a eu lieu à leur naissance, bouleversant leur quotidien.",
  },
];
