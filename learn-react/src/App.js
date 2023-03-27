// Gallery.jsx에 작성된 Gallery 컴포넌트를 import.
import Gallery from "./Gallery";
import { Profile } from "./Gallery"; // named export.

// src/App.js
export default function App() {
  return (
    <div>
      <Gallery />
      <Gallery />
    </div>
  );
}

/* 
  컴포넌트 export/import

  - 루트 컴포넌트는 기본적으로 create-reate-app로 프로젝트를 만들면, App.js 루트 컴포넌트가 된다.
      => index.js가 가장 먼저 실행되고, 가장 먼저 렌더링되는 컴포넌트가 App 컴포넌트다.
      => 언제든 마음대로 변경할 수 있다. 
  - export/import문을 통해서 컴포넌트를 별도의 파일로 관리할 수 있다.
      => export default나 named export 둘다 상관없지만, 핵심이 되는 컴포넌트는 export default 권고.
      => named export를 적절히 활용하면 하나의 파일에서 여러 컴포넌트를 내보낼 수 있다.
*/
