class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head=null;
        this.size = 0;
    }
    add(data){
        let node= new Node(data);
        if(!this.head){
            this.head=node;
            this.size++;
        }else{
            let cur=this.head;
            while(cur.next!= null){
                cur=cur.next;
            }
            cur.next =node;
            this.size++;
        }
        
        return this.head;
    }

    nth_node_from_end(n1){

        let l=0;
        let cur=this.head;
        while(cur.next!= null){
            cur=cur.next;
            l++;
        }
        console.log('length is ', l)
       let n=l-n1+1;
        let current = this.head;
        while (current.next!= null&&n>0) {
            current = current.next;
            n--;
        }
        console.log('nth node is ', current.data)

    }
   

}
let list = new LinkedList();
list.add(20);
list.add(40);
list.add(60);
list.add(80);
console.log(list.add(100))
list.nth_node_from_end(5)
