/* 
    객체(Object)
        - 다양한 속성(Property)을 가지는 고유한 데이터를 나타낸다.
        - 데이터를 사람의 사물을 바라보는 관점으로 나타내는 방식.
        - key(속성이름)-value(속성값)로 속성을 나타낸다.
        - {} 기호를 통해서 작성하는 방식 : 객체 리터럴.
        - 상태(프로퍼티)와 행위(메서드)를 통해 동작할 수 있다.
*/

let user = {
  age: 31,
  name: "Seok",
  hello: function () {},
};

// 객체의 프로퍼티 참조.
console.log(user.name);

// 객체의 프로퍼티 값 변경.
user.name = "Hwangbo";

// 새로운 프로퍼티 추가.
user.address = "운서동";
console.log(user.address);
