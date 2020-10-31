type StringDictionary = {
    [key: string]: string
}

type NumberDictionary = {
    [key: number]: string | undefined;
}

const s: NumberDictionary = {
    123: "abc"
};

s[123]