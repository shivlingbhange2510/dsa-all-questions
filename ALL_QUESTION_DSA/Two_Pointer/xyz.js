var threeSum = function (nums) {
    var arr = [], sum2=0;
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        var left = i + 1;
        var right = nums.length - 1;

        if (i !== left && i !== right && left !== right) {
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                console.log(sum)
                if (sum === 0) {
                    let a = [nums[i], nums[left], nums[right]];
                    console.log('hiii ')
                    arr.push(a);
                    right--;
                } else if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                }
            }
        }
    }
console.log(arr)
  
};
threeSum([1,2,3,-4,-5,9,6])