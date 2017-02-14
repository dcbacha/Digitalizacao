<?php
if(!$_SESSION['nome']){
  header("location:http://localhost/Digitalizacao/");
}

if(isset($_SESSION['empresa'])){
	$empresa = $_SESSION['empresa'];
}