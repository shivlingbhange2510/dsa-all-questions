 // you are given an number n and m calculate power of (n) with m (n^m)

function power(n, m){
    if(m==0){
        return 1
    }
    return(n*power(n, m-1))
}
console.log('power is ', power(2,4))