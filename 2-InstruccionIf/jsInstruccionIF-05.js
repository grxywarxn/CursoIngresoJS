//Luis Claros
/*Parcial 2020 2 bis: /
"La veterinaria" pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
//a) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
//b) mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
function mostrar() {
	let ingTipoAnimal;
	let ingRazaAnimal;
	let ingEdadAnimal;
	let ingNombreAnimal;

	let contadorPerros = 0;
	let contadorGatos = 0;
	let contadorPajaros = 0;
	let contadorOtros = 0;

	let maxEdadPerros;
	let nombreMaxEdadPerros;
	let maxEdadGatos;
	let nombreMaxEdadGatos;
	let maxEdadPajaros;
	let nombreMaxEdadPajaros;
	let maxEdadOtros;
	let nombreMaxEdadOtros;

	let razaGatosConMasCantidad;
	let contadorSiames = 0;
	let contadorTurco = 0;
	let contadorPeterbald = 0;
	let contadorGenerico = 0;
	let acumuladorEdadSiames = 0;
	let aucmuladorEdadTurco = 0;
	let acumuladorEdadPeterbald = 0;
	let acumuladorEdadGenerico = 0;
	let promedioEdadSiames;
	let promedioEdadTurco;
	let promedioEdadPeterbald;
	let promedioEdadGenerico;
	let maxEdadPromedio;
	let continuar = true;


	while (continuar == true) {
		ingTipoAnimal = prompt("ingrese el tipo de animal: 'perro', 'gato', 'pajaro' u 'otros'");
		ingTipoAnimal = ingTipoAnimal.toLowerCase();
		while (ingTipoAnimal != "perro" && ingTipoAnimal != "gato" && ingTipoAnimal != "pajaro" && ingTipoAnimal != "otros") {
			ingTipoAnimal = prompt("Ingrese el tipo de animal: 'perro', 'gato', 'pajaro' u 'otros'")
		}
		switch (ingTipoAnimal) {
			case "perro":
				ingRazaAnimal = prompt("ingrese la raza del perro: 'pastor', 'toy' o 'callejero'");
				ingRazaAnimal = ingRazaAnimal.toLowerCase();
				while (ingRazaAnimal != "pastor" && ingRazaAnimal != "toy" && ingRazaAnimal != "callejero") {
					ingRazaAnimal = prompt("Ingrese la raza del perro: 'pastor', 'toy' o 'callejero'")
				}
				ingEdadAnimal = parseInt(prompt("Ingrese la edad del perro (1 a 20)"))
				while (isNaN(ingEdadAnimal) || ingEdadAnimal < 1 || ingEdadAnimal > 20) {
					ingEdadAnimal = parseInt(prompt("Error. ingrese la edad del perro (1 a 20)"));
				}
				break;
			case "gato":
				ingRazaAnimal = prompt("ingrese la raza del gato: 'siames', 'turco', 'peterbald' o 'generico'");
				ingRazaAnimal = ingRazaAnimal.toLowerCase();
				while (ingRazaAnimal != "siames" && ingRazaAnimal != "turco" && ingRazaAnimal != "peterbald" && ingRazaAnimal != "generico") {
					ingRazaAnimal = prompt("Ingrese la raza del gato: 'siames', 'turco', 'peterbald' o 'generico'")
				}
				ingEdadAnimal = parseInt(prompt("Ingrese la edad del gato (1 a 20)"))
				while (isNaN(ingEdadAnimal) || ingEdadAnimal < 1 || ingEdadAnimal > 20) {
					ingEdadAnimal = parseInt(prompt("Error. Ingrese la edad del gato (1 a 20)"));
				}
				break;
			case "pajaro":
			case "otros":
				ingRazaAnimal = prompt("Ingrese la raza del animal: ");
				ingRazaAnimal = ingRazaAnimal.toLowerCase();
				while (!isNaN(ingRazaAnimal)) {
					ingRazaAnimal = prompt("Error. Ingrese la raza del animal: ");
				}
				if (ingTipoAnimal == "pajaro") {
					ingEdadAnimal = parseInt(prompt("Ingrese la edad del pajaro (1 a 50)"))
					while (isNaN(ingEdadAnimal) || ingEdadAnimal < 1 || ingEdadAnimal > 50) {
						ingEdadAnimal = parseInt(prompt("Error. Ingrese la edad del pajaro (1 a 50)"));
					}
				} else {
					ingEdadAnimal = parseInt(prompt("Ingrese la edad del animal (1 a 100)"))
					while (isNaN(ingEdadAnimal) || ingEdadAnimal < 1 || ingEdadAnimal > 100) {
						ingEdadAnimal = parseInt(prompt("Error. Ingrese la edad del animal (1 a 100)"));
					}
				}
		}
		ingNombreAnimal = prompt("Ingrese el nombre del animal: ");
		while (!isNaN(ingNombreAnimal)) {
			ingNombreAnimal = prompt("Error. Ingrese el nombre del animal: ");
		}

		switch (ingTipoAnimal) {
			case "perro":
				if (contadorPerros == 0 || ingEdadAnimal > maxEdadPerros) {
					maxEdadPerros = ingEdadAnimal;
					nombreMaxEdadPerros = ingNombreAnimal;
				}
				contadorPerros = contadorPerros + 1;
				break;
			case "gato":
				if (contadorGatos == 0 || ingEdadAnimal > maxEdadGatos) {
					maxEdadGatos = ingEdadAnimal;
					nombreMaxEdadGatos = ingNombreAnimal;
				}
				switch (ingRazaAnimal) {
					case "siames":
						contadorSiames = contadorSiames + 1;
						acumuladorEdadSiames = acumuladorEdadSiames + ingEdadAnimal;
						break;
					case "turco":
						contadorTurco = contadorTurco + 1;
						aucmuladorEdadTurco = aucmuladorEdadTurco + ingEdadAnimal;
						break;
					case "peterbald":
						contadorPeterbald = contadorPeterbald + 1;
						acumuladorEdadPeterbald = acumuladorEdadPeterbald + ingEdadAnimal;
						break;
					case "generico":
						contadorGenerico = contadorGenerico + 1;
						acumuladorEdadGenerico = acumuladorEdadGenerico + ingEdadAnimal;
						break;
				}
				contadorGatos = contadorGatos + 1;
				break;
			case "pajaro":
				if (contadorPajaros == 0 || ingEdadAnimal > maxEdadPajaros) {
					maxEdadPajaros = ingEdadAnimal;
					nombreMaxEdadPajaros = ingNombreAnimal;
				}
				contadorPajaros = contadorPajaros + 1;
				break;
			case "otros":
				if (contadorOtros == 0 || ingEdadAnimal > maxEdadOtros) {
					maxEdadOtros = ingEdadAnimal;
					nombreMaxEdadOtros = ingNombreAnimal;
				}
				contadorOtros = contadorOtros + 1;
				break;
		}
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	if (contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico) {
		razaGatosConMasCantidad = "Siames";

	} else if (contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico) {
		razaGatosConMasCantidad = "Turco";
	} else if (contadorPeterbald > contadorGenerico) {
		razaGatosConMasCantidad = "Peterbald";
	} else {
		razaGatosConMasCantidad = "Generico"
	}
	if (contadorSiames > 0) {
		promedioEdadSiames = acumuladorEdadSiames / contadorSiames;
		maxEdadPromedio = promedioEdadSiames;
	}
	if (contadorTurco > 0) {
		promedioEdadTurco = aucmuladorEdadTurco / contadorTurco;
		maxEdadPromedio = promedioEdadTurco;
	}
	if (contadorPeterbald > 0) {
		promedioEdadPeterbald = acumuladorEdadPeterbald / contadorPeterbald;
		maxEdadPromedio = promedioEdadPeterbald;
	}
	if (contadorGenerico > 0) {
		promedioEdadGenerico = acumuladorEdadGenerico / contadorGenerico;
		maxEdadPromedio = promedioEdadGenerico;
	}

	//a) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
	if (contadorPerros > 0) {
		console.log("El perro más viejo registrado es: " + nombreMaxEdadPerros);
	} else {
		console.log("No se registraron ingresos de perros");
	}
	if (contadorGatos > 0) {
		console.log("El gato más viejo registrado es: " + nombreMaxEdadGatos);
	} else {
		console.log("No se registraron ingresos de gatos");
	}
	if (contadorPajaros > 0) {
		console.log("El pájaro más viejo registradoes: " + nombreMaxEdadPajaros);
	} else {
		console.log("No se registraron ingresos de pájaros");
	}
	if (contadorOtros > 0) {
		console.log("El animal más viejo registrado de tipo 'otro' es: " + nombreMaxEdadOtros);
	} else {
		console.log("No se registraron ingresos de otro tipo de animal");
	}
	//b) mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
	if (contadorGatos > 0) {
		console.log("La raza de gatos con más cantidad de ingresos es: " + razaGatosConMasCantidad + " y el promedio de edad de esa raza es: " + maxEdadPromedio);
	} else {
		console.log("No se registraron ingresos de gatos");
	}
}