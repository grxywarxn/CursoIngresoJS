//UNO
let continuar = true;

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
    ingLenguaje = prompt("Ingrese el lenguaje: 'python', 'c#' o 'javascript'");
    ingLenguaje = ingLenguaje.toLowerCase();
    while (ingLenguaje != "python" && ingLenguaje != "c#" && ingLenguaje != "javascript") {
        ingLenguaje = prompt("Error. Ingrese el lenguaje: 'python', 'c#' o 'javascript'")
    }
    ingLugarAprendizaje = prompt("Ingrese dónde aprendió a programar: 'universidad', 'terciario' o 'curso'");
    ingLugarAprendizaje = ingLugarAprendizaje.toLowerCase();
    while (ingLugarAprendizaje != "universidad" && ingLugarAprendizaje != "terciario" && ingLugarAprendizaje != "curso") {
        ingLugarAprendizaje = prompt("Error. Ingrese dónde aprendió a programar: 'universidad', 'terciario' o 'curso'")
    }
    continuar = confirm("¿Desea seguir ingresando datos?")
}

//DOS

//    let continuar = true;
while (continuar == true) {
    ingNombre = prompt("Ingrese su nombre: ");
    while (!isNaN(ingNombre)) {
        ingNombre = prompt("Error. Ingrese su nombre: ");
    }
    ingLugar = prompt("Ingrese la ubicación del inmueble: 'caba', 'conurbano' o 'interior'");
    ingLugar = ingLugar.toLowerCase();
    while (ingLugar != "caba" && ingLugar != "conurbano" && ingLugar != "interior") {
        ingLugar = prompt("Error. Ingrese la ubicación del inmueble: 'caba', 'conurbano' o 'interior'")
    }
    if (ingLugar == "caba") {
        ingTipoInmueble = prompt("Ingrese el tipo de inmueble: 'departamento'o 'casa'");
        ingTipoInmueble = ingTipoInmueble.toLowerCase();
        while (ingTipoInmueble != "departamento" && ingTipoInmueble != "casa") {
            ingTipoInmueble = prompt("Error. Ingrese el tipo de inmueble: 'departamento'o 'casa'")
        }
    } else {
        ingTipoInmueble = prompt("Ingrese el tipo de inmueble: 'departamento', 'casa' o 'quinta'");
        ingTipoInmueble = ingTipoInmueble.toLowerCase();
        while (ingTipoInmueble != "departamento" && ingTipoInmueble != "casa" && ingTipoInmueble != "quinta") {
            ingTipoInmueble = prompt("Error. Ingrese el tipo de inmueble: 'departamento', 'casa' o 'quinta'")
        }
    }
    switch (ingTipoInmueble) {
        case "departamento":
            ingCantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes: (1 a 3)"));
            while (isNaN(ingCantidadHabitantes) || ingCantidadHabitantes < 1 || ingCantidadHabitantes > 3) {
                ingCantidadHabitantes = parseInt(prompt("Error. Ingrese la cantidad de habitantes: (1 a 3)"));
            }
            break;
        case "casa":
            ingCantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes: (1 a 7)"));
            while (isNaN(ingCantidadHabitantes) || ingCantidadHabitantes < 1 || ingCantidadHabitantes > 7) {
                ingCantidadHabitantes = parseInt(prompt("Error. Ingrese la cantidad de habitantes: (1 a 7)"));
            }
            break;
        case "quinta":
            ingCantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes: (1 a 15)"));
            while (isNaN(ingCantidadHabitantes) || ingCantidadHabitantes < 1 || ingCantidadHabitantes > 15) {
                ingCantidadHabitantes = parseInt(prompt("Error. Ingrese la cantidad de habitantes: (1 a 15)"));
            }
            break;
    }
    ingAlquiler = parseInt(prompt("Ingrese el valor del alquiler: "));
    while (isNaN(ingAlquiler) || ingAlquiler < 1 || ingAlquiler > 500000) {
        ingAlquiler = parseInt(prompt("Error. Ingrese el valor del alquiler: "));
    }

    switch (ingLugar) {
        case "caba":
            contadorCasasAlquiladasCaba = contadorCasasAlquiladasCaba + 1;
            break;
        case "interior":
            if (ingTipoInmueble == "quinta" && (banderaQuintaInteriorMasCara == true || ingAlquiler > precioQuintaInteriorMasCara)) {
                precioQuintaInteriorMasCara = ingAlquiler;
                banderaQuintaInteriorMasCara = false;
            }
            break;
    }
    if (banderaAlquilerMasCaro == true || ingAlquiler > precioAlquilerMasCaro) {
        precioAlquilerMasCaro = ingAlquiler;
        nombreAlquilerMasCaro = ingNombre;
        banderaAlquilerMasCaro = false;
    }
    continuar = confirm("¿Desea seguir ingresando datos?")
}

//TRES
//    let continuar = true;


while (continuar == true) {
    ingNombreRecital = prompt("Ingrese el nombre del recital: ");
    while (!isNaN(ingNombreRecital)) {
        ingNombreRecital = prompt("Error. Ingrese el nombre del recital: ");
    }
    ingTipoRecital = prompt("Ingrese el tipo de recital: 'pop', 'rock' o 'regeton'");
    ingTipoRecital = ingTipoRecital.toLowerCase();
    while (ingTipoRecital != "pop" && ingTipoRecital != "rock" && ingTipoRecital != "regeton") {
        ingTipoRecital = prompt("Error. Ingrese el tipo de recital: 'pop', 'rock' o 'regeton'")
    }
    ingCantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas: "));
    while (isNaN(ingCantidadEntradas) || ingCantidadEntradas < 1 || ingCantidadEntradas > 20) {
        ingCantidadEntradas = parseInt(prompt("Error. Ingrese la cantidad de entradas: "));
    }
    ingPrecioUnitarioEntrada = parseInt(prompt("Ingrese el precio de cada entrada: "));
    while (isNaN(ingPrecioUnitarioEntrada) || ingPrecioUnitarioEntrada < 1 || ingPrecioUnitarioEntrada > 300000) {
        ingPrecioUnitarioEntrada = parseInt(prompt("Error. Ingrese el precio de cada entrada: "));
    }
    ingLugarConcierto = prompt("Ingrese el lugar del concierto: 'rex', 'luna park' o 'trastienda'");
    ingLugarConcierto = ingLugarConcierto.toLowerCase();
    while (ingLugarConcierto != "rex" && ingLugarConcierto != "luna park" && ingLugarConcierto != "trastienda") {
        ingLugarConcierto = prompt("Error. Ingrese el lugar del concierto: 'rex', 'luna park' o 'trastienda'")
    }

    continuar = confirm("¿Desea seguir ingresando datos?")
}