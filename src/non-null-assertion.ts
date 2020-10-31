type P = {
    x: number;
    y: number;
}

let point: P;

function init() {
    point = { x: 1, y: 1 };
}

init();

// Since we have initialised point in an init() method, typescript cannot do deep code analysis and determine
// that the point is still undefined or is initilaised. In these case we can help typescript by using ! operator
console.log(point!.x, point!.y);
