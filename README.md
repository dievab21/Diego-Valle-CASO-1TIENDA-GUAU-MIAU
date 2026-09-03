#  Caso 1 Guau&Miau

## Sistema de Registro e Inicio de Sesión

Proyecto desarrollado para la tienda en linea **Guau&Miau**, especializada en la venta de juguetes innovadores y sostenibles para mascotas.

Como objetivo principal fue el desarrollar un registro de usuario, entregando mensajes de errores claros y consistentes.

---

# Descripción del proyecto

El sistema permite:

- Registrar nuevos usuarios.
- Validar los datos ingresados en el formulario.
- Aceptar solamente correos `@duoc.cl`.
- Comprobar que el correo no esté registrado anteriormente.
- Crear contraseñas seguras.
- Confirmar la contraseña.
- Registrar un teléfono opcional.
- Registrar una o más mascotas.
- Seleccionar el tipo de mascota.
- Agregar nuevas mascotas dinámicamente.
- Eliminar mascotas.
- Guardar los usuarios y sus mascotas utilizando `localStorage`.
- Iniciar sesión utilizando los datos registrados.
- Informar cuando el usuario no existe.
- Informar cuando la contraseña es incorrecta.
- Entregar una opción para recuperar el acceso.
- Utilizar Bootstrap 5.3 para apoyar el diseño de la interfaz.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- LocalStorage(Como mecanismo de almacenamiento local para conservar los usuarios registrados)
- Visual Studio Code
- Git
- GitHub

---

# Estructura del proyecto

```text
FORMATIVA1/
│
├── index.html
├── login.html
├── login.js
├── registro.html
├── registro.js
└── stylesheet.css

```
# Uso de inteligencia artificial 

- Unicamente fue usada Chatgpt y los prompts utilizados fueron los siguientes para dar las soluciones a los problemas.

# Prompts utilizados para el desarrollo

- no se esta guardando ni el usuario ni la mascota, a que se debe eso?
Solucion
Con el bootstrap se hizo un boton para facilitar el registro, mensajes, y la estructura visual, para la adaptación a diferentes pantallas
```
<div class="container">

    <div class="row justify-content-center">

        <div class="col-12 col-md-8 col-lg-6">

            <input
                type="email"
                class="form-control">

            <button class="btn btn-dark">
                REGISTRAR
            </button>

        </div>

    </div>

</div>
```
- Validacion del correo, comprobo que el correo permanezca a duoc@.cl.
```
if (!correo.endsWith("@duoc.cl")) {
    errorCorreo.textContent =
        "El correo debe utilizar @duoc.cl.";
}
```
- Validacion de la contraseña, comprobo que la contraseña posea 8 caracteres. 
```
if (password.length < 8) {
    errorPassword.textContent =
        "La contraseña debe tener al menos 8 caracteres.";
}
```
- Registro de mascota que permite agregar mas de una mascota al formulario.
```
const mascotaBox = document.createElement("div");

mascotaBox.classList.add("mascota-box");

listaMascotas.appendChild(mascotaBox);
```
- Para el Login, buscar mediante un correo ingresado que permita comprobar su contraseña posteriormente.
```
const usuario = usuarios.find(function(usuario) {
    return usuario.correo === correo;
});
```
-Solución propuesta y hecha con LocalStore, Guardado de usuarios y mascotas.
```
localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);
```
Y el recuperar usuarios, obtiene guardado automáticamente, si no existe crea uno vacio.
```
const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];
```
-Ademas de ocupar la implementacion oficial de bootstrap
https://www.programiz.com/javascript/online-compiler/

