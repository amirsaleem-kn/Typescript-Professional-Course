type NameFields = { firstName: string, lastName: string };

// accepts any type of object, but must contains NameFields
function addFullName<T extends NameFields>(obj: T): T & { fullName: string } { // generic type function
    return {
        ...obj,
        fullName: `${obj.firstName, obj.lastName}`,
    };
}

const person = addFullName({
    firstName: "Amir",
    lastName: "Saleem",
    age: 10
});

class Queue<T> { // generic type class
    public elements: T[] = [];
    num(elem: T) {
        this.elements.push(elem);
    }
}