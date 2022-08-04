// Arrays são indexado a partir de um índice.
// Arrays são estruturas que recebem vários dados.
// O príncipio de um Array é a capacidade de armazenar
// multiplos valores atráves de uma única varíavel ou constante.


// ÍNDECES:     0    1    2    3    4    5 
const notas = [7.8, 2.7, 8.8, 2.1, 9.2, 5.1];

console.log(notas);
console.log(notas[0]);
console.log(notas[5]);

// Caso tente acessar um índece que não esta no array, o resultado sera "Undefield".
// Exemplo...

console.log(notas[9])

// Um Array pode ser mutável mesmo estando em uma constante "Const".
// Exemplo...

notas[5] = 2.6;

// Você pode mudar os valores do Array, mas NÂO pode mudar a constante em sí.
// Exemplo...

//notas = Notas3 
//     Ou
//notas = 3.89 

// Esse mudança ocasionará um erro de código.



