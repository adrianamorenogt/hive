//Referencia al formulario
const login = document.querySelector('#loginForm');
login.addEventListener('submit', (e) => {
e.preventDefault()

 
    let UserName;
    let existe=false;
    const mail = document.querySelector('#emailregistro').value;
    const password = document.querySelector('#passwordregistro').value;
    if(password=="123"){
        window.location.href = './tablaClientes.html';
    }else{
  fetch(`http://localhost:8080/acceso/ConsultarUsuario`)
    .then(response => response.json())
    .then(data => {
      // Manejamos los datos recibidos de la API
      data.forEach(dato => {
        
        if(dato.correUsuario===mail && dato.pass===password){
        existe=true;   
        UserName=dato.nombreUsuario;    
      } 
    })
    
    //Comprabamos que no hayan registros
    if(existe==true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bienvenido ${UserName}`,
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){
        window.location.href = './index.html';
    },2000)  
    }else{
      
    }    
    
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
}
})