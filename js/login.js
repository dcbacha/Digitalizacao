$("#login").click(function(){

	


	var dados = [];

	var email = $("#inputEmail").val();
	var senha = $("#inputPassword").val();

	var login = {
		email: email,
		senha: senha
	};

	var table = JSON.stringify(login);
	var tablejson = {"dados" : table }; 
	console.log(tablejson);

	$.ajax({
	        type: 'POST',
	        dataType: 'html',
	        url: 'login.php',
	        data:  tablejson,
			error: function() {
				console.log("erro, nao transmitiu")

				$("#erroLogin").stop().slideDown(250);
				
				setTimeout(function(){
				$("#erroLogin").stop().slideUp(250);
				}, 2500);

				},
	        success: function(data) {
	        	console.log("transmitidos com sucesso!");
				console.log(data);
					if(data == 0){
        				console.log("Logado com Sucesso!");
        				window.location.replace("http://localhost/Digitalizacao/paginainicial.php");


    				}else if(data == 1){
       					console.log("Erro no login!");

       					$("#erroLogin2").stop().slideDown(250);
				
						setTimeout(function(){
						$("#erroLogin2").stop().slideUp(250);
						}, 2500);

    				} else{
    					console.log(data.status);
    					//console.log(data);
    				}
	        	}
			})
			.done(function(data){
				console.log("finalizado!");
				//$("#spinner").toggle();
				});


return false;
});