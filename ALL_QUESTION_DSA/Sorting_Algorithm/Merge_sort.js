let p=[]
function merge_sort(a1){
    if(a1.length<=1){
        // p.push(a1);
        
        return a1;
    }
    let md=parseInt(a1.length/2);
    let a =merge_sort(a1.slice(0,md));
    let b=merge_sort(a1.slice(md));
  
     return merge_2_array(a, b);
    
}
function merge_2_array(a, b){
    let i=0, j=0,x=[], n=a.length, m=b.length;
     while(i<n&&j<m){
 if(a[i]<b[j]){
   x.push(a[i]);
   p.push(b[j]);

   i++;
 }else{
   x.push(b[j]);
   p.push(b[j]);

   j++;
 }
}
while(i<n){
    p.push(a[i]);

 x.push(a[i]);
 i++;
}
while(j<m){
 x.push(b[j]);
 p.push(b[j]);
 j++;
}


return x;
    
}
console.log(merge_sort([6,3,8,9,4]))
// console.log('p is ', p)