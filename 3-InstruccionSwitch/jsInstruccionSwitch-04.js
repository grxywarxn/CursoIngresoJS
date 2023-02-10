//Luis Claros
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	let mesDelAnio;
	let mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;
	
	switch(mesDelAnio){
		case "Febrero" :
			mensaje = "tiene 28 dias"
			break;
		case "Abril" :
		case "Junio" :
		case "Septiembre" :
		case "Noviembre" :
			mensaje = "tiene 30 dias"
			break;
		default : 
			mensaje = "tiene 31 dias"
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN