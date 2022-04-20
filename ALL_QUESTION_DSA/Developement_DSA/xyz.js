// https://leetcode.com/submissions/detail/630241335/
//  you are given unsorted array  you have to find sum of 2 elemet which has target
// target elemt given in proble
// time complexcity for this is O(n*log(n));
// constrain you will not 
 var twoSum = function(nums, target) {
     let a=[...nums];
     let x=[], n=a.length;
     a=a.sort((a,b)=> a-b);
   for(let i=0;i<n;i++){
    let l=i+1;
    let r=n-1;
    while(l<r){
        let sum=a[l]+a[r]+a[i];
        let 
        if(sum==0){
            let f=[a[l],a[r],a[i]]
            for(r )
            x.push([a[i],a[l],a[r]]);
            l++,r--;
        }else if(sum<0){
            l++;
        }else{
            r--;
        }
    }
   }
   let obj={},p=[];
   for(k in x){
    if(obj[x[k]]==undefined){
        obj[x[k]]=1;
    }else{
        obj[x[k]]+=1;
    }
   }
//    return obj
   for(x in obj){
       p.push([x])
   }
//    return p
   for(let r=0;r<p.length;r++){
      y=p[r][0].split(',').map(Number);
    p[r]=y
   }
    return p
};
console.log(twoSum([-1,0,1,2,-1,-4],0))