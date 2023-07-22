const bgImg = [
  "img/background (1).jpg",
  "img/background (2).jpg",
  "img/background (3).jpg",
  "img/background (4).jpg",
  "img/background (5).jpg",
];
const img = document.querySelector("img");
const imgSrc = bgImg[Math.floor(Math.random() * bgImg.length)];
img.src = imgSrc;
