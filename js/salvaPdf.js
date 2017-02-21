$("#buttonPdfMobile").click(function(){


	var dadosTabela = [];

	var total = $("#tabelaMobile tr:odd").length;

	console.log("total: "+total);
	for(let i=1; i<= total; i++){
		var fecha_de_emision = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(0)").html().split(": ")[1];
		var orden_de_pago = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(1)").html().split(": ")[1];
		var estado = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(2)").html().split(": ")[1];
		var credor = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(3)").html().split(": ")[1];
		var empresa = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(4)").html().split(": ")[1];
		var cheque = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(5)").html().split(": ")[1];
		var ruc = $("#tabelaMobile tr:eq("+(i*2)+") li:eq(6)").html().split(": ")[1];
		

		console.log(fecha_de_emision);
		console.log(orden_de_pago);
		console.log(estado);
		console.log(credor);
		console.log(empresa);
		console.log(cheque);
		console.log(ruc); 

		//console.log(i);

		var dados = {
			fecha_de_emision: fecha_de_emision,
			orden_de_pago: orden_de_pago,
			estado: estado,
			credor: credor,
			empresa: empresa,
			cheque: cheque,
			ruc: ruc,
		};

		dadosTabela.push(dados);
	}
	dadosTabela = JSON.stringify(dadosTabela);

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

	var dadosTabela = [];
	var total = $("#tabelaDesktop tbody>tr").length;

	console.log("total: "+total);
	for(let i=1; i<= total; i++){
		var fecha_de_emision = $("#tabelaDesktop tr:eq("+i+") td:eq(0)").html();
		var orden_de_pago = $("#tabelaDesktop tr:eq("+i+") td:eq(1)").html();
		var estado = $("#tabelaDesktop tr:eq("+i+") td:eq(2)").html();
		var credor = $("#tabelaDesktop tr:eq("+i+") td:eq(3)").html();
		var empresa = $("#tabelaDesktop tr:eq("+i+") td:eq(4)").html();
		var cheque = $("#tabelaDesktop tr:eq("+i+") td:eq(5)").html();
		var ruc = $("#tabelaDesktop tr:eq("+i+") td:eq(6)").html();
		

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

		dadosTabela.push(dados);
	}
	dadosTabela = JSON.stringify(dadosTabela);

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
			//	console.log(data);
				window.location.replace("http://localhost/Digitalizacao/SalvarParaPDF.php");
			
	        	}
			})
			.done(function(data){
				console.log("finalizado!");
				//$("#spinner").toggle();
				});


//return false;
});