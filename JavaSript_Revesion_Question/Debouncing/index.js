let count=0;
function callApi(){
count++;
// console.log('count is ', count, '\n', new Date());
console.log('call api ....... ', count)
}

function debounce(otherFn, delay){
let timer;
    return function(){
        let context=this, arg=arguments;
        clearInterval(timer)
      timer=  setTimeout(()=>{
            otherFn.apply(context, arguments);
            // in line number we can direct pass same fn() without apply method;
        }, delay)
    }
}

const reduceNwkcall=debounce(callApi, 2000)