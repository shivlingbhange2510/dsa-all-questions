console.log('hiii')
class Stack{
    constructor(){
        this.arr = []
        this.length = 0;
    }

    push(ele){
        this.arr[this.length] = ele;
        this.length++;
    }
    pop(){
        delete this.arr[this.length-1];
        this.length--;
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }
    peek(){
        return this.arr[this.length-1];
    }
}
var s1 = new Stack();
s1.push("a");
console.log(s1.peek())
var s2 = new Stack();

