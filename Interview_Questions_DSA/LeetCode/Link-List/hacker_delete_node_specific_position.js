// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
'use strict';

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

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};


function deleteNode(llist, position) {
    // Write your code here
    if(position==0){
        llist=llist.next;
    }else{
        let cur=llist, prev=null;
        while(position>0){
            prev=cur;
            cur=cur.next;
            position--;
        }
        prev.next=cur.next;
    }
    return(llist)
}

