//evento para cambio de color en el navbar
window.addEventListener('scroll', function () {
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
var line1 = document.querySelector(".line1_menu");
var line2 = document.querySelector(".line2_menu");
var line3 = document.querySelector(".line3_menu");

function animateBars() {
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
document.querySelector("ul").addEventListener("click", animateBars);

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




/**
*FORM PARA ENVIO DE DATOS
*/
function alertas(mnj){
  Swal.fire({
      title: 'Error',
      text: mnj,
      icon: 'error',
      confirmButtonText: 'Volver'
    })
}
//MOSTRAR CONTACT FORM
function FormContact() {

  //abrir y cerrar menu hamburguesa capturando el div nav-bar y cambiando su estilo de none a block
  var form = document.querySelector("#contactForm");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
    
  }
}
function validarFormulario(){
  
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let mensaje = document.getElementById("mensaje");
    let validarCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(nombre.value == "" || mensaje.value == null) {
          alert("Por favor ingrese su nombre");
    }else if (correo.value == "" || mensaje.value == null) {
      alert("Por favor ingrese un correo"); 
    }else if(mensaje.value == "" || mensaje.value == null) {
      alert("Por favor ingrese su mensaje");
    }else if ( validarCorreo.test(correo.value) ) {  
      Swal.fire({
          title: 'Aceptado',
          text: 'Formulario enviado con éxito',
          icon: 'success',
          confirmButtonText: 'Finalizar'
        });

    nombre.value = "";
    correo.value = "";
    mensaje.value = "";
    }else {
          alert("Por favor, ingresa un correo electrónico válido.");
      }
  });
};