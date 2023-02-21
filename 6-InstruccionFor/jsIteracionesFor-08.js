//Luis Claros
function mostrar()
{
	let numeroIngresado;
	let contadorDivisores;
	let mensaje;
	let i;
	contadorDivisores = 0;
 
	numeroIngresado = parseInt(prompt("Ingrese un numero."));

	for(i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorDivisores = contadorDivisores + 1;
		}
	}
	if(contadorDivisores == 2)
	{
		mensaje = numeroIngresado + " Es primo";
	}
	else
	{
		mensaje = numeroIngresado + " No es primo"
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN