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
            <input class="form-control" type="text" placeholder="<?=$_SESSION['empresa'] ?>" disabled id="inputEmpresa">
          <?php
          }else{
          ?>
            <select class="form-control" id="inputEmpresa">
            <option></option>
            <option>1</option>
            <option>3</option>
            <option>4</option>
            <option>AM REGUERA S.A.</option>
          </select>
          <?php
          }
          ?>
      </div>
    </div>

    <!-- Botoes de consulta Desktop e Mobile -->
    <div hidden id="botaoConsultaDesktop">
      <button type="submit" class="btn btn-primary botao" id="buttonconsultarDesktop">Consultar</button>
      <span hidden id="botaoPdfDesktop">
        <a href="SalvarParaPDF.php" class="btn btn-success botao" id="buttonpdfDesktop">Salvar PDF</a>
      </span>
    </div>

     <div hidden id="botaoConsultaMobile">
      <button type="submit" class="btn btn-primary botao" id="buttonconsultarMobile">Consultar</button>
      <span hidden id="botaoPdfMobile">
        <a href="SalvarParaPDF.php" class="btn btn-success botao" id="buttonpdfMobile">Salvar PDF</a>
      </span>
    </div>

  
    

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
<!--      <thead>
        <tr>
          <th>Fecha de Emisión</th>
          <th>Orden de Pago</th>
          <th>Estado</th>
          <th>Credor</th>
          <th>Empresa</th>
          <th>Cheque</th>
          <th>RUC</th>
          
          <?php
          if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
            <th></th>
          <?php
          }
          ?>
        </tr>
      </thead>
      <tbody>    
        <tr>
          <td>Empresa A</td>
          <td>7000003854</td>
          <td>06/10/2015</td>
          <td>CREATIVE PARK S.A.</td>
          <td>80080364-7</td>
          <td>1048</td>
          
          <?php
            if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
          <td>
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-save" aria-hidden="true"></span>PDF
            </button>
          </td>
          <?php
          }
          ?>

        </tr>

      </tbody>
    </table>
    </div>
    

    <!--********************************************************* Tabela Mobile ***************************************************************-->
    <div class="container" style="margin-top: 15px; margin-left: -15px;" id="tabelaConsultaMobile" hidden>

    <table class="table table-hover" id="tabelaMobile">
      <thead>
        <tr>
          <th>Fecha de Emisión</th>
          <th>Orden de Pago</th>
          <?php
          if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
            <th></th>
          <?php
          }
          ?>
        </tr>

      </thead>
      <tbody>
      </tbody>
     </table>
    </div>
 <!--     <thead>
        <tr >
          <th>Orden de Pago</th>
          <th>Fecha Emisión</th>
          <?php
            if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
          <th></th>
          <?php
          }
          ?>
        </tr>
      </thead>
      <tbody>    
        <tr>
          <td>7000003854</td>
          <td>06/10/2015</td>
        
          
          <?php
            if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
          <td>
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-save" aria-hidden="true"></span>PDF
            </button>
          </td>
          <?php
          }
          ?>

        </tr>
        <tr>
          <td colspan="3">
            <ul class="list-group">
              <li class="list-group-item">Empresa: A</li>
              <li class="list-group-item">Orden de Pago: 7000003854</li>
              <li class="list-group-item">Fecha de Emisión: 06/10/2015</li>
              <li class="list-group-item">Razón Social: CREATIVE PARK S.A.</li>
              <li class="list-group-item">RUC: 80080364-7</li>
              <li class="list-group-item">Cheque: 1048</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>7000076524</td>
          <td>14/08/2016</td>
        
          <?php
            if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
          <td>
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-save" aria-hidden="true"></span>PDF
            </button>
          </td>
          <?php
          }
          ?>
        </tr>
        <tr>
          <td colspan="3">
            <ul class="list-group">
              <li class="list-group-item">Empresa: B</li>
              <li class="list-group-item">Orden de Pago: 7000076524</li>
              <li class="list-group-item">Fecha de Emisión: 14/08/2016</li>
              <li class="list-group-item">Razón Social: OUTRA RAZON</li>
              <li class="list-group-item">RUC: 80076241-1</li>
              <li class="list-group-item">Cheque: 2306</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>7000374902</td>
          <td>05/01/2013</td>
          <?php
            if($_SESSION['nivel'] == 1 || $_SESSION['nivel'] == 0){
          ?>
          <td>
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-save" aria-hidden="true"></span>PDF
            </button>
          </td>
          <?php
          }
          ?>
        </tr>
        <tr>
          <td colspan="3">
             <ul class="list-group">
                <li class="list-group-item">Empresa: C</li>
                <li class="list-group-item">Orden de Pago: 7000374902</li>
                <li class="list-group-item">Fecha de Emisión: 05/01/2013</li>
                <li class="list-group-item">Razón Social: RAZON</li>
                <li class="list-group-item">RUC: 80015629-4</li>
                <li class="list-group-item">Cheque: 1805</li>
              </ul>
          </td>
        </tr>

      </tbody>
    </table> 

    </div>-->
  
   <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
   <script src="js/bootstrap.min.js"></script>
   <script type="text/javascript" src="js/main.js"></script>

</body>
</html>
