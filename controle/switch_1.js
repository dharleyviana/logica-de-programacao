let nota = 12.4;

switch (Math.ceil(nota)) {
  default:
    console.log("Nota Inválida")
    break
  case 10: case 9: case 8: case 7:
    console.log('Parabens');
    break
  case 6:
  case 5:
    console.log("Passou")
    break;
  case 4:
  case 3:
  case 2:
    console.log("Reprovado");
}
console.log("fim!");