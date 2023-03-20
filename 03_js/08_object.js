/* 
    객체(Object)
        - 다양한 속성(Property)을 가지는 고유한 데이터를 나타낸다.
        - 데이터를 사람의 사물을 바라보는 관점으로 나타내는 방식.
        - key(속성이름)-value(속성값)로 속성을 나타낸다.
        - {} 기호를 통해서 작성하는 방식 : 객체 리터럴.
        - 상태(프로퍼티)와 행위(메서드)를 통해 동작할 수 있다.
            => 메서드 : 프로퍼티의 값이 함수면 메서드다.
        - ["키값"]의 형태로도 프로퍼티 표기가 가능하다.
            => 키값도 기본적으로 식별자 규칙를 따른다.
            => ["키값"]의 형태로 지정하면 식별자 규칙을 벗어난 네이밍도 가능하다. 
        - 객체에 없는 프로퍼티를 참조하면 undefined가 나온다.
            => undefined 혹은 null에다가 키값 참조를 하면 오류가 발생한다.

    this
        - 메서드를 호출할 객체를 가리킨다.
        - this 바인딩을 통해서 this가 가리키는 객체를 바꿀 수 있다.
        - this를 통해서 상태와 행위를 고유한 동작으로 만들 수 있다.
        - 생성자(생성자 함수, 클래스)에서 주로 사용한다.
        - 화살표 함수를 사용하면 this 바인딩이 되지 않는다.
        
*/

let user = {
  age: 31,
  name: "Seok",
  hello: function () {
    console.log("this : ", this);
    // 템플릿 리터럴 : ``(백틱) 안에서 ${JS 표현식}을 사용하면 JS 값을 문자열 안에 포함시킬 수 있다.
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  },
  "last-name": "Hwangbo",
};

// 객체의 프로퍼티 참조.
console.log(user.name);
console.log(user["last-name"], user["age"]);

// 객체의 프로퍼티 값 변경.
user.name = "Hwangbo";

// 새로운 프로퍼티 추가.
user.address = "운서동";
console.log(user.address);

user.hello(); // 메서드 호출

// rect라는 객체 : 너비(width)와 높이(height)를 가진 사각형 => getArea() 호출하면 넓이값 출력.
let rect = {
  width: 100,
  height: 100,
  getArea: function () {
    console.log(`너비 : ${this.width * this.height}`);
  },
};

rect.getArea();

let obj = {
  address: {
    city: "Seoul",
  },
};
console.log(obj.address.city);
console.log(obj.name.lastName); // obj.name이 undfined이기 때문에 오류 발생.
