ConsultarProducto();
ConsultarCliente();
function ConsultarCliente() {
  listaNombres.innerHTML = "";
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
        editButton.addEventListener('click', () => Asignaridbutton(dato.id_cliente));

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

//ASIGNAR BOTON PARA MODIFICAR EL USUARIO
function Asignaridbutton(id) {
  const enviarboton = document.createElement("button");
  const btndiv = document.getElementById("registro");
  enviarboton.textContent = "Enviar";
  enviarboton.addEventListener('click', () => editarCliente(id));
  btndiv.appendChild(enviarboton);
  //Alerta para indicar que debe hacer
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Ingrese los datos en el formulario y luego presione enviar',
    showConfirmButton: false,
    timer: 2000
  });
  MostarForm();
}
//ASIGNAR EL BTN PARA CREAR EL USUARIO
function asignarBtnCrear() {
  const enviarboton = document.createElement("button");
  const btndiv = document.getElementById("registro");
  enviarboton.textContent = "Enviar";
  enviarboton.addEventListener('click', () => crearCliente());
  btndiv.appendChild(enviarboton);
  //Alerta para indicar que debe hacer
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Ingrese los datos en el formulario y luego presione enviar',
    showConfirmButton: false,
    timer: 4500
  })
  MostarForm();
}
//MOSTRAR EL FORMULARIO AL USUARIO
function MostarForm() {
  //Muestra al usuario el formulario para actualizar los datos
  const capa = document.getElementById("capa");
  const editarUsuario = document.getElementById("registro");

  if (capa.style.visibility !== "visible") {
    editarUsuario.style.display = "flex";
    capa.style.visibility = "visible";
  } else {
    editarUsuario.style.display = "none";
    capa.style.visibility = "hidden";

    editarUsuario.reset();
  }
}
//Hacemos que pantalla se cargue cuando se cierra el form por cancelacion
function reiniciarWindow() {
  location.reload();
}

//EDICION DE LOS CLIENTES REGISTRADOS
function editarCliente(id) {

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  if (nombre !== "") {

    const url = 'http://localhost:8080/acceso/ModificarCliente';
    const data = {
      id_cliente: id,
      nombreCliente: nombre,
      apellidoCliente: apellido,
      telefonoCliente: telefono,
      correCliente: correo,
      direccionCliente: direccion
    };
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {

        } else {
          throw new Error('Error en la respuesta de la solicitud Actualizar');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud Actualizar:', error);
        // Maneja el error por si no se logra la actualización
      });

  } else {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Debe llenar los campos',
      showConfirmButton: false,
      timer: 2500
    });

  }
}

//Eliminar Cliente de la bd
function eliminarCliente(id) {
  const url = `http://localhost:8080/acceso/EliminarCliente/${id}`;
  Swal.fire({
    title: '¿Seguro?',
    text: "Esta Operación no se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#4ED712',
    confirmButtonText: 'Si eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            Swal.fire(
              'Eliminado!',
              'Cliente eliminado del sistema.',
              'success'
            );
            ConsultarCliente();

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
  });

}




//CREAR USUARIO EN LA BASE DE DATOS SOLO PARA EL ADMINISTRADOR 
function crearCliente() {

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const url = 'http://localhost:8080/acceso/CrearCliente';
  const data = {
    nombreCliente: nombre,
    apellidoCliente: apellido,
    telefonoCliente: telefono,
    correCliente: correo,
    direccionCliente: direccion
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

        ConsultarCliente();
      })
      .catch(error => {
        console.error('No se pudo crear el usuario: ', error);
      });
  } else {
    console.log("Error");
  }

}


































/**-------------------CONSULTAS PARA LA SECCION DE PRODUCTOS--------------------------- */

/** FUNCIONALIDADAES MOSTRAR FORM ENVIO*/
function MostarFormProducto() {
  //Muestra al usuario el formulario para actualizar los datos
  const capa = document.getElementById("capa");
  const editarProducto = document.getElementById("registroProducto");

  if (capa.style.visibility !== "visible") {
    editarProducto.style.display = "flex";
    capa.style.visibility = "visible";
  } else {
    editarProducto.style.display = "none";
    capa.style.visibility = "hidden";

    editarProducto.reset();
  }
}





//ASIGNAR BOTON PARA MODIFICAR EL USUARIO
function idbuttonProducto(id){
  const enviarboton = document.createElement("button");
  const btndiv = document.getElementById("registroProducto");
  enviarboton.textContent = "Enviar";
  enviarboton.addEventListener('click', () => editarProducto(id));
  btndiv.appendChild(enviarboton);
  //Alerta para indicar que debe hacer
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Ingrese los datos en el formulario y luego presione enviar',
    showConfirmButton: false,
    timer: 2000
  });
  MostarFormProducto();
}
//ASIGNAR EL BTN PARA CREAR EL PRODUCTO
function asignarBtnCrearProducto() {
  const enviarboton = document.createElement("button");
  const btndiv = document.getElementById("registroProducto");
  enviarboton.textContent = "Enviar";
  enviarboton.addEventListener('click', () => crearProducto());
  btndiv.appendChild(enviarboton);
  //Alerta para indicar que debe hacer
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Ingrese los datos en el formulario y luego presione enviar',
    showConfirmButton: false,
    timer: 4500
  })
  MostarFormProducto();
}








/**CONSULTAS A LA BASE DE DATOS */

function ConsultarProducto() {
  listaProductos.innerHTML = "";
  fetch('http://localhost:8080/acceso/ConsultarProducto')
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
        deleteButton.addEventListener('click', () => eliminarProducto(dato.id_cliente));

        const editButton = document.createElement("button");
        editButton.textContent = "Actualizar";
        editButton.classList.add("btn-success");
        editButton.classList.add("btn");
        editButton.addEventListener('click', () => idbuttonProducto(dato.id_cliente));

        td.appendChild(deleteButton);
        td.appendChild(editButton);
        tr.appendChild(td);

        listaProductos.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

//EDICION DE LOS PRODUCTOS REGISTRADOS
function editarProducto(id) {
  
  const idCategoria = document.getElementById("id_Categoria").value;
  const nombreProducto = document.getElementById("Nombre_producto").value;
  const descripcion = document.getElementById("descripcion_producto").value;
  const precio = document.getElementById("precio").value;
  if (nombre !== "") {
    
    const url = 'http://localhost:8080/acceso/ModificarProducto';
    const data = {
      id_cliente: id,
      id_categoria: idCategoria,
      nombre_producto: nombreProducto,
      descripcion_producto: descripcion,
      precio_producto: precio
    };
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {

        } else {
          throw new Error('Error en la respuesta de la solicitud Actualizar');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud Actualizar:', error);
        // Maneja el error por si no se logra la actualización
      });

  } else {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Debe llenar los campos',
      showConfirmButton: false,
      timer: 2500
    });

  }
}


//CREAR PRODUCTO EN LA BASE DE DATOS SOLO PARA EL ADMINISTRADOR 
function crearProducto() {

  const idCategoria = document.getElementById("id_Categoria").value;
  const nombreProducto = document.getElementById("Nombre_producto").value;
  const descripcion = document.getElementById("descripcion_producto").value;
  const precio = document.getElementById("precio").value;
  const url = 'http://localhost:8080/acceso/CrearProducto';
  const data = {

    id_categoria: idCategoria,
    nombre_producto: nombreProducto,
    descripcion_producto: descripcion,
    precio_producto: precio
  };
  //CREAMOS UN NUEVO CLIENTE
  if (data.nombreProducto !== "") {

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {

        ConsultarProducto();
      })
      .catch(error => {
        console.error('No se pudo crear el Producto: ', error);
      });
  } else {
    console.log("Error");
  }

}

//ELIMINAR PRODUCTOS DE LA BASE DE DATOS
function eliminarProducto(id) {
  
  const url = `http://localhost:8080/acceso/EliminarProducto/${id}`;
  Swal.fire({
    title: '¿Seguro?',
    text: "Esta Operación no se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#4ED712',
    confirmButtonText: 'Si eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            Swal.fire(
              'Eliminado!',
              'Producto eliminado del sistema.',
              'success'
            );
            ConsultarProducto();

          } else {
            console.error('Error al eliminar el Producto');
            // Manejar el error de alguna manera si la respuesta no es exitosa
          }
        })
        .catch(error => {
          console.error('Error en la solicitud DELETE:', error);
          // Manejar el error en caso de que la solicitud falle por alguna razón
        });

    }
  });

}
