let a = `abbabaadcbbc`;
a=`aabbc`
let n=12;
let s=[];

const reduceString = (a)=>{
    let n=a.length;
    for(let i=0;i<n;i++){
    
        if(a[i]!==s[s.length - 1]){
            s.push(a[i])
        }else{
            s.pop()
        }
    }
    console.log(s.length<=0? -1:s.join(''))
}
reduceString(a)