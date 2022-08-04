const numeros = [1, 2, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for(let n of numeros) {
  console.log(n);
}


function paraCadaElemento (elemento, indice, array) {
  console.log(elemento, indice, array)
};

numeros.forEach(paraCadaElemento);

