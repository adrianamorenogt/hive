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
          alertas("Por favor ingrese su nombre");
    }else if (correo.value == "" || mensaje.value == null) {
      alertas("Por favor ingrese un correo"); 
    }else if(mensaje.value == "" || mensaje.value == null) {
      alertas("Por favor ingrese su mensaje");
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
          alertas("Por favor, ingresa un correo electrónico válido.");
      }
  });
};
