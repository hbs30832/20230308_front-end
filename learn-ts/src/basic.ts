// basic.ts

// 변수에 타입 지정
//  - :(콜론)뒤에 타입을 지정. 해당 타입의 데이터만 받을 수 있다.
let num: number;
// num = "안녕하세요"; 컴파일 단계에서 에러발생
let str: string = "안녕하세요";
let arr: number[] = [1, 2, 3]; // number를 받는 배열
// arr.push("안녕하세요"); arr은 number만 요소로 사용 가능. 컴파일 에러 발생.
let strArr: Array<string>; // 문자열만 받는 요소 선언.
let tup: [number, string]; // 첫번째 요소로는 number, 두번째 요소로 string만 가능. 그 이상은 안된다.
tup = [10, "Seok"];
// tup = [20, 10]; 두번째 요소는 string이 되어야하므로 컴파일 에러 발생.

let value: any; // 모든 데이터 타입을 허용한다.
value = "Seok";
value = 20;
value = [10, 20];

const CREATE_TODO = "CREATE_TODO";

// enum : 열거형 자료형. 상수 역할을 하는 타입. 수정하기 용이하다.
enum ActionType {
  CreateTodo,
  RemoveTodo,
  ToggleTodo,
}
function reducer(type: ActionType) {
  switch (type) {
    case ActionType.CreateTodo:
      console.log("Create Todo");
  }
}

// 타입 단언문 : 개발자가 더 확실히 알 때 프로그램에게 타입을 알려주는 역할. 남용하지 않는 것이 좋다.
let key: string;
key = process.env.API_KEY as string;

let name = "황보석"; // 처음 초기화한 값의 타입으로 지정된다.
// name = 10;
