// let n=4,
// a=[1,5,7,9];
// let b=[2,4,6,8];
let n = 5,
    a = [0, 1, 2, 3, 4],
    b = [2, 3, 4, 7, 9];
let i = 0,
    j = 0,
    x = [];
while (i < n || j < n) {
    if (b[j] > a[i]) {
        x.push(a[i]);

        i++;
        console.log("i=j", i, j, x);
    } else if (a[i] > b[j]) {
        x.push(b[j]);
        console.log("i > j ", i, j, x);
        j++;
    } else {
        if (a[i] != undefined) {
            x.push(a[i]);
            console.log("j > i ", i, j, x);
            i++;
        }
        if (b[j] != undefined) {
            x.push(b[j]);
            console.log("j > i ", i, j, x);
            j++;
        }
    }
}
console.log("xxxx ", x);
// 2nd solution merge 2 sorted array;
 while(i<n||j<n){
  if(a[i]<b[j]){
    x.push(a[i]);
    i++;
  }else{
    x.push(b[j]);
    j++;
  }
}
while(i<n){
  x.push(a[i]);
  i++;
}
while(j<n){
  x.push(b[j]);
  j++;
}
