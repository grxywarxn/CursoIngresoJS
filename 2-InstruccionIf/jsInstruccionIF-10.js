//Luis Claros
/*
Ejercicio 1:

Apellido: Claros
Nombre: Luis
Comisión: B
Tutor: 

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras 
realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

//A) El promedio de edad entre todos los compradores.
//B) El promedio de dinero gastado por los compradores menores a 25 años.
//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
//D) Nombre y cantidad de productos del comprador que menos gasto.
*/
function mostrar() {
	let ingNombreComprador;
	let ingEdadComprador;
	let ingCantidadProductos;
	let ingTotalGastado;
	let ingMetodoPago;

	let acumuladorEdadCompradores = 0;
	let contadorCompradores = 0;
	let promedioEdadCompradores;

	let contadorCompradoresMenoresA25 = 0;
	let acumuladorGastosMenoresA25 = 0;
	let promedioGastosDeMenoresA25;

	let acumuladorGastosTotales = 0;
	let acumuladorGastosTarjetaDebito = 0;
	let porcentajeGastosTarjetaDebito;

	let minGasto;
	let cantidadProductosMinGasto = 0;
	let nombreProductosMinGasto;

	let continuar = true;

	while (continuar == true) {
		ingNombreComprador = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombreComprador)) {
			ingNombreComprador = prompt("Error. Ingrese su nombre: ");
		}
		ingEdadComprador = parseInt(prompt("Ingrese su edad (18 o más)"))
		while (isNaN(ingEdadComprador) || ingEdadComprador < 18 || ingEdadComprador > 110) {
			ingEdadComprador = parseInt(prompt("Error. Ingrese una edad válida (18 o más)"));
		}
		ingCantidadProductos = parseInt(prompt("Ingrese la cantidad de productos: "));
		while (isNaN(ingCantidadProductos) || ingCantidadProductos < 0 || ingCantidadProductos > 100) {
			ingCantidadProductos = parseInt(prompt("Error. Ingrese la cantidad de productos: "));
		}
		ingTotalGastado = parseInt(prompt("Ingrese el total gastado: "));
		while (isNaN(ingTotalGastado) || ingTotalGastado < 0 || ingTotalGastado > 1000000) {
			ingTotalGastado = parseInt(prompt("Error. Ingrese el total gastado: "));
		}
		ingMetodoPago = prompt("Ingrese el método de pago: 'efectivo', 'debito' o 'credito'");
		ingMetodoPago = ingMetodoPago.toLowerCase();
		while (ingMetodoPago != "efectivo" && ingMetodoPago != "debito" && ingMetodoPago != "credito") {
			ingMetodoPago = prompt("Ingrese el método de pago: 'efectivo', 'debito' o 'credito'")
		}

		//A) El promedio de edad entre todos los compradores.
		acumuladorEdadCompradores = acumuladorEdadCompradores + ingEdadComprador;

		//B) El promedio de dinero gastado por los compradores menores a 25 años.
		if (ingEdadComprador < 25) {
			contadorCompradoresMenoresA25 = contadorCompradoresMenoresA25 + 1;
			acumuladorGastosMenoresA25 = acumuladorGastosMenoresA25 + ingTotalGastado;
		}
		//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
		if (ingMetodoPago == "debito") {
			acumuladorGastosTarjetaDebito = acumuladorGastosTarjetaDebito + ingTotalGastado;
		}
		//D) Nombre y cantidad de productos del comprador que menos gasto.
		if (contadorCompradores == 0 || ingTotalGastado < minGasto) {
			minGasto = ingTotalGastado;
			nombreProductosMinGasto = ingNombreComprador;
			cantidadProductosMinGasto = ingCantidadProductos;
		}
		contadorCompradores = contadorCompradores + 1;
		acumuladorGastosTotales = acumuladorGastosTotales + ingTotalGastado;
		continuar = confirm("¿Desea seguir ingresando datos?")
	}//FIN DEL WHILE
	//A) El promedio de edad entre todos los compradores.
	if (acumuladorEdadCompradores > 0) {
		promedioEdadCompradores = acumuladorEdadCompradores / contadorCompradores;
	}
	//B) El promedio de dinero gastado por los compradores menores a 25 años.
	if (contadorCompradoresMenoresA25 > 0) {
		promedioGastosDeMenoresA25 = acumuladorGastosMenoresA25 / contadorCompradoresMenoresA25;
	}
	//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
	if (acumuladorGastosTarjetaDebito > 0) {
		porcentajeGastosTarjetaDebito = (acumuladorGastosTarjetaDebito / acumuladorGastosTotales * 100).toFixed(1);
	}
	//FIN LÓGICA
	//MOSTRAR RESULTADOS
	//A) El promedio de edad entre todos los compradores.
	if (contadorCompradores > 0) {
		console.log("El promedio de edad de los compradores es: " + promedioEdadCompradores);
	}
	//B) El promedio de dinero gastado por los compradores menores a 25 años.
	if (contadorCompradoresMenoresA25 > 0) {
		console.log("El promedio de dinero gastado por los compradores menores a 25 años es: " + promedioGastosDeMenoresA25);
	} else {
		console.log("No se registraron compras realizadas por menores de 25 años");
	}
	//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
	console.log("El porcentaje de dinero gastado por tarjetas de débito por sobre el total es: " + porcentajeGastosTarjetaDebito + "%");
	//D) Nombre y cantidad de productos del comprador que menos gasto.
	console.log("El nombre de la persona que menos gastó es: " + nombreProductosMinGasto + " y la cantidad de productos que compró es: " + cantidadProductosMinGasto);
}