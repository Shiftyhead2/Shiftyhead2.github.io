const toggleButton = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar-links');
const navBarLinks = document.querySelectorAll('.navbar-links li');
const brandName = document.querySelector(".brand-name");

const navSlide = () => {

  brandName.style.animation = `articleFade 1s ease forwards`;

  toggleButton.addEventListener('click',() =>{
    navbar.classList.toggle('active');
  });

  navBarLinks.forEach((link,index) => {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5}s`;
  });
}

navSlide();