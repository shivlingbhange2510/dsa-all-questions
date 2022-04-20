// https://oj.masaischool.com/status/dbe78840e81247844124131989400cec
// E a, b   here E=push method , a= club no (only have 4 club ), b=roll no;
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
function runProgram(input) {
   input=input.trim().split('\n');
 //   input[line].split(' ').map(Number); line++;
  
    let test=+input[0];
   let line=1;
   let qs=[new Queue(),new Queue(),new Queue(),new Queue()];
   let teams= new Queue();
   for(t=0;t<test;t++){
       let x=input[line].split(' ');
       let y;
       let z;
       
       line++;
       if(x[0]==`E`){
              y=x[1], z=x[2]
           if(qs[y-1].is_empty()){
            
               teams.eq(y);
                 
           }
           qs[y-1].eq(z)
         
       }else{
           let front_t=teams.get_front();
           console.log( front_t, qs[front_t-1].dq());
           if(qs[front_t-1].is_empty()){
               teams.dq();
           }
       }
   }
   
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
 runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`)

                                                                                                                                              