class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    head1(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            node.next = this.head;
            this.head = node;
            this.size++;
            // return this.head;
        }
    }
}
let list = new LinkedList();
list.head1(500);
list.head1(10);
console.log(list);
