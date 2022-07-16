// Array
// array 두가지 표현 방식
let list: number[] = [1, 2, 3];
let list1: Array<number> = [4, 5, 6];

// union
let list2: (number | string)[] = [1, 2, 3, "4"];

// Tuple : 앞뒤로 다른 타입을 []안에 넣게 된다 순서와 타입 길이가 모두 정확하게 맞아야 된다.
let x: [string, number];

x = ["hello", 22];
x = [10, "shin"]; // error
x = ["2"]; //length error

const person: [string, number] = ["Shin", 22];
const [first, second, third] = person; //인덱스 error
