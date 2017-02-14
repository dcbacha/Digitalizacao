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
<!--	<link rel="stylesheet" type="text/css" href="css/responsivel.css"> -->

	
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
          <a class="navbar-brand" href="paginainicial.php">Digitalização  n:<?=$_SESSION['nivel']?></a>
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
  
  <div class="container" style="max-width: 500px;">
    
  <form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Nome</label>
    <div class="col-sm-10">
      <input type="etext" class="form-control" id="inputEmail3" placeholder="Nome">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Nível</label>
    <div class="col-sm-10">
      <select class="form-control">
        <option>Nível</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </div>
    <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Empresa</label>
    <div class="col-sm-10">
      <input type="etext" class="form-control" id="inputEmail3" placeholder="Nome">
    </div>
  </div>

  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Senha</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Senha">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Cadastrar</button>
    </div>
  </div>
</form>
</div>


   <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
   <script src="js/bootstrap.min.js"></script>
   <script type="text/javascript" src="js/consultas.js"></script>

</body>
</html>
