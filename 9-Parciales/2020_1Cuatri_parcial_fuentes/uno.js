//Luis Claros
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar() {
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	let precioAlcoholBarato;
	let acumuladorAlcoholBarato;
	let fabricanteAlcoholBarato;
	let acumuladorBarbijos;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let productoConMasUnidades;
	let promedioProductoConMasUnidades;
	let contadorComprasBarbijo;
	let contadorComprasJabon;
	let contadorComprasAlcohol;

	acumuladorAlcohol = 0;
	acumuladorAlcoholBarato = 0;
	precioAlcoholBarato = 300;
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
				break;
			case "alcohol":
				contadorComprasAlcohol = contadorComprasAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;
				if(precioProducto < precioAlcoholBarato) {
					fabricanteAlcoholBarato = fabricanteProducto;
					acumuladorAlcoholBarato = acumuladorAlcoholBarato + cantidadProducto;
				}
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
	console.log("La cantidad de unidades del alcohol más barato es: " + acumuladorAlcoholBarato + " y su fabricante es: " + fabricanteAlcoholBarato);
	console.log("El promedio del tipo de producto con más unidades es: " + promedioProductoConMasUnidades);
	console.log("La cantidad total de jabones es: " + acumuladorJabon);
}