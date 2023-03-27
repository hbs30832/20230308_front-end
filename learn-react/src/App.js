import { people } from "./data";
import { getImageUrl } from "./utils";

// Subrahmanyan Chandrasekhar : astrophysicist
export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItem = chemists.map((person) => (
    <li key={person.id} style={{ display: "flex" }}>
      <img src={getImageUrl(person)} alt={person.name} />
      <div>
        <b>{person.name}</b> : {person.profession}
        <p>{person.accomplishment}</p>
      </div>
    </li>
  ));
  return <ul>{listItem}</ul>;
}

/* 
  배열 렌더링하기
    - JSX에 배열을 포함시키면 배열에 있는 아이템들을 렌더링할 수 있다.
    - 데이터를 배열로 관리하면서 map()과 filter() 함수를 통해서 렌더링할 수 있다.
      => map() : 데이터를 JSX 변환할 수 있다.
      => filter() : 렌더링할 데이터를 필터링할 수 있다.
    - 배열을 렌더링할 때는 JSX에 고유한 key값을 부여해야한다.
      => React가 각 데이터를 구분해서 성능 최적화를 할 수 있다.
*/
