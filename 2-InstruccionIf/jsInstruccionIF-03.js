//Luis Claros

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){

		mensaje = "Usted es mayor de edad";

	}else{

		mensaje = "Usted es menor de edad";

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN