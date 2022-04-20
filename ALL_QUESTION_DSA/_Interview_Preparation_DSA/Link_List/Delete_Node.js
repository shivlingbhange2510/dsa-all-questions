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
    add(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    delete_Node(p) {
        if (p == 0) {
            let temp = this.head;
            this.head = this.head.next;
            this.size--;
            return this.head;
        } else {
            let cur = this.head;
            let prev = null;
            while (cur.next != null && p > 0) {
                prev = cur;
                cur = cur.next;
                console.log("data : ", prev.data);
                p--;
            }
            prev.next = cur.next;
            this.size--;
            return this.head.data;
        }
        this.size--;
    }
}

let list = new LinkedList();
list.add(20);
list.add(40);
list.add(60);
list.add(80);
console.log("dddd : \n ", list.delete_Node(0));
console.log(list);
