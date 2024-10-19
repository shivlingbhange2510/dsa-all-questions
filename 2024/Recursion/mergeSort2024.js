
function mergeSort(ar, low, high){
    const mid = parseInt((low+high)/2);
    if(low==high){
        return
    }
    mergeSort(ar.slice(low, mid), low, mid);
    mergeSort(ar.slice(mid, high+1), mid, high)
return ar
}

function mergeTwoArray(ar1, ar2){
    let result=[];
    let first=0, second=0;
    let n1=ar1.length, n2= ar2.length;

    while(first<n1 && second <n2){
        if(ar1[first]< ar2[second]){
            result.push(ar1[first]);
            first++
        }else if(ar2[second]<ar1[first]){
            result.push(ar2[second]);
            second++;
        }else{
            result.push(ar1[first], ar2[second]);
            first++, second++
        }

        while(first<n1){
            result.push(ar1[first]);
            first++
        }
        while(second<n2){
            result.push(ar2[second]);
            second++;
        }
    }
    return result
}

const a= [19,3,1,4,56,7]
let c= mergeSort(a, 0, a.length)
console.log("result", c);