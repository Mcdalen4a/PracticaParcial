//Escribe una función llamada encontrarExtremos que tome tres números como argumentos 
//y devuelva el menor y el mayor utilizando Math.min() y Math.max().

function Mayor(num1, num2, num3, num4){
    return Math.max(num1, num2, num3, num4)
}

console.log("Numero mayor", Mayor (1, 2, 3, 4))


function Menor(num1, num2, num3, num4){
    return Math.min(num1, num2, num3, num4)
}

console.log("Numero menor", Menor(1, 2, 3, 4))