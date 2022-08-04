const produto = { 
  nome: "IPad",
  preco: "5.700",
  desconto: "0.15",
  precoComDesconto: function() {
    return this.preco * (1 - this.desconto);
  }
}

console.log(produto.precoComDesconto());