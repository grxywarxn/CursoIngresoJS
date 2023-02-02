// Luis Claros
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNum;
	let segundoNum;
	let resultadoSuma;
	let mensajeSuma;

	primerNum = document.getElementById("txtIdNumeroUno").value;
	segundoNum = document.getElementById("txtIdNumeroDos").value;

	primerNum = parseInt(primerNum);
	segundoNum = parseInt(segundoNum);

	resultadoSuma = primerNum + segundoNum;
	mensajeSuma = "La suma de los dos numeros es igual a " + resultadoSuma;
	alert(mensajeSuma);
}

function restar()
{
	let primerNum;
	let segundoNum;
	let resultadoResta;
	let mensajeResta;

	primerNum = document.getElementById("txtIdNumeroUno").value;
	segundoNum = document.getElementById("txtIdNumeroDos").value;

	primerNum = parseInt(primerNum);
	segundoNum = parseInt(segundoNum);

	resultadoResta = primerNum - segundoNum;
	mensajeResta = "La resta de los dos numeros es igual a " + resultadoResta;
	alert(mensajeResta);	
}

function multiplicar()
{ 
	let primerNum;
	let segundoNum;
	let resultadoMultiplicacion;
	let mensajeMultiplicacion;

	primerNum = document.getElementById("txtIdNumeroUno").value;
	segundoNum = document.getElementById("txtIdNumeroDos").value;

	primerNum = parseInt(primerNum);
	segundoNum = parseInt(segundoNum);

	resultadoMultiplicacion = primerNum * segundoNum;
	mensajeMultiplicacion = "La multiplicación de los dos numeros es igual a " + resultadoMultiplicacion;
	alert(mensajeMultiplicacion);	
}

function dividir()
{
	let primerNum;
	let segundoNum;
	let resultadoDivision;
	let mensajeDivision;

	primerNum = document.getElementById("txtIdNumeroUno").value;
	segundoNum = document.getElementById("txtIdNumeroDos").value;

	primerNum = parseInt(primerNum);
	segundoNum = parseInt(segundoNum);

	resultadoDivision = primerNum / segundoNum;
	mensajeDivision = "La división de los dos numeros es igual a " + resultadoDivision;
	alert(mensajeDivision);	
}