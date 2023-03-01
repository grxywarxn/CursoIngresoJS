//ESTRUCTURA WHILE 6 INGRESOS 1 SWITCH POR X CASO 3 OPCIONES CON CONTADORES Y ACUMULADORES Y CALCULO DE PROMEDIOS
while (continuar == true) {
    ingNombre = prompt("Ingrese su nombre: ");
    while (!isNaN(ingNombre)) {
        ingNombre = prompt("Error. Ingrese su nombre: ");
    }
    ingEdad = parseInt(prompt("Ingrese su edad (18 o más)"))
    while (isNaN(ingEdad) || ingEdad < 0 || ingEdad > 130) {
        ingEdad = parseInt(prompt("Error: ingrese una edad válida (18 o más)"));
    }
    ingSexo = prompt("Ingrese su sexo: masculino, femenino o no binario")
    ingSexo = ingSexo.toLowerCase();
    while (ingSexo != "masculino" && ingSexo != "femenino" && ingSexo != "no binario") {
        ingSexo = prompt("Error. Ingrese su sexo: masculino, femenino o no binario");
    }
    ing2 = prompt("ingrese su x: 'x1', 'x2' o 'x3'");
    ing2 = ing2.toLowerCase();
    while (ing2 != "x1" && ing2 != "x2" && ing2 != "x3") {
        ing2 = prompt("Ingrese su x: 'x1', 'x2' o 'x3'")
    }
    ing3 = parseInt(prompt("Ingrese cantidad de materias: (entre 0  y 8)"));
    while (isNaN(ing3) || ing3 < 0 || ing3 > 8) {
        ing3 = parseInt(prompt("Error. Ingrese cantidad de materias: (entre 0  y 8)"));
    }
    ing4 = parseInt(prompt("Ingrese su x4 (entre 1 y 10)"));
    while (isNaN(ing4) || ing4 < 0 || ing4 > 10) {
        ing4 = parseInt(prompt("Error. Ingrese su x4 (entre 1 y 10)"));
    }
    switch (x) {
        case "x1":
            acumulador1 = acumulador1 + ingParaSumar;
            contador1 = contador1 + 1;
            break;
        case "x2":
            acumulador2 = acumulador2 + ingParaSumar;
            contador2 = contador2 + 1;
            break;
        case "x3":
            acumulador3 = acumulador3 + ingParaSumar;
            contador3 = contador3 + 1;
            break;
    }
    continuar = confirm("¿Desea seguir ingresando datos?")
}
promedio1 = acumulador1 / contador1;
promedio2 = acumulador3 / contador3;
promedio3 = acumulador2 / contador2;

if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}

if (true) {
    console.log(" " + nombre);
} else {
    console.log("No se registraron ");
}
//MOSTRAR PROMEDIOS EN CASO DE EXISTIR
if (promedio1 > 0) {
    console.log("El promedio de " + promedio1);
} else {
    console.log("No se registraron  para calcular un promedio.");
}
if (promedio2 > 0) {
    console.log("El promedio de " + promedio2);
} else {
    console.log("No se registraron  para calcular un promedio.");
}
if (promedio3 > 0) {
    console.log("El promedio de " + promedio3);
} else {
    console.log("No se registraron  para calcular un promedio.");
}

if (true) {
    console.log("" + nombre + " y su edad es: " + edad);
} else {
    console.log("No se registraron ");
}