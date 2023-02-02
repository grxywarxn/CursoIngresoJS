//Luis Claros 
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldoIngresado;
	let sueldoReducido;
	
	sueldoIngresado = document.getElementById("txtIdImporte").value;

	sueldoIngresado =parseInt(sueldoIngresado);

	sueldoReducido = sueldoIngresado * 0.75;

	document.getElementById("txtIdResultado").value = sueldoReducido;
}
