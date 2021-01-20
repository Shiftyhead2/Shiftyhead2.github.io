const contactContainer = document.querySelector(".contact");
const contactTitle = document.querySelector(".contact-title");
const contactText1 = document.querySelector(".contact-text1");
const contactText2 = document.querySelector(".contact-text2");
const email = document.querySelector(".email");
const contactBtn = document.querySelector(".contact-btn");


const ContactPageAnimationFade = () => {
  contactContainer.style.animation = `fadein 0.9s ease forwards`;

  contactTitle.style.animation = `articleFade 0.5s ease forwards 1s`;
  contactText1.style.animation = `articleFade 0.5s ease forwards 1.5s`;
  contactText2.style.animation = `articleFade 0.5s ease forwards 2s`;
  email.style.animation = `articleFade 0.5s ease forwards 2.5s`;
  contactBtn.style.animation = `articleFade 0.5s ease forwards 3s`;

}

ContactPageAnimationFade();