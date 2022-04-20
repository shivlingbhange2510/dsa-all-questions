class Queue {
    constructor(max_size) {
        this.q = [];
        this.f = 0;
        this.r = 0;
        this.max_size = 5005;
    }
    eq(x) {
        this.q[this.r] = x;
        this.r++;
    }
    dq() {
        var temp = this.q[this.f];
        this.f++;
        if (this.f == this.r) {
            (this.f = 0), (this.r = 0);
        }
        return temp;
    }
    is_empty() {
        return this.f == this.r;
    }
    get_front() {
        if (this.f == this.r) {
            return "-";
        }
        return this.q[this.f];
    }
}
//  stack start here;
class Stack {
    constructor() {
        this.Q1 = new Queue();
        this.Q2 = new Queue();
    }
    push_ele(value) {
        this.Q2.eq(value);
        while (!this.Q1.is_empty()) {
            this.Q2.eq(this.Q1.dq());
        }
        // let temp=this.Q1;
        // this.Q1=this.Q2;
        // this.Q2=temp;
        [this.Q1, this.Q2] = [this.Q2, this.Q1];
    }
    pop_ele() {
        return this.Q1.dq();
        console.log("pop element is");
    }

    peek() {
        let p = this.Q1.get_front();
        // console.log('peek element is ', p)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    let Q1 = new Stack();
    let Q2 = new Stack();
    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let c = input[line]?.split(" ").map(Number);
        //    [op, el]=c?.map(Number)
        line++;
        //    console.log('is', c)
        if (c[0] == 0) {
            let u = Q2.push_ele(c[1]);
            //    console.log('que2 is ',  Q2, '\n que1 is ', Q1 )
        }
        if (c[0] == 1) {
            Q2.peek();
        }
        if (c[0] == 2) {
            let j = Q2.pop_ele();
            console.log(j);
        }
    }
}
//   function operation(c){
//     [op, el]=c.map(Number);
//    if(op==1){
//           q2.push(el);
//            console.log('uuu ', u)
//        }
//  }
if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
runProgram(`6
0 1
0 2
0 3
1 
2
2
1`);
