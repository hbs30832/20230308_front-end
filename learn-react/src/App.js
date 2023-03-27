export default function TodoList() {
  return (
    // This doesn't quite work!
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

/* 
  JSX(JavaScript and XML)
    - JavaScript 마크업 언어를 포함시키기 위한 확장된 문법.
      => JS지만 HTML 구조를 한눈에 알아보기 쉽다.
    - JSX는 React 개발을 도와주는 하나의 도구이다. 즉, React 별개이다.
      => create-react-app를 통해 프로젝트를 생성하면 Babel이라는 도구가 포함된다.

  JSX 지켜야될 문법

    1. 컴포넌트는 무조건 하나의 루트 요소를 반환해야한다.
        => 불필요한 요소를 작성하기 싫다면, <></> 빈 태그를 사용하면 된다. 이를 Fragment라고 한다.

    2. <img>와 같은 셀프 클로징 태그에는 /로 닫아주어야한다.
        => ex) <img src=""> => <img src="" />
    
    3. JSX에서는 거의 대부분 카멜케이스를 사용한다.
        => 작성한 속성(Attribute) 등이 결국에는 JS 객체로 변환되기 때문.
        => 요소에 클래스를 부여할 때 class 대신 className을 사용한다.
*/
