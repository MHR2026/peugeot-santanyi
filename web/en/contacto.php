<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Automobils Vidal Santanyi SL .. Peugeot Santanyí. Contact</title>
<meta name="keywords" content="Mallorca, Taller, Peugeot, ITV, Campos, Calonge, Santanyi, Cala d'or"/>
<meta name="description" content="Taller de reparación de automoviles y concesionario peugeot en Santanyí"/>
<meta http-equiv="Content-Language" content="es"/>
<link href="../estilos.css" rel="stylesheet" type="text/css" />
<script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAo9uHM4WSG51vDlOZvMhbfhSDvmeiN2t5VOsBT7SUnT-Wq3L7pRRPRJE339NhP4gCmzXRs5t6JbAlnQ" type="text/javascript"></script>
<script type="text/javascript">
   //<![CDATA[
   
   //función para cargar un mapa de Google.
   //Esta función se llama cuando la página se ha terminado de cargar. Evento onload
   function load() {
      //comprobamos si el navegador es compatible con los mapas de google
      if (GBrowserIsCompatible()) {
         //instanciamos un mapa con GMap, pasándole una referencia a la capa o <div> donde queremos mostrar el mapa
         var map = new GMap2(document.getElementById("map"));   
         //centramos el mapa en una latitud y longitud deseadas
         map.setCenter(new GLatLng(39.352142,3.131508),15); 
		   //añadimos controles al mapa, para interacción con el usuario
         map.addControl(new GLargeMapControl());
         map.addControl(new GMapTypeControl());
         map.addControl(new GOverviewMapControl()); 
		 var point = new GLatLng(39.352142,3.131508);
        map.addOverlay(new GMarker(point));

         
      }
   }
   
   //]]>
   </script>

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
 <body onload="load()" onunload="GUnload()">
 <div id="map" style="width: 720px; height: 600px"></div>
</div>
<div class="cleaner"></div>
<?php
	include "../pie.html";
?> 
</div><!--end principal-->
</body>
</html>
