function check(a){
let st=[], n=a.length; ans=[];

for(let i=n-1;i>=0;i--){
    if(st.length==0){
        ans.push(a[i]);
    }else{
        let s=a[i].splite('').sort().join('')

    }
}
}
let a=[ 'eodc', 'odec', 'code', 'baca', 'aabc' ];

let n=a.length;
let ar=[];
let obj={};
for(let i=0;i<n;i++){
    let t=a[i].split('').sort().join('');
    let p={or:a[i], ch:t}
    let y=[];
    y.push(t,a[i])
    if(obj[t]==undefined){
        obj[t]=y
    }
    for(let j=i+1;j<i;j++){
        let s=a[i].split('').sort().join(' ');
    }
}
console.log(obj)
let ans=[];
for(k in obj){
   ans.push(obj[k][1])
}
console.log('ans', ans.sort())