// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#todo').on('tap', function(){
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.74/icascatalogo/buscartodos.php",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
		   alert (resultado);
		  }
	  });
	});
}); 
});

