const boton_iniciar = document.querySelector("#btn_iniciar");
const varidentificacion = document.querySelector("#identificacion");
const varcontrasena = document.querySelector("#contrasena");
const camposRequeridos = document.querySelectorAll(".formCampo [required]");

function ValidarCamposVacios() {
    let errorCamposVacios = false;
    camposRequeridos.forEach(campo => {
        if (campo.value.trim() === "") {
            errorCamposVacios = true;
            campo.classList.add("error");
        } else {
            campo.classList.remove("error");
        }
    });
    return errorCamposVacios;
}

function ValidarIdentificacion() {
    let error = false;
    let tipoIdentificacion = document.querySelector("#drop-down").value;
    let numeroIdentificacion = varidentificacion.value.trim();
    // Validar que el número de identificación esté en el formato correcto
    if (tipoIdentificacion === "Cédula" && !/^\d{1}-\d{3}-\d{3}$/.test(numeroIdentificacion)) {
        Swal.fire({
            title: "Formato incorrecto",
            text: "El número de identificación debe tener el formato 0-000-000",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
        error = true;
    }
    return error;
}

function ValidarContrasena() {
    let error = false;
    let contrasena = varcontrasena.value.trim();
    // Validar que la contraseña cumpla con las características requeridas
    if (contrasena.length > 8 || !/[a-zA-Z]/.test(contrasena) || !/\d/.test(contrasena)) {
        Swal.fire({
            title: "Contraseña incorrecta",
            text: "La contraseña debe tener máximo 8 caracteres, al menos 1 letra y 1 número",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
        error = true;
    }
    return error;
}

function limpiarCampos() {
    varidentificacion.value = "";
    varcontrasena.value = "";
}

function principal() {
    let errorCamposVacios = ValidarCamposVacios();
    let errorIdentificacion = ValidarIdentificacion();
    let errorContrasena = ValidarContrasena();

    if (errorCamposVacios) {
        Swal.fire({
            title: "Campos vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
    } else if (errorIdentificacion) {
        Swal.fire({
            title: "Identificación incorrecta",
            text: "Favor revisar la identificación, debe tener el formato 0-000-000",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
    } else if (errorContrasena) {
        Swal.fire({
            title: "Contraseña incorrecta",
            text: "La contraseña debe tener máximo 8 caracteres, al menos 1 letra y 1 número",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
    } else {
        Swal.fire({
            title: "Información Correcta",
            text: "Su solicitud se envió correctamente",
            icon: "success",
        });
        limpiarCampos();
    }
}

boton_iniciar.addEventListener("click", principal);
