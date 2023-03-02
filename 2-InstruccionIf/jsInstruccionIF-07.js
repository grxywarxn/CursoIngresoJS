//Luis Claros
/*
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  
Dicho parque se caracteriza por su variedad de montañas rusas. Se pide el ingreso del 
nombre del visitante, 
la edad (mayores a 12 años), 
tipo de pasaporte (sin pasaporte, convencional, premium),
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 
Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
La recaudación en efectivo por las tres montañas rusas.
Porcentaje de visitantes que se subieron a cada montaña rusa.
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
*/

function mostrar() {
	let ingNombre;
	let ingEdad;
	let ingPasaporte;
	let ingMontaña;

	let precioMontañas = 500;
	let descuento = 0;
	let acumuladorFantasma = 0;
	let acumuladorAcuática = 0;
	let acumuladorAdrenalina = 0;
	let contadorFantasma = 0;
	let contadorAcuática = 0;
	let contadorAdrenalina = 0;
	let contadorTotal = 0;
	let porcentajeFantasma;
	let porcentajeAcuática;
	let porcentajeAdrenalina;

	let contadorSinPasaporte = 0;
	let contadorConvencional = 0;
	let contadorPremium = 0;
	let pasaporteMasUtilizado;
	let continuar = true;

	while (continuar == true) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingEdad = parseInt(prompt("Ingrese su edad (12 o más)"))
		while (isNaN(ingEdad) || ingEdad < 11 || ingEdad > 130) {
			ingEdad = parseInt(prompt("Error: ingrese una edad válida (12 o más)"));
		}
		ingPasaporte = prompt("Ingrese su pasaporte: sin pasaporte, convencional o premium")
		ingPasaporte = ingPasaporte.toLowerCase();
		while (ingPasaporte != "sin pasaporte" && ingPasaporte != "convencional" && ingPasaporte != "premium") {
			ingPasaporte = prompt("Error. Ingrese su pasaporte: sin pasaporte, convencional o premium");
		}
		ingMontaña = prompt("ingrese la montaña: 'fantasma', 'acuatica' o 'adrenalina'");
		ingMontaña = ingMontaña.toLowerCase();
		while (ingMontaña != "fantasma" && ingMontaña != "acuatica" && ingMontaña != "adrenalina") {
			ingMontaña = prompt("Ingrese la montaña: 'fantasma', 'acuatica' o 'adrenalina'")
		}

		switch (ingMontaña) {
			case "fantasma":
				switch (ingPasaporte) {
					case "sin pasaporte":
						contadorSinPasaporte = contadorSinPasaporte + 1;
						acumuladorFantasma = acumuladorFantasma + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "convencional":
						contadorConvencional = contadorConvencional + 1;
						descuento = 30;
						acumuladorFantasma = acumuladorFantasma + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "premium":
						contadorPremium = contadorPremium + 1;
						break;
				}
				contadorFantasma = contadorFantasma + 1;
				break;
			case "acuatica":
				switch (ingPasaporte) {
					case "sin pasaporte":
						contadorSinPasaporte = contadorSinPasaporte + 1;
						acumuladorAcuática = acumuladorAcuática + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "convencional":
						contadorConvencional = contadorConvencional + 1;
						descuento = 30;
						acumuladorAcuática = acumuladorAcuática + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "premium":
						contadorPremium = contadorPremium + 1;
						break;
				}
				contadorAcuática = contadorAcuática + 1;
				break;
			case "adrenalina":
				switch (ingPasaporte) {
					case "sin pasaporte":
						contadorSinPasaporte = contadorSinPasaporte + 1;
						acumuladorAdrenalina = acumuladorAdrenalina + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "convencional":
						contadorConvencional = contadorConvencional + 1;
						descuento = 30;
						acumuladorAdrenalina = acumuladorAdrenalina + precioMontañas - precioMontañas * descuento / 100;
						break;
					case "premium":
						contadorPremium = contadorPremium + 1;
						break;
				}
				contadorAdrenalina = contadorAdrenalina + 1;
				break;
		}
		contadorTotal = contadorTotal + 1;
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	porcentajeFantasma = (contadorFantasma * 100 / contadorTotal).toFixed(1)
	porcentajeAcuática = (contadorAcuática * 100 / contadorTotal).toFixed(1)
	porcentajeAdrenalina = (contadorAdrenalina * 100 / contadorTotal).toFixed(1)

	if (contadorSinPasaporte > contadorConvencional && contadorSinPasaporte > contadorPremium) {
		pasaporteMasUtilizado = "Sin Pasaporte";
	} else if (contadorConvencional > contadorSinPasaporte && contadorConvencional > contadorPremium) {
		pasaporteMasUtilizado = "Convencional";
	} else {
		pasaporteMasUtilizado = "Premium";
	}

	//La recaudación en efectivo por las tres montañas rusas.
	console.log("La recaudación total en cada montaña rusa es, Fantasma: " + acumuladorFantasma + ", Acuática: " + acumuladorAcuática + " y Adrenalina: " + acumuladorAdrenalina);
	//Porcentaje de visitantes que se subieron a cada montaña rusa.
	if (porcentajeFantasma != 0) {
		console.log("El porcentaje de visitantes que subió a la montaña fantasma es: " + porcentajeFantasma);
	} else {
		console.log("No se registraron subidas a la montaña fantasma");
	}
	if (porcentajeAcuática != 0) {
		console.log("El porcentaje de visitantes que subió a la montaña acuática es: " + porcentajeAcuática);
	} else {
		console.log("No se registraron subidas a la montaña acuática");
	}if (porcentajeAdrenalina != 0) {
		console.log("El porcentaje de visitantes que subió a la montaña adrenalina es: " + porcentajeAdrenalina);
	} else {
		console.log("No se registraron subidas a la montaña adrenalina");
	}
	//Cuál es el tipo de pasaporte que mas se utilizo(incluyendo los visitantes sin pasaporte)
	console.log("El tipo de pasaporte más usado es: " + pasaporteMasUtilizado);
}
