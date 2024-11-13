//Escribe una función llamada filtrarCadenasLargas que reciba un array de cadenas de texto y 
//utilice filter() para devolver solo las cadenas con más de 5 caracteres.


function filtrarCadenasLargas(array){
    return array.filter(elemento => elemento.length > 5)
}


console.log(filtrarCadenasLargas(["hola", "holaaa" ,"banana", "manzana", "kiwi"]))

