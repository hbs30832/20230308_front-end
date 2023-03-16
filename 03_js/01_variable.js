// 01_variable.js
/* 
    변수(Variable)
        - 메모리에 데이터를 저장할 공간을 확보하고, 변수 이름을 통해서 접근할 수 있다.
            => 쉽게 표현하면 값에 이름을 붙인다.

    
    변수 선언(Declaration)
        - 메모리 변수 공간을 사용하겠다고 선언한다.
            => 변수, 함수 등의 이름을 식별자(indentifier)라고 한다.
        - var, let, const(상수) 키워드와 함께 변수 이름을 작성한다.
        - 변수를 선언만하면 undefined라는 값이 초기화된다.

    변수 할당(Assignment)
        - 만들어진 변수에 값을 저장한다.
        - "=" 연산자를 사용한다.
            => "="을 기준으로 우항의 값이 좌항에 할당된다.
        - 이미 값이 저장된 변수에 다른 값을 다시 저장하는 것을 재할당이라고 한다.
    
    변수 참조(Reference)
        - 변수 이름을 통해서 저장된 값을 조회한다.
        
    변수 초기화
        - 변수 선언과 동시에 할당을 진행한다.
            => 할당을 생략하면 undefined(정의되지 않은)가 초기화된다.

    변수명 짓는 규칙
        - 키워드는 사용할 수 없다.
        - 문자, $, _, 숫자만 사용할 수 있다.
        - 변수명은 숫자로 시작할 수 없다.
        - 대소문자 구분을 한다.
*/
var price = 1000;
price = price - 100;
console.log(price);

var userName; // userName이라는 이름의 변수 선언.
userName = "Seok";
userName = "Hwangbo";
console.log("userName : ", userName);

// var는 키워드이기 때문에 변수 이름으로 사용할 수 없다.
// var var;

// var user-name; -는 빼기 기호이기 때문에 사용할 수 없다.
var user_name;

var user01;
// var 01user; 변수명은 숫자로 시작할 수 없다.

var userAge; // 각 단어의 시작부분을 대문자로 작성한다. 카멜 케이스(Camel case)
var user_age; // 각 단어 사이에 _를 기입한다. 스네이크 케이스(Snake case)
var UserAge; // 카멜 케이스와 동일하지만, 첫글자가 대문자로 시작한다. 파스칼 케이스(Pascal case)
// 파스칼 케이스는 생성자의 식별자로 사용하고, 리액트에서 밥 먹듯이 사용한다.

// 변수를 이요해서 서로 값 바꾸기
var num01 = 10;
var num02 = 20;

// num01 = 20;
// num02 = 10;
