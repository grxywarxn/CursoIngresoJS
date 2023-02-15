//Luis Claros
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;

	claveIngresada = prompt("Ingrese la clave");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Ingrese una clave valida");
	}

	mensaje = "Clave correcta";
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
