//ESTRUCTURA WHILE 6 INGRESOS 1 SWITCH POR X CASO 3 OPCIONES CON CONTADORES Y ACUMULADORES Y CALCULO DE PROMEDIOS
while (continuar == true) {
    ingNombre = prompt("Ingrese su nombre: ");
    while (!isNaN(ingNombre)) {
        ingNombre = prompt("Error. Ingrese su nombre: ");
    }
    ingEdad = parseInt(prompt("Ingrese su edad (18 o más)"))
    while (isNaN(ingEdad) || ingEdad < 18 || ingEdad > 130) {
        ingEdad = parseInt(prompt("Error. Ingrese su edad (18 o más)"));
    }
    ingSexo = prompt("Ingrese su sexo: masculino, femenino o no binario")
    ingSexo = ingSexo.toLowerCase();
    while (ingSexo != "masculino" && ingSexo != "femenino" && ingSexo != "no binario") {
        ingSexo = prompt("Error. Ingrese su sexo: masculino, femenino o no binario");
    }
    //usar para el switch
    x = prompt("Ingrese su x: 'x1', 'x2' o 'x3'");
    x = x.toLowerCase();
    while (x != "x1" && x != "x2" && x != "x3") {
        x = prompt("Error. Ingrese su x: 'x1', 'x2' o 'x3'")
    }


    switch (x) {
        case "x1":
            contador1 = contador1 + 1;
            break;
        case "x2":
            contador2 = contador2 + 1;
            break;
        case "x3":
            contador3 = contador3 + 1;
            break;
    }
    continuar = confirm("¿Desea seguir ingresando datos?")
}

if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}

console.log("" + x);
console.log("" + x);

if (true) {
    console.log("" + nombre + " y su edad es: " + edad);
} else {
    console.log("No se registraron ");
}