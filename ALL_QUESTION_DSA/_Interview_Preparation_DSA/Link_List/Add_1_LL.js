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
    addOne(){
        let carry=1;
        let cur=this.head;
        while(cur!=null){
            let node_data=cur.data;
            cur.data=(node_data + carry)%10;
            // check(6)
            carry=parseInt((node_data+carry)/10);
            cur=cur.next;
        }

    }
    check(val){
        if(val>10){
            return('great')
        }else{
            return('bad')
        }
    }

}