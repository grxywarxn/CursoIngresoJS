// Luis Claros
//* Apellido: Claros
//* Nombre: Luis
//* Comisión: B
//* Tutor: Matias
/* 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos. */

//ej 1 simulacro parcial
function mostrar()
{
    let nombre;
    let nacionalidad;
    let posicion;
    let tarjetasRojas;
    let goles;
    let goleadorTorneo;
    let cantidadMaximaGoles;
    let argentinoConMenosRojas;
    let contadorRojas;
    let contadorJugadores
    let contadorJugadoresIngleses;
    let porcentajeJugadoresIngleses
    let respuesta;
    let banderaGoleador;
    let banderaArgentinoConMenosRojas;

    respuesta = "si"
    banderaGoleador = true;
    banderaArgentinoConMenosRojas = true;
    contadorJugadores = 0;
    contadorJugadoresIngleses = 0;

    while(respuesta == "si"){
        nombre = prompt("Ingrese su nombre");
        nacionalidad = prompt("Ingrese su nacionalidad");
        while(nacionalidad != "argentino" && nacionalidad != "chino" && nacionalidad != "ingles")
            nacionalidad = prompt("Error. Ingrese una nacionalidad válida: argentino, chino o ingles");
        posicion = prompt("Ingrese su posición");
        while(posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero"){
            posicion = prompt("Error. Ingrese una posición válida: arquero, defensor, mediocampista o delantero");  
        }
        tarjetasRojas = parseInt(prompt("Ingrese la cantidad de tarjetas rojas recibidas"));
        while(isNaN(tarjetasRojas) || tarjetasRojas < 0){
            tarjetasRojas = parseInt(prompt("Error. Ingrese la cantidad de tarjetas rojas recibidas"));
        }  
        goles = parseInt(prompt("Ingrese la cantidad de goles realizados"));
        while(isNaN(goles) || goles < 0){
            goles = parseInt(prompt("Error. Ingrese la cantidad de goles realizados"));
        }

        if(banderaGoleador == true){
            goleadorTorneo = nombre;
            cantidadMaximaGoles = goles;
            banderaGoleador = false;
        }else{
            if(goles > cantidadMaximaGoles){
                cantidadMaximaGoles = goles;
                goleadorTorneo = nombre;
            }
        }

        if(banderaArgentinoConMenosRojas == true && nacionalidad == "argentino"){
            argentinoConMenosRojas = nombre;
            contadorRojas = tarjetasRojas;
            banderaArgentinoConMenosRojas = false;
        }else{
            if(tarjetasRojas < contadorRojas){
                argentinoConMenosRojas = nombre;
                contadorRojas = tarjetasRojas;
            }
        }

        if(nacionalidad == "ingles"){
            contadorJugadoresIngleses = contadorJugadoresIngleses + 1;
            contadorJugadores = contadorJugadores + 1;
        }else{
            contadorJugadores = contadorJugadores + 1;
        }
        respuesta = prompt("¿Desea seguir ingresando jugadores? si/no");
    }
    porcentajeJugadoresIngleses = (contadorJugadoresIngleses * 100) / contadorJugadores;

    console.log("El goleador del torneo es: " + goleadorTorneo);
    console.log("El jugador Argentino con menos tarjetas rojas es: " + argentinoConMenosRojas);
    console.log("El porcentaje de jugadores ingleses de la liga es de " + porcentajeJugadoresIngleses + "%");
}