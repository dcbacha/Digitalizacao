<!DOCTYPE html>
<html>
<?php 
require_once("config.php");
include("verifica.php");


?>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="">
	<meta name="keywords" content="">
	<link rel="stylesheet" href="css/bootstrap.css">

  <link href="css/navbar-fixed-top.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/responsivel.css">

	
	<link rel="icon" href="img/psgicon.ico">
	<title>Digitalização</title>
</head>


<body>
		
	 <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Digitalização  n:<?=$_SESSION['nivel']?></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <?php
            if($_SESSION['nivel'] == 0){
          ?>
         
          <ul class="nav navbar-nav">
          <li><a href="cadastro.php">Cadastro</a></li>
          </ul>
          <?php
          }
          ?>
         <p class="navbar-text">Logado como: <a href="#" class="navbar-link"><?=$_SESSION['nome']?></a></p>
         <a type="button" class="btn btn-default navbar-btn navbar-right" href="logout.php">Logout</a>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    

    <!-- *************************************************** Parametros de consulta **************************************************************** -->
    <div class="container" style="margin-top: -20px;">
      <h2>Consultar por:</h2>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" id="buttonOrden">Orden de Pago</button>
        <button type="button" class="btn btn-default" id="buttonRuc">RUC</button>
        <button type="button" class="btn btn-default" id="buttonCheque">Cheque</button>
      </div>
    </div>
  
   
    <div class="container" id="consulta">
    
    <div hidden id="ordendepago" style="margin-top: 15px;">
    <div class="col-lg-4" style="margin-left: -15px;">
      <div class="input-group">
        <span class="input-group-addon">Nº Orden de Pago:</span>
        <input type="text" class="form-control" id="inputOrdenPago">
      </div>
    </div>
    </div>

    <div hidden id="numruc" style="margin-top: 15px;">
    <div class="col-lg-4" style="margin-left: -15px;">
      <div class="input-group">
        <span class="input-group-addon">Nº RUC:</span>
        <input type="text" class="form-control" id="inputRuc">
      </div>
    </div>    
    </div>

    <div hidden id="numcheque" style="margin-top: 15px;">
    <div class="col-lg-4" style="margin-left: -15px;">
      <div class="input-group">
        <span class="input-group-addon">Nº Cheque:</span>
        <input type="text" class="form-control" id="inputCheque">
      </div>
    </div>
    </div>


    <div class="col-lg-4"  style="margin-left: -15px;" id="botaoempresa" hidden>
      <div class="input-group">
        <span class="input-group-addon" >Empresa:</span>

          <?php
          if($_SESSION['nivel'] == 3){
          ?>
           <!-- <input class="form-control" type="text" value="1" disabled id="inputEmpresa">-->
            <select class="form-control" id="inputEmpresa" disabled>
            <option value="1">AM REGUERA S.A.</option>
            </select>
          <?php
          }else{
          ?>
            <select class="form-control" id="inputEmpresa">
            <option></option>
          </select>
          <?php
          }
          ?>
      </div>
    </div>

    <!-- Botoes de consulta Desktop e Mobile -->
   

    <div hidden id="botaoConsultaDesktop">
      <?php
      if($_SESSION['nivel'] == 1){
      ?>
      <button type="submit" class="btn btn-primary botao" id="buttonconsultarDesktopPresidente">Consultar</button>
       <?php
      }else{
      ?>
        <button type="submit" class="btn btn-primary botao" id="buttonconsultarDesktop">Consultar</button>
      <?php
      }
      ?>
      <span hidden id="botaoPdfDesktop">
        <button class="btn btn-success botao pdf" id="buttonPdfDesktop">Salvar PDF</button>
      </span>
    </div>

     <div hidden id="botaoConsultaMobile">
     <?php
     if($_SESSION['nivel'] == 1){
      ?>
        <button type="submit" class="btn btn-primary botao" id="buttonconsultarMobilePresidente">Consultar</button>
      <?php
      }else{
      ?>
        <button type="submit" class="btn btn-primary botao" id="buttonconsultarMobile">Consultar</button>
      <?php
      }
      ?>
      <span hidden id="botaoPdfMobile">
        <button class="btn btn-success botao pdf" id="buttonPdfMobile">Salvar PDF</button>
      </span>
    </div>
    </form>

    

    <!-- Spinner -->
    <div  style="margin-top: 15px;" class="container" align="center" id="spinner" hidden>
    <img src="img/spinner.gif" alt="">
    </div>
    
    <!-- Alerta de Erros -->
    <div class="alert alert-danger" role="alert" id="erroConsulta1" hidden style="margin-top: 10px;">
          <strong>Erro!</strong> Preencha os campos corretamente.
    </div>
    
    <div class="alert alert-warning" role="alert" id="erroConsulta2" hidden style="margin-top: 10px;">
          Não foi encontrado nenhum documento.
    </div>

    <div class="alert alert-warning" role="alert" id="erroConsulta3" hidden style="margin-top: 10px;">
          Algo deu errado.
    </div>
    <!--*********************************************************** Tabela Desktop *********************************************************** -->
    <div class="container" style="margin-top: 15px; margin-left: -15px;" id="tabelaConsultaDesktop" hidden>
  
    <table class="table table-striped" id="tabelaDesktop">
      <thead>
      </thead>

      <tbody>
      </tbody>
    </table>
    </div>

    

    <!--********************************************************* Tabela Mobile ***************************************************************-->
    <div class="container" style="margin-top: 15px; margin-left: -15px;" id="tabelaConsultaMobile" hidden>

    <table class="table table-hover" id="tabelaMobile">
      <thead>

      </thead>
      <tbody>
      </tbody>
     </table>
    </div>

   
 
  
   <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
   <script src="js/bootstrap.min.js"></script>
   <script type="text/javascript" src="js/main.js"></script>
   <script type="text/javascript" src="js/salvaPdf.js"></script>

</body>
</html>


