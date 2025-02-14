let levelNavContainer = document.querySelector(".banner");

let contentInGrammaireContent = {
  etre_et_avoir_au_present,
  faire_et_aller_au_present,
};
createNavBar(contentInGrammaireContent);
function createNavBar(content) {
  let navBar = document.createElement("nav");
  navBar.classList.add("level-nav");

  let ul = document.createElement("ul");

  Object.keys(content).forEach((key) => {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.textContent = key.replace(/_/g, " ");
    li.addEventListener("click", () => {
      phrasesContainer.innerHTML = "";
      generateExercices(content[key]);
      displayVerbs(key);
    });
    ul.appendChild(li);
  });

  navBar.appendChild(ul);
  levelNavContainer.appendChild(navBar);
}

let phrasesContainer = document.querySelector("#phrases-container");
let verbContainer = document.querySelector("#verb-container");
function createPhrase(thisPhrase, index) {
  let line = document.createElement("div");
  line.classList.add("phrase");
  line.classList.add(index);
  brutinput = `<input 
    type="text" 
    onChange="checkAsnwer(event)" 
    placeholder="..." />  
    <input type="hidden" value=${thisPhrase.answer} />`;
  let string = thisPhrase.phrase;
  let newstr =
    `<img class="logo" src="../assets/check.png" alt="check" >` +
    string.replace("_", brutinput);
  line.innerHTML = newstr;
  return line;
}

function generateExercices(thisChoice) {
  thisChoice.forEach((p, index) => {
    let thisline = createPhrase(p, index);

    phrasesContainer.appendChild(thisline);
  });
}

function checkAsnwer(event) {
  let answer = event.target.nextElementSibling.value;
  if (event.target.value == answer) {
    event.target.parentElement.classList.remove("bad-answer");
    event.target.parentElement.classList.add("good-answer");
  } else {
    event.target.parentElement.classList.remove("good-answer");
    event.target.parentElement.classList.add("bad-answer");
  }
}
function displayVerbs(key) {
  console.log(key);
  verbContainer.innerHTML = ""; // Clear previous verbs
  let verbs;
  if (key === "etre_et_avoir") {
    verbs = present_etre_et_avoir;
  } else if (key === "faire_et_aller") {
    verbs = present_faire_et_aller;
  }
  verbs.forEach((verbGroup) => {
    let verbList = document.createElement("ul");
    verbGroup.forEach((verb) => {
      let verbItem = document.createElement("li");
      verbItem.textContent = verb;
      verbList.appendChild(verbItem);
    });
    verbContainer.appendChild(verbList);
  });
}
