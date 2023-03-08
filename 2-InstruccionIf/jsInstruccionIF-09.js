//Luis Claros
/*Parcial 2020 3 bis: /* "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
//a)La cantidad de temperaturas pares.
//b)la cantidad de temperaturas impares de europa
//c)El nombre del pais con menos habitantes
//d)la cantidad de paises que superan los 40 grados.
//e)la cantidad de paises de america que tienen menos de 0 grados .
//f)el promedio de habitantes entre los paises ingresados .
//g)el promedio de habitantes entre los paises que superan los 40 grados
//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
//i) que continente tiene mas habitantes.*/

function mostrar() {
	let ingContinente;
	let ingNombrePaís;
	let ingCantidadHabitantes;
	let ingNivelDePobreza;
	let ingTemperaturaMínimaRegistrada;

	let contadorTemperaturasPares = 0;
	let contadorTemperaturasImparesEuropa = 0;
	let minHabitantes;
	let nombrePaísMinHabitantes;
	let contadorPaísesMasDe40 = 0;
	let contadorPaísesAmericaBajoCero = 0;
	let acumuladorTotalHabitantes = 0;
	let promedioCantidadHabitantesTotal;
	let acumuladorHabitantesPaísesMasDe40 = 0;
	let promedioHabitantesPaísesMasDe40;
	let banderaTemperaturaMinima;
	let minTemperatura;
	let nombrePaísMinTemperatura;
	let acumuladorHabitantesAmerica = 0;
	let acumuladorHabitantesAsia = 0;
	let acumuladorHabitantesEuropa = 0;
	let acumuladorHabitantesAfrica = 0;
	let acumuladorHabitantesOceania = 0;
	let continenteConMasHabitantes;

	for (let i = 0; i < 5; i++) {
		ingContinente = prompt("Ingrese el nombre del continente: 'america', 'asia', 'europa', 'oceania' o 'africa'");
		ingContinente = ingContinente.toLowerCase();
		while (ingContinente != "america" && ingContinente != "asia" && ingContinente != "europa" && ingContinente != "oceania" && ingContinente != "africa") {
			ingContinente = prompt("Ingrese el nombre del continente: 'america', 'asia', 'europa', 'oceania' o 'africa'")
		}
		ingNombrePaís = prompt("Ingrese el nombre del país: ");
		while (!isNaN(ingNombrePaís)) {
			ingNombrePaís = prompt("Error. Ingrese el nombre del país: ");
		}
		ingCantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones (1 a 7000)"))
		while (isNaN(ingCantidadHabitantes) || ingCantidadHabitantes < 0 || ingCantidadHabitantes > 7000) {
			ingCantidadHabitantes = parseInt(prompt("Error. Ingrese la cantidad de habitantes en millones (1 a 7000)"));
		}
		if (ingContinente == "europa") {
			ingNivelDePobreza = prompt("Ingrese el nivel de pobreza del país: rico o millonario")
			ingNivelDePobreza = ingNivelDePobreza.toLowerCase();
			while (ingNivelDePobreza != "rico" && ingNivelDePobreza != "millonario") {
				ingNivelDePobreza = prompt("Error. Ingrese el nivel de pobreza del país: rico o millonario");
			}
		} else {
			ingNivelDePobreza = prompt("Ingrese el nivel de pobreza del país: pobre, rico o millonario")
			ingNivelDePobreza = ingNivelDePobreza.toLowerCase();
			while (ingNivelDePobreza != "pobre" && ingNivelDePobreza != "rico" && ingNivelDePobreza != "millonario") {
				ingNivelDePobreza = prompt("Error. Ingrese el nivel de pobreza del país: pobre, rico o millonario");
			}
		}
		ingTemperaturaMínimaRegistrada = parseFloat(prompt("Ingrese la temperatura mínima registrada: (-50 a 50)"));
		while (isNaN(ingTemperaturaMínimaRegistrada) || ingTemperaturaMínimaRegistrada < -50 || ingTemperaturaMínimaRegistrada > 50) {
			ingTemperaturaMínimaRegistrada = parseFloat(prompt("Error. Ingrese la temperatura mínima registrada: (-50 a 50)"));
		}
		//a)La cantidad de temperaturas pares.
		if (ingTemperaturaMínimaRegistrada % 2 == 0) {
			contadorTemperaturasPares = contadorTemperaturasPares + 1;
		}
		switch (ingContinente) {
			case "america":
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + ingCantidadHabitantes;
				//e)la cantidad de paises de america que tienen menos de 0 grados .
				if (ingTemperaturaMínimaRegistrada < 0) {
					contadorPaísesAmericaBajoCero = contadorPaísesAmericaBajoCero + 1;
				}
				break;
			case "asia":
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + ingCantidadHabitantes;
				break;
			case "europa":
				acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + ingCantidadHabitantes;
				//b)la cantidad de temperaturas impares de europa
				if (ingTemperaturaMínimaRegistrada % 2 != 0) {
					contadorTemperaturasImparesEuropa = contadorTemperaturasImparesEuropa + 1;
				}
				break;
			case "oceania":
				acumuladorHabitantesOceania = acumuladorHabitantesOceania + ingCantidadHabitantes;
				break;
			case "africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + ingCantidadHabitantes;
				break;
		}
		//c)El nombre del pais con menos habitantes
		if (i == 0 || ingCantidadHabitantes < minHabitantes) {
			minHabitantes = ingCantidadHabitantes;
			nombrePaísMinHabitantes = ingNombrePaís;
		}
		//d)la cantidad de paises que superan los 40 grados.
		//g)el promedio de habitantes entre los paises que superan los 40 grados
		if (ingTemperaturaMínimaRegistrada > 40) {
			contadorPaísesMasDe40 = contadorPaísesMasDe40 + 1;
			acumuladorHabitantesPaísesMasDe40 = acumuladorHabitantesPaísesMasDe40 + ingCantidadHabitantes;
		}
		//f)el promedio de habitantes entre los paises ingresados .
		acumuladorTotalHabitantes = acumuladorTotalHabitantes + ingCantidadHabitantes;
		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.}
		if (i == 0 || ingTemperaturaMínimaRegistrada < minTemperatura) {
			minTemperatura = ingTemperaturaMínimaRegistrada;
			nombrePaísMinTemperatura = ingNombrePaís;
		}
	} //FIN DEL FOR
	//f)el promedio de habitantes entre los paises ingresados.
	if (acumuladorTotalHabitantes > 0) {
		promedioCantidadHabitantesTotal = acumuladorTotalHabitantes / 5;
	}
	//g)el promedio de habitantes entre los paises que superan los 40 grados
	if (contadorPaísesMasDe40 > 0) {
		promedioHabitantesPaísesMasDe40 = acumuladorHabitantesPaísesMasDe40 / contadorPaísesMasDe40;
	}
	//i) que continente tiene mas habitantes.*/
	if (acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesOceania && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica) {
		continenteConMasHabitantes = "America";
	} else if (acumuladorHabitantesAsia > acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesOceania && acumuladorHabitantesAsia > acumuladorHabitantesAfrica) {
		continenteConMasHabitantes = "Asia";
	} else if (acumuladorHabitantesEuropa > acumuladorHabitantesOceania && acumuladorHabitantesEuropa > acumuladorHabitantesAfrica) {
		continenteConMasHabitantes = "Europa";
	} else if (acumuladorHabitantesOceania > acumuladorHabitantesAfrica) {
		continenteConMasHabitantes = "Oceania"
	} else {
		continenteConMasHabitantes = "Africa"
	}
	//a)La cantidad de temperaturas pares.
	if (contadorTemperaturasPares > 0) {
		console.log("La cantidad de temperaturas pares es: " + contadorTemperaturasPares);
	} else {
		console.log("No se registraron temperaturas pares");
	}	
	//b)la cantidad de temperaturas impares de europa
	if (contadorTemperaturasImparesEuropa) {
		console.log("La cantidad de temperaturas impares en Europa es: " + contadorTemperaturasImparesEuropa);
	} else {
		console.log("No se registraron temperaturas impares en Europa");
	}	
	//c)El nombre del pais con menos habitantes
	console.log("El país con menos habitantes es: " + nombrePaísMinHabitantes);
	//d)la cantidad de paises que superan los 40 grados.
	if (contadorPaísesMasDe40 > 0) {
		console.log("La cantidad de paises que superan los 40 gradoes es: " + contadorPaísesMasDe40);
	} else {
		console.log("No se registraron paises que superen los 40 grados");
	}	
	//e)la cantidad de paises de america que tienen menos de 0 grados .
	if (contadorPaísesAmericaBajoCero > 0) {
		console.log("La cantidad de paises Americanos que tienen menos de 0 grados es: " + contadorPaísesAmericaBajoCero);
	} else {
		console.log("No se registraron paises Americanos que tengan menos de 0 grados");
	}	
	//f)el promedio de habitantes entre los paises ingresados.
	console.log("El promedio de habitantes entre todos los países ingresados (expresado en millones) es: " + promedioCantidadHabitantesTotal);
	//g)el promedio de habitantes entre los paises que superan los 40 grados
	if (contadorPaísesMasDe40 > 0) {
		console.log("El promedio de habitantes entre los paises que superan los 40 grados es: " + promedioHabitantesPaísesMasDe40);
	} else {
		console.log("No se registraron ingresos de paises que superen los 40 grados");
	}	
	//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	console.log("La temperatura mínima ingresada es: " + minTemperatura + " y el país que la registró es: " + nombrePaísMinTemperatura);
	//i) que continente tiene mas habitantes.
	console.log("El continente con más habitantes es: " + continenteConMasHabitantes);
}


/*
	let numRandom;
	let mensaje;
	let max;
	let min;

	max = 10;
	min = 1;
	numRandom = Math.floor(Math.random()*max + min);
	mensaje = "El número random es: " + numRandom;

	console.log(mensaje);
}

La función Math.floor() 
La funcion Math.ceil() 
La funcionMath.roun()Math.random(
pueden buscar todas esas */