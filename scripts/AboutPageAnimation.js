const bioContainer = document.querySelector(".bio");
const bioParagraph = document.querySelector(".bio-p");
const skills = document.querySelectorAll(".skills-container li");
const bioTitle = document.querySelector(".bio-title");
const skillsTitle = document.querySelector(".skills-title");


const AboutPageAnimation = () => {
  bioContainer.style.animation = `fadein 0.5s ease forwards 0.01s`;
  bioParagraph.style.animation = `articleFade 0.5s ease forwards 0.02s`;
  bioTitle.style.animation = `articleFade 0.5s ease forwards 0.01s`;
  skillsTitle.style.animation = `navLinksFade 0.5s ease forwards 0.01s`;

  skills.forEach((skill,index) => {
      skill.style.animation = `navLinksFade 0.5s ease forwards ${index / 1.95}s`;
  })
}


AboutPageAnimation();
