//Luis Claros

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17){

		mensaje = "Sos adolescente";

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN