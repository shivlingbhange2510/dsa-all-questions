function sub_array(ar,idx){
    if(idx==ar.length){
        console.log(ar)
        return;
    }
    for(let i=idx;i<ar.length;i++){
        [ar[i], ar[idx]]=[ar[idx],ar[i]];
        sub_array(ar,idx + 1);
        [ar[i],ar[idx]]=[ar[idx],ar[i]]
    }
}

sub_array([1,2,3],0);
