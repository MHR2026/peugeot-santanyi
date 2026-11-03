<?php


/**
  * $attributes:	array ('attribute' => 'value' )
  * $options:		array [] => array('attribute' => 'value')
  * $selected:		value of the selected element
  */
function insertSelectElement($attributes,$options,$selected=NULL)
{
	echo '<select';
	if( isset($attributes) )
	{
		echo ' '.$attributes;
	}
	echo '>';
	
	foreach($options as $value => $text)
	{
		echo '<option value="'.$value.'"';
		
		if( $selected == $value )
			echo ' selected="selected"';
			
		echo '>'.$text.'</option>';
	}
	echo '</select>';
}



?>