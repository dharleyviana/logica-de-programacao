const nota = 9.75
let resultado;

{
  
  if (nota <= 3.5) {
    resultado = " Tirou (F), Reprovou feio Otario.";
  } else if (nota <= 5) {
    resultado = " Tirou (E), Reprovou Otario.";
  } else if (nota <= 6) {
    resultado = " Tirou (D), Passou de Raspão seu Vacilão.";
  } else if (nota <= 8) {
    resultado = "Tirou (C), Passou, Deu pro Gasto.";
  } else if (nota <= 9) {
    resultado = "Tirou (B), Passou, Você foi Ótimo.";
  } else if (nota <= 10) {
    resultado = "Tirou (A), Passou, Você é um Genio.";
  } 

}
console.log(resultado)





























