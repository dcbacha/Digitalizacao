<!DOCTYPE html>
<html>
<head>
<title>Download File From MySQL</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<?php

$dados = json_decode($_POST["dados"],true);

$type = $dados['type'];
$content = $dados['content'];
$name = "OrdendePago";
?>




<?php

header("Content-type: $type");
header("Content-Disposition: attachment; filename=$name");

ob_clean(); //apaga o buffer de saída
flush();	//descarrega o buffer de saída

echo $content;



exit;

?>
</html>
