//Luis Claros

function mostrar()
{
	let numRandom;
	let mensaje;
	let max;
	let min;

	max = 10;
	min = 1;
	numRandom = Math.floor(Math.random()*max + min);
	mensaje = "El número random es: " + numRandom;

	console.log(mensaje);
}

/*La función Math.floor() 
La funcion Math.ceil() 
La funcionMath.roun()Math.random(
pueden buscar todas esas */