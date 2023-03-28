export default function Toolbar() {
  // 검색 중... => handleSubmit 함수 작성하기. 새로고침 x.
  function handleSubmit(e) {
    e.preventDefault(); // 요소의 기본 기능을 실행하지
    alert("검색 중...");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button>검색</button>
    </form>
  );
}

/* 
  이벤트 처리
    - 요소의 on 접두사로 시작하는 이벤트 속성에 함수를 전달한다.
      => 속성명은 카멜케이스를 사용한다.
      => 함수 자체를 전달해야 하고, 함수 호출을 하면 안된다.
      => 인자를 전달하는 등 함수를 호출해야 하는 형태라면, 익명 함수 내에서 함수를 호출하면 된다.
    - props 객체를 통해서 하위 컴포넌트에 전달할 수 있다.
    - 하위 요소에서 상위 요소로 같은 이벤트는 전파된다.
      => e.stopPropagation()을 사용하면 상위 요소로 이벤트 전파를 하지않는다.
    - form 태그와 같이 태그의 특수한 기능을 실행하지 않고자 할 때는 e.preventDefault()를 사용한다.
*/
