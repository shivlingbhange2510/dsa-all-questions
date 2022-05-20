
function check(n){
    let f=[];

    for(let i=0;i<n;i++){
        let t=[];
        t[0]=1;
        for(let j=1; j<i;j++){
            let cur=f[i-1][j] + f[i-1][j-1]
            t.push(cur);
        }
        if(i>0){
            t.push(1)
        }
        f.push(t)
    }
    console.log(f)
}
check(5)