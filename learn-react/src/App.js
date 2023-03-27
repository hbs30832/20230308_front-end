import Avatar from "./Avatar.jsx";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

/* 
  children
    - 컴포넌트의 여는 태그와 닫는 태그 사이의 내용은 children이라는 약속된 프로퍼티로 전달된다.
      => 원하는 위치 작성하여 출력할 수 있다.
*/
