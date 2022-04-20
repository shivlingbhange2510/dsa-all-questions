function sunSet(index, arr, new_ar,n){
    if(index>=n){
       if(new_ar.length>0){
        console.log(new_ar);
       }
        return;
    }
    new_ar.push(arr[index]);
    sunSet(index+1,arr,new_ar,n);
    new_ar.pop();
    sunSet(index+1, arr, new_ar,n);

}

sunSet(0, [3,1,2], [], 3)