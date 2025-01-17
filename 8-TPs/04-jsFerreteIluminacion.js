//Luis Claros
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $precioUnitario pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

function CalcularPrecio()
{
    //DECLARO VARIABLES
    let cantidadLamparas;
    let marcaLamparas;
    let descuento;
    let precioUnitario;
    let precioFinal;
    let impuesto;
    let precioConDescuento;
    let precioConImpuesto;
    let impuestoPagado;
    let mensaje;
    //OBTENER DATOS DEL USUARIO
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;
    //DAR VALOR A VARIABLES FIJAS
    impuesto = 10
    precioUnitario = 35
    //PROCESO
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if(marcaLamparas == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(marcaLamparas == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
            break;
        case 4:
            if(marcaLamparas == "ArgentinaLuz" || "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case 5:
            if(marcaLamparas == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;
    }
    //CALCULOS FINALES
    precioConDescuento = precioUnitario - precioUnitario * descuento / 100;
    precioFinal = precioConDescuento * cantidadLamparas;

    if(precioFinal > 120)
    {   impuestoPagado = precioFinal * impuesto / 100;
        precioConImpuesto = precioFinal + impuestoPagado;
        precioFinal = precioConImpuesto
        mensaje = "Usted pagó IIBB $" + impuestoPagado;
        alert(mensaje);
    }
    //INFORMO
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}