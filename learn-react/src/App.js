function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

/* 
  조건부 렌더링
    - 조건에 따라 보여줄 내용이 달라지거나 혹은 렌더링 여부를 결정할 수 있다.

    1) if문을 통해 조건에 따라 다른 jsx를 return한다.
      => 간단한 내용보다는 조건에 따라 컴포넌트 자체가 달라지는 것처럼 구조 자체가 바뀔 때 사용한다.
      => 조건에 따라 내용을 렌더링하지 않고자 할 때는 null return하면 된다.

    2) 삼항 연산자( ? : )
      => jsx 안에서는 if문 사용이 불가능하기 때문에 jsx 안에서 내용을 다르게 할 때 사용한다.
    
    3) &&(and)
      => 단순히 앞에 조건에 따라 뒤에 내용이 렌더링 될지말지 정할 때 사용한다.
*/
