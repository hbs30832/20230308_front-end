import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   alert(index);
  // }, [index]);

  const handleIndex = (op) => {
    if (index + op >= 0 && index + op <= 2) setIndex(index + op);
  };

  return (
    <>
      <Container>
        <SlideList index={index}>
          <SlideItem bgColor="red">1</SlideItem>
          <SlideItem bgColor="blue">2</SlideItem>
          <SlideItem bgColor="yellow">3</SlideItem>
        </SlideList>
        <BtnSlide onClick={() => handleIndex(-1)}>이전</BtnSlide>
        <BtnSlide onClick={() => handleIndex(1)}>다음</BtnSlide>
      </Container>
      <BtnNumList>
        <BtnNum onClick={() => setIndex(0)}>1</BtnNum>
        <BtnNum onClick={() => setIndex(1)}>2</BtnNum>
        <BtnNum onClick={() => setIndex(2)}>3</BtnNum>
      </BtnNumList>
    </>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  overflow: hidden;
  position: relative;
`;

const SlideList = styled.ul`
  display: flex;
  height: 300px;

  transform: translateX(${({ index }) => index * -100}%);
  transition: transform 0.4s;
`;

const SlideItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  list-style: none;
  flex-shrink: 0;

  background-color: ${({ bgColor }) => bgColor};

  color: #fff;
  font-size: 5rem;
  font-weight: bold;
`;

const BtnNumList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
`;

const BtnNum = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;

  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const BtnSlide = styled(BtnNum)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  &:nth-of-type(1) {
    left: 20px;
  }

  &:nth-of-type(2) {
    right: 20px;
  }
`;

// 위에서 사용할 태그들 만들기.
