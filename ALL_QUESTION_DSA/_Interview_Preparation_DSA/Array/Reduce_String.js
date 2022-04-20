function stringReduce(y){
    
    
let n = y.length;
let stack = [];
for(let i=0;i<n;i++){

    if(stack.length==0){
        stack.push(y[i]);
    }else{
        let top = stack[stack.length-1];
        if(top==y[i]){
            stack.push(y[i]);
            stack.pop();
            stack.pop();
        }else{
            stack.push(y[i])
        }
    }
}
console.log(stack)
}
stringReduce(`aaabccddd`)