// Luis Claros
//ej 1 bis bis
function mostrar()
{
    let nombre;
    let alturaIngresada;
    let pesoIngresado;
    let imc;
    let mensaje;

    nombre = prompt("Ingrese su nombre.");
    pesoIngresado = parseFloat(document.getElementById("txtIdEdad").value);
    alturaIngresada = parseFloat(prompt("Ingrese su altura."));
    imc = pesoIngresado / (alturaIngresada * alturaIngresada)

    if(imc <= 18.5){
        mensaje = nombre + ", usted tiene bajo peso";
    }else if(imc < 25 ){
        mensaje = nombre + ", usted tiene peso normal";
    }else if(imc < 27){
        mensaje = nombre + ", usted tiene preobesidad";
    }else if(imc < 30){
        mensaje = nombre + ", usted tiene obesidad I";
    }else if(imc < 35){
        mensaje = nombre + ", usted tiene obesidad II";
    }else{
        mensaje = nombre + ", usted tiene obesidad III";
    }

    alert(mensaje);
}


/*
ej 1 bis
{
    let distanciaViajada;
    let tiempoDeViaje;
    let mensaje;
    let velocidad;

    distanciaViajada = parseInt(prompt("Ingrese la distancia recorrida."));
    tiempoDeViaje = parseInt(document.getElementById("txtIdEdad").value);
    velocidad = distanciaViajada / tiempoDeViaje;

    if(velocidad <= 60){
        mensaje = "muy lento";
    }else if(velocidad <= 80){
        mensaje = "lento";
    }else if(velocidad <= 100){
        mensaje = "buen ritmo";
    }else if(velocidad <= 120){
        mensaje = "ahí de la ley"
    }else{
        mensaje = "eso no se hace!"
    }
    alert(mensaje);
    

}
/*{
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