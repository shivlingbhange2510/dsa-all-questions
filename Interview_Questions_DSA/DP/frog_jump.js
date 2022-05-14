// you are given array and you have to jump 1 step and 2 step find min energy required to jump  frog
// from starting to ending and
// min energy is diff bewtween 2 indexces value of array;
//
const minEnergy=(a, idx)=>{
    if(idx==0){
        return 0;
    }

    let left = minEnergy(a, idx-1) + Math.abs(a[idx]-a[idx-1]);
    let right=Number.POSITIVE_INFINITY;
    if(idx>1){
         right = minEnergy(a, idx-2) + Math.abs(a[idx]-a[idx-2])
    }
     return(Math.min(left, right));
}
let x= [10,8,20,10 ];
console.log('first', minEnergy(x,x.length-1))