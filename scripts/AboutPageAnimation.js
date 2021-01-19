const bioContainer = document.querySelector(".bio");
const bioParagraph = document.querySelector(".bio-p");
const skills = document.querySelectorAll(".skills-container li");


const AboutPageAnimation = () => {
  bioContainer.style.animation = `fadein 0.5s ease forwards 0.01s`;
  bioParagraph.style.animation = `articleFade 0.5s ease forwards 0.02s`;

  skills.forEach((skill,index) => {
      skill.style.animation = `articleFade 0.5s ease forwards ${index / 1.95}s`;
  })
}


AboutPageAnimation();
