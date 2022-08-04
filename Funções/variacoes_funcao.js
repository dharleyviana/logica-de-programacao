// 1# COM parametro e COM retorno;

function somar(a, b) {
   return a + b;
}

somar(30, 56);
let resultado = somar(30, 56);

console.log(resultado);
console.log(somar(30, 56))

// 2# COM parametro e SEM retorno;

function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

exibirMultiplicacao( 38, 9);
exibirMultiplicacao( 51, 12);

// 3# SEM parametro e COM retorno;

function retornarDataAtual() {
  return Date();
}

console.log(retornarDataAtual());


// 4# SEM parametro e SEM retorno;

function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual()
