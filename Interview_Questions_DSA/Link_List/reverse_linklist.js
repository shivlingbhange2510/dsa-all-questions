class Node{
    constructor(data){
        this.val=data;
        this.next=null;
    }
}
class LinkList{
    constructor(data){
        this.head=null;
        this.size=0;
    }

    addData(data){
        let node= new Node(data);
        if(!this.head){
            this.head=node
        }else{
            let cur= this.head;
            while(cur.next!=null){
                cur=cur.next;
            }
            cur.next=node;
        }
        this.size++
    }
}
let l= new LinkList();
for(let i=0;i<3;i++){
    l.addData(i*10)
}
console.log(l)