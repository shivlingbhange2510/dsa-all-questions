class Node {
    constructor(element) {
        this.val = element;
        this.next = null;
    }
    // head=null;
    //     add(ele){
    //         // this.head= null
    //         let new_node= new Node(ele);
    //         if(this.head == null){
    //             this.head=new_node;
    //         }else{
    //           var  current=this.head;;
    //             while(current.next){
    //                 current = current.next;
    //             }
    //             current.next = new_node;
    //         }
    //     }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // add element in LL
    addElemet(data) {
        var new_node = new Node(data);
        // console.log( new_node)
        if (this.head == null) {
            this.head = new_node;
            this.size++;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new_node;
            this.size++;
        }
    }
    printLinkList() {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log("current val is: ", current.val, "index is: ", index++);
            current = current.next;
        }
    }
    addAtEnd(data) {}
    // link list is empty;
    isEmpty() {
        console.log(this.size == 0 ? "true" : "false");
    }
    sizeOfLinkList() {
        console.log("size of:  ", this.size);
    }
    insertAtIndex(element, indexNo) {
        let node = new Node(element);
        let current = this.head;
        console.log("in insertednode function ");
        let prev = null;
        if (indexNo > this.size || (indexNo < 0 && this.size)) {
            console.log("invalid index no", false);
        } else {
            if (indexNo == 0) {
                node.next = current;
                this.head = node;
                this.size++;
                // console.log('inserted data ', node)
            } else {
                let i = 0;
                while (i < indexNo) {
                    prev = current;
                    // console.log('last prev is is ', prev)
                    current = current.next;
                    i++;
                }
                // console.log("last prev is is ", prev);
                // console.log("next of prev  is ", prev.next);
                // console.log("***current is ***", current);

                // insert at node at indexNo.
                prev.next = node;
                // move to the inserted node
                prev = prev.next;
                // add rest of  the current to the next node
                prev.next = current;
                this.size++;
            }
        }
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        while (current.next!= null) {
            // console.log('inside remove,', current.val)
            if (current.val == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                console.log("removed elemet is ", element);
                return true;
            }
            current=current.next;
        }
    }
}
let list = new LinkedList();
// console.log('before adding node LL is ', list)
list.addElemet(30);
list.addElemet(89);
list.addElemet(40);

// list.isEmpty();
list.sizeOfLinkList();
list.insertAtIndex(55, 2);
// console.log(list);
list.printLinkList();
list.removeElement(30);
list.printLinkList();
console.log(list);
