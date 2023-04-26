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

interface Mobility {
  move(distance: number): void;
}

class Car implements Mobility {
  constructor(public speed: number) {}
  move(distance: number) {
    console.log(`${this.speed}km/h로 ${distance}km만큼 도로로 이동`);
  }
}

const car = new Car(60);

// 라이브러리라고 가정
function translate(car: Mobility, distance: number) {
  car.move(distance);
}

class Airplane implements Mobility {
  constructor(public color: string) {}
  move(distance: number) {
    console.log(`${distance}만큼 날아서 이동`);
  }
}

class Bicycle implements Mobility {
  constructor(public wheels: number) {}
  move(distance: number): void {
    console.log(`${distance}만큼 자전거로 이동`);
  }
}

const airplane = new Airplane("red");
const bicycle = new Bicycle(2);

translate(bicycle, 5);
translate(car, 20);
translate(airplane, 200);

const obj = {
  move: (distance: number) => {},
  weight: 60,
};

const kickboard: Mobility = obj;

const motorcycle: Car = {
  speed: 50,
  move: (distance: number) => {},
};
