//evento para cambio de color en el navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 8) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
//Evento para menu hamburguesa  
//Animation con js para menu
document.querySelector(".burger_menu").addEventListener("click", animateBars);
var line1=document.querySelector(".line1_menu");
var line2=document.querySelector(".line2_menu");
var line3=document.querySelector(".line3_menu");  

function animateBars(){
  line1.classList.toggle("activeline1_menu");
  line2.classList.toggle("activeline2_menu");
  line3.classList.toggle("activeline3_menu");

  //abrir y cerrar menu hamburguesa capturando el div nav-bar y cambiando su estilo de none a block
  var navBar = document.querySelector(".nav-bar-web");
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
}
//ocultamos el menu lateral cuando el usuario seleccione una opción
document.querySelector("ul").addEventListener("click",animateBars);

//Funcionalidad y animación del slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
  });  