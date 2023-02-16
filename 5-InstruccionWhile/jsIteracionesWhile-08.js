//Luis Claros
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero:"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
	
		respuesta = prompt("¿Quiere ingresar otro número?");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN