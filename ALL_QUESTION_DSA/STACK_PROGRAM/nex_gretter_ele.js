let a=[1,9,5,23,17,7];
function nge(a){
    
let n=a.length;
a=a.reverse();
let ans=[], st=[];
for(let i = 0; i < n; i++){
    if(st.length==0){
        ans.push(-1);
    }else if(st.length>0&&st[st.length-1]>a[i]){
        ans.push(st[st.length-1]);
    }else if(st.length>0&&st[st.length-1]<=a[i]){
        while(st.length>0&&st[st.length-1]<=a[i]){
            st.pop();
        }
        if(st.length==0){
            ans.push(-1);
        }else{
            ans.push(st[st.length-1])
        }
    }
    st.push(a[i])
}
console.log(ans.reverse())
}
nge(a)