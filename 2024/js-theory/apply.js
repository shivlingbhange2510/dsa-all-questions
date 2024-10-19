/**
 * Apply method 
*/
const user5 = {
    name: 'Aashu',
    contact: 7081549228, //-1 logic ,
    city: 'Gonda',
    degree: 'B.E',
    year: 2018,
    getContacts: function(from,  to, total){
        return `I am living in ${this.city} city from ${from} to ${to} total ${total==to-from ? total : 5} years`;
    }
};

const user6 = {
    name: 'shiv',
    contact: 9975635848 ,
    city: 'Pune',
    degree: 'B.Tech',
    year: 2019
};

function getDetailsUser(from , to , since){
    return`My name is ${this.name} I am from ${this.city} city living from ${from} to ${to}, \n since last ${since} years`
}
let details1 = user5.getContacts.apply(user6, [2010, 2020, 1])
let detials2= getDetailsUser.apply(user5, [2010, 2025, 15])
console.log("details1 : ", details1, '\ndetials2 : ', detials2);