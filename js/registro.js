function validarDatos(nombre, apellido, mail, contraseña) {
  let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let validar = 0;
  let compararMail = usuarios.some((el) => el.mail == mail);

  return new Promise((resolve, reject) => {
    if (nombre.length > 0) {
      validar++;
    }

    if (apellido.length > 0) {
      validar++;
    }

    if (contraseña.length > 0) {
      validar++;
    }

    if (validarEmail.test(mail)) {
      if (compararMail) {
        Toastify({
          text: "el mail ingresado ya esta registrado.",
          duration: 1000,
          newWindow: true,
          style: {
            background: "#272829",
          },
          gravity: "top",
          position: "center",
        }).showToast();
      } else {
        validar++;
      }
    }

    if (validar === 4) {
      resolve();
    } else {
      reject();
    }
  });
}

let usuario = JSON.parse(localStorage.getItem("usuario")) ?? [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];
let nombre;
let apellido;
let mail;
let contraseña;

class user {
  constructor(nombre, apellido, mail, contraseña) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.contraseña = contraseña;
  }
}

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => response.json())
  .then((albums) => {
    let imagenes = albums.filter((el) => el.id < 17);
    for (let fotos of imagenes) {
      let foto = document.createElement("div");
      foto.innerHTML = `<img src="${fotos.thumbnailUrl}" alt="img${fotos.id}">`;
      document.querySelector(".registro__img").appendChild(foto);
    }
  });

document.getElementById("btnRegistrarse").onclick = () => {
  nombre = document.getElementById("nombreUser").value;
  apellido = document.getElementById("apellidoUser").value;
  mail = document.getElementById("mailUser").value;
  contraseña = document.getElementById("contraUser").value;

  validarDatos(nombre, apellido, mail, contraseña)
    .then(() => {
      usuarios.push(new user(nombre, apellido, mail, contraseña));
      console.log(usuarios);
      let usuariosJson = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", usuariosJson);
      location.href = "./login.html";
    })
    .catch(() => {
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
    });
};
