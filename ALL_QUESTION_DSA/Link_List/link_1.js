class Node {
    constructor(val){
        this.data=val;
        this.next= null;
    }
}
let head =null;
function add_bening(val){
    let new_node = new Node(val);
    new_node.next=head;
    head=new_node;
    // return head
}
let x= new Node();
 
console.log(x.add_bening(200))