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
    palindrom() {
        let cur = this.head;
        let stack = [];
        while (cur != null) {
            let temp = cur.data;
            stack.push(temp);
            cur = cur.next;
        }
        let cur2 = this.head;
        while (stack.length > 0 && cur2.next != null) {
            if (stack.pop() !== cur2.data) {
                return false;
            }
            cur2 = cur2.next;
        }
        return true;
        console.log(stack);
    }
}
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(1);
// list.add(20);
console.log(list.palindrom());
