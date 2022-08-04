const hora = 11;
let saudacao;

if(hora < 11) {
 saudacao = ("Bom Dia!")
} else if (hora < 18 ) {
  console.log("Boa Tarde")
} else if (hora > 18 && hora < 24 ) {
  console.log("Boa Noite!")
} else {
  console.log("Vai tomar no seu CU!!!!")
}

console.log(saudacao);