const registroForm =
    document.getElementById("registroForm");

const agregarMascota =
    document.getElementById("agregarMascota");

const listaMascotas =
    document.getElementById("listaMascotas");

const mensajeRegistro =
    document.getElementById("mensajeRegistro");

const botonesEliminar =
    document.querySelectorAll(".eliminarMascota");


botonesEliminar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const mascota =
            boton.closest(".mascota-box");

        mascota.remove();

    });

});


agregarMascota.addEventListener("click", function () {

    const mascotaBox =
        document.createElement("div");


    mascotaBox.classList.add("mascota-box");

    mascotaBox.innerHTML = `

        <label class="form-label">

            NOMBRE COMPLETO

        </label>


        <input
            type="text"
            class="form-control nombreMascota"
            maxlength="50">


        <div class="mt-2">

            <label class="form-label">

                TIPO

            </label>


            <select class="form-select tipoMascota">

                <option value="">

                    Seleccione un tipo de mascota

                </option>


                <option value="Perro">

                    Perro

                </option>


                <option value="Gato">

                    Gato

                </option>


                <option value="Ave">

                    Ave

                </option>


                <option value="Otro">

                    Otro

                </option>

            </select>

        </div>


        <div class="mensaje-error errorMascota">

        </div>


        <button
            type="button"
            class="btn btn-outline-dark btn-sm eliminarMascota">

            ELIMINAR

        </button>


        <div class="clearfix"></div>

    `;

    listaMascotas.appendChild(mascotaBox);

    const botonEliminar =
        mascotaBox.querySelector(".eliminarMascota");


    botonEliminar.addEventListener("click", function () {

        mascotaBox.remove();

    });

});


function validarNombre(nombre) {

    if (nombre.trim() === "") {

        return "El nombre completo es obligatorio.";

    }

    if (nombre.length > 50) {

        return "El nombre no puede superar los 50 caracteres.";

    }

    const patron =
        /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;


    if (!patron.test(nombre)) {

        return "El nombre solo puede contener letras y espacios.";

    }


    return "";

}

function validarCorreo(correo) {

    if (correo.trim() === "") {

        return "El correo es obligatorio.";

    }

    if (!correo.endsWith("@duoc.cl")) {

        return "El correo debe utilizar @duoc.cl.";

    }

    const patron =
        /^[^\s@]+@duoc\.cl$/;


    if (!patron.test(correo)) {

        return "Ingresa un correo válido.";

    }


    return "";

}

function validarPassword(password) {

    if (password.length < 8) {

        return "La contraseña debe tener al menos 8 caracteres.";

    }

    if (!/[A-Z]/.test(password)) {

        return "La contraseña debe tener una letra mayúscula.";

    }

    if (!/[a-z]/.test(password)) {

        return "La contraseña debe tener una letra minúscula.";

    }

    if (!/[0-9]/.test(password)) {

        return "La contraseña debe tener un número.";

    }

    if (!/[!@#$%^&*]/.test(password)) {

        return "La contraseña debe tener un carácter especial.";

    }


    return "";

}


function validarTelefono(telefono) {

    if (telefono.trim() === "") {

        return "";

    }

    const patron =
        /^\+?56[0-9]{9}$/;


    if (!patron.test(telefono)) {

        return "Ingresa un teléfono válido. Ejemplo: +56912345678.";

    }


    return "";

}


function obtenerMascotas() {


    const mascotas = [];

    const cajasMascota =
        document.querySelectorAll(".mascota-box");


    let hayError = false;


    cajasMascota.forEach(function (caja) {

        const nombre =
            caja
                .querySelector(".nombreMascota")
                .value
                .trim();

        const tipo =
            caja
                .querySelector(".tipoMascota")
                .value;

        const error =
            caja.querySelector(".errorMascota");

        error.textContent = "";

        if (nombre === "") {

            error.textContent =
                "El nombre de la mascota es obligatorio.";

            hayError = true;

        }

        else if (nombre.length > 50) {

            error.textContent =
                "El nombre no puede superar los 50 caracteres.";

            hayError = true;

        }

        else if (tipo === "") {

            error.textContent =
                "Debes seleccionar un tipo de mascota.";

            hayError = true;

        }

        else {

            const mascota = {

                nombre: nombre,

                tipo: tipo

            };

            mascotas.push(mascota);

        }

    });


    return {

        mascotas: mascotas,

        hayError: hayError

    };

}


function mostrarMensaje(texto, tipo) {


    mensajeRegistro.textContent = texto;


    mensajeRegistro.className =
        "alert alert-" + tipo + " mt-3";

}


registroForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value.trim();


    const correo =
        document.getElementById("correo").value.trim();


    const password =
        document.getElementById("password").value;


    const confirmPassword =
        document.getElementById("confirmPassword").value;


    const telefono =
        document.getElementById("telefono").value.trim();

    document.getElementById("errorNombre").textContent = "";

    document.getElementById("errorCorreo").textContent = "";

    document.getElementById("errorPassword").textContent = "";

    document.getElementById("errorConfirmPassword").textContent = "";

    document.getElementById("errorTelefono").textContent = "";

    const errorNombre =
        validarNombre(nombre);


    const errorCorreo =
        validarCorreo(correo);


    const errorPassword =
        validarPassword(password);


    const errorTelefono =
        validarTelefono(telefono);

    if (errorNombre !== "") {

        document.getElementById("errorNombre").textContent =
            errorNombre;

    }

    if (errorCorreo !== "") {

        document.getElementById("errorCorreo").textContent =
            errorCorreo;

    }

    if (errorPassword !== "") {

        document.getElementById("errorPassword").textContent =
            errorPassword;

    }

    if (password !== confirmPassword) {

        document.getElementById("errorConfirmPassword").textContent =
            "Las contraseñas no coinciden.";

    }

    if (errorTelefono !== "") {

        document.getElementById("errorTelefono").textContent =
            errorTelefono;

    }

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente =
        usuarios.find(function (usuario) {

            return usuario.correo === correo;

        });


    if (usuarioExistente) {

        document.getElementById("errorCorreo").textContent =
            "Este correo ya está registrado.";

    }

    const resultadoMascotas =
        obtenerMascotas();


    const mascotas =
        resultadoMascotas.mascotas;


    const hayErrorMascotas =
        resultadoMascotas.hayError;

    const cajasMascota =
        document.querySelectorAll(".mascota-box");


    if (cajasMascota.length === 0) {

        mostrarMensaje(
            "Debes registrar al menos una mascota.",
            "danger"
        );

        return;

    }

    if (
        errorNombre !== "" ||
        errorCorreo !== "" ||
        errorPassword !== "" ||
        errorTelefono !== "" ||
        password !== confirmPassword ||
        usuarioExistente ||
        hayErrorMascotas
    ) {

        return;

    }

    const nuevoUsuario = {

        nombre: nombre,

        correo: correo,

        password: password,

        telefono: telefono,

        mascotas: mascotas

    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mostrarMensaje(
        "Registro realizado correctamente.",
        "success"
    );

    console.log(
        "Usuario registrado:",
        nuevoUsuario
    );


    console.log(
        "Mascotas registradas:",
        mascotas
    );

});