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
    add2LL(l1,l2){
        let carry=0;
        let head2=null;
        let node= new Node(0);
        let temp=node;
        let cur1=l1.head;
        let cur2=l2.head;
        console.log('l11 ', cur1);
        while(cur1!=null||cur2!=null){
            let sum=0;
            // let x=
            if(cur1.val!=undefined){
                console.log('cur1 data : ', cur1.val)
                sum=sum + cur1.val
                cur1=cur1.next;
            }
            if(cur2.val!=undefined){
                console.log('cur2 val : ', cur2.val)
                sum=sum + cur2.val
                cur2=cur2.next;
            }
            carry=parseInt(sum/10);
            sum=sum%10;
            temp.next=new Node(sum);
            temp=temp.next;
        }

        if(node.val==0){
            node=node.next;
        }
      return node
    }
}
let l1= new LinkList(), l2=new LinkList();
let  l3=new LinkList();
let j=5, i1=7
for(let i=0;i<3;i++){
    l2.addData(j), l1.addData(i1);i1++;
    j++;
}
console.log(l1, '\n ', l2)
console.log(l3.add2LL(l1,l2))

