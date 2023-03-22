/*  
    1. 전역 객체
        - JS가 가정 먼저 생성하는 특수한 객체.
        - 실행되는 환경에 따라 달라진다.
            => 브라우저 환경에서는 window, Node.js 환경에서는 global이라는 식별자를 통해서 참조가능.
            => 환경에 따라서 필요한 메서드, 프로퍼티 등을 가진다.
        - 어디서든 참조할 수 있는 최상위 객체(프로토타입에서의 상위라는 얘기 x).
        - 전역객체가 제공하는 프로퍼티나 메서드는 전역객체 식별자를 생략하고 참조할 수 있다.

    2. 빌트인 객체
        - 개발에 필요할만한 기능을 제공하는 여러 객체가 전역 객체에 포함되어있다.
*/
console.log("Hello World"); // global.console.log()에서 전역 객체인 global 생략.
console.log(globalThis); // 실행환경과 관계없이 전역객체 참조.

var a = 10; // var 키워드를 전역에서 사용하면 전역 객체의 프로퍼티로 할당된다.
console.log(global.a); // 10

// Math : 수학과 관련된 메서드 및 프로퍼티를 제공한다.
console.log(Math.PI);

// 소수점 이하 숫자 처리

console.log(Math.floor(1.2)); // 소수점 이하 숫자를 내린다.
console.log(Math.ceil(1.1)); // 소수점 이하 숫자를 올린다.
console.log(Math.round(1.4)); // 소수점 이하 숫자를 반올림한다.

// 1.12 => 1.1 소수점 둘째자리 이하 반올림
console.log(Math.round(1.15 * 10) / 10);

Math.random(); // 0~1 사이의 랜덤한 실수를 반환한다. 0 <= x < 1. 완변한 랜덤 x.

let randomNum = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 랜덤한 숫자. 1과 100 포함.
console.log(randomNum);

// 로또 번호 1~45 사이의 숫자 6개 배열로 반환하는 함수 만들기
//      => 반복문 종료 시점? 배열의 개수가 6개가 될때. => 언제 6개가 될지 알 수 없다.
//      => 랜덤한 숫자가 중복 x. => 배열에 하나씩 집어 넣으며 이미 있는 값인지 확인 후 넣기.
function getLottoNums() {
  let numbers = [];

  while (numbers.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;

    if (!numbers.includes(num)) numbers.push(num);
  }

  return numbers;
}

function getLottoNums02() {
  let rangeNum = [];
  let numbers = [];
  for (let i = 1; i <= 45; i++) {
    rangeNum.push(i);
  }
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * rangeNum.length);
    let num = rangeNum.splice(idx, 1);
    numbers.push(num);
  }
  return numbers.flat();
}

console.log(getLottoNums02());

// Date : 시간과 날짜 관련된 프로퍼티와 메서드 제공.
//      - 날짜에 대한 기준은 UTC 1970년 1월 1일 자정부터 흐른시간을 밀리초 단위로 계산한다.

let today = new Date("2023-12-13"); // 실행된 시점의 시간과 날짜로 생성된다. 날짜로 변환 가능한 문자열을 전달해서 날짜를 초기화할 수 있다.
console.log(today); // 객체지만 그냥 참조해서 콘솔창에 출력하면 시간과 날짜가 표기된다.

let year = today.getFullYear();
let month = today.getMonth(); // 0~11 사이의 숫자 반환. 0(1월)~11(12월)
let date = today.getDate();
let day = today.getDay(); // 월요일(0) ~ 일요일(6) 반환

console.log(year, month, date, day);

today.setFullYear(2022);
console.log(today);

today.setDate(today.getDate() - 30);
console.log(today);

// Date.prototype.toLocaleDateString() - 특정 문화권에 맞는 문자열로 변환해준다.
let dateStr = today.toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   day: "numeric",
  //   month: "long",
  dateStyle: "full",
});

console.log(dateStr);
