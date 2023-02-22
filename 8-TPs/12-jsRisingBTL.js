/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar
una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edadIngresada;
	let sexoIngresado;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidadIngresada;

	edadIngresada = parseInt(prompt("Ingrese su edad (entre 18 y 90)."));
	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = parseInt(prompt("Ingrese una edad válida"));
	}

	sexoIngresado = prompt("Ingrese su sexo, 'f' para femenino y 'm' para masculino.");
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Ingrese un sexo válido, 'f' o 'm'");
	}
	if(sexoIngresado == "f"){
		sexoIngresado = "Femenino";
	}else{
		sexoIngresado = "Masculino";
	}

	estadoCivil = parseInt(prompt("Ingrese su estado civil: 1 para soltero/a, 2 para casado/a, 3 para divorciado/a y 4 para viudo/a."));
	while(isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
	{
		estadoCivil = parseInt(prompt("Ingrese un estado civil válido: 1 para soltero/a, 2 para casado/a, 3 para divorciado/a y 4 para viudo/a."));
	}
	if(estadoCivil == 1){
		estadoCivil = "Soltero/a";
	}else if(estadoCivil == 2){
		estadoCivil = "Casado/a";
	}else if(estadoCivil == 3){
		estadoCivil = "Divorciado/a";
	}else{
		estadoCivil = "Viudo/a";
	}

	sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto. (no debe ser menor a 8000)"));
	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("Ingrese un sueldo bruto válido. (no debe ser menor a 8000)"));
	}

	numeroLegajo = parseInt(prompt("Ingrese su número de legajo"));
	while(isNaN(numeroLegajo)|| numeroLegajo < 0 || numeroLegajo > 9999)
	{
		numeroLegajo = parseInt(prompt("Ingrese un número de legajo válido"));
	}

	nacionalidadIngresada = prompt("Ingrese su nacionalidad: 'A' para argentino/a, 'E' para extranjero/a y 'N' para nacionalizado/a.");
	while(nacionalidadIngresada != "a" && nacionalidadIngresada != "A" && nacionalidadIngresada != "e" && nacionalidadIngresada != "E" && nacionalidadIngresada != "n" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Ingrese una nacionalidad válida: 'A' para argentino/a, 'E' para extranjero/a y 'N' para nacionalizado/a.")
	}
	if(nacionalidadIngresada == "A" || nacionalidadIngresada == "a"){
		nacionalidadIngresada = "Argentino/a";
	}else if(nacionalidadIngresada == "E" || nacionalidadIngresada == "e"){
		nacionalidadIngresada = "Extranjero/a";
	}else{
		nacionalidadIngresada = "Nacionalizado/a";
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}