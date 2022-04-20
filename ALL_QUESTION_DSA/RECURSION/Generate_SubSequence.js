let arr=[]
function sub_Sequence(subseq, str,idx ){
    if(idx==str.length){
        arr.push(subseq)
        return
    }
    sub_Sequence(subseq,str,idx+1);
    sub_Sequence(subseq + str[idx], str, idx+1);
   

}
sub_Sequence('','1234',0)
console.log(arr)