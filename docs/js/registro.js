


//Referencia al formulario
const registro = document.querySelector('#registro');
registro.addEventListener('submit', (e) => {
    e.preventDefault()//Previene que la pagina se recargue
    let existe=false;
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const direccion = document.querySelector('#direccion').value;
    const password = document.querySelector('#password').value    
    const password2 = document.querySelector('#password2').value
  //Valida que la contraseña sea igual 
    if(password===password2){
    //Eliminar Cliente de la bd

    fetch(`http://localhost:8080/acceso/ConsultarCliente`)
    .then(response => response.json())
    .then(data => {
      // Manejamos los datos recibidos de la API
      data.forEach(dato => {
        console.log(dato.correCliente);
        if(dato.correCliente===email){
        existe=true;       
      }
    })
    
    //Comprabamos que no hayan registros
    if(existe==true){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario ya se ha registrado',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      CrearUsuario();
    }    
    
      
    })
    .catch(error => {
      console.error('Error:', error);
    });

     }else{
    Swal.fire({
      position: 'center',
      icon: 'erro',
      title: 'La contraseña no coincide',
      showConfirmButton: false,
      timer: 1500
    })
  }//Fin else







 //FUNCION PARA CREAR EL USUARIO EN LA BASE DE DATOS
 function CrearUsuario(){
  const url = 'http://localhost:8080/acceso/CrearUsuario';
  const data = {
    nombreUsuario: name,
    apellidoUsuario: lastname,
    telefonoUsuario : phone,
    correUsuario: email,
    direccionUsuario: direccion,
    pass: password

  };
  //CREAMOS UN NUEVO CLIENTE
  if (data.nombreCliente !== "") {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          window.location.href = './index.html';
      },2000)  
        
      })
      .catch(error => {
        console.error('No se pudo crear el usuario: ', error);
      });
  } else {
    console.log("Error");
  }



  
}
})










//CAMBIAR A REGISTRO DE USUARIOS
function registroform() {

var form2 = document.querySelector(".form-container");
var form = document.querySelector(".form-container2");
if (form.style.display === "flex") {
  form.style.display = "none";
  form2.style.display ="flex"
} else {
  form.style.display = "flex";
  form2.style.display ="none";
  
}
}

