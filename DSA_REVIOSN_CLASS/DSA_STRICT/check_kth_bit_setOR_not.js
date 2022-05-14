//  you are given an number check is given binary numbers kth bit set or not

//  set means kth bit have 1
// not set means kth bit have 0

function checkSet(num, k){
    let i=1;
    i=i<<k;
    let result=i&num;
    if(result==0){
        console.log('kth is not set having 0 value');
    }else{
        console.log('kth bit set having 1 value');
    }
}
checkSet(27,3)