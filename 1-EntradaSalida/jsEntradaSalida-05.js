//Luis Claros
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let mensaje;
	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Su nombre es " + nombreIngresado + " y su edad es " + edadIngresada;

	alert(mensaje);
}

