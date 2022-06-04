// https://leetcode.com/problems/subarray-sum-equals-k/

const subarraySum = function(nums, k) {
    const map = new Map();
    let sum = 0
    let count = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)){
            console.log("map* ", map.get(sum-k))
            count += map.get(sum - k);
        }
           
        map.set(sum, map.get(sum) ?? 0 + 1);
        console.log("map ", map)
        // console.log("xxx",  map.get(sum) ?? 0 + 1)
    }

    return count;
};
let a=[1,2,3,4,5,6];
let k=5;
console.log("first", subarraySum(a,k));