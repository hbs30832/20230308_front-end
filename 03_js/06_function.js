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

/* 
    함수의 정의 방식

    1) 함수 선언식(기명함수)
        - function 키워드 함께 함수를 정의한다.
        - 호이스팅이 일어난다.
    
    2) 함수 표현식(익명함수)
        - 변수에 함수를 할당하는 방식으로 정의한다.
            => JS는 함수를 "값"으로 평가한다.
        - 변수 이름이 함수의 식별자 역할을 한다.
            => 할당된 함수에 이름을 작성해도 식별자의 역할을 못한다.
        - 함수 호이스팅 일어나지 않는다.
            => 호이스팅은 일어나지만 초기화가 안된다.
    
    3) 화살표 함수(Arrow Function)
        - 함수표현식의 일부.
        - "=>"를 통해 함수를 표현한다.
        - 함수의 표현을 간결하게 작성할 수 있다.
        - 코드 블록과 return 키워드를 생략하여 값을 반환할 수 있다.
            => "=>" 뒤에 표현식(값)을 작성해야한다.
        - 간결하기 때문에 다른 함수의 인자로 전달할 때 많이 사용한다.
        - this 바인딩이 되지 않는다.
        - {}는 객체를 나타내는 기호이기도 하기 때문에 객체를 리턴하는데 return을 생략하려면 () => ({})
*/

// multiply(1, 2);
// 함수 표현식에 할당하는 함수에 이름을 넣어도 참조할 수 없다.
let multiply = function mul(a, b) {
  return a * b;
};

let copy = multiply; // 함수 자체를 할당.
let num = multiply(2, 3); // 함수의 실행결과를 할당.

console.log(multiply(2, 3));

// let division = (a, b) => {
//   return a / b;
// };

let division = (a, b) => a / b;

// 더하기, 빼기 함수 화살표 함수로 작성하기
let sumNum = (a, b) => a + b;
let subNum = (a, b) => a - b;

console.log(division(6, 3));

let makeUser = (name, age) => ({
  name: name,
  age: age,
});

let user = makeUser("seok", 31);

console.log(user);

// 재귀 함수 - 함수가 자신을 호출하는 형식의 함수
//    => 종료 조건이 없으면 무한 반복에 빠진다.
function fibonacci(n) {
  /* 
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }

  return result; 
  */

  if (n <= 1) {
    return 1;
  }

  return n + fibonacci(n - 1);
}

console.log(fibonacci(10));

/* 
  콜백 함수
    - 다른 함수의 인자로 전달되는 함수.
      => 함수의 연산결과를 가지고 어떠한 동작을 할지 나중에 결정될 때 사용한다.
    - 콜백함수에 인자를 전달할 수 있다.
      => 연산결과를 전달하여 그 시점에서 원하는 동작을 함수형태로 작성한다.
      => 익명함수를 주로 사용한다.
*/
// 같은 동작을 n번 실행하는 함수.
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

// 익명함수 전달
repeat(7, function (i) {
  console.log(i + 1 + "번째 실행");
  console.log("이러이러한 동작을 실행합니다.");
});

// 미리 작성된 함수 전달.
repeat(7, print);

function print(i) {
  console.log(i + 1 + "번째 실행");
  console.log("이러이러한 동작을 실행합니다.");
}

// 숫자 두개를 전달받아 더하고 그 더한 결과를 콜백함수에 전달하는 함수 작성.
function sumNumWithCallback(a, b, callback) {
  callback(a + b);
}

sumNumWithCallback(2, 3, function (data) {
  console.log("서버 전송 데이터 : " + data);
});

sumNumWithCallback(4, 5, function (data) {
  console.log("평균값 : " + data / 2);
});
