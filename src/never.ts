// Below is a never variable, this cannot be assigned to anything
let iamaNever: never;

// utility of never

type Square = {
    kind: "square";
    width: number;
}

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
    if (s.kind === "rectangle") {
        return s.kind;
    }
    if (s.kind === "square") {
        return s.kind;
    }
    let ensureNever: never = s; // since we have handled all types of values, this condition will never occur
    //  the above line forces the other developers to make modifications in the function easily
    return ensureNever;
}
