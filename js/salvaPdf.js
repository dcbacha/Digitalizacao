$("#buttonPdfMobile").click(function(){

	


/*	var dadosTabela = [];

	var fecha_de_emision = $("#tabelaMobile tr:even li:eq(0)").html().split(": ")[1];
	var orden_de_pago = $("#tabelaMobile tr:even li:eq(1)").html().split(": ")[1];

	var login = {
		email: fecha_de_emision,
		senha: orden_de_pago
	};

	var table = JSON.stringify(login);
	var tablejson = {"dados" : table }; 
	console.log(tablejson); */

	var dadosTabela = [];

	var fecha_de_emision = $("#tabelaMobile tr:even li:eq(0)").html().split(": ")[1];
	var orden_de_pago = $("#tabelaMobile tr:even li:eq(1)").html().split(": ")[1];
		var estado = $("#tabelaMobile tr:even li:eq(2)").html().split(": ")[1];
		var credor = $("#tabelaMobile tr:even li:eq(3)").html().split(": ")[1];
		var empresa = $("#tabelaMobile tr:even li:eq(4)").html().split(": ")[1];
		var cheque = $("#tabelaMobile tr:even li:eq(5)").html().split(": ")[1];
		var ruc = $("#tabelaMobile tr:even li:eq(6)").html().split(": ")[1];
		

		console.log(fecha_de_emision);
		console.log(orden_de_pago);
		console.log(estado);
		console.log(credor);
		console.log(empresa);
		console.log(cheque);
		console.log(ruc);

		//console.log(i);

		var dados = {
			"fecha_de_emision": fecha_de_emision,
			"orden_de_pago": orden_de_pago,
			"estado": estado,
			"credor": credor,
			"empresa": empresa,
			"cheque": cheque,
			"ruc": ruc,
		};

		//dadosTabela.push(dados);
	//}
	dadosTabela = JSON.stringify(dados);

	console.log(dadosTabela);

	var pdf = {"dados": dadosTabela};

	//pdf = JSON.stringify(pdf);


	console.log(pdf); 

	$.ajax({
	        type: 'POST',
	        dataType: 'html',
	        url: 'SalvarParaPDF.php',
	        data:  pdf,
			error: function() {
				console.log("erro, nao transmitiu")


				},
	        success: function(data) {
	        	console.log("transmitidos com sucesso!");
				console.log(data);
				window.location.replace("http://localhost/Digitalizacao/SalvarParaPDF.php");
			
	        	}
			})
			.done(function(data){
				console.log("finalizado!");
				//$("#spinner").toggle();
				});


//return false;
});

//*********************************************************************Desktop
$("#buttonPdfDesktop").click(function(){

	


/*	var dadosTabela = [];

	var fecha_de_emision = $("#tabelaMobile tr:even li:eq(0)").html().split(": ")[1];
	var orden_de_pago = $("#tabelaMobile tr:even li:eq(1)").html().split(": ")[1];

	var login = {
		email: fecha_de_emision,
		senha: orden_de_pago
	};

	var table = JSON.stringify(login);
	var tablejson = {"dados" : table }; 
	console.log(tablejson); */

	var dadosTabela = [];

		var fecha_de_emision = $("#tabelaDesktop td:eq(0)").html();
		var orden_de_pago = $("#tabelaDesktop td:eq(1)").html();
		var estado = $("#tabelaDesktop td:eq(2)").html();
		var credor = $("#tabelaDesktop td:eq(3)").html();
		var empresa = $("#tabelaDesktop td:eq(4)").html();
		var cheque = $("#tabelaDesktop td:eq(5)").html();
		var ruc = $("#tabelaDesktop td:eq(6)").html();
		

		console.log(fecha_de_emision);
		console.log(orden_de_pago);
		console.log(estado);
		console.log(credor);
		console.log(empresa);
		console.log(cheque);
		console.log(ruc);

		//console.log(i);

		var dados = {
			"fecha_de_emision": fecha_de_emision,
			"orden_de_pago": orden_de_pago,
			"estado": estado,
			"credor": credor,
			"empresa": empresa,
			"cheque": cheque,
			"ruc": ruc,
		};

		//dadosTabela.push(dados);
	//}
	dadosTabela = JSON.stringify(dados);

	console.log(dadosTabela);

	var pdf = {"dados": dadosTabela};

	//pdf = JSON.stringify(pdf);


	console.log(pdf); 

	$.ajax({
	        type: 'POST',
	        dataType: 'html',
	        url: 'SalvarParaPDF.php',
	        data:  pdf,
			error: function() {
				console.log("erro, nao transmitiu")


				},
	        success: function(data) {
	        	console.log("transmitidos com sucesso!");
				console.log(data);
				window.location.replace("http://localhost/Digitalizacao/SalvarParaPDF.php");
			
	        	}
			})
			.done(function(data){
				console.log("finalizado!");
				//$("#spinner").toggle();
				});


//return false;
});