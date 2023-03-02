/*
// 2- Nos ingresan una cantidad indeterminada de alumnos inscriptos en programación 1,
// validando los datos ingresados:
// División [A,B, C] ,nombre del alumno ,legajo [del 1 al 10000] , si es recursante o no y nota.
// Informar:
// a)La división con más aspirantes.
// b)el nombre recursante con mayor nota
// c)el nombre del que No es recursante y tiene  la menor nota.
// Pedir datos por prompt y mostrar por document.write o console.log*/
function mostrar() {
    let ingDivision;
    let ingNombre;
    let ingLegajo;
    let ingRecursanteONo;
    let ingNota;

    let contadorDivA = 0;
    let contadorDivB = 0;
    let contadorDivC = 0;
    let divisionMasAlumnos;

    let banderaRecursante = true;
    let maxNotaRecursante;
    let nombreMaxNotaRecursante;

    let banderaNoRecursante = true;
    let minNotaNoRecursante;
    let nombreMinNotaNoRecursante;
    let continuar = true;


    while (continuar == true) {
        ingDivision = prompt("ingrese su división: 'A', 'B' o 'C'");
        ingDivision = ingDivision.toUpperCase();
        while (ingDivision != "A" && ingDivision != "B" && ingDivision != "C") {
            ingDivision = prompt("Ingrese su división: 'A', 'B' o 'C'")
        }
        ingNombre = prompt("Ingrese su nombre: ");
        while (!isNaN(ingNombre)) {
            ingNombre = prompt("Error. Ingrese su nombre: ");
        }
        ingLegajo = parseInt(prompt("Ingrese su número de legajo: (entre 1  y 10000)"));
        while (isNaN(ingLegajo) || ingLegajo < 1 || ingLegajo > 10000) {
            ingLegajo = parseInt(prompt("Error. Ingrese su número de legajo: (entre 1  y 10000)"));
        }
        ingRecursanteONo = prompt("ingrese si es recursante: 'si' o 'no'");
        ingRecursanteONo = ingRecursanteONo.toLowerCase();
        while (ingRecursanteONo != "si" && ingRecursanteONo != "no") {
            ingRecursanteONo = prompt("Ingrese si es recursante: 'si' o 'no'")
        }
        ingNota = parseInt(prompt("Ingrese su nota: (entre 1  y 10)"));
        while (isNaN(ingNota) || ingNota < 1 || ingNota > 10) {
            ingNota = parseInt(prompt("Error. Ingrese su nota: (entre 1  y 10)"));
        }

        switch (ingDivision) {
            case "A":
                contadorDivA = contadorDivA + 1;
                break;
            case "B":
                contadorDivB = contadorDivB + 1;
                break;
            case "C":
                contadorDivC = contadorDivC + 1;
                break;
        }

        if (ingRecursanteONo == "si" && (banderaRecursante == true || ingNota > maxNotaRecursante)) {
            maxNotaRecursante = ingNota;
            nombreMaxNotaRecursante = ingNombre;
            banderaRecursante = false;
        } 
        if (ingRecursanteONo == "no" && (banderaNoRecursante == true || ingNota < minNotaNoRecursante)) {
            minNotaNoRecursante = ingNota;
            nombreMinNotaNoRecursante = ingNombre;
            banderaNoRecursante = false;
        }

        if (contadorDivA > contadorDivB && contadorDivA > contadorDivC) {
            divisionMasAlumnos = "División A";
        } else if (contadorDivB > contadorDivA && contadorDivB > contadorDivC) {
            divisionMasAlumnos = "División B";
        } else {
            divisionMasAlumnos = "División C";
        }
        continuar = confirm("¿Desea seguir ingresando datos?")
    }
    // a)La división con más aspirantes.
    console.log("La división con más aspirantes es: " + divisionMasAlumnos);
    // b)el nombre recursante con mayor nota
    if (banderaRecursante == false) {
        console.log("El nombre del recursante con mayor nota es: " + nombreMaxNotaRecursante);
    } else {
        console.log("No se registraron alumnos recursantes");
    }
    // c)el nombre del que No es recursante y tiene  la menor nota.
    if (banderaNoRecursante == false) {
        console.log("El nombre del que no es recursante y tiene la menor nota es :" + nombreMinNotaNoRecursante);
    } else {
        console.log("No se registraron alumnos no recursantes");
    }
}