function nge(a){
    let n= a.length, x=[];
    for(let i=0;i<n;i++){
        let ans=-1, check=true;
        for(let j=i+1;j<n;j++){
            if(a[j]>a[i]){
                // x.push(a[j]);
                ans=a[j]
                check=!check;
                break;
            }
        }
        x.push(ans)
    }
    console.log('xx', x)
}
// [11, 13, 21, 3] -------> [3,21,13,11]
//  [13,7,6,12]  ---------> [12, 6, 7, 13]
// [ -1, 12, 12, -1 ]
function useStack(a){
    let n=a.length;
    let st=[], ans=[];
    for(let i=0;i<n;i++){
    if(st.length == 0){
        ans.push(-1);
        st.push(a[i]);
    }else{
        while(st.length>0&&st[st.length-1]>a[i]){

        }
    }
    }

}
let y=[11, 13, 21, 3];
y=[13,7,6,12]
nge(y)