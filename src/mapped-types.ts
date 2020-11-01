type PS = {
    x: number;
    y: number;
    z: number;
}

const Center: Readonly<PS> = {
    x: 0,
    y: 0,
    z: 0
}

Center.x = 10; // Center is readonly
