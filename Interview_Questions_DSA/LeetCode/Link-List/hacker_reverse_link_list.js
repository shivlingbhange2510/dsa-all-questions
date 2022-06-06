// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem

function reversePrint(llist) {
    if(!llist){
        return
    }
    let st=[],  cur= llist;
    while(cur){
        let temp=cur;
        st.push(temp);
        cur=cur.next;
    }
  
    let new_head= st.pop();
    console.log(new_head.data)
    let cur2=new_head;
    while(st.length>0){
        let temp=st.pop();
        console.log(temp.data)
        cur2.next=temp;
        cur2=cur2.next;
    }
    cur2.next=null;
    // console.log(new_head)

}