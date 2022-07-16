// never  리턴에 주로 사용되며 아무것도 리턴되지 않는다.
// never는 모든 타입에 서브타입이며 모든 타입에 할 당 할 수 있다
// 잘못된 타입을 넣게 되면 never가 나온다

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  // 무한루프
  // while(true) {
  // }
}

let a: string = "hello";
if (typeof a !== "string") {
  a;
}
// never 활용
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
