/*-------------- Função media -------------- */
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

const media = calcularMedia(7, 8);
console.log("A média é: " + media);

/*-------------- Função Par ou Ímpar -------------- */

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const numero = 7;
if (ehPar(numero)) {
    console.log(numero + " True");
} else {
    console.log(numero + " False");
}

/*-------------- Função Calcular Desconto -------------- */

function calcularDesconto(preco, percentualDesconto) {
    const desconto = preco * (percentualDesconto / 100);
    return preco - desconto;
}

const precoOriginal = 100;
const percentualDesconto = 10;
const precoComDesconto = calcularDesconto(precoOriginal, percentualDesconto);
console.log("Preço com desconto: " + precoComDesconto);

