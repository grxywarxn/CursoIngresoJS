// Luis Claros 
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
    //A.	Ingresar tres precios de productos y mostrar la suma de los mismos.

    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	sumaDePrecios = precioUno + precioDos + precioTres;

    console.log("La suma total de precios es: " + sumaDePrecios)

}
function Promedio() 
{
	// B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.

    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios;
    let promedio;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	sumaDePrecios = precioUno + precioDos + precioTres;
    promedio = sumaDePrecios/3

    console.log("El promedio es: " + promedio)

}
function PrecioFinal() 
{
    // C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios;
    let precioFinal;
    let IVA;
  
    IVA = 21;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	sumaDePrecios = precioUno + precioDos + precioTres;
    
    precioFinal = sumaDePrecios + sumaDePrecios * IVA/100;
    console.log("El precio final de los productos con el IVA del 21% es: " + precioFinal)
}