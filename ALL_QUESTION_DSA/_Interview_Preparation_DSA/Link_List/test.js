class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addAtHead(data) {
    const node = new Node(data);
    if (!this.head) {
      // return this.head=node;
      this.head = node;
      this.size++;
    } else {
      let cur = this.head;
      this.head = node;
      this.head.next = cur;
      this.size++;
    }
    return this.head;
  }
  inserAtTail(data) {
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
    return this.head;
  }
}
let l = new LinkList();
// console.log(l)
// l.addAtHead(10)
// l.addAtHead(20)

console.log(l.inserAtTail(10));
console.log(l.inserAtTail(20));
console.log(l.inserAtTail(30));
l.addAtHead(1);
console.log(l);
