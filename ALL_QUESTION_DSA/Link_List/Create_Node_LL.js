class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
function details(name, mobileNo){

    this.name=name;
    this.mobileNo=mobileNo;
    
}
let user1= new details('shiv', 9975635849)
let node =new Node(user1);
let secon_Node=new Node(50)
console.log('new user details are : ', node)
console.log('2nd node is ', secon_Node)