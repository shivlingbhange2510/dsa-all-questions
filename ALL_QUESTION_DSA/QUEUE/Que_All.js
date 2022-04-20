class Queue{
    constructor(max_size){
        this.q=[];
        this.f=0;
        this.r=0;
        this.max_size=5005
    }
    eq(x){
        this.q[this.r]=x;
        this.r++;
    }
    dq(){
        var temp=this.q[this.f];
        this.f++;
        if(this.f==this.r){
            this.f=0, this.r=0;
        }
        return temp
    }
    is_empty(){
        return this.f==this.r;
    }
    get_front(){
        if(this.f==this.r){
            return '-'
        }
        return this.q[this.f];

    }
}
let x= new Queue(5000);
x.eq(10);
x.eq(20);
console.log('xxx ', x.get_front())
console.log(x.dq());
x.dq();

console.log('uuuu', x)
