//Escribe una función llamada comienzaCon que reciba una cadena de texto y verifique si comienza con la palabra "Hola" utilizando startsWith().

function comienzaCon(cadena){
    return cadena.startsWith("hola")
}

console.log(comienzaCon("hola, ¿cómo estás?"))
console.log(comienzaCon("Adios ¿como estas?"))
