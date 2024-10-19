const admin = new Admin('shiv', 9987)
 class Admin {

    constructor(name, no){
        this.name=name;
        this.no=no;
        console.log("hiii", this, no);
    }

    getDetails(){
        return `my name is ${this.name} no is ${this.no}`
    }
}


class User extends Admin{
    constructor(name, no, role){
        // this.name=name;
        // this.no=no;
        this.role=role;
        super(name, no)
    }
}