class Stack {
    constructor(max_length) {
        this.arr = [];
        this.top = -1;
        this.max_length=max_length;
    }

    push(x) {
        this.top++;
        this.arr[this.top] = x;
    }
    pop() {
        // thss.arr[t]
         var top_ele ;
        top_ele= this.arr[this.top];
        this.top--;
    //    console.log('top el', top_ele)
    console.log('pppp\n', top_ele)
    }
    peak() {
        if (this.top == -1) {
            console.log("stack is empty");
        }
    }
}

let r= new Stack(1);
let h= new Stack(5);
console.log('hhhh', h)
for(i=0;i<5;i++){
    // r.push(i)

}
r.push(100);
r.push(1)
console.log(r)
r.pop()
console.log('after pop stack ', r)

r.pop()
console.log('after pop stack ', r)
r.push(20);
console.log('after removing 1', r)