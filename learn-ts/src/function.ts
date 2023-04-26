/* 
    함수
        - 매개변수와 반환값의 타입을 지정할 수 있다.
        - ?를 사용하면 선택적으로 매개변수를 받을 수 있다.
*/

function add(a: number, b?: number, c?: number): number {
  // 타입 좁히기(Narrowing)
  if (typeof b !== "undefined") {
    return a + b;
  }
  return a;
}

add(1, 2);
// 함수 오버로딩 : 같은 이름의 함수더라도 매개변수의 종류나 개수에 따라 다른 동작을 한다.

function addValue(str: string, num: number): string;
function addValue(num01: number, num02: number): number;

function addValue(val01: string | number, val02: number) {
  if (typeof val01 === "string") {
    let result = "";
    for (let i = 0; i < val02; i++) {
      result += val01;
    }
    return result;
  }
  return val01 + val02;
}

console.log(addValue(1, 2));
