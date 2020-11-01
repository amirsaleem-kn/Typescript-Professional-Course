import { isNamedTupleMember } from "typescript"

type IsNumber<T> = T extends number ? "number" : "other"

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;
