<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Automobils Vidal Santanyi SL .. Peugeot Santanyí. Ofertas</title>
<meta name="keywords" content="Mallorca, Taller, Peugeot, ITV, Campos, Calonge, Santanyi, Cala d'or"/>
<meta name="description" content="Taller de reparación de automoviles y concesionario peugeot en Santanyí"/>
<meta http-equiv="Content-Language" content="es"/>
<link href="estilos.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="principal">
  <?php
	include "top.html";
?> 
  <div class="cleaner"></div>
  <?php
	include "side.html";
?> 
<div id="templatemo_main"> 
<?php
require_once('admin/ContentManager.php');

$ContentManager = new ContentManager('events/events.xml');

$ContentManager->insertContent('globaldivid',1,'es');
?>
</div>
<div class="cleaner"></div>
<?php
	include "pie.html";
?> 
</div><!--end principal-->
</body>
</html>
