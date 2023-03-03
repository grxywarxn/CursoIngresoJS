//Luis Claros
/*Un maxikiosko solicita la creación de una aplicación simple para ir controlando la mercadería 
vendida durante el transcurso del día laboral.
Se ingresarán un total de 10 ventas, incluyendo una serie de datos:

Nombre del producto,
Tipo de producto ("golosinas", "bebidas", "cigarrillos"),
Precio unitario del producto (desde 1,00$ hasta 1000,00$),
Cantidad de unidades por venta (entre 1 y 10).

Se deberá calcular e informar:
//a) El total bruto recaudado con las 10 ventas.
//b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informarlo).
//c) De los cigarrillos más caros, el nombre y su precio unitario.
//d) De las 10 ventas, que porcentaje de ventas le pertenece a las bebidas.
*/
function mostrar() {
	let ingNombre;
	let ingTipoProducto;
	let ingPrecioUnitario;
	let ingCantidadUnidades;

	let acumIngresosTotales = 0;
	let acumGolosinas = 0;
	let contVentrasGolosinas = 0;
	let promedioVentasGolosinas;

	let banderaCigarrilloCaro = true;
	let nombreCigarrilloCaro;
	let precioCigarrilloCaro;

	let contBebidas = 0;
	let porcentajeBebidas;

	for (let i = 0; i < 10; i++) {
		ingNombre = prompt("Ingrese su nombre: ");
		while (!isNaN(ingNombre)) {
			ingNombre = prompt("Error. Ingrese su nombre: ");
		}
		ingTipoProducto = prompt("ingrese el tipo de producto: 'golosina', 'bebida' o 'cigarrillo'");
		ingTipoProducto = ingTipoProducto.toLowerCase();
		while (ingTipoProducto != "golosina" && ingTipoProducto != "bebida" && ingTipoProducto != "cigarrillo") {
			ingTipoProducto = prompt("Ingrese el tipo de producto: 'golosina', 'bebida' o 'cigarrillo'")
		}
		ingPrecioUnitario = parseFloat(prompt("Ingrese el precio unitario: (entre 1  y 1000)"));
		while (isNaN(ingPrecioUnitario) || ingPrecioUnitario < 1 || ingPrecioUnitario > 10) {
			ingPrecioUnitario = parseFloat(prompt("Error. Ingrese el precio unitario: (entre 1  y 1000)"));
		}
		ingCantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades: (entre 1  y 10)"));
		while (isNaN(ingCantidadUnidades) || ingCantidadUnidades < 1 || ingCantidadUnidades > 10) {
			ingCantidadUnidades = parseInt(prompt("Error. Ingrese la cantidad de unidades: (entre 1  y 10)"));
		}

		acumIngresosTotales = acumIngresosTotales + (ingPrecioUnitario * ingCantidadUnidades);
		switch (ingTipoProducto) {
			case "golosina":
				contVentrasGolosinas = contVentrasGolosinas + 1;
				acumGolosinas = acumGolosinas + ingCantidadUnidades;
				break;
			case "bebida":
				contBebidas = contBebidas + 1;
				break;
			case "cigarrillo":
				if (banderaCigarrilloCaro == true || ingPrecioUnitario > precioCigarrilloCaro) {
					nombreCigarrilloCaro = ingNombre;
					precioCigarrilloCaro = ingPrecioUnitario;
					banderaCigarrilloCaro = false
				}
				break;
		}
	}
	promedioVentasGolosinas = acumGolosinas / contVentrasGolosinas;
	porcentajeBebidas = contBebidas * 100 / 10;
	//a) El total bruto recaudado con las 10 ventas.
	console.log("El total bruto recaudado con las 10 ventas es: " + acumIngresosTotales);
	//b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informarlo).
	if (contVentrasGolosinas != 0) {
		console.log("El promedio de unidades por compra de golosinas es: " + promedioVentasGolosinas);
	} else {
		console.log("No se registraron compras de golosinas");
	}
	//c) De los cigarrillos más caros, el nombre y su precio unitario.
	if (banderaCigarrilloCaro == false) {
		console.log("El nombre de los cigarrillos más caros es: " + nombreCigarrilloCaro + " y su precio unitario es: " + precioCigarrilloCaro);
	} else {
		console.log("No se registraron ventas de cigarrillos");
	}
	//d) De las 10 ventas, que porcentaje de ventas le pertenece a las bebidas.
	if (porcentajeBebidas != 0) {
		console.log("El porcentajes de ventas de bebidas en las 10 ventas es: " + porcentajeBebidas);
	} else {
		console.log("No se registraron ventas de bebidas");
	}

}