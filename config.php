<?php

header("Content-Type: text/html; charset=utf-8");

session_start();


/* para produção 
$DB_host = "localhost";
$DB_name = "PSGDemandas";
$DB_user = "root";
$DB_pass = "";

 try
 {
     $DBcon = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass); 
     $DBcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 }
 catch(PDOException $e)
 {
     echo "ERROR : ".$e->getMessage();
 }//EihRK3eMUzYFinQz
//2ef?Awru     -- ftp 
//webmaster

*/

 	$host = 'localhost'; 
	$user = 'root';
	$senhabd = '';
	$bd = 'Digitalizacao';

	$conexao = mysqli_connect($host, $user, $senhabd, $bd);
?>
