//Luis Claros
/*While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let edadMenor;
	let edadMayor;
	let nombreMenor;
	let nombreMayor;
	let bandera;
	let mensaje;

	bandera = true;
	respuesta = "si";
	
	while(respuesta == "si")
	{	
		nombreIngresado = prompt("Ingrese su nombre");
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado = prompt("Ingrese un nombre válido");
		}
		edadIngresada = parseInt(prompt("Ingrese su edad"));
		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 130)
		{
			parseInt(prompt("Ingrese una edad válida"));
		}
		if(bandera == true)
		{
			edadMayor = edadIngresada;
			edadMenor = edadIngresada;
			nombreMayor = nombreIngresado;
			nombreMenor = nombreIngresado;
			bandera = false;
		}
		else
		{
			if(edadIngresada < edadMenor)
			{
			edadMenor = edadIngresada;
			nombreMenor = nombreIngresado;
			}
			else
			{
			edadMayor = edadIngresada;
			nombreMayor = nombreIngresado;
			}
		}
		respuesta = prompt("¿Quiere seguir ingresando nombres? si/no");
	}
	mensaje = nombreMayor + " es la persona mayor y " + nombreMenor + " es la persona menor.";
	document.write(mensaje);
}