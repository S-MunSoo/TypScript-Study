// 타입별칭
// primitive, union , tuple ,function 같은 타입을 다른이름으로 지정하여 사용할 수 있음 반복을 줄여준다.

// Alias Primitive

type MyString = string;
let myStr: MyString = "hello";

// Aliasing Union
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = "shin";

// Aliasing Tuple
type PersonTuple = [string, number];
let another1: PersonTuple = ["shin", 22];
// Aliasing Function

type EatType = (food: string) => void;
