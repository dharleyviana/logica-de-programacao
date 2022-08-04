const numeros = [1, 2, 3, 4, 5];


// Acresentar um valor novo.
numeros.push(6);

// Alterar um valor deacordo com o índice.
numeros[0] = 100;

console.log(numeros);

// .concat vai concatenar novos elemetos no array, OBS: ele vai gerar um novo array já concatenado.
const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);

// .includes fala se um determinado elemento está incluído ou não no array. FALSE / TRUE
console.log(numeros.includes(3));
console.log(numeros.includes(76));

// .indexof serve para mostar o índice de um determido elemento do array. 
console.log(numeros.indexOf(5));

// .join gera uma String juntando todos os elementos do array a partir de um determinado símbolo.
console.log(numeros.join( ' - '));

