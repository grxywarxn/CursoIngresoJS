//Luis Claros
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	let respuesta;
	let numeroIngresado;
	let sumaNegativos; //1
	let sumaPositivos; //2
	let contadorPositivos; // 3
	let contadorNegativos; // 4
	let contadorCeros; // 5
	let contadorPares; //6
	let parPositivo;
	let parNegativo;
	let promedioPositivos; // 7 
	let promedioNegativos; // 8
	let diferenciaPositivosNegativos; // 9

	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorCeros = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	
	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}
		if(numeroIngresado < 0)
		{
			contadorNegativos = contadorNegativos + 1;
			sumaNegativos = sumaNegativos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				contadorPositivos = contadorPositivos + 1;
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
			else
			{
				contadorCeros = contadorCeros + 1;
			}
		}

		parPositivo = numeroIngresado % 2;
		parNegativo = numeroIngresado % -2;

		if(parPositivo == 0 || parNegativo == 0)
		{
			contadorPares = contadorPares + 1;
		}
		respuesta = prompt("¿Desea seguír ingresando números?");
	}
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferenciaPositivosNegativos = promedioPositivos - promedioNegativos;

	console.log("la suma de negativos es : " + sumaNegativos);
	console.log("la suma de positivos es : " + sumaPositivos);
	console.log("la cantidad de positivos es : " + contadorPositivos);
	console.log("la cantidad de negativos es : " + contadorNegativos);
	console.log("la cantidad de ceros es : " + contadorCeros);
	console.log("la cantidad de pares es : " + contadorPares);
	console.log("el promedio de positivos es : " + promedioPositivos);
	console.log("el promedio de negativos es : " + promedioNegativos);
	console.log("la diferencia entre positivos y negativos es : " + diferenciaPositivosNegativos);
}