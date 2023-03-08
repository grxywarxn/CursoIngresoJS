//Luis Claros 
/* 
Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
//a)Informar la cantidad de personas de sexo femenino. 
//b)La altura promedio en total de pacientes.
//c)El nombre del hombre con menos peso(si lo hay).
//d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/
function mostrar() {
	let ingNombre;
	let ingAltura;
	let ingPeso;
	let ingSexo;

	let contadorMujeres = 0;
	let acumuladorAlturaTotal = 0;
	let promedioAlturaTotal;
	let banderaMinPesoHombre = true;
	let minPesoHombre;
	let nombreMinPesoHombre;
	let banderaMinPesoNoBinario = true;
	let minPesoNoBinario;
	let nombreMinPesoNoBinario;

	for (let i = 0; i < 1; i++) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingAltura = parseFloat(prompt("Ingrese su altura en centimetros: "));
		while (isNaN(ingAltura) || ingAltura < 1 || ingAltura > 300) {
			ingAltura = parseFloat(prompt("Error. Ingrese su altura en centimetros: "));
		}
		ingPeso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
		while (isNaN(ingPeso) || ingPeso < 1 || ingPeso > 250) {
			ingPeso = parseFloat(prompt("Error. Ingrese su peso en kilogramos: "));
		}
		ingSexo = prompt("Ingrese su sexo: masculino, femenino o no binario")
		ingSexo = ingSexo.toLowerCase();
		while (ingSexo != "masculino" && ingSexo != "femenino" && ingSexo != "no binario") {
			ingSexo = prompt("Error. Ingrese su sexo: masculino, femenino o no binario");
		}
		switch (ingSexo) {
			case "femenino":
				//a)Informar la cantidad de personas de sexo femenino. 
				contadorMujeres = contadorMujeres + 1;
				break;
			case "masculino":
				//c)El nombre del hombre con menos peso(si lo hay).
				if (banderaMinPesoHombre == true || ingPeso < minPesoHombre) {
					minPesoHombre = ingPeso;
					nombreMinPesoHombre = ingNombre;
					banderaMinPesoHombre = false;
				}
				break;
			case "no binario":
				//d)De la persona no binaria, el más flaco. 
				if (banderaMinPesoNoBinario == true || ingPeso < minPesoNoBinario) {
					minPesoNoBinario = ingPeso;
					nombreMinPesoNoBinario = ingNombre
					banderaMinPesoNoBinario = false;
				}
				break;
		}
		//b)La altura promedio en total de pacientes.
		acumuladorAlturaTotal = acumuladorAlturaTotal + ingAltura;
	}
	if (acumuladorAlturaTotal > 0) {
		promedioAlturaTotal = acumuladorAlturaTotal / 7;
	}
	//a)Informar la cantidad de personas de sexo femenino.
	if (contadorMujeres > 0) {
		console.log("La cantidad de personas de sexo femenino es: " + contadorMujeres);
	} else {
		console.log("No se registraron ingresos de personas de sexo femenino");
	}
	//b)La altura promedio en total de pacientes.
		console.log("La altura promedio sobre el total de personas es: " + promedioAlturaTotal);
	//c)El nombre del hombre con menos peso(si lo hay).
	if (banderaMinPesoHombre == false) {
		console.log("El nombre del hombre con menos peso es: " + nombreMinPesoHombre);
	} else {
		console.log("No se registraron ingresos de personas de sexo masculino");
	}
	//d)De la persona no binaria, el más flaco. 
	if (banderaMinPesoNoBinario == false) {
		console.log("El nombre de la persona no binaria con menos peso es: " + nombreMinPesoNoBinario);
	} else {
		console.log("No se registraron ingresos de personas no binarias");
	}
}

