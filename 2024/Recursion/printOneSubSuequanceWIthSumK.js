// in given array print only one subsequance which has some equal to K 

function printOnlyOneSubsequance(ar, index, sum, target, n, tempAr){
    if(n==index){
        if(sum==target){
            console.log("one subsequance", tempAr);
            return true
        }
        return false
    }
    tempAr.push(ar[index]);
    sum=sum+ar[index]
    if(printOnlyOneSubsequance(ar, index+1, sum, target, n, tempAr)==true){
        return true
    }
    tempAr.pop()
    sum=sum-ar[index]
    if(printOnlyOneSubsequance(ar, index+1, sum, target, n, tempAr)==true){
        return true
    }
    return false

}

const ar = [1,2,1];
const n=ar.length
let target = 2, index = 0, tempAr=[], sum=0;
const x= printOnlyOneSubsequance(ar, index, 0, target, n, [])
console.log("xx", x);

function printCount(index, ar, target, sum, n, tempAr){
    if(index==n){
        if(sum==target){
            return 1
        }
        return 0
    }
    // tempAr.push(ar[index])
    sum=sum+ar[index]
    const left= printCount(index+1, ar, target, sum, n, tempAr);
    // tempAr.pop();
    sum=sum-ar[index]

    const right = printCount(index+1, ar, target, sum, n, tempAr)
    return  left + right
}
const c =  printCount(index, ar, target, sum, n, tempAr)
console.log("ccc is ", c);