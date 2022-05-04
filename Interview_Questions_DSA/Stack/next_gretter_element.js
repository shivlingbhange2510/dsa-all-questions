// 11 13 21 3 --> 13 21 -1 -1
// st=[ 11,        ]
// ans=[         ]


const nextGretter=(a)=>{
    let st=[], ans=[];
    let n=a.length;
    for(let i=0;i<n;i++){
       
        while(st.length>0&&ans[ans.length-1]>a[i]){
            ans.pop();
        }
        if(st.length==0){
            st.push(a[i]);
        }else{
            let top= st[st.length - 1];
            if(top<a[i]){
                ans.push(a[i]);
            }else{
                while(st.length>0&&top<a[i])
                ans.push(-1)
            }
        }
    }
    ans.push(-1)
console.log(ans)
}
nextGretter([1,13,21, 3])