// Luis Claros
/*
Recu 2020 3 bis: /*Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
//a)El destino más elegido.
//b)El nombre del pasajero titular que lleva menos pasajeros.
//c)El promedio de personas, que viajan en temporada alta.
//d)El total de personas que viajaron a Europa.
*/
function sumar() {
	let ingNombre;
	let ingDestino;
	let ingTemporada;
	let ingCantidadPasajeros;

	let contadorBrasil = 0;
	let contadorCaribe = 0;
	let contadorEuropa = 0;
	let destinoMasElegido;

	let banderaMenosPasajeros = true;
	let minPasajeros;
	let nombreMinPasajeros;

	let acumuladorPasajerosTemporadaAlta = 0;
	let contadorTemporadaAlta = 0;
	let promedioPasajerosTemporadaAlta;

	let acumuladorEuropa = 0;
	let continuar = true;


	while (continuar == true) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingDestino = prompt("ingrese su destino: 'brasil', 'caribe' o 'europa'");
		ingDestino = ingDestino.toLowerCase();
		while (ingDestino != "brasil" && ingDestino != "caribe" && ingDestino != "europa") {
			ingDestino = prompt("Ingrese su destino: 'brasil', 'caribe' o 'europa'")
		}
		ingTemporada = prompt("ingrese la temporada del viaje: 'alta', 'media' o 'baja'");
		ingTemporada = ingTemporada.toLowerCase();
		while (ingTemporada != "alta" && ingTemporada != "media" && ingTemporada != "baja") {
			ingTemporada = prompt("Ingrese la temporada del viaje: 'alta', 'media' o 'baja'")
		}
		ingCantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"))
		while (isNaN(ingCantidadPasajeros) || ingCantidadPasajeros < 1 || ingCantidadPasajeros > 20) {
			ingCantidadPasajeros = parseInt(prompt("Error: La cantidad de pasajeros"));
		}

		switch (ingDestino) {
			case "brasil":
				contadorBrasil = contadorBrasil + 1;
				break;
			case "caribe":
				contadorCaribe = contadorCaribe + 1;
				break;
			case "europa":
				contadorEuropa = contadorEuropa + 1;
				acumuladorEuropa = acumuladorEuropa + ingCantidadPasajeros;
				break;
		}
		if (contadorBrasil > contadorCaribe && contadorBrasil > contadorEuropa) {
			destinoMasElegido = "Brasil";
		} else if (contadorCaribe > contadorEuropa) {
			destinoMasElegido = "Caribe";
		} else {
			destinoMasElegido = "Europa";
		}
		if (banderaMenosPasajeros == true || ingCantidadPasajeros < minPasajeros) {
			minPasajeros = ingCantidadPasajeros;
			nombreMinPasajeros = ingNombre;
			banderaMenosPasajeros = false;
		}
		if (ingTemporada == "alta") {
			contadorTemporadaAlta = contadorTemporadaAlta + 1;
			acumuladorPasajerosTemporadaAlta = acumuladorPasajerosTemporadaAlta + ingCantidadPasajeros;
		}
		continuar = confirm("¿Desea seguir ingresando datos?");
	}
	if (contadorTemporadaAlta > 0) {
		promedioPasajerosTemporadaAlta = acumuladorPasajerosTemporadaAlta / contadorTemporadaAlta;
	}
	//MOSTRAR RESULTADOS
	//a)El destino más elegido.
	console.log("El destino más elegido es: " + destinoMasElegido);
	//b)El nombre del pasajero titular que lleva menos pasajeros.
	console.log("El nombre del pasajero titular que lleva menos pasajeros es: " + nombreMinPasajeros);
	//c)El promedio de personas, que viajan en temporada alta.
	if (contadorTemporadaAlta > 0) {
		console.log("El promedio de personas que viajan en temporada alta es: " + promedioPasajerosTemporadaAlta);
	} else {
		console.log("No se registraron personas que viajan en temporada alta");
	}	
	//d)El total de personas que viajaron a Europa.
	if (contadorEuropa > 0) {
		console.log("El total de personas que viajaron a Europa es: " + acumuladorEuropa);
	} else {
		console.log("No se registraron personas que viajen a Europa");
	}	
}


