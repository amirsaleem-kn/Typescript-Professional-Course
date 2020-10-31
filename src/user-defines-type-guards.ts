type SquareS = {
    size: number;
}

type RectangleS = {
    width: number;
    height: number;
};

type ShapeS = SquareS | RectangleS;

// instead of returning a boolean we are returning shape as a Square,
// This helps typescript to understand that the parameter passes is a of SquareS type
function _isSquare(shape: ShapeS): shape is SquareS {
    return "size" in shape;
}

function area(shape: ShapeS) {
    if (_isSquare(shape)) {
        return shape.size * shape.size;
    }

    if ("width" in shape) {
        return shape.width * shape.height;
    }

    const _ensure: never = shape; // ensure that all cases of ShapeS are handled in this function
    return _ensure;
}