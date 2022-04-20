
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// oj LINK : https://oj.masaischool.com/contest/3632/problem/03  --> insert At Position
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertAtPosition(data, position) {
        let new_node = new Node(data);
        if (this.head == null) {
            this.head = new_node;
            this.size++;
        } else {
            if (position == 0) {
                new_node.next = this.head;
                this.head = new_node;
                this.size++;
            } else {
                let cur = this.head;
                for (let i = 0; i < position - 1; i++) {
                    cur = cur.next;
                }
                // // above for loop run still position -2
                // 0           1               2           3           4
                // 20|next ---> 30|next ---> 40|next ---> 50|next ---> 60|null
                new_node.next = cur.next;
                cur.next = new_node;
                this.size++;
            }
        }
    }
    printLinkList() {
        let current = this.head;
        let i = 0;
        while (current) {
            console.log("data is : ", current.data, "I is  : ", i++);
            current = current.next;
        }
    }
    reverseLinkList() {
        let arr=[];
        let current=this.head;
       
        while(current){
            arr.push(current);
            current = current.next;
        }
        
        let new_head=null;
        new_head=arr.pop();
        let cur=new_head;
   
        while(arr.length>0){
            let temp = arr.pop();
               cur.next=temp;
            cur=temp;
       
        }
        cur.next=null;
        let current2 = new_head;
        let i = 0;
        console.log('After Reversing Link  \n ')
        while (current2) {
            console.log("data is : ", current2.data, "Index is : ", i++);
            current2 = current2.next;
        }
    }
      
}
let list = new LinkedList();
console.log('Orignal Link List \n')
list.insertAtPosition(50, 0);
list.insertAtPosition(30, 1);   
list.insertAtPosition(222, 2);   
console.log(list.printLinkList())
 list.reverseLinkList();
