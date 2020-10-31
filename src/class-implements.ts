interface Animal {
    speak: () => void
}

class Dog implements Animal {
    speak() {
        console.log("Animal is speaking...");
    }
}
