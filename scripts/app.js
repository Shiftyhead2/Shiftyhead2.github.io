"use strict";

let project_index = 0;
let other_project_index = 0;

new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  navigation: false,
  autoScrolling: true,
  anchors: ["page1", "page2", "page3", "page4", "page5"],
  menu: "#headerMenu",
  credits: {
    enabled: false,
    label: "Made with fullpage.js",
    position: "right",
  },
});



let show_slide = function(i,usesDots){
  if(usesDots === true){
    project_index = i;
  }else{
    project_index += i;
  }
  const projects = document.querySelectorAll('#main-projects');
  const dots = document.querySelectorAll('.main-dot');

  for(i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }

  if(project_index > projects.length - 1){
    project_index = 0;
  }

  if(project_index < 0){
    project_index = projects.length - 1;
  }

  projects[project_index].style.display = "flex";
  dots[project_index].className += " active";
}

let show_slide_other = function(i,usesDots){
  if(usesDots === true){
    other_project_index = i;
  }else{
    other_project_index += i;
  }
  const projects = document.querySelectorAll('#other-projects');
  const dots = document.querySelectorAll('.other-dot');

  for(i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }

  if(other_project_index > projects.length - 1){
    other_project_index = 0;
  }

  if(project_index < 0){
    other_project_index = projects.length - 1;
  }

  projects[other_project_index].style.display = "flex";
  dots[other_project_index].className += " active";
}

window.addEventListener("onload",show_slide(project_index,false));
window.addEventListener("onload",show_slide_other(other_project_index,false));
