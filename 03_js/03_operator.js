/* 
    연산자(Operator)
        - 피연산자에 연산을 통해서 새로운 값을 생성.
    
    피연산자(Operand)
        - 연산에 사용되는 값.

    문
        - 프로그램이 실행되는 최소 단위.

    식
        - 값으로 평가되는 모든 문.
*/

// = : 할당 연산자. 우항의 값을 좌항에 할당한다.
var age = 30;
age = 40;

// 산술 연산자 : 피연산자에 산술된 값을 반환한다.
age = age + 20; // 더하기
age = age - 10; // 빼기
age = age * 2; // 곱하기
age = age / 2; // 나누기

age = (age + 11) / 2; // 사칙 연산 적용된다.

age = 43;

var result = age % 5; // 나머지

console.log("age : ", age);
console.log("result : ", result);

/* 
    산술 할당 연산자
        - 산술과 할당 동시에 한다.
*/
age += 10; // age = age + 10;
age -= 5; // age = age - 5;
age *= 2; // age = age * 2;
age /= 3; // age = age / 3;
console.log("age : ", age);

/* 
    단항 연산자
        - 피연산자가 하나인 연산자.
*/

// 단항 산술 연산자
age++; // 33 후위 연산자. 값을 먼저 사용하고 마지막에 자신을 증가시킨다. 우선순위가 마지막이다.
age--; // 32
++age; // 33 전위 연산자. 값을 먼저 증가시키고 사용한다. 우선순위가 최우선이다.
--age; // 32
console.log(age);

var result02 = age++ - 20;
console.log(result02, age);

var num = 10;
var result03 = 0;

result03 = num++ + 12 - --num;
console.log(result03, num);

// 연결 연사자(문자열) => 문자열을 연결한다.
var str = "안녕하세요" + " 저는 황보석입니다.";
console.log(str);

// 문자열과 숫자에 +를 사용하면 연결 연산자로 동작한다.(문자열 반환)
// parseInt(문자열) => 숫자로 변환 가능한 문자열을 숫자형으로 바꾼다.
console.log(typeof (1 + "1"));
console.log(1 + parseInt("1"));

var x = 10;
x = x + 1;
var result05 = x + 10;

/* 
    비교 연산자
        - 피연산자끼리 값을 비교하여 true 혹은 false를 반환한다.
            => 조건식에 사용한다.
*/

/* 
    동등 연산자
        - "=="을 사용하고, 우항과 좌항의 값이 동등한지 비교한다.
        - JS가 자동으로 형변환을 하기 때문에, 다른 자료형의 값을 비교할 때 주의해야한다.
*/

console.log(1 == 1); // true
console.log(1 == "1"); // 형변환을 거쳐서 같다고 판단한다.
console.log(1 == true);
console.log(0 == false);

/* 
    일치 연산자(===)
        - 형변환을 거치지 않고 비교한다.
*/

console.log(1 === 1); // true
console.log(1 === "1"); // 형변환을 안거쳐 false로 판단한다.
console.log(1 === true);
console.log(0 === false);

// 부정(!) : true => false, false => true로

console.log(1 != 1);
console.log(1 != "1");
console.log(1 != true);
console.log(0 != false);

console.log(1 !== 1);
console.log(1 !== "1");
console.log(1 !== true);
console.log(0 !== false);

/* 
    대소 관계 비교
        - 피연산자의 값의 크기를 비교한다.
*/
console.log(!(10 <= 10));

/* 
    논리 연산자
        - 여러개의 논리형 데이터를 통해 true, false 반환.
        - !(not), or(||), &&(and) 
        - or : 피산연자 중 하나라도 true => true, 모두 false면 false.
        - and : 피연산자 모두 true일 때만 true. 즉, 하나라도 false면 false.
*/
var user02 = {
  gender: "male",
  age: 31,
  name: "Seok",
};

var isTrue = user02.name === "Seok" && user02.age >= 30;
isTrue = user02.age < 20 || user02.gender === "male";
isTrue = !(user02.age >= 30);
