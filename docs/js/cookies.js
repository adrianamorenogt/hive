// Función para aceptar las cookies y ocultar la barra
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.querySelector('.cookie-bar').style.display = 'none';
}

// Función para rechazar las cookies y ocultar la barra
function rejectCookies() {
  localStorage.setItem('cookiesAccepted', 'false');
  document.querySelector('.cookie-bar').style.display = 'none';
}

// Comprobar si las cookies han sido aceptadas
if (localStorage.getItem('cookiesAccepted') === null) {
  document.querySelector('.cookie-bar').style.display = 'block';
} else if (localStorage.getItem('cookiesAccepted') === 'true') {
  // Código para cookies aceptadas
} else {
  // Código para cookies rechazadas
}