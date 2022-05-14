// let n=55;

function sumOfDigit(num, r){
    if(num<1){
        return(0)
    }
    return(num%r + sumOfDigit(parseInt(num/r), r));
}

console.log('lll', sumOfDigit(112,10))