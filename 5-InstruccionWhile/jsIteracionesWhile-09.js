//Luis Claros
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let bandera;

	respuesta = "si";
	bandera = 0;

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}
		if(bandera == 0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera = 1;
		}
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("¿desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}