// unknown
// 어떠한 변수가 동적이기때문에 이 변수의 타입을 알기 위해서 unknown 타입을 제공한다.
// any와 짝으로 any와 같이 아무거나 할당할 수 있다.
// 컴파일러가 타입을 추론하게끔 타입의 유형을 확정해주지 않으면 사용할 수 없다
// unknown 타입을 사용하면 런타임오류를 줄일 수 있다.
// any 대신 unknown을 사용하도록 하자!!

declare const maybe: unknown;
const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;
  const aString: string = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
