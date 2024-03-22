const b_Buscador = document.getElementById("btn-Buscador");
let v_inputBuscador = document.getElementById("inputBuscador");
const b_Buscador2 = document.getElementById("btn-Buscador2")
let v_inputBuscador2 = document.getElementById("inputBuscador2");

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

function buscar () {
    if(v_inputBuscador2.value == ""){
        Swal.fire({
            color: "#617c5c",
            title: "¿Buscas un producto?",
            text: "Por favor seleccione que desea buscar",
            showConfirmButton: false,
            showCloseButton: true,
          });
    }else{
        document.getElementById("resultadosBuscador").innerHTML = "resultadosBuscador";
    }

}

b_Buscador.addEventListener("click",buscar);
b_Buscador2.addEventListener("click",buscar);