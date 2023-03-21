/* 11-1_array_hof.js */

/* 
  배열의 고차함수

  고차함수(Higher Order Function)
    -함수를 반환하거나 인자로 전달받는 함수.
        => JS는 함수를 값으로 취급하기 때문에 가능하다.
        => JS의 함수는 일급객체이다. => 구글 검색 추천!
*/

// 함수를 반환하는 함수.
function foo() {
  return function () {
    console.log("실행!");
  };
}

let bar = foo(); // foo()의 실행결과로 함수를 반환. bar 변수에 할당.
bar();

// 전달 받은 숫자 n만큼 코드(콜백함수)를 반복실행하는 repeat함수 만들기.
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

let numbers = [1, 2, 3, 4, 10];
// 배열의 크기만큼 반복. 가독성이 다소 떨어진다.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/* 
    Array.prototype.forEach(function(요소, 인덱스){
        
    })
    
    - 배열의 각 요소를 순회하면서 콜백함수를 실행한다.
        => 배열의 크기만큼 반복실행된다.
    - 인자로 콜백함수를 전달한다.
        => 콜백함수의 첫번째 매개변수에는 배열의 각 요소들이 한번씩 전달되며 실행된다.
        => 콜백함수의 두번째 인자로 요소의 인덱스값이 전달된다.
    - 배열의 요소를 값으로 사용하며 단순히 반복실행한다.
    - return되는 값이 없다.
*/
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit, idx) {
  console.log(idx, fruit);
});

// 안녕하세요 저는 31세 seok입니다.의 형식으로 배열의 각 요소를 모두 출력.
let users = [
  { name: "seok", age: 31 },
  { name: "mincheol", age: 28 },
  { name: "jeongcheol", age: 40 },
];

let result = users.forEach(function (user) {
  console.log(`안녕하세요, 저는 ${user.age}세 ${user.name}입니다.`);
});

console.log(result);

/* 
    Array.prototype.filter()
        - forEach와 마찬가지로 배열을 순회하며 실행된다.
        - 특정 조건을 만족하는 요소만을 모아서 새로운 배열로 반환한다.
            => 인자로 전달된 콜백함수의 return 값이 true나 false여야된다. 즉, 조건식이여야 d된다.
            => 콜백함수 return 값이 true인 요소만 배열로 모아서 반환한다.
        - 원본 배열이 변경되지 않는다. 중요.
*/

let oldUsers = users.filter(function (user) {
  return user.age >= 30;
});

console.log("oldUsers: ", oldUsers);
console.log("users : ", users);

/* 
    Array.prototype.map()
        - forEach와 마찬가지로 배열을 순회하며 실행된다.
        - 요소의 값을 통해서 새로운 값을 만들어서 배열로 모아서 반환한다.
            => 콜백함수의 return값이 새로운 배열이 요소 모여서 반환된다.
            => return값이 없으면 undefined가 배열로 모인다.
        - 원본 배열을 변경하지 않는다.
*/

let doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers);
console.log(numbers);

/* 
    users에서 이름만 모음 nameList 배열 만들기
*/
let nameList = users.map(function (user) {
  return user.name;
});

console.log(nameList);

/* 
    Array.prototype.reduce()
        - 결과를 누적시키는 누산기를 사용한다.
        - 콜백의 함수의 첫번째 매개변수에는 이전 회차의 값, 두번째 현재 회차의 값.
            => 첫번째 회차에서는 이전값에 초기값이 전달된다.
        - 콜백함수의 세번째 매개변수는 초기값을 설정한다.
*/
let total = numbers.reduce(function (acc, curr) {
  return acc * curr;
}, 1);

let total02 = numbers.reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(total, total02);
