//Luis Claros
/* * Apellido:

Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

//a)Precio promedio por mueble vendido
//b)Cantidad total de muebles de madera
//c)El mueble de metal más alto 
//d)El mueble más liviano
//e)Porcentaje de muebles de cada tipo de material
//f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
//g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.
*/
function mostrar() {
    let ingNombreMueble;
    let ingMaterialMueble;
    let ingPesoMueble;
    let ingAlturaMueble;
    let ingAnchuraMueble;
    let ingPrecioMueble;

    let impuestoMadera = 15;
    let descuentoVidrioMetal = -10;

    let contadorMueblesTotales = 0;
    let acumuladorPrecioMueblesTotales = 0;
    let promedioPrecioMueblesTotales;

    let contadorMueblesMadera = 0;

    let maxAlturaMuebleMetal;
    let nombreMaxAlturaMuebleMetal;

    let minPesoMueble;
    let nombreMinPesoMueble;

    let contadorMueblesVidrio = 0;
    let contadorMueblesMetal = 0;
    let porcentajeMueblesMadera;
    let porcentajeMueblesVidrio;
    let porcentajeMueblesMetal;

    let acumuladorPreciosMueblesMaderaConImpuestos = 0;
    let continuar = true;

    while (continuar == true) {
        ingNombreMueble = prompt("Ingrese el nombre del mueble: ");
        while (!isNaN(ingNombreMueble)) {
            ingNombreMueble = prompt("Error. Ingrese el nombre del mueble: ");
        }
        ingMaterialMueble = prompt("ingrese el material del mueble: 'madera', 'vidrio' o 'metal'");
        ingMaterialMueble = ingMaterialMueble.toLowerCase();
        while (ingMaterialMueble != "madera" && ingMaterialMueble != "vidrio" && ingMaterialMueble != "metal") {
            ingMaterialMueble = prompt("Ingrese el material del mueble: 'madera', 'vidrio' o 'metal'")
        }
        ingPesoMueble = parseFloat(prompt("Ingrese el peso del mueble: "));
        while (isNaN(ingPesoMueble) || ingPesoMueble < 1 || ingPesoMueble > 250) {
            ingPesoMueble = parseFloat(prompt("Error. Ingrese el peso del mueble: "));
        }
        ingAlturaMueble = parseInt(prompt("Ingrese altura del mueble en centímetros: "));
        while (isNaN(ingAlturaMueble) || ingAlturaMueble < 1 || ingAlturaMueble > 400) {
            ingAlturaMueble = parseInt(prompt("Error. Ingrese altura del mueble en centímetros: "));
        }
        ingAnchuraMueble = parseInt(prompt("Ingrese anchura del mueble en centímetros: "));
        while (isNaN(ingAnchuraMueble) || ingAnchuraMueble < 1 || ingAnchuraMueble > 300) {
            ingAnchuraMueble = parseInt(prompt("Error. Ingrese anchura del mueble en centímetros: "));
        }
        ingPrecioMueble = parseInt(prompt("Ingrese el precio del mueble: "));
        while (isNaN(ingPrecioMueble) || ingPrecioMueble < 1 || ingPrecioMueble > 100000) {
            ingPrecioMueble = parseInt(prompt("Error. Ingrese el precio del mueble: "));
        }

        switch (ingMaterialMueble) {
            case "madera":
                //b)Cantidad total de muebles de madera
                contadorMueblesMadera = contadorMueblesMadera + 1;
                //g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)
                acumuladorPreciosMueblesMaderaConImpuestos = acumuladorPreciosMueblesMaderaConImpuestos + (ingPrecioMueble + ingPrecioMueble * impuestoMadera/100);
                break;
            case "vidrio":
                contadorMueblesVidrio = contadorMueblesVidrio + 1;
                break;
            case "metal":
                //c)El mueble de metal más alto 
                if (contadorMueblesMetal == 0 || ingAlturaMueble > maxAlturaMuebleMetal) {
                    maxAlturaMuebleMetal = ingAlturaMueble;
                    nombreMaxAlturaMuebleMetal = ingNombreMueble;
                }
                contadorMueblesMetal = contadorMueblesMetal + 1;
                break;
        }
        //d)El mueble más liviano
        if (contadorMueblesTotales == 0 || ingPesoMueble < minPesoMueble) {
            minPesoMueble = ingPesoMueble;
            nombreMinPesoMueble = ingNombreMueble;
        }
        //f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
        acumuladorPrecioMueblesTotales = acumuladorPrecioMueblesTotales + ingPrecioMueble;
        contadorMueblesTotales = contadorMueblesTotales + 1;
        continuar = confirm("¿Desea seguir ingresando datos?")
    }
    //e)Porcentaje de muebles de cada tipo de material
    if (contadorMueblesMadera > 0) {
        porcentajeMueblesMadera = (contadorMueblesMadera / contadorMueblesTotales * 100).toFixed(1);
    }
    if (contadorMueblesVidrio > 0) {
        porcentajeMueblesVidrio = (contadorMueblesVidrio / contadorMueblesTotales * 100).toFixed(1);
    }
    if (contadorMueblesMetal > 0) {
        porcentajeMueblesMetal =( contadorMueblesMetal / contadorMueblesTotales * 100).toFixed(1);
    }
    //a)Precio promedio por mueble vendido
    if (contadorMueblesTotales > 0) {
        promedioPrecioMueblesTotales = acumuladorPrecioMueblesTotales / contadorMueblesTotales;
    }
    //a)Precio promedio por mueble vendido
    console.log("El precio promedio por mueble vendido es: " + promedioPrecioMueblesTotales);
    //b)Cantidad total de muebles de madera
    if (contadorMueblesMadera > 0) {
        console.log("La cantidad total de muebles de madera vendidos es: " + contadorMueblesMadera);
    } else {
        console.log("No se registraron ventas de muebles de madera");
    }
    //c)El mueble de metal más alto 
    if (contadorMueblesMetal > 0) {
        console.log("El mueble de metal más alto es: " + nombreMaxAlturaMuebleMetal + " y su altura es: " + maxAlturaMuebleMetal);
    } else {
        console.log("No se registraron ventas de muebles de metal");
    }
    //d)El mueble más liviano
    console.log("El mueble más liviano es: " + nombreMinPesoMueble + " y su peso es: " + minPesoMueble);
    //e)Porcentaje de muebles de cada tipo de material
    if (contadorMueblesMadera > 0) {
        console.log("El porcentaje de muebles de madera es: " + porcentajeMueblesMadera + "%");
    } else {
        console.log("No se registraron ventas de muebles de madera");
    }if (contadorMueblesVidrio > 0) {
        console.log("El porcentaje de muebles de vidrio es: " + porcentajeMueblesVidrio + "%");
    } else {
        console.log("No se registraron ventas de muebles de vidrio");
    }if (contadorMueblesMetal > 0) {
        console.log("El porcentaje de muebles de metal es: " + porcentajeMueblesMetal + "%");
    } else {
        console.log("No se registraron ventas de muebles de metal");
    }
    //f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
    console.log("El monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos) es: " + acumuladorPrecioMueblesTotales);
    //g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)
    console.log("El monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos) es: " + acumuladorPreciosMueblesMaderaConImpuestos);
}