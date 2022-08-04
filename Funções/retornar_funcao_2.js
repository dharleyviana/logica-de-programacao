function retornarFuncao() {
  return function () {
    return function () {
      return "Bom Tarde!!"
    }
  }
}

console.log(retornarFuncao()()());
