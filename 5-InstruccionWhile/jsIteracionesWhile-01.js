//Luis Claros
/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//DECLARO VARIABLES
	let numero;
	let mensaje;

	numero = 0
	//PROCESO
	while(numero < 10)
	{
		numero = numero + 1;
		console.log(numero);
		mensaje = "fuera del bucle";
	}
	//INFORMO
	alert(mensaje);
}//FIN DE LA FUNCIÓN