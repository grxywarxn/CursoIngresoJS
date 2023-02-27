// Luis Claros
/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

function mostrarAumento() {
	let precioPasajeBase;
	let ingVendedor;
	let ingComprador;
	let ingCantidadPasajes;
	let ingPrecioPaquete;
	let ingTipoAsiento;
	let ingTipoViaje;
	let ingTipoDestino;
	let aumento;

	let acumPesosPepepeposo;
	let acumPesosQuinoto;
	let acumPesosHuesos;

	let banderaVendedorMasRecaudo;
	let nombreVendedorMasRecaudo;
	let maxCantidadRecaudada;

	let contVuelosTotal
	let contVueloNacional
	let contVueloInternacional;
	let porcentajeVuelosNacionales;
	let porcentajeVuelosInternacionales;

	let contPasajesDirectosInternacionales;

	let precioFinalSegunAsiento;

	let contAsientoEconomico;
	let contAsientoEjecutivo;
	let contAsientoPrimeraClase;
	let promedioAsientosEconomicos;
	let promedioAsientosEjecutivos;
	let promedioAsientosPrimeraClase;
	let continuar;

	continuar = true;
	aumento = 0;
	acumPesosHuesos = 0;
	acumPesosPepepeposo = 0;
	acumPesosQuinoto = 0;
	contVueloInternacional = 0;
	contVueloNacional = 0;
	contPasajesDirectosInternacionales = 0;
	contAsientoEconomico = 0;
	contAsientoEjecutivo = 0;
	contAsientoPrimeraClase = 0;
	banderaVendedorMasRecaudo = true;

	while (continuar == true) {
		ingVendedor = prompt("Ingrese su vendedor: pepepeposo, quinoto o huesos")
		ingVendedor = ingVendedor.toLowerCase();
		while (!isNaN(ingVendedor) || ingVendedor != "pepepeposo" && ingVendedor != "quinoto" && ingVendedor != "huesos") {
			ingVendedor = prompt("Error. Ingrese su vendedor: pepepeposo, quinoto o huesos");
		}
		ingComprador = prompt("Ingrese su nombre: ");
		while (!isNaN(ingComprador)) {
			ingComprador = prompt("Error. Ingrese su nombre: ");
		}
		ingCantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes entre 1 y 5: "));
		while (isNaN(ingCantidadPasajes) || ingCantidadPasajes < 1 || ingCantidadPasajes > 5) {
			ingCantidadPasajes = parseInt(prompt("Error. Ingrese la cantidad de pasajes entre 1 y 5: "));
		}
		ingPrecioPaquete = ingCantidadPasajes * precioPasajeBase;
		ingTipoAsiento = prompt("Ingrese su vendedor: economico, ejecutivo o primera clase")
		ingTipoAsiento = ingTipoAsiento.toLowerCase();
		while (!isNaN(ingTipoAsiento) || ingTipoAsiento != "economico" && ingTipoAsiento != "ejecutivo" && ingTipoAsiento != "primera clase") {
			ingTipoAsiento = prompt("Error. Ingrese su vendedor: economico, ejecutivo o primera clase");
		}
		if (ingTipoAsiento == "ejecutivo") {
			aumento = 20;
		} else if(ingTipoAsiento == "primera clase"){
			aumento = 35;
		}
		ingTipoViaje = prompt("Ingrese su tipo de viaje: directo o con escala")
		ingTipoViaje = ingTipoViaje.toLowerCase();
		while (!isNaN(ingTipoViaje) || ingTipoViaje != "directo" && ingTipoViaje != "con escala") {
			ingTipoViaje = prompt("Error. Ingrese su tipo de viaje: directo o con escala");
		}
		ingTipoDestino = prompt("Ingrese su tipo de destino: nacional o internacional")
		ingTipoDestino = ingTipoDestino.toLowerCase();
		while (!isNaN(ingTipoDestino) || ingTipoDestino != "nacional" && ingTipoDestino != "internacional") {
			ingTipoDestino = prompt("Error. Ingrese su tipo de destino: nacional o internacional");
		}

		//A) El total de pesos recaudados de cada vendedor. - 
		switch (ingVendedor) {
			case "pepepeposo":
				acumPesosPepepeposo = acumPesosPepepeposo + ingPrecioPaquete;
				break;
			case "quinoto":
				acumPesosQuinoto = acumPesosQuinoto + ingPrecioPaquete;
				break;
			case "huesos":
				acumPesosHuesos = acumPesosHuesos + ingPrecioPaquete;
				break;
		}
		//B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
		if(banderaVendedorMasRecaudo == true || maxCantidadRecaudada > ingPrecioPaquete){
			maxCantidadRecaudada = ingPrecioPaquete;
			nombreVendedorMasRecaudo = ingVendedor;
			banderaVendedorMasRecaudo = false;
		}
		//C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
		contVuelosTotal = contVuelosTotal + 1;
		porcentajeVuelosInternacionales = contVueloInternacional * 100 / contVuelosTotal;
		porcentajeVuelosNacionales = contVueloNacional * 100 / contVuelosTotal;
		//D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
		if(ingTipoViaje == "directo" && ingTipoDestino == "internacional"){
			contPasajesDirectosInternacionales = contPasajesDirectosInternacionales + 1;
		}
		continuar = confirm("¿Desea seguir ingresando datos?");
	}

}
