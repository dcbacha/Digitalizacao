<?php

require_once("config.php");

session_destroy();
$_SESSION = array();
session_start();

header("location:http://localhost/Digitalizacao/");