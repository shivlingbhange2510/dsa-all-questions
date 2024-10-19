// https://leetcode.com/problems/two-sum/
// [1,4,5,3]  target=7;

function twoSum(nums, target){
    let obj = {};
    nums.reduce((acc, cur, index, ar)=>{
        // console.log("ac", acc, 'cur', cur, 't', t, 'y', y)
        const sub = target-cur
        const flag = obj[sub.toString()]
        if(flag){
            console.log('find target element')
        }
        obj[sub]=index;
        console.log("obj", obj, cur, 'sub', sub);
    }, 0)

}
twoSum([1,4,5,3], 7)