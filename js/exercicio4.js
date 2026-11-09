let contador = 0;
for (contador = 0; contador <= 10; contador++) {
    console.log("Número: " + contador);
}

for (let i = 2; i <= contador; i += 2) {
    console.log("Par: " + i);
}

let soma = 0;
for (let i = 0; i <= contador; i++) {
    soma += i;
}
console.log("Soma: " + soma);