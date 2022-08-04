function executar(funcao) {
  if(typeof funcao === "function") {
    console.log(funcao());
  }

}


function bomDia() {
  return "Bom Dia";
}

executar(3);
executar(bomDia);