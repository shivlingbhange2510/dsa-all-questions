const checkSubstring =(s)=>{
    let n=s.length;
    let map = new Map();
    for(let i=0;i<n;i++){
        let str=''
        for(let j=i;j<n;j++){
            str=str +s[j];
            if(!map.has(str)){
                map.set(str,j);
            }
        }
    }
    console.log(map.size)
}
// checkSubstring('abcde')
// [1,2,3,4]

function check(n, i){
    if(i%5){
        return 1
    }
    if(i>n){
        return 0;
    }
    // let y= check(n, i+1) + check(n,i+2);
    // let max=Number._INFINITY;
    let s1=check(n, i+1);
//    let s2=check(n, i+5);
//     Math.max()
    let s2=check(n, i+2);
    let s3=check(n, i+3);
    let s4=check(n, i+4);
    let s5=check(n, i+5);
//  max= Math.min( s1,s2,s3,s4,s5)
    return (s5)
    // s1+s2+s3+s4+s5

}
console.log('object', check(26,0));