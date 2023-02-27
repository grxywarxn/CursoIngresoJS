// Luis Claros 
/*

/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.*/
function mostrar()
{
	let ingNombre;
	let ingApellido;
	let ingGenero;
	let ingCantidadHijos;

	let contEmpleadosTotal;
	let contEmpleadosHombres;
	let contEmpleadosMujeres;
	let contEmpleadosNoBinario;
	let porcentajeEmpleadosHombres;
	let porcentajeEmpleadosMujeres;
	let porcentajeEmpleadosNoBinario;

	let banderaEmpleadoNoBinarioMasHijos;
	let nombreEmpleadoNoBinarioMasHijos;
	let cantidadHijosEmpleadoNoBinario;

	let banderaEmpleadoSinHijos;
	let nombreEmpleadoSinHijos;
	let apellidoEmpleadoSinHijos;

	contEmpleadosHombres = 0;
	contEmpleadosMujeres = 0;
	contEmpleadosNoBinario = 0;
	contEmpleadosTotal = 0;
	banderaEmpleadoNoBinarioMasHijos = true;
	banderaEmpleadoSinHijos = true;

	for(let i = 0; i < 2; i++){
		ingNombre = prompt("Ingrese su nombre");
		while(!isNaN(ingNombre)){
			ingNombre = prompt("Error. Ingrese su nombre");
		}
		ingApellido = prompt("Ingrese su apellido");
		while(!isNaN(ingApellido)){
			ingApellido = prompt("Error. Ingrese su apellido");
		}
		ingGenero = prompt("Ingrese su género: masculino, femenino o no binario");
		while(ingGenero != "masculino" && ingGenero != "femenino" && ingGenero != "no binario"){
			ingGenero = prompt("Error. Ingrese su género: masculino, femenino o no binario")
		}
		ingCantidadHijos = parseInt(prompt("Ingrese la cantidad de hijos"));
		while (isNaN(ingCantidadHijos) || ingCantidadHijos < 0) {
			ingCantidadHijos = parseInt(prompt("Error. Ingrese la cantidad de hijos"));
		}

		contEmpleadosTotal = contEmpleadosTotal + 1;
		switch(ingGenero){
			case "femenino":
				contEmpleadosMujeres = contEmpleadosMujeres + 1;
				break;
			case "masculino":
				contEmpleadosHombres = contEmpleadosHombres + 1;
				break;
			case "no binario":
				contEmpleadosNoBinario = contEmpleadosNoBinario + 1;
				if(ingCantidadHijos > 0){
					if(banderaEmpleadoNoBinarioMasHijos == true || ingCantidadHijos > cantidadHijosEmpleadoNoBinario){
						nombreEmpleadoNoBinarioMasHijos = ingNombre;
						cantidadHijosEmpleadoNoBinario = ingCantidadHijos;
						banderaEmpleadoNoBinarioMasHijos = false;
					}
				}
				break;
		}
		if(banderaEmpleadoSinHijos == true && ingCantidadHijos == 0){
			nombreEmpleadoSinHijos = ingNombre;
			apellidoEmpleadoSinHijos = ingApellido;
			banderaEmpleadoSinHijos = false;
		}
	}
	porcentajeEmpleadosHombres = (contEmpleadosHombres * 100 / contEmpleadosTotal).toFixed(1);
	porcentajeEmpleadosMujeres = (contEmpleadosMujeres * 100 / contEmpleadosTotal).toFixed(1);
	porcentajeEmpleadosNoBinario = (contEmpleadosNoBinario * 100 / contEmpleadosTotal).toFixed(1);

	console.log("El porcentaje de empleados es :"+porcentajeEmpleadosHombres+"% hombres"+", "+porcentajeEmpleadosMujeres+"% mujeres"+" y "+porcentajeEmpleadosNoBinario+"% no binario");
	if(ingGenero == "no binario" && ingCantidadHijos > 0){
	console.log("El nombre del empleado no binario con más hijos es: "+nombreEmpleadoNoBinarioMasHijos);
	}else{
		console.log("No hubo empleados no binarios con hijos");
	}
	if(banderaEmpleadoSinHijos == false){
	console.log("El nombre y apellido del primer empleado sin hijos es: "+nombreEmpleadoSinHijos+ " "+apellidoEmpleadoSinHijos);
	}else{
		console.log("No hubo empleados sin hijos");
	}
}