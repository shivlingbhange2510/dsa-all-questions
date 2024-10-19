// import Admin from "./parent";
const Admin = require('./parent').Admin
class User extends Admin {
    constructor(name,subject) {
        this.subject=subject;
        super(name);
    }


}

const adm1 = new Admin('Kakde', 'Parbhani')

const usr1 = new User( 'Sawandkar' ,'Math')

console.log(usr1);

