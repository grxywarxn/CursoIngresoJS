//Luis Claros
function mostrar()
{
	let i;
	let pedidoRepeticiones;
	let mensaje;

	pedidoRepeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones del mensaje"))
	mensaje = "Hola UTN FRA <br>"

    for(i = 0; i < pedidoRepeticiones ; i++) 
	{
    	document.write(mensaje);
    }
}