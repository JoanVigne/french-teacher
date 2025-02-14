const texts = [
  "Entrainez votre compréhension orale en écoutant des audios et en visionnant des vidéos en français.",
  "Découvrez ou redécouvrez des élements culturels de la France et de la francophonie.",
  "Apprenez ou révisez de la grammaire et de la conjugaison.",
];

const images = document.querySelectorAll(".card img");
const para = document.querySelector(".banner p");

images.forEach((image, index) => {
  image.addEventListener("mouseover", () => {
    para.style.opacity = "0";
    setTimeout(() => {
      para.textContent = texts[index];
      para.style.opacity = "1";
    }, 300);
  });
});
