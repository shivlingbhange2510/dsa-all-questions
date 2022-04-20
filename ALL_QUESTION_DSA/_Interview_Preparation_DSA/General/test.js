const { ReadableStreamDefaultController } = require("node:stream/web");

function liesBetween(a, k) {
    a = a.sort((a, b) => a - b);
    let low = 0;
    let n = a.length;
    let high = n - 1;
    let ans = 0;
    a = a.sort((a, b) => a - b);
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (a[mid] == k) {
            ans = mid;
            break;
        }
        if (a[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
   return(ans);
}



function check(a, t) {
    let n = a.length;
    let low = 0;
    ans = null;
    high = n - 1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] == t) {
            ans = "YES";
            break;
        } else if (a[mid] < t) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (ans) {
        console.log(ans);
    } else {
        console.log("NO");
    }
}

function liesBetween(a, k) {
    let low = 0;
    let n = a.length;
    let high = n - 1;
    let ans = 0;
    a = a.sort((a, b) => a - b);
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (a[mid] == k) {
            ans = mid;
            break;
        }
        if (a[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
// let x=liesBetween([10,20,30,40,50,60],20)
// let y=liesBetween([10,20,30,40,50,60],50)
// let l= +x - +y;
// f=Math.abs(l)+1;
// console.log('final ',f);
// 1,2,3,4,5,6,8,10,14,17, t=3;


function liesBetween(a,k){
    a=a.sort((a,b)=>a-b)
   let low=0;
   let n=a.length;
   let high=n-1;
   let ans=0;
   a=a.sort((a,b)=> a-b)
   while(low<=high){
       let mid = low + parseInt((high - low) / 2);
       if(a[mid]==k){
           ans=mid;
           break;
       }
       if(a[mid]>k){
           high=mid-1;
       }else{
           low= mid + 1;
       }
   }
   return ans
}

function runProgram(input) {
  input=input.trim().split('\n');
   console.log(input);
//   input[line].split(' ').map(Number); line++;
 
   let n=+input[0];
      let line=1;
   let a = input[line].split(' ').map(Number); line++;
   let test=+input[line];line++;

  for(t=0;t<test;t++){
       let[x1,x2]=  input[line].split(' ').map(Number); line++;
       let x=liesBetween(a,x1)
       let y=liesBetween(a,x2)
       // console.log('x ',x, 'y')
       let l= +x - +y;
       f=Math.abs(l)+1;
       console.log(f);
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
10 1 10 3 4
4
1 10
2 9
3 4
2 2
`)

                                                                                                                                             