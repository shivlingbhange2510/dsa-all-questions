function runProgram(input) {
    input=input.trim().split('\n');
   
   
     let test=+input[0];
    let line=1;
    for(t=0;t<test;t++){
        let a=input[line]; line++;
        
        gift(a);
    }
    
  }
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
        //  return temp;
        console.log('poped e is , tem', temp,)
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
  function gift(a) {
     y = new Queue();
  
     s = a.split("");
     n = a.length;
     let count = {},
         ans = "";
     for (i = 0; i < n; i++) {
         char = s[i];
        
         if (!(char in count)) {
             count[char] = 1;
         } else {
             count[char]++;
         }
         y.eq(char);
 
         while (!y.is_empty()) {
             var f = y.get_front();
          
             if (count[f] == 1) {
              
                 break;
             }else{
                 
             }
             y.dq();
 
           
         }
         if (y.is_empty()) {
             ans = ans + "#";
         } else {
             ans = ans + y.get_front();
         }
     }
     console.log(ans)
 }
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
 
console.log( runProgram(`2
 abadbc
 abcabc`)
)
                                                                                                                                               