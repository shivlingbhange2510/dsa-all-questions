<<<<<<< HEAD
// 11 13 21 3 --> 13 21 -1 -1
// st=[ 11,        ]
// ans=[         ]


const nextGretter=(a)=>{
    let st=[], ans=[];
    let n=a.length;
    for(let i=0;i<n;i++){
       
        while(st.length>0&&ans[ans.length-1]>a[i]){
            ans.pop();
=======
let a=[1,9,5,23,17,7];
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
>>>>>>> 09f203bd8e67be3de863bf65d1e017a5827297d8
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