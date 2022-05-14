let count=0;
function callApi(){
count++;
console.log('count is ', count, '\n', new Date());
}

function debounce(otherFn, delay){
let timer;
    return function(){
        let context=this, arg=arguments;
        clearInterval(timer)
      timer=  setTimeout(()=>{
            otherFn.apply(context, arguments);
        }, delay)
    }
}

const reduceNwkcall=debounce(callApi, 2000)