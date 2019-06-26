


$( "#btn_Login" ).click(function( event ) {
	
	var userName = $("#txt_userName").val();
	var password = $("#txt_password").val();

 if(userName == "worker" || userName == "driver"){
	  window.location.replace("https://localhost/rep/gis/index.html");
 }
 else if (userName == "gov"){
	  window.location.replace("https://localhost/rep/gis/index.html");
 }
 

 
});
