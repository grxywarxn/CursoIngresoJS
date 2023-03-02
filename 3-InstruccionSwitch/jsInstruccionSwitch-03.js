//Luis Claros
/*
// 3- De 5 personas que suben a un avión necesitamos tomar y validar los siguientes datos:
// nombre , asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].

// a)Informar el último asiento ingresado con el nombre  y su importe.
// b)La edad promedio de las mujeres.
// c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
// d)el minimo importe ingresado por un pasaje de un pasajero sexo f.

// Pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let ingNombre;
	let ingAsiento;
	let ingImporte;
	let ingSexo;
	let ingEdad;

	let nombreUltimoAsiento;
	let importeUltimoAsiento;

	let acumEdadMujeres = 0;
	let contMujeres = 0;
	let promedioEdadMujeres;

	let banderaMaxImporteNoBinario = true;
	let maxImporteNoBinario;

	let minImporteMujer;

	for (let i = 0; i < 5; i++) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingAsiento = parseInt(prompt("Ingrese su número de asiento: (entre 1  y 100)"));
		while (isNaN(ingAsiento) || ingAsiento < 1 || ingAsiento > 100) {
			ingAsiento = parseInt(prompt("Error. Ingrese su número de asiento: (entre 1  y 100)"));
		}
		ingImporte = parseInt(prompt("Ingrese el importe del pasaje: (entre 1  y 300000)"));
		while (isNaN(ingImporte) || ingImporte < 0 || ingImporte > 300000) {
			ingImporte = parseInt(prompt("Error. Ingrese el importe del pasaje: (entre 0  y 300000)"));
		}
		ingSexo = prompt("Ingrese su sexo: masculino, femenino o no binario")
		ingSexo = ingSexo.toLowerCase();
		while (ingSexo != "masculino" && ingSexo != "femenino" && ingSexo != "no binario") {
			ingSexo = prompt("Error. Ingrese su sexo: masculino, femenino o no binario");
		}
		ingEdad = parseInt(prompt("Ingrese su edad (1 a 100)"))
		while (isNaN(ingEdad) || ingEdad < 1 || ingEdad > 100) {
			ingEdad = parseInt(prompt("Error: ingrese una edad válida (1 a 100)"));
		}
		if (i == 4) {
			nombreUltimoAsiento = ingNombre;
			importeUltimoAsiento = ingImporte;
		}
		switch (ingSexo) {
			case "femenino":
				if (contMujeres == 0 || ingImporte < minImporteMujer) {
					minImporteMujer = ingImporte;
				}
				contMujeres = contMujeres + 1;
				acumEdadMujeres = acumEdadMujeres + ingEdad;
				break;
			case "no binario":
				if (banderaMaxImporteNoBinario == true || ingImporte > maxImporteNoBinario) {
					maxImporteNoBinario = ingImporte;
					banderaMaxImporteNoBinario = false;
				}
				break;
		}
	}
	promedioEdadMujeres = acumEdadMujeres / contMujeres;

	// a)Informar el último asiento ingresado con el nombre  y su importe.
	console.log("El nombre de la persona del último asiento ingresado es: " + nombreUltimoAsiento + " y el importe que pagó es: " + importeUltimoAsiento);
	// b)La edad promedio de las mujeres.
	if (promedioEdadMujeres != 0) {
		console.log("La edad promedio de las mujeres es: " + promedioEdadMujeres);
	} else {
		console.log("No se registraron mujeres para calcular un promedio etario");
	}
	// c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
	if (banderaMaxImporteNoBinario == false) {
		console.log("el maximo importe ingresado por un pasaje de un pasajero de sexo no binario es: " + maxImporteNoBinario);
	} else {
		console.log("No se registraron pasajeros no binarios");
	}
	// d)el minimo importe ingresado por un pasaje de un pasajero sexo f.
	if (contMujeres != 0) {
		console.log("el minimo importe ingresado por un pasaje de un pasajero sexo femenino es: " + minImporteMujer);
	} else {
		console.log("No se registraron pasajeros mujeres");
	}

}