function runProgram(input) {
  input=input.trim().split('\n');
//   input[line].split(' ').map(Number); line++;
 
   let test=+input[0];
  let line=1;
  for(t=0;t<test;t++){
      n=+input[line]; line++;
      let a=input[line].split(' ').map(Number);
      line++
       nextGretter(n,a)
  }
  
}
function nextGretter(n,a){
    a=a.reverse(function(a,b){
        return a-b;
    })
    s=[], g=[];
    for(i=0;i<n;i++){
        while(s.length>0&&s[s.length-1]<=a[i]){
            s.pop();
        }
        if(s.length==0){
            g.push(-1)
        }else{
            g.push(s[s.length-1])
        }
        s.push(a[i])
    }
    let d=g.reverse();
    d=d.join(' ');
    console.log(d)
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

// runProgram(`1
// 8
// 39 27 11 4 24 32 32 1`)

runProgram(`1
5
11 13 23 2 1`)

                                                                                                                                             