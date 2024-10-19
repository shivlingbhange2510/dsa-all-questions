let ar = [1, -5, -12, 60, -9, 0];

let max = Number.NEGATIVE_INFINITY;
let sMax = Number.NEGATIVE_INFINITY;
let index = 0;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] > max) {
    sMax=max;
    max = ar[i];
  }else if(ar[i]>sMax && ar[i] < max){
    sMax=ar[i]
  }
}


console.log("smax", sMax, "max", max);


