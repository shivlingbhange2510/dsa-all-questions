
function checkPrime(num){
    let count=0;
    if(num==1){
      return false
    }
    for(let i=2;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count>=2){
        return false;
    }else{
     return true;
    }
}
// console.log(checkPrime(11))
console.log(checkPrime( Math.abs(0,1)))
console.log(Math.abs(0,1))
