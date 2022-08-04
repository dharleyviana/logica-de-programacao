const meuNascismento1 = {
  dia: 23,
  mes : 01,
  ano: 2003,
  exibir: function() {
    return `${this.dia}/${this.mes}/${this.ano}`
  },
}

console.log(meuNascismento1.exibir());

const meuNascismento2 = {
  dia: 11,
  mes : 05,
  ano: 2007,
  exibir: function() {
    return `${this.dia}/${this.mes}/${this.ano}`
  },
}

console.log(meuNascismento2.exibir());

const meuNascismento3 = {
  dia: 29,
  mes : 02,
  ano: 2001,
  exibir: function() {
    return `${this.dia}/${this.mes}/${this.ano}`
  },
}

console.log(meuNascismento3.exibir());

