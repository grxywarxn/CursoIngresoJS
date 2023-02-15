//Luis Claros
/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	//DECLARO VARIABLES
	let i;
	let mensaje;

	i = 11;
	//PROCESO
	while(i > 1)
	{
		i = i - 1;
		console.log(i);
	}
	//INFORMO
	mensaje = "fuera del bucle";
	alert(mensaje);
}//FIN DE LA FUNCIÓN