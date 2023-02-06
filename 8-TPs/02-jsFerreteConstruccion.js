/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

        alert(alambre);


}
function Circulo () 
{
	/* B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
    perimetro circulo : 2*pi*r 
    */

    let radioCirculo;
    let perimetroCirculo;
    let alambre;

    π = 3.14;
    radioCirculo = parseFloat(document.getElementById("txtIdRadio").value);
    perimetroCirculo = 2 * Math.PI * radioCirculo;
    alambre = perimetroCirculo * 3;

    alert(alambre);

}
function Materiales () 
{
	//C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    /* Area de rectangulo: largo * ancho
    para calcular las bolsas de cemento multiplico metro cuadrado por cemento y luego cal*/

    let largo;
    let ancho;
    let perimetro;
    let bolsasCemento;
    let bolsasCal;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    perimetro = largo * ancho
    bolsasCemento = perimetro * 2
    bolsasCal = perimetro * 3
    mensaje = "Para este perimetro se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal";

    alert(mensaje);

}
