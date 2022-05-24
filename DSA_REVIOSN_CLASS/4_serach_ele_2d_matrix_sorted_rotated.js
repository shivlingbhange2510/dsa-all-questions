//  you are given 2d matrix having sorted row and column
// you have to find that key is present or not in matrix;
// time complexcity is O(n)   space complexcity is O(1)
let a = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

k = 25;
// a[0][3];
let n = a.length;
const findKey = (a, k) => {
  let i = 0;
  j = n - 1;
  while (j >= 0 && i < n) {
    if (a[i][j] == k) {
      return "find target";
    } else if (a[i][j] < k) {
      i++;
    } else if (a[i][j] > k) {
      j--;
    }
  }
  return -1;
};


function sorted(a,k) {
    
  let n=a.length; j=a[0].length-1;
  let t=32;
  let i=0;
  while(j>=0&&i<n){
    
    if(t==a[i][j]){
      console.log('get target : ', i,j);
    }
    if(t<a[i][j]){
      j--
    }else{
      i++;
    }
    
  }
}
sorted(a,t)
console.log(findKey(a, t));
