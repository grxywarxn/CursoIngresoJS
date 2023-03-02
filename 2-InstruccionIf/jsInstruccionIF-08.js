//Luis Claros
/*

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
//A) Nombre del jugador más joven.
//B) El jugador que más bajas tuvo.
//C) El jugador que menos muertes tuvo.
//D) El promedio de bajas.
//E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
//F) El nombre y edad del jugador que más muertes tuvo.

*/

function mostrar() {
	let ingNombre;
	let ingEdad;
	let ingBajas;
	let ingMuertes;
	let nombreMasJoven;
	let edadMasJoven;
	let nombreMaxBajas;
	let maxBajas;
	let minMuertes;
	let nombreMinMuertes;
	let acumuladorBajas = 0;
	let promedioBajas;
	let contadorJugadores20y30Bajas10y15 = 0;
	let maxMuertes;
	let nombreMaxMuertes;
	let edadMaxMuertes;
	let bandera = true;

	for (let i = 0; i < 5; i++) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingEdad = parseInt(prompt("Ingrese su edad (18 o más)"))
		while (isNaN(ingEdad) || ingEdad < 18 || ingEdad > 130) {
			ingEdad = parseInt(prompt("Error: ingrese una edad válida (18 o más)"));
		}
		ingBajas = parseInt(prompt("Ingrese el número de bajas: "));
		while (isNaN(ingBajas) || ingBajas < 0 || ingBajas > 100) {
			ingBajas = parseInt(prompt("Error. Ingrese el número de bajas: "));
		}
		ingMuertes = parseInt(prompt("Ingrese el número de muertes: "));
		while (isNaN(ingMuertes) || ingMuertes < 0 || ingMuertes > 100) {
			ingMuertes = parseInt(prompt("Error. Ingrese el número de muertes: "));
		}
		acumuladorBajas = acumuladorBajas + ingBajas;
		if (bandera == true) {
			nombreMasJoven = ingNombre;
			edadMasJoven = ingEdad;
			maxBajas = ingBajas;
			nombreMaxBajas = ingNombre;
			minMuertes = ingMuertes;
			nombreMinMuertes = ingNombre;
			nombreMaxMuertes = ingNombre;
			edadMaxMuertes = ingEdad;
			maxMuertes = ingMuertes;
			bandera = false;
		}
		if (ingEdad < edadMasJoven) {
			nombreMasJoven = ingNombre;
			edadMasJoven = ingEdad;
		}
		if (ingBajas > maxBajas) {
			nombreMaxBajas = ingNombre;
			maxBajas = ingBajas;
		}
		if (ingMuertes < minMuertes) {
			nombreMinMuertes = ingNombre;
			minMuertes = ingMuertes;
		} else if (ingMuertes > maxMuertes) {
			nombreMaxMuertes = ingNombre;
			maxMuertes = ingMuertes;
		}
		if (ingEdad > 19 && ingEdad < 31 && ingBajas > 9 && ingBajas < 16) {
			contadorJugadores20y30Bajas10y15 = contadorJugadores20y30Bajas10y15 + 1;
		}

	}
	promedioBajas = acumuladorBajas / 5
	//A) Nombre del jugador más joven.
	console.log("El nombre del jugador más joven es: " + nombreMasJoven);
	//B) El jugador que más bajas tuvo.
	console.log("El jugador que menos bajas tuvo es: " + nombreMaxBajas);
	//C) El jugador que menos muertes tuvo.
	console.log("El jugador que menos muertes tuvo es: " + nombreMinMuertes);
	//D) El promedio de bajas.
	console.log("El promedio de bajas totales es: " + promedioBajas);
	//E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
	console.log("La cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15 es: " + contadorJugadores20y30Bajas10y15);
	//F) El nombre y edad del jugador que más muertes tuvo.
	console.log("El nombre del jugador que más muertes tuvo es: " + nombreMaxMuertes + " y su edad es: " + edadMaxMuertes);

}