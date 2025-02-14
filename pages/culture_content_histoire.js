/* HISTOIRE :
L'ère des Gaulois (jusqu'à 52 av. J.-C.) 
Le baptême de Clovis (vers 496) 
La fondation de l'Ordre des Templiers (1119) 
La guerre de Cent Ans (1337-1453)
Le règne de Louis XIV (1643-1715)
La Révolution française (1789)
L'ascension de Napoléon Bonaparte (1799)
Les guerres napoléoniennes (1803-1815) 
La Première Guerre mondiale (1914-1918)
Le traité de Versailles (1919)
La Seconde Guerre mondiale (1939-1945)
La guerre d'Algérie (1954-1962)
Les manifestations de mai 1968
Les monnaies historiques ( louis d'or,ancien franc, franc, euro)

-- colonisation et 
La décolonisation (années 1950-1960) - Processus de décolonisation des territoires d'outre-mer, notamment en Afrique et en Asie.
Les attentats de Charlie Hebdo (2015) 
Les attentats du 13 novembre 2015
Le mouvement des Gilets jaunes (2018-2019) */
const histoire = [
  {
    title: "Couronnement de Clovis Ier (481)",
    link: "https://fr.wikipedia.org/wiki/Clovis_Ier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Saint_Remy_baptise_Clovis_d%C3%A9tail.jpg",
  },
  {
    title: "Bataille de Poitiers (732)",
    link: "https://fr.wikipedia.org/wiki/Bataille_de_Poitiers_(732)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Steuben_-_Bataille_de_Poitiers.png",
  },
  {
    title: "Guillaume d’Orange repousse les Maures à Orange (vers 793)",
    link: "https://fr.wikipedia.org/wiki/Guillaume_d%27Orange_(chanson_de_geste)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tour_Ferrande_-_l%C3%A9gende_de_Guillaume_d%27Orange.JPG",
  },
  {
    title: "Sacre de Charlemagne (800)",
    link: "https://fr.wikipedia.org/wiki/Sacre_de_Charlemagne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Sacre_de_Charlemagne.jpg",
  },
  {
    title: "Bataille de Hastings (1066)",
    link: "https://fr.wikipedia.org/wiki/Bataille_de_Hastings",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bayeux_Tapestry_scene57_Harold_death.jpg",
  },
  {
    title: "Première croisade et prise de Jérusalem (1099)",
    link: "https://fr.wikipedia.org/wiki/Si%C3%A8ge_de_J%C3%A9rusalem_(1099)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg",
  },
  {
    title: "Bataille de Patay (1429)",
    link: "https://fr.wikipedia.org/wiki/Bataille_de_Patay",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Patay.JPG",
  },
  {
    title: "Édit de Villers-Cotterêts (1539)",
    link: "https://fr.wikipedia.org/wiki/Édit_de_Villers-Cotterêts",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ordonnance_de_Villers_Cotterets._Page_1_-_Archives_Nationales_-_AE-II-1785.jpg",
  },
  {
    title: "Prise de la Bastille (1789)",
    link: "https://fr.wikipedia.org/wiki/Prise_de_la_Bastille",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Prise_de_la_Bastille.jpg",
  },
  {
    title: "Déclaration des droits de l'homme et du citoyen de 1789",
    link: "https://fr.wikipedia.org/wiki/D%C3%A9claration_des_droits_de_l%27homme_et_du_citoyen_de_1789",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg",
  },
  {
    title: "Bataille d'Austerlitz (1805)",
    link: "https://fr.wikipedia.org/wiki/Bataille_d%27Austerlitz",
    image:
      "https://c8.alamy.com/comp/2D6CPYP/the-battle-of-austerlitz-on-december-2-1805-2D6CPYP.jpg",
  },
  {
    title: "Abdication de Napoléon Ier (1814)",
    link: "https://fr.wikipedia.org/wiki/Abdication_de_Napoléon_Ier",
    image:
      "https://c8.alamy.com/compfr/ergghp/abdication-de-napoleon-ier-signature-son-abdication-comme-empereur-de-france-l-annee-1814-chef-militaire-et-politique-francaise-ergghp.jpg",
  },
  {
    title: "Proclamation de la Troisième République (1870)",
    link: "https://fr.wikipedia.org/wiki/Proclamation_de_la_Troisième_République",
    image: "https://www.herodote.net/_images/3republique.jpg",
  },
  {
    title: "Bataille de Verdun (1916)",
    link: "https://fr.wikipedia.org/wiki/Bataille_de_Verdun",
    image:
      "http://www.retronews.fr/sites/default/files/styles/959_606/public/file_covers/couv2_2.jpg?itok=7h1dW8nD&c=b734de8bf05146a176eab349b573d210",
  },
  {
    title: "Appel du 18 juin par le général de Gaulle (1940)",
    link: "https://fr.wikipedia.org/wiki/Appel_du_18_Juin",
    image:
      "http://bcd.bzh/becedia/sites/default/files/dossiers-thematiques/dt-l-appel-du-18-juin.jpg",
  },
  {
    title: "Libération de Paris (1944)",
    link: "https://fr.wikipedia.org/wiki/Libération_de_Paris",
    image:
      "https://www.revuedesdeuxmondes.fr/wp-content/uploads/2016/08/liberation-Paris-1024x804.jpg",
  },
  {
    title: "Proclamation de la Cinquième République (1958)",
    link: "https://fr.wikipedia.org/wiki/Proclamation_de_la_Cinquième_République",
    image:
      "https://img.aws.la-croix.com/2018/10/04/1200973597/Charles-Gaulle-sommet-tribune-place-Republique-Parisde-discours-loccasion-presentation-Constitution_2_1399_900.jpg",
  },
];
