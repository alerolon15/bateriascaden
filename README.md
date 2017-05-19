<h1>Baterias Caden - Taller</h1>
<h3>Sistema para Gestion de Autos del taller</h3>
<p>Este es un sistema hecho para gestion de datos para una empresa de venta de baterias.</p>
<p>En el mismo se hacen consultas y registros sobre Baterias en Stock, Autos que entran al taller y Clientes que se registran en el sistema para una mejor atencion al cliente.</p>
<p>El mismo esta hecho en arquitectura MEAN(MongoDB(base de datos), Express, AngularJS, NodeJS).</p>

<h3>Login</h3>
<p>Login hecho con PassportJS para NodeJS.</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/login.jpg" />

<h3>Taller</h3>
<p>En el taller se realiza una consulta de Dominio o Patente del Auto que ingresa.</p>
<p>En el caso de haber registro se habilita el boton de consulta, en el otro caso se registra un nuevo auto a la base de datos</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/index.jpg" />

<h3>Consulta</h3>
<p>En el caso de haber consulta se muestra los datos del auto, junto con el nombre del cliente registrado con ese dominio</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/consulta.jpg" />

<h3>Registro</h3>
<p>En el caso de no haber consulta se registra un nuevo auto, llenando un formulario con la informacion que se requiere.</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/registro1.jpg" />
<p>Mas abajo cuando se selecciona el botos baterias, el sistema muestra el catalogo de baterias disponibles para la compra del mismo, junto con una barra de busqueda que discrimina por codigo de baterias.</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/catalogo.jpg" />

<h3>Panel de control</h3>
<p>En la gerencia se tiene acceso al panel de control desde la url <code>/admin</code> , siempre que se inicie sesion con el usuario habilitado para usarlo.</p>
<p>En el panel de control se puede ver informacion de los clientes, autos y baterias; que ya se encuentren en la base de datos.</p>
<p>con un panel del lado izquierdo para acceso a las tablas de la base de datos y para realizar nuevamente los registros que se requieran y actualizacion de informacion de los mismos.</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/dashboard.jpg" />

<p>Se puede consultar la tabla de todos los registros (clientes, baterias y autos), mostrandose en una tabla diseñada con los campos de cada una.</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/tablas.jpg" />
<p>Y tambien se pueden realizar registros, tanto de baterias como de clientes, dentro del panel de control, usada por un administrador</p>
<img src="https://github.com/alerolon15/bateriascaden/blob/master/public/images/registrobaterias.jpg" />
