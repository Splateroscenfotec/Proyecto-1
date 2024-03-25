"use strict";
//Referencia al DOM
const btn_reservar = document.querySelector("#btn-guardar");
const txt_nombre = document.querySelector("#nombreCompleto");
const txt_fechaEntrada = document.querySelector("#fechaEntrada");
const txt_fechaSalida = document.querySelector("#fechaSalida");
const txt_correo = document.querySelector("#correo");
const txt_telefono = document.querySelector("#telefono");
//validar si hay campos vacios
function ValidarCamposVacios() {
    //declara una variable para almacenar si hay un error
    //la función va a obtener todos los campos "required"
    //recorrer cada campo para revisar si esta vacio o no
    //si el campo esta vacío la variable de error cambia a true
    //la función devuelve un true si hay error o un false si no hay error
    let error = false;
    let campos_requeridos=document.querySelectorAll("#form-reservar [required]");
    for(let i=0;i<campos_requeridos.length;i++){
        if(campos_requeridos[i].value == ""){
            campos_requeridos[i].classList.add("error");
            error=true;
        }else{
            campos_requeridos[i].classList.remove("error");
        }
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
function ValidarEmail() {
    //declarar la variable de error e inicilizarla como falsa
    //tener la referencia al input en html
    //construir la expresión regular para validar el input
    //validar lo que el usuario escribió usando la expreción regular
    //si hay error colocar la clase de error utilizando "classList.add"
    //si no hay error remover la clase de error utilizando "classList.remove"
    let error = false;
    let email_input = txt_correo.value;
    let expresion = /^([a-zA-Z]{2,})([.]{1})([a-zA-Z]{2,})(@)([a-zA-Z0-9]{2,})([.]{1})([a-zA-Z]{2,})$/;
    if(expresion.test(email_input)==false){
        txt_correo.classList.add("error");
        error=true;
    }else{
        txt_correo.classList.remove("error");
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
function ValidarFecha() {
    let error=false;
    let input_fecha_entrada = txt_fechaEntrada.value;
    let input_fecha_salida = txt_fechaSalida.value;
    if (new Date(input_fecha_entrada) > new Date(input_fecha_salida)){
        txt_fechaEntrada.classList.add("error");
        txt_fechaSalida.classList.add("error");
        error=true;
    }else{
        txt_fechaEntrada.classList.remove("error");
        txt_fechaSalida.classList.remove("error");
    }
    return error;
}
function limpiarCampos() {
    txt_nombre.value="";
    txt_fechaEntrada.value="";
    txt_fechaSalida.value="";
    txt_correo.value="";
    txt_telefono.value="";
}
function principal() {
    let error_campos_vacios=ValidarCamposVacios();
    let error_nombre = ValidarNombre();
    let error_correo = ValidarEmail();
    let error_telefono = ValidarTelefono();
    let error_fecha = ValidarFecha();
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
    }else if(error_fecha){
        Swal.fire({
            title: "Fecha incorrecta",
            text: "La fecha de entrada no puede ser mayor que la fecha de",
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
btn_reservar.addEventListener("click",principal);