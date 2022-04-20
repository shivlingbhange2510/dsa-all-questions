class Queue{
    constructor(){
        this.q=new Array();
        this.front=0;
        this.rear=0;
    }

    is_empty(){
        if(this.front=this.rear){
            return 'Que is Empty'
        }
        
    }
    get_front(){
        if(this.front == this.rear){
            return 'is Empty Queue'
        }
         return this.q[this.front];
    }

    eq(x){
        this.q[this.rear]=x;
        this.rear++;
        return this.q
    }
    de(){
        let temp=this.q[this.front];
        this.front++;
        if(this.front == this.rear){
            this.front=0;
            this.rear=0;
        }
        return 'front is ' +temp;
    }
}
let s= new Queue();
s.eq(10);
console.log('ss', s);
s.eq(5)

// let e=s.eq(100);
// console.log('eee ', e)
// console.log(s.eq(10), s.is_empty());

console.log('stack is ', s)
s.de();
console.log('After Deque Stack is ', s)
s.de();
console.log('After Deque Stack is ', s)
let f= s.get_front();
console.log('front is ', f)
