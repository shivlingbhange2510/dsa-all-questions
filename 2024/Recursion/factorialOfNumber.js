
function factorialOfNumber(n){
    if(n==0 || n==1){
        return 1
    }

    return(n*factorialOfNumber(n-1))
}