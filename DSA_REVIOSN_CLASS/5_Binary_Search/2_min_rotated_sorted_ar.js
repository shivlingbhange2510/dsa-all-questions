// find min in sorted and rotated array;

let a=[4,5,6,7,9,10, -1,0,1,2,3];
// n=11-1=10, m=5;
//    [0,1,2,3,4,5,6,7,8,9, 10];

let n=a.length-1;
let low = 0, high=n-1;

while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if(a[mid]>a[high]){
      
    }
}