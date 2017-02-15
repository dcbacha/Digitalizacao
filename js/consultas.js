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

$(".linha1").click(function(e){
	$('#lista1').css('position', 'absolute');
	$('#lista1').css('top', e.pageY ); //or wherever you want it
	$('#lista1').css('left', e.pageX);

	$("#lista1").toggle();
	$("#lista2").hide();
	$("#lista3").hide();
});

$(".linha2").click(function(e){
	$('#lista2').css('position', 'absolute');
	$('#lista2').css('top', e.pageY); //or wherever you want it
	$('#lista2').css('left', e.pageX);

	$("#lista1").hide();
	$("#lista2").toggle();
	$("#lista3").hide();
});

$(".linha3").click(function(e){
	$('#lista3').css('position', 'absolute');
	$('#lista3').css('top', e.pageY); //or wherever you want it
	$('#lista3').css('left', e.pageX);

	$("#lista1").hide();
	$("#lista2").hide();
	$("#lista3").toggle();
});
