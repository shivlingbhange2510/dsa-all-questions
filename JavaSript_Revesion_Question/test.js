console.log('hiii');
let obj={
    name:'shiv',
    sum: function(a,b){
        return(a+b);
    }
};
let obj2={
    name:'Sachin',
    sub: function(a,b){
        return(a-b)
    }
}
console.log('first', obj.sum(10,20))
// obj.__ptoto__=obj2;
obj.prototype=Object;
// Object.prototype=
console.log('object 1', obj.prototype)

let a={
    c:'xxx'
}
console.log('aaa', a)