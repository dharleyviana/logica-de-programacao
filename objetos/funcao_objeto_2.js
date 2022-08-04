function criarData(dia, mes, ano ) {
  return {
    dia:dia,
    mes: mes,
    ano:ano,
    exibir : function() {
      return `${this.dia}/${this.mes}/${this.ano}`
    }
  }
}

const d1 = criarData(2, 3, 2004);
const d2 = criarData(24, 06, 2005);
const d3 = criarData(05, 11, 2007);


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());