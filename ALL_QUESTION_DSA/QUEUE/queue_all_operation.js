// Today's Class
// Introduction to Queues
class Queue {
    constructor (size) {
      // Each object of this class will
      // have these properties/ variables
    
        this.Q = new Array(size)
        //declaring a new array of length = size
        this.max_size = size
        this.front = 0
        this.rear = 0
    }

    get_front() {
        if (this.front == this.rear) { //Empty q
            console.log("underflow")
            return
        }
        return this.Q[this.front-1];
    }

    enqueue(x) {
        if (this.rear == this.max_size) {
            console.log("overflow")
            return
        }
        this.Q[this.rear] = x
        this.rear++
    }

    dequeue() { // Remove Front Element
        if (this.front == this.rear) {
            console.log("underflow")
            return
        }
        var temp = this.Q[this.front]
        this.Q.shift()
        this.front++
        if (this.front == this.rear) { //Empty Q
            this.front = 0
            this.rear = 0
        }
        return 'temp is '+temp;
    }
}


// Queue is FIFO
// First in first Out


var q = new Queue(); 
let x=q.enqueue(5);
x=q.enqueue(50);
console.log('xx', q)
let d=q.dequeue();
d=q.dequeue();
console.log('deque is element is ', d, ' *****que is**** ', q);
console.log('get front element ', q.get_front())

// var p = new Queue(50);

