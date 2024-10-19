/**
 * Polymorphasim means many form 
 * we have one class and we extended same class with some other class , extended class and parent class 
 * has same method name  that we can called as polymorphosim
 * 
 */

class Shape {
    constructor(){

    }
    area(){
        return `this is Shape class having area 0`
    }
}

class Rectangle extends Shape{
    constructor(w, h){
        super();
        this.width=w;
        this.height= h;
    };

    area(){
        return `Area of Rectangle is : ${(this.width*this.height)}`;
    };

}

class Circle extends Shape{
    constructor(r){
        super();
        this.radius=r;
    }
    
    area(){
        const pi=3.14;
        return `Area of Circle is : ${pi*this.radius**2}`;
    };

}

class Triangle extends Shape{
    constructor(base, height){
        this.base=base;
        this.height=height;
        super()
    }
    area(){
        return `Area of Triangle is : ${(this.base*this.height)/2}`;
    }
    
}
function printConsole(params){
    console.log(params);
}

const shape = new Shape()
const rect=new Rectangle(10,10);
const circle = new Circle(10);
printConsole(shape.area());

printConsole(rect.area())
printConsole(circle.area())
