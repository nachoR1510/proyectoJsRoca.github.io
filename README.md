# proyectoJsRoca.github.io

### entrega final

- Agregue un diseño simple a las páginas para que estén más estilizadas usando sass ya que me resulta mas como trabajar así y es más fácil entender el código.
- Cambie el icono para volver al inicio (la tienda) y le agregue un texto para que sea más intuitivo como volver a la tienda.
- La barra de búsqueda ahora también filtra los productos si se escribe en mayúsculas, antes no lo hacía.
- Agregue imágenes para los productos que estén en el carrito.
- Ahora los productos del mismo tipo se stackean en el carrito y el precio que se muestra es el de la suma de todos los mismos.
- Agregue un botón para sumar y restar productos en el carrito, también puse un botón más intuitivo para limpiar todo el carrito.
- Use librerías como Toastify y Sweet alert 2 en el proyecto, como por ejemplo al agregar un producto al carrito o al validar el código de descuento.
- Ahora si ya hay un código de descuento validado, el diseño cambia para ser más fácil de entender que ya se introdujo un código.
- Cree un login y registro de usuario: si no hay ninguna sesión iniciada el usuario no podrá agregar productos al carrito, si no tiene cuenta tiene que registrarse. El registro verifica que no se dejen espacios en blancos y que el correo ingresado cumpla la estructura de un mail.
- Aplique fetch para implementar un diseño en la página de registro. no encontré ninguna api que me convenciera como para agregar algo al proyecto usando fetch para este proyecto así que trate de ponerme creativo (?)
- Hice uso de setTimeOut para insertar animaciones en los botones de la tienda.
- Use la función location.reload() se que no forman parte de los temas vistos y que no suma ni resta a la nota pero fue principalmente para hacer que el navegar por la pagina sea mas fluido.

### los codigos de la tienda son CoderHouse y JavaScript para un 25% de descuento del subtotal.

### preEntregaRoca3

- Para esta pre entrega cambie bastante el codigo original implementando DOM haciendo que la interaccion con el usuario sea mas directa atraves de selecionar los productos
y no por un alert que pregunte la cantidad. Use localStorage para guardar la cantidad de productos que lleva el usuario y para almacenar un codigo de descuento si se aplica
los codigos los mantuve de la misma entraga (CoderHouse o JavaScript y da un 25% al total) cree un nuevo archivo js para la pestaña del carrito asi no tenia conflicto con la
funcion crearTienda() de la pestaña index.
- la barra de busquedas es funcional y filtra por nombre o marca y muestra todos los producos del mismo tipo si no se especifica una marca.
