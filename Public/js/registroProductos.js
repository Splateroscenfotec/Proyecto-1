const nombreP = document.querySelector("#nombre")
const descripcionP = document.querySelector("#descripcion")
const inventarioP = document.querySelector("#inventario")
const precioP = document.querySelector("#precio")
const cantidadP = document.querySelector("#cantidad")
const impuestosP = document.querySelector("#impuestos")
const registrabtn = document.querySelector("#botonRegistrar")
const editarbtn = document.querySelector("#botonEditar")
const eliminarbtn = document.querySelector("#botonEliminar")


function limpiarCampos() {
    nombreP.value="";
    descripcionP.value="";
    inventarioP.value="";
    precioP.value="";
    cantidadP.value="";
    impuestosP.value="";
}
/*-----------------------------Esta funcion verifica los campos en el formulario-----------------------*/
function ValidarCampos() {
    let error = true;
    let campos_requeridos = document.querySelectorAll("#registrarProductos [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {
      if (campos_requeridos[i].value !== "") {
        campos_requeridos[i].classList.remove("error");
      } else {
        campos_requeridos[i].classList.add("error");
        error = false;
      }
    }
    return error;
  }
/*-----------------------------Esta funcion verifica que no hayan campos vacios en el formulario-----------------------*/
function ValidarCamposVacios() { 
    let error = false;
    let campos_requeridos=document.querySelectorAll("#registrarProductos [required]");
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

/*-----------------------------Esta funcion verifica el nombre-----------------------*/
function validarnombre(){
    let error = false; 
    let validarNombre = nombreP.value;
    let expression =/^[a-zA-ZáéíóúñÑü]+$/;
    if (expression.test(validarNombre)==false) {
        nombreP.classList.add("error");
        error=true;    
    }
    else{
        nombreP.classList.remove("error");
    }
    return error;
}

/*-----------------------------Esta funcion verifica la descripción -----------------------*/
function validarDescripcion(){
    let error = false; 
    let validarNombre = descripcionP.value;
    let expression =/^[a-zA-ZáéíóúñÑü\s]+/
    if (expression.test(validarNombre)==false) {
        descripcionP.classList.add("error");
        error=true;    
    }
    else{
        descripcionP.classList.remove("error");
    }
    return error;
}



/*-----------------------------Esta funcion verifica el precio -----------------------*/
function validarPrecio() {
    let error = false;
    let precioProducto = precioP.value;
    let expression = /^[0-9]+$/;
    if(expression.test(precioProducto)==false){
        precioP.classList.add("error");
        error=true;
    }else{
        precioP.classList.remove("error");
    }
    return error;
}

/*-----------------------------Esta funcion verifica los impuestos-----------------------*/

function validarImpuesto() {
    let error = false;
    let impuestosProducto = impuestosP.value;
    let expression = /^[0-9]{1,2}(\.[0-9]{1,2})?%$/;
    if(expression.test(impuestosProducto)==false){
        impuestosP.classList.add("error");
        error=true;
    }else{
        impuestosP.classList.remove("error");
    }
    return error;
}



/* --------------Esta funcion se encarga de ejecutar las funciones de registro y arrojar el mensaje de error o validación--------------------------*/
function principalRegistro() {
    let error_campos_vacios= ValidarCamposVacios();
    let errorEnNombre = validarnombre();
    let errorEnDescripcion = validarDescripcion();
    let errorEnPrecio = validarPrecio();
    let errorEnImpuestos = validarImpuesto();

    if(error_campos_vacios){
        Swal.fire({
            title: "Campos vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }
    else if (errorEnNombre) {
        Swal.fire({
            title: "El nombre de producto",
            text: "Debe usar unicamente letras",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });
    }
    else if (errorEnDescripcion) {
        Swal.fire({
            title: "El nombre de la descripción",
            text: "Debe usar unicamente letras",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });
    }
    else if (errorEnPrecio) {
        Swal.fire({
            title: "En el precio",
            text: "Debe usar unicamente números",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });         
    }
    else if (errorEnImpuestos) {
        Swal.fire({
            title: "En los impuestos",
            text: "Debe usar unicamente números y el signo de porcentaje",
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
/* --------------Esta funcion se encarga de ejecutar las funciones de edicion y arrojar el mensaje de error o validación--------------------------*/

function principalEditar() {
    let error_campos= ValidarCampos();
    let errorEnNombre = validarnombre();
    let errorEnDescripcion = validarDescripcion();
    let errorEnPrecio = validarPrecio();
    let errorEnImpuestos = validarImpuesto();

    if(error_campos){
        Swal.fire({
            title: "Alerta",
            text: "Seleccionaste edición de productos existentes",
            icon: "warning",
            confirmButtonText:"Entendido!"
          });
    }
    else if (errorEnNombre) {
        Swal.fire({
            title: "El nombre de producto",
            text: "Debe usar unicamente letras",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });
    }
    else if (errorEnDescripcion) {
        Swal.fire({
            title: "El nombre de la descripción",
            text: "Debe usar unicamente letras",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });
    }
    else if (errorEnPrecio) {
        Swal.fire({
            title: "En el precio",
            text: "Debe usar unicamente números",
            icon: "warning",
            confirmButtonText:"Entendido!"
        });         
    }
    else if (errorEnImpuestos) {
        Swal.fire({
            title: "En los impuestos",
            text: "Debe usar unicamente números y el signo de porcentaje",
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
              
            }  
    }

/* --------------Esta funcion se encarga de ejecutar las funciones de eliminar y arrojar el mensaje de error o validación--------------------------*/

function principalEliminar(){
    Swal.fire({
        title: "¿Estas seguro que quieres continuar?",
        text: "Seleccionaste eliminar un producto existente",
        icon: "warning",
        confirmButtonText:"Entendido!"
      })
}
    /* --------------Esto funciona para subir imagenes--------------------------*/

    let loadFile = function (event) {
        let image = document.getElementById("adjuntarFoto");
        image.src = URL.createObjectURL(event.target.files[0]);
      };

registrabtn.addEventListener("click", principalRegistro);
editarbtn.addEventListener("click", principalEditar);
eliminarbtn.addEventListener("click", principalEliminar)