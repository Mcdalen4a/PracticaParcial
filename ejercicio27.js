//slice()
//Escribe una función llamada obtenerSubcadena que reciba una cadena de texto y devuelva una subcadena utilizando 
//slice() a partir del índice 2 hasta el índice 5.


function obtenerSubcadena(cadena){
    return cadena.slice(0, 6)
}


console.log(obtenerSubcadena("holaaaaaaaa"))