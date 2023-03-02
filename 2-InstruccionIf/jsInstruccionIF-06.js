//Luis Claros
/*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos 
(No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.

*/
function mostrar()
{
	let ingTituloLibro;
	let ingGenero;
	let ingMaterial;
	let ingImporte;

	let contCiFi = 0;
	let contDrama = 0;
	let contTerror = 0;
	let contTotalLibros = 0;
	let porcentajeCifi;
	let porcentajeDrama;
	let porcentajeTerror;

	let importeLibroDramaMasBarato;
	let nombreLibroDramaMasBarato;

	let nombrePrimerDramaVendido;
	let continuar = true;

	while (continuar == true) {
		ingTituloLibro = prompt("Ingrese el título del libro: ");
		while (!isNaN(ingTituloLibro)) {
			ingTituloLibro = prompt("Error. Ingrese el título del libro: ");
		}
		ingGenero = prompt("Ingrese el género del libro: ciencia ficcion, drama o terror")
		ingGenero = ingGenero.toLowerCase();
		while (ingGenero != "ciencia ficcion" && ingGenero != "drama" && ingGenero != "terror") {
			ingGenero = prompt("Error. Ingrese el género del libro: ciencia ficcion, drama o terror");
		}
		ingMaterial = prompt("ingrese el material del libro: 'rustica' o 'tapa dura'");
		ingMaterial = ingMaterial.toLowerCase();
		while (ingMaterial != "rustica" && ingMaterial != "tapa dura") {
			ingMaterial = prompt("Ingrese el material del libro: 'rustica' o 'tapa dura'")
		}
		ingImporte = parseInt(prompt("Ingrese su importe (entre 1 y 30000)"));
		while (isNaN(ingImporte) || ingImporte < 0 || ingImporte > 30000) {
			ingImporte = parseInt(prompt("Error. Ingrese su importe (entre 1 y 30000)"));
		}
		contTotalLibros = contTotalLibros + 1;
		switch (ingGenero) {
			case "ciencia ficcion":
				contCiFi = contCiFi + 1;
				break;
			case "drama":
				if(contDrama == 0){
					nombrePrimerDramaVendido = ingTituloLibro;
				}
				if(contDrama == 0 || ingImporte < importeLibroDramaMasBarato){
					importeLibroDramaMasBarato = ingImporte;
					nombreLibroDramaMasBarato = ingTituloLibro;
				}
				contDrama = contDrama + 1;
				break;
			case "terror":
				contTerror = contTerror + 1;
				break;
		}
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	porcentajeCifi = (contCiFi * 100 / contTotalLibros).toFixed(1)
	porcentajeDrama = (contDrama * 100 / contTotalLibros).toFixed(1)
	porcentajeTerror = (contTerror * 100 / contTotalLibros).toFixed(1)
	
	if (contDrama != 0) {
		console.log("El más barato de los libros de drama es: " + nombreLibroDramaMasBarato + " y su importe es: " + importeLibroDramaMasBarato);
	} else {
		console.log("No se registraron ventas de libros de drama");
	}
	
	if (contDrama != 0) {
		console.log("El nombre del primer libro de drama vendido es: " + nombrePrimerDramaVendido);
	} else {
		console.log("No se registraron ventas de libros de drama");
	}
	if (porcentajeCifi > 0) {
		console.log("El porcentaje de libros vendidos de ciencia ficción es: " + porcentajeCifi + "%");
	} else {
		console.log("No se registraron ventas de libros de ciencia ficción para calcular un porcentaje.");
	}
	if (porcentajeDrama > 0) {
		console.log("El porcentaje de libros vendidos de drama es: " + porcentajeDrama + "%");
	} else {
		console.log("No se registraron ventas de libros de drama para calcular un porcentaje.");
	}
	if (porcentajeTerror > 0) {
		console.log("El porcentaje de libros vendidos de terror " + porcentajeTerror + "%");
	} else {
		console.log("No se registraron ventas de libros de terror para calcular un porcentaje.");
	}
}
