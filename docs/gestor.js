fetch('http://localhost:8080/acceso/ConsultarCliente')
  .then(response => response.json())
  .then(data => {
    // Manejamos los datos recibidos de la API
    data.forEach(dato => {
      const nombre = dato.nombre;
      const id = dato.id;

      // Hacer algo con los datos, como mostrarlos en la interfaz de usuarios
      console.log('Nombre:', nombre);
      console.log('ID:', id);
    });
  })
  .catch(error => {
    // Aquí puedes manejar los errores
    console.error('Error:', error);
  });
