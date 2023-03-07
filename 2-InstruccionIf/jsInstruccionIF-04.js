//Luis Claros
/*Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
//a) el NOMBRE del mas pesado de los comestibles
//b) el NOMBRE del mas caro de todos los productos
//c) el NOMBRE del mas barato de los elaborados
//d)el tipo de mercadería que mas aparece
//e)el porcentaje de productos elaborados por sobre el total
//f) el promedio de pesos por cada tipo ingresado */
function mostrar() {
	let ingTipoProducto;
	let ingNombreProducto;
	let ingImporteProducto;
	let ingProcedenciaProducto;
	let ingPesoProducto;
	let maxPesoComestibles;
	let nombreMaxPesoComestibles;
	let maxImporte;
	let nombreMaxImporte;
	let minImporteElaborados;
	let nombreMinImporteElaborados;
	let contadorLimpieza = 0;
	let contadorComestibles = 0;
	let contadorOtros = 0;
	let contadorTotal = 0;
	let mercaderiaMasVendida;
	let porcentajeProductosElaborados;
	let contadorElaborados = 0;
	let acumuladorPreciosLimpieza = 0;
	let acumuladorPreciosComestibles = 0;
	let acumuladorPreciosOtros = 0;
	let promedioImporteLimpieza;
	let promedioImporteComestibles;
	let promedioImporteOtros;
	let continuar = true;

	while (continuar == true) {
		ingTipoProducto = prompt("ingrese el tipo de producto: 'limpieza', 'comestible' o 'otros'");
		ingTipoProducto = ingTipoProducto.toLowerCase();
		while (ingTipoProducto != "limpieza" && ingTipoProducto != "comestible" && ingTipoProducto != "otros") {
			ingTipoProducto = prompt("Ingrese el tipo de producto: 'limpieza', 'comestible' o 'otros'")
		}
		ingNombreProducto = prompt("Ingrese nombre del producto: ");
		while (!isNaN(ingNombreProducto)) {
			ingNombreProducto = prompt("Error. Ingrese nombre del producto: ");
		}
		ingImporteProducto = parseInt(prompt("Ingrese el importe del prodcuto: (entre 1  y 300000)"));
		while (isNaN(ingImporteProducto) || ingImporteProducto < 1 || ingImporteProducto > 300000) {
			ingImporteProducto = parseInt(prompt("Error. Ingrese el importe del prodcuto: (entre 1  y 300000)"));
		}
		ingProcedenciaProducto = prompt("Ingrese la procedencia del producto: importado, nacional o elaborado")
		ingProcedenciaProducto = ingProcedenciaProducto.toLowerCase();
		while (ingProcedenciaProducto != "importado" && ingProcedenciaProducto != "nacional" && ingProcedenciaProducto != "elaborado") {
			ingProcedenciaProducto = prompt("Error. Ingrese la procedencia del producto: importado, nacional o elaborado");
		}
		ingPesoProducto = parseFloat(prompt("Ingrese el peso del producto: "));
		while (isNaN(ingPesoProducto) || ingPesoProducto < 1 || ingPesoProducto > 250) {
			ingPesoProducto = parseFloat(prompt("Error. Ingrese el peso del producto: "));
		}

		switch (ingTipoProducto) {
			case "limpieza":
				contadorLimpieza = contadorLimpieza + 1;
				acumuladorPreciosLimpieza = acumuladorPreciosLimpieza + ingImporteProducto;
				break;
			case "comestible":
				//a) el NOMBRE del mas pesado de los comestibles
				if (contadorComestibles == 0 || ingPesoProducto > maxPesoComestibles) {
					maxPesoComestibles = ingPesoProducto;
					nombreMaxPesoComestibles = ingNombreProducto;
				}
				contadorComestibles = contadorComestibles + 1;
				acumuladorPreciosComestibles = acumuladorPreciosComestibles + ingImporteProducto;
				break;
			case "otros":
				contadorOtros = contadorOtros + 1;
				acumuladorPreciosOtros = acumuladorPreciosOtros + ingImporteProducto;
				break;
		}
		//b) el NOMBRE del mas caro de todos los productos
		if (contadorTotal == 0 || ingImporteProducto > maxImporte) {
			maxImporte = ingImporteProducto;
			nombreMaxImporte = ingNombreProducto;
		}
		//c) el NOMBRE del mas barato de los elaborados
		if (ingProcedenciaProducto == "elaborado") {
			if (contadorElaborados == 0 || ingImporteProducto < minImporteElaborados) {
				minImporteElaborados = ingImporteProducto;
				nombreMinImporteElaborados = ingNombreProducto;
			}
			contadorElaborados = contadorElaborados + 1;
		}
		contadorTotal = contadorTotal + 1;
		continuar = confirm("¿Desea seguir ingresando datos?")
	}
	//d)el tipo de mercadería que mas aparece
	if (contadorComestibles > contadorLimpieza && contadorComestibles > contadorOtros) {
		mercaderiaMasVendida = "Comestibles";
	} else if (contadorLimpieza > contadorOtros) {
		mercaderiaMasVendida = "Limpieza";
	} else {
		mercaderiaMasVendida = "Otros";
	}
	//e)el porcentaje de productos elaborados por sobre el total
	if (contadorElaborados > 0) {
		porcentajeProductosElaborados = (contadorElaborados / contadorTotal * 100).toFixed(1);
	}
	//f) el promedio de pesos por cada tipo ingresado
	if (contadorLimpieza > 0) {
		promedioImporteLimpieza = acumuladorPreciosLimpieza / contadorTotal;
	}
	if (contadorComestibles > 0) {
		promedioImporteComestibles = acumuladorPreciosComestibles / contadorTotal;
	}
	if (contadorOtros > 0) {
		promedioImporteOtros = acumuladorPreciosOtros / contadorTotal;
	}
	//a) el NOMBRE del mas pesado de los comestibles
	if (contadorComestibles > 0) {
		console.log("El nombre del más pesado de los comestibles es: " + nombreMaxPesoComestibles);
	} else {
		console.log("No se registraron ventas de comestibles");
	}
	//b) el NOMBRE del mas caro de todos los productos
	console.log("El nombre del más caro de todos los productos es: " + nombreMaxImporte);
	//c) el NOMBRE del mas barato de los elaborados
	if (contadorElaborados > 0) {
		console.log("El nombre del más barato de los elaborados es: " + nombreMinImporteElaborados);
	} else {
		console.log("No se registraron ventas de productos elaborados");
	}
	//d)el tipo de mercadería que mas aparece
	console.log("El tipo de mercadería que más se vendió es: " + mercaderiaMasVendida);
	//e)el porcentaje de productos elaborados por sobre el total
	if (contadorElaborados > 0) {
		console.log("El porcentaje de productos elaborados por sobre el total es: " + porcentajeProductosElaborados + "%");
	} else {
		console.log("No se registraron ventas de productos elaborados para calcular un promedio");
	}
	//f) el promedio de pesos por cada tipo ingresado
	if (contadorLimpieza > 0) {
		console.log("El promedio de pesos para los productos de limpieza es: " + promedioImporteLimpieza);
	} else {
		console.log("No se registraron ventas de productos de limpieza");
	}
	if (contadorComestibles > 0) {
		console.log("El promedio de pesos para los productos comestibles es: " + promedioImporteComestibles);
	} else {
		console.log("No se registraron ventas de productos comestibles");
	}
	if (contadorOtros > 0) {
		console.log("El promedio de pesos para los productos de tipo 'otros' es: " + promedioImporteOtros);
	} else {
		console.log("No se registraron ventas de productos de tipo 'otros'");
	}
}