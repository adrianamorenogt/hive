const loginForm = document.querySelector("#loginForm")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const Users = JSON.parse(localStorage.getItem("users")) || []
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  )
  
  if (!validUser) {
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Usuario o contraseña erroneo',
      showConfirmButton: false,
      timer: 1500
    })
  }
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Bienvenido ${validUser.name}`,
    showConfirmButton: false,
    timer: 1500
  })
  
  localStorage.setItem("login_success", JSON.stringify(validUser));
  setTimeout(function(){
    window.location.href = 'index.html';
},2000) 
});
