import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sectionList = [
  { id: 1, title: "Main", bgColor: "red" },
  { id: 2, title: "About", bgColor: "blue" },
  { id: 3, title: "Skills", bgColor: "green" },
  { id: 4, title: "Contact", bgColor: "yellow" },
];

function Section() {
  // index 상태관리하기 => index값 alert 출력
  const [index, setIndex] = useState(0);

  // 스크롤 중인지 확인용
  const isScroll = useRef(false);

  const handleWheel = useCallback(
    (e) => {
      // 스크롤 중인지 확인 후 스크롤 중이라면 함수 종료
      if (isScroll.current) return;
      // 스크롤 중이라고 명시
      isScroll.current = true;
      // 스크롤 끝났다고 알려주기
      setTimeout(() => {
        isScroll.current = false;
      }, 400);
      e.preventDefault();
      if (e.deltaY > 0) {
        console.log(index);
        if (index < 3) setIndex(index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    },
    [index]
  );

  useEffect(() => {
    window.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, [handleWheel, index]);

  return (
    <Contanier>
      {sectionList.map((section) => (
        <SectionItem bgColor={section.bgColor} key={section.id}>
          {section.title}
        </SectionItem>
      ))}

      <Btns>
        {sectionList.map((section, idx) => (
          <BtnSection key={section.id} onClick={() => setIndex(idx)}>
            <span>{section.title}</span>
          </BtnSection>
        ))}
      </Btns>
    </Contanier>
  );
}

const Contanier = styled.div``;

const SectionItem = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  color: #fff;

  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const Btns = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const BtnSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  color: #fff;
  font-size: 12px;

  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;

    background-color: #fff;
    border-radius: 50%;
  }
`;

export default Section;
