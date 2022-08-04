const notas = [4, 2, 8, 5, 9, 6];

let valores = '';

for(let nota of notas) {
  valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
  indices += indice + ' ';
}

console.log(indices);


// FOREACH


// " of " é para acessar os valores no array.
// " in " é para acessar os índices.