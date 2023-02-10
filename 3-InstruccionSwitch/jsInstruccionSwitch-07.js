//Luis Claros
/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche" :
			mensaje = "Bariloche se encuentra al Oeste del país.";
			break;
		case "Cataratas" :
			mensaje = "Cataratas se encuentra al Norte del país.";
			break;
		case "Mar del plata" :
			mensaje = "Mar del plata se encuentra al Este del país.";
			break;
		case "Ushuaia" :
			mensaje = "Ushuaia se encuentra al Sur del país.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN