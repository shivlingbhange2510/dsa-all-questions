let a=[1,1,2,2,3,3,3,4,4,4];
let st=[];
for(let i=0;i<a.length;i++){
  if(st.length==0){
    st.push(a[i]);
  }else{
    if(st[st.length-1]!=a[i]){
      st.push(a[i]);
    }
  }
}
console.log("st ", st)