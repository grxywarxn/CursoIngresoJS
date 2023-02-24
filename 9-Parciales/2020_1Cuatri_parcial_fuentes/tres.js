/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar() {
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	let nombrePersonaMasTemperatura;
	let mayorTemperatura;
	let contadorMayoresEdadViudos;
	let contadorHombresSolerosViudos;
	let contadorTerceraEdadTemperatura;
	let acumuladorEdadHombresSolteros;
	let contadorHombresSolteros;
	let promedioEdadHombresSolteros;
	let respuesta;
	let bandera;

	mayorTemperatura = 0;
	contadorHombresSolteros = 0;
	contadorMayoresEdadViudos = 0;
	contadorHombresSolerosViudos = 0;
	contadorTerceraEdadTemperatura = 0;
	acumuladorEdadHombresSolteros = 0;
	respuesta = "si";
	bandera = true;

	while (respuesta == "si") {
		nombreIngresado = prompt("Ingrese su nombre");
		edadIngresada = parseInt(prompt("Ingrese su edad"))
		while (isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 130) {
			edadIngresada = parseInt(prompt("Error: ingrese una edad válida"));
		}
		sexoIngresado = prompt("Ingrese su sexo: f o m")
		while (sexoIngresado != "f" && sexoIngresado != "m") {
			sexoIngresado = prompt("Error: ingrese un sexo válido")
		}
		estadoCivilIngresado = prompt("Ingrese su estado civil: soltero, casado o viudo")
		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo") {
			estadoCivilIngresado = prompt("Error: ingrese un estado civil válido")
		}
		temperaturaIngresada = prompt("Ingrese su temperatura");
		while (isNaN(temperaturaIngresada)) {
			temperaturaIngresada = prompt("Error: Ingrese una temperatura válida");
		}

		if (bandera == true) {
			nombrePersonaMasTemperatura = nombreIngresado;
			mayorTemperatura = temperaturaIngresada
			bandera = false;
		} else if (temperaturaIngresada > mayorTemperatura) {
			nombrePersonaMasTemperatura = nombreIngresado;
			mayorTemperatura = temperaturaIngresada
		}

		switch (estadoCivilIngresado) {
			case "soltero":
				if (sexoIngresado == "m") {
					contadorHombresSolerosViudos = contadorHombresSolerosViudos + 1;
					contadorHombresSolteros = contadorHombresSolteros + 1;
				}
				acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadIngresada;
				break;
			case "casado":
				break;
			case "viudo":
				if (sexoIngresado == "m") {
					contadorHombresSolerosViudos = contadorHombresSolerosViudos + 1;
					if (edadIngresada > 17) {
						contadorMayoresEdadViudos = contadorMayoresEdadViudos + 1;
					}
				}
				break;
		}
		if (edadIngresada > 59 && temperaturaIngresada > 37) {
			contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1
		}
		respuesta = prompt("¿Desea seguir ingresando datos?");
		promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;
	}

	console.log("El nombre de la persona con más temperatura es: " + nombrePersonaMasTemperatura);
	console.log("La cantidad de personas mayores de edad que están viudas es de: " + contadorMayoresEdadViudos);
	console.log("La cantidad de hombres que están solteros o viudos es de: " + contadorHombresSolerosViudos);
	console.log("La cantidad de personas de la 3ra edad con más de 38 grados de temperatura es de: " + contadorTerceraEdadTemperatura);
	console.log("El promedio de edad de los hombres solteros es de: " + promedioEdadHombresSolteros);
}
