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
    }

    middle() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.data;
    }
}
let list = new LinkedList();
list.add(20);
list.add(40);
list.add(60);
list.add(80);
console.log(list.middle());
