let a=[1,3,2,4];
function ng_left_array(a){
let n=a.length;
let ans=[], st=[];
for(let i=0;i<n;i++){
    if(st.length==0){
        ans.push(-1);
    }else if(st.length>0&&st[st.length-1]>a[i]){
        ans.push(st[st.length-1])
    }else if(st.length>0&&st[st.length-1]<=a[i]){
        while(st.length>0&&st[st.length-1]<=a[i]){
            st.pop()
        }
        if(st.length==0){
            ans.push(-1)
        }else{
            ans.push(st[st.length-1])
        }
    }
    st.push(a[i])
}
console.log('first', ans)
}
ng_left_array(a)