function sempreRetornaUM() {
  return 9;
}

let valor = sempreRetornaUM()

console.log(valor);

function sempreRetornaMultipicacao() {
  return 12 * 2;
}

let resultado = sempreRetornaMultipicacao() + 3;

console.log(resultado);


function textoOuNumero(retornaTexto) {
  if (retornaTexto) {
    return "Eu sou um texto"
  } else {
    return "Eu sou um numero"
  }
}

let texto = textoOuNumero(true)
console.log(texto);

console.log(textoOuNumero(false));



