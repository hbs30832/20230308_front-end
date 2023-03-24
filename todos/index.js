// h1태그에 오늘 날짜 넣기
let today = new Date();
let logo = document.getElementById("logo");
let btnSubmit = document.querySelector(".footer button");
let todoList = document.querySelector(".body ul");
let todoItems = document.querySelectorAll(".body ul li");

logo.innerText = today.toLocaleDateString("ko-KR", {
  dateStyle: "full",
});

// 등록 버튼 클릭시 값 읽어오기 => alert 창에 출력!
btnSubmit.addEventListener("click", function () {
  let inputText = document.querySelector(".footer input").value;

  //   let liElem = document.createElement("li");
  //   liElem.addEventListener("click", function () {
  //     liElem.classList.toggle("done");
  //   });

  //   liElem.innerText = inputText;

  //   let buttonElem = document.createElement("button");
  //   buttonElem.innerText = "삭제";
  //   buttonElem.classList.add("btnDel");

  //   liElem.appendChild(buttonElem);

  //   todoList.appendChild(liElem);

  todoList.innerHTML += `
    <li>
        ${inputText}
        <button>삭제</button>
    </li>
  `;
});

// todoItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("done");
//   });
// });

todoList.addEventListener("click", function (e) {
  if (e.target.matches(".body ul li")) {
    e.target.classList.toggle("done");
  }
});
