let n = 202,
  n2 = 469;
// 214 -->
// let n=142, n2=179;  ----> op =1003
let sum = n,
  sum2 = n2;
let map = new Map();
map.set(n, "dd");
map.set(n2, "fff");

function check(n, n2) {
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = parseInt(n / 10);
    // console.log("sum", sum);
  }
  if (map.has(sum)) {
    return sum;
  } else {
    map.set(sum, "shiv");
    // return( check(sum))
  }
  while (n2 > 0) {
    let rem = n2 % 10;
    sum2 = sum2 + rem;
    n2 = parseInt(n2 / 10);
    // console.log("sum", sum);
  }

  if (map.has(sum2)) {
    return sum2;
  } else {
    map.set(sum2, "22");
    // return( check(sum2))
  }
  // if(sum>30){
  //   return(sum);
  // }else{

  // }
  // console.log("map ", map);
  return check(sum, sum2);
}

console.log(check(n, n2));
