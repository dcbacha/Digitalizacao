$("#buttonOrden").click(function(){
	$("#ordendepago").show();
	$("#numruc").hide();
	$("#numcheque").hide();
	$("#botaoConsultar").show();
	$("#empresa").show();
});

$("#buttonRuc").click(function(){
	$("#numruc").show();
	$("#ordendepago").hide();
	$("#numcheque").hide();
	$("#botaoConsultar").show();
	$("#empresa").show();
	
});

$("#buttonCheque").click(function(){
	$("#numcheque").show();
	$("#ordendepago").hide();
	$("#numruc").hide();
	$("#botaoConsultar").show();
	$("#empresa").show();
});

$("#buttonconsultar").click(function(){

	$("#spinner").show();

	setTimeout(function(){
		$("#spinner").hide();
		$("#tabelaConsulta").slideDown(200);
	},300);
	
});