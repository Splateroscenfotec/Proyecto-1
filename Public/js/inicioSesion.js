

//Referencia al DOM //

/*const btn_iniciar = document.querySelector("#iniciar");*/
//primer input nombre //
/*const txt_numero = document.querySelector("#identificacion");

const txt_contrasena = document.querySelector("#contrasena");

function ValidarCamposVacios() {                                                               
    let error = false;                                                                        
    let campos_requeridos = document.querySelectorAll("#iniciosesion [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {                                           
        if (campos_requeridos[i].value == "") {
            campos_requeridos[i].classList.add("error"); 
            error = true;
        } else {
            campos_requeridos[i].classList.remove("error");
        }  
    } 
    return error;
}

function ValidarIdentificacion() {
    let error = false;
    let tipoIdentificacion = document.querySelector("#tipo-identificacion").value;
    let numeroIdentificacion = document.querySelector("#identificacion").value;
    // Validar que el número de identificación esté en el formato correcto
    if (!/^[0-9]{9}$/.test(numeroIdentificacion)) {
        Swal.fire({
            title: "Formato incorrecto",
            text: "El número de identificación debe tener 9 dígitos",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
        error = true;
    }
    return error;
}

function ValidarContrasena() {
    let error = false;
    let contrasena = document.querySelector("#contrasena").value;
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
    txt_numero.value = "";
    txt_contrasena.value = "";
}

function validarFormulario() {
    let error = false;
    if (ValidarCamposVacios() || ValidarIdentificacion() || ValidarContrasena()) {
        error = true;
    }
    return !error;
}

document.querySelector("iniciar").addEventListener("clic", function (e) {
    e.preventDefault();
    if (validarFormulario()) {
        // Envía el formulario si pasa la validación
        this.submit();
    }
});*/



const btn_iniciar = document.querySelector("#btn-guardar");

//input correo//
const txt_identificacion = document.querySelector("#identificacion");
const txt_contrasena = document.querySelector("#contrasena");

//Validacion de campos vacios//
function ValidarCamposVacios() {                                                               
    let error =false;                                                                        
    let campos_requeridos = document.querySelectorAll("#contenedor [required]");
    for (let i=0;i<campos_requeridos.length;i++){                                           
        if(campos_requeridos[i].value== ""){
            campos_requeridos[i].classList.add("error"); 
            error=true;
        }else{
            campos_requeridos[i].classList.remove("error");
        }  
    } 
    return error;
}

function ValidarIdentificacion() {
    let error = false;
    let tipoIdentificacion = document.querySelector("#tipo-identificacion").value;
    let txt_identificacion = document.querySelector("#identificacion").value;
    // Validar que el número de identificación esté en el formato correcto
    if (!/^[0-9]{9}$/.test(numeroIdentificacion)) {
        Swal.fire({
            title: "Formato incorrecto",
            text: "El número de identificación debe tener 9 dígitos",
            icon: "warning",
            confirmButtonText: "Entendido!"
        });
        error = true;
    }
    return error;
}

function ValidarContrasena() {
    let error = false;
    let contrasena = document.querySelector("#contrasena").value;
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

function limpiarCampos(){
    txt_contrasena.value="";
    txt_identificacion.value="";
}


function principal() {
    let error_campos_vacios=ValidarCamposVacios();
    let error_identificacion = ValidarIdentificacion();
    let error_contrasena = ValidarContrasena();

    if(error_campos_vacios){
        Swal.fire({
            title: "Campos vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_identificacion){
        Swal.fire({
            title: "Identificación incorrecta",
            text: "Favor revisar la identificación, debe tener 9 dígitos, sin espacios",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_contrasena){
            Swal.fire({
                title: "Contraseña incorrecta",
                text: "Contraseña incorrecta",
                icon: "warning",
                confirmButtonText:"Entendido!"
              });
    }
    else{
        Swal.fire({
            title: "Información Correcta",
            text: "Su solicitud se envió correctamente",
            icon: "success",
          });
          limpiarCampos();
    }
}
btn_iniciar.addEventListener("click", principal);
