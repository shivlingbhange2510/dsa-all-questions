const obj = {
    name: 'Aashu',
    city: 'Gonda',
    no: 7081549228 //logic
}
Object.defineProperty(obj, 'dd',{
    degree: 'B.E',
    enumerable: true

})
// obj.p
obj.pro

// Object.defineProperty(obj, 'ssn', {
//     value: '123-45-6789',
//     enumerable: false
// });

// this['degree']= 'B.E'

console.log("object is ", obj, obj['degree']);