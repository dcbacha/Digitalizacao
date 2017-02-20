<?php
require_once("config.php");


header("Content-Type: application/json; charset=utf-8");


//$dados = json_decode($_POST["dados"], true);
$dados = $_POST['dados'];

ob_start();
?>




<body>
<div align="center">
	
	<table border="1" cellspacing="0" width="100%" style="border-collapse:collapse;">
			<tr>
				<td align="center">
					<h1>Orden de Pago</h1>
				</td>
			</tr>
	</table>
	<br/>
<!--******************************************************************************************************************************************-->
<table border="1" cellspacing="0" width="100%" style="border-collapse:collapse;">
      <thead>
        <tr bgcolor="#CCC" >
          <th>Fecha de Emisión</th>
          <th>Orden de Pago</th>
          <th>Estado</th>
          <th>Credor</th>
          <th>Empresa</th>
          <th>Cheque</th>
          <th>RUC</th>
        </tr>
      </thead>
      <tbody>    
       
        <tr>
        <td><?=$dados['ruc'][7]; ?></td>
         <?php

         foreach ($dados as $result){

          $fecha_de_emision = $result['fecha_de_emision'];
          $orden_de_pago = $result['orden_de_pago'];
          $estado = $result['estado'];
          $credor = $result['credor'];
          $empresa = $result['empresa'];
          $cheque = $result['cheque'];
          $ruc = $result['ruc'];

         ?>

          <td><?=$fecha_de_emision ?></td>
          <td><?=$orden_de_pago ?></td>
          <td><?=$estado ?></td>
          <td><?=$credor ?></td>
          <td><?=$empresa ?></td>
          <td><?=$cheque ?></td>
          <td><?=$ruc ?></td>

         <?php
          }
         ?>
        </tr>
      </tbody>
    </table>
</body>



<?php
$body = ob_get_clean();

        $body = iconv("UTF-8","UTF-8//IGNORE",$body);

  		//include("mpdf/mpdf.php");
        require 'mpdf/vendor/autoload.php';
        $mpdf=new \mPDF('c','A4','10','1' , 20, 20, 10, 10, 0, 0); 

        //write html to PDF
        $mpdf->WriteHTML($body);
 
        //output pdf
      	$mpdf->Output('Relatorio_OrdenDePago.pdf','D');
        //$mpdf->Output();

        
?>