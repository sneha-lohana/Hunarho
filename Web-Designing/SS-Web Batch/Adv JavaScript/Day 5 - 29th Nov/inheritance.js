class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hi "+ this.name);
        
    }
}
class Student extends Person{
    constructor(name, rollno){
        super(name); //Parent constructor
        this.rollno = rollno;
    }

    sayHello(){
        console.log("Hello My name is " + this.name + " and my roll no is " + this.rollno);
    }
    // overridding a method
    sayHi(){
        super.sayHi()
        console.log("Student says Hi!");
        
    }
}

let stud = new Student("Ajay", 3);
stud.sayHello();
stud.sayHi();