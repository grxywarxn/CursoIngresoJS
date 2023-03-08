//Luis Claros
/*
Recu 2020 2 bis: /* "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
//a)El nombre de la película más cara de tipo 4D.
//b)Informar el precio total de la venta del día.
//c)El nombre de la película con menos cantidad de entradas.
//d)El tipo de pelicula más vista y la cantidad de entradas. 
//e)El nombre de la pelicula más barata en 3D. 
*/
function mostrar() {
	let ingNombrePelicula;
	let ingPrecio;
	let ingCantidadEntradas;
	let ingTipoSala;

	let precio4DMasCara;
	let nombre4DMasCara;

	let acumuladorTotalVentas = 0;

	let banderaPeliculaMenosEntradas = true;
	let minEntradas;
	let nombreMinEntradas;

	let contador3D = 0;
	let acumuladorEntradas3D = 0;
	let contador4D = 0;
	let acumuladorEntradas4D = 0;
	let tipoPeliculaMasVista;
	let cantidadEntradasPeliculaMasVista;

	let precio3DMasBarata;
	let nombre3DMasBarata;
	let continuar = true;


	while (continuar == true) {
		ingNombrePelicula = prompt("Ingrese el nombre de la película: ");
		while (!isNaN(ingNombrePelicula)) {
			ingNombrePelicula = prompt("Error. Ingrese el nombre de la película: ");
		}
		ingPrecio = parseInt(prompt("Ingrese el precio de la entrada: "))
		while (isNaN(ingPrecio) || ingPrecio < 100 || ingPrecio > 10000) {
			ingPrecio = parseInt(prompt("Error: Ingrese el precio de la entrada: "));
		}
		ingCantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas"))
		while (isNaN(ingCantidadEntradas) || ingCantidadEntradas < 0 || ingCantidadEntradas > 130) {
			ingCantidadEntradas = parseInt(prompt("Error: Ingrese la cantidad de entradas"));
		}
		ingTipoSala = prompt("ingrese el tipo de sala : '3D' o '4D'");
		ingTipoSala = ingTipoSala.toUpperCase();
		while (ingTipoSala != "3D" && ingTipoSala != "4D") {
			ingTipoSala = prompt("Ingrese el tipo de sala : '3D' o '4D'")
		}
		if (ingTipoSala == "3D") {
			//e)El nombre de la pelicula más barata en 3D. 
			if (contador3D == 0 || ingPrecio < precio3DMasBarata) {
				precio3DMasBarata = ingPrecio;
				nombre3DMasBarata = ingNombrePelicula;
			}
			contador3D = contador3D + 1;
			acumuladorEntradas3D = acumuladorEntradas3D + ingCantidadEntradas;
		} else {
			//a)El nombre de la película más cara de tipo 4D.
			if (contador4D == 0 || ingPrecio > precio4DMasCara) {
				precio4DMasCara = ingPrecio;
				nombre4DMasCara = ingNombrePelicula;
			}
			contador4D = contador4D + 1;
			acumuladorEntradas4D = acumuladorEntradas4D + ingCantidadEntradas;
		}
		//b)Informar el precio total de la venta del día.
		acumuladorTotalVentas = acumuladorTotalVentas + (ingPrecio * ingCantidadEntradas);
		//c)El nombre de la película con menos cantidad de entradas.
		if (banderaPeliculaMenosEntradas == true || ingCantidadEntradas < minEntradas) {
			minEntradas = ingCantidadEntradas;
			nombreMinEntradas = ingNombrePelicula;
			banderaPeliculaMenosEntradas = false;
		}
		continuar = confirm("¿Desea seguir ingresando datos?");
	}
	//d)El tipo de pelicula más vista y la cantidad de entradas. 
	if (contador3D > contador4D) {
		tipoPeliculaMasVista = "3D";
		cantidadEntradasPeliculaMasVista = acumuladorEntradas3D;
	} else {
		tipoPeliculaMasVista = "4D";
		cantidadEntradasPeliculaMasVista = acumuladorEntradas4D;
	}
	//MOSTRAR RESULTADOS
	//a)El nombre de la película más cara de tipo 4D.
	if (contador4D > 0) {
		console.log("El nombre de la película más cara de tipo 4D es: " + nombre4DMasCara);
	} else {
		console.log("No se registraron ventas de películas en 4D");
	}	
	//b)Informar el precio total de la venta del día.
	console.log("El recaudo total del dia es: " + acumuladorTotalVentas);
	//c)El nombre de la película con menos cantidad de entradas.
	console.log("El nombre de la película con menos cantidad de entradas vendidas es: " + nombreMinEntradas);
	//d)El tipo de pelicula más vista y la cantidad de entradas. 
	console.log("El tipo de película más vista es: " + tipoPeliculaMasVista + " y la cantidad de entradas vendidas es: " +cantidadEntradasPeliculaMasVista);
	//e)El nombre de la pelicula más barata en 3D.
	if (contador3D > 0) {
		console.log("El nombre de la película más barata en 3D es: " + nombre3DMasBarata);
	} else {
		console.log("No se registraron ventas de películas en 3D");
	}
}

