const articleContainer = document.querySelector(".games-intro");
const gamesTitle = document.querySelector(".games-title");
const gamesText1 = document.querySelector(".games-text1");
const projectArticles = document.querySelectorAll('.article');

const projectArticlesFadeIn = () => {

  articleContainer.style.animation = `fadein 0.5s ease forwards`;
  gamesTitle.style.animation = `articleFade 1s ease forwards 0.05s`;
  gamesText1.style.animation = `navLinksFade 1s ease forwards 0.07s`;

  projectArticles.forEach((article,index) => { 
    article.style.animation = `articleFade 1s ease forwards ${index / 2.5}s`
  });
}

projectArticlesFadeIn();