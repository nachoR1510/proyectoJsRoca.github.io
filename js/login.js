let usuario = JSON.parse(localStorage.getItem("usuario")) ?? [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];

document.getElementById("LoginBtn").onclick = () => {
  let mail = document.getElementById("loginMail").value;
  let contraseña = document.getElementById("loginContraseña").value;
  let validarMail = usuarios.some((el) => el.mail == mail);
  console.log(validarMail);
  let validarContraseña = usuarios.some((el) => el.contraseña == contraseña);
  console.log(validarContraseña);

  if (validarMail && validarContraseña) {
    let usuarioBuscar = usuarios.find((el) => el.mail === mail);
    usuario.splice(0, usuario.length);
    usuario.push(usuarioBuscar);
    localStorage.removeItem("usuario");
    let usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem("usuario", usuarioJSON);
    location.reload();
  } else {
    Toastify({
      text: "alguno de los datos ingresados no es valido.",
      duration: 1000,
      newWindow: true,
      style: {
        background: "#d74646",
      },
      gravity: "top",
      position: "center",
    }).showToast();
  }
};

if (usuario.length > 0) {
  document.querySelector(".mainLogin").setAttribute("id", "ocultar");

  for (let el of usuario) {
    let perfil = document.createElement("section");
    perfil.innerHTML = `<img src="../img/person-fill.svg" alt="person-fill">
    <h2>${el.nombre} ${el.apellido}</h2>
    <p>Correo electronico: ${el.mail}</p>
    <p>Contraseña: ${el.contraseña}</p>
    <input type="button" value="cerrar sesión" id="btnPerfil" />
    <a href="./carrito.html">Ir al carrito</a>`;
    perfil.setAttribute("class", "perfil");
    document.body.appendChild(perfil);
  }
}

document.getElementById("btnPerfil").onclick = () => {
  localStorage.removeItem("usuario");
  usuario.splice(0, usuario.length);
  location.reload();
};
