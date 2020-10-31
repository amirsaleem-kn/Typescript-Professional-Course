
// as we can see we have to write name and age 3 times

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public printAge() {
        console.log(this.age);
    }
}

// the shortcut to the above person would be

class SmartPerson {
    constructor(public name: string, public age: number) {} // one liner to declare, parametrise and assign

    public printAge() {
        console.log(this.age);
    }
}

const adam = new Person("Adam", 12000);
const smartAdam = new Person("SmartAdam", 12000);