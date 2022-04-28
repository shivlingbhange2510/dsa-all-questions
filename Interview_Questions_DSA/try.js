
// 4 3          ------->  6;
// 1 2 3

const check=(t, w, a, idx)=>{
if(idx==t){
    console.log('first', idx)
    return 1;
}
if(idx>t){
    return 0
}
let y= check(t, w, a, idx+1) + check(t, w, a, idx+2) +check(t, w, a, idx+3)
return y
}
let f=check(4, 3, [1,2,3], 0);
console.log('first', f) 













