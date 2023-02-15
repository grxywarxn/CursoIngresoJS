//Luis Claros
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9"));

	while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = parseInt(prompt("Ingrese un número válido"));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;	
}//FIN DE LA FUNCIÓN