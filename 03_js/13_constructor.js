/* 
    생성자(Constructor)
      - 같은 형태의 객체를 만들 수 있는 틀을 미리 만든다.
      - 생성자는 대문자로 시작한다.(파스칼 케이스)
      - 함수 내부에서 this를 통해 프로퍼티를 할당하면 생성자 함수가 된다.
        => 이때 this가 가리키는 것은 생성될 인스턴스를 가리킨다.
      - return 값을 생략해도 자동으로 객체를 생성해서 반환한다.

    인스턴스(instance)
      - 생성자를 통해 실제로 만들어진 객체로 실제 메모리 할당된다.
      - 생성자를 new 키워드와 함께 호출하면 인스턴스가 생성된다.
        => 생성된 인스턴스마다 프로퍼티 값이 다르다.

*/

// 객체 리터럴 방식 : {} 기호를 사용해 간단하게 객체 생성.
//    => 같은 형태의 객체를 만들 때 직접 작성해야 한다는 단점이 있다.
let user01 = {
  name: "Seok",
  age: 31,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

let user02 = {
  name: "Mincheol",
  age: 40,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.hello();
user02.hello();

function User(name, age) {
  this.name = name;
  this.age = age;

  // hello 메서드 만들기
}

let user03 = new User("Seok", 31);
let user04 = new User("Mincheol", 40);
console.log(user03);
console.log(user04);

// prototype : 인스턴스가 공통으로 사용할 메서드, 프로퍼티를 상속시켜준다.

// 프로포타입 메서드 : 인스턴스가 프로토타입에게 상속받아 사용하는 메서드.
User.prototype.hello = function () {
  console.log(`안녕하세요 저는 ${this.name}입니다.`);
};

// 정적(Static) 메서드 : 생성자 함수를 통해 직접 호출하는 메서드. => 인스턴스는 호출 불가. 상속 안됨.
User.isUser = function (obj) {
  return obj instanceof User;
};

console.log("user03 is User? ", User.isUser(user03));
console.log("user01 is User? ", User.isUser(user01));

Math.PI; // Math의 정적 프로퍼티.

user03.hello();

// Cat 생성자 작성해보기
// age, color 프로퍼티, cry 프로토타입 메서드 만들기("야옹~~~" 출력).
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

Cat.prototype.cry = function () {
  console.log("야옹~~~");
};

let cat = new Cat(31, "brown");
console.log(cat);
cat.cry();

let obj = new Object();
console.log(obj);
