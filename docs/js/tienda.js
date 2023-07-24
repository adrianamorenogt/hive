
//crear una constante que nos trae el div/contenido de HTML por su id
const shopContent = document.getElementById("shopContent")
//creamos el carrito (creamos un array vacío)
const cart = [];
//modal productos
const modalProductContainer = document.getElementById("modal-product-container");
//recorrer el array mediante el forEach para acceder a los elementos
productos.forEach((product) => {
    //creamos una constante para crear un elemento (div)
    const content = document.createElement("div");
    content.className = "item";
    //innerHTML le agregamos contenido al HTML, de product nos da el valor (imagen, nombre, precio)
    //a shopContent le estoy agregando content
    content.innerHTML = `
        <figure> 
            <img src="${product.img}">
            <lord-icon class="ver-detalles"
            src="https://cdn.lordicon.com/mrjuyheh.json"
            trigger="hover" delay="2000" tittle="Ver Detalles"
            colors="outline:#121331,primary:#231e2d,secondary:#848484,tertiary:#ffffff"
            style="width:50px;height:50px"></lord-icon>
        </figure>
        <div class="info-product">
            <h2>${product.productName}</h2>
            <p>$${product.price}</p>
        </div>
    `;
    shopContent.append(content);
    //creamos el boton para comprar
    const buyButton = document.createElement("button");
    buyButton.className = "button-agg";
    buyButton.innerHTML = `Agregar  <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    <lord-icon 
        class="agregar"
        src="https://cdn.lordicon.com/ausvvtws.json"
        trigger="hover"
        colors="primary:#fff"
        style="width:35px;height:35px">
    </lord-icon>`

    //a content agregale el boton
    content.append(buyButton);

    //le agregamos un evento al botón, cuando detecte el clic le asignamos la función
    buyButton.addEventListener("click", () => {
        //recorremos el carrito con el método some para verificar si esta el producto o no dentro del carrito
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        //si repeat es verdadero entonces me recorre el carrito (map) y si hay un producto repetido me suma 1 cantidad.
        if (repeat) {
            Swal.fire({
                title: 'Atención',
                text: "El producto ya ha sido agregado al carrito",
                icon: 'warning',
                color: '#000',
                background: '#fff',
                width: '80vh',
                confirmButtonColor: '#000',
                confirmButtonText: 'Aceptar',
            });
        } else {
            //le decimos que agrege al carrito con push, me agrega el objeto
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCounter();
        }
    });

    // Agregamos el evento click para mostrar el modal de ver detalles
    const verDetallesButton = content.querySelector(".ver-detalles");
    const modalOverlayProductos = document.getElementById("modal-overlay-productos");
    modalOverlayProductos.style.display = "none";
    modalProductContainer.style.display = "none";

    verDetallesButton.addEventListener("click", () => {
        modalProductContainer.innerHTML = `
            <div class="header-product">
                <h2 id="details">Detalles del producto</h2>
                <div class="modal-product-close"><lord-icon id="close-modal"
                src="https://cdn.lordicon.com/jfhbogmw.json"
                trigger="loop" colors="primary:#fff"
                style="width:45px;height:45px;">
                </lord-icon></div>
            </div>
            <h3 id="title-modal">${product.productName}</h3>
            <div class="img-description">
                <img id="img-modal" src="${product.img}">
                <p id="description">${product.description}</p> 
            </div>
            <p id="price-modal">$${product.price}</p>  
        `;
        modalOverlayProductos.style.display = "block";
        modalProductContainer.style.display = "block";
        const modalProductClose = modalProductContainer.querySelector(".modal-product-close");
        modalProductClose.addEventListener("click", () => {
            modalOverlayProductos.style.display = "none";
            modalProductContainer.style.display = "none";
        });
    });

});

//Barra de búsqueda
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



