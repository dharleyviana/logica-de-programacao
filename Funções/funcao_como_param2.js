function executar(fn){
  if(typeof fn === "function") {
    console.log(fn(90, 50));
  }
}

function somar(a, b) {
  return a + b;
}

executar(somar);
executar(bomdia);

function bomdia() {
  return "Bom Dia";
}

function subtrair(a, b) {
  return a - b;
}


console.log(subtrair(45, 89));