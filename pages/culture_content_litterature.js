const litterature = [
  {
    title: "Le Petit Prince – Antoine de Saint-Exupéry (1943)",
    description:
      "Ce conte philosophique simple et poétique aborde des thèmes profonds comme l'amitié, l'amour et la quête du sens de la vie à travers les aventures d'un petit prince voyageur.",
  },
  {
    title: "Le Livre de ma mère – Albert Cohen (1954)",
    description:
      "Un récit émouvant et introspectif sur l'amour filiale, où l’auteur exprime son affection pour sa mère, abordant des thèmes de l’amour et de la perte d’une manière accessible.",
  },
  {
    title: "Les Fourmis – Bernard Werber (1991)",
    description:
      "Un roman fascinant et accessible qui mêle science et fiction, en suivant la vie d'une colonie de fourmis et l'humanité à travers leur perspective. Facile à lire et captivant.",
  },
  {
    title: "La Peste – Albert Camus (1947)",
    description:
      "Bien que Camus soit souvent perçu comme un auteur complexe, *La Peste* est relativement facile à lire. Ce roman sur la lutte contre une épidémie est une réflexion sur l'absurde et l'humanité.",
  },
  {
    title: "Le Horla – Guy de Maupassant (1887)",
    description:
      "Un roman court et accessible sur la folie et la peur de l'invisible, écrit avec un style direct et effrayant. C’est un excellent exemple de l’art de Maupassant dans les nouvelles fantastiques.",
  },
  {
    title: "Les Chouans – Honoré de Balzac (1829)",
    description:
      "Un roman historique qui dépeint les luttes des chouans (royalistes) pendant la Révolution française, mais écrit dans un style plus simple et narratif, facile à comprendre pour les débutants.",
  },
  {
    title: "La Gloire de mon Père – Marcel Pagnol (1957)",
    description:
      "Un récit autobiographique léger et amusant sur l'enfance de l’auteur dans le sud de la France. Pagnol écrit avec simplicité et une grande tendresse pour sa famille et sa région.",
  },
  {
    title: "Le Château de ma Mère – Marcel Pagnol (1958)",
    description:
      "La suite de *La Gloire de mon Père*, toujours aussi accessible et émouvant, qui raconte l’enfance de Pagnol, ses vacances et les liens familiaux avec une grande simplicité.",
  },
  {
    title: "Le Grand Meaulnes – Alain-Fournier (1913)",
    description:
      "Un roman nostalgique et poétique sur l'amitié et l’amour, raconté à travers les yeux d’un jeune homme. L’histoire est accessible mais pleine de charme et de mystère.",
  },
  {
    title: "Les Misérables – Victor Hugo (1862)",
    description:
      "Bien que volumineux, *Les Misérables* reste relativement accessible dans ses grandes lignes, racontant les luttes sociales à travers le personnage de Jean Valjean et ses compagnons de route.",
  },
  {
    title: "Le Dernier Jour d'un Condamné – Victor Hugo (1829)",
    description:
      "Un roman court mais percutant sur les pensées d'un homme condamné à mort, une réflexion sur la justice et la mort. Son style est assez simple pour le lecteur débutant.",
  },
  {
    title: "Le Médecin malgré lui – Molière (1666)",
    description:
      "Une comédie de Molière qui est non seulement drôle mais également facile à lire. L’histoire d’un homme forcé à se faire passer pour médecin. Un classique du théâtre accessible à tous.",
  },
  {
    title: "Le Misanthrope – Molière (1666)",
    description:
      "Une autre comédie de Molière qui, bien qu’un peu plus complexe que *Le Médecin malgré lui*, reste facile à comprendre. Elle explore l’hypocrisie de la société à travers le personnage d’Alceste.",
  },
  {
    title: "Le Neveu de Rameau – Denis Diderot (1762)",
    description:
      "Un dialogue philosophique et satirique entre deux personnages, qui critique la société et explore les paradoxes de la nature humaine. Très accessible et intelligent.",
  },
  {
    title: "Le Cid – Pierre Corneille (1637)",
    description:
      "Une tragédie classique avec des thèmes d’honneur et de devoir. Bien que l’écriture soit un peu ancienne, elle reste accessible, avec une histoire pleine de passion et de dilemmes moraux.",
  },
  {
    title: "Les Liaisons Dangereuses – Pierre Choderlos de Laclos (1782)",
    description:
      "Un roman épistolaire brillant qui explore les manipulations amoureuses entre deux aristocrates. Bien que plus dense, le style épistolaire et les intrigues en font une lecture intéressante et compréhensible.",
  },
  {
    title: "Germinal – Émile Zola (1885)",
    description:
      "Un roman naturaliste puissant qui raconte la grève d'une mine de charbon dans le Nord de la France au XIXe siècle, mettant en lumière les luttes sociales des ouvriers.",
  },
  {
    title: "Le Rouge et le Noir – Stendhal (1830)",
    description:
      "Un roman psychologique qui raconte l’ascension sociale de Julien Sorel, un jeune homme ambitieux, dans la société post-napoléonienne. Une critique acerbe de la société de l'époque.",
  },
  {
    title: "Le Père Goriot – Honoré de Balzac (1834)",
    description:
      "Un roman de la Comédie Humaine qui décrit la vie d’un vieux père sacrifié pour l’ambition et la vanité de ses filles, tout en explorant les rouages de la société parisienne du XIXe siècle.",
  },
  {
    title: "Madame Bovary – Gustave Flaubert (1857)",
    description:
      "Ce roman suit Emma Bovary, une femme insatisfaite de sa vie provinciale, et explore des thèmes comme l'ennui, l’illusion et la quête de l’évasion.",
  },
  {
    title: "Le Comte de Monte-Cristo – Alexandre Dumas (1844)",
    description:
      "Un roman d’aventure et de vengeance qui suit Edmond Dantès, un homme trahi et emprisonné, qui revient pour se venger de ses ennemis. Un récit palpitant de justice et de rétribution.",
  },
  {
    title: "Les Fleurs du mal – Charles Baudelaire (1857)",
    description:
      "Une œuvre poétique, où Baudelaire explore les thèmes du spleen, de l’amour, de la beauté et de la décadence, tout en proposant une nouvelle vision de la poésie moderne.",
  },
  {
    title: "Le Loup des steppes – Hermann Hesse (1927)",
    description:
      "Un roman philosophique qui explore les dilemmes intérieurs de Harry Haller, un homme déchiré entre les pulsions humaines et spirituelles. Un livre introspectif et existentialiste.",
  },
  {
    title: "La Chartreuse de Parme – Stendhal (1839)",
    description:
      "Un roman d'aventure et d'amour qui suit le jeune Fabrice del Dongo, pris dans la tourmente des événements historiques de l'Italie du XIXe siècle. Un roman mêlant politique, amour et réflexion sur la liberté.",
  },
  {
    title: "Les Rougon-Macquart – Émile Zola (1871-1893)",
    description:
      "Un cycle de 20 romans décrivant la vie de plusieurs générations d’une même famille, au travers des classes sociales et des effets du milieu sur l’individu. Un chef-d’œuvre du naturalisme.",
  },
  {
    title: "La Recherche du Temps Perdu – Marcel Proust (1913-1927)",
    description:
      "Un monument littéraire qui explore les souvenirs, le temps et la mémoire. À travers les réflexions du narrateur, Proust nous plonge dans un monde complexe et introspectif.",
  },
  {
    title: "Le Père et l'Enfant – Maurice Genevoix (1934)",
    description:
      "Un roman d’apprentissage qui raconte la relation entre un père et son fils dans la nature. Ce livre traite de la transmission des valeurs et de la quête d’identité.",
  },
  {
    title: "Les Misérables – Victor Hugo (1862)",
    description:
      "Un grand roman qui aborde des thèmes tels que la rédemption, la justice sociale, l’amour et l’injustice à travers l’histoire de Jean Valjean. C’est une fresque historique marquante.",
  },
  {
    title: "La Nausée – Jean-Paul Sartre (1938)",
    description:
      "Un roman philosophique qui suit Antoine Roquentin, un homme qui, à force de réflexion, se trouve confronté à l’absurdité de l’existence humaine. Une œuvre marquante du mouvement existentialiste.",
  },
  {
    title: "Le Deuxième Sexe – Simone de Beauvoir (1949)",
    description:
      "Un essai féministe essentiel qui explore la condition des femmes dans la société et analyse les structures sociales qui maintiennent l'inégalité. Une œuvre majeure de la philosophie féministe moderne.",
  },
  {
    title: "Antigone – Jean Anouilh (1944)",
    description:
      "Un drame contemporain qui réinterprète le mythe grec d'Antigone. Il aborde des questions de liberté, de responsabilité et de conflit entre la loi et la morale.",
  },
  {
    title: "Thérèse Desqueyroux – François Mauriac (1927)",
    description:
      "Un roman psychologique où Thérèse, une femme enfermée dans un mariage étouffant, lutte contre son destin et ses sentiments. Une analyse profonde des motivations humaines.",
  },
];
