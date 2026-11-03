<?php


































































$AdminPass = ''; // md5 de la contraseÒa: no se guarda en el repositorio (ver README)

require_once( 'ContentManager.php' );
require_once( 'GenericCode.php' );

$Content = ContentManager::initialize( $AdminPass,'../events/events.xml','es,en,de' );

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin t√≠tulo</title>
<link href="ContentManager.css" rel="stylesheet" type="text/css" />
</head>

<script type="text/javascript" language="javascript" src="ContentManager.js"></script>

<body>

  <?php


if( $Content == NULL )
{
	ContentManager::insertLoginForm('AdminLoginFrm');
}
else
{	
	$Content->insertControlBar('ControlBar');
	
	$Content->insertNewItemForm('AddItems');
	
	$Content->insertEditionTable('EditionTable',3);	
}

?>
<div id="final">Editor websolutions Mallorca</div>

</body>
</html>