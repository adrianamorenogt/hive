function alertas(mnj){
  Swal.fire({
      title: 'Error',
      text: mnj,
      icon: 'error',
      confirmButtonText: 'Volver'
    })
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
      alertas("Nombre erroneo");
}else if (correo.value == "" || mensaje.value == null) {
  alertas("correo erroneo"); 
}else if(mensaje.value == "" || mensaje.value == null) {
  alertas("mensaje erroneo");
}else if ( validarCorreo.test(correo.value) ) {  
  Swal.fire({
      title: 'Aceptado',
      text: 'Formulario enviado con éxito',
      icon: 'success',
      confirmButtonText: 'Finalizar'
    })
  console.log(
    `Este formulario tiene un nombre ${nombre.value}, correo ${correo.value} y mensaje ${mensaje.value}`
  );

  nombre.value = "";
  correo.value = "";
  mensaje.value = "";
} else {
      alertas("Por favor, ingresa un correo electrónico válido.");
  }
});
}

function mostrarNombres(){

  let nombres = ["Andrea", "Camila", "Adriana", "Hector", "Camila", "Hector"];
  listaNombres.innerHTML="";

  for(let i=0;i<nombres.length;i++) {
      const nombre = nombres[i];
      const li = document.createElement("li");
      li.textContent = nombre;
      listaNombres.appendChild(li);
  }
}