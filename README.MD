## TypeScript Study

```
TypeScript npm 프로젝트 시작
npm init -y
npm i -D typescript
npx tsc --init(tsconfig.json 파일 생성)
```

### TypeScript(State Type) vs JavaScript(Dynamic Type)

- State Type : 개발하는 도중에 타입을 체크한다
- Dynamic Type : 런타임 중에 타입 에러를 확인가능

### TypeScript 기본 제공 데이터 타입 (ECMAScript 표준)

- Boolean
- Number
- String
- Null
- Undefined
- Symbol
- Array : object형
- 프로그래밍을 도와줄 추가제공 타입 : Any , Void , Never , UnKnown , Tuple : object

#### Primitive Type : 오브젝트와 레퍼런스 형태가 아닌 실제값을 저장하는 자료형

- 리터럴 값으로 primitive 타입의 서브 타입을 나타낼 수 있다.
- 자바스크립트에서는 new라는 레퍼 객체로 만들 수 있다.
- 타입스크립트 Primitive Type은 모두 소문자로 되어야 한다 ex(s: string)
