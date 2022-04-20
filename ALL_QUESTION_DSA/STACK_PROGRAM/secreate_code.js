let a='ab#d'
// op='ad'
let n=a.length, s=[];
for(i=0;i<n;i++){
    s.push(a[i])
    if(s.length>0&&a[i]=='#'){
        s.pop();
        s.pop();

    }
}
console.log(s)

