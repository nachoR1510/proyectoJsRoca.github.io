function crearTienda(productos) {
  for (let producto of productos) {
    let productoMostrar = document.createElement("div");
    productoMostrar.innerHTML = `<img src="./img/${producto.articulo}_${producto.marca}.webp" alt="${producto.articulo}${producto.id}Img">
    <h2> ${producto.nombre}</h2>
     <p>$${producto.precio}</p>
     <p>stock:${producto.unidades}</p>
     <button id=btnProducto${producto.id} class=btnStyle>Añadir al carrito</button>`;
    document.getElementById("productos").appendChild(productoMostrar);

    productoMostrar.setAttribute("id", "producto");
    let btn = document.getElementById(`btnProducto${producto.id}`);
    btn.onclick = () => {
      carrito.push(producto.nombre, producto.precio);
      console.log(carrito);
      let carritoJson = JSON.stringify(carrito);
      localStorage.setItem("carrito", carritoJson);
      if (carrito.length > 0) {
        document.getElementById("cantidad").innerText = carrito.length / 2;
        carritoLlenoIcon.removeAttribute("id", "ocultar");
        carritoVacioIcon.setAttribute("id", "ocultar");
      } else {
        carritoVacioIcon.removeAttribute("id", "ocultar");
        carritoLlenoIcon.setAttribute("id", "ocultar");
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

function calcularDescuento(codigo) {
  if (codigo == "coderhouse") {
    alert("codigo de descuento aplicado.");
    descuento = (30 * subtotal) / 100;
    return descuento;
  } else if (codigo == "js") {
    alert("codigo de descuento aplicado.");
    descuento = (15 * subtotal) / 100;
    return descuento;
  } else {
    alert("el codigo ingresado no es valido, no se aplicara ningun descuento");
    return descuento;
  }
}

class producto {
  constructor(nombre, articulo, precio, unidades, id, marca) {
    this.nombre = nombre;
    this.articulo = articulo;
    this.precio = precio;
    this.unidades = unidades;
    this.id = id;
    this.marca = marca;
  }
}

let subtotal = 0;
let descuento = 0;
let envio = 0;
let total = 0;
let fecha = new Date();
let productos = [];
let Npedido = Math.round(Math.random() * 99999 + 10000);
let nombre;
let ubicacion;
let productoBuscarNombre;
let productoBuscarId;
let busqueda;
let codigoDescuento;
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let carritoVacioIcon = document.querySelector(".carritoVacio");
let carritoLlenoIcon = document.querySelector(".carritoLleno");

productos.push(new producto("aceite pureza", "aceite", 500, 15, 1, "pureza"));
productos.push(new producto("harina pureza", "harina", 300, 20, 2, "pureza"));
productos.push(
  new producto("pure de tomate arcor", "pTomate", 150, 7, 3, "arcor")
);
productos.push(
  new producto("sal fina celusal", "salFina", 200, 30, 4, "celusal")
);
productos.push(
  new producto("harina cañuelas", "harina", 350, 15, 5, "cañuelas")
);

crearTienda(productos);

let productoBuscar = document.getElementById("buscar");
productoBuscar.oninput = () => {
  busqueda = productos.filter((producto) =>
    producto.nombre.includes(productoBuscar.value)
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
  document.getElementById("cantidad").innerText = carrito.length / 2;
  carritoLlenoIcon.removeAttribute("id", "ocultar");
  carritoVacioIcon.setAttribute("id", "ocultar");
} else {
  carritoVacioIcon.removeAttribute("id", "ocultar");
  carritoLlenoIcon.setAttribute("id", "ocultar");
}

if (ubicacion == "buenos aires" || ubicacion == "Buenos aires") {
  envio = 0;
} else {
  envio = 700;
}

total = subtotal - descuento + envio;
