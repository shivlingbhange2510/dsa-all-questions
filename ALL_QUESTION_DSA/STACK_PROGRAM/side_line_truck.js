function runProgram(input) {
  lines=input.trim().split('\n');
   line=0;
 while(true){
     var n=parseInt(lines[line]);
     if(n==0){
         break;
     }
     var a=lines[line+1].trim().split(' ').map(Number);
     line=line+2;
      
       console.log(checkSide(a, n))
 }

}
function checkSide(a, n){
    let s=[], next_num=1, a_i=0;
      while(a_i<n||s.length>0){
       if(a_i<n && a[a_i]==next_num){
           a_i++, next_num++;
       }else if(s.length>0 && s[s.length-1]==next_num){
          s.pop();
          next_num++;
           
           
       }else{
           if(a_i < n){
               s.push(a[a_i]);
               a_i++;
           }else{
               return('no')
           }
       }
   }
   if(next_num > n){
       return('yes')
   }else{
       return('no')
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


                                                                                                                                             