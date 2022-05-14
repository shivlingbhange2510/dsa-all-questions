// you are given number convert given number into digit ;
// 148 ---> 13 ---> 4;
let num = 12345;
function check(n) {
  if (parseInt(n / 10) == 0) {
    return n;
  }
  while (n >= 10) {
    return (n % 10) + check(parseInt(n / 10));
  }
}

let c = check(num);

while (c > 10) {
  c = check(c);
}
console.log("Final answer :  ", c);
