//Luis Claros
/*A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo*/
function mostrar() {
    let continuar;
    let contPasajerosTotal;
    let ingNombre;
    let ingLugar;
    let ingTemporada;
    let ingCantidadDias;
    let ingImporteViaje;
    let ingAlturaPasajero;
    let ingPesoPasajero;
    let ingSexoPasajero;
    let ingEquipajeMano;
    let ingMetodoPago;
    //punto A
    let contTempAlta;
    let contTempBaja;
    let acumPesoVillaGesel;
    let acumDiasGesel;
    let acumDiasMadryn;
    let acumDiasCba;
    let lugarMasDiasAcum;
    let acumImportesTotal;
    //Punto B
    let maxPesoPasajeros;
    let minPesoPasajeros;
    let maxPesoNombre;
    let minPesoNombre;
    let maxImporte;
    let maxImporteLugar;
    let maxAlturaMujer
    let maxAlturaMujerNombre;
    let banderaPeso;
    let banderaPrimerImporte;
    let banderaMujerAlta;
    //Punto C
    let contPagosMercado;
    let contPagosTarjeta;
    let contPagosDebito;
    let mayorMetodoPago;
    let mayorViajesTemporada;
    let contPasajerosMadryn;
    let contPasajerosGesel;
    let contPasajerosCba;
    let mayorPasajerosLugar;
    //Punto D
    let contEquipajeSi;
    let contEquipajeNo;
    let porcentajeConEquipaje;
    let contHombres;
    let contMujeres;
    let contNoBinario;
    let porcentajeHombres;
    let porcentajeMujeres;
    let porcentajeNoBinario;

    contTempAlta = 0;
    contTempBaja = 0;
    acumPesoVillaGesel = 0;
    acumDiasGesel = 0;
    acumDiasMadryn = 0;
    acumDiasCba = 0;
    acumImportesTotal = 0;
    contPagosMercado = 0;
    contPagosTarjeta = 0;
    contPagosDebito = 0;
    contPasajerosMadryn = 0;
    contPasajerosGesel = 0;
    contPasajerosCba = 0;
    contEquipajeSi = 0;
    contEquipajeNo = 0;
    contHombres = 0;
    contMujeres = 0;
    contNoBinario = 0;
    banderaMujerAlta = true;
    banderaPeso = true;
    banderaPrimerImporte = true;
    continuar = true;

    while (continuar == true) {
        ingNombre = prompt("Ingrese su nombre");
        ingLugar = prompt("Ingrese el lugar");
        ingLugar = ingLugar.toLowerCase;
        while (ingLugar != "puerto madryn" && ingLugar != "villa gesel" && ingLugar != "cordoba") {
            ingLugar = prompt("Error. Ingrese el lugar");
        }
        ingTemporada = prompt("Ingrese la temporada del viaje");
        ingTemporada = ingTemporada.toLowerCase;
        while (ingTemporada != "alta" && ingTemporada != "baja") {
            ingTemporada = prompt("Error. Ingrese la temporada del viaje");
        }
        ingCantidadDias = parseInt(prompt("Ingrese la cantidad de dias"));
        while (isNaN(ingCantidadDias) || ingCantidadDias < 0) {
            ingCantidadDias = parseInt(prompt("Error. Ingrese la cantidad de dias"));
        }
        ingImporteViaje = parseFloat(prompt("Ingrese el importe del viaje"));
        while (isNaN(ingImporteViaje) || ingImporteViaje < 0) {
            ingImporteViaje = parseFloat(prompt("Error. Ingrese el importe del viaje"));
        }
        ingAlturaPasajero = parseFloat(prompt("Ingrese su altura"));
        while (isNaN(ingAlturaPasajero) || ingAlturaPasajero < 0) {
            ingAlturaPasajero = parseFloat(prompt("Error. Ingrese su altura"));
        }
        ingPesoPasajero = parseFloat(prompt("Ingrese su peso"));
        while (isNaN(ingPesoPasajero) || ingPesoPasajero < 0) {
            ingPesoPasajero = parseFloat(prompt("Error. Ingrese su peso"));
        }
        ingSexoPasajero = prompt("Ingrese su sexo: F, M o NB")
        ingSexoPasajero = ingSexoPasajero.toLowerCase;
        while (ingSexoPasajero != "f" && ingSexoPasajero != "m" && ingSexoPasajero != "nb") {
            ingSexoPasajero = prompt("Error. Ingrese su sexo")
        }
        ingEquipajeMano = prompt("Ingrese si lleva equipaje de mano: si/no");
        ingEquipajeMano = ingEquipajeMano.toLowerCase;
        while (ingEquipajeMano != "si" ||ingEquipajeMano != "no") {
            ingEquipajeMano = prompt("Error. Ingrese si lleva equipaje de mano: si/no");
        }
        ingMetodoPago = prompt("Ingrese su modo de pago: mercado, tarjeta o debito")
        ingMetodoPago = ingMetodoPago.toLowerCase;
        while (ingMetodoPago != "mercado" && ingMetodoPago != "tarjeta" && ingMetodoPago != "debito") {
            ingMetodoPago = prompt("Error. Ingrese su modo de pago");
        }
        // PUNTO A
        switch (ingLugar) {
            case "cordoba":
                contPasajerosCba = contPasajerosCba + 1;
                acumDiasCba = acumDiasCba + ingCantidadDias;
                break;
            case "puerto madryn":
                contPasajerosMadryn = contPasajerosMadryn + 1;
                acumDiasMadryn = acumDiasMadryn + ingCantidadDias;
                break;
            case "villa gesel":
                contPasajerosGesel = contPasajerosGesel + 1;
                acumPesoVillaGesel = acumPesoVillaGesel + ingPesoPasajero;
                acumDiasGesel = acumDiasGesel + ingCantidadDias;
                break;
        }

        if (ingTemporada = "alta") {
            contTempAlta = contTempAlta + 1;
        } else {
            contTempBaja = contTempBaja + 1;
        }

        if (acumDiasCba > acumDiasGesel) {
            lugarMasDiasAcum = "Cordoba";
        } else if (acumDiasGesel > acumDiasMadryn) {
            lugarMasDiasAcum = "Villa Gesell";
        } else {
            lugarMasDiasAcum = "Puerto Madryn";
        }

        acumImportesTotal = acumImportesTotal + ingImporteViaje;
        //PUNTO B
        if (banderaPeso == true) {
            maxPesoPasajeros = ingPesoPasajero;
            minPesoPasajeros = ingPesoPasajero;
            maxPesoNombre = ingNombre;
            minPesoNombre = ingNombre;
            banderaPeso = false;
        } else if (ingPesoPasajero > maxPesoPasajeros) {
            maxPesoPasajeros = ingPesoPasajero;
            maxPesoNombre = ingNombre;
        } else if (ingPesoPasajero < minPesoPasajeros) {
            minPesoPasajeros = ingPesoPasajero;
            minPesoNombre = ingNombre;
        }
        if (banderaMujerAlta == true) {
            if (ingSexoPasajero == "m") {
                maxAlturaMujer = ingAlturaPasajero;
                maxAlturaMujerNombre = ingNombre;
                banderaMujerAlta = false;
            }
        } else if (ingSexoPasajero == "m" && ingAlturaPasajero > maxAlturaMujer) {
            maxAlturaMujer = ingAlturaPasajero;
            maxAlturaMujerNombre = ingNombre;
        }
        if (banderaPrimerImporte == true) {
            maxImporte = ingImporteViaje;
            maxImporteLugar = ingLugar;
            banderaPrimerImporte = false;
        } else if (ingImporteViaje > maxImporte) {
            maxImporte = ingImporteViaje;
            maxImporteLugar = ingLugar;
        }
        //PUNTO C
        switch (ingMetodoPago) {
            case "debito":
                contPagosDebito = contPagosDebito + 1;
                break;
            case "mercado":
                contPagosMercado = contPagosMercado + 1;
                break;
            case "tarjeta":
                contPagosTarjeta = contPagosTarjeta + 1;
                break;
        }
        if (contPagosDebito > contPagosMercado) {
            mayorMetodoPago = "Débito";
        } else if (contPagosMercado > contPagosTarjeta) {
            mayorMetodoPago = "Mercado"
        } else {
            mayorMetodoPago = "Tarjeta";
        }
        if (contTempAlta > contTempBaja) {
            mayorViajesTemporada = "Alta";
        } else {
            mayorViajesTemporada = "Baja";
        }
        if (contPasajerosCba > contPasajerosGesel) {
            mayorPasajerosLugar = "Córdoba";
        } else if (contPasajerosGesel > contPasajerosMadryn) {
            mayorPasajerosLugar = "Villa Gesell"
        } else {
            mayorPasajerosLugar = "Puerto Madryn";
        }
        //PUNTO D
        contPasajerosTotal = contPasajerosTotal + 1
        if (ingEquipajeMano == "si") {
            contEquipajeSi = contEquipajeSi + 1;
        } else {
            contEquipajeNo = contEquipajeNo + 1;
        }
        porcentajeConEquipaje = (contEquipajeSi * 100 / contPasajerosTotal).toFixed(1);
        if (ingSexoPasajero == "f") {
            contMujeres = contMujeres + 1;
        } else if (ingSexoPasajero == "m") {
            contHombres = contHombres + 1;
        } else {
            contNoBinario = contNoBinario + 1;
        }
        porcentajeHombres = (contHombres * 100 / contPasajerosTotal).toFixed(1);
        porcentajeMujeres = (contMujeres * 100 / contPasajerosTotal).toFixed(1);
        porcentajeNoBinario = (contNoBinario * 100 / contPasajerosTotal).toFixed(1);
        
        continuar = confirm("¿Desea seguir ingresando datos?")
    }
    //a- cantidad de personas que viajan en cada temporada
    console.log("La cantidad de personas que viajan en temporada alta es: "+contTempAlta+" y en temporada baja es: "+contTempBaja);
    //b- el peso acumulado de todos los que viajan a villa gessel
    console.log("El peso acumulado de todos los que viajan a villa gesell es de: "+acumPesoVillaGesel+"kg");
    //c- el lugar con la mayor cantidad de días acumulados
    console.log("El lugar con la mayor cantidad de dias acumulados es: "+lugarMasDiasAcum);
    //d- la suma de todos los importes
    console.log("La suma de todos los importes en total es de: "+acumImportesTotal);

    //2
    //e-el nombre del más pesado de los pasajeros y el del más liviano
    console.log("El nombre del pasajero más pesado es: "+maxPesoNombre+" y el más liviano es: "+minPesoNombre);
    //f-el lugar donde se pagó el mayor importe
    console.log("El lugar donde se pagó el mayor importe es: "+maxImporteLugar);
    //g-el nombre de la mujer más alta
    console.log("El nombre de la mujer más alta es: "+maxAlturaMujerNombre);

    //3
    //h- Cuál fue la forma de pago más utilizada
    console.log("La forma de pago más utilizada fue: "+mayorMetodoPago);
    //i- en qué temporada se viajó más
    console.log("La temporada en que se viaja más es "+mayorViajesTemporada);
    //j- qué lugar tuvo más pasajeros
    console.log("El lugar que tuvo más pasajeros es: "+mayorPasajerosLugar);

    //4
    //k- qué porcentaje usa equipaje de mano
    console.log("El porcentaje de las personas que usaron equipaje de mano es: "+porcentajeConEquipaje+"%");
    //l- que porcentaje hay de cada sexo
    console.log("El porcentaje de pasajeros es: "+porcentajeHombres+"% hombres, "+porcentajeMujeres+"% mujeres y "+porcentajeNoBinario+"% no binario");
}
