const loginForm =
    document.getElementById("loginForm");

const mensajeLogin =
    document.getElementById("mensajeLogin");

const recuperarPassword =
    document.getElementById("recuperarPassword");


loginForm.addEventListener("submit", function (event) {


    // Evitar recargar la página

    event.preventDefault();

    const correo =
        document.getElementById("correoLogin").value.trim();


    const password =
        document.getElementById("passwordLogin").value;

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario =
        usuarios.find(function (usuario) {

            return usuario.correo === correo;

        });

    if (!usuario) {

        mostrarMensaje(
            "El usuario o correo ingresado no existe.",
            "danger"
        );

        console.log(
            "Usuario no encontrado"
        );

        return;

    }

    if (usuario.password !== password) {

        mostrarMensaje(
            "La contraseña ingresada es incorrecta.",
            "danger"
        );

        console.log(
            "Contraseña incorrecta"
        );

        return;

    }

    localStorage.setItem(
        "usuarioActual",
        JSON.stringify(usuario)
    );


    mostrarMensaje(
        "Inicio de sesión correcto. Bienvenido " +
        usuario.nombre + ".",
        "success"
    );


    console.log(
        "Inicio de sesión correcto"
    );

});

recuperarPassword.addEventListener("click", function (event) {


    event.preventDefault();

    const correo =
        prompt("Ingresa tu correo @duoc.cl");


    if (correo === null) {

        return;

    }


    if (!correo.endsWith("@duoc.cl")) {

        mostrarMensaje(
            "Debes ingresar un correo @duoc.cl.",
            "danger"
        );

        return;

    }

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    const usuario =
        usuarios.find(function (usuario) {

            return usuario.correo === correo;

        });


    if (!usuario) {

        mostrarMensaje(
            "No existe una cuenta asociada a ese correo.",
            "danger"
        );

        return;

    }

    mostrarMensaje(
        "Cuenta encontrada. La recuperación de acceso ha sido simulada correctamente.",
        "success"
    );


});


function mostrarMensaje(texto, tipo) {


    mensajeLogin.textContent = texto;


    mensajeLogin.className =
        "alert alert-" + tipo + " mt-3";

}