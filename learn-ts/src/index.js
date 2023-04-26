/* 
    JavaScript의 문제점
        - JS는 타입에 제한이 없는 동적 타입언어이다.
            => 자료의 데이터형 변환이 자유롭다.
        - 타입이 변경될 수 있기 때문에 의도하지 않은 동작을 하거나 오류를 발생시킬 수 있다.
            => 작성하면서 안다면 빠르게 수정할 수 있다.
        - 코드 에디터에서 타입을 추론을 하지 못해서 자동완성 기능이 제공되지 않을 때가 많다.
*/

function add(a, b) {
  return a + b;
}

// JS는 동적 타입 언어로 변수의 타입 변경이 자유롭다.
let value = 10;
value = "문자열";

console.log(add(1, 2));
console.log(add("안녕하세요 ", "황보석입니다.")); // JS는 동적 타입 언어이기 때문에 잘 작동한다.
console.log(add(1, undefined)); // 문법상으로 문제가 없기 때문에 실행을 해봐야 안다.

// 매개변수 e에 대한 타입 추론이 안되기 때문에 자동완성 기능이 제공이 안된다.
const handleInput = (e) => {
  console.log(e.target.value);
};

// 타입 추론이 가능한 경우에는 자동완성이 제공되긴한다.
let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});

// 타입이 바뀌었음에도 불구하고 처음 지정된 타입으로 자동완성 기능이 제공되고 있다.
numbers = ["안녕하세요"];
numbers = 1;

// numbers가 배열이 아니기 때문에 오류가 발생한다.
numbers.forEach((num) => console.log(num));
