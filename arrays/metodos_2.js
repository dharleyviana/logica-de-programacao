// indíces       0  1  2  3  4
const numeros = [1, 2, 3, 4, 5]; // Elementos

// .splice remove elementos de dentro de um array. Ele funciona através de parametros.
// Primeiro você define o indíce do elemento a ser excluído
// Segundo, você define a quantidade de elementos a ser excluído do array.
// EXEMPLO: " Quero excluír o elemento de valor 3 do array ".

numeros.splice(2, 1);
// 2 = indíce do elemento 3 do array;
// 1 = quantidade de elemtos a ser excluída do array;
console.log(numeros);

// .pop remove o último elemento do array.
numeros.pop();
// Nesse caso o último elemento do array " numeros " é o de valor " 5 ".
console.log(numeros);
