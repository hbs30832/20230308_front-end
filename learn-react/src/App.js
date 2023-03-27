const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const title = "React";
  return (
    <>
      <h1
        style={{
          color: "red",
          fontWeight: "lighter",
        }}
      >
        Hello {title}!
      </h1>
      <h2>오늘은 {formatDate(today)}</h2>
      <img className="avatar" src={avatar} alt={description} />
    </>
  );
}

/* 
  JSX 안에 JavaScript 값(표현식) 포함 시키기.

    - JSX안에서 {}안에 JavaScript 표현식을 작성하면 동적인 값을 사용할 수 있다.
      => 변수, 연산, 함수 호출, 객체 리터럴 등 다양한 JavaScript 값을 포함 시킬 수 있다.
      => 값으로 평가되는 표현식이여야한다. 즉, if문, for문 등은 사용할 수 없다.

    - style 속성을 통해 스타일을 지정할 때는 객체를 전달해야한다.
      => {{}} 형태로 작성한다. 겉의 {}는 JavaScript 값임을 명시하고, 안쪽의 {}를 객체 리터럴이다.
*/
