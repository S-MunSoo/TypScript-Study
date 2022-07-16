// Any : 어떠한 타입도 허용한다
// 최대한 any를 쓰지 않아야 한다

function returnAny(message: any): any {
  console.log(message);
}
const any1 = returnAny("아무거나 리턴");
any1.toString();
