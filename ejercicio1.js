//Escribe una función llamada obtenerDiaSemana que tome una cadena de texto que representa una fecha en el formato 
//"dd/mm/yyyy" como argumento. La función debe analizar la fecha y devolver el nombre del día de la semana correspondiente 
//(por ejemplo, "Lunes", "Martes", etc.).

//Para completar el ejercicio, sigue estos pasos:

//Reformatea la cadena de texto para que sea compatible con el constructor de Date.
//Crea un objeto Date usando el constructor y pasando la cadena de texto como argumento.
//Obtén el día de la semana utilizando el método getDay() del objeto Date. Este método devuelve un número (0 a 6), donde 0 es domingo, 1 es lunes, etc.
//Crea un array de días de la semana, donde cada índice corresponde al día que devuelve getDay().
//Devuelve el día de la semana usando el array para convertir el número a un nombre.

function calcularDiferenciaDias(fechaStr1, fechaStr2) {
    let [dia1, mes1, anio1] = fechaStr1.split('/');
    let [dia2, mes2, anio2] = fechaStr2.split('/');
    
    let fecha1 = new Date(`${anio1}-${mes1}-${dia1}`);
    let fecha2 = new Date(`${anio2}-${mes2}-${dia2}`);
    

    let diferenciaMilisegundos = fecha2 - fecha1;

    let diferenciaDias = Math.abs(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    return diferenciaDias;
 }
 
 console.log(calcularDiferenciaDias("05/11/2024", "10/11/2024")); 
 
