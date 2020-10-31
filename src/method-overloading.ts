function reverse(string: string): string; // overload type 1
function reverse(string: string[]): string[]; // overload type 2
function reverse(string: string | string[]) { // original method which can be called with string or string[]
    if (typeof string === "string") {
        return string.split("").reverse().join();
    } else {
        return string.slice().reverse();
    }
}

const h = reverse("Hello"); // by default typescript infers that this method returns string | string[], but in reality this returns string
const hel = reverse(["H", "e", "l"]); // by default typescript infers that this method returns string | string[], but in reality this returns string[]
