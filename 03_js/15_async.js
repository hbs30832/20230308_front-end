/* 
    동기(Synchronous)와 비동기(Asynchronous)
        - 동기적 : 결과값을 기다린다.
        - 비동기적 : 결과값을 기다리지 않는다.
        - JS 싱글 스레드 기반의 논블로킹 언어이다.
*/

let a = 10;
let b = 20;

let result = a + b;
console.log(result);

/* 
    스케줄링
        - 특정 코드를 일정 시간 뒤에 실행하거나 일정 시간마다 반복한다.

    setTimeout(콜백함수, 지연시간)
        - 콜백함수를 일정시간 뒤에 실행한다.
        - JS가 직접 관리하는 것이 아니라 실행환경에서 도와준다.
        - id값을 반환하는데 이 id값으로 실행이 되기전에 스케줄을 취소할 수도 있다.
            => clearTimeout(id)를 통해서 스케줄을 취소한다.

    setInterval(콜백함수, 지연시간)
        - setTimeout과 차이점은 일정시간마다 반복적으로 실행한다.

    콜백 지옥
        - 비동기 처리를 하는 가장 기본적인 방법은 콜백함수.
            => 콜백함수를 계속해서 중첩해서 사용하는 콜백지옥에 빠진다.
            => 가독성이 떨어지고 코드를 이해하기 힘들어진다.
*/
console.log("setTimeout 시작!");
const timeout = setTimeout(function () {
  console.log("실행!");
}, 2000);
clearTimeout(timeout);
console.log("setTimeout 종료!");

let second = 0;
let interval = setInterval(function () {
  console.log(++second);
}, 1000);

// 5초뒤에 인터벌 취소하기 clearInterval
setTimeout(() => {
  clearTimeout(interval);
}, 5000);

let data = null;
// 데이터를 받아오는데 3초가 걸린다고 가정.
setTimeout(() => {
  data = {
    name: "seok",
  };
  setTimeout(() => {
    // 데이터를 가공하는데 3초가 걸린다고 가정,
    console.log(data.name);
  }, 3000);
}, 3000);
