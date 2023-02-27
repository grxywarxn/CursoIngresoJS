// Luis Claros
/*
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.
*/
function SacarResto() {
	let continuar;
	let ingDeposito;
	let ingProducto;
	let ingPesoProducto;
	let maxPesoAvellaneda;
	let maxPesoCaba;
	let maxPesoLanus;

	let banderaMaxPesoProducto;
	let maxPesoProducto;
	let maxPesoProductoNombre;
	let acumPesoAvellaneda;
	let acumPesoCaba;
	let acumPesoLanus;
	let acumPesoTotal;
	let promedioPesoTotal;

	let contIngresosAvellaneda;
	let contIngresosCaba;
	let contIngresosLanus;
	let nombreBodegaMasIngresos;
	let nombreBodegaMasLlena;

	let porcentajeDisponibleAvellaneda;
	let porcentajeDisponibleCaba;
	let porcentajeDisponibleLanus;

	maxPesoAvellaneda = 25000;
	maxPesoCaba = 20000;
	maxPesoLanus = 15000;
	acumPesoAvellaneda = 0;
	acumPesoCaba = 0;
	acumPesoLanus = 0;
	acumPesoTotal = 0;

	contIngresosAvellaneda = 0;
	contIngresosCaba = 0;
	contIngresosLanus = 0;

	banderaMaxPesoProducto = true;
	continuar = true;

	while (continuar == true) {
		ingDeposito = prompt("Ingrese el depósito: Avellaneda, CABA o Lanus")
		ingDeposito = ingDeposito.toLowerCase();
		while (!isNaN(ingDeposito) || ingDeposito != "Avellaneda" && ingDeposito != "CABA" && ingDeposito != "Lanus") {
			ingDeposito = prompt("Error. Ingrese el depósito: Avellaneda, CABA o Lanus");
		}
		ingProducto = prompt("Ingrese el nombre del producto: ");
		while (!isNaN(ingProducto)) {
			ingProducto = prompt("Error. Ingrese el nombre del producto: ");
		}
		ingPesoProducto = parseInt(prompt("Ingrese el peso del producto: "));
		while (isNaN(ingPesoProducto) || ingPesoProducto < 0 || ingPesoProducto > 25000) {
			ingPesoProducto = parseInt(prompt("Error. Ingrese el peso del producto: "));
		}

		acumPesoTotal = acumPesoTotal + ingPesoProducto;

		switch(ingDeposito){
			case "avellaneda":
				acumPesoAvellaneda = acumPesoAvellaneda + ingPesoProducto;
				contIngresosAvellaneda = contIngresosAvellaneda + 1;
		
				break;
			case "caba":
				acumPesoCaba = acumPesoCaba + ingPesoProducto;
				contIngresosCaba = contIngresosCaba + 1;
				break;
			case "lanus":
				acumPesoLanus = acumPesoLanus + ingPesoProducto;
				contIngresosLanus = contIngresosLanus + 1;
				break;
		}

		//a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
		if(banderaMaxPesoProducto == true || ingPesoProducto > maxPesoProducto) {
			maxPesoProducto = ingPesoProducto;
			maxPesoProducto = ingProducto;
			bandera = false;
		}

		//b) Cual fue la bodega con mas ingresos.
		if(contIngresosAvellaneda > contIngresosCaba && contIngresosAvellaneda > contIngresosLanus){
			nombreBodegaMasIngresos = "contIngresosAvellaneda";
		}else if(contIngresosCaba > contIngresosAvellaneda && contIngresosCaba > contIngresosLanus){
			nombreBodegaMasIngresos = "contIngresosCaba";
		}else{
			nombreBodegaMasIngresos = "contIngresosLanus";
		}

		//c) Cual es la bodega mas llena.
		if(acumPesoAvellaneda > acumPesoCaba && acumPesoAvellaneda > acumPesoLanus){
			nombreBodegaMasLlena = "acumPesoAvellaneda";
		}else if(acumPesoCaba > acumPesoAvellaneda && acumPesoCaba > acumPesoLanus){
			nombreBodegaMasLlena = "acumPesoCaba";
		}else{
			nombreBodegaMasLlena = "acumPesoLanus";
		}
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	// d) Porcentaje disponible de cada bodega.
	porcentajeDisponibleAvellaneda = (acumPesoAvellaneda * 100 / maxPesoAvellaneda).toFixed(1)
	porcentajeDisponibleCaba = (acumPesoCaba * 100 / maxPesoCaba).toFixed(1)
	porcentajeDisponibleAvellaneda = (acumPesoLanus * 100 / maxPesoLanus).toFixed(1)

	console.log("");
	console.log("bodega con mas ingresos:"+ nombreBodegaMasIngresos);
	console.log("bodega mas llena")+ nombreBodegaMasLlena;
	console.log("porcentajes por podega: Avellaneda:"+porcentajeDisponibleAvellaneda+"%");
}
