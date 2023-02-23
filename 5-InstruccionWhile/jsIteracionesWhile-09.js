//Luis Claros
/*
While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)*/
function mostrar() {
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let bandera;
	let banderaPares;
	let menorPar;
	let banderaNegativos;
	let mayorNegativo;

	respuesta = "si";
	bandera = true;
	banderaPares = true;
	banderaNegativos = true;

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número:"));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}
		if (bandera == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = false;
		}
		if(banderaPares == true){
			if(numeroIngresado % 2 == 0)
			{
				menorPar = numeroIngresado;
				banderaPares = false;
			}
		}
		if(banderaNegativos == true){
			if(numeroIngresado < 0)
			{
				mayorNegativo = numeroIngresado;
				banderaNegativos = false;
			}
		}
		if(numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		else{
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}

		if(banderaPares == false && numeroIngresado < menorPar) {
			menorPar = numeroIngresado;
		}
		if(banderaNegativos == false && numeroIngresado > mayorNegativo){
			mayorNegativo = numeroIngresado;
		}
		respuesta = prompt("¿Desea seguir ingresando números?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	if(banderaPares == false){
	alert("El menor de los pares ingresados es: " + menorPar);
	}
	if(banderaNegativos == false){
	alert("El mayor de los negativos es: " + mayorNegativo);
	}
}