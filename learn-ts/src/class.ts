/* 
    class
        - 클래스는 타입으로도 사용 가능하다.
        - 접근 제한자를 사용해서 외부로 멤버(프로퍼티) 변수의 공개 여부를 지정할 수 있다.
            1) private : 클래스 내부에서만 참조 가능.
            2) public : 외부로 공개. 기본값
            3) protected : 클래스 내부에서만 참조 가능하고, 상속시 하위 클래스에서 참조 가능.
*/
class Animal {
  public specie: string;
  private color: string;
  protected legs: number;
  constructor(specie: string, color: string, legs: number) {
    this.specie = specie;
    this.color = color;
    this.legs = legs;
  }

  printColor() {
    console.log(this.color);
  }
}

const animal = new Animal("Dog", "brown", 4);
// 클래스는 타입으로도 사용 가능하다.
function printAnimal(animal: Animal) {
  console.log(animal.specie);
}

animal.printColor();
