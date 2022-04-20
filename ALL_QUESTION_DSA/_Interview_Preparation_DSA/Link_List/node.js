class Node {
    constructor(element){
        this.element=element;
        this.next=null;
        
       
    }
// head=null;
//     add(ele){
//         // this.head= null
//         let new_node= new Node(ele);
//         if(this.head == null){
//             this.head=new_node;
//         }else{
//           var  current=this.head;;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = new_node;
//         }
//     }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size = 0;
    }
    addElemet(data){
        var new_node = new Node(data);
        if(this.head == null){
            this.head= new_node;
        }else{
            let current= this.head;
            while(current.next!= null){
                current=current.next;
            }
            current.next=new_node;
        }
        this.size++;
    }
    
}
let list = new LinkedList();
console.log('before adding node LL is ', list)
list.addElemet(30)
console.log('LL is :', list)
// let node = new Node()
// node.add(40)
// node.add(50)
// console.log(node)