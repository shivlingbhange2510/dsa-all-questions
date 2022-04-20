// this method works only when array have All unique elemet
// differance between permutation and subsequances is permutions having no, sequances it can be and
// order of array elemet is changed in permutation and it create a.length! array
// if input array of length m then total  array generate by permutation is m!
var x=[],count=0;
function permutation_arr(arr,i,cur_ar){
    if(i>=arr.length){
        x.push(cur_ar);
        count++;
        return;
    }
    for(let j=0;j<arr.length;j++){
        if(!cur_ar.includes(arr[j])){
            permutation_arr(arr,i+1,[...cur_ar,arr[j]])
        }
    }
}
permutation_arr([1,2,3,6],0,[])
console.log('xx', x, '\n', count)