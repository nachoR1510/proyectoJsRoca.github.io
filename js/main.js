function calcularSubtotal(productos) {
  for (const producto of productos) {
    let cantidad = parseInt(
      prompt(
        `Ingrese la cantidad de ${producto.nombre} ($${producto.precio}) que quiere llevar: `
      )
    );

    while (cantidad < 0 || isNaN(cantidad) || cantidad > producto.unidades) {
      if (cantidad > producto.unidades) {
        cantidad = parseInt(
          prompt(
            `la cantidad ingresada supera al stock del producto, ingrese una cantidad menor`
          )
        );
      } else {
        cantidad = parseInt(
          prompt(
            `la cantidad ingresada no es valida, por favor vuelva a intentarlo`
          )
        );
      }
    }

    producto.unidades = cantidad;

    subtotal = subtotal + producto.precio * cantidad;
  }

  const lista = productos.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * producto.unidades,
      unidades: producto.unidades,
    };
  });
  console.log(lista);

  return subtotal;
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
productos.push(new producto("aceite", 500, 15, 1));
productos.push(new producto("harina", 300, 20, 2));
productos.push(new producto("pure de tomate", 150, 7, 3));
productos.push(new producto("sal fina", 200, 30, 4));
let nombre = prompt("ingrese su nombre: ");
let ubicacion = prompt("ingrese su ubicacion: ");
let productoBuscarNombre = prompt(
  `Ingrese el nombre o la id del producto a buscar`
);
let productoBuscarId = parseInt(productoBuscarNombre);
let busqueda;

if (productoBuscarId >= 0) {
  busqueda = productos.find((buscar) => buscar.id === productoBuscarId);
} else {
  busqueda = productos.find((buscar) => buscar.nombre === productoBuscarNombre);
}

console.log(busqueda);

calcularSubtotal(productos);

let codigoDescuento = prompt("ingrese un codigo de descuento");
calcularDescuento(codigoDescuento);

if (ubicacion == "buenos aires" || ubicacion == "Buenos aires") {
  envio = 0;
} else {
  envio = 700;
}

total = subtotal - descuento + envio;

console.log(
  `cliente: ${nombre}  fecha: ${fecha.toLocaleString()} \n Nºpedido:${Npedido} \n \n subtotal: ${subtotal} \n descuento: -${descuento} \n envio: +${envio} \n ----------------- \n total: ${total}`
);
