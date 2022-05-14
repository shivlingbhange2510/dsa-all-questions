// ()

// generate all balance  paranthesis with 2*n length;
// total no of paranthesis generates is
//  (2*n)!/(n!*(n+1)!) 
let count=0;
function balanceParan(s, open, close, n){
if(s.length==2*n&&s!=""){
    console.log('ss', s)
    count++;
    return
}
    if(open<n){
        balanceParan(s +'(', open+1, close, n);
    }
    if(open>close){
        balanceParan(s+')', open, close+1, n);
    }
}
balanceParan("",0,0,3)
console.log('total count : ', count)
// (2n)!/(n)!(n+1)!    (2*4)! /4!5! --> 7*6*5/4!= 8*7*6*5/4*3*2= 2*2*7/2=1
// protoTypical chaining and typical;
// __ptoto__ it's check  and gives the referance to it's parents referance and check 