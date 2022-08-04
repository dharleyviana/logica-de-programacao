// A+    10 
// A     9
// B+    8
// B     7
// C+    6
// C     5
// D+    4
// D     3
// E+    2
// E     1
// F     0

let Nota = 0.6

switch (Math.ceil(Nota)) {
  case 0:
    console.log("F");
    break
  case 1:
    console.log("E");
    break
  case 2:
    console.log("E+");
  case 3:
    console.log("D");
    break
  case 4:
    console.log("D+");
    break
  case 5:
    console.log("C");
    break
  case 6:
    console.log("C+");
    break
  case 7:
    console.log("B");
    break
  case 8:
    console.log("B+");
    break
  case 9:
    console.log("A");
    break
  case 10:
    console.log("A+");
    break
    default:
    console.log("Nota Inválida");

}
