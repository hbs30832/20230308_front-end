let btnList = document.querySelectorAll(".btns button");
let slideList = document.querySelector(".slideList");
let btnSlideList = document.querySelectorAll(".btnSlide");

// 각 버튼 클릭시 얼럿창에 번호 출력
btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    // 슬라이드 리스트 이동 시키기
    slideList.style.transform = `translate(${idx * -100}%)`;
  });
});

let index = 0;
// 이전 버튼 1씩 감소, 다음 버튼 1씩 증가 => 출력하기
// btnSlideList[0].addEventListener("click", () => {
//   alert(--index);
// });

// btnSlideList[1].addEventListener("click", () => {
//   alert(++index);
// });

btnSlideList.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    index += idx === 0 ? -1 : 1;
    alert(index);
  });
});
