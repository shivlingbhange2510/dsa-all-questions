class Queue{
  constructor(){
      this.q=[];
      this.size=0;
      this.front=0;
      this.rear=0;
  }

  enqueue(x){
    let temp=  this.q[this.size]=x;
      this.size++;this.rear++;
      return(temp)
  }
  dequeue(){
      if(this.size==0){
          return("Que is empty you cant dequeue ")
      }
      let ele=this.q[this.front];

      let temp=[];
      for(let i=1;i<this.size;i++){
          temp[i-1]=this.q[i];
      }

      this.q=temp;
  //   let x=  this.q.shift()
      this.size--;
      // this.front++;
      this.rear--
      if(this.front== this.rear){
          this.front=0, this.rear=0;
      }
      return(ele);
  }
  isEmpty(){
      return( this.size==0)
  }
  peak(){
      if(this.size==0){
          return("No element in que peak")
      }
      return(this.q[this.front])
  }
}

class Stack{
  constructor(){
      this.S1 = new Queue();
      this.S2=new Queue();
  }

  push(x){
      this.S2.enqueue(x);
      while(!this.S1.isEmpty()){
          // console.log('empty', this.S1.isEmpty())
          let temp= this.S1.dequeue();
          this.S2.enqueue(temp);
      }
      [this.S1,this.S2]=[this.S2, this.S1];
      
      return(x)
  }
  pop(){
     let x= this.S1.dequeue();
     return(x)
  }
  top(){
      return(this.S1.peak())
  }
  empty(){
     return( this.S1.isEmpty())
  }
}

let p=new Stack();
p.push(10);
console.log('top is ', p.top())
p.push(20);
console.log('pp is : ', p.pop())
console.log('top is ', p.top(), p.empty())
console.log('pp is : ', p.pop())
console.log('pp is : ', p.pop())
p.push(50);
console.log('top is ', p.top(), p.empty())


console.log('stack', p)

// class Queue {
//   constructor() {
//     this.front = 0;
//     this.rear = 0;
//     this.q1 = [];
//     // this.q2 = [];
//     this.size1 = 0;
//     // this.size2 = 0;
//   }

//   enqueue(x) {
//     let temp = (this.q1[this.size1] = x);
//     this.rear++;
//     this.size1++;
//     // return(this.q1)
//     // console.log('Enqueue element is : ',temp )
//   }

//   dequeue() {
//     if (this.rear == 0) {
//       return "queue is empty please add elements in queue";
//     } else {

//       let temp = this.q1.shift();
//       this.front++;
//       this.size1--;
//       // console.log("deque ele is ", temp);
//       if (this.front == this.rear) {
//         (this.front = 0), (this.rear = 0);
//       }
//       return temp;
//     }
//   }

//   isEmpty() {
//     // console.log(`Que is Empty Now : ${this.front==this.rear}`)
//     return this.front == this.rear;
//   }
//   peak() {
//     console.log('before peeak *****', this.q1)
//     if (this.front == this.rear) {
//       return "empty stack";
//     }
//     // this.q1[this.front];
//     // console.log('Peak of queue is ', this.q1[this.q1.length-1])
//     return this.q1[this.front];
//   }
// }

// class Stack {
//   constructor() {
//     this.Q1 = new Queue();
//     this.Q2 = new Queue();
//   }

//   push_is(x) {
//     this.Q2.enqueue(x);
//     while (!this.Q1.isEmpty()) {
//       let temp = this.Q1.dequeue();
//       this.Q2.enqueue(temp);
//     }
//     [this.Q1, this.Q2] = [this.Q2, this.Q1];
//   }
//   pop_is() {
//     // console.log('before dequeue', this.Q1)
//     let temp = this.Q1.dequeue();
//     // this.front++;
//     return(temp)
//   }
//   peakIS() {

//     // console.log('peak of Stack is : ', this.Q1.peak())
//     // while(){
//     //   let temp=this.Q1.dequeue();
//     //   console.log('temp is ', temp)
//     //   this.Q2.enqueue(temp)


//     // }
//     return this.Q1.peak();
//   }
// }

// let n = new Queue();
// n.enqueue(10);
// n.peak();
// n.enqueue(20);
// n.enqueue(30);
// // n.dequeue();
// n.dequeue();
// n.dequeue();

// n.isEmpty();

// console.log("first", n);
// console.log("************************************************");
// let s = new Stack();
// s.push_is(-4);
// console.log("peak is ", s.peakIS());
// s.push_is(-8);
// console.log('pop is ', s.pop_is())
// console.log("peak is 2nd", s.peakIS());

// s.push_is(-12);
// // s.peakIS();
// console.log("first");
// console.log("stack is ", s);
// // s.pop_is(-5)
