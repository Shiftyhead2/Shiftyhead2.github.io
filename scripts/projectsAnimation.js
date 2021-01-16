const projectArticles = document.querySelectorAll('.article');

const projectArticlesFadeIn = () => {


  projectArticles.forEach((article,index) => {
    article.style.animation = `articleFade 1s ease forwards ${index / 2}s`
  });
}

projectArticlesFadeIn();