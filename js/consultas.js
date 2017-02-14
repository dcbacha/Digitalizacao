$("#buttonOrden").click(function(){
	$("#ordendepago").show();
	$("#numruc").hide();
	$("#numcheque").hide();
	$("#botaoConsulta").show();
	$("#empresa").show();

	$("#botaoConsulta2").show();
});

$("#buttonRuc").click(function(){
	$("#numruc").show();
	$("#ordendepago").hide();
	$("#numcheque").hide();
	$("#botaoConsulta").show();
	$("#empresa").show();
	
});

$("#buttonCheque").click(function(){
	$("#numcheque").show();
	$("#ordendepago").hide();
	$("#numruc").hide();
	$("#botaoConsulta").show();
	$("#empresa").show();
});

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