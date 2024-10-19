 class Admin {
    constructor(name, city){
            this.name=name;
            this.city=city
    }

    getCityName(){
        return`I am from ${this.city}`
    }
    getName(){
        return`My name is ${this.name}`
    }
}



modole.exports={Admin}