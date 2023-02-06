/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
/*	//A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
    (32 °F − 32) × 5/9 = 0 °C
*/
    let fahrenheit;
    let centígrados

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    centígrados = (fahrenheit - 32) * 5/9

    alert(fahrenheit + "° Fahrenheit son: " + centígrados + "° centigrados")
}

function CentigradosFahrenheit () 
{
	/* //B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
    (0 °C × 9/5) + 32 = 32 °F
    */

    let centigrados;
    let fahrenheit;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahrenheit = (centigrados * (9/5)) + 32

    alert(centigrados + "° centigrados son: " + fahrenheit + "° fahrenheit.")
}
