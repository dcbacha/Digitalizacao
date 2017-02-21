<?php
require_once("config.php");


header("Content-Type: application/json; charset=utf-8");

 

ob_start();

          $i=0;
        // $tamanho =0;
         if(isset($_POST['dados'])){
            $_SESSION['sessao'] = 0; // acesso por ajax

            $dados = json_decode($_POST['dados'], true);
            

            $_SESSION['tamanho'] = count($dados);

            $itenstabela = json_decode($dados[0], true);
          //  $_SESSION['teste'] = $dados['orden_de_pago'][1];
             $_SESSION['teste'] = $itenstabela[0][0];

            ?>
    
          <?php


        foreach ($dados as $result){
        //  for($i=0 ; $i < $_SESSION['tamanho'] ; $i++ ){
        /*  $_SESSION['fecha_de_emision'] = $dados['fecha_de_emision'];
          $_SESSION['orden_de_pago'] = $dados['orden_de_pago'];
          $_SESSION['estado'] = $dados['estado'];
          $_SESSION['credor'] = $dados['credor'];
          $_SESSION['empresa'] = $dados['empresa'];
          $_SESSION['cheque'] = $dados['cheque'];
          $_SESSION['ruc'] = $dados['ruc'];*/

          $_SESSION['fecha_de_emision'.$i] = $result['fecha_de_emision'];
          $_SESSION['orden_de_pago'.$i] = $result['orden_de_pago'];
          $_SESSION['estado'.$i] = $result['estado'];
          $_SESSION['credor'.$i] = $result['credor'];
          $_SESSION['empresa'.$i] = $result['empresa'];
          $_SESSION['cheque'.$i] = $result['cheque'];
          $_SESSION['ruc'.$i] = $result['ruc'];
          $i++;
        }
      }else{
        $_SESSION['sessao'] = 1; //acesso para download
      }

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
           <?php
        /*    $fecha_de_emision = $result['fecha_de_emision'];
          $orden_de_pago = $result['orden_de_pago'];
          $estado = $result['estado'];
          $credor = $result['credor'];
          $empresa = $result['empresa'];
          $cheque = $result['cheque'];
          $ruc = $result['ruc']; */
          if($_SESSION['sessao']==1){
          for ($total = 0 ; $total < $_SESSION['tamanho'] ; $total++){
         ?>
        <tr>
          <td align="center"><?=$_SESSION['fecha_de_emision'.$total]; ?></td>
          <td align="center"><?=$_SESSION['orden_de_pago'.$total]; ?></td>
          <td align="center"><?=$_SESSION['estado'.$total]; ?></td>
          <td align="center"><?=$_SESSION['credor'.$total]; ?></td>
          <td align="center"><?=$_SESSION['empresa'.$total]; ?></td>
          <td align="center"><?=$_SESSION['cheque'.$total]; ?></td>
          <td align="center"><?=$_SESSION['ruc'.$total]; ?></td>
        </tr>
         <?php
        
          }
        }
         ?>
       
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