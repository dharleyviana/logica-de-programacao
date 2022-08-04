const futuro = Date.now() + 100
let quantidade = 0;

while (Date.now() < futuro) {
  quantidade++
}

console.log("Quantidade: " + quantidade);