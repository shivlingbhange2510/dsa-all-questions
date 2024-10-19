//  your are give array of intiger, find max sum of subArray;

let ar = [1,-4,-2,4,3];
ar =  [-2,1,-3,4,-1,2,1,-5,4] // op : 6
// [5,4,-1,7,8]  OP : 23
// for
// let x= [-72,-3,-3,-2,-4] // op:6
// const sumOfSubArray=(ar)=>{
//     let maxSum= Number.NEGATIVE_INFINITY;
//     let newSum = x[0];
//     for(let item of ar){
//         console.log("item", item);
//         // newSum=item;
//         if(newSum > maxSum){
//             newSum=newSum+item ;  // 2, 2+3 = 5, 0, 
//             maxSum=newSum+ item
//         }

//         if(newSum<maxSum){
//             newSum = 0
//         }
//     }
//     console.log("sumOfSubArray", newSum, maxSum);
// }

// sumOfSubArray(x)

// let x = [2, 3, -3, 2, 4]; // The expected output is 6.
let x= [2,-3,5,2,-4] // op:6

const sumOfSubArray = (ar) => {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for (let item of ar) {
        // Calculate the current sum by adding the current item
        currentSum += item;
        
        // Update maxSum if currentSum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        
        // Reset currentSum to 0 if it becomes negative
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

console.log(sumOfSubArray(x)); // Output: 6


function maxSum (ar){
    let maxSum=Number.NEGATIVE_INFINITY;
    let curSum=0;
// [10,3,-12,67,1]
// [2,-3,5,2,-4] op =7;
    for(let item of ar){
        curSum +=item;

        if(curSum>maxSum){
            maxSum=curSum
        }
        if(curSum<maxSum){
            maxSum=0;
        }
    }
}