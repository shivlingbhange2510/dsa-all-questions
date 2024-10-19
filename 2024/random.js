function test (name, addres){
    this.name=name;
    this.addres=addres
    let p = new String('ss');
    console.log("type", typeof p, JSON.stringify(p));

    // console.log("this");
    // return this.name + this.addres
}

let f= new test('shiv', 'aashu')
console.log("f",f);

let a= [1,8,9, '-1'];
a[-1]=90
a['shiv']=89

console.log('aa', a, a.length);

let str ='shiv';

for( let key in a ){
    console.log("key", key ,':', "val", ':', a[key]);
}

console.log("**********************inside string**************************");

for(key of a){
    console.log("key is ", key);
}

let obj = {
    name:'aashu',
    city: 'Gonda'
}

for(let key in obj){
    console.log("object key is ", key, 'value is ', obj.key);
}

console.clear();
let a1='shivling bhange';
console.log(a1.split(' '));


let c= {
    india: 'Delhi',
    'USA':'Washington'
}
for(let key in c){
    console.log("key is ", c.key);
}
console.log(c.india);

console.clear();

let o = {
    a:1,
    c:2,
    // __proto__ : {
    //     c:90,
    //     d:87
    // },
    f: {
        n:90
    }
};

console.log("ooo is ", o.c, o.hasOwnProperty("n"), o.d, '\n prtotype', o.__proto__.__proto__);