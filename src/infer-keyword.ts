type IsArray<T> = T extends Array<any> ? "array" : "other";

type WithArray<T> = IsArray<string[]>;
type WithoutArray<T> = IsArray<string>;

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxedStringArray = UnboxArray<string[]>

function createPerson(firstName: string, lastName: string) {
    return {
        firstName,
        lastName,
        fullName: firstName + " " + lastName
    }
}

function logPerson(person: ReturnType<typeof createPerson>) {
    console.log(person.fullName)
}
