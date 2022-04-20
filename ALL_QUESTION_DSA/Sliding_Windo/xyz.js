let s=`abadbc`;
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
a=s.split(''); n=a.length;
count={}, ans='';
let q=new Queue();

function un(a){
for(i=0;i<n;i++){
  let char=s[i];
  
  if(!(char in count)){
    count[char]=1;
  }
  q.eq(char);

  while(! q.is_empty){
    let f=q.get_front();
    if(count[f]==1){
      break;
    }
    q.dq();
  }
  
  if(q.is_empty){
    ans=ans+'#';
  }else{
    ans=ans + q.get_front();
  }
}
console.log(ans)
}
console.log(un(`abadbc`))
// function runProgram(input) {
//     input=input.trim().split('\n');
//   //   input[line].split(' ').map(Number); line++;
   
//    let test=+input[0];
//    line=1;
//    for(t=0;t<test;t++){
//         let n=+input[line];
//         line++;
//         a=input[line].split(' ').map(Number);
//         h=a.sort(function(a,b){
//             return a-b;
//         })
//         line++;
//      let max=h[n-1],y;
//      let sum=0;
//      for(i=0;i<k;i++){
//          sum=sum+a[i];
//      }

//       max=Math.max(sum,max)
//      for(j=k;j<n;j++){
//          sum=sum - a[j-k];
//          sum=sum + a[j]
//           max=Math.max(max,sum );
//      };
//      console.log( max)
//    }
    
//      // let max_sum = Number.NEGATIVE_INFINITY;
    
//  }

 
     
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });	
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
  

 
                                                                                                                                               