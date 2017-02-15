$("#buttonOrden").click(function(){
	$("#ordendepago").show();
	$("#numruc").hide();
	$("#numcheque").hide();
	
	mostrarBotoes();
});

$("#buttonRuc").click(function(){
	$("#ordendepago").hide();
	$("#numruc").show();
	$("#numcheque").hide();
	
	mostrarBotoes();
	
});

$("#buttonCheque").click(function(){
	$("#ordendepago").hide();
	$("#numruc").hide();
	$("#numcheque").show();
	
	mostrarBotoes();
});

function mostrarBotoes(){
	$("#botaoConsulta").show();
	$("#empresa").show();
	$("#botaoConsulta2").show();
}

$("#buttonconsultar").click(function(){

	$("#spinner").show();

	setTimeout(function(){
		$("#spinner").hide();
		$("#botaoPdf").show();
		$("#tabelaConsulta").slideDown(200);
		
	},300);
	
});


$("#buttonconsultar2").click(function(){

	$("#spinner").show();

	setTimeout(function(){
		$("#spinner").hide();
		$("#botaoPdf2").show();
		$("#tabelaConsulta2").slideDown(200);
		
	},300);
	
});

$("#tabelaMobile tr:odd").addClass("odd");
$("#tabelaMobile tr:not(.odd)").hide();
$("#tabelaMobile tr:first-child").show();
            
$("#tabelaMobile tr.odd").click(function(){
	$(this).next("tr").toggle(250);
	$(this).find(".row").toggleClass("up");
});

