let count=0;
function printSubSequance(index, ar, origin){
    // [3,1,2]
    if(index>origin.length-1){
        console.log(ar, count++);
        return
    }
    ar.push(origin[index]);
    printSubSequance(index+1, ar, origin)
    ar.pop();
    printSubSequance(index+1, ar, origin)
}

const origin = [3,1,2];
printSubSequance(0,[], origin)