// Equalibrium : an index of array such that sum of lower index of an array sum  is equal to
// higher index of sum of array 
// ex [3,2,1,2]-----> idx 1 is equalibrium  3=2+1
// a) left-right sum-array TC=O(n), SP=O(n) b)bruteforce TC=O(n^2), SP=O(1), 
// c)Sum variable Substract TC=O(n), SP=O(1)
//  -7 + 2 + 5 = -4 + 3 + 0 ;
// let a=[-7,1,5,2,-4,3,0];   
a=[1,3,5,2,2];     
//  idx=3(2) is equalibrim point;
let n=a.length;
const bruteForce=(a)=>{
    if(a.length==1){
        return(a[0]);
    }
    for(let i=0;i<n;i++){
        let sum_l=0, sum_r=0
        for( j=0; j<i ;j++){
            sum_l+=a[j];
        }
        for( m=j+1;m<n;m++){
            sum_r+=a[m];
        }
        if(sum_r===sum_l){
            return('Equalibrium point index is :'+i)
        }
    }
    return('not get equa')

}

const leftAndRightSum=(a)=>{
    let rSum=[], lSum=[], ans=-1;;
   let  sum1=0, sum2=0;
    for(let i=0;i<n;i++){
        sum1=sum1+a[i];
        sum2=sum2+a[n-i-1];
        lSum[i]=sum1;
        rSum[n-i-1]=sum2;
    }

    for(let k=0;k<n;k++){
        if(rSum[k]==lSum[k]){
            // console.log('suum')
            return(`Equalibrium point index is ${k}`)
        }
    }
    return('no equalibrium point found', ans)
}

const sumVAriable=(a)=>{
    let n=a.length;
    let totalSum=0;
    for(let i=0;i<n;i++){
        totalSum=totalSum+a[i] ;
    }
    let leftSum=0;
    for(let i=0;i<n;i++){
        totalSum=totalSum-a[i];
        if(totalSum==leftSum){
            return(`Equalibrium point is ${i}`)
        }else{
            leftSum=leftSum+a[i];
        }
    }
    return('not Found')
}
console.log('Brute Force : ',bruteForce(a));
console.log('Left Sum Right Sum : ', leftAndRightSum(a))
console.log('optimize WAY : ', sumVAriable(a))