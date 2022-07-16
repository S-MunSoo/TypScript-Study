//  null & undefined
//  null은 무언가(값)이 있는데 사용할 준비가 덜된 상태
//  null은 null 타입값만 가질 수 있다
// undefined는 값을 할당하지 않은 상태 값이 아예 없는 상태
//  object에 property가 없을 때도 undefined이다.

// let myName:string = "null"

let u: undefined = null;
let v: void = undefined; //void는 값을 넣어줘야한다
let union: string | null = null; // union타입은 | 표시 string도 될수잇고 null타입도 될 수 있다 합집합 같은 의미
union = "shin";
