//  return true if subset sum is equal to target element;

// function subsetSum(index,target, ar){
//     if(target==0){
//         return true;
//     }
//     if(index==0){
//         return ar[0]==target;
//     }
//     let notTake = subsetSum(index-1, target, ar);
//     let take= false;
//     if(ar[index]<=target){
//         take = subsetSum(index-1, target - ar[index], ar);

//     }
//     return take || notTake;
// }
// console.log( subsetSum(4,10,[1,2,3,4]))

let final_arr=[];
function printAllSubsequance(index, ar, new_array,n){

    if(index>=n){
        // final_arr.push(new_array);
        // console.log(new_array)
        if(new_array.length>1){
            let y = new_array.reduce((prev, cur)=>{
                return prev + cur
            })
            console.log(y)
        }
       
        // return;
    }

    new_array.push(ar[index]);
    printAllSubsequance(index+1,ar,new_array,n);
    new_array.pop();
    printAllSubsequance(index+1,ar, new_array, n)
}
pp=printAllSubsequance(0, [1,2,3], [],4)
// console.log('ffff ', final_arr)