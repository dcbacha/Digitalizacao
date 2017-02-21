<?php
require_once("config.php");


header("Content-Type: application/json; charset=utf-8");




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
         <?php

         if(isset($_POST["dados"])){
            $dados = json_decode($_POST["dados"], true);

          $_SESSION['fecha_de_emision'] = $dados['fecha_de_emision'];
          $_SESSION['orden_de_pago'] = $dados['orden_de_pago'];
          $_SESSION['estado'] = $dados['estado'];
          $_SESSION['credor'] = $dados['credor'];
          $_SESSION['empresa'] = $dados['empresa'];
          $_SESSION['cheque'] = $dados['cheque'];
          $_SESSION['ruc'] = $dados['ruc'];

          
          }
         

      /*    $fecha_de_emision = $result['fecha_de_emision'];
          $orden_de_pago = $result['orden_de_pago'];
          $estado = $result['estado'];
          $credor = $result['credor'];
          $empresa = $result['empresa'];
          $cheque = $result['cheque'];
          $ruc = $result['ruc']; */

         ?>

          <td align="center"><?=$_SESSION['fecha_de_emision']; ?></td>
          <td align="center"><?=$_SESSION['orden_de_pago']; ?></td>
          <td align="center"><?=$_SESSION['estado']; ?></td>
          <td align="center"><?=$_SESSION['credor']; ?></td>
          <td align="center"><?=$_SESSION['empresa']; ?></td>
          <td align="center"><?=$_SESSION['cheque']; ?></td>
          <td align="center"><?=$_SESSION['ruc']; ?></td>

         <?php
          
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