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

    merge_Two_Link_List(l1, l2) {
        let cur = null,
            new_head = null;
        while (l1 != null && l2 != null) {
            if (l1.data > l2.data) {
                let temp = l1;
                l1 = l1.next;
                temp.next = null;
                if (cur == null) {
                    this.head = temp;
                    cur = temp;
                } else {
                    cur.next = temp;
                    cur = cur.next;
                }
            } else {
                let temp = l2;
                l2 = l2.next;
                temp.next = null;
                if (cur == null) {
                    this.head = temp;
                    cur = temp;
                } else {
                    cur.next = temp;
                    cur = cur.next;
                }
            }
        }
        if (l1.next != null) {
            cur.next = l1;
        } else {
            cur.next = l2;
        }
        return this.head;
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
}
let list = new LinkedList();
let list1 = new LinkedList();
let list2 = new LinkedList();
list1.add(1);
list2.add(2);
list2.add(3);
// console.log(list1, "\n ", list2);
console.log(list.merge_Two_Link_List(list1, list2));
console.log("\n merge list is : \n ", list);
