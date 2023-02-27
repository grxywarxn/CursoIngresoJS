//Luis Claros
/* * Apellido: Claros
 * Nombre:Luis
 * Comisión: B
 * Tutor: Matias
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.

 */
function mostrar()
{
	let nombreMascota;
	let edadMascota;
	let tipoMascota;
	let TIPO_GATO;
	let TIPO_PERRO;
	let TIPO_HAMSTER;
	let pesoMascota;
	let diagnostico;
	let DIAG_P_DIGESTIVOS;
	let DIAG_OTITIS;
	let DIAG_ALERGIAS_PIEL;
	let DIAG_PARASITOS;
	let DIAG_PICAZON_ABEJA;
	let vacuna;
	let nombreMascotaViejaVacunada;
	let edadMascotaVieja;
	let banderaMascotaViejaVacunada;
	let contadorSinVacunaYConParasitos;
	let contadorGatos;
	let contadorPerros;
	let contadorHamsters;
	let contadorGatosPDigestivos;
	let contadorPerrosPDigestivos;
	let contadorHamstersPDigestivos;
	let mayorTipo;
	let mayorTipoProblemasDigestivos;
	let nombreMascotaJoven;
	let banderaMascotaJoven;
	let edadMascotaJoven;
	let diagnosticoMascotaJoven;
	let contadorPerrosOtitis;
	let continuar;

	contadorSinVacunaYConParasitos = 0;
	contadorGatos = 0;
	contadorHamsters = 0;
	contadorPerros = 0;
	contadorGatosPDigestivos = 0;
	contadorPerrosPDigestivos = 0;
	contadorHamstersPDigestivos = 0;
	contadorPerrosOtitis = 0;
	banderaMascotaViejaVacunada = true;
	banderaMascotaJoven = true;
	continuar = true;
	TIPO_GATO = "gato";
	TIPO_HAMSTER = "hamster";
	TIPO_PERRO = "perro";
	DIAG_ALERGIAS_PIEL = "alergias en la piel";
	DIAG_OTITIS = "otitis";
	DIAG_PARASITOS = "parasitos";
	DIAG_PICAZON_ABEJA = "picazon de abeja";
	DIAG_P_DIGESTIVOS = "problemas digestivos";

	while(continuar == true){
		nombreMascota = prompt("Ingrese nombre de la mascota", "FIRU");
		edadMascota = parseInt(prompt("Ingrese edad de la mascota"), "10");
		while(isNaN(edadMascota) || edadMascota < 0 || edadMascota > 20){
			edadMascota = parseInt(prompt("Error. Ingrese edad de la mascota"), "10")
		}
		tipoMascota = (prompt("Ingrese el tipo de mascota", ""));
		while(tipoMascota != TIPO_GATO && tipoMascota != TIPO_HAMSTER && tipoMascota != TIPO_PERRO){
			tipoMascota = (prompt("Ingrese el tipo de mascota", ""));
		}
		pesoMascota = parseFloat(prompt("Ingrese peso de la mascota"));
		while(isNaN(pesoMascota) || pesoMascota < 0){
			pesoMascota = parseFloat(prompt("Error. Ingrese peso de la mascota"));
		}
		vacuna = prompt("Ingrese si tiene la vacuna antirrábica");
		while(vacuna != "si" && vacuna != "no"){
			vacuna = prompt("Error. Ingrese si tiene la vacuna antirrábica");
		}
		
		if(banderaMascotaViejaVacunada == true){
			if(vacuna == "si"){
			edadMascotaVieja = edadMascota;
			nombreMascotaViejaVacunada = nombreMascota;
			banderaMascotaViejaVacunada = false;
			}
		}else{
			if(edadMascota > edadMascotaVieja && vacuna == "si"){
				edadMascotaVieja = edadMascota;
				nombreMascotaViejaVacunada = nombreMascota;
			}
		}

		if(banderaMascotaJoven == true){
			edadMascotaJoven = edadMascota;
			nombreMascotaJoven = nombreMascota;
			diagnosticoMascotaJoven = diagnostico;
			banderaMascotaJoven = false;
		}else{
			if(edadMascota < edadMascotaJoven){
				edadMascotaJoven = edadMascota;
				nombreMascotaJoven = nombreMascota;
				diagnosticoMascotaJoven = diagnostico;
			}
		}

		switch(tipoMascota){
			case TIPO_GATO:
				contadorGatos = contadorGatos + 1;
				if(diagnostico == DIAG_P_DIGESTIVOS){
					contadorGatosPDigestivos = contadorGatosPDigestivos + 1;
				}else{
					if(diagnostico = DIAG_PARASITOS){
						if(vacuna == "no"){
							contadorSinVacunaYConParasitos = contadorSinVacunaYConParasitos + 1;
						}
					}
				}
				break;
			case TIPO_PERRO:
				contadorPerros = contadorPerros + 1;
				if(diagnostico == DIAG_P_DIGESTIVOS){
					contadorPerrosPDigestivos = contadorPerrosPDigestivos + 1;
				}else{
					if(diagnostico == DIAG_OTITIS){
						contadorPerrosOtitis = contadorPerrosOtitis + 1;
					}else{
						if(diagnostico = DIAG_PARASITOS){
							if(vacuna == "no"){
								contadorSinVacunaYConParasitos = contadorSinVacunaYConParasitos + 1;
							}
						}
					}

				}
		}
}	}