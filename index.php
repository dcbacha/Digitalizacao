<!DOCTYPE html>
<html>
<?php require_once("config.php");?>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="">
	<meta name="keywords" content="">
	<link rel="stylesheet" href="css/bootstrap.css">
	   <link href="css/signin.css" rel="stylesheet">

	
	<link rel="icon" href="img/psgicon.ico">
	<title>Digitalização</title>
</head>

 <body  style="background-color: darkgray">

  
    <div class="container">

     

      <?php
      if(isset($_SESSION['nome'])){

      ?>
         <div align="center">
          <img src="img/psg.jpg" class="thumbnail">
        </div>
         <form class="form-signin">
         <h3 class="form-signin-heading text-center">Você está logado como:</h3>
          <h1 class="form-signin-heading text-center"><?=$_SESSION['nome']?></h1>

        <a class="btn btn-lg btn-success btn-block" href="paginainicial.php">Entrar</a>
        <a class="btn btn-lg btn-primary btn-block" href="logout.php">Logout</a>
        </form>
      <?php
      } else{

      ?>
      <form class="form-signin">
        <div align="center">
          <img src="img/psg.jpg" class="thumbnail">
        </div>
        <h2 class="form-signin-heading text-center">Faça o login</h2>
        <label for="inputUser" class="sr-only">Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
        <div>
    

        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" id="login">Logar</button>


        <div class="alert alert-danger" role="alert" id="erroLogin" hidden style="margin-top: 10px;">
          <strong>Erro!</strong> Falha no login.
        </div>
        <div class="alert alert-danger" role="alert" id="erroLogin2" hidden style="margin-top: 10px;">
          <strong>Erro!</strong> Email ou Senha inválido.
        </div>
      </form>

      <?php  
      }
      
      ?>

     
    </div> <!-- /container -->

    


    <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
  </body>

</html>