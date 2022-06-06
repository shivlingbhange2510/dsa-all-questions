// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    const node=new SinglyLinkedListNode(data);
    if(!llist){
        llist=null;
    }else if(position==0){
        let cur=llist;
        llist=node;
        llist.next=cur;
    }else{
        let cur=llist;
        let prev=null;
        let c=0;
        while(c<position){
            prev=cur;
            cur=cur.next;
            c++;
        }
        prev.next=node;
        node.next=cur;
    }
return(llist)
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}