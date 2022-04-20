// https://leetcode.com/submissions/detail/630241335/
//  you are given unsorted array  you have to find sum of 2 elemet which has target
// target elemt given in proble
// time complexcity for this is O(n*log(n));
// constrain you will not 
 var twoSum = function(nums, target) {
    let l=0;
    let a=[...nums];
    
    // [3,2,4]
    a=a.sort((a,b)=>a-b)
     let x=[];
    let r=nums.length-1;
    while(l<r){
        let sum=a[l]+a[r];
        
        if(sum==target){
            // console.log(sum ,'xxxx',l,r)
            let f=nums.indexOf(a[l]);
               nums[f]=Number.NEGATIVE_INFINITY;
            let f2=nums.indexOf(a[r])
            nums[f2]=Number.NEGATIVE_INFINITY;
            x.push(f,f2);
            l++,r--;
        }else if(sum<target){
            l++;
        }else{
            r--;
        }
    }
        return x
    
};
console.log(twoSum([]))