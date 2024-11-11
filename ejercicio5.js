//Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.

function ObtenerNumerosPares(a, b){
    let numerosPares = []



for(let i = a; i < b; i++){
    if (i % 2 == 0){
        numerosPares.push(i);
    }
}

    return numerosPares;
}

console.log(ObtenerNumerosPares)


console.log(ObtenerNumerosPares(2,10))