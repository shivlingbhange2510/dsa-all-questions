let a = [7, 4, 3, 2, 7, 8, 2, 3, 7];
let n = a.length;
// with bruteforce approach time complexcity is O(n^2) and space complexcity is O(1)
function findDuplicates(a) {
  let n = a.length;
  for (let i = n - 2; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (a[j] == a[i]) {
        count++;
      }
    }
    a[i] = {
      val: a[i],
      freq: count,
    };
  }
  console.log("obj", a);
}
// with below approach time complexcity is O(n) and space is o(1)
const findDuplicates2 = (a) => {
  let n = a.length;
  for (let i = 0; i < n; i++) {
    let j = a[i] % n;
    a[j] = a[j] + n;
  }
  console.log('arr after modify : ', a)
  for (k in a) {
    a[k] = parseInt(a[k] / n);
  }
  console.log("dd ar", a);
};
findDuplicates2(a);
// for(let i=0;i<n;i++){
// let j=a[i]%n;
// a[j]=a[j]+n;
// }
// console.log('first', a)
// for(let i=0;i<n;i++){
//     a[i]=parseInt(a[i]/n)
// }

// console.log('final ',a )
