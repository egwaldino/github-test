// Exercício 6
// Crie um programa que calcule a média de duas notas de um aluno e informe se ele foi aprovado ou reprovado imprimindo a tabuada da média.

// Variáveis
let nome = "Egwaldino";
let notaDeTeste = 16;
let notaDeProjeto = 17;

// Função para calcular a média
function calcularMedia(notaDeTeste, notaDeProjeto) {
  return (media = (notaDeTeste + notaDeProjeto) / 2);
}

// Verifica se o aluno foi aprovado ou reprovado
if (calcularMedia(notaDeTeste, notaDeProjeto) >= 9.5) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

console.log("A média é: " + media);
console.log("A média arredondada é: " + Math.floor(media));

// Imprime a tabuada da média
numero = Math.floor(media * 1);

for (let i = 1; i <= 12; i++) {
  console.log("Tabuada: " + numero + " x " + i + " = " + numero * i);
}
