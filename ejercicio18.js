//Escribe una función llamada obtenerFechaActual que devuelva la fecha y hora actual utilizando Date() y la muestre por consola.

function obtenerFechaActual(){
 const fechaHora = new Date()
 console.log(fechaHora.toLocaleDateString())
}

obtenerFechaActual()