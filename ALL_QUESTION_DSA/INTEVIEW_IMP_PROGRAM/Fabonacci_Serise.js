
function fabonacci_Series(n){
    if(n<=1){
        return n
    }
    let x =fabonacci_Series(n-2) + fabonacci_Series(n-1);
    return x
}
console.log(fabonacci_Series(50))