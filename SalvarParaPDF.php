<?php

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
          <th>Empresa</th>
          <th>Orden de Pago</th>
          <th>Fecha Emisión</th>
          <th>Razón Social</th>
          <th>RUC</th>
          <th>Cheque</th>
        </tr>
      </thead>
      <tbody>    
        <tr>
          <td>Empresa A</td>
          <td>7000003854</td>
          <td>06/10/2015</td>
          <td>CREATIVE PARK S.A.</td>
          <td>80080364-7</td>
          <td>1048</td>
        </tr>

        <tr>
          <td>Empresa B</td>
          <td>7000076524</td>
          <td>14/08/2016</td>
          <td>OUTRA RAZON</td>
          <td>80076241-1</td>
          <td>2306</td>
        </tr>

        <tr>
          <td>Empresa C</td>
          <td>7000374902</td>
          <td>05/01/2013</td>
          <td>RAZON</td>
          <td>80015629-4</td>
          <td>1805</td>
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
      	$mpdf->Output('OrdenDePago.pdf','D');
        //$mpdf->Output();

        
?>