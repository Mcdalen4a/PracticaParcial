//Escribe una función llamada reemplazarPalabra que reciba una cadena de texto 
//y reemplace todas las ocurrencias de "sol" por "luna" utilizando replace().

function reemplazarPalabra(cadena){
    return cadena.replace(/sol/g, "luna");
}



console.log(reemplazarPalabra("sol, sol y luna"))