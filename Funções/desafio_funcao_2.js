// parametros (nota) -> retorna (conceito);

function conceitoParaNota(nota) {
  switch (Math.ceil(nota)) {
    case 10: return "A+";
    case 9: return "A";
    case 8: return "B+";
    case 7: return "B";
    case 6: return "C+";
    case 5: return "C";
    case 4: return "D+";
    case 3: return "D";
    case 2: return "E+";
    case 1: return "E";
    case 0: return "F";
    default: return null;

  }

}

console.log(`A nota de Dharley é: ${conceitoParaNota(8.99)}`);
console.log(`A nota de Paulo é: ${conceitoParaNota(5.8)}`);
console.log(`A nota de João é: ${conceitoParaNota(9.2)}`);
console.log(`A nota de Rafinha é: ${conceitoParaNota(4.1)}`);
console.log(`A nota de Pedro é: ${conceitoParaNota(2.4)}`);

