//Creamos el modal del carrito
//capturamos los id de los div y los guardamos en una constante
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
//capturamos el id del botón
const cartBtn = document.getElementById("cart-btn");
//capturamos el contador del carrito
const cartCounter = document.getElementById("cart-counter");

//Creamos una función para crear nuestro modal
const displayCart = () => {
    //Limpiamos el contenido 
    modalContainer.innerHTML = "";
    //mostramos el modal con display
    modalContainer.style.display = "flex";
    modalOverlay.style.display = "flex";
    //modal header
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    const modalClose = document.createElement("div");
    modalClose.innerHTML = `
        <lord-icon
        src="https://cdn.lordicon.com/jfhbogmw.json"
        trigger="loop" colors="primary:#fff"
        style="width:40px;height:40px; padding: 1px;">
        </lord-icon>
        `;
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    //creamos una función para ocultar el modal cuando le damos click en close
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    

    //modal Body
    if (cart.length > 0) {

        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrese"><lord-icon
                src="https://cdn.lordicon.com/albqovim.json"
                trigger="hover" colors="primary:#121331"
                style="width:40px;height:40px">
            </lord-icon></span>
                <span class="quantity-input">${product.quanty}</span>
                <span class="quantity-btn-increse"><lord-icon
                src="https://cdn.lordicon.com/xdakhdsq.json"
                trigger="hover" colors="primary:#121331"
                style="width:40px;height:40px">
            </lord-icon></span>
            </div>
            <div class="price">$${product.price * product.quanty} </div>
            <div class="delete-product"><lord-icon
            src="https://cdn.lordicon.com/jmkrnisz.json"
            trigger="hover" colors="primary:#121331"
            style="width:40px;height:40px"></lord-icon></div>
        </div>
        `;
            modalContainer.append(modalBody);

            //Vamos a realizar las funciones de sumar y restar los productos del carrito
            const decrese = modalBody.querySelector(".quantity-btn-decrese");
            decrese.addEventListener("click", () => {
                //el if me sirve para que no me genere números negativos sino que llegue a 1
                if (product.quanty !== 1) {
                    product.quanty--;
                    displayCart();
                }
                displayCartCounter();
            });

            const increse = modalBody.querySelector(".quantity-btn-increse");
            increse.addEventListener("click", () => {
                product.quanty++;
                displayCart();
                displayCartCounter();
            });

            //eliminar producto del carrito
            const deleteProduct = modalBody.querySelector(".delete-product");

            deleteProduct.addEventListener("click", () => {
                Swal.fire({
                    title: 'Eliminar Producto',
                    text: "¿Desea eliminar el producto?",
                    icon: 'warning',
                    showCancelButton: true,
                    color: '#3A207E ',
                    background: '#DCE8E9',
                    width: '80vh',
                    confirmButtonColor: '#04166C',
                    confirmButtonText: 'Aceptar',
                    cancelButtonColor: '#d33',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        deleteCartProduct(product.id);
                
                    };
                  });
                
            })
        });

        //modal footer
        //incrementamos en total acc(acumulador) y el(elemento o objeto), acumula el precio comenzando por 0
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
        <div class="total-price">Total: $${total}</div>
        `;
        modalContainer.append(modalFooter);

        const payButton = document.createElement("button");
        payButton.className = "pay-button";
        payButton.innerHTML = `
        <a href="http://mpago.li/2HmPNUV" class="a-pagar" target="_blank">
        Pagar  <lord-icon
        src="https://cdn.lordicon.com/xxwwxrom.json"
        trigger="loop" colors="primary:#fff"
        style="width:35px;height:35px">
        </lord-icon> </a>
        `;
        modalFooter.append(payButton);

    }else {
       const modalText = document.createElement("h2");
       modalText.className = "modal-body";
       modalText.innerText = "El carrito está vacío";
       modalContainer.append(modalText); 
    }
};

cartBtn.addEventListener("click", displayCart);

//función que me va a eliminar los productos
const deleteCartProduct = (id) => {
    //el método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    //buscamos el elemento que el usuario quiere eliminar 
    const foundId = cart.findIndex((element) => element.id === id);
    console.log(foundId);
    //eliminamos el elemento del carrito por medio de splice
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
};

//función paracontar los productos que tenemos en el carrito
const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if (cartLength > 0) {
        cartCounter.style.display = "flex";
        cartCounter.innerText = cartLength;
    } else {
        cartCounter.style.display = "none";
    };
};


  