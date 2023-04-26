/*
    인터페이스
        - 클래스와 다르게 실제 구현을 하지는 않고 설계만 하여 추상화한다.
        - 구현되어야할 부분(프로퍼티, 메서드)를 강제하여 일관성을 유지한다.
        - 잘 작성해야 유지보수가 쉬워진다.

    덕 타이핑(Duck Typing) or 구조적 타이핑(Structural Typing)
        - 필요한 구조가 갖추어져있다면 같은 타입으로 판단한다.
        - 상황에 따라 타입 체크 결과가 달라진다.

    type과의 차이점
        - interface도 type과 거의 동일하게 동작한다.
        - interface는 객체만 가능하다.
        - 객체를 만들 때는 interface가 성능이 더 낫다고 한다.
        
*/
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function (distance) {
        console.log("".concat(this.speed, "km/h\uB85C ").concat(distance, "km\uB9CC\uD07C \uB3C4\uB85C\uB85C \uC774\uB3D9"));
    };
    return Car;
}());
var car = new Car(60);
// 라이브러리라고 가정
function translate(car, distance) {
    car.move(distance);
}
var Airplane = /** @class */ (function () {
    function Airplane(color) {
        this.color = color;
    }
    Airplane.prototype.move = function (distance) {
        console.log("".concat(distance, "\uB9CC\uD07C \uB0A0\uC544\uC11C \uC774\uB3D9"));
    };
    return Airplane;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.move = function (distance) {
        console.log("".concat(distance, "\uB9CC\uD07C \uC790\uC804\uAC70\uB85C \uC774\uB3D9"));
    };
    return Bicycle;
}());
var airplane = new Airplane("red");
var bicycle = new Bicycle(2);
translate(bicycle, 5);
translate(car, 20);
translate(airplane, 200);
var obj = {
    move: function (distance) { },
    weight: 60
};
var kickboard = obj;
var motorcycle = {
    speed: 50,
    move: function (distance) { }
};
