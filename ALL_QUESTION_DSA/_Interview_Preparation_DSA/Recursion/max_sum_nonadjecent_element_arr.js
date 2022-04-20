//  given array find max sum of all subsequance sorted
// constrain : don't take adjustent eleme if i pick i=0, next time it shuld be i+2 pic

function  check(index, ar, n){

    if(index==0){
        return ar[index]
    }
    if(index<0){
        return 0
    }

    let x=ar[index] + check(index-2, ar, n);
    let y =  check(index-1,ar, n)
    console.log('yy ', y)
    return Math.max(x,y); 
}
let  y=check(4-1,[1,5,3,4], 4)
console.log('yy ', y)