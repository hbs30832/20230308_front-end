// src/redux/counter.js

// 액션의 타입
const INCREMENT = "INCREMET";
const DECREMENT = "DECREMET";

// 액션 생성 함수
export function increase(amount) {
  return {
    type: INCREMENT,
    amount,
  };
}

export function decrease(amount) {
  return {
    type: DECREMENT,
    amount,
  };
}

// amount 전달 받아서 amount만큼 줄이기
function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case DECREMENT:
      return state - action.amount;
    default:
      return state;
  }
}

export default counter;
