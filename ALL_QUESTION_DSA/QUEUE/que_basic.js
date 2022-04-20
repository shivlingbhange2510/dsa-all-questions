class Queue{
    constructor(size){
        this.q=new Queue(5005);
        this.f=0;
        this.r=0;
    }
    is_empty(){
        if(this.f==this.r){
            console.log('Que is Empty')
        }
    }
    eq(x){
        if(this.f==this.max_size){
            console.log('Que is Overflow')
        }
        this.q[this.r]=x;
        this.r++;
    }
    get_front(){
        if(this.f==this.r){
            console.log(-1)
        }
        let front_ele=this.q[this.f];
        this.f++;
        console.log(front_ele)
    }
    de(){
        var temp=this.q[this.f];
        this.f++;
        if(this.f==this.r){
            this.f=0;
            this.r=0;
        }

        return temp;
    }
}