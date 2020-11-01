type PersonT = {
    name: string;
    age: number;
    location: string;
}

const john: PersonT = {
    name: "Amir",
    age: 10,
    location: "32 Wall Street",
}

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    const value = obj[key];
    console.log(`Getting, ${key}, ${value}`);
    return value;
}

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
    obj[key] = value;
}

logGet(john, "age");
logGet(john, "contact"); // contact doesn't exists in john

logSet(john, "age", 40);
logSet(john, "age", "40"); // Error