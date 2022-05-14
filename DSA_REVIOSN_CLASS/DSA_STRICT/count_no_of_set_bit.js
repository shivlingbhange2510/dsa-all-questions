// you are given an array count no of set bit in number;

let count=0;
let n=4;
while(n>0){
    if(n&1!=0){
        count++;
    }
    n=n/2;
}

console.log('set bit count is ', count);