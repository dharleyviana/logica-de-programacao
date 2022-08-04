// const nota1 = 7.8
// const nota2 = 4.2
// const nota3 = 6.9

// let resposta;

// function mediaNotas(resposta) {
//   let calculoDasMedias = nota1 + nota2 + nota3 / 3;
//   if (calculoDasMedias >= 7) {
//     resposta = "Você passou";
//   } else {
//     if (calculoDasMedias >= 5) {
//       resposta = "Recuperação";
//     } else {
//       if (calculoDasMedias >= 3) {
//         resposta = "Reprovado";
//       }
//     }
//   }
// }

// mediaNotas(resposta);

// RESPOSTA 

const nota1 = 4.8
const nota2 = 4.2
const nota3 = 1.9

function minimo(n1, n2) {
  return n1 <= n2 ? n1 : n2;

}

console.log(minimo(nota1, minimo(nota2, nota3)));

function media(n1, n2, n3){
  const menorNota = minimo(n1, minimo(n2, n3));

  if(menorNota === n1){
    return (n2 + n3) / 2 
  } else if(menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

function mediaParaSatatus(media) {
  if(media >= 5) {
    return "Aprovado";
  } else if(media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaSatatus(mediaFinal)
console.log(`O resultado final do aluno é ${statusFinal}!`);

console.log((4.8 + 4.2 + 1.9) / 3);