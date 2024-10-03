const aboutMe = document.querySelector(".aboutMe");
const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const info = document.querySelector(".info");
const contact = document.querySelector(".contact");
const navBar = document.querySelector(".header");
const logo = document.querySelector(".logo");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const user = document.querySelector(".user");
const logoWrapper =document.querySelector(".logo-wrapper");


//////////////////////////
//Navigation Bar Buttons//
//////////////////////////
aboutMe.addEventListener("click", () => {
    window.open("aboutme.html", "_self");
})

home.addEventListener("click", () => {
    window.open("index.html", "_self");
})

projects.addEventListener("click", () => {
    window.open("projects.html", "_self");
})

info.addEventListener("click", () => {
    window.open("info.html", "_self");
})

contact.addEventListener("click", () => {
    window.open("contact.html", "_self");
})



////////////////////////////////////////////////////////////
//Function Call on Scroll Event to Minimise Navigation Bar//
////////////////////////////////////////////////////////////
window.onscroll = function() {scrollAction()};




///////////////////////////////////////////////////////////////////
//Function Declaration on Scroll Event to Minimise Navigation Bar//
///////////////////////////////////////////////////////////////////
function scrollAction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){

      navBar.style.fontSize = "smaller";
      logo.style.fontSize = "large";
      home.style.fontSize = "large";
      projects.style.fontSize = "large";
      aboutMe.style.fontSize = "large";
      info.style.fontSize = "large";
      facebook.style.fontSize = "large";
      instagram.style.fontSize = "large";
      user.style.fontSize = "large";
      logoWrapper.style.marginTop = ".5%";
      logoWrapper.style.marginBottom = "0%";

    }  
    else{

      navBar.style.fontSize = "xx-large";
      logo.style.fontSize = "xx-large"
      home.style.fontSize = "x-large";
      projects.style.fontSize = "x-large";
      aboutMe.style.fontSize = "x-large";
      info.style.fontSize = "x-large";
      facebook.style.fontSize = "xx-large";
      instagram.style.fontSize = "xx-large";
      user.style.fontSize = "xx-large";
      logoWrapper.style.marginTop = "3%";
      logoWrapper.style.marginBottom = "1%";

    }
  }