let str='';
function binary(n){
    if(n==0){
        return(0)
    }
    // return
    binary(parseInt(n/2));
    console.log('xx', n%2);
    str=str + n%2
}
binary(25)
console.log('binary value is ', str)