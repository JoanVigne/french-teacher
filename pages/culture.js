const content = {
  cards: [
    {
      title: "Géographie",
      description:
        "Découvrez la France et les zones francophone du monde entier!",
      content: `<ul>
      <li>
        <a href="https://www.cartesfrance.fr/carte-france-departement/carte-france-departements.html" target="_blank">
      <img id="carte-france" src="../assets/carte-france-departements.png" alt="carte des régions de France" >
        Carte des régions de France     
      </a>
      </li>

      <ul>
      `,
    },
    {
      title: "Traditions et fêtes",
      description: "Découvrez les fêtes et les traditions françaises.",
      content: "Les fêtes et traditions françaises sont riches et variées...",
    },
    {
      title: "Gastronomie",
      description: "Découvrez la gastronomie française.",
      content: "",
    },
    {
      title: "Art et architecture",
      description: "Découvrez l'art français.",
      content:
        "L'art français est célèbre pour ses peintures, sculptures et autres formes d'art...",
    },
  ],
};

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const container = document.querySelector("#content-container");
const main = document.querySelector("main");
const cards = document.querySelectorAll("#cards-container .card");
let activeVideo = null;
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Resize all the images
    main.classList.add("small");
    title.textContent = card.innerText;
    description.textContent = "";
    container.innerHTML = "";
    container.className = "";
    container.classList.add(
      card.innerText
        .replace(/\s+/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
    let newData;
    if (card.innerText.includes("Histoire")) {
      newData = displayData(histoire);
      description.textContent =
        "Cliquez sur les images pour plus d'informations.";
    }
    if (card.innerText.includes("Traditions")) {
      const tradiFragment = document.createDocumentFragment();
      Object.keys(fetes).forEach((genre) => {
        const genreContainer = document.createElement("div");
        genreContainer.className = "genre-section";
        const genreTitle = document.createElement("h3");
        genreTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        genreTitle.classList.add("genre");
        const tradiContainer = document.createElement("div");
        tradiContainer.className = "tradi-container";
        tradiContainer.appendChild(displayData(fetes[genre]));
        genreContainer.appendChild(genreTitle);
        genreContainer.appendChild(tradiContainer);
        tradiFragment.appendChild(genreContainer);
      });

      newData = tradiFragment;
    }
    if (card.innerText.includes("Gastronomie")) {
      newData = displayData(gastronomy);
    }
    if (card.innerText.includes("Célébrité")) {
      newData = displayData(celebrity);
    }
    if (card.innerText.includes("Cinéma")) {
      newData = displayData(cinema);
    }
    if (card.innerText.includes("Littérature")) {
      newData = displayData(litterature);
    }
    if (card.innerText.includes("Musique")) {
      const musicFragment = document.createDocumentFragment();
      Object.keys(music).forEach((genre) => {
        const genreContainer = document.createElement("div");
        genreContainer.className = "genre-section";
        const genreTitle = document.createElement("h3");
        genreTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        genreTitle.classList.add("genre");
        const musicContainer = document.createElement("div");
        musicContainer.className = "music-container";
        musicContainer.appendChild(displayData(music[genre]));
        genreContainer.appendChild(genreTitle);
        genreContainer.appendChild(musicContainer);
        musicFragment.appendChild(genreContainer);
      });

      newData = musicFragment;
    }
    container.appendChild(newData);
  });
});
function displayData(data) {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const containerOfElement = document.createElement("div");
    containerOfElement.classList.add("element");

    // Create and append the name
    const nameElement = document.createElement("h4");
    nameElement.textContent = item.nom || item.artiste || item.title;
    containerOfElement.appendChild(nameElement);

    // Create and append the image if it exists
    if (item.image) {
      const imageElement = document.createElement("img");
      imageElement.src = item.image;
      imageElement.alt = item.nom || item.artiste || item.title;

      if (item.link) {
        const linkElement = document.createElement("a");
        linkElement.href = item.link;
        linkElement.target = "_blank";
        linkElement.appendChild(imageElement);
        containerOfElement.appendChild(linkElement);
      } else {
        containerOfElement.appendChild(imageElement);
      }
    }
    if (item.link && !item.image) {
      const linkElement = document.createElement("a");
      linkElement.href = item.link;
      linkElement.target = "_blank";
      linkElement.textContent = "Plus d'info";
      containerOfElement.appendChild(linkElement);
    }
    // Create and append the video thumbnail if it exists
    if (item.video) {
      const videoId = item.video.split("/").pop().split("?")[0];
      const videoThumbnail = document.createElement("div");
      videoThumbnail.classList.add("video-thumbnail-container");

      const thumbnailImage = document.createElement("img");
      thumbnailImage.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
      thumbnailImage.alt = `${item.artiste} - ${item.titre}`;
      thumbnailImage.classList.add("video-thumbnail");
      thumbnailImage.setAttribute("data-video-id", videoId);

      const playButton = document.createElement("button");
      playButton.classList.add("play-button");
      playButton.innerHTML = "&#9658;"; // Play icon (▶)

      videoThumbnail.appendChild(thumbnailImage);
      videoThumbnail.appendChild(playButton);
      containerOfElement.appendChild(videoThumbnail);
    }

    // Create and append the description if it exists
    if (item.description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = item.description;
      descriptionElement.classList.add("description");
      containerOfElement.appendChild(descriptionElement);
    }

    // Iterate over each property in the item object
    Object.keys(item).forEach((key) => {
      // Check if the property is an array and has elements
      if (Array.isArray(item[key]) && item[key].length > 0) {
        const titleOfthisUl = document.createElement("h5");
        titleOfthisUl.textContent =
          key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");
        containerOfElement.appendChild(titleOfthisUl);
        const listElement = document.createElement("ul");
        listElement.classList.add(key); // Use the property name as the class name

        item[key].forEach((element) => {
          const listItem = document.createElement("li");
          listItem.textContent = element;
          listElement.appendChild(listItem);
        });

        containerOfElement.appendChild(listElement);
      }
    });

    fragment.appendChild(containerOfElement);
  });

  // Add event listener for video thumbnails
  const videoThumbnails = fragment.querySelectorAll(
    ".video-thumbnail-container"
  );
  videoThumbnails.forEach((videoThumbnail) => {
    videoThumbnail.addEventListener("click", () => {
      // Remove active class from the previously active video
      if (activeVideo) {
        activeVideo.classList.remove("active");
      }

      // Add active class to the clicked video
      videoThumbnail.classList.add("active");
      activeVideo = videoThumbnail;

      const videoId = videoThumbnail
        .querySelector(".video-thumbnail")
        .getAttribute("data-video-id");
      const iframe = document.createElement("iframe");
      iframe.width = "320";
      iframe.height = "225";
      iframe.src = `https://www.youtube.com/embed/${videoId}`; // Use embed URL format
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      videoThumbnail.replaceWith(iframe);
    });
  });

  return fragment;
}
