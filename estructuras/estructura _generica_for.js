for (let i = 0; i < 10; i++) {
    ingNombre = prompt("Ingrese su nombre: ");
    while (!isNaN(ingNombre)) {
        ingNombre = prompt("Error. Ingrese su nombre: ");
    }
    x = prompt("ingrese el tipo de producto: 'x1', 'x2' o 'x3'");
    x = x.toLowerCase();
    while (x != "x1" && x != "x2" && x != "x3") {
        x = prompt("Ingrese el tipo de producto: 'x1', 'x2' o 'x3'")
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
    switch (x) {
        case "x1":
            contVentrasGolosinas = contVentrasGolosinas + 1;
            acumGolosinas = acumGolosinas + ingCantidadUnidades;
            break;
        case "x2":
            contBebidas = contBebidas + 1;
            break;
        case "x3":
        
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