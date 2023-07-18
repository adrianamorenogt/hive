ConsultarCliente();
function ConsultarCliente() {
  listaNombres.innerHTML="";
  fetch('http://localhost:8080/acceso/ConsultarCliente')
    .then(response => response.json())
    .then(data => {
      // Manejamos los datos recibidos de la API
      data.forEach(dato => {
        const tr = document.createElement("tr");

        for (let clave in dato) {
          const td = document.createElement("td");
          const p = document.createElement("p");
          p.textContent = dato[clave];
          td.appendChild(p);
          tr.appendChild(td);
        }

        const td = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn-danger");
        deleteButton.classList.add("btn");
        deleteButton.addEventListener('click', () => eliminarCliente(dato.id_cliente));

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("btn-success");
        editButton.classList.add("btn");
        editButton.addEventListener('click', () => editarCliente(dato.id_cliente));

        td.appendChild(deleteButton);
        td.appendChild(editButton);
        tr.appendChild(td);

        listaNombres.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
function eliminarCliente(id) {
  const url = `http://localhost:8080/acceso/EliminarCliente/${id}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        ConsultarCliente();
          // Realizar alguna acción adicional si la respuesta es exitosa
        } else {
        console.error('Error al eliminar el cliente');
        // Manejar el error de alguna manera si la respuesta no es exitosa
      }
    })
    .catch(error => {
      console.error('Error en la solicitud DELETE:', error);
      // Manejar el error en caso de que la solicitud falle por alguna razón
    });
}


function editarCliente(id) {
  const editarUsuario=document.getElementById("editarUsuario");
  //editarUsuario.style.display="block";
  const nombre=document.getElementById("nombre").value;
  const apellido=document.getElementById("apellido").value;
  const telefono=document.getElementById("telefono").value;
  const correo=document.getElementById("correo").value;
  const dirreccion=document.getElementById("direccion").value;
  alert(correo);
  const data={
    id_cliente: id,
    nombreCliente: nombre,
    apellidoCliente: apellido,
    telefonoCliente: telefono,
    correCliente: correo,
    direccionCliente: dirreccion
  }
  const url=('http://localhost:8080/acceso/ModificarCliente')
   fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseData => {

      console.log(responseData);
    })
    .catch(error => {
      console.error('No se pudo crear el usuario: ', error);
    }); 
} 






//CREAR USUARIO DATOS
const url = 'http://localhost:8080/acceso/CrearCliente';
const data = {
  nombreCliente: '',
  apellidoCliente: '',
  telefonoCliente: '',
  correCliente: '',
  direccionCliente: ''
};
//CREAMOS UN NUEVO CLIENTE
if (data.nombreCliente != "") {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseData => {

      console.log(responseData);
    })
    .catch(error => {
      console.error('No se pudo crear el usuario: ', error);
    });
} else {
  console.log("Error");
}





