// MACHETITO

let ingNombre;
let ingApellido;
let ingEdad;
let ingGenero;
let ingAltura;
let ingPeso;
let ingNacionalidad;
let ingNumero;
let ingPrecio;

//VALIDACIÓN NOMBRE
ingNombre = prompt("Ingrese su nombre: ");
while (!isNaN(ingNombre)) {
    ingNombre = prompt("Error. Ingrese su nombre: ");
}
//VALIDACIÓN APELLIDO
ingApellido = prompt("Ingrese su apellido: ");
while (!isNaN(ingApellido)) {
    ingApellido = prompt("Error. Ingrese su apellido: ");
}
//VALIDACIÓN EDAD
edadIngresada = parseInt(prompt("Ingrese su edad (1 a 130)"))
while (isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 130) {
    edadIngresada = parseInt(prompt("Error: ingrese una edad válida (1 a 130)"));
}
//VALIDACIÓN GÉNERO
ingGenero = prompt("Ingrese su género: masculino, femenino o no binario")
ingGenero = ingGenero.toLowerCase();
while (!isNaN(ingGenero) || ingGenero != "masculino" && ingGenero != "femenino" && ingGenero != "no binario") {
    ingGenero = prompt("Error. Ingrese su género: masculino, femenino o no binario");
}
//VALIDACIÓN NACIONALIDAD - REEMPLAZAR PAISES
ingNacionalidad = prompt("Ingrese su nacionalidad: x1, x2 o x3");
ingNacionalidad = ingNacionalidad.toLowerCase();
while (!isNaN(ingNacionalidad) || ingNacionalidad != "x1" && ingNacionalidad != "x2" && ingNacionalidad != "x3") {
    ingNacionalidad = prompt("Error. Ingrese su nacionalidad: x1, x2 o x3");
}
//VALIDACIÓN ALTURA
ingAltura = parseFloat(prompt("Ingrese su altura: "));
while (isNaN(ingAltura) || ingAltura < 0) {
    ingAltura = parseFloat(prompt("Error. Ingrese su altura: "));
}
//VALIDACIÓN PESO
ingPeso = parseInt(prompt("Ingrese su peso: "));
while (isNaN(ingPeso) || ingPeso < 0) {
    ingPeso = prompt("Error. Ingrese su peso: ");
}
//VALIDACIÓN NUMERO
ingNumero = parseInt(prompt("Ingrese un número: "));
while (isNaN(ingNumero)) {
    ingNumero = parseInt(prompt("Error. Ingrese un número: "));
}
//VALIDACIÓN PRECIO
ingPrecio = parseInt(prompt("Ingrese un precio: "));
while (isNaN(ingPrecio) || ingPrecio < 0 || ingPrecio > 0) {
    ingPrecio = parseInt(prompt("Error. Ingrese un precio: "));
}

//PORCENTAJE
porcentajeX = (contX * 100 / contXTOTAL).toFixed(1)

//ESTRUCTURA SWITCH 3 CASOS
switch (ing) {
    case "":

        break;
    case "":

        break;
    case "":

        break;
}

//ESTRUCTURA WHILE - REPETICIONES INDEFINIDAS
let continuar;
continuar = true;

while (continuar == true) {

    continuar = confirm("¿Desea seguir ingresando datos?")
}

//ESTRUCTURA FOR - ITERACIONES DEFINIDAS
for (let i = 0; i < x; i++) {

}

//BANDERA NUMERO MÁXIMO Y MÍNIMO(OPCIONAL) - SE PUEDE GUARDAR NOMBRES O ESTADOS TAMBIÉN.

if (bandera == true || ingNumero > max) {
    max = ingNumero;
    bandera = false;
} else if (ingNumero < min) {
    min = ingNumero;
}

//BANDERA NUMERO MAS ALTO CON UNA CONDICIÓN -- PARTE DE DEMBE, NO ENTENDÍ XD
if (vacuna == "si" && banderaVacuna == true || vacuna == "si" && edadMasVieja < edad) {
    masVieja = edad;
    nombreMasViejo = nombre;
    banderaVacuna = false;
}

//COMPARACIÓN DEL MÁXIMO ENTRE 3

if (x1 > x2 && x1 > x3) {
    maxNum = "x1";
} else if (x2 > x1 && x2 > x3) {
    maxNum = "x2";
} else {
    maxNum = "x3";
}

//APLICAR DESCUENTOS
if (cont > 9 && cont < 30) {
    descuento = ;
} else if (cont > 29) {
    descuento = ;
} else {
    descuento = 0;
}

//MOSTRAR RESULTADOS
console.log("" + x);
console.log("" + x);
console.log("" + x);
console.log("" + x);
console.log("" + x);

document.write("" + "<br>");
document.write("" + "<br>");
document.write("" + "<br>");
document.write("" + "<br>");
document.write("" + x);

//RESULTADOS CONDICIONADOS
if (descuento > 0) {
    console.log("El importe con descuento a pagar es: " + acumPreciosDescuento);
} else {
    console.log("No se aplica ningún descuento para su compra");
}