//Luis Claros
/*
While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)*/
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let bandera;
	let numeroPar;
	let menorPar;
	let mayorNegativo;

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
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			menorPar = numeroIngresado;
			bandera = 1;
		}
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
			numeroMinimo = numeroIngresado;
			}
		}

		if(numeroIngresado % 2 == 0 && numeroIngresado < menorPar)
		{
			menorPar = numeroIngresado;	
		}
	
		respuesta = prompt("¿desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	console.log("El menore de los pares ingresados es: " + menorPar);

}