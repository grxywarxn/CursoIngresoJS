// Luis Claros 

/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/

function mostrar() {
	let repetir;
	let ingNombre;
	let ingCarrera;
	let ingEstadoCarrera;
	let ingGenero;
	let ingNota;

	let contAlumnosProgra;
	let contAlumnosPsico;
	let contAlumnosDiGraf;

	let contMujeresProgra;

	let contAlumnosNoBin;

	let acumNotasFinalizantes;
	let contAlumnosFinalizantes;
	let promedioNotasFinalizantes;

	let banderaMejorAlumnoNoBinPsico;
	let mejorAlumnoNoBinPsicoNombre;
	let notaMejorAlumnoNoBinPsico;
	let maxAlumnosCarrera;

	repetir = "si";
	contAlumnosProgra = 0;
	contAlumnosPsico = 0;
	contAlumnosDiGraf = 0;
	contMujeresProgra = 0;
	contAlumnosNoBin = 0;
	acumNotasFinalizantes = 0;
	banderaMejorAlumnoNoBinPsico = true;

	while (repetir == "si") {
		ingNombre = prompt("Ingrese su nombre");
		ingCarrera = prompt("Ingrese su carrera");
		ingCarrera = ingCarrera.toLowerCase;
		while (ingCarrera != "programacion" && ingCarrera != "psicologia" && ingCarrera != "diseño grafico") {
			ingCarrera = prompt("Error. Ingrese su carrera");
		}
		ingEstadoCarrera = prompt("Ingrese el estado de su carrera");
		ingEstadoCarrera = ingEstadoCarrera.toLowerCase;
		while (ingEstadoCarrera != "en curso" && ingEstadoCarrera != "abandono" && ingEstadoCarrera != "finalizado") {
			ingEstadoCarrera = prompt("Error. Ingrese el estado de su carrera");
		}
		ingGenero = prompt("Ingrese su género (femenino-masculino-nobinario)");
		ingGenero = ingGenero.toLowerCase;
		while (ingGenero != "femenino" && ingGenero != "masculino" && ingGenero != "nobinario") {
			ingGenero = prompt("Error. Ingrese su género");
		}
		ingNota = parseInt(prompt("Ingrese su nota (entre 1 y 10)"));
		while (isNaN(ingNota) || ingNota < 0 || ingNota > 10) {
			ingNota = parseInt(prompt("Errror. Ingrese su nota (entre 1 y 10)"));
		}
		//A. Cantidad total de alumnos de cada carrera. // Cantidad total de mujeres que cursan la carrera de programación
		switch (ingCarrera) {
			case "programacion":
				contAlumnosProgra = contAlumnosProgra + 1;
				if (ingGenero == "femenino") {
					contMujeresProgra = contMujeresProgra + 1;
				}
				break;
			case "psicologia":
				contAlumnosPsico = contAlumnosPsico + 1;
				//E. Nombre  del mejor alumno no binario en la carrera de psicología.
				if (ingGenero == "nobinario") {
					if (banderaMejorAlumnoNoBinPsico == true || notaMejorAlumnoNoBinPsico > ingNota) {
						mejorAlumnoNoBinPsicoNombre = ingNombre;
						notaMejorAlumnoNoBinPsico = ingNota;
						banderaMejorAlumnoNoBinPsico = false;
					}
				}
				break;
			case "diseño grafico":
				contAlumnosDiGraf = contAlumnosDiGraf + 1;
				break;
		}
		//C. Cantidad de alumnos no binarios.
		if (ingGenero == "nobinario") {
			contAlumnosNoBin = contAlumnosNoBin + 1;
		}
		//D. Promedio de notas de los alumnos finalizantes.
		if (ingEstadoCarrera == "finalizado") {
			acumNotasFinalizantes = acumNotasFinalizantes = ingNota;
			contAlumnosFinalizantes = contAlumnosFinalizantes + 1;
		}
		//F. ¿Cuál es la carrera que tiene más alumnos?*/
		if (contAlumnosDiGraf > contAlumnosPsico) {
			maxAlumnosCarrera = "Diseño Gráfico";
		} else if (contAlumnosPsico > contAlumnosProgra) {
			maxAlumnosCarrera = "Psicología";
		} else {
			maxAlumnosCarrera = "Programación"
		}
		repetir = prompt("¿Desea seguir ingresando alumnos? si/no");
	}
	promedioNotasFinalizantes = acumNotasFinalizantes / contAlumnosFinalizantes;

	document.write("La cantidad de alumnos de Programación es: " + contAlumnosProgra + ", la cantidad de alumnos de Psicología es: " + contAlumnosPsico + " y la cantidad de alumnos de Diseño Gráfico es: " + contAlumnosDiGraf + "<br>");
	document.write("La cantidad de mujeres que cursan la carrera de Programación es :" + contMujeresProgra + "<br>");
	document.write("La cantidad de alumnos no binarios es: " + contAlumnosNoBin + "<br>");
	document.write("El promedio de notas de los alumnos finalizantes es: " + promedioNotasFinalizantes + "<br>");
	document.write("El nombre  del mejor alumno no binario en la carrera de psicología es: " + mejorAlumnoNoBinPsicoNombre + "<br>");
	document.write("La carrera que tiene más alumnos es :" + maxAlumnosCarrera);
}