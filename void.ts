// void
// 어떤 타입도 가지지 않는 빈상태를 말한다

function returnVoid(message: string): void {
  console.log(message);
  return undefined;
}
// void를 가진 함수는 함수의 리턴값을 가지고 무엇을 아무것도 사용 하지 않겠다는 뜻
const ar = returnVoid("리턴이없다.");
