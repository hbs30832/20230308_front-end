// export : 다른 js파일에서 사용할 수 있게 내보낸다.

export let PI = 3.14;

export function sum(a, b) {
  return a + b;
}

export function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return n + fibonacci(n - 1);
}

const Math = {
  sum,
  fibonacci,
  PI,
};

// export default는 하나만 가능하다.
export default Math;
