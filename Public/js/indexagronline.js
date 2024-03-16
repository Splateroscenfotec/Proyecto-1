const b_Buscador = document.getElementById("btn-Buscador");
let v_inputBuscador = document.getElementById("inputBuscador");

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


b_Buscador.addEventListener("click",buscar);