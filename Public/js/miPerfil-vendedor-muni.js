

var myFile="";


$('#permisosTramoMiPerfil').on('change',function(){

  myFile = $("#permisosTramoMiPerfil").val();
    console.log(myFile);
  var upld = myFile.split('.').pop();
  if(upld=='pdf'){
    alert("File uploaded is pdf")
  }else{
    alert("Only PDF are allowed")
  }
 
})