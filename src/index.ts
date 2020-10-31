const message: string = "Hello World";
console.log(message);

// tuples - arrays of fixed length

const a: [number, number] = [1, 1];

// we can specify readonly members as well
const pixel: { readonly x: number, readonly y: number } = {
    x: 1,
    y: 2,
}

type Point = { x: number, y: number };

const p: Point = {
    x: 1, y: 1,
}

interface Pointa {
    x: number;
    y: number;
}

const z: Pointa = {
    x: 1,
    y: 1
}

let e1: any; // just bypass the type checks
let e2: unknown; // much safe than any, can assign to any variable type but still can gave boundary checks like data type etc

e1 = true
e1 = "Hello World"

e1.to.write.any.method.chain(); // any, just works!

e2 = true
e2 = "Hello World"

// e2.to; // this will throw error as e2 is not of type object

if (typeof e2 === "boolean") { // for unknown we have to add typechecks before we can use them
    const bool = e2
}

// Type Assertions

const hello = (): unknown => {
    return "Hello"
}

(hello() as string).trim(); // as <T> is used to assert the type of any or unknown
(<string>hello()).trim();  // <T>signature is also a valid syntax