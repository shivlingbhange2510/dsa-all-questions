// https://oj.masaischool.com/contest/2623/problem/06
// Delete Nth node from end of the LinkList;

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let len=0
    let cur=head;
    while(cur.next!=null){
        cur=cur.next;
        len++;
         console.log('nn', len)
    }
   
    let new_n=len-n+1;
    let current=head;
    while(current.next!=null&&new_n>0){
        current=current.next;
        new_n--;
    }
    return current.data
}
