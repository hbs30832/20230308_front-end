/* 
    함수(Function)
        - 반복적으로 사용하는 코드를 하나의 코드블록으로 묶어서 재사용할 수 있다.
        - 하나의 함수로 여러 동작을 수행하도록 작성할 수 있다.
        
    매개변수(Parameter)
        - 호출될 때마다 함수 실행에 필요한 값을 전달할 수 있게 해주는 특별한 변수.
        - 변수처럼 값을 재할당할 수 있다. => 함수 내부에서 유효한 변수처럼 사용 가능.
        - 매개변수를 정의한 순서대로 호출할 때 전달해야한다.

    인수(Argument)
        - 매개변수를 통해서 실제로 전달된 값.

    return
        - 함수의 실행 결과로 값을 반환할 수 있다.
            => return 뒤에는 값으로 평가되어야한다.
        - 함수의 실행결과가 값이기 때문에 식으로 볼 수 있다.
        - return은 함수의 종료를 의미한다. 즉, return 이후의 코드는 실행되지 않는다.
*/

// 함수 선언
function print() {
  // 실행할 코드
  console.log("함수 실행");
}

// 함수 호출
print();

// 매개변수가 없는 함수.
function addNumber() {
  var num01 = 10;
  var num02 = 20;
  console.log(num01 + num02);
}

addNumber();
addNumber();

// 매개변수가 있는 함수.
function sum(num01, num02) {
  console.log(num01 + num02);
}

sum(20, 30);
sum(30, 40);

// 전달한 숫자 하나를 짝수인지 홀수인지 출력하는 함수.
function printNumType(num) {
  /* 
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  } 
  */
  switch (num % 2) {
    case 0:
      console.log("짝수입니다.");
      break;
    case 1:
      console.log("홀수입니다.");
      break;
    default:
      console.log("숫자가 아닙니다.");
  }
}

printNumType("ㄴㅇㅁㅇ");

function square(num) {
  // 일반 변수처럼 값 재할당 도 가능하다.
  num *= num; // num = num * num;
  console.log(num);
}

square(9);

// num02에 값이 전달되지 않으면 10이라는 기본 매개변수 값이 적용된다.
// retrun(반환) 값이 있는 함수.
function getSum(num01, num02 = 10) {
  var result = num01 + num02;
  return result;
  console.log("함수 종료");
}

var value = getSum(20, 50);
var value02 = getSum(10);
console.log(value);
console.log(value02);

// 숫자 n이 전달되면 0부터 n까지 더한 숫자 반환해주기.
function clacSum(n) {
  var result = 0;
  for (var i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(clacSum(100));
