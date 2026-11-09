console.log("Hello, World!");

const nome = "Egwaldino";
const idade = 25;
const cidade = "Gaia";
const estado = "Porto";
let inscrito = true;

let saldo = 100;
saldo += 50;
saldo -= 30;

console.log("Nome: ", + nome);
console.log("Idade: ", + idade);
console.log("Cidade: ", + cidade);
console.log("Inscrito: ", + inscrito);
console.log("Saldo: ", saldo);

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}, ${estado}. Estou inscrito? ${inscrito}. Meu saldo atual é de €${saldo}.`);