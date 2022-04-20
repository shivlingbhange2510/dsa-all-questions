//  you are given array you have to find the mmajority elemet in array
// majority : a.length=n then n/2+1 is majority element;
// iam excepting competancy salary according to market trade currently
function bruteForce(arr){
    let max=Number.NEGATIVE_INFINITY;
    let n= arr.length;
let  index, count;
   
for(let i=0;i<n;i++){
    let t=arr[i], count=0;
    for(let j=0;j<n;j++){
        if(t==arr[j]){
            count++;
        }
    }
    if(count>max){
        max=count;
        console.log('cc',count)
        index=i;
    }
}
if(max>=parseInt(n/2+1)){
    console.log('majority array')
}else{
    console.log('not majority array')
}
// console.log(a[index], "count",  max)
}
let a=[1,2,2,1,1]
bruteForce(a)
const objectMethod=(ar)=>{
    let n= ar.length;
    let obj={};
    for(k in ar ){
        if(obj[ar[k]]==undefined){
            obj[ar[k]]=1;
        }else{
            obj[ar[k]]+=1;
        }
    }
    console.log("obj", obj)
    let max=-1;
    for(k in obj){
        if(+obj[k]>max){
            max=obj[k];
        }
    }
    if(max>=Math.floor(n/2+1)){
        console.log('majority array')
    }else{
        console.log('not majority array')
    }
}
let b=[1,3,4,5,6,7,4,5,1,1,1,1];
objectMethod(a)