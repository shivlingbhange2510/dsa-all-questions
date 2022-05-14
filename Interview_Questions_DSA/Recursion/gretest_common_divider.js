// you are given an 2 integer find the gretest common divider
// e.g 51,  68 in this 2 number  common divider is 17 and this is gretetest among all divider;
function findGCD(a, b){
if(a==0){
    return(b);
}
    let x=findGCD(b%a, a);
    return(x);
}
console.log('first', findGCD(20, 48))

function noOfWays(n){
if(n<0){
    return(0)
}
if(n==0){
    return(1);
}

    let x= noOfWays(n-4) + noOfWays(n-8);
    return(x);
}
console.log('milk', noOfWays(12));