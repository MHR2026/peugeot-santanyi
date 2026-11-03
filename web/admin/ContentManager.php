<?php

include_once('GenericCode.php');


class ContentManager
{
	protected $Filename,$XmlDoc,$nPlaces,$Places,$CurrentPlaceId,$Langs;
	
	
	public function __construct($filename,$langs=NULL)
	{
		$this->Filename = $filename;
		$this->XmlDoc = NULL;
		$this->nPlaces = 0;
		$this->Places = NULL;
		$this->CurrentPlaceId = NULL;
		$this->Langs = $langs;
	}
	
	function load()
	{
		if( ($this->XmlDoc = simplexml_load_file( $this->Filename )) == false )
			exit('Error reading XML file');
		
		//$this->nPlaces = $this->XmlDoc->count();
	}
	
	
	function insertControlBar( $id )
	{
		if( $this->XmlDoc == NULL )
			$this->load();
		
		echo '<div id="'.$id.'">';
		echo '<form id="ControlBarFrm" method="post" action="">';
		echo '<button id="ExitBtn" type="button" onclick="closeSession()">Sortir</button>';
		
		$Options = array();
		foreach( $this->XmlDoc->Place as $place )
		{
			$Options[ intval($place['id']) ] = (string)$place['name'];
		}
				
		insertSelectElement('id="Selector" name="Place" onchange="sendForm(\'ControlBarFrm\')"',$Options,$this->CurrentPlaceId );

		echo '<button id="AddBtn" type="button" onclick="addNewItem(true)">Afegir</button>';
		echo '</form></div>';

	}

/*
	function getPlaceId()
	{
		echo 'PlaceId=';
		
		if( isset($this->CurrentPlaceId) )
			echo $this->CurrentPlaceId;
		else
			echo 'NULL';
		echo '<br/>';
	}
*/
	
	
	function insertEditionTable( $id )
	{
		if( $this->XmlDoc == NULL )
			$this->load();
		
		$Path = dirname( $this->Filename ).'/';
		
		echo '<div id="'.$id.'">';
		echo '<table border="1" cellspacing="0">';
		
		$CurrentPlace = $this->findCurrentPlace();
		
		echo '<tr>';
		foreach($this->Langs as $lang)
		{
			echo '<td align="center">'.$lang.'</td>';
		}
		echo '<td colspan="2"></td></tr>';
		
		
		foreach($CurrentPlace->Event as $event)
		{
			$Image = $Path.$event->Image;
			
			$Texts = array();
			foreach($event->Text as $text)
			{
				$Texts[ (string)$text['lang'] ] = (string)$text;
			}
					
			echo '<tr>';
			for($i=0;$i<count($this->Langs);$i++)
			{
				echo '<td>'.nl2br( $Texts[ $this->Langs[$i] ] ).'</td>';
			}
			echo '<td><img src="'.$Image.'" /></td>';
			echo '<td>';
			
			echo '<input type="button" value="Eliminar" onclick="redirectTo(\'?action=delete&id='.$event['id'].'\')" />';
			
			echo '</td>';
			echo '</tr>';
		}
		echo '</table></div>';
	}
	
	function insertContent( $id,$placeid,$lang )
	{
		if( $this->XmlDoc == NULL )
			$this->load();
		
		$this->CurrentPlaceId = $placeid;
		$CurrentPlace = $this->findCurrentPlace();
		
		echo '<div id="ofertas">';
		foreach( $CurrentPlace->Event as $event )
		{
			foreach( $event->Text as $text )
			{
				if( $text['lang'] == $lang )
				{
					$Text = (string)$text;
					break;
				}
			}
			
			$Image = '../events/'.$event->Image;
		
			echo '<div class=foto>';
			echo '<p>'.$Text.'</p>';
			echo '<p><img src="'.$Image.'" /></p>';
			echo '</div>';
		}
		echo '</div>';
	}
	

	function insertNewItemForm( $id )
	{
		echo '<div id="'.$id.'">';
		echo '<form id="formNewItem" action="?action=newitem" method="post" enctype="multipart/form-data" name="formNewItem">';
		for($i=0;$i<count( $this->Langs );$i++)
		{
			echo '<div class="InputWrap">';
			echo '<label for="Text'.$i.'">Publicar texto ('.$this->Langs[$i].'): </label>';
			echo '<textarea id="Text'.$i.'" name="Text'.$i.'" cols="80" rows="7"></textarea>';
			echo '</div>';
		}
		echo '<div class="InputWrap">';
		echo '<label for="FileInput">Cargar Imagen:</label>';
		echo '<input type="file" name="FileInput" id="FileInput" />';
		
		echo '</div>';
		echo '<button type="submit" id="LoadButton">Enviar</button>';
		echo '<button type="reset" id="ClearButton">Borrar</button>';
		echo '<button type="button" id="CloseButton" onclick="addNewItem(false)">Cerrar</button>';
//		echo '<input type="hidden" id="PlaceId" name="PlaceId" value="'.(isset($this->CurrentPlaceId)? $this->CurrentPlaceId: 0).'" />';
		echo '</form></div>';
	}
	
	
	private function findCurrentPlace()
	{
		$CurrentPlace = NULL;		
		if( $this->CurrentPlaceId == NULL )
			return $this->XmlDoc->Place[0];
		
		foreach($this->XmlDoc->Place as $place)
		{
			if( intval($place['id']) == $this->CurrentPlaceId )
				return $place;
		}
	}
	

	protected function addItem()
	{
		$CurrentPlace = $this->findCurrentPlace();			
			
		$id = 0;
		foreach( $CurrentPlace->Event as $event )
			$event['id'] = $id++;
	
		$NewEvent = $CurrentPlace->addChild('Event');
		$NewEvent->addAttribute('id',$id);

				
		if( strlen($_FILES['FileInput']['name']) != 0 )
		{
			$TargetPath = '../events/'.basename( $_FILES['FileInput']['name'] ); 

			if( !move_uploaded_file($_FILES['FileInput']['tmp_name'], $TargetPath) )
				exit("There was an error uploading the file, please try again!");
				
			$NewEvent->addChild('Image',basename( $_FILES['FileInput']['name'] ));
		}
			
		
		for($i=0;$i< count($this->Langs);$i++)
		{
			$value = $_POST['Text'.$i];
			
			$NewText = $NewEvent->addChild('Text',$value);
			$NewText->addAttribute('lang',$this->Langs[$i]);
		}
		
//		$this->XmlDoc->asXML( $this->Filename );

		$dom = new DOMDocument('1.0');
		$dom->preserveWhiteSpace = false;
		$dom->formatOutput = true;
		$dom->loadXML( $this->XmlDoc->asXML() );
		$dom->save( $this->Filename );
	}


	protected function deleteItem( $id )
	{
		$CurrentPlace = $this->findCurrentPlace();
		
		foreach( $CurrentPlace->Event as $event )
		{
			if( $event['id'] == $id )
			{
				$dom = dom_import_simplexml( $event );
				$dom->parentNode->removeChild( $dom );
				break;
			}
		}
		
		$dom = new DOMDocument('1.0');
		$dom->preserveWhiteSpace = false;
		$dom->formatOutput = true;
		$dom->loadXML( $this->XmlDoc->asXML() );
		$dom->save( $this->Filename );
	}

	
	static public function insertAdministrationLink($text)
	{
		echo '<a href="admin/index.php">'.$text.'</a>';
	}
	
	static public function initialize($pass,$file,$langs)
	{	
		if( isset($_GET['action']) )
		{
			switch( $_GET['action'] )
			{
				case 'login':	
								if( isset($_POST['pass']) and (md5($_POST['pass']) == $pass) )
							  	{
									session_start();
									$Cm = new ContentManager( $file,explode(',',$langs) );
									$_SESSION['ContentManager'] = serialize( $Cm );
									header('Location: index.php?admin');
								}
								else
									header('Location: ?error=pass');
								break;
				case 'logout':	session_start();
								session_destroy();
								header('Location: ?');
								break;

				case 'newitem':	$ContentManager = ContentManager::startSession();
								$ContentManager->load();								
								$ContentManager->addItem();
								header('Location: ?admin');
								break;
								
				case 'delete':	$ContentManager = ContentManager::startSession();
								$id = $_GET['id'];								
								$ContentManager->load();
								$ContentManager->deleteItem( $id );
								header('Location: ?admin');
								break;
			} // end switch( $_GET['action'] )
		} // if( isset($_GET['action']) )
		else if( isset($_GET['admin']) )
		{
			$Cm = ContentManager::startSession();
			if( isset($_POST['Place']) )
				$Cm->CurrentPlaceId = $_POST['Place'];
			
			$_SESSION['ContentManager'] = serialize( $Cm );
			
			return $Cm;
		}
		else
		{
			return NULL;
		}
	}
	
	private static function startSession()
	{
		session_start();
		if( !isset($_SESSION['ContentManager']) )
		{
			session_destroy();
			header('Location: index.php?error=endsession');
		}
		else
		{
			return unserialize( $_SESSION['ContentManager'] );
		}
	}
	
	static public function insertLoginForm($id)
	{
		echo '<div id="'.$id.'">';
		
		if( isset( $_GET['error'] ) )
		{
			switch( $_GET['error'] )
			{
				case 'pass':		echo '<div class="LoginErrorMsg">Password incorrecto</div>';break;
				case 'endsession':	echo '<div class="LoginErrorMsg">La sessión a caducado</div>';break;
			}
		}

		echo '<form id="LoginFrm" name="AdminLoginFrm" method="post" action="?action=login">';
		echo '<label for="LoginPass">Contraseña:</label>';
		echo '<input id="LoginPass" type="password" name="pass" tabindex="1" maxlength="12" />';
		echo '<button id="LoginBtn" type="button" tabindex="2" onclick="processLogin()">Entrar</button>';
		echo '</form></div>';
	}
}





?>
