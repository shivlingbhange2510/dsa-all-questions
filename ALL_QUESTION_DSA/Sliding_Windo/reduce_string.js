// aaabccddd  op=abd

let a= 'aaabccddd';
let n=a.length;
s=[];

for(i=0;i<n;i++){
    // console.log(s.length)
    if(s.length!=0){}
    if(s.length>1&&a[i-1]==top){
        s.pop()
    }
    s.push(a[i]);
    console.log('top is ',s[s.length-1], s.length)
    
   
   
   
}

console.log('final is ',s)
