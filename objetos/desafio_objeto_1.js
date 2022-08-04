const data = {
  dia: 19,
  mes: 06,
  ano: 2022,
  exibir: function() {
    return `${this.dia}/${this.mes}/${this.ano}`
  },
};

data.mes = 01;

console.log(data.exibir());