let numPedido = Math.round(Math.random() * 99999 + 10000);
let subtotal = 0;
let codigo = localStorage.getItem("codigo") ?? "no definido";
let descuento = 0;
let envio = 1000;
let total = 0;
let fecha = new Date();
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let usuario = JSON.parse(localStorage.getItem("usuario")) ?? [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];
let productos = JSON.parse(localStorage.getItem("productos")) ?? [];

document.getElementById("textoCodigo").oninput = () => {
  codigo = document.getElementById("textoCodigo").value;
};

document.getElementById("btnCodigo").onclick = () => {
  if (codigo === "CoderHouse" || codigo === "JavaScript") {
    localStorage.setItem("codigo", codigo);
    Swal.fire({
      title: "codigo validado con exito.",
    }).then(() => {
      location.reload();
    });
  } else {
    Swal.fire({
      title: "el código introducido expiró o no es válido.",
    });
  }
};

if (codigo === "CoderHouse" || codigo === "JavaScript") {
  document.getElementById("ocultar").removeAttribute("id", "ocultar");
  document.getElementById("textoCodigo").setAttribute("id", "ocultar");
  document.getElementById("btnCodigo").setAttribute("id", "ocultar");
}

if (carrito.length !== 0) {
  document.getElementById("h2").innerText = "Productos:";

  for (let producto of productos) {
    let filtrado = carrito.filter((el) => el.nombre === producto.nombre);

    if (filtrado.length > 0) {
      let cantidad = filtrado.length;
      let precio = filtrado.reduce(
        (acumulador, el) => acumulador + el.precio,
        0
      );

      let fichaMostrar = document.createElement("li");
      fichaMostrar.innerHTML = `<img src="../img/${producto.articulo}_${producto.marca}.webp" alt="${producto.articulo}${producto.id}Img">
      <p>${producto.nombre} : x${cantidad} $${precio}</p>
      <img src="../img/plus-square.svg" alt="btnsuma" id="btnSuma${producto.id}" class="btnCarrito">
      <img src="../img/dash-square.svg" alt="btnResta" id="btnResta${producto.id}" class="btnCarrito">`;
      document.getElementById("listaProductos").appendChild(fichaMostrar);

      document.getElementById(`btnSuma${producto.id}`).onclick = () => {
        carrito.push(producto);
        localStorage.removeItem("carrito");
        let carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJSON);
        location.reload();
      };

      document.getElementById(`btnResta${producto.id}`).onclick = () => {
        let indice = carrito.map((el) => el.nombre).indexOf(producto.nombre);
        carrito.splice(indice, 1);
        localStorage.removeItem("carrito");
        let carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJSON);
        location.reload();
      };
    }
  }

  subtotal = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);

  if (codigo === "CoderHouse" || codigo === "JavaScript") {
    descuento = (25 * subtotal) / 100;
  }

  total = subtotal - descuento + envio;

  let cuenta = document.createElement("div");
  cuenta.innerHTML = `<p> ${fecha}</p>
  <p>Numero de pedido: ${numPedido}</p> 
  <p>Cliente: ${usuario[0].nombre} ${usuario[0].apellido}</p>
  <p>Subtotal: ${subtotal}</p>
  <p>Descuento: -${descuento} </p>
  <p>Envio: ${envio}</p>
  <p>Total: ${total}</p>
  <input type="button" value="limpiar carrito" id="limpiarCarrito" class="btnStyle">
  <input type="button" value="Comprar" id="btnCompra" class="btnStyle">`;
  document.querySelector(".fichaCompra__factura").appendChild(cuenta);

  document.getElementById("limpiarCarrito").onclick = () => {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carrito");
    location.reload();
  };

  document.getElementById("btnCompra").onclick = () => {
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carrito");

    Swal.fire({
      title: "Compra realizada con éxito.",
      imageUrl: "../img/bag-check-fill.svg",
      imageWidth: 250,
      imageHeight: 150,
      imageAlt: "Custom image",
    }).then(() => {
      location.reload();
    });
  };
}
