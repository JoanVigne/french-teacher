function createHeader() {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("effect-4");

  const ul = document.createElement("ul");

  const liAccueil = document.createElement("li");
  const aAccueil = document.createElement("a");
  aAccueil.href = "../index.html";
  aAccueil.textContent = "Accueil";
  liAccueil.appendChild(aAccueil);

  const liExercices = document.createElement("li");
  const aExercices = document.createElement("a");
  aExercices.href = "exercices.html";
  aExercices.textContent = "Exercices";
  liExercices.appendChild(aExercices);

  const secondNav = document.createElement("nav");
  secondNav.classList.add("effect-4", "second-nav");

  const secondUl = document.createElement("ul");

  const liComprehension = document.createElement("li");
  const aComprehension = document.createElement("a");
  aComprehension.href = "comprehension-orale.html";
  aComprehension.textContent = "Compréhension orale";
  liComprehension.appendChild(aComprehension);

  const liGrammaire = document.createElement("li");
  const aGrammaire = document.createElement("a");
  aGrammaire.href = "culture.html";
  aGrammaire.textContent = "Culture";
  liGrammaire.appendChild(aGrammaire);

  const liOrthographe = document.createElement("li");
  const aOrthographe = document.createElement("a");
  aOrthographe.href = "grammaire.html";
  aOrthographe.textContent = "Grammaire";
  liOrthographe.appendChild(aOrthographe);

  secondUl.appendChild(liComprehension);
  secondUl.appendChild(liGrammaire);
  secondUl.appendChild(liOrthographe);
  secondNav.appendChild(secondUl);
  liExercices.appendChild(secondNav);

  ul.appendChild(liAccueil);
  ul.appendChild(liExercices);
  nav.appendChild(ul);
  header.appendChild(nav);

  document.body.insertBefore(header, document.body.firstChild);

  // Add event listener to show/hide the dropdown menu
  aExercices.addEventListener("mouseover", () => {
    secondNav.style.opacity = "1";
  });

  aExercices.addEventListener("mouseout", () => {
    secondNav.style.opacity = "0";
  });

  secondNav.addEventListener("mouseover", () => {
    secondNav.style.opacity = "1";
  });

  secondNav.addEventListener("mouseout", () => {
    secondNav.style.opacity = "0";
  });
}

// Call the function to create the header
document.addEventListener("DOMContentLoaded", createHeader);
