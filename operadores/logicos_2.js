const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2;
console.log('Vamos comprar a TV de 50"? ' + comprarTV50); // AND

let comprarTv32 = t1 !== t2;
console.log(`Vamos comprar a TV de 32"? ${comprarTv32}`); //XOR


let tomarSorvete = t1 || t2;
console.log("Vamos comprar sorvete? " + tomarSorvete); //OR

let ficarEmCasa = !tomarSorvete;
console.log("Vamos ficar em casa? " + ficarEmCasa); // NOT
