
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


    function Asignaridbutton(id) {
      const enviarboton = document.createElement("button");
      const btndiv = document.getElementById("boton");
      enviarboton.textContent = "Enviar";
      enviarboton.addEventListener('click', () => editarCliente(id));
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
      const botonenvio=document.getElementById("boton");
      if (capa.style.visibility !== "visible") {
        editarUsuario.style.display = "flex";
        capa.style.visibility = "visible";
      } else {
        editarUsuario.style.display = "none";
        capa.style.visibility = "hidden";
        botonenvio.innerHTML="";
        editarUsuario.reset();
      }
    }

    
    function editarCliente(id) {
      

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;



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
              // Operación exitosa
              ConsultarCliente();
              MostarForm();//Retiramos de la vista el form
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Actualizado',
                showConfirmButton: false,
                timer: 2500
              });

            } else {
              throw new Error('Error en la respuesta de la solicitud Actualizar');
            }
          })
          .catch(error => {
            console.error('Error en la solicitud Actualizar:', error);
            // Maneja el error por si no se logra la actualización
          });



    

    }
  





    //CREAR USUARIO DATOS
    function crearCliente() {
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
  