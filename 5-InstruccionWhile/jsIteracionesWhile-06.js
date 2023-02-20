//Luis Claros 
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	contador = 0;
	acumulador = 0;

	for(let i = 0;				i < 4; 				i ++)
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}	

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN