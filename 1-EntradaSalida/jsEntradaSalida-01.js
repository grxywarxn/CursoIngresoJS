
/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa y africa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta promedio que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar(){
	let continente;
	let paisIngresado;
	let cantidadDeHabitantes;
	let temperaturaIngresada;

	let contadorTemperaturasPares;
	let banderaMenosHabitantes;
	let nombrePaisMenosHabitantes;
	let cantidadMenosHabitantes;
	let cantidadDePaisesAmericanosFrios;
	let promedioDeHabitantes;
	let acumDeHabitantesTotales;
	let banderaTemperaturaMinima;
	let nombrePaisMinTemperatura;
	let tempMinima;

	contadorTemperaturasPares = 0;
	banderaMenosHabitantes = true;
	cantidadDePaisesAmericanosFrios = 0;
	acumDeHabitantesTotales = 0;
	banderaTemperaturaMinima = true;

	for(let i = 0; i < 5; i++){

		continente = prompt("Ingrese continente entre america , asia , europa y africa");
		while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa"){
			continente = prompt("Error. Ingrese continente entre america , asia , europa y africa");
		}

		paisIngresado = prompt("Ingrese pais");

		cantidadDeHabitantes = parseInt(prompt("Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
		while(isNaN(cantidadDeHabitantes) || cantidadDeHabitantes < 1 || cantidadDeHabitantes > 2000){
			cantidadDeHabitantes = parseInt(prompt("Errror. Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
		}

		temperaturaIngresada = parseFloat(prompt("Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
		while(isNaN(temperaturaIngresada) || temperaturaIngresada < -50 || temperaturaIngresada > 50){
			temperaturaIngresada = parseFloat(prompt("Errror. Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
		}
		//a)La cantidad de temperaturas pares.
		if(temperaturaIngresada % 2 == 0){
			contadorTemperaturasPares = contadorTemperaturasPares + 1;
		}
		//b)El nombre del pais con menos habitantes  Ingreso actual       menor Ingreso
		if(banderaMenosHabitantes == true || cantidadMenosHabitantes > cantidadDeHabitantes){
			cantidadMenosHabitantes = cantidadDeHabitantes;
			nombrePaisMenosHabitantes = paisIngresado;
			banderaMenosHabitantes = false;
		}

		//c)la cantidad de paises de america que tienen menos de 0 grados .
		switch(continente){
			case "america":
				if(temperaturaIngresada < 0){
					cantidadDePaisesAmericanosFrios = cantidadDePaisesAmericanosFrios + 1;
				}
			break;
		}
		//e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if(banderaTemperaturaMinima == true || tempMinima > temperaturaIngresada){
			tempMinima = temperaturaIngresada;
			nombrePaisMinTemperatura = paisIngresado;
			banderaTemperaturaMinima = false;
		}

		acumDeHabitantesTotales = acumDeHabitantesTotales + cantidadDeHabitantes;
	}

	//d)el promedio de habitantes entre los paises ingresados .
	promedioDeHabitantes = acumDeHabitantesTotales / 5;

	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
	document.write("El nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>");
	document.write("la cantidad de paises de america que tienen menos de 0 grados: " + cantidadDePaisesAmericanosFrios + "<br>");
	document.write("el promedio de habitantes entre los paises ingresados: " + promedioDeHabitantes + "<br>");
	document.write("la temperatura mínima ingresada es: " + tempMinima + " y nombre del pais que registro esa temperatura: " + nombrePaisMinTemperatura + "<br>");
	
}
