//  check if given number is power of x if its power of check what is value of power;

function check(num,x, count){
  
    while(num>=1){
      count++;
      num=num/x;
      if(num==1){
        return(`given num ${num} is power of ${x} and it is ${count}`)
      }
    }
    return(`given num is not power of ${x}`)
  }
  
  console.log('kkk', check(6561,3,0))