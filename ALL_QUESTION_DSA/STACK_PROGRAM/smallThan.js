// Given an array, find the nearest smaller element G[i] for every element A[i]
//  in the array such that the element has an index smaller than i. Mathematically,
let x=`8
39 27 11 4 24 32 32 1`;

b=x.trim().split('\n');
console.log('b',b)
let n=+b[0], a=b[1].split(' ').map(Number);
s=[], g=[];     
// // -1 -1 -1 -1 4 24 24 -1
for(i=0;i<n;i++){
while(s.length>0&&s[s.length-1]>=a[i]){
    s.pop();
}
if(s.length==0){
    g.push(-1);
}else{
    g.push(s[s.length-1])
}
s.push(a[i]);
}

console.log('gg', g)