//Luis Claros
/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche" :
			mensaje = "En Bariloche hace FRIO.";
			break;
		case "Cataratas" :
			mensaje = "En Cataratas hace CALOR.";
			break;
		case "Mar del plata" :
			mensaje = "En Mar del plata hace CALOR.";
			break;
		case "Ushuaia" :
			mensaje = "En Ushuaia hace FRIO.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN