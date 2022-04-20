function sumOf_N_NaturalNumber(n){
    if(n==1){
        return 1
    }
    return n + sumOf_N_NaturalNumber(n-1)
}
console.log( sumOf_N_NaturalNumber(10) )
// let n=5;
// n=5 ---> 5+sum(4)
// n=4----> 4+sum(3)                    4+6=10
// n=3----> 3 + sum(2);                 3+sum(2)=3=6
//sum(n=2)----> 2+sum(1)    2+sum(1) //2+1 ==3