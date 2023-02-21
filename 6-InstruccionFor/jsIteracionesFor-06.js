//Luis Claros
function mostrar()
{
	let numeroIngresado;
	let contadorPares;
	let mensaje;
	let i;

	contadorPares = 0;
 
	numeroIngresado = parseInt(prompt("Ingrese un numero."));

	for(i = 1; i <= numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			contadorPares = contadorPares + 1;
			console.log(i)
		}
	}
	mensaje = "La cantidad de pares encontrados es: " + contadorPares;
	console.log(mensaje);


}//FIN DE LA FUNCIÓN