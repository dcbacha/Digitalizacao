$(document).ready(function(){

	console.log("comecou");
	var getempresas = {"id":"5","password":"@1dgiev!","Parametros":[]};
	var getempresas = JSON.stringify(getempresas);
	//console.log(getempresas);

	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	    //url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	     url: 'http://190.128.212.2/sgda/api/engine/post',
	    data:  getempresas,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
			//console.log(data);
			erro3();
			$("#spinner").hide();

			},
	    success: function(data) {
	       	console.log("transmitidos com sucesso!");
	      // 	console.log(data);

	       	for(let x=0; x < data.objeto.length ; x++){
					
				var cd_empresa_holding_reguera = data.objeto[x].cd_empresa_holding_reguera;
				var nm_empresa = data.objeto[x].nm_empresa;

				$("#inputEmpresa").append("<option value='"+cd_empresa_holding_reguera+"'>"+nm_empresa+"</option>");

			}// final do for

		}//final do success
	})
	.done(function(data){
		console.log("finalizado!");
		//console.log(data);
		$("#spinner").hide();
		
	}); 


});



$("#buttonOrden").click(function(){
	$("#ordendepago").show();
	$("#numruc").hide();
	$("#numcheque").hide();
	
	mostrarBotoes();

	$("#inputRuc").val("");
	$("#inputCheque").val("");
});

$("#buttonRuc").click(function(){
	$("#ordendepago").hide();
	$("#numruc").show();
	$("#numcheque").hide();
	
	mostrarBotoes();

	$("#inputOrdenPago").val("");
	$("#inputCheque").val("");
	
});

$("#buttonCheque").click(function(){
	$("#ordendepago").hide();
	$("#numruc").hide();
	$("#numcheque").show();
	
	mostrarBotoes();

	$("#inputOrdenPago").val("");
	$("#inputRuc").val("");
});

function mostrarBotoes(){
	$("#botaoConsultaDesktop").show();
	$("#botaoempresa").show();
	$("#botaoConsultaMobile").show();
}


//**********************************************************************************************************************************************
//******************************************************** Desktop *****************************************************************************
//**********************************************************************************************************************************************
$("#buttonconsultarDesktopPresidente").click(function(){

	var parametros = defineParametros();

	console.log(parametros);
	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	  //  url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	     url: 'http://190.128.212.2/sgda/api/engine/post',
	    data:  parametros,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
		//	console.log(data);
			erro3();
			$("#spinner").hide();

			},
	    success: function(data) {
	       	console.log("transmitidos com sucesso!");
	      // 	console.log(data);

			if(data.msgErro == "Consulta Não Retornou Dados"){
				erro2();
			}else if(data.msgErro == "objetoRetorno esta vazio."){
				erro1();
			}else{
				$("#tabelaDesktop thead").html("<tr>"+
	          											"<th>Fecha de Emisión</th>"+
	          											"<th>Orden de Pago</th>"+
	          											"<th>Estado</th>"+
	          											"<th>Credor</th>"+
	          											"<th>Empresa</th>"+
	          											"<th>Cheque</th>"+
	          											"<th>RUC</th>"+
												        "<th></th>"+ 
												"</tr>");

				for(let x=0; x < data.objeto.length ; x++){
					
					var cd_fecha_emision = data.objeto[x].cd_fecha_emision;

					var parts = cd_fecha_emision.split("-");
					var mes = parts[1];
					var ano = parts[0];

   					var dia = parts[2].split("T");
   					var dia = dia[0]

   					cd_fecha_emision = dia+"/"+mes+"/"+ano;

					var cd_orden_pago = data.objeto[x].cd_orden_pago;
					var ds_estado = data.objeto[x].ds_estado;
					var nm_credor = data.objeto[x].nm_credor;
					var nm_empresa = data.objeto[x].nm_empresa;
					var nr_cheque = data.objeto[x].nr_cheque;
					var nr_ruc = data.objeto[x].nr_ruc;

					var id = data.objeto[x].cd_am_requera_import_export;
					
					// ta faltando aquele for each la
					
					$("#tabelaDesktop tbody").append("<tr>"+
											          "<td>"+cd_fecha_emision+"</td>"+
											          "<td>"+cd_orden_pago+"</td>"+
											          "<td>"+ds_estado+"</td>"+
											          "<td>"+nm_credor+"</td>"+
											          "<td>"+nm_empresa+"</td>"+
											          "<td>"+nr_cheque+"</td>"+
											          "<td>"+nr_ruc+"</td>"+
											          
											          "<?php"+
											           " if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){"+
											          "?>"+
											          "<td>"+
											            "<a type='button' class='btn btn-default btn-sm' id="+id+">"+
											             " <span class='glyphicon glyphicon-save' aria-hidden='true'></span>PDF"+
											            "</a>"+
											          "</td>"+
											          "<?php"+
											          "}"+
											         " ?>"+
											       " </tr>");

					$('#'+id).click(function(){
						console.log("clicou: "+id);
						download(id);
					});

				}
				$("#botaoPdfDesktop").show();
				$("#tabelaConsultaDesktop").slideDown(200);
	    	}
		}
	})
	.done(function(data){
		console.log("finalizado!");
		//console.log(data);
		$("#spinner").hide();
		
	}); 

});
// ************************************************ Niveis 2 e 3 **************************************************
$("#buttonconsultarDesktop").click(function(){

	
	var parametros = defineParametros();


	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	   // url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	     url: 'http://190.128.212.2/sgda/api/engine/post',
	    data:  parametros,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
			//console.log(data);
			erro3();
			$("#spinner").hide();

			},
	    success: function(data) {
	       	console.log("transmitidos com sucesso!");
	       //	console.log(data);

			if(data.msgErro == "Consulta Não Retornou Dados"){
				erro2();
			}else if(data.msgErro == "objetoRetorno esta vazio."){
				erro1();
			}else{
				$("#tabelaDesktop thead").html("<tr>"+
	          											"<th>Fecha de Emisión</th>"+
	          											"<th>Orden de Pago</th>"+
	          											"<th>Estado</th>"+
	          											"<th>Credor</th>"+
	          											"<th>Empresa</th>"+
	          											"<th>Cheque</th>"+
	          											"<th>RUC</th>"+
												        "</tr>");

				for(let x=0; x < data.objeto.length ; x++){
					
					var cd_fecha_emision = data.objeto[x].cd_fecha_emision;

					var parts = cd_fecha_emision.split("-");
					var mes = parts[1];
					var ano = parts[0];

   					var dia = parts[2].split("T");
   					var dia = dia[0]

   					cd_fecha_emision = dia+"/"+mes+"/"+ano;

					var cd_orden_pago = data.objeto[x].cd_orden_pago;
					var ds_estado = data.objeto[x].ds_estado;
					var nm_credor = data.objeto[x].nm_credor;
					var nm_empresa = data.objeto[x].nm_empresa;
					var nr_cheque = data.objeto[x].nr_cheque;
					var nr_ruc = data.objeto[x].nr_ruc;

					var id = data.objeto[x].cd_am_requera_import_export;
					
					// ta faltando aquele for each la
					
					$("#tabelaDesktop tbody").append("<tr>"+
											          "<td>"+cd_fecha_emision+"</td>"+
											          "<td>"+cd_orden_pago+"</td>"+
											          "<td>"+ds_estado+"</td>"+
											          "<td>"+nm_credor+"</td>"+
											          "<td>"+nm_empresa+"</td>"+
											          "<td>"+nr_cheque+"</td>"+
											          "<td>"+nr_ruc+"</td>"+
											          
											       " </tr>");

					$('#'+id).click(function(){
						console.log("clicou: "+id);
						download(id);
					});

				}
				$("#botaoPdfDesktop").show();
				$("#tabelaConsultaDesktop").slideDown(200);
	    	}
		}
	})
	.done(function(data){
		console.log("finalizado!");
		//console.log(data);
		$("#spinner").hide();
		
	}); 

});

//**********************************************************************************************************************************************
//******************************************************** Mobile ******************************************************************************
//**********************************************************************************************************************************************
$("#buttonconsultarMobilePresidente").click(function(){

	var parametros = defineParametros();

	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	  //  url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	    url:'http://190.128.212.2/sgda/api/engine/post' ,
	    data:  parametros,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
		//	console.log(data);
			erro3();
			$("#spinner").hide();

			},
	    success: function(data) {
	       	console.log("transmitidos com sucesso!");
	     //  	console.log(data);

			if(data.msgErro == "Consulta Não Retornou Dados"){
				erro2();
			}else if(data.msgErro == "objetoRetorno esta vazio."){
				erro1();
			}else{

				$("#tabelaMobile thead").html("<tr>"+
											          "<th>Fecha de Emisión</th>"+
											          "<th>Orden de Pago</th>"+
											          "<th></th>"+
											        "</tr>");

				for (let x=0; x < data.objeto.length ; x++){
				//	var cd_am_requera_import_export = data.objeto[0].cd_am_requera_import_export;
					
					var cd_fecha_emision = data.objeto[x].cd_fecha_emision;

					var parts = cd_fecha_emision.split("-");
					var mes = parts[1];
					var ano = parts[0];

   					var dia = parts[2].split("T");
   					var dia = dia[0]

   					cd_fecha_emision = dia+"/"+mes+"/"+ano;

					var cd_orden_pago = data.objeto[x].cd_orden_pago;
					var ds_estado = data.objeto[x].ds_estado;
					var nm_credor = data.objeto[x].nm_credor;
					var nm_empresa = data.objeto[x].nm_empresa;
					var nr_cheque = data.objeto[x].nr_cheque;
					var nr_ruc = data.objeto[x].nr_ruc;

					var id = data.objeto[x].cd_am_requera_import_export;

					
					
					$("#tabelaMobile tbody").append("<tr>"+
											          "<td>"+cd_fecha_emision+"</td>"+
											          "<td>"+cd_orden_pago+"</td>"+
											          "<td>"+
											           " <button type='button' class='btn btn-default btn-sm' id="+id+">"+
											            "  <span class='glyphicon glyphicon-save' aria-hidden='true'></span>PDF"+
											            "</button>"+
											          "</td>"+

											        "</tr>"+
													"<tr>"+
											          "<td colspan='3'>"+
											            "<ul class='list-group'>"+
											              "<li class='list-group-item'>Fecha de Emision: "+cd_fecha_emision+"</li>"+
											              "<li class='list-group-item'>Orden de Pago: "+cd_orden_pago+"</li>"+
											              "<li class='list-group-item'>Estado: "+ds_estado+"</li>"+
											              "<li class='list-group-item'>Credor: "+nm_credor+"</li>"+
											              "<li class='list-group-item'>Empresa: "+nm_empresa+"</li>"+
											              "<li class='list-group-item'>Cheque: "+nr_cheque+"</li>"+
											              "<li class='list-group-item'>RUC: "+nr_ruc+"</li>"+
											            "</ul>"+
											          "</td>"+
											        "</tr>");


					
					$('#'+id).click(function(){
						console.log("clicou: "+id);
						download(id);
					});



				} // final do for

					$(document).ready(function(){
					$("#tabelaMobile tr:odd").addClass("odd");
					$("#tabelaMobile tr:not(.odd)").hide();
					$("#tabelaMobile tr:first-child").show();
					            
					$("#tabelaMobile tr.odd").click(function(){
						$(this).next("tr").toggle(250);
						$(this).find(".row").toggleClass("up");
					});
	    		});


				$("#botaoPdfMobile").show();
				$("#tabelaConsultaMobile").slideDown(200);

				
			} // final do else

	    } // final do success
	})
	.done(function(data){
		console.log("finalizado!");
		$("#spinner").hide();
		
	}); 


});

//************************************************************ Niveis 2 e 3 ********************************************************************
$("#buttonconsultarMobile").click(function(){

	var parametros = defineParametros();


	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	    //url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	      url: 'http://190.128.212.2/sgda/api/engine/post',
	    data:  parametros,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
		//	console.log(data);
			erro3();
			$("#spinner").hide();

			},
	    success: function(data) {
	       	console.log("transmitidos com sucesso!");
	     //  	console.log(data);

			if(data.msgErro == "Consulta Não Retornou Dados"){
				erro2();
			}else if(data.msgErro == "objetoRetorno esta vazio."){
				erro1();
			}else{

				$("#tabelaMobile thead").html("<tr>"+
											          "<th>Fecha de Emisión</th>"+
											          "<th>Orden de Pago</th>"+
											        "</tr>");

				for (let x=0; x < data.objeto.length ; x++){
				//	var cd_am_requera_import_export = data.objeto[0].cd_am_requera_import_export;
					
					var cd_fecha_emision = data.objeto[x].cd_fecha_emision;

					var parts = cd_fecha_emision.split("-");
					var mes = parts[1];
					var ano = parts[0];

   					var dia = parts[2].split("T");
   					var dia = dia[0]

   					cd_fecha_emision = dia+"/"+mes+"/"+ano;

					var cd_orden_pago = data.objeto[x].cd_orden_pago;
					var ds_estado = data.objeto[x].ds_estado;
					var nm_credor = data.objeto[x].nm_credor;
					var nm_empresa = data.objeto[x].nm_empresa;
					var nr_cheque = data.objeto[x].nr_cheque;
					var nr_ruc = data.objeto[x].nr_ruc;

					var id = data.objeto[x].cd_am_requera_import_export;

					
					
					$("#tabelaMobile tbody").append("<tr>"+
											          "<td>"+cd_fecha_emision+"</td>"+
											          "<td>"+cd_orden_pago+"</td>"+
											        "</tr>"+
													"<tr>"+
											          "<td colspan='2'>"+
											            "<ul class='list-group'>"+
											              "<li class='list-group-item'>Fecha de Emision: "+cd_fecha_emision+"</li>"+
											              "<li class='list-group-item'>Orden de Pago: "+cd_orden_pago+"</li>"+
											              "<li class='list-group-item'>Estado: "+ds_estado+"</li>"+
											              "<li class='list-group-item'>Credor: "+nm_credor+"</li>"+
											              "<li class='list-group-item'>Empresa: "+nm_empresa+"</li>"+
											              "<li class='list-group-item'>Cheque: "+nr_cheque+"</li>"+
											              "<li class='list-group-item'>RUC: "+nr_ruc+"</li>"+
											            "</ul>"+
											          "</td>"+
											        "</tr>");


					
					$('#'+id).click(function(){
						console.log("clicou: "+id);
						download(id);
					});



				} // final do for

					$(document).ready(function(){
					$("#tabelaMobile tr:odd").addClass("odd");
					$("#tabelaMobile tr:not(.odd)").hide();
					$("#tabelaMobile tr:first-child").show();
					            
					$("#tabelaMobile tr.odd").click(function(){
						$(this).next("tr").toggle(250);
						$(this).find(".row").toggleClass("up");
					});
	    		});


				$("#botaoPdfMobile").show();
				$("#tabelaConsultaMobile").slideDown(200);

				
			} // final do else

	    } // final do success
	})
	.done(function(data){
		console.log("finalizado!");
		$("#spinner").hide();
		
	}); 


});

//***********************************************************************************************************************************************************
//******************************************************************* Funcoes *******************************************************************************
//***********************************************************************************************************************************************************

function download(id){
	$("#spinner").show();

	console.log("veio pro download:"+id);

	var download = {"id":"9","password":"@fnisdpo4981!",
			"Parametros":[{"Nome":"@cd_am_requera_import_export","Valor":id}]};
	var download = JSON.stringify(download);
	console.log(download);

	$.ajax({
	    type: 'POST',
	    dataType: 'json',
	   // url: 'http://intranetpsg.psg.local/sgda_py/api/engine/post',
	   url: 'http://190.128.212.2/sgda/api/engine/post',
	    data:  download,
	    headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
		error: function(data) {
			console.log("erro, nao transmitiu")
		//	console.log(data);
			erro3();
			$("#spinner").hide();
			},
     	success: function(data) {
     	//	console.log(data);

			var byteCharacters = atob(data.objeto[0].img_documento);

			var byteNumbers = new Array(byteCharacters.length);
			for (var i = 0; i < byteCharacters.length; i++) {
			    byteNumbers[i] = byteCharacters.charCodeAt(i);
			}

			var byteArray = new Uint8Array(byteNumbers);

			var pdfAsDataUri = new Blob([byteArray], {type: data.objeto[0].ext_documento});

			var link = document.createElement('a');
	        link.href = window.URL.createObjectURL(pdfAsDataUri);
	        link.download = "OrdenDePago.pdf";
	            link.click();
	        }
		})
		.done(function(data){
			console.log("finalizado!");
			//console.log(data);
			$("#spinner").hide();	
		}); 
}


// **********************************************
function defineParametros(){

	$("#tabelaConsultaMobile").hide();
	$("#tabelaConsultaDesktop").hide();

	$("#tabelaConsultaMobile tbody>tr").remove();
	$("#tabelaConsultaDesktop tbody>tr").remove();

	var ordenPago = $("#inputOrdenPago").val();
	var ruc = $("#inputRuc").val();
	var cheque = $("#inputCheque").val();
	var empresa = $("#inputEmpresa").val();

	if(ordenPago && empresa!=0){

		$("#spinner").show();

	
		var parametros = {"id":"6","password":"@dk59qpa19!",
				"Parametros":[{"Nome":"@cd_orden_pago","Valor":ordenPago},{"Nome":"@cd_empresa_holding_reguera","Valor":empresa}]};

		var parametros = JSON.stringify(parametros);
			
	}else if(ruc && empresa){

		$("#spinner").show();


		var parametros = {"id":"7","password":"@fop57qbv089!",
				"Parametros":[{"Nome":"@nr_ruc","Valor": ruc},{"Nome":"@cd_empresa_holding_reguera","Valor": empresa}]};

		var parametros = JSON.stringify(parametros);
			
	
	}else if(cheque && empresa){


		$("#spinner").show();

		var parametros = {"id":"8","password":"@f0467vdhweo35!",
				"Parametros":[{"Nome":"@nr_cheque","Valor":cheque},{"Nome":"@cd_empresa_holding_reguera","Valor":empresa}]};
	
		var parametros = JSON.stringify(parametros);
	
	}else{
		erro1();
	}

	return parametros;
}



//************************************************************** erros *********************************************
function erro1(){
	$("#erroConsulta1").stop().slideDown(250);
				
	setTimeout(function(){
		$("#erroConsulta1").stop().slideUp(250);
	}, 2500);
}

function erro2(){
	$("#erroConsulta2").stop().slideDown(250);
				
	setTimeout(function(){
		$("#erroConsulta2").stop().slideUp(250);
	}, 2500);
}

function erro3(){
	$("#erroConsulta3").stop().slideDown(250);
				
	setTimeout(function(){
		$("#erroConsulta3").stop().slideUp(250);
	}, 2500);
}
