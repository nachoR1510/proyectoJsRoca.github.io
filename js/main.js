function crearTienda(productos) {
  for (let producto of productos) {
    let productoMostrar = document.createElement("div");
    productoMostrar.innerHTML = `<img src="./img/${producto.nombre}.webp" alt="${producto.nombre}Img">
    <h2> ${producto.nombre} </h2>
     <p>$${producto.precio}</p>
     <p>stock:${producto.unidades}</p>
     <button id=btnProducto${producto.id} class=btnStyle>Añadir al carrito</button>`;
    document.getElementById("productos").appendChild(productoMostrar);

    productoMostrar.setAttribute("id", "producto");
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
  constructor(nombre, precio, unidades, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
    this.id = id;
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

productos.push(new producto("aceite", 500, 15, 1));
productos.push(new producto("harina", 300, 20, 2));
productos.push(new producto("pure de tomate", 150, 7, 3));
productos.push(new producto("sal fina", 200, 30, 4));

crearTienda(productos);

let productoBuscar = document.getElementById("buscar");
productoBuscar.oninput = () => {
  busqueda = productos.find(
    (producto) => producto.nombre === productoBuscar.value
  );
  console.log(busqueda?.nombre || "producto no encontrado");
  let valor = busqueda?.nombre || "producto no encontrado";
  if (valor === productoBuscar.value) {
    limpiarTienda();
    let mostrarBusqueda = document.createElement("div");
    mostrarBusqueda.innerHTML = `<img src="./img/${busqueda.nombre}.webp" alt="${busqueda.nombre}Img">
   <h2> ${busqueda.nombre} </h2>
   <p>$${busqueda.precio}</p>
   <p>stock:${busqueda.unidades}</p>
   <button id=btnProducto${busqueda.id} class=btnStyle>Añadir al carrito</button>`;
    document.getElementById("productos").appendChild(mostrarBusqueda);

    mostrarBusqueda.setAttribute("id", "producto");
  } else if (valor === "producto no encontrado") {
    limpiarTienda();
    crearTienda(productos);
  }
};

if (ubicacion == "buenos aires" || ubicacion == "Buenos aires") {
  envio = 0;
} else {
  envio = 700;
}

total = subtotal - descuento + envio;
