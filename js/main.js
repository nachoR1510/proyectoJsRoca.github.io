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
let productoBuscarId = parseInt(productoBuscarNombre);
let busqueda;
let codigoDescuento;

productos.push(new producto("aceite", 500, 15, 1));
productos.push(new producto("harina", 300, 20, 2));
productos.push(new producto("pure de tomate", 150, 7, 3));
productos.push(new producto("sal fina", 200, 30, 4));

if (ubicacion == "buenos aires" || ubicacion == "Buenos aires") {
  envio = 0;
} else {
  envio = 700;
}

total = subtotal - descuento + envio;
