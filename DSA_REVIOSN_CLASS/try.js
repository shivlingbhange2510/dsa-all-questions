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

// q.push(30);
// q.push(40);
// q.push(20)
console.log('stack', p)
// let s= new Queue();
// s.enqueue(10);
// s.enqueue(20);
// s.enqueue(30);
// console.log('first',s)
// s.dequeue()
// s.dequeue()
// s.dequeue()
// s.isEmpty()
// console.log('peak',s.peak(), '\nempty ',s.isEmpty())
// console.log('first', s)