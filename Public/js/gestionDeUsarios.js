const b_Buscador = document.getElementById("btn-Buscador");
let v_inputBuscador = document.getElementById("inputBuscador");
const btn_Usuarios = document.getElementById("btn-users")
let u_inputBuscador = document.getElementById("usuarioBuscar");
const btn_Guardar = document.getElementById("btn-Guardar")

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
    if(u_inputBuscador.value == ""){
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

function guardarCambios() {
    if(u_inputBuscador.value == ""){
        Swal.fire({
            color: "#617c5c",
            title: "Se aplicaran los cambios",
            text: "¿Estas seguro que quieres guardar los cambios?",
            showConfirmButton: false,
            showCloseButton: true,
        });
    }else{
        document.getElementById("resultadosBuscador").innerHTML = "resultadosBuscador";
    }
}

btn_Guardar.addEventListener("click", guardarCambios)

b_Buscador.addEventListener("click",buscar);

btn_Usuarios.addEventListener("click",buscarusuario);

// Esta funciona para que el enter tambien funcione para activar el mensaje de alerta 
u_inputBuscador.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        buscarusuario();
    }
});

let loadFile = function (event) {
    let image = document.getElementById("adjuntarFoto");
    image.src = URL.createObjectURL(event.target.files[0]);
  };