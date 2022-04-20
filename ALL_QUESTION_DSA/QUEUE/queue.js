class CreateQue{
    constructor(size){
        this.arr=[];
        this.max_size=size
        this.front=0;
        this.rear=0;
    }

    enqueue(x){
        if(this.rear==this.max_size){
            console.log('Queue is Overflow')
        }
       else{
        this.arr[this.rear]=x;
        this.rear++;
       }
        
    }

    dequeue(){
        if(this.front==this.rear){
            console.log('Queue is underflow');
            return 
        }
        delete this.arr[this.front];
        this.front++;
    }
}

let q= new CreateQue(3);
for(i=1;i<=5;i++){
    q.enqueue(i);
    console.log(q)
}
console.log(q)
q.enqueue(10)
q.dequeue();
console.log(q)
// q.dequeue();


