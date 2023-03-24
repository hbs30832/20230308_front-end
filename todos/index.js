// h1태그에 오늘 날짜 넣기
let today = new Date();
let logo = document.getElementById("logo");
let todoList = document.querySelector(".body ul");
let todoItems = document.querySelectorAll(".body ul li");
let inputForm = document.querySelector(".footer form");
let btnSave = document.querySelector(".btnSave");

logo.innerText = today.toLocaleDateString("ko-KR", {
  dateStyle: "full",
});

let todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    todoList.innerHTML += `
        <li>
            <span>${todo}</span>
            <button class="btnDel">삭제</button>
        </li>
    `;
  });
}

// form 태그 내에서 버튼 클릭하거나 엔터 입력시 submit 이벤트 발생!
// 등록 버튼 클릭시 값 읽어오기 => alert 창에 출력!
inputForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 태그의 기본 기능 수행을 막는다.
  let inputText = document.querySelector(".footer input");

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
        <span>${inputText.value}</span>
        <button class="btnDel">삭제</button>
    </li>
  `;

  inputText.value = "";
  inputText.focus();
});

// todoItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("done");
//   });
// });

todoList.addEventListener("click", function (e) {
  if (e.target.matches(".body ul li")) {
    e.target.classList.toggle("done");
  } else if (e.target.matches(".btnDel")) {
    let ok = confirm("정말 삭제하시겠습니까?");
    if (ok) {
      // 부모 요소 탐색 후 삭제.
      e.target.parentElement.remove();
    }
  }
});

btnSave.addEventListener("click", function () {
  //   localStorage.setItem("test", "저장되었나요???");

  let todoItems = document.querySelectorAll(".body ul li span");

  // 유사배열을 펼쳐서 배열로 만들기.
  let todoArr = [...todoItems];

  let textList = todoArr.map((todo) => todo.innerText);

  console.log(textList);

  localStorage.setItem("todos", JSON.stringify(textList));
});
