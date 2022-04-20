function sumOf_N_NaturalNumber(n){
    if(n==1){
        return 1
    }
    return n + sumOf_N_NaturalNumber(n-1)
}
console.log( sumOf_N_NaturalNumber(10) )