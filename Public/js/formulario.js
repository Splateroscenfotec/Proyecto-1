'use extrict'


const b_RegistrarUsuario = document.getElementById(btn-RegistrarUsuario)
const v_NumeroIdentificacion = document.getElementById('inputNumeroIdentificacion');
const v_Nombre = document.getElementById('inputNombre');
const v_Apellido = document.getElementById('inputApellido');    
const v_CorreoElectronico = document.getElementById('inputCorreoElectronico');
const v_Telefono = document.getElementById('inputTelefono');

function ValidarCamposVacios() {
    let error = false;
    let camposRequeridos=document.querySelectorAll("#formularioCuenta [required]");
    for(let i=0;i<camposRequeridos.length;i++){
        if(camposRequeridos[i].value == ""){
            camposRequeridos[i].classList.add("error");
            error=true;
        }else{
            camposRequeridos[i].classList.remove("error");
        }
    } 
    return error;
}

function ValidarNombre() {
    let error = false;
    let input_nombre = v_Nombre.value;
    let expresion =/^[a-zA-ZáéíóúñÑü]+/;
    if(expresion.test(input_nombre)==false){
        v_Nombre.classList.add("error");
        error=true;
    }else{
        v_Nombre.classList.remove("error");
    }
    return error;
}

function ValidarApellidos() {
    let error = false;
    let input_apellido = v_Apellido.value;
    let expresion =/^[a-zA-ZáéíóúñÑü]+/;
    if(expresion.test(input_apellido)==false){
        v_Apellido.classList.add("error");
        error=true;
    }else{
        v_Apellido.classList.remove("error");
    }
    return error;
}

function ValidarEmail() {
    let error = false;
    let input_email = v_CorreoElectronico.value;
    let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(expresion.test(input_email)==false){
        v_CorreoElectronico.classList.add("error");
        error=true;
    }else{
        v_CorreoElectronico.classList.remove("error");
    }
    return error;
}

function ValidarIdentificacion() {
    let error = false;
    let input_identificacion = v_NumeroIdentificacion.value;
    let expression = /^[0-9]{1}-[0-9]{4}-[0-9]{4}$/;//1-2345-6789
    if(expression.test(input_identificacion)==false){
        v_NumeroIdentificacion.classList.add("error");
        error=true;
    }else{
        v_NumeroIdentificacion.classList.remove("error");
    }
    return error;
}

function ValidarTelefono() {
    let error = false;
    let input_telefono = v_Telefono.value;
    let expression = /^[0-9]{4}-[0-9]{4}$/;//1111-1111 4329-8523
    if(expression.test(input_telefono)==false){
        v_Telefono.classList.add("error");
        error=true;
    }else{
        v_Telefono.classList.remove("error");
    }
    return error;
}

function LimpiarCampos() {
    v_NumeroIdentificacion.value="";
    v_Nombre .value="";
    v_Apellido.value="";
    v_CorreoElectronico.value="";
    v_Telefono .value="";
}

function principal() {
    let error_campos_vacios=ValidarCamposVacios();
    let error_identificacion = ValidarIdentificacion();
    let error_nombre = ValidarNombre();
    let error_apellido = ValidarApellidos();
    let error_correo = ValidarEmail();
    let error_telefono = ValidarTelefono();    
    if(error_campos_vacios){
        Swal.fire({
            title: "Campos vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_nombre){
        Swal.fire({
            title: "Nombre incorrecto",
            text: "Favor revisar el nombre, solo se aceptan letras",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_apellido){
        Swal.fire({
            title: "Correo incorrecto",
            text: "Favor ingresar un email válido",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_identificacion){
        Swal.fire({
            title: "Correo incorrecto",
            text: "Favor ingresar un email válido",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_correo){
        Swal.fire({
            title: "Correo incorrecto",
            text: "Favor ingresar un email válido",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }else if(error_telefono){
        Swal.fire({
            title: "Teléfono incorrecto",
            text: "El teléfono debe cumplir con el formato:2222-2222",
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

  

btn-RegistrarUsuario.addEventListener("click",principal);