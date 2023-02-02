//Luis Claros 
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldoIngresado;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	porcentaje = -25;
	sueldoIngresado = document.getElementById("txtIdImporte").value;

	sueldoIngresado =parseInt(sueldoIngresado);

	porcentajeAplicado = sueldoIngresado * porcentaje/100;
	resultado = sueldoIngresado + porcentajeAplicado;

	document.getElementById("txtIdResultado").value = resultado;
}
