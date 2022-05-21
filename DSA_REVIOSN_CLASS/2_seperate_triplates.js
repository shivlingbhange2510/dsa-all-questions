// you are given an array with 1, 0's and  2's deperate all 0's, 1's and 2's
https://leetcode.com/problems/sort-colors/submissions/
const seperate1s0s2s = (a)=>{
    let n=a.length;
    let l=0,m=0, h=n-1;
    while(m<=h){
        if(a[m]==0){
            [a[l],a[m]]=[a[m],a[l]];
            l++, m++
        }else if(a[m]==2){
            [a[h],a[m]]=[a[m],a[h]];
            h--;
            // m++;
        }else{
            m++;
        }
    }
console.log('object', a);
}
let x=[2, 1,0,2,0,1,2,0,1,2,0,0,2];
seperate1s0s2s(x)