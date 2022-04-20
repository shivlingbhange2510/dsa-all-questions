// https://oj.masaischool.com/contest/2623/problem/05

let Node = class{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor() {
        this.head=null;
        // this.next=null;
        this.size=0;
    }

  addData(data){
      let node= new Node(data);
      if(this.head == null){
          this.head=node;
          this.size++;
      }else{
          let current=this.head;
          while(current.next){
              current = current.next;
          }
          current.next= node;
          this.size++;
      }
   let print=this.head, p=0;
   while(print){
    //    console.log('before reverse data : ',print.data, 'index  ', p++);
       print=print.next;
   }    
  }

  reversLink(){
      let arr=[];
      let cur=this.head;
      while(cur !=null){
          arr.push(cur)
          cur=cur.next;
      }
      let new_head=null;
      new_head=arr.pop();
      let curIs = new_head;
    //   console.log('new head ', new_head)
      while(arr.length>0){
        // console.log('temp data ', curIs.data)
          let temp=arr.pop();
          curIs.next=temp;
          curIs=temp;
      }
      curIs.next=null;
    //   console.log('arr after empty is ', arr)
    let xx=new_head, ind=0;
    while(xx){
        // console.log('after reverse ', xx.data,  ' index ', ind++);
        xx= xx.next;
    }
    

      }

  }
let list= new LinkedList();
list.addData(20);
list.addData(30);
list.addData(40);
console.log('first ', list)

list.reversLink();
console.log('after reverse', list)