// you are given array you have to find max product of subarray 
// with brute force time complexcity is O(n^2) and space complexcity is O(1)
let x=[1,6,2,0,7,1];
const maxProd=(a)=>{
    let n =a.length;
    let cur_max_prod=a[0], cur_min_prod=a[0];
    let prev_max_prod=a[0], prev_min_prod=a[0];
    let ans=a[0];

    for(let i=1; i<n; i++){
        cur_max_prod=Math.max(prev_max_prod*a[i], prev_min_prod*a[i], a[i]);
        cur_min_prod=Math.min(prev_max_prod*a[i], prev_min_prod*a[i], a[i])
        ans=Math.max(ans, cur_max_prod)
        prev_min_prod=cur_min_prod;
        prev_max_prod=cur_max_prod;
    }
    console.log('max_prod', ans)
}
const max_sum_bruteforce=(a)=>{
    let n=a.length, max_prod=Number.NEGATIVE_INFINITY;
    for(let i=0;i<n;i++){
        let ar=[], prod=1;
        for(let j=i;j<n;j++){
            prod=prod*a[j]
           
            if(prod>max_prod){
                max_prod=prod;
            }
           
        }
    }
    console.log('brute_max_prod', max_prod)
}
max_sum_bruteforce(x);
maxProd(x)