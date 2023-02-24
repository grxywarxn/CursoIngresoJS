//Luis Claros
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
    let tipoDeBolsa;
    let cantidadBolsas;
    let precioBolsa;
    let descuento;
    let importeConDescuento;
    let importeBruto;
    let acumuladorBolsasArena;
    let acumuladorBolsasCal;
    let acumuladorBolsasCemento;
    let sumaDeBolsas;
    let tipoConMasCantidad;
    let precioBolsaArena;
    let precioBolsaCal;
    let precioBolsaCemento;
    let tipoDeBolsaMasCaro;
    let respuesta;
    
    respuesta = "si";
    acumuladorBolsasArena = 0;
    acumuladorBolsasCal = 0;
    acumuladorBolsasCemento = 0;
    sumaDeBolsas = 0;
    descuento = 0;

    while(respuesta == "si"){
        tipoDeBolsa = prompt("Ingrese el tipo de bolsa: arena, cal o cemento");
        while(tipoDeBolsa != "arena" && tipoDeBolsa != "cal" && tipoDeBolsa	!= "cemento"){
            tipoDeBolsa = prompt("Ingrese el tipo de bolsa válido: arena, cal o cemento");
        }
        cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
        while(isNaN(cantidadBolsas)){
            cantidadBolsas = parseInt(prompt("Error: Ingrese la cantidad de bolsas"));
        }
        precioBolsa = parseInt(prompt("Ingrese el precio unitario de la bolsa"));
        while(isNaN(precioBolsa) && precioBolsa < 0){
            precioBolsa = parseInt(prompt("Error: Ingrese un precio unitario de la bolsa superior a 0"));
        }

        switch(tipoDeBolsa){
            case "arena":
                acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
                precioBolsaArena = precioBolsa;
                break;
            case "cal":
                acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
                precioBolsaCal = precioBolsa;
                break;
            case "cemento":
                acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
                precioBolsaCemento = precioBolsa;
                break;
        }
        
        respuesta = prompt("¿Desea seguir añadiendo bolsas a su compra?");
    }
    sumaDeBolsas = sumaDeBolsas + cantidadBolsas;
    importeBruto = importeBruto + precioBolsa * cantidadBolsas;
    
    if(sumaDeBolsas > 9){
        descuento = 15;
        importeConDescuento = importeBruto - importeBruto * descuento / 100;
    }else if(sumaDeBolsas > 29){
        descuento = 25;
        importeConDescuento = importeBruto - importeBruto * descuento / 100;
    }
    
    if(acumuladorBolsasArena > acumuladorBolsasCal){
        tipoConMasCantidad = "arena";
    }else if(acumuladorBolsasCal > acumuladorBolsasCemento){
        tipoConMasCantidad = "cal";
    }else{
        tipoConMasCantidad = "cemento";
    }
    
    if(precioBolsaArena > precioBolsaCal){
        tipoDeBolsaMasCaro = "arena";
    }else if(precioBolsaCal > precioBolsaCemento){
        tipoDeBolsaMasCaro = "cal";
    }else{
        tipoDeBolsaMasCaro = "cemento";
    }
    console.log("El importe bruto a pagar es: " + importeBruto);
    if(sumaDeBolsas > 10){
    console-log("El importe con descuento a pagar es: " + importeConDescuento);
    }
    console.log("El tipo con más cantidad de bolsas es: " + tipoConMasCantidad);
    console.log("El tipo más caro de bolsa es: " + tipoDeBolsaMasCaro);
}