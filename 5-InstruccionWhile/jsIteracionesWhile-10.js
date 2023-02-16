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
	let promedioPositivos; // 7 
	let promedioNegativos; // 8
	let diferenciaPositivosNegativos; // 9

	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorCeros = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese Un número"));
		while(isNaN(numeroIngresado))
		{
			parseInt(prompt("Error, ingrese un número válido"));
		}

		if(numeroIngresado < 0)
		{
			contadorNegativos = contadorNegativos + 1;
			sumaNegativos = sumaNegativos + numeroIngresado;
		}
		respuesta=prompt("desea continuar?");
	}

	document.write("la suma de negativos es :"+sumaNegativos);
}