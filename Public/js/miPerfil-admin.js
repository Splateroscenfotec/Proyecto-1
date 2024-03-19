let v_claveMiPerfil = document.getElementById('claveMiPerfil');
let v_emailMiPerfil= document.getElementById('emailMiPerfil');
let v_telefonoMiPerfil = document.getElementById('telefonoMiPerfil');

function editarPerfil() {    
    document.getElementById('claveMiPerfil').style.display = 'block';  
    document.getElementById('claveMiPerfilOutput').style.display = 'none';  
    // document.getElementById('iniciarSesion').innerHTML = v_claveMiPerfil.value;
    document.getElementById('emailMiPerfil').style.display = 'block';  
    document.getElementById('emailMiPerfilOutput').style.display = 'none';  
    document.getElementById('telefonoMiPerfil').style.display = 'block';  
    document.getElementById('telefonoMiPerfilOutput').style.display = 'none';  
    document.getElementById('btn-GuardarMiPerfil').style.display = 'block';  
    document.getElementById('btn-EditarMiPerfil').style.display = 'none';      
  }
 
function ValidarEmail() {
    let error = false;
    let email_input = v_emailMiPerfil.value;
    let expresion = /^([a-zA-Z]{2,})(@)([a-zA-Z0-9]{2,})([.]{1})([a-zA-Z]{2,})$/;
    if(expresion.test(email_input)==false){
       v_emailMiPerfil.classList.add("error");
        error=true;
    }else{
       v_emailMiPerfil.classList.remove("error");
    }
    return error;
}

function ValidarTelefono() {
    let error = false;
    let input_telefono = v_telefonoMiPerfil.value;
    let expressionTelefono = /^[0-9]{4}-[0-9]{4}$/;//
    if(expressionTelefono.test(input_telefono)==false){
        v_telefonoMiPerfil.classList.add("error");
        error=true;
    }else{
        v_telefonoMiPerfil.classList.remove("error");
    }
    return error;
}  
  
function guardarPerfil (){
    let error_correo = ValidarEmail();
    let error_telefono = ValidarTelefono();    
    if ((v_claveMiPerfil.value=="") || v_emailMiPerfil.value==""||v_telefonoMiPerfil.value=="")  {
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
        document.getElementById('claveMiPerfilOutput').style.display = 'block';    
        document.getElementById("claveMiPerfilOutput").innerHTML = "****";
        // document.getElementById('iniciarSesion').innerHTML = v_claveMiPerfil.value;
        document.getElementById('claveMiPerfil').style.display = 'none';  
        document.getElementById('emailMiPerfil').style.display = 'none';  
        document.getElementById('emailMiPerfilOutput').style.display = 'block';  
        document.getElementById('emailMiPerfilOutput').innerHTML = v_emailMiPerfil.value;
        document.getElementById('telefonoMiPerfil').style.display = 'none';  
        document.getElementById('telefonoMiPerfilOutput').style.display = 'block';  
        document.getElementById('telefonoMiPerfilOutput').innerHTML = v_telefonoMiPerfil.value;
        document.getElementById('btn-GuardarMiPerfil').style.display = 'none';      
        document.getElementById('btn-EditarMiPerfil').style.display = 'block';  
    }
}
 
let loadFile = function (event) {
    let image = document.getElementById("fotoMiPerfilOutput");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

 
