//Luis Claros

function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero"){

	}else if(edad >= 18 && estadoCivil == "Soltero"){
		mensaje = "Es soltero y no es menor.";
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN