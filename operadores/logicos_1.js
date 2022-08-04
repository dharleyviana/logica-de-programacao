let TemDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;


let resultadoE = "#1 - Vai pro Shopping? ";
resultadoE += TemDinheiro && estaEnsolarado;

console.log(resultadoE);

let resultadoOU = "#2 - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;

console.log(resultadoOU);

console.log(true ^ false);

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);



