//Luis Claros
/*// Se puede realizar en cualquier archivo de código fuente
// 1- Una casa de computación que se especializa en venta de insumos importados desea calcular
ciertas métricas en base a las ventas de sus productos.

// Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
// -Nombre del producto.
// -Género: (Memorias – Discos – Motherboards)
// -Tipo de Venta: (Online – Local)
// -Importe: (No pueden ser números negativos ni mayor a los 30000)
// Se pide:
// A- El más barato de “Discos” con su importe .
// B- De la venta más cara, el nombre del producto y tipo.
// C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.*/
function mostrar() {
	let ingNombreProducto;
	let ingTipoProducto;
	let ingTipoVenta;
	let ingImporte;

	let minImporteDisco;
	let nombreMinImporteDisco;

	let banderaProductoMasCaro = true;
	let maxImporte;
	let nombreMaxImporte;
	let tipoMaxImporte;

	let contadorVentasMemoriasMenos850 = 0;
	let banderaDiscos = true;

	for (let i = 0; i < 2; i++) {
		ingNombreProducto = prompt("Ingrese nombre del producto: ");
		while (!isNaN(ingNombreProducto)) {
			ingNombreProducto = prompt("Error. Ingrese nombre del producto: ");
		}
		ingTipoProducto = prompt("ingrese el tipo de producto: 'memoria', 'disco' o 'motherboard'");
		ingTipoProducto = ingTipoProducto.toLowerCase();
		while (ingTipoProducto != "memoria" && ingTipoProducto != "disco" && ingTipoProducto != "motherboard") {
			ingTipoProducto = prompt("Ingrese el tipo de producto: 'memoria', 'disco' o 'motherboard'")
		}
		ingTipoVenta = prompt("ingrese el tipo de venta: 'online' o 'local'");
		ingTipoVenta = ingTipoVenta.toLowerCase();
		while (ingTipoVenta != "online" && ingTipoVenta != "local") {
			ingTipoVenta = prompt("Ingrese el tipo de venta: 'online' o 'local'")
		}
		ingImporte = parseInt(prompt("Ingrese un importe: "));
		while (isNaN(ingImporte) || ingImporte < 0 || ingImporte > 30000) {
			ingImporte = parseInt(prompt("Error. Ingrese un importe: "));
		}

		switch (ingTipoProducto) {
			case "disco":
				if (banderaDiscos == true || ingImporte < minImporteDisco) {
					minImporteDisco = ingImporte;
					nombreMinImporteDisco = ingNombreProducto;
					banderaDiscos = false;
				}

				break;
			case "memoria":
				if (ingImporte < 850) {
					contadorVentasMemoriasMenos850 = contadorVentasMemoriasMenos850 + 1;
				}
				break;
		}

		if (banderaProductoMasCaro == true || ingImporte > maxImporte) {
			nombreMaxImporte = ingNombreProducto;
			tipoMaxImporte = ingTipoProducto;
			maxImporte = ingImporte;
			banderaProductoMasCaro = false;
		}
	}
	// A- El más barato de “Discos” con su importe .
	console.log("El más barato de “Discos” es: " + nombreMinImporteDisco + " y su importe es: " + minImporteDisco);
	// B- De la venta más cara, el nombre del producto y tipo.
	console.log("El nombre del producto de la venta más cara es: " + nombreMaxImporte + " y el tipo de producto es: " + tipoMaxImporte);
	// C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.*/
		console.log("La cantidad de ventas de memorias que costaron menos de $850 es: " + contadorVentasMemoriasMenos850);
	}