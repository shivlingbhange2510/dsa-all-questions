// merge 2 sored array;
// you are given 2 sorted array after merge this array find the kth element of array;
// https://takeuforward.org/data-structure/k-th-element-of-two-sorted-arrays/


let f = [];
let index = 0;
const merge2Array = (a, b, element) => {
    let n1 = a.length;
    let n2 = b.length;
    // let f=[];
    let j = 0, i = 0;

    while (i < n1 && j < n2) {
        if (a[i] == b[j]) {
            f.push(a[i], b[j]);
            i++, j++;
        } else {
            if (a[i] < b[j]) {
                f.push(a[i]);
                i++
            } else {
                f.push(b[j]);
                j++;
            }
        }
    }
    console.log(i, j)
    while (i < n1) {
        f.push(a[i]);
        i++
    }
    while (j < n2) {
        f.push(b[j]);
        j++
    }

    console.log('first', f, '\n', 'element', f[element - 1])

}
let x = [1, 2, 6, 7, 10], y = [-1, 0, 3, 8, 9, 10];
let p = [2, 3, 6, 7, 9],  q = [-1, 4, 8, 10, 13, 14];
merge2Array(p, q, 5)
class Node {
    constructor(data) {
        this.val = data;
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
                cur = cur.next
            }
            cur.next = node;
        }
        this.size++;
    }
}
let l = new LinkedList()

for (let k = 0; k < f.length; k++) {
    l.add(f[k])
}
console.log(l)