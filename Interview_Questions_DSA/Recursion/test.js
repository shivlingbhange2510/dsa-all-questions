let x=[1,2,3,4,5,6,7,8];
let sum2='';
for(let i=2;i<6;++i){
// console.log('iii', i)
x[x[i]]=x[i]
}


for(let i=0;i<8;++i){
    console.log('iii', i)
    sum2=sum2+x[i];
    }
    console.log('kkkk', sum2)
// if(n%3==0){
//     console.log('raja')
// }else if(n%5==0){
//     console.log('sofet')
// }

let i=0,j=2;
// Nq6766MEB 

do{
    i++,j++
    // console.log('first')
}while(j<5){

}

let a='abcdefghijklmnopqrstuvwxyz'
let sum=0;console.log('aa', a.length)
let t=''
for(let i=0;i<t.length;i++){
    for(let j=0;j<a.length;j++){
        if(t[i]==a[j]){
            sum=sum +j +1;
        }
    }
}

console.log('summ', sum)