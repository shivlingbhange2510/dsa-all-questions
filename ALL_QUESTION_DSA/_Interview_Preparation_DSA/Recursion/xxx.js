function runProgram(input) {
   input=input.trim().split('\n');
 //   input[line].split(' ').map(Number); line++;
  
    let [n,t] =input[0].split(' ').map(Number);
    let line=1;
    let a =  input[line].split(' ').map(Number);
    subSets(subseq='', arr=a,idx=0);
     sumIs(p=sub_arr,x=t)
 }
 var sub_arr=[], count=0;

 function subSets(subseq, arr,idx, x){
     if(idx==arr.length){
         sub_arr.push(subseq);
       
         return;
     }
     subSets(subseq+arr[idx], arr, idx+1,x);
     subSets(subseq, arr, idx+1,x);
 }

function sumIs(p,x){
    for(i=0;i<p.length;i++){
        if(p[i]!=''){
            let y =p[i].split("").map(Number);
            let sum = y.reduce(function(a,b){
                return a+b;
            })
            if(x==sum){
                console.log(p[i].split(''), sum)
                count++;
            }
        }
    }
    console.log(count);
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


                                                                                                                                              