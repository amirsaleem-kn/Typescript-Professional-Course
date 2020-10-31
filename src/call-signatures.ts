type Add = { 
    (a: number, b: number): number,
    (a: number, b: number, c?: number): number,
    debugName?: string,
}

const add: Add = (a: number, b: number, c?: number) => {
    return a + b + (c || 0);
}

add(1, 2);
add(1, 2, 4);
console.log(add.debugName);

add.debugName = "Add method defined on line number 6";
