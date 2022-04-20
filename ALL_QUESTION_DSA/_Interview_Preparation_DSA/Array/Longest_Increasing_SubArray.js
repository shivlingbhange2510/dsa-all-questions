function checkLongest(a,n){
    // a=[1,2,1,2,3,1]
     n=a.length
    let x=[];
     for(i=0;i<n;i++){
         let longest=1;
         for(let j=i+1;j<n;j++){
             if(a[j]>a[j-1]){
                 longest++;
             }else{
               break;
             }
         }
         x.push(longest);
     }
     console.log(x)
     console.log(Math.max(...x))
 }