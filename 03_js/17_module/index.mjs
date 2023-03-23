// import ~ from "경로" : 다른 모듈에서 export하는 값들을 불러온다.
//  => export 된 값들은 {}안에, export default는 {} 사용  x.
//  => as를 통해 export된 값들의 이름을 변경할 수 있다.
//  => 경로만 잘 작성했다면 export default된 값은 이름을 자유롭게 작성해도 된다.

// Node.js에서 export/import를 사용하려면 .mjs 확장자를 사용한다.
//      => 혹은 package.json에 type을 모듈로 지정한다.
import { PI, sum as add, fibonacci } from "./math.mjs";
import * as Math from "./math.mjs"; // 모듈 전체를 불러온다.
import MathObj from "./math.mjs";
console.log(PI);
console.log(MathObj);
console.log(Math);

// PI = 3.141592;
