// Luis Claros

function mostrar()
{
	let edadIngresada;
	let resultado

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada == 15){

		resultado = "niña bonita";

	}else
	{ 
		resultado = "tu edad es " + edadIngresada;

	}
 
	alert(resultado);


}
/*
    if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
    {
        codigo...;
    }else
    {
        codigo...;
    }

    operadores aritmeticos:
    + - * / %
    operadores relacionales o condicionales
    < > <= >= == !=
    operadores logicos
    condicionUno    &&  condicionDos            ||               !
    y logica                                o logica         negacion
    */