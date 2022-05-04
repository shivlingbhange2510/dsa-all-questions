// you are given an integer find this number is even or odd;
// contrain :
// a) don't use Arthmatic operations


// if we add 
//  if we did odd number with anding 1 it gives 1 as final_answer
// 10&1 --->0   11&1 ---->1
 const findOddEven=(num)=>{
     let a=1;
     let b=num;
     let num2=num.toString(2);
     a=a.toString(2);
     let manupulate = a&num2;
     if(manupulate==0){
         console.log('even')
     }else{
         console.log('odd no')
     }

 }
 findOddEven(101)