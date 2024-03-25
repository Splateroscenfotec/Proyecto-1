document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.menu p');
    const tabContents = document.querySelectorAll('.tabcontent');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');

            const target = tab.dataset.target;
            tabContents.forEach(content => {
                if (content.id === target.slice(1)) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});


//Referencia al DOM //

const btn_reservar = document.querySelector("#btn-guardar");
//const btn_reservar_vendedor = document.querySelector("#btn-guardar-vendedor");

// Resto del código para los botones de guardar

//primer numero identificacion //
const txt_identificacion = document.querySelector("#identificacion");

//primer input nombre //
const txt_nombre = document.querySelector("#nombre");
const txt_apellidos = document.querySelector("#apellidos");

//input correo//
const txt_correo = document.querySelector("#email");
const txt_telefono = document.querySelector("#telefono");
const txt_contrasena = document.querySelector("#contrasena");

//Validacion de campos vacios//
function ValidarCamposVacios() {                                                               
    let error =false;                                                                        
    let campos_requeridos = document.querySelectorAll("#registro-form #registro-form-vendedor [required]");
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
    let numeroIdentificacion = document.querySelector("#identificacion").value;
    // Validar que el número de identificación esté en el formato correcto
    if (!/^[0-9]{9}$/.test(numeroIdentificacion)) {
        Swal.fire({
            title: "Formato incorrecto",
            text: "El número de identificación debe tener 9 dígitos",
            icon: "warning",
            confirmButtonText: "Ok"
        });
        error = true;
    }
    return error;
}

function ValidarNombre() {
    let error = false;
    let nombre = txt_nombre.value;
    let expresion =/^[a-zA-ZáéíóúñÑü]+/;
    if(expresion.test(nombre)==false){
        txt_nombre.classList.add("error");
        error=true;
    }else{
        txt_nombre.classList.remove("error");
    }

    return error;
}
function ValidarApellidos() {
    let error = false;
    let apellidos = txt_apellidos.value;
    let expresion = /^[a-zA-ZáéíóúñÑü]+/;
    if(expresion.test(apellidos)==false){
        txt_apellidos.classList.add("error");
        error=true;
    }else{
        txt_apellidos.classList.remove("error");
    }

    return error;
}

function ValidarEmail() {
    let error = false;
    let email = document.querySelector("#email").value;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!expresion.test(email)) {
        error = true;
    }
    return error;
}

function ValidarTelefono() {
    let error = false;
    let input_telefono = txt_telefono.value;
    let expression = /^[0-9]{4}-[0-9]{4}$/;//1111-1111 4329-8523
    if(expression.test(input_telefono)==false){
        txt_telefono.classList.add("error");
        error=true;
    }else{
        txt_telefono.classList.remove("error");
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
            confirmButtonText: "Ok"
        });
        error = true;
    }
    return error;
}

function limpiarCampos(){
    txt_nombre.value="";
    txt_apellidos.value="";
    txt_correo.value="";
    txt_telefono.value="";
    txt_contrasena.value="";
}

function principal() {
    let error_campos_vacios=ValidarCamposVacios();
    let error_identificacion = ValidarIdentificacion();
    let error_nombre = ValidarNombre();
    let error_apellidos = ValidarApellidos();
    let error_email = ValidarEmail();
    let error_telefono = ValidarTelefono();
    let error_contrasena = ValidarContrasena();

    if(error_campos_vacios){
        Swal.fire({
            title: "Campos vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText:"Ok"
          });
    }else if(error_identificacion){
        Swal.fire({
            title: "Identificación incorrecta",
            text: "Favor revisar la identificación, debe tener 9 dígitos",
            icon: "warning",
            confirmButtonText:"Ok"
          });
    }else if(error_nombre){
        Swal.fire({
            title: "Nombre incorrecto",
            text: "Favor revisar el nombre, solo se aceptan letras",
            icon: "warning",
            confirmButtonText:"Ok"
          });
    }else if(error_apellidos){
            Swal.fire({
                title: "Apellidos incorrecto",
                text: "Favor revisar el apellido, solo se aceptan letras",
                icon: "warning",
                confirmButtonText:"Ok"
              });
    }else if(error_email){
        Swal.fire({
            title: "Correo incorrecto",
            text: "Favor ingresar un email válido",
            icon: "warning",
            confirmButtonText:"Ok"
          });
    }else if(error_telefono){
        Swal.fire({
            title: "Teléfono incorrecto",
            text: "El teléfono debe cumplir con el formato:2222-2222",
            icon: "warning",
            confirmButtonText:"Ok"
          });
    }else if(error_contrasena){
            Swal.fire({
                title: "Contraseña incorrecta",
                text: "Contraseña incorrecta",
                icon: "warning",
                confirmButtonText:"Ok"
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

btn_reservar.addEventListener("click", principal);

