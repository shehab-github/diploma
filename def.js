


$( "#btn_Login" ).click(function( event ) {
	
	var userName = $("#txt_userName").val();
	var password = $("#txt_password").val();

 var url = window.location.protocol + "///" window.location.host + "//" + window.location.pathname.split('/')[0];
 
 if(userName == "worker" || userName == "driver"){
	 
	  window.location.replace(url);
 }
 else if (userName == "gov"){
	  window.location.replace(url);
 }
 

 
});
