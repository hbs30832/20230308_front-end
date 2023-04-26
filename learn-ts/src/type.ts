// type.ts

/* 
    type
        - type키워드를 사용하면 타입을 선언할 수 있다.
        - 파스칼케이스를 사용한다.
        - JS로 컴파일되지 않는다.
            => 타입 검사에 통과해도 실제 실행에서는 오류 발생이 일어날 수 있다.
        - 객체라던가 복잡한 타입을 만들 때 사용한다.
*/
type Age = number;

function printAge(age: Age) {
  console.log(age);
}

printAge(31);

type User = {
  name: string;
  age: number;
  weight?: number;
  hello?: () => void; // return 값이 없는 함수
};

const user: User = {
  name: "Seok",
  age: 31,
};

function introduce(user: User) {
  console.log(`안녕하세요 ${user.age}세 ${user.name}입니다.`);
}

introduce(user);

// 유니언 타입 : 여러 타입 중 하나에 해당하면 된다.
type Color = "red" | "blue" | "green";
// let color: Color = "black";

// 교차 타입 : 여러 타입을 하나로 합칠 수 있다.
type Response = {
  success: boolean;
  error?: { message: string };
};

type Product = {
  products: { price: number; name: string }[];
};

type Order = {
  orders: { count: number; name: string }[];
};

type ProductReponse = Product & Response;
type OrderResponse = Order & Response;

function getProductResponse(res: ProductReponse) {
  return res.products;
}

function getOrderResponse(res: OrderResponse) {
  return res.orders;
}
