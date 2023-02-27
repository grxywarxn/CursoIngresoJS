//Luis Claros
/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar() {
  let continuar
  let ingTipoBolsa;
  let ingCantidad;
  let ingPrecioUnitario
  let descuento;
  let precioTotal;
  let acumPreciosTotal;
  let acumPreciosDescuento;
  let contBolsaArena;
  let contBolsaCal;
  let contBolsaCemento;
  let contBolsasTotal;
  let mayorCantidadBolsasTipo;
  let banderaBolsaMasCara;
  let maxPrecioBolsa;
  let maxPrecioBolsaTipo;

  descuento = 0;
  acumPreciosTotal = 0;
  acumPreciosDescuento = 0;
  contBolsaArena = 0;
  contBolsaCal = 0;
  contBolsaCemento = 0;
  contBolsasTotal = 0;
  banderaBolsaMasCara = true;
  continuar = true;

  while (continuar == true) {
    ingTipoBolsa = prompt("Ingrese el tipo de bolsa: arena, cal o cemento");
    while (ingTipoBolsa != "arena" && ingTipoBolsa != "cal" && ingTipoBolsa != "cemento") {
      ingTipoBolsa = prompt("Ingrese el tipo de bolsa válido: arena, cal o cemento");
    }
    ingCantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while (isNaN(ingCantidad) || ingCantidad < 0) {
      ingCantidad = parseInt(prompt("Error: Ingrese la cantidad de bolsas"));
    }
    ingPrecioUnitario = parseInt(prompt("Ingrese el precio unitario de la bolsa: "));
    while (isNaN(ingPrecioUnitario) || ingPrecioUnitario < 0) {
      ingPrecioUnitario = parseInt(prompt("Error. Ingrese el precio unitario de la bolsa: "));
    }
    contBolsasTotal = contBolsasTotal + ingCantidad;
    precioTotal = ingCantidad * ingPrecioUnitario;
    if (contBolsasTotal > 9 && contBolsasTotal < 30) {
      descuento = 15;
    } else if (contBolsasTotal > 29) {
      descuento = 25;
    }else{
      descuento = 0;
    }
    acumPreciosTotal = acumPreciosTotal + precioTotal;
    acumPreciosDescuento = acumPreciosTotal - acumPreciosTotal * descuento / 100;
    switch (ingTipoBolsa) {
      case "arena":
        contBolsaArena = contBolsaArena + ingCantidad;
        break;
      case "cal":
        contBolsaCal = contBolsaCal + ingCantidad;
        break;
      case "cemento":
        contBolsaCemento = contBolsaCemento + ingCantidad;
        break;
    }

    if (contBolsaArena > contBolsaCal && contBolsaArena > contBolsaCemento) {
      mayorCantidadBolsasTipo = "Arena";
    } else if (contBolsaCal > contBolsaArena && contBolsaCal > contBolsaCemento) {
      mayorCantidadBolsasTipo = "Cal";
    } else {
      mayorCantidadBolsasTipo = "Cemento";
    }

    if (banderaBolsaMasCara == true || ingPrecioUnitario > maxPrecioBolsa) {
      maxPrecioBolsa = ingPrecioUnitario;
      maxPrecioBolsaTipo = ingTipoBolsa;
      banderaBolsaMasCara = false;
    }
    continuar = confirm("¿Desea seguir comprando?");
  }

  //a) El importe total a pagar , bruto sin descuento y...
  console.log("El importe bruto a pagar es: " + acumPreciosTotal);
  //b) el importe total a pagar con descuento(solo si corresponde)
  if(descuento > 0){
    console.log("El importe con descuento a pagar es: " + acumPreciosDescuento);
  }else{
    console.log("No se aplica ningún descuento para su compra");
  }
  //d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  console.log("El tipo de bolsa con más cantidad de bolsas es: " + mayorCantidadBolsasTipo);
  //f) El tipo mas caro
  console.log("El tipo más caro de bolsa es: " + maxPrecioBolsaTipo);
  

}
