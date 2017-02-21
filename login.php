<?php
require_once("config.php");

header("Content-Type: application/json");


$dados = json_decode($_POST["dados"],true);

		
$email = $dados['email'];
$senha = $dados['senha'];


$sql = "SELECT * FROM `users` WHERE email = '{$email}' AND senha = '{$senha}'";


$usuarios = array();


$resultado = mysqli_query($conexao, $sql);

$rows = mysqli_num_rows($resultado);

//echo $rows;

if($rows == 1){
	
	// $response_array['status'] = 'success';

	while ($usuario = mysqli_fetch_assoc($resultado)){
		array_push($usuarios, $usuario); 
	}

	foreach ($usuarios as $usuario) {
		$_SESSION['id'] = $usuario['id'];
		$_SESSION['nome'] = $usuario['nome'];
		$_SESSION['nivel'] = $usuario['nivel'];
		$_SESSION['email'] = $usuario['email'];
		$_SESSION['empresa'] = $usuario['empresa'];

	}
	 
	echo 0;
}
else{
	echo 1;
}


?>


