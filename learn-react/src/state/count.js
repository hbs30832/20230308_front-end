// src/state/count.js

export function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + state.amount };
    case "DECREASE":
      return { ...state, count: state.count - state.amount };
    case "CHANGE_AMOUNT":
      return { ...state, amount: action.amount };
    default:
      return state;
  }
}
