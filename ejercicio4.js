function tablaMultiplicar(a, x) {
    for (let i = 0; i <= x; i++) {
        if (i === 5) {
            continue; 
        }
        console.log(`${a} * ${i} = ${a * i}`);
    }
}

// Ejemplo de uso
tablaMultiplicar(3, 10); 
