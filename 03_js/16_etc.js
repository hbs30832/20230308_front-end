// JS에서는 정의된 매개변수보다 인자가 많이 전달돼도 오류 발생 X.
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20, 30));

// rest 매개변수 : 매개변수 앞에 ...을 붙이면 들어오는 매개변수들을 배열로 받는다.
//      => rest 매개변수는 마지막에 위치해야한다.
function sumTotal(...args) {
  //   let args = Array.from(arguments);

  // reduce 사용해서 전체 총합 반환하기.
  return args.reduce(sum, 0);
}

console.log(sumTotal(10, 20, 30, 40));

// 펼침(Spread) 연산자
//      => 배열, 혹은 객체를 펼치는 효과 있다.
let nums = [1, 2, 3, 4];
let copyNums = [0, ...nums, 5]; // [1,2,3,4]. 배열 얕은 복사 효과.
console.log(copyNums);
console.log(...nums); // console.log(1,2,3,4)
console.log(sumTotal(...nums));

let obj = {
  name: "Seok",
  age: 31,
};

let copyObj = { ...obj, name: "Hwangbo" }; // { name : "Seok", age : 31 }
console.log("obj === copyObj : ", obj === copyObj);
console.log(copyObj);

/* 
    비구조화 할당(Destructuring Assignment)
        - 객체나 배열로 부터 값을 변수로 간단할 할당할 수 있다.
            1) 객체는 변수 선언 {} 안에 가져오고자 하는 프로퍼티명으로 짓는다.
                => 없는 프로퍼티 참조시 undefined가 초기화된다.
                => ":"을 사용해서 프로퍼티명과 변수명을 다르게 지을 수 있다.

            2) 배열은 변수 선언 [] 안에 순서대로 할당이 된다.
                => 키값이 아닌 순서기 때문에 변수명만 자유롭게 지으면 된다.
                => 순서로 하기때문에 너무 많은 것을 비구조화 할당 하기에는 부적합하다.
                => JS의 함수는 여러개 값을 반한할 수 없기 때문에 배열 비구조화 할당을 이용한다.
*/
// name, age 변수에 obj의 name,age 프로퍼티 값 할당.
// let name = obj.name;
// let age = obj.age;

let { name: username, age, height } = obj;
console.log(username, age, height);

let fruits = ["apple", "banana", "orange"];
let [first, second] = fruits;
console.log(first, second);

function getNums(num) {
  return [
    num,
    function () {
      console.log(num++);
    },
  ];
}
// 배열을 비구조화 할당해서 사용. 여러개의 값 return 가능.
let [num, func] = getNums(100);
console.log(num);
func();
func();
func();
func();

/* 
    삼항 연산자
        - 조건식 ? 참일 경우의 값 : 거짓일 경우의 값;
*/
// let isOld;
// if (obj.age >= 30) {
//   isOld = "늙음";
// } else {
//     isOld = "젊음"
// }
let isOld = obj.age >= 40 ? "늙음" : "젊음";
console.log(isOld);

/* 
    단축 평가
        && : 앞의 값이 falsy한 값이면 뒤의 값 평가 x.
            => 앞의 값이 truthy한 값이면 뒤의 값 평가.
        || : 앞의 값이  truthy한 값이면 뒤의 값 평가 x.
            => 앞의 값이 falsy한 값이면 뒤의 값 평가.

        truthy : true처럼 동작하는 값.
            => 0이 아닌 숫자, 빈 객체, 문자열...
        falsy : false처럼 동작하는 값.
            => 0, undefined, null, ""
*/
let color = "blue" && "red";
console.log(color);

foo(color);

function foo(value) {
  if (!value) return;
  console.log(value);
}

/* 
    null 병합 연산자(??)
        - ?? 앞의 값이 null이나 undefined ??의 뒤가 평가된다.
        - 참조한 값이 null이거나 undfined일 경우 다른 값으로 대체할 때.
 */
let value;

let data = value ?? "데이터";
console.log(data);

let user = {
  name: {
    first: "Seok",
    last: "Hwangbo",
  },
};

/* 
    옵셔널 체이닝
        - undefined나 null에 프로퍼티를 참조한 경우 참조를 하지 않는다.
*/

let user02 = {
  name: null,
};

console.log(user.name?.first);
console.log(user02.name?.first);
