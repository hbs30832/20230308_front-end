/* 
    조건문
        - 조건에 따라서 실행할 코드를 작성한다.

    코드블록
        - {} 안에 실행할 코드를 작성한다.
        - 블록 단위로 코드가 실행된다.
*/

/* 
    if(조건식)
        - () 안에 조건식이 true라면 실행한다.
        - () 안에 true, false로 평가되는 식을 작성한다.
    
    else 
        - 조건에 해당하지 않을 때 실행할 코드를 작성한다.
        - else문은 마지막에 와야한다.


    else if(조건식)
        - if문의 조건이 해당이 안될 때 다른 조건을 추가할 수 있다.
        - else if문은 여러개를 추가할 수 있다.
*/

var age = 40;

// age의 값이 30 이상이라면 실행.
if (age >= 40) {
  console.log("40대입니다.");
} else if (age >= 30) {
  console.log("30대입니다.");
} else {
  console.log("30대가 아닙니다.");
}

// if문 통해서 짝수입니다, 홀수입니다 출력하기
var num = 11;

if (num % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

/* 
    switch(비교될 값)
        - 조건이 아니라 값을 비교해서 일치하는 케이스를 실행한다.
        - case 값 : 실행될 코드
            => 값이 일치하는 case의 코드를 실행한다.
            => 일치하는 case 이후의 case들도 실행된다.
            => 필요한 경우 코드블록을 탈출하는 break문을 통해서 빠져나와야한다.
        - default : 기본적으로 실행될 코드.

*/

var data = "자료";
switch (typeof data) {
  case "number":
    console.log("number타입입니다.");
    break;
  case "string":
    console.log("string타입입니다.");
    break;
  default:
    console.log("해당하는 데이터 타입 없음");
}

var score = 99;
// 100 ~ 90 : A, 89 ~ 80 : B, 79 ~ 70 : C, 69 ~ 60 : D , 나머지 F
// Math.floor(숫자) => 소수점 이하 숫자 버림.
console.log(Math.floor(1.9));

// 조건문은 중첩이 가능하다.
if (score > 100 || score < 0) {
  console.log("점수는 100점 이하, 0점 이상이여야합니다.");
} else {
  switch (Math.floor(score / 10)) {
    // break문 생략을 활용하여 여러 케이스 한번에 처리.

    case 10:
    case 9:
      console.log("A등급입니다.");
      break;
    case 8:
      console.log("B등급입니다.");
      break;
    case 7:
      console.log("C등급입니다.");
      break;
    case 6:
      console.log("D등급입니다.");
      break;
    default:
      console.log("F등급입니다.");
  }
}
