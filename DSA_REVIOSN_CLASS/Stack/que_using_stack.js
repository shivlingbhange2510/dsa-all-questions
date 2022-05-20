class Stack {
  constructor() {
    this.st = [];
    this.size = 0;
  }

  push(x) {
    let temp = (this.st[this.size] = x);
    this.size++;
    return temp;
  }
  pop() {
    if (this.size == 0) {
      return `Que is Empty You cant pop `;
    }
    let ele = this.st[this.size - 1];
    let temp = [];
    for (let i = 0; i < this.size - 1; i++) {
      temp[i] = this.st[i];
    }
    this.st = temp;
    this.size--;
    return ele;
  }
  isEmpty() {
    return this.size == 0;
  }
  peak() {
    return this.st[this.size - 1];
  }
}

class Queue {
  constructor() {
    this.S1 = new Stack();
    this.S2 = new Stack();
  }

  enqueue(x) {
    this.S1.push(x);
  }

  dequeue() {
    while (!this.S1.isEmpty()) {
      let temp = this.S1.pop();
      this.S2.push(temp);
    }
    let temp = this.S2.pop();
    [this.S1, this.S2] = [this.S2, this.S1];
    return temp;
  }
  isEmpty_Queue() {
    return this.S1.isEmpty();
  }
  queue_peak() {
    while (!this.S1.isEmpty()) {
      let temp = this.S1.pop();
      this.S2.push(temp);
    }
    let temp = this.S2.pop();
    [this.S1, this.S2] = [this.S2, this.S1];
    return temp;
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
// console.log('Queue', q)
// console.log('after pop : ', q.pp())
console.log("new Queue", q);
// console.log('after pop : ', q.dequeue())
// console.log('after pop : ', q.dequeue())
console.log('after pop : ', q.dequeue())

console.log(q.isEmpty_Queue());
console.log("peak of Queue", q.queue_peak());

// let s=new Stack();
// s.push(10);
// s.push(20);
// console.log('is empty ', s.isEmpty())
// console.log('peak is : ', s.peak())
// console.log('ss', s)
