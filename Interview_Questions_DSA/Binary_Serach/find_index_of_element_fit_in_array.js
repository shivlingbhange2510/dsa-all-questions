// https://oj.masaischool.com/contest/2657/problem/06
// you are given sorted array you have to insert element in sorted array so that after inserting element
//  final array should be sorted  
// 1    2   3   4   5   5   6
// with help of binary serach time complexcity is log(n)   space complexcity is O(1)
const insertElement = (ar, target)=>{
let n= ar.length;
let low =0, high=n-1, ans=-1;
while(low<high){
    let mid= low + parseInt((high - low) / 2);

    if(ar[mid]<target){
        low=mid+1;
    }else{
        ans=mid;
        high=mid-1
    }
}
return ans;
}
console.log(insertElement([1,2,3,4,4,5,6,7], -1))
