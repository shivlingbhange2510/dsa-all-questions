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
    addTwoLinkList(l1, l2){
        let carry=0;
        let l3=null;
        l3= new Node(-1)
        while(l1||l2){
            let sum=carry;

            if(l1){
                sum=sum+l1.data;
            }
            if(l2){
                sum=sum+l2.data;
            }
            if(sum>9){
                carry=1;
            }else{
                carry=0
            }
            sum=sum%10;
            l3.next=new Node(sum);
            if(l1){
                l1=l1.next;
            }
            if(l2){
                l2=l2.next;
            }
            l3=l3.next;
        }
        return l3.next
    }

    middle() {}
}
