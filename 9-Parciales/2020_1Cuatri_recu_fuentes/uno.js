
//Luis Claros
/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
function mostrar() {
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	let precioJabonCaro;
	let acumuladorJabonCaro;
	let fabricanteJabonCaro;
	let acumuladorBarbijos;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let productoConMasUnidades;
	let promedioProductoConMasUnidades;
	let contadorComprasBarbijo;
	let contadorComprasJabon;
	let contadorComprasAlcohol;

	acumuladorAlcohol = 0;
	acumuladorJabonCaro = 0;
	precioJabonCaro = 100;
	acumuladorBarbijos = 0;
	acumuladorJabon = 0;
	contadorComprasAlcohol = 0;
	contadorComprasBarbijo = 0;
	contadorComprasJabon = 0;

	for (let i = 0; i < 5; i++){
		tipoProducto = prompt("Ingrese el tipo de producto: 'barbijo', 'jabon' o 'alcohol'");
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Ingrese el tipo de producto: 'barbijo', 'jabon' o 'alcohol'")
		}
		precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = parseFloat(prompt("Error: Ingrese un precio del producto entre 100 y 300"));
		}
		cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto"));
		while (isNaN(cantidadProducto) || cantidadProducto < 1 || cantidadProducto > 1000) {
			cantidadProducto = parseInt(prompt("Error: Ingrese una cantidad de productos entre 1 y 1000"));
		}
		marcaProducto = prompt("Ingrese la marca del producto");
		fabricanteProducto = prompt("Ingrese el fabricante del producto");

		switch (tipoProducto) {
			case "barbijo":
				contadorComprasBarbijo = contadorComprasBarbijo + 1;
				acumuladorBarbijos = acumuladorBarbijos + cantidadProducto;
				break;
			case "jabon":
				contadorComprasJabon = contadorComprasJabon + 1;
				acumuladorJabon = acumuladorJabon + cantidadProducto;
				if(precioProducto > precioJabonCaro) {
					fabricanteJabonCaro = fabricanteProducto;
					acumuladorJabonCaro = cantidadProducto;
				}
				break;
			case "alcohol":
				contadorComprasAlcohol = contadorComprasAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;
				break;
		}
		if(acumuladorAlcohol > acumuladorBarbijos){
			productoConMasUnidades = "Alcohol";
			promedioProductoConMasUnidades = acumuladorAlcohol / contadorComprasAlcohol;
		}else if (acumuladorBarbijos > acumuladorJabon){
			productoConMasUnidades = "Barbijos";
			promedioProductoConMasUnidades = acumuladorBarbijos / contadorComprasBarbijo;
		}else{
			productoConMasUnidades = "Jabon";
			promedioProductoConMasUnidades = acumuladorJabon / contadorComprasJabon;
		}
	}
	console.log("La cantidad de unidades del jabón más caro es: " + acumuladorJabonCaro + " y su fabricante es: " + fabricanteJabonCaro);
	console.log("El promedio del tipo de producto con más unidades es: " + promedioProductoConMasUnidades);
	console.log("La cantidad total de barbijos es: " + acumuladorBarbijos);
}