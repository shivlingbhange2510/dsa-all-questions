/* call method 
    in js call is used to bind object with other function which don't have 
    context to this or it will be call another method/function  that belongs to another 
    object 
    call method will call another function or method belongs to other object , and it will 
    return value , it only be works for normal fn defined with function keyword
    it won't work with arrow funtion

*/
const user1 = {
    name: 'Aashu',
    contact: 7081549228, //-1 logic ,
    city: 'Gonda',
    degree: 'B.E',
    year: 2018,
    getContacts1: function(){
        console.log("this from getContacts1 inside object ****", this);
        return `I am living in ${this.city} city`;
    }
};

const user2 = {
    name: 'shiv',
    contact: 9975635848 ,
    city: 'Pune',
    degree: 'B.Tech',
    year: 2019
};

function detials(startDate, salary){
    return `my name is ${this.name} I completed my ${this.degree} in ${this.year} 
    and I got my first job in ${startDate}  and salary ${salary}`
}
let call =user1.getContacts1.call(user2, 2025, 400000)
let bind = user1.getContacts1.bind(user2);

console.log("call: \n ", call);
// console.log("bind: \n ", bind());
