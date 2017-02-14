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

$(".linha1").click(function(){
	var posY = $(".linha1").position().top;

	$('#lista1').css('position', 'absolute');
	$('#lista1').css('top', (posY + 10)); //or wherever you want it

	$("#lista1").slideToggle(150);
	$("#lista2").hide();
	$("#lista3").hide();
});

$(".linha2").click(function(){
	var posY = $(".linha2").position().top;

	$('#lista2').css('position', 'absolute');
	$('#lista2').css('top', (posY + 10)); //or wherever you want it

	$("#lista1").hide();
	$("#lista2").slideToggle(150);
	$("#lista3").hide();
});

$(".linha3").click(function(){
	var posY = $(".linha3").position().top;

	$('#lista3').css('position', 'absolute');
	$('#lista3').css('top', (posY + 10)); //or wherever you want it

	$("#lista1").hide();
	$("#lista2").hide();
	$("#lista3").slideToggle(150);
});