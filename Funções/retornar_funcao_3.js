function somar1(a, b, c = 0) {
  return a + b + c;
}

console.log(somar1(2, 5));

function somar2(a) {
  return function (b) {
    return a + b;
  }
}


console.log(somar2(2)(5));