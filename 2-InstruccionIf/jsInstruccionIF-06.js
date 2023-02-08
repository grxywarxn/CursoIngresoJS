//Luis Claros

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13)
	{
		mensaje = "Usted es un niño";

	}else
	{
	if(edad < 18)
	{	
		mensaje = "Usted es adolescente";

	}else{

		mensaje = "Usted es mayor de edad";
	}		
	}

	alert(mensaje);
}
	

//FIN DE LA FUNCIÓN