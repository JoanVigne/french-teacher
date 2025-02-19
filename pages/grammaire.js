let levelNavContainer = document.querySelector(".banner");

// NOUVELLE FONCTION
const toutesLesVar = [
  present_indicatif_etre_avoir,
  present_indicatif_parler_manger_jouer,
  present_indicatif_finir_choisir_agir,
  present_indicatif_prendre_entendre_repondre,
  present_indicatif_venir_tenir_lire_ecrire,
  present_indicatif_voir_savoir_pouvoir_devoir,
  imperatif_etre_avoir_faire_aller,
  passe_compose_plusieurs_verbes_1,
  passe_compose_plusieurs_verbes_2,
  imparfait_etre_avoir,
  imparfait_finir_choisir_reussir_grandir_maigrir_rougir,
  imparfait_prendre_voir_faire_savoir_dire_venir,
];
// Créer la navigation
const theTitle = document.getElementById("title");
createNavBar(toutesLesVar);
function createNavBar(content) {
  let navBar = document.createElement("nav");
  navBar.classList.add("level-nav");
  let ul = document.createElement("ul");
  content.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item.title;
    const firstLetters = item.title
      .replace(/\s+/g, "")
      .slice(0, 7)
      .toLowerCase();
    li.className = firstLetters;
    li.addEventListener("click", () => {
      displayContent(index);
    });
    ul.appendChild(li);
  });
  navBar.appendChild(ul);
  levelNavContainer.appendChild(navBar);
}

// Fonction pour afficher les règles et exercices
function displayContent(index) {
  const currentConst = toutesLesVar[index];
  // Afficher le titre
  theTitle.innerText = currentConst.title;

  // Afficher les règles
  const reglesDiv = document.getElementById("regles");
  reglesDiv.innerHTML = ""; // Réinitialiser le contenu
  for (const [verbe, conjugaisons] of Object.entries(currentConst.regle)) {
    const verbeElement = document.createElement("div");
    verbeElement.innerHTML = `<strong>${verbe}:</strong> ${conjugaisons.join(
      ", "
    )}`;
    reglesDiv.appendChild(verbeElement);
  }
  // Afficher les exercices
  const exercicesDiv = document.getElementById("exercices");
  exercicesDiv.innerHTML = ""; // Réinitialiser le contenu
  currentConst.exercices.forEach((exercice, index) => {
    const exerciceElement = createPhrase(exercice, index);
    exercicesDiv.appendChild(exerciceElement);
  });
  window.scrollTo({
    top: theTitle.offsetTop,
    behavior: "smooth",
  });
}

let phrasesContainer = document.querySelector("#phrases-container");
function createPhrase(thisPhrase, index) {
  let line = document.createElement("div");
  line.classList.add("phrase");
  line.classList.add(index);
  let brutinput = `<input 
    type="text" 
    onChange="checkAnswer(event)" 
    placeholder="..." />  
    <input type="hidden" value="${thisPhrase.answer}" />`;
  let [beforeUnderscore, afterUnderscore] = thisPhrase.phrase.split("_");
  let newstr = `
    <img class="logo" src="../assets/check.png" alt="check">
    ${beforeUnderscore}
    ${brutinput}
    <div class="remaining-text">${afterUnderscore}</div>
  `;

  line.innerHTML = newstr;
  return line;
}
function generateExercices(thisChoice) {
  thisChoice.forEach((p, index) => {
    let thisline = createPhrase(p, index);
    phrasesContainer.appendChild(thisline);
  });
}
function checkAnswer(event) {
  let reponseUtilisateur = nettoyerTexte(event.target.value);
  let reponseCorrecte = nettoyerTexte(event.target.nextElementSibling.value);

  if (reponseUtilisateur === reponseCorrecte) {
    event.target.parentElement.classList.remove("bad-answer");
    event.target.parentElement.classList.add("good-answer");
  } else {
    event.target.parentElement.classList.remove("good-answer");
    event.target.parentElement.classList.add("bad-answer");
  }
}
function nettoyerTexte(texte) {
  return texte
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "");
}
