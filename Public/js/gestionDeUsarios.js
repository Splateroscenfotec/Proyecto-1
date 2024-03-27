const b_Buscador = document.getElementById("btn-Buscador");
const b_Borrar = document.getElementById("btn-Borrar")
const b_Usuarios = document.getElementById("btn-users")
const b_Agregar = document.getElementById("btn-AgregarNuevoUsuario")
let v_inputBuscador = document.getElementById("inputBuscador");
let nombreTxt = document.getElementById("nombreCompleto");
let cedulaTxt = document.getElementById("cedula");
let telefonoTxt = document.getElementById("telefonoPerfil");
let emailTxt = document.getElementById("Email");




function editarPerfil() {    
    document.getElementById('nombreCompleto').style.display = 'block';  
    document.getElementById('nombreCompletoOutput').style.display = 'none';  

    document.getElementById('cedula').style.display = 'block';  
    document.getElementById('cedulaOutput').style.display = 'none';  

    document.getElementById('telefonoPerfil').style.display = 'block';  
    document.getElementById('telefonoPerfilOutput').style.display = 'none';  

    document.getElementById('Email').style.display = 'block';  
    document.getElementById('emailOutput').style.display = 'none';  

    document.getElementById('btn-GuardarMiPerfil').style.display = 'block';  
    document.getElementById('btn-EditarMiPerfil').style.display = 'none';      
  }

  function ValidarEmail() {
    let error = false;
    let email_input = emailTxt.value;
    let expresion =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(expresion.test(email_input)==false){
        emailTxt.classList.add("error");
        error=true;
    }else{
        emailTxt.classList.remove("error");
    }
    return error;
}

function ValidarTelefono() {
    let error = false;
    let input_telefono = telefonoTxt.value;
    let expressionTelefono = /^[0-9]{4}-[0-9]{4}$/;//
    if(expressionTelefono.test(input_telefono)==false){
        telefonoTxt.classList.add("error");
        error=true;
    }else{
        telefonoTxt.classList.remove("error");
    }
    return error;
}  
function guardarPerfil (){
    let error_correo = ValidarEmail();
    let error_telefono = ValidarTelefono();
    if ((nombreTxt.value=="") || cedulaTxt.value==""||telefonoTxt.value=="" || emailTxt.value==""  )  {
    swal.fire({
        icon: "warning",
        iconColor: "#f7953e",
        text: "Por favor complete todos los campos editables",
        confirmButtonColor: '#465b4f',
    })
    }else if(error_correo){
        Swal.fire({
            title: "Correo incorrecto",
            text: "Favor ingresar un email válido",
            icon: "warning",
            iconColor: "#f7953e",
            confirmButtonColor: '#465b4f',
        });
    }else if(error_telefono){
        Swal.fire({
            title: "Teléfono incorrecto",
            text: "El teléfono debe cumplir con el formato:1234-5678",
            icon: "warning",
            iconColor: "#f7953e",
            confirmButtonColor: '#465b4f',
        });
    }else{
        document.getElementById('nombreCompletoOutput').style.display = 'block';
        document.getElementById("nombreCompletoOutput").innerHTML = nombreTxt.value;
        document.getElementById('nombreCompleto').style.display = 'none';

        document.getElementById('cedula').style.display = 'none';
        document.getElementById('cedulaOutput').style.display = 'block';
        document.getElementById('cedulaOutput').innerHTML = cedulaTxt.value;

        document.getElementById('telefonoPerfil').style.display = 'none';
        document.getElementById('telefonoPerfilOutput').style.display = 'block';
        document.getElementById('telefonoPerfilOutput').innerHTML = telefonoTxt.value;

        document.getElementById('Email').style.display = 'none';
        document.getElementById('emailOutput').style.display = 'block';
        document.getElementById('emailOutput').innerHTML = emailTxt.value;

        // Show alert for successful save
        Swal.fire({
          icon: "success",
          iconColor: "#28a745",
          text: "Cambios guardados correctamente.",
          confirmButtonColor: '#465b4f',
        });
    }
}


function buscar () {
    if(v_inputBuscador.value == ""){
        Swal.fire({
            color: "#617c5c",
            title: "¿Estás buscando algo?",
            text: "Por favor ingrese lo que desea encontrar",
            showConfirmButton: false,
            showCloseButton: true,
          });
    }else{
        document.getElementById("resultadosBuscador").innerHTML = "resultadosBuscador";
    }

}
function buscarusuario() {
    if(v_inputBuscador.value == ""){
        Swal.fire({
            color: "#617c5c",
            title: "¿Buscas a alguien?",
            text: "Por favor ingrese el nombre de usuario",
            showConfirmButton: false,
            showCloseButton: true,
        });
    }else{
        document.getElementById("resultadosBuscador").innerHTML = "resultadosBuscador";
    }
}   


// Esta funciona para que el enter tambien funcione para activar el mensaje de alerta 
v_inputBuscador.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        buscarusuario();
    }
});

let loadFile = function (event) {
    let image = document.getElementById("adjuntarFoto");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  function principalEliminar() {
    Swal.fire({
      title: "¿Estás seguro que quieres continuar?",
      text: "Seleccionaste eliminar el perfil de usuario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Code to execute when the user clicks the "Sí, eliminar" button
        Swal.fire("¡Perfil eliminado!", "Tu perfil ha sido eliminado correctamente.", "success");
      }
    });
  }

  function agregarUsuario() {
    Swal.fire({
        title: "¿Estás seguro que quieres continuar?",
        text: "Seleccionaste agregar un usuario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, agregar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Code to execute when the user clicks the "Sí, eliminar" button
          Swal.fire("¡El usuario se ha agregado!", "Tu perfil ha sido agregado correctamente.", "success");
        }
      });
    }
b_Buscador.addEventListener("click",buscar);

b_Usuarios.addEventListener("click",buscarusuario);
b_Borrar.addEventListener("click",principalEliminar);
b_Agregar.addEventListener("click", agregarUsuario);