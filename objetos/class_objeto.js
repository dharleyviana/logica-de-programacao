class Data {
  dia = 1
  mes = 1
  ano = 1970

  constructor(dia, mes, ano) {
    this.dia = dia   
    this.mes = mes   
    this.ano = ano   
  }   
}   

const d1 = new Data();

d1.dia = 24
d1.mes = 06
d1.ano = 2022

console.log(d1);
