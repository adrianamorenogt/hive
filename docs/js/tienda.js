
//Variable que mantiene el estado visible del carrito
let carritoVisible = false;

//Esperemos que todos los elementos de la pàgina cargen para ejecutar el script
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {

  //Agregremos funcionalidad a los botones eliminar del carrito
  let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
  for (let i = 0; i < botonesEliminarItem.length; i++) {
    let button = botonesEliminarItem[i];
    button.addEventListener('click', eliminarItemCarrito);
  }

  //Agrego funcionalidad al boton sumar cantidad
  let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
  for (let i = 0; i < botonesSumarCantidad.length; i++) {
    var button = botonesSumarCantidad[i];
    button.addEventListener('click', sumarCantidad);
  }

  //Agrego funcionalidad al buton restar cantidad
  let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
  for (let i = 0; i < botonesRestarCantidad.length; i++) {
    let button = botonesRestarCantidad[i];
    button.addEventListener('click', restarCantidad);
  }

  //Agregamos funcionalidad al boton Agregar al carrito
  let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
  for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
    let button = botonesAgregarAlCarrito[i];
    button.addEventListener('click', agregarAlCarritoClicked);
  }

  //Agregamos funcionalidad al botón comprar
  function pagarClicked() {
    Swal.fire({
      title: '¿Has terminado?',
      text: 'Finaliza tu compra',
      imageUrl: './img/paymentgif.gif',
      imageWidth: 140,
      imageAlt: 'Custom image',
      confirmButtonText: 'Finalizar',
      confirmButtonColor: '#4ED712',
    });

    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()) {
      carritoItems.removeChild(carritoItems.firstChild);
    }

    ocultarCarrito();
    actualizarCarritoTotal(); // Reemplaza actualizarTotalCarrito() por actualizarCarritoTotal()
  }
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked() {
  Swal.fire({
    title: '¿Has terminado?',
    text: 'Finaliza tu compra',
    imageUrl: './img/paymentgif.gif',
    imageWidth: 140,
    imageAlt: 'Custom image',
    confirmButtonText: 'Finalizar',
    confirmButtonColor: '#4ED712',

  })
  //Elimino todos los elmentos del carrito
  let carritoItems = document.getElementsByClassName('carrito-items')[0];
  while (carritoItems.hasChildNodes()) {
    carritoItems.removeChild(carritoItems.firstChild)
  }
  actualizarTotalCarrito();
  ocultarCarrito();
}
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event) {
  let button = event.target;
  let item = button.parentElement;
  let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
  let precio = item.getElementsByClassName('precio-item')[0].innerText;
  let imagenSrc = item.getElementsByClassName('img-item')[0].src;
  console.log(imagenSrc);

  agregarItemAlCarrito(titulo, precio, imagenSrc);

  hacerVisibleCarrito();
}

//Funcion que hace visible el carrito
function hacerVisibleCarrito() {
  carritoVisible = true;
  var carrito = document.getElementsByClassName('carrito')[0];
  carrito.style.marginRight = '0';
  carrito.style.opacity = '1';

  var items = document.getElementsByClassName('contenedor-items')[0];
  items.style.width = '60%';
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc) {
  let item = document.createElement('div');
  item.classList.add = ('item');
  let itemsCarrito = document.getElementsByClassName('carrito-items')[0];

  //controlamos que el item que intenta ingresar no se encuentre en el carrito
  let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
  for (var i = 0; i < nombresItemsCarrito.length; i++) {
    if (nombresItemsCarrito[i].innerText == titulo) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto ya se añadio al carrito!',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
  }

  var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
            <lord-icon class="iconoBorrar"
              src="https://cdn.lordicon.com/jmkrnisz.json"
              trigger="loop"
              delay="3500"
              colors="primary:#121331"
              state="morph-fill"
            </lord-icon>
            </button>
        </div>
    `
  item.innerHTML = itemCarritoContenido;
  itemsCarrito.append(item);

  //Agregamos la funcionalidad eliminar al nuevo item
  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

  //Agregmos al funcionalidad restar cantidad del nuevo item
  let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
  botonRestarCantidad.addEventListener('click', restarCantidad);

  //Agregamos la funcionalidad sumar cantidad del nuevo item
  let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
  botonSumarCantidad.addEventListener('click', sumarCantidad);

  //Actualizamos total
  actualizarTotalCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
  var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
  cantidadActual++;
  selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
  actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
  let buttonClicked = event.target;
  let selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
  let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
  cantidadActual--;
  if (cantidadActual >= 1) {
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
  }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event) {
  Swal.fire({
    title: '¿Desea eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#4ED712',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'Se ha eliminado del carrito.',
        'success'
      )
      let buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      //Actualizamos el total del carrito
      actualizarTotalCarrito();

      //la siguiente funciòn controla si hay elementos en el carrito
      //Si no hay elimino el carrito
      ocultarCarrito();
    }
  })

}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito() {

  let carritoItems = document.getElementsByClassName('carrito-items')[0];
  if (carritoItems.childElementCount == 0) {

    let carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '-100%';
    carrito.style.opacity = '0';
    carritoVisible = false;

    let items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '100%';
  }
}
//Actualizamos el total de Carrito
/* function actualizarTotalCarrito() {
  //seleccionamos el contenedor carrito
  let carritoContenedor = document.getElementsByClassName('carrito')[0];
  let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
  let total = 0;
  //recorremos cada elemento del carrito para actualizar el total
  for (let i = 0; i < carritoItems.length; i++) {
    let item = carritoItems[i];
    let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    //quitamos el simobolo peso y el punto de milesimos.
    let precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
    let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    console.log(precio);
    let cantidad = cantidadItem.value;
    total = total + (precio * cantidad);
  }
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ",00";

}
 */
// Función para obtener la tasa de cambio actualizada
async function obtenerTasaDeCambio() {
  const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=COP');
  const data = await response.json();
  return data.rates.COP;
}

async function actualizarTotalPesosColombianos(totalDolares) {
  const tasaDeCambio = await obtenerTasaDeCambio();
  const totalPesosColombianos = totalDolares * tasaDeCambio;
  document.getElementsByClassName('carrito-total-precio')[0].innerText = '$' + totalDolares.toFixed(2) + ' (COP ' + totalPesosColombianos.toFixed(2) + ')';
}
function actualizarTotalCarrito() {
  let carritoContenedor = document.getElementsByClassName('carrito')[0];
  let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
  let total = 0;

  for (let i = 0; i < carritoItems.length; i++) {
    let item = carritoItems[i];
    let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    let precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', '')) / 1000;
    let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0].value;
    let subtotal = precio * cantidadItem;
    total += subtotal;
  }

  document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ',00';
}



//JAVASCRIPT PARA EL MODAL 

//Jquery para seleccion de los componentes de la tarjeta activado por click event button ver-detalle
$(document).ready(function () {//DOCUMENT READY espera a que el documento html se haya cargado
  $('.ver-detalles').click(function () {
    var imagen = $(this).data('imagen'); //SELECCIONAMOS LOS ELEMENTOS QUE TENEMOS EN EL MISMO BTN
    var nombre = $(this).data('nombre');
    var descripcion = $(this).data('descripcion');
    var precio = $(this).data('precio');
    $('#modalDetalles .modal-imagen').attr('src', imagen);
    $('#modalDetalles .modal-nombre').text(nombre);
    $('#modalDetalles .modal-descripcion').text(descripcion);
    $('#modalDetalles .modal-precio').text(precio);
  });
});


function search_item() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('item');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}










