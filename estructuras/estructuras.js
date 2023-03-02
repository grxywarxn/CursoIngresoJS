// Luis Claros

let ingNombre;
let ingApellido;
let ingEdad;
let ingGenero;
let ingAltura;
let ingPeso;
let ingNacionalidad;
let ingNumero;
let ingPrecio;
let ingTipoProducto;
let ingSexo;

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

//VALIDACION 2 OPCIONES X
ingRecursanteONo = prompt("ingrese si es : 'si' o 'no'");
ingRecursanteONo = ingRecursanteONo.toLowerCase();
while (ingRecursanteONo != "si" && ingRecursanteONo != "no") {
    ingRecursanteONo = prompt("Ingrese si es : 'si' o 'no'")
}

//VALIDACION LEGAJO
ingLegajo = parseInt(prompt("Ingrese su número de legajo: (entre 1  y 10000)"));
while (isNaN(ingLegajo) || ingLegajo < 1 || ingLegajo > 10000) {
    ingLegajo = parseInt(prompt("Error. Ingrese su número de legajo: (entre 1  y 10000)"));
}

//VALIDACIÓN EDAD 1 A 130
ingEdad = parseInt(prompt("Ingrese su edad (1 a 130)"))
while (isNaN(ingEdad) || ingEdad < 1 || ingEdad > 130) {
    ingEdad = parseInt(prompt("Error: ingrese una edad válida (1 a 130)"));
}

//VALIDACIÓN EDAD MAYOR A 18
ingEdad = parseInt(prompt("Ingrese su edad (18 o más)"))
while (isNaN(ingEdad) || ingEdad < 18 || ingEdad > 130) {
    ingEdad = parseInt(prompt("Error: ingrese una edad válida (18 o más)"));
}

//VALIDACIÓN ESTADO CIVIL
ingEstadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo")
ingEstadoCivil = ingEstadoCivil.toLowerCase();
while (!isNaN(ingEstadoCivil) || ingEstadoCivil != "soltero" && ingEstadoCivil != "casado" && ingEstadoCivil != "viudo") {
    ingEstadoCivil = prompt("Error. Ingrese su estado civil: soltero, casado o viudo");
}

//VALIDACIÓN GÉNERO
ingGenero = prompt("Ingrese su género: masculino, femenino o no binario")
ingGenero = ingGenero.toLowerCase();
while (ingGenero != "masculino" && ingGenero != "femenino" && ingGenero != "no binario") {
    ingGenero = prompt("Error. Ingrese su género: masculino, femenino o no binario");
}

//VALIDACIÓN SEXO
ingSexo = prompt("Ingrese su sexo: masculino, femenino o no binario")
ingSexo = ingSexo.toLowerCase();
while (ingSexo != "masculino" && ingSexo != "femenino" && ingSexo != "no binario") {
    ingSexo = prompt("Error. Ingrese su sexo: masculino, femenino o no binario");
}

//VALIDACIÓN NACIONALIDAD - CON OPCIONES
ingNacionalidad = prompt("Ingrese su nacionalidad: x1, x2 o x3");
ingNacionalidad = ingNacionalidad.toLowerCase();
while (ingNacionalidad != "x1" && ingNacionalidad != "x2" && ingNacionalidad != "x3") {
    ingNacionalidad = prompt("Error. Ingrese su nacionalidad: x1, x2 o x3");
}

//VALIDAR NACIONALIDAD SIN OPCIONES
ingNacionalidad = prompt("Ingrese su nacionalidad: ")
ingNacionalidad = ingNacionalidad.toLowerCase();
while (!isNaN(ingNacionalidad)) {
    ingNacionalidad = prompt("Error. Ingrese su nacionalidad: ");
}

//VALIDACIÓN ALTURA EN CENTÍMETROS
ingAltura = parseInt(prompt("Ingrese su altura en centímetros: "));
while (isNaN(ingAltura) || ingAltura < 0 || ingAltura > 300) {
    ingAltura = parseInt(prompt("Error. Ingrese su altura en centímetros: ")) || ingAltura > 300;
}

//VALIDACIÓN ALTURA EN METROS
ingAltura = parseFloat(prompt("Ingrese su altura en metros: "));
while (isNaN(ingAltura) || ingAltura < 0 || ingAltura > 3) {
    ingAltura = parseFloat(prompt("Error. Ingrese su altura en metros: ")) || ingAltura > 300;
}
//VALIDACIÓN PESO
ingPeso = parseFloat(prompt("Ingrese su peso: "));
while (isNaN(ingPeso) || ingPeso < 0 || ingPeso > 250) {
    ingPeso = parseFloat(prompt("Error. Ingrese su peso: "));
}

//VALIDACIÓN TEMPERATURA CORPORAL
ingTemperaturaCorporal = parseFloat(prompt("Ingrese su temperatura: (34 a 44)"));
while (isNaN(ingTemperaturaCorporal) || ingTemperaturaCorporal < 34 || ingTemperaturaCorporal > 44) {
    ingTemperaturaCorporal = parseFloat(prompt("Error. Ingrese su temperatura: (34 a 44)"));
}

//VALIDACIÓN NUMERO
ingNumero = parseInt(prompt("Ingrese un número: "));
while (isNaN(ingNumero)) {
    ingNumero = parseInt(prompt("Error. Ingrese un número: "));
}

//VALIDACIÓN PRECIO
ingPrecio = parseInt(prompt("Ingrese un precio: "));
while (isNaN(ingPrecio) || ingPrecio < 0 || ingPrecio > 1000) {
    ingPrecio = parseInt(prompt("Error. Ingrese un precio: "));
}

//VALIDACIÓN IMPORTE
ingImporte = parseInt(prompt("Ingrese el importe del pasaje: (entre 1  y 300000)"));
while (isNaN(ingImporte) || ingImporte < 0 || ingImporte > 300000) {
    ingImporte = parseInt(prompt("Error. Ingrese el importe del pasaje: (entre 0  y 300000)"));
}

//VALIDACIÓN POR TIPO DE PRODUCTO
ingTipoProducto = prompt("ingrese el tipo de producto: 'x1', 'x2' o 'x3'");
ingTipoProducto = ingTipoProducto.toLowerCase();
while (ingTipoProducto != "x1" && ingTipoProducto != "x2" && ingTipoProducto != "x3") {
    ingTipoProducto = prompt("Ingrese el tipo de producto: 'x1', 'x2' o 'x3'")
}

//VALIDACION TIPO DE VENTA
ingTipoVenta = prompt("ingrese el tipo de venta: 'online' o 'local'");
ingTipoVenta = ingTipoVenta.toLowerCase();
while (ingTipoVenta != "online" && ingTipoVenta != "local") {
    ingTipoVenta = prompt("Ingrese el tipo de venta: 'online' o 'local'")
}

//VALIDACION DIVISIONES CON TOUPPERCASE
ingDivision = prompt("ingrese su división: 'A', 'B' o 'C'");
ingDivision = ingDivision.toUpperCase();
while (ingDivision != "A" && ingDivision != "B" && ingDivision != "C") {
    ingDivision = prompt("Ingrese su división: 'A', 'B' o 'C'")
}

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
let continuar = true;

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

//BANDERA NUMERO MAS ALTO CON UNA CONDICIÓN 
if (banderaVacuna == true && vacuna == "si" || vacuna == "si" && edadMasVieja < edad) {
    masVieja = edad;
    nombreMasViejo = nombre;
    banderaVacuna = false;
}

//SI TENGO UN CONTADOR PUEDO USARLO PARA INICIALIZAR LA PRIMERA VEZ QUE INGRESEN DATOS, USARLO COMO BANDERA;
if(contador == 0 || ing > max){
    nombreMax = ingNombre;
    max = ing
}
//PARA MÍNIMOS
if(contador == 0 || ing < min){
    nombreMin = ingNombre;
    min = ing
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
    descuento = 0;
} else if (cont > 29) {
    descuento = 0;
} else {
    descuento = 0;
}

//PORCENTAJES
porcentaje = (contX * 100 / contTOTAL).toFixed(1)
// !!!!!INICIALIZAR CONTADORES Y ACUMULADORES EN 0!!!!! REVISAR
//PROMEDIOS
promedio = acu / cont;

promedio1 = acumulador1 / contador1;
promedio2 = acumulador3 / contador3;
promedio3 = acumulador2 / contador2;

//MOSTRAR RESULTADOS
console.log("" + x);
console.log("" + x);


document.write("" + "<br>");
document.write("" + "<br>");
document.write("" + x);

//RESULTADOS CONDICIONADOS
if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}
if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}
if (true) {
    console.log("" + nombre);
} else {
    console.log("No se registraron ");
}
if (true) {
    console.log("" + nombre + " y su edad es: " + edad);
} else {
    console.log("No se registraron ");
}

//MINOMBRE
//Luis Claros