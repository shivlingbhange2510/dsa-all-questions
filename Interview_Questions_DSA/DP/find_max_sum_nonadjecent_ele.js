// you are given an array you have to find out max sum of nonadejecent element of array;

const nonadejecent=(ar, idx)=>{
    if(idx==0){
        return ar[idx]
    }

    let notPick=nonadejecent(ar, idx-1) + 0;
    let pick=Number.NEGATIVE_INFINITY;
    if(idx>1){
        pick=ar[idx] + nonadejecent(ar, idx-2);
    }
    return(Math.max(notPick, pick))
}

let x=[2,3,2];

console.log('first', nonadejecent(x, x.length-1))