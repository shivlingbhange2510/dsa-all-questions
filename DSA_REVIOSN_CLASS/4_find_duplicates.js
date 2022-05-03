// you are given array having duplicates no  1 number is present at one time find this number
// in this consiction array length is always be odd size;
// bit manupulation is add a and b and take modules of it
// n^0 ---> n, b) n^n ---> n
let a = [10, 7, 1, 2, 3, 4, 4, 2, 3, 1, 7];
let n = a.length;
// with bit manupulation time complexcity is O(n) and space complexcity is O(1);
const bitManupulation=(a)=>{
let temp=a[0];
    for(let i=1;i<n;i++){
        temp=temp^a[i];
    }
    console.log('bitManupulation', temp)
}
bitManupulation(a)
const bruteForce = (a) => {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (a[i] == a[j]) {
        count++;
      }
    }
    if (count !== 2) {
      return a[i];
    }
  }
};

const hashMap = (a) => {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      let val = map.get(a[i]) + 1;
      map.set(a[i], val);
    }
  }
  for (k of map) {
    if (k[1] == 1) {
      console.log("hashMap : ", k[0]);
    }
  }
};
console.log("bruteForce : ", bruteForce(a));
hashMap(a);
