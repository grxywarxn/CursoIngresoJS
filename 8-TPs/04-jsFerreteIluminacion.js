/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $precioUnitario pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparas;
    let marcaLamparas;
    let precioConDescuento;
    let ingresosBrutos;
    let precioUnitario;
    let impuestoPagado;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = document.getElementById("Marca").value;
    ingresosBrutos = 1.1
    precioUnitario = 35

    if(cantidadLamparas >= 6){
        precioConDescuento = (cantidadLamparas * precioUnitario)/2;
    }else if(cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz"){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.6;
    }else if(cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz"){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.7;   
    }else if(cantidadLamparas == 4 && (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.75;
    }else if(cantidadLamparas == 4){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.8;
    }else if(cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz"){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.85;
    }else if(cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas"){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.9;
    }else if(cantidadLamparas == 3){
        precioConDescuento = cantidadLamparas * precioUnitario * 0.95;
    }else{}

    if (precioConDescuento > 120){
        impuestoPagado = precioConDescuento * ingresosBrutos - precioConDescuento;
        alert("IIBB Usted pagó: " + impuestoPagado)
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento
}
