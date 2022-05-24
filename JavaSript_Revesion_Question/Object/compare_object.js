let obj={
    name:"shiv",
    age :22
}
let obj2={
    name:"shiv",
    age:22
}

console.log("first : ", obj==obj2)
console.log("Object is Object.is(obj1, obj2)",Object.is(obj, obj2))