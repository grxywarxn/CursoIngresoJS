//luis Claros
/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
//a) la Nacionalidad de la persona con mas temperatura.
//b) Cuantos mayores de edad( más de 17) están solteros
//c) La cantidad de Mujeres que hay solteras o viudas.
//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
//e) El promedio de edad entre las mujeres casadas. */
function mostrar() {
	let ingNombre;
	let ingNacionalidad;
	let ingEdad;
	let ingGenero;
	let ingEstadoCivil;
	let ingTemperaturaCorporal;

	let banderaNacionalidadMaxTemperatura;
	let nacionalidadMaxTemperatura;
	let maxTemperatura;

	let contMayoresEdadSolteros;
	let contMujeresSolterasViudas;
	let contTerceraEdadFiebre;

	let acumEdadMujeresCasadas;
	let contEdadMujeresCasadas;
	let promedioEdadMujeresCasadas;
	let continuar;

	banderaNacionalidadMaxTemperatura = true;
	contMayoresEdadSolteros = 0;
	contMujeresSolterasViudas = 0;
	contTerceraEdadFiebre = 0;
	contEdadMujeresCasadas = 0;
	acumEdadMujeresCasadas = 0;
	continuar = true;

	while (continuar == true) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingNacionalidad = prompt("Ingrese su nacionalidad: ")
		ingNacionalidad = ingNacionalidad.toLowerCase();
		while (!isNaN(ingNacionalidad)) {
			ingNacionalidad = prompt("Error. Ingrese su nacionalidad: ");
		}
		ingEdad = parseInt(prompt("Ingrese su edad (1 a 130)"))
		while (isNaN(ingEdad) || ingEdad < 0 || ingEdad > 130) {
			ingEdad = parseInt(prompt("Error: ingrese una edad válida (1 a 130)"));
		}
		ingGenero = prompt("Ingrese su género: masculino, femenino o no binario")
		ingGenero = ingGenero.toLowerCase();
		while (!isNaN(ingGenero) && ingGenero != "masculino" && ingGenero != "femenino" && ingGenero != "no binario") {
			ingGenero = prompt("Error. Ingrese su género: masculino, femenino o no binario");
		}
		ingEstadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo")
		ingEstadoCivil = ingEstadoCivil.toLowerCase();
		while (!isNaN(ingEstadoCivil) || ingEstadoCivil != "soltero" && ingEstadoCivil != "casado" && ingEstadoCivil != "viudo") {
			ingEstadoCivil = prompt("Error. Ingrese su estado civil: soltero, casado o viudo");
		}
		ingTemperaturaCorporal = parseFloat(prompt("Ingrese su temperatura: "));
		while (isNaN(ingTemperaturaCorporal) || ingTemperaturaCorporal < 34 || ingTemperaturaCorporal > 44) {
			ingTemperaturaCorporal = parseFloat(prompt("Error. Ingrese su temperatura: "));
		}

		if (banderaNacionalidadMaxTemperatura == true || ingTemperaturaCorporal > maxTemperatura) {
			maxTemperatura = ingTemperaturaCorporal;
			nacionalidadMaxTemperatura = ingNacionalidad;
			bandera = false;
		}

		switch (ingEstadoCivil) {
			case "soltero":
				if (ingEdad > 17) {
					contMayoresEdadSolteros = contMayoresEdadSolteros + 1;
				}
				if (ingGenero == "femenino") {
					contMujeresSolterasViudas = contMujeresSolterasViudas + 1;
				}

				break;
			case "casado":
				if (ingGenero == "femenino") {
					acumEdadMujeresCasadas = acumEdadMujeresCasadas + ingEdad;
					contEdadMujeresCasadas = contEdadMujeresCasadas + 1;
				}

				break;
			case "viudo":
				if (ingGenero == "femenino") {
					contMujeresSolterasViudas = contMujeresSolterasViudas + 1;
				}

				break;
		}
		if (ingEdad > 59 && ingTemperaturaCorporal > 37) {
			contTerceraEdadFiebre = contTerceraEdadFiebre + 1;
		}
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	promedioEdadMujeresCasadas = acumEdadMujeresCasadas / contEdadMujeresCasadas;

	//a) la Nacionalidad de la persona con mas temperatura.
	console.log("La Nacionalidad de la persona con mas temperatura es: " + nacionalidadMaxTemperatura);
	//b) Cuantos mayores de edad( más de 17) están solteros
	console.log("La cantidad de mayores de edad solteros es: " + contMayoresEdadSolteros);
	//c) La cantidad de Mujeres que hay solteras o viudas.
	console.log("La cantidad de Mujeres solteras o viudas es: " + contMujeresSolterasViudas);
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	console.log("La cantidad de personas de la tercera edad con más de 38 grados de temperatura es: " + contTerceraEdadFiebre);
	//e) El promedio de edad entre las mujeres casadas.
	if(contEdadMujeresCasadas != 0){
	console.log("El promedio de edad entre las mujeres casadas es: " + promedioEdadMujeresCasadas);
	}else{
		console.log("No se registraron mujeres casadas para calcular un promedio.");
	}
}
