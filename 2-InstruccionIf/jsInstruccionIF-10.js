//Luis Claros

function mostrar()
{
	let nota;
	let mensaje;

	nota = Math.floor(Math.random()* 10 + 1);

	if(nota > 8){
		mensaje = "Su nota es: " + nota + ", Excelente.";
	}else{
		if(nota >= 4)
		{
			mensaje = "Su nota es: " + nota + ", aprobado.";
		}else
		{
			mensaje = "Su nota es: " + nota + ", desaprobado.";
		}
		

	}
	console.log(mensaje);
}//FIN DE LA FUNCIÓN