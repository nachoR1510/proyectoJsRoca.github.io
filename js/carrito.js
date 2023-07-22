let numPedido = Math.round(Math.random() * 99999 + 10000);
let subtotal = 0;
let codigo = localStorage.getItem("codigo") ?? "no definido";
let descuento = 0;
let envio = 1000;
let total = 0;
let fecha = new Date();
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

document.getElementById("textoCodigo").oninput = () => {
  codigo = document.getElementById("textoCodigo").value;
};

document.getElementById("btnCodigo").onclick = () => {
  if (codigo === "CoderHouse" || codigo === "JavaScript") {
    alert("el codigo ingresado se aplico con exito");
    localStorage.setItem("codigo", codigo);
  } else {
    alert("el codigo ingresado caduco o no es valido.");
  }
};

if (carrito.length !== 0) {
  document.getElementById("h2").innerText = "Productos:";
  for (let i = 0; i < carrito.length; i++) {
    let fichaMostrar = document.createElement("li");
    fichaMostrar.innerHTML = `<p>${carrito[i]}: $${carrito[i + 1]}</p>`;
    document.getElementById("listaProductos").appendChild(fichaMostrar);
    i++;
  }

  for (let i = 1; i < carrito.length; i++) {
    subtotal = subtotal + carrito[i];
    i++;
  }

  if (codigo === "CoderHouse" || codigo === "JavaScript") {
    descuento = (25 * subtotal) / 100;
  }

  total = subtotal - descuento + envio;

  let cuenta = document.createElement("div");
  cuenta.innerHTML = `<hr></hr>
  <p> ${fecha}</p>
  <p>Numero de pedido: ${numPedido}</p> 
  <p>Subtotal: ${subtotal}</p>
  <p>Descuento: -${descuento} </p>
  <p>Envio: ${envio}</p>
  <p>Total: ${total}</p>`;
  document.querySelector(".fichaCompra__factura").appendChild(cuenta);
}
