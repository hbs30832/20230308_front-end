/* 
    자료형(Data Type)
        - 컴퓨터가 다룰 수 있는 자료의 형태.
        - 자료형마다 다루는 방법이 다르기 때문에 중요하다.
*/

// 원시값

// 숫자형(number)
// JS 정수와 실수를 다른 자료형으로 구분 짓지 않는다.
var age = 30;
console.log(age + 10);
var PI = 3.14;
console.log(0.1 + 0.2); // JS는 정밀한 수학 계산에 적합하지 않다.
console.log(typeof age);

/* 
    문자열(string)
        - ""(큰따옴표) 혹은 ''(작은따옴표) 사이에 문자를 작성한다.
*/
var userName = "Seok";
console.log("userNmae : ", userName);
console.log(typeof userName);

/* 
    논리형(boolean)
        - true(참) 혹은 false(거짓)의 두가지 상태를 나타내는 데이터.
        - 조건식의 결과로 논리형 데이터가 반환된다.
            => 조건문의 조건에 사용한다.
        - true는 1처럼, false는 0처럼 취급된다.
*/
var isOld = age > 30;
console.log(typeof isOld, isOld);

/* 
    null과 undefined
        - 조건문에 사용하면 false처럼 동작한다.
        - undefined : 값이 정의되지 않았을 때 -> 참조를 했는데 아무 값도 없을 때.
        - null : 유효하지 않은 값이라고 명시를 해놓는 것.
*/

var year;
console.log(year);
year = 2023;

year = null; // 유효하지 않은 상태라고 명시.

/* 
    배열(array)
        - 여러개의 값을 저장할 때 사용한다.
            => 저장된 값을 요소(Element)라고 한다.
        - 인덱스값을 통해서 n번째 요소를 참조할 수 있다.
            => 배열의 순서는 0부터 시작한다.
*/
var fruits = ["사과", "포도", "오렌지"];
console.log(fruits[0]);
fruits[2] = "귤";
console.log(fruits);

/* 
    객체(Object)
        - 배열과 비슷하게 여러개의 값을 저장할 수 있다.
        - 속성을 통해서 고유한 정보를 만들어낼 수 있다.
            => 속성은 key(속성이름)-value(속성값)의 형태로 사용한다.
        - .을 통해서 해당 객체의 속성값들을 참조할 수 있다.
*/
var user = {
  name: "seok",
  age: 31,
};

console.log(user.age);
