//Luis Claros
/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	//DECLARO VARIABLES
	let numero;
	let mensaje;

	numero = 11
	//PROCESO
	while(numero > 1)
	{
		numero = numero - 1;
		console.log(numero);
		mensaje = "fuera del bucle";
	}
	//INFORMO
	alert(mensaje);
}//FIN DE LA FUNCIÓN