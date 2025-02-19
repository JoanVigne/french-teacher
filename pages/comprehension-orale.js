let currentExercice = 0;
let currentLevel = 0;

function afficherNiveaux() {
  const levelsList = document.getElementById("levels-list");
  levelsList.innerHTML = ""; // Clear previous levels

  // Sort levels by the desired order
  const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const sortedAudios = audios.sort((a, b) => {
    return levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level);
  });

  sortedAudios.forEach((level) => {
    const listItem = document.createElement("li");
    listItem.textContent = level.level;
    listItem.classList.add(level.level); // Use the level name as the class name
    listItem.addEventListener("click", () => {
      currentLevel = sortedAudios.indexOf(level);
      currentExercice = 0;
      afficherExercice(currentExercice);
    });
    levelsList.appendChild(listItem);
  });
}

function afficherExercice(index) {
  if (audios.length === 0 || !audios[currentLevel].items.length) {
    console.error("Aucun exercice trouvé.");
    return;
  }
  const exercice = audios[currentLevel].items[index];
  const mediaContainer = document.getElementById("media-container");
  mediaContainer.innerHTML = ""; // Clear previous media

  if (
    exercice.linkAudio.includes("youtube.com") ||
    exercice.linkAudio.includes("youtu.be")
  ) {
    const videoId =
      exercice.linkAudio.split("v=")[1] || exercice.linkAudio.split("/").pop();
    const iframe = document.createElement("iframe");
    iframe.width = "320";
    iframe.height = "225";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    mediaContainer.appendChild(iframe);
  } else {
    const audio = document.createElement("audio");
    audio.id = "audio";
    audio.controls = true;
    const source = document.createElement("source");
    source.id = "audio-source";
    source.src = exercice.linkAudio;
    source.type = "audio/mpeg";
    audio.appendChild(source);
    mediaContainer.appendChild(audio);
    audio.load();
  }
  // Display the indice if it exists
  const indiceContainer = document.getElementById("indice-container");
  if (exercice.indice) {
    const indiceElement = document.createElement("p");
    indiceElement.textContent = exercice.indice;
    indiceContainer.innerHTML = ""; // Clear previous indice
    indiceContainer.appendChild(indiceElement);
  } else {
    indiceContainer.innerHTML = ""; // Clear previous indice if none
  }
  document.getElementById("reponse").value = "";
  document.getElementById("resultat").textContent = "";
  document.getElementById("numero-exercice").textContent = `${index + 1} sur ${
    audios[currentLevel].items.length
  }`;
}

function nettoyerTexte(texte) {
  return texte
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "");
}

let goodAnswer = false;

function verifierReponse() {
  const reponseUtilisateur = nettoyerTexte(
    document.getElementById("reponse").value
  );
  const reponseCorrecte = nettoyerTexte(
    audios[currentLevel].items[currentExercice].answer
  );

  const resultat = document.getElementById("resultat");
  if (reponseUtilisateur === reponseCorrecte) {
    resultat.textContent = "Bonne réponse !";
    resultat.style.color = "green";
    goodAnswer = true;
  } else {
    resultat.textContent = "Mauvaise réponse, essayez encore !";
    resultat.style.color = "red";
    goodAnswer = false;
  }
}

/* function exerciceSuivant() {
  const messageNext = document.getElementById("message-next");
   if (!goodAnswer) {
    messageNext.textContent =
      "Vous devez répondre correctement pour passer à l'exercice suivant";
    messageNext.style.color = "red";
    return;
  } 
  messageNext.textContent = "";

  if (currentExercice < audios[currentLevel].items.length - 1) {
    currentExercice++;
    afficherExercice(currentExercice);
  } else {
    messageNext.textContent = "Vous avez terminé ce niveau !";
    messageNext.style.color = "green";
  }
}

function exercicePrecedent() {
  if (currentExercice > 0) {
    currentExercice--;
    afficherExercice(currentExercice);
  }
} */

document.addEventListener("DOMContentLoaded", afficherNiveaux);
