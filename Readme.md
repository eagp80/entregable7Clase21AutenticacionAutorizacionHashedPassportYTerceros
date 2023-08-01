
 ### Dudas al whatsapp +573158680076.
# UTILIZANDO LOGICA DE LOGIN ANTERIOR SE MEJORA LA SEGURIDAD CON HASHEO DE PASSWORD Y ESTRATEGOA LOCAL Y CON TERCEROS (GITHUB) MEDIANTE PASSPORT.
###  SERVIDOR DE PRODUCTOS Y CARRITOS CON EXPRESS, VISTAS CON EXPRESS-HANDLEBARS, BASE DE DATOS MANEJADA CON MONGOOSE HACIA MONGO ATLAS (PRONTO TENDRÁ WEBSOCKET PARA CHAT CON SOCKETS.IO). 
### ADEMÁS TIENE: MANEJO DE VARIABLES DE ENTORNO CON dotenv CAMBIO DE VARIABLES DE ENTORNO DURANTE EJECUCIÓN CON cross-env, SE MUESTRAN RUTAS EN TABLA EN CONSOLA LADO BACKEND CON express-routemap, (PRONTO TENDRÁ MANEJO DE ARCHIVOS CON MULTER).
### CORRESPONDE A ENTREGABLE 7 CLASE 21 MEJORA DE LOGIN CON BCRYPT Y PASSPORT.
...
### Como usar la app:
<h2> Ruta de inicio, de entrada a la api:  http://localhost:8000/api/v1/  la cual redirige al login </h2>

 <h2>Ejemplos de rutas:</h2>
        Ruta de inicio, de entrada a la api: 
        http://localhost:8000/api/v1/

        Para obtener todos los productos detalladamemnte en formato JSON (método GET)::
        http://localhost:8000/api/v1/products/

        Para ver resumen de todos los carritos (método GET):
        http://localhost:8000/api/v1/views/carts/

        Para la paginación desde mongo atlas con limit, sort y query (método GET):
        http://localhost:8000/api/v1/views/products?page=1&limit=3&sort={"code":1}&query={"description": "Desde fromulario con socket"}
## Consigna. Se está requiriendo lo siguiente:
- Con base en el login de nuestro entregable anterior, refactorizar para incluir los nuevos conceptos. ((Hecho)).

- Se deberá contar con un hasheo de contraseña utilizando bcrypt.((Hecho)).

- Se deberá contar con una implementación de passport, tanto para register como para login.((Hecho)).

- Implementar el método de autenticación de GitHub a la vista de login. ((Hecho)).


### TESTEO:

- Al cargar el proyecto, éste deberá comenzar en la pantalla de login. ((Hecho)).

- Al no tener un usuario registrado aún, se procederá a hacer un registro, por lo que la pantalla de login debe tener un link de “regístrate”, el cual nos redireccione a la pantalla de registro. ((Hecho)).

- Al registrarme con los datos solicitados, se revisará la contraseña guardada en la base de datos, cuidando que ésta esté correctamente hasheada. ((Hecho)).

- Se realizará el proceso de login con las mismas credenciales con las que se registró el usuario, corroborando que el login funcione correctamente y redirija a la pantalla principal. ((Hecho)).

- Además, la pantalla de login deberá contar con un botón “entrar con Github” el cual al hacer click nos permita entrar directamente a la página con los datos obtenidos de Github. ((Hecho)).

- Se corroborará en la base de datos que el nuevo usuario “creado con Github” cuente con un password vacío. ((Hecho)).

### Formato

- Link al repositorio de Github con el proyecto completo, sin la carpeta de node_modules. ((Hecho)).

### Sugerencias
- Recuerda que las vistas son importantes, más no el diseño, concéntrate en la funcionalidad de las sesiones antes que en la presentación.

- Cuida las redirecciones a las múltiples vistas.


# **Checklist  ENTREGA ANTERIOR Segunda Pre-entrega del proyecto final**		
     
|Aspectos a evaluar|	Descripción	|
| ------ | ------ |
|Consigna|	Profesionalizar las consultas actuales de nuestro servidor express, ajustando la forma de solicitar los productos y agregando nuevos endpoints a los carritos. ((Hecho)).|	
|Productos|	Los productos se visualizan correctamente en la vista de productos ((Hecho)), y la misma cuenta con una paginación funcional ((Hecho)). Además, pueden filtrarse por categoría o por disponibilidad ((Hecho)), y ordenarse por precio de manera ascendente o descendente ((Hecho)). |
|Carrito|   Los métodos DELETE eliminan correctamente los productos del carrito((Hecho)). Los métodos PUT actualizan correctamente los elementos del carrito ((Hecho)). Se realiza correctamente un populate al momento de obtener un carrito. ((Hecho)). |
|Seguridad| La vista de productos muestra un mensaje de error si se pretende agregar una page inexistente? (p. ej. page=20003033 o page= -12323 o page = ASDASDASD).Los endpoints de carrito devuelven error si se desea colocar un :cid o un :pid inexistente. |
|Operación y formato|	El formato de productos y carrito es en inglés ((Hecho)). El proyecto corre con npm start ((Hecho)).	|


## Rutas para servidor con file-system en puerto 8081 (se deshabilito, se comentó en el código):

- Carritos: (se deshabilito, se comentó en el código):
    - /api/carts/:cid   GET_BY_CID  trae carrito cid en formato JSON.
    - /api/carts/   POST crea un carrito nuevo vacío.
    - /api/carts/:cid/product/:pid  POST agregar producto pid a carrito cid.
    - En api/carts/  No hay PUT ni DELETE.

- Productos:(se deshabilito, se comentó en el código):
    - /api/products/:pid GET_BY_PID muestra carrito pid en formato JSON, PUT con postman body y params, DELETE con postman y params.
    - /api/products/ GET de todos los productos en formato JSON y no hay formulario, POST con postman y body.
    - /api/products?limit=NUM GET muestra los primeros NUM productos en formato JSON. Utiliza req.query.

    - Adicionalmente, en localhost:8081/index2.html se tiene un formulario html para hacer POST de product.

- Socket IO:(se deshabilito, se comentó en el código):
    - /    GET    Tiene socket. Utiliza vista "home.handlebars" y muestra lista de todos los productos en html. No tiene formulario.
    - /realtimeproducts  GET   Tiene socket. Utiliza vista "realTimeProducts.handlebars" y Tiene formulario para hacer post de product, muestra Lista de productos, al crear un producto nuevo lo muestra resaltado en una tabla y agrega al final de la lista mostrada el nuevo producto en html.

## Rutas para servidor con Mongo-Atlas en puerto 8000:

# Rutas carritos con Mongo:

- Ver la imagen en carpeta raíz.

# Rutas productos con Mongo:

-  Ver la imagen en carpeta raíz.

# Rutas de  views (carritos y productos) con Mongo: 

- Ver la iamgen en carpeta raíz.
