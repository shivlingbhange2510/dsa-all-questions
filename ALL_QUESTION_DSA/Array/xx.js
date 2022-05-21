// If input is “i.like.this.program.very.much”
// Output will be “i.xyz.this.xyz.very.xyz”

let s = "rajasoftwarelabs";
calculate fre of character and total sum of character  b=1, f=1, j=1, total=3
// b=1, f=1, j=1, total=3
// c=''

function char(s) {
  let n = s.length;
  let total = 0;
  // total++;
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == "b") {
      sum1++;
      total++;
    }
    if (s[i] == "f") {
      sum2++;
      total++;
    }
    if (s[i] == "j") {
      sum3++;
      total++;
    }
  }
  return(`b=${sum1}, f=${sum2}, j=${sum3}, total=${total}`)
  console.log("ss", sum1, sum2, sum3);
console.log("total", total);
}

let input="rajasoftwarelabs";

console.log(char(s))