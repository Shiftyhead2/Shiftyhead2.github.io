const divContainer = document.querySelector("#container");
const paragraph = document.querySelector("#paragraph");
const text1 = document.querySelector("#text-1");
const text2 = document.querySelector("#text-2");

const FadeInAnimation = () => {
  divContainer.style.animation = `fadein 0.5s ease forwards`;
  text1.style.animation = `articleFade 1s ease forwards 1s`;
  text2.style.animation = `articleFade 1s ease forwards 2s`;
  paragraph.style.animation = `articleFade 1s ease forwards 3s`;

}

FadeInAnimation();