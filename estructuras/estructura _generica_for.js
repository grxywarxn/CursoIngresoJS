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
        
            break;
    }
}
console.log("" + x);
console.log("" + x);
if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}