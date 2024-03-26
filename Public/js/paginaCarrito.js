const varTarjeta = document.querySelector("#tarjeta");
const varExpiracion = document.querySelector("#expiracion");
const varSeguridad = document.querySelector("#seguridad");
const boton_pagar = document.querySelector("#btn-pagar")
const camposRequeridos = document.querySelectorAll(".formTarjeta [required]")

function ValidarCamposVacios() {
    let errorCamposVacios = false;
  
    for (let i = 0; i < camposRequeridos.length; i++) {
      if (camposRequeridos[i].value === "") {
        errorCamposVacios = true;
        camposRequeridos[i].classList.add("error");
        return errorCamposVacios;
      } else {
        camposRequeridos[i].classList.remove("error");
      }
    }
  
    return errorCamposVacios;
  }

function ValidarLongitudTarjeta() {
  let errorLongitudTarjeta = false;

  if (varTarjeta.value.length !== 16) {
    errorLongitudTarjeta = true;
    varTarjeta.classList.add("error");
  } else {
    varTarjeta.classList.remove("error");
  }

  return errorLongitudTarjeta;
}

function ValidarFormatoExpiracion() {
  let errorFormatoExpiracion = false;

  const regexExpiracion = /^([0-1]?[0-9])\/([2-9]\d)$/;

  if (!regexExpiracion.test(varExpiracion.value)) {
    errorFormatoExpiracion = true;
    varExpiracion.classList.add("error");
  } else {
    varExpiracion.classList.remove("error");
  }

  return errorFormatoExpiracion;
}

function ValidarCodigoSeguridad() {
    let errorCodigoSeguridad = false;
    const regexNumero = /^[0-9]+$/;
  
    if (!varSeguridad.value) {
      errorCodigoSeguridad = true;
      varSeguridad.classList.add("error");
      return errorCodigoSeguridad;
    }
  
    if (varSeguridad.value.length > 3) {
      errorCodigoSeguridad = true;
      varSeguridad.classList.add("error");
      return errorCodigoSeguridad;
    }
  
    if (!regexNumero.test(varSeguridad.value)) {
      errorCodigoSeguridad = true;
      varSeguridad.classList.add("error");
    } else {
      varSeguridad.classList.remove("error");
    }
  
    return errorCodigoSeguridad;
  }

function principal() {
  let error_Campos_Vacios = ValidarCamposVacios();
  let error_Longitud_Tarjeta = ValidarLongitudTarjeta();
  let error_Formato_Expiracion = ValidarFormatoExpiracion();
  let error_Codigo_Seguridad = ValidarCodigoSeguridad();
  
  let mensajeError = "";
  
  if (error_Campos_Vacios) {
    mensajeError = "Debe completar todos los campos vacíos";
  } else if (error_Longitud_Tarjeta) {
    mensajeError = "El número de tarjeta debe tener 16 caracteres";
  } else if (error_Formato_Expiracion) {
    mensajeError = "La fecha de expiración debe tener el formato MM/YY";
  } else if (error_Codigo_Seguridad) {
    mensajeError = "El código de seguridad debe ser un número de 3 numeros";
  }
  
  if (mensajeError !== "") {
    Swal.fire({
        title: "Campos Inválidos",
        text: mensajeError,
        icon: "warning",
        confirmButtonText: "Entendido",
        
      });
    } else {
      Swal.fire({
        title: "Información Correcta",
        text: "Su solicitud se envió correctamente",
        icon: "success",
        confirmButtonText: "Entendido",
      });
    }
  }

boton_pagar.addEventListener("click", principal);