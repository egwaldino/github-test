const nota = (parseFloat(prompt("Digite a nota do aluno (0 a 20):")));

if (nota >= 0 && nota <= 9) {
    console.log("Não aprovado.");
} else if (nota >= 10 && nota <= 13) {
    console.log("Suficiente.");
    // alert("Suficiente.");
} else if (nota >= 14 && nota <= 17) { 
    console.log("Bom");
    // alert("Bom");
} else if (nota >= 18 && nota <= 20) {
    console.log("Muito bom.");
    // alert("Muito bom.");
} else {
    console.log("Nota inválida.");
    //alert("Nota inválida.");
}