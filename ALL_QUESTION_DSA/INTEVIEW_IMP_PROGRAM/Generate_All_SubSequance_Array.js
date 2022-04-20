let x=[];
const subsequance_of_array=(ar,i,cur_ar)=>{
    if(i>=ar.length){
        x.push(cur_ar);
        return;
    }
    subsequance_of_array(ar,i+1,[...cur_ar, ar[i]]);
    subsequance_of_array(ar,i+1, cur_ar);

    
}
console.log(subsequance_of_array([1,2,3],0,[]))
console.log(x)