
function kanspSack(C,v,w,n){
    if(n==0||w==0){
        return(0);
    }
    if(w[n-1]<=C){
        return(Math.max( (v[n-1] + kanspSack(C-w[n-1],v,w,n-1) ), kanspSack(C,v,w,n-1)))
    }
    else if(w[n-1]>C){
        return(kanspSack(C,v,w,n-1))
    }
}
let v1= [ 60, 100, 120 ], w1=[ 10, 20, 30 ], c1=50;
let n= w1.length;
console.log("first", kanspSack(c1,v1,w1, n))