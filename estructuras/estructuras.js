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

//VALIDACION NOMBRE
ingNombre = prompt("Ingrese su nombre: ");
while (!isNaN(ingNombre)) {
    ingNombre = prompt("Error. Ingrese su nombre: ");
}
//VALIDACION APELLIDO
ingApellido = prompt("Ingrese su apellido: ");
while (!isNaN(ingApellido)) {
    ingApellido = prompt("Error. Ingrese su apellido: ");
}
//VALIDACION EDAD
edadIngresada = parseInt(prompt("Ingrese su edad (1 a 130)"))
while (isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 130) {
    edadIngresada = parseInt(prompt("Error: ingrese una edad válida (1 a 130)"));
}
//VALIDACION GÉNERO
ingGenero = prompt("Ingrese su género: masculino, femenino o no binario")
ingGenero = ingGenero.toLowerCase();
while (!isNaN(ingGenero) || ingGenero != "masculino" && ingGenero != "femenino" && ingGenero != "no binario") {
    ingGenero = prompt("Error. Ingrese su género: masculino, femenino o no binario");
}
//VALIDACION NACIONALIDAD - REEMPLAZAR PAISES
ingNacionalidad = prompt("Ingrese su nacionalidad: x1, x2 o x3")
ingNacionalidad = ingNacionalidad.toLowerCase();
while (!isNaN(ingNacionalidad) || ingNacionalidad != "x1" && ingNacionalidad != "x2" && ingNacionalidad != "x3") {
    ingNacionalidad = prompt("Error. Ingrese su nacionalidad: x1, x2 o x3");
}
//VALIDACION ALTURA
ingAltura = parseInt(prompt("Ingrese su altura: "));
while (isNaN(ingAltura) || ingAltura < 0) {
    ingAltura = prompt("Error. Ingrese su altura: ");
}
//VALIDACION PESO
ingPeso = parseInt(prompt("Ingrese su peso: "));
while (isNaN(ingPeso) || ingPeso < 0) {
    ingPeso = prompt("Error. Ingrese su peso: ");
}
//VALIDACION NUMERO
ingNumero = parseInt(prompt("Ingrese un número: "));
while(isNaN(ingNumero)){
    ingNumero = parseInt(prompt("Error. Ingrese un número: "));
}
//VALIDACION PRECIO
ingPrecio = parseInt(prompt("Ingrese un precio: "));
while(isNaN(ingPrecio) || ingPrecio < 0){
    ingPrecio = parseInt(prompt("Error. Ingrese un precio: "));
}

//PORCENTAJE
porcentajeX = (contX * 100 / contXTOTAL).toFixed(1)

//ESTRUCTURA SWITCH 3 CASOS
switch(x){
    case "x1":

        break;
    case "x2":

        break;
    case "x3":

        break;
}

//ESTRUCTURA WHILE - REPETICIONES INDEFINIDAS
let continuar;
continuar = true;

while(continuar == true){

    continuar = confirm("¿Desea seguir ingresando datos?")
}

//ESTRUCTURA FOR - ITERACIONES DEFINIDAS
for(let i = 0; i < x; i++){

}

//BANDERA NUMERO MAXIMO Y MINIMO(OPCIONAL) - SE PUEDE GUARDAR NOMBRES O ESTADOS TAMBIEN.

if(bandera == true || ingNumero > max) {
    max = ingNumero;
    bandera = false;
}else if(ingNumero < min){
    min = ingNumero;
}

//BANDERA NUMERO MAS ALTO CON UNA CONDICIÓN -- PARTE DE DEMBE, NO ENTENDÍ XD
if (vacuna == "si" && banderaVacuna == true || vacuna == "si" && edadMasVieja < edad) {
    masVieja = edad;
    nombreMasViejo = nombre;
    banderaVacuna = false;
}

//COMPARACIÓN DEL MAXIMO ENTRE 3

if(x1 > x2 && x1 > x3){
    maxNum = "x1";
}else if(x2 > x1 && x2 > x3){
    maxNum = "x2";
}else{
    maxNum = "x3";
}