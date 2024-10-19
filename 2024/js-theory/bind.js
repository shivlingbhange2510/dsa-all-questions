/**
 * bind method will be bind given object with another function or method which don't
 * own this method or function 
 * it will be return value is function
 * Difference between bind  and call method is 
 * bind method  return value is another function 
 * call method will directly return  value or exucted function value
 */

const user3 = {
    name: 'Aashu', 
    contact: 7081549228, //-1 logic ,
    city: 'Gonda',
    degree: 'B.E',
    year: 2018,
    getContacts: function(){
        // console.log("this value inside getContacts ", this);
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

function getDetails(percentage){
    // console.log("this from getDetails : *******", this);

    return `my name is ${this.name} I am from ${this.city} I completed my ${this.degree} with ${percentage} marks `
}
const contact1 = user3.getContacts.bind(user2)
const detials1 = getDetails.bind(user2, '90%')
console.log("contact1 : ", contact1, '\ndetails : ', detials1); // this line will be give function we have to
// execute above  function
console.log("execute contact1 bind function : ", contact1(), '\nexecuted details1 bind function : ', detials1());

