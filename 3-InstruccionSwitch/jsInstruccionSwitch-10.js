//Luis Claros
/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No Se viaja" a ese lugar
en Invierno: Solo Bariloche informa "Se viaja" los demas destinos "No Se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no Se viaja a Bariloche */
function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno" :
			switch(destino){
				case "Bariloche" :
					mensaje = "Se viaja";
					break;
				default :
					mensaje = "No Se viaja";
					break;
			}
		break;
		case "Verano" :
			switch(destino){
				case "Mar del plata" :
				case "Cataratas" :
					mensaje = "Se viaja";
					break;
				default :
					mensaje = "No Se viaja";
					break;
			}
		break;
		case "Otoño" :
			switch(destino){
				default :
					mensaje = "Se viaja";
					break;
			}
		break;
		case "Primavera" :
			switch(destino){
				case "Bariloche" :
					mensaje = "No Se viaja";
					break;
				default : 
					mensaje = "Se viaja";
					break;
			}
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN