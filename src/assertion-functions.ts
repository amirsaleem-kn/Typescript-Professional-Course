function assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
        throw new Error(message)
    }
}

function assertDate(value: unknown): asserts value is Date {
    if (!(value instanceof Date)) {
        throw new Error("Value must be of type Date");
    }
}

function loadPerson(){
    if (Math.random() < 0) {
        return null;
    }
    return {
        name: "Amir"
    };
}

const maybePerson = loadPerson();
assert(maybePerson != null, "Could not load person");
console.log(maybePerson.name);
