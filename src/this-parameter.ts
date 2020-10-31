function double(this: { value: number }) { // this assertion
    this.value = this.value * 2;
}

const valid = {
    double,
    value: 0,
}

const invalid = {
    double,
    valve: 0
}

valid.double();
invalid.double(); // OOPS! invalid object is being passed as this to double method, it doesn't contain value method
