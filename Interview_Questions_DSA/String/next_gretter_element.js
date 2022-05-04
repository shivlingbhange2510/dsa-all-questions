let st=[], ans=[];
// let a=[10,4,5,8,100,15];
let a=[1,9,5,23,17,5];
let n=a.length;
for(let i=n-1;i>=0;i--){
    if(st.length==0){
        ans.push(-1);
    }else if(st.length>0&&st[st.length-1]>a[i]){
        let top=st[st.length-1];
        ans.push(top);
    }else if(st.length>0&&st[st.length-1]<=a[i]){
        while(st.length>0&&st[st.length-1]<=a[i]){
            st.pop();
        }
        if(st.length==0){
            ans.push(-1);
        }else{
            ans.push(st[st.length-1]);
        }
    }
    st.push(a[i]);
}
console.log('first', ans.reverse())