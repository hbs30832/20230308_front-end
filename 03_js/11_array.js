/* 
    배열(Array)
        - 배열을 통해서 여러개의 데이터 관리.
            => 배열 리터럴([])을 사요해서 표현한다.
        - 다른 타입의 데이터를 같이 사용할 수 있다.
        - 배열의 크기가 동적으로 변할 수 있다.
        - 인덱스 값을 통해서 특정 요소를 참조할 수 있다.
 */

let dataList = [1, "red", {}];

let arr = new Array(10); // 크기 10인 배열을 생성.
arr.push(1);

console.log(arr, arr.length);

console.log(dataList.length); // 배열의 크기.

// 배열의 요소 추가 및 제거

let numList = [1, 2, 3, 4];
/* 
    배열의 마지막에 요소를 추가,제거 - push, pop
*/
numList.push(5, 6);
console.log(`numList.push(5,6) => numList : `, numList);

let result = numList.pop(); // 맨 마지막 요소 1개를 제거하고, 그 값을 반환.
console.log("numList.pop() => ");
console.log("result : ", result);
console.log("numList", numList);

/* 
    배열의 맨 앞에 요소를 추가 제거 - unshift, shift
*/

numList.unshift(-1, 0);
console.log("numList.unshift(0) =>");
console.log("numList : ", numList);

result = numList.shift(); // 맨 앞의 요소를 제거하고 그 값을 반환.
console.log("numList.shift() => ");
console.log("result : ", result);
console.log("numList : ", numList);

// 배열의 중간 요소 제거 및 추가 : splice(시작인덱스, 삭제할 개수, 새로추가할 요소...)
result = numList.splice(2, 2, 20, 30); // 3번째 요소부터 2개 삭제하고 그 값을 반환.
console.log("numList.splice(2, 2, 20, 30) => ");
console.log("result : ", result);
console.log("numList : ", numList);

// 배열의 중간 요소를 복사 : slice(시작 인덱스, 끝 인덱스)
result = numList.slice(3, 5);
console.log("numList.slice(3, 5) =>"); // 4번째 요소부터 6번째 요소전까지 복사. 원본 배열 변경 x.
console.log("result : ", result);
console.log("numList : ", numList);

// 요소의 인덱스값 구하기 : indexOf()
console.log("numList.indexOf(20) : ", numList.indexOf(20));
console.log("numList.indexOf(50) : ", numList.indexOf(50)); // 없는 요소를 -1  반환. 분기처리에 사용.

if (numList.indexOf(20) === -1) {
  // 순서를 찾아보고 없으면 실행
}

if (!numList.includes(20)) {
  // 없으면 실행
}
// 요소의 존재 유무 : includes()
console.log("numList.includes(100) : ", numList.includes(100)); // 요소의 존재 유무에 따라 true, false 반환

// includes함수 구현해보기
//      - 배열을 돌면서 있으면 true 반환
//          => 끝까지 돌아도 없으면 false 반환.
Array.prototype.customIncludes = function (value) {
  // this가 메서드를 호출한 배열을 가리킨다.
  for (let i = 0; i < this.length; i++) {
    //  return는 함수 종료를 의미.
    if (this[i] === value) return true;
  }
  return false;
};

console.log(numList.customIncludes(20)); // true
console.log(numList.customIncludes(40)); // false
