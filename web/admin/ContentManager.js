// JavaScript Document

function processLogin()
{
	if( document.AdminLoginFrm.pass.value.length == 0 )
	{
		alert ("Falta el nom d'usuari");
		document.AdminLoginFrm.pass.focus();
		return 0;
	}

	document.AdminLoginFrm.submit();
}

function closeSession()
{
		window.location = '?action=logout';
}

function sendForm( formid )
{
	document.getElementById( formid ).submit();
}

function addNewItem( state )
{
	if( state )
		document.formNewItem.style.visibility = "visible";
	else
		document.formNewItem.style.visibility = "hidden";
}

function redirectTo( url )
{
	window.location = url;
}