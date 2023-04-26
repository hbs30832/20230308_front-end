/* 
    generic
*/

function add<T>(a: T): T {
  return a;
}

function square(num: number): number {
  return num * num;
}

const addNum = add<number>(10);
const addStr = add<string>("안녕하세요");

console.log(square(addNum));

function getLength<T>(arg: T[]): number {
  return arg.length;
}

const numbers = [1, 2, 3];
console.log(getLength(numbers));
