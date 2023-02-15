//Luis Claros 
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let respuesta;
	
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
			numeroIngresado = parseInt(numeroIngresado);
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("¿Desea seguir ingresando números? (si/no)")
	}	

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN