function crearTienda(productos) {
  for (let producto of productos) {
    let productoMostrar = document.createElement("div");
    productoMostrar.innerHTML = `<img src="./img/${producto.articulo}_${producto.marca}.webp" alt="${producto.articulo}${producto.id}Img">
    <h2> ${producto.nombre}</h2>
     <p>$${producto.precio}</p>
     <button id=btnProducto${producto.id} class=btnStyle>Añadir al carrito</button>`;
    document.getElementById("productos").appendChild(productoMostrar);

    productoMostrar.setAttribute("id", "producto");
    let btn = document.getElementById(`btnProducto${producto.id}`);
    btn.onclick = () => {
      if (usuario.length === 0) {
        Toastify({
          text: "inicie sesión para comprar productos.",
          duration: 1000,
          newWindow: true,
          style: {
            background: "#d74646",
          },
          gravity: "top",
          position: "center",
        }).showToast();

        btn.classList.add("animate__animated", "animate__headShake", "gris");
        setTimeout(() => {
          btn.classList.remove(
            "animate__animated",
            "animate__headShake",
            "gris"
          );
        }, 1000);
      } else {
        carrito.push(producto);
        let carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        if (carrito.length > 0) {
          document.getElementById("cantidad").innerText = carrito.length;
          carritoLlenoIcon.removeAttribute("id", "ocultar");
          carritoVacioIcon.setAttribute("id", "ocultar");
        } else {
          carritoVacioIcon.removeAttribute("id", "ocultar");
          carritoLlenoIcon.setAttribute("id", "ocultar");
        }
        Toastify({
          text: "Producto añadido al carrito",
          duration: 1000,
          newWindow: true,
          style: {
            background: "#272829",
          },
          gravity: "top",
          position: "center",
        }).showToast();

        btn.classList.add("animate__animated", "animate__rubberBand", "verde");

        setTimeout(() => {
          btn.classList.remove(
            "animate__animated",
            "animate__rubberBand",
            "verde"
          );
        }, 1000);
      }
    };
  }
}

function limpiarTienda() {
  let elemento = document.querySelectorAll("#producto");
  console.log(elemento);
  for (let i = 0; i < elemento.length; i++) {
    document.getElementById("producto").remove();
  }
}

class producto {
  constructor(nombre, articulo, precio, id, marca) {
    this.nombre = nombre;
    this.articulo = articulo;
    this.precio = precio;
    this.id = id;
    this.marca = marca;
  }
}

let productos = [];
let busqueda;
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let carritoVacioIcon = document.querySelector(".carritoVacio");
let carritoLlenoIcon = document.querySelector(".carritoLleno");
let usuario = JSON.parse(localStorage.getItem("usuario")) ?? [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];

productos.push(new producto("aceite pureza", "aceite", 700, 1, "pureza"));
productos.push(new producto("harina pureza", "harina", 180, 2, "pureza"));
productos.push(
  new producto("pure de tomate arcor", "pTomate", 250, 3, "arcor")
);
productos.push(new producto("sal fina celusal", "salFina", 300, 4, "celusal"));
productos.push(new producto("harina cañuelas", "harina", 150, 5, "cañuelas"));
productos.push(
  new producto("manteca la serenisima", "manteca", 600, 6, "laserenisima")
);
productos.push(new producto("fideos molto", "fideos", 250, 7, "molto"));
productos.push(new producto("arroz lucchetti", "arroz", 300, 8, "lucchetti"));

let productosJSON = JSON.stringify(productos);
localStorage.setItem("productos", productosJSON);

crearTienda(productos);

let productoBuscar = document.getElementById("buscar");
productoBuscar.oninput = () => {
  busqueda = productos.filter((producto) =>
    producto.nombre.includes(productoBuscar.value.toLowerCase())
  );

  limpiarTienda();
  crearTienda(busqueda);

  if (busqueda.length === 0) {
    limpiarTienda();

    let sinResultados = document.createElement("div");
    sinResultados.innerHTML = `<h2> sin concidencias :( </h2>`;
    document.getElementById("productos").appendChild(sinResultados);
    sinResultados.setAttribute("id", "producto");
  }
};

if (carrito.length > 0) {
  document.getElementById("cantidad").innerText = carrito.length;
  carritoLlenoIcon.removeAttribute("id", "ocultar");
  carritoVacioIcon.setAttribute("id", "ocultar");
} else {
  carritoVacioIcon.removeAttribute("id", "ocultar");
  carritoLlenoIcon.setAttribute("id", "ocultar");
}

if (usuario.length === 0) {
  let registrarse = document.createElement("div");
  registrarse.innerHTML = `<a href="./pages/login.html" class= "linkStyle">Ingresar</a>`;
  document.querySelector(`.header__carrito`).appendChild(registrarse);
} else {
  let usuarioIcon = document.createElement("div");
  usuarioIcon.innerHTML = `<a href="./pages/login.html">
  <img src="./img/person-fill.svg" alt="iconUser" class="carritoImg"/>
  </a>`;
  usuarioIcon.setAttribute("class", "header__carrito");
  document.querySelector(`.header__carrito`).appendChild(usuarioIcon);
}
