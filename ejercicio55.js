//Escribe una función llamada hayAlgunoMayor que reciba un array de números y utilice some() para verificar si hay algún número mayor que 100.


function hayAlgunoMayor(array){
    return array.some(elemento => elemento > 100)
}


console.log(hayAlgunoMayor([100, 300, 40]))