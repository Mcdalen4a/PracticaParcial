//Escribe una función llamada darPrecision que reciba un número 
//flotante y lo devuelva con una precisión de 4 dígitos utilizando toPrecision().

function darPrecision(valor){
    return valor.toPrecision(5)
}

console.log(darPrecision(12.3485895768))

