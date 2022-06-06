
let cur1=llist1, cur2=llist2;

let temp= new Link();
while(cur1.next&&cur2.next){

    if(cur1.data==cur2.data){
        const node1 =  new SinglyLinkedListNode(cur1.data);
        const node2 =  new SinglyLinkedListNode(cur2.data);
        temp.next=node1;
        temp=temp.next
        temp.next=node2;
        temp=temp.
        cur1=cur1.next, cur2=cur2.next;
    }else if(cur1.data<cur2.data){
        const node1 =  new SinglyLinkedListNode(cur1.data);
        temp.next=node1;
        temp=temp.next
        cur1=cur1.next;
    }else if(cur2.data<cur1.data){
        const node1 =  new SinglyLinkedListNode(cur2.data);
        temp.next=node1;
        temp=temp.next
        cur2=cur2.next;
    }
}