// 1)

function foo(x = 11, y = 31) {
    console.log( x + y );
  }
  
  foo(null, 6);
  foo(undefined, 6);
//    IF PARAMETER VALUE IS UNDEFINE THEN IT KEEP ORIGNAL VALUE OTHERWISE IT REPLACE VALUE;
//   OP  6, 17