//Luis Claros
/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */
function mostrar()
{
	let estacion;
	let destino;
	let precioBase;
	let porcentaje;
	let precioConPorcentaje;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioBase = 15000;

	switch(estacion){
		case "Invierno" :
			switch(destino){
				case "Bariloche" :
					porcentaje = 20;
					break;
				case "Cataratas" :
				case "Cordoba" :
					porcentaje = -10;
					break;
				case "Mar del plata" :
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche" :
					porcentaje = -20;
					break;
				case "Cataratas" :
				case "Cordoba" :
					porcentaje = 10;
					break;
				case "Mar del plata" :
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño" :
		case "Primavera" :
			switch(destino){
			case "Cordoba" :
				porcentaje = 0;
				break;
			default :
				porcentaje = 10;
				break;
			}
		break;
		}

		precioConPorcentaje = precioBase + precioBase * porcentaje/100;
		mensaje = "Su tarifa a pagar es: $" + precioConPorcentaje;
		alert(mensaje);

	}//FIN DE LA FUNCIÓN