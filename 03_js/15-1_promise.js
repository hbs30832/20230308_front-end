// 15-1_promise.js
/* 
    프로미스(Promise)
        - 비동기 처리를 도와주는 객체.
        - 인스턴스를 생성할 때 콜백함수를 인자로 전달한다.
            1) 콜백함수의 첫번째 인자 : resolve 함수
                => 성공했을 때. 데이터를 반환해주는 함수.
                => 인스턴스의 then 메서드의 콜백함수로 전달된다.
                => resolve가 될 때까지 then의 콜백함수를 실행하지 않는다.
            2) 콜백함수의 두번째 인자 : reject 함수
                => 실패했을 때. 에러를 발생를 발생시키는 함수.
                => reject함수의 인자로 이유를 전달하면 된다.
                => 인스턴스의 catch 메서드를 통해서 에러를 처리할 수 있다.

        - API 통신을 통해서 서버에서 데이터를 받아올 때 Promise가 반환된다.

        - Promise에는 세가지 상태가 있다.
            1) pending : resolve나 reject를 기다리는 상태.
            2) fulfiled : resolve된 상태.
            3) rejected : reject된 상태.
*/

let movies = [
  { id: 1, title: "스즈메의 문단속" },
  { id: 2, title: "소울메이트" },
  { id: 3, title: "웅남이" },
];

let promise = new Promise((resolve, reject) => {
  // 서버에서 받아오는 시간 3초 가정.
  // movies 배열에서 제목이 스즈메의 문단속인 객체 찾기.
  let data = movies.find((movie) => {
    return movie.title === "슬램덩크";
  });

  setTimeout(() => {
    if (!data) {
      reject("찾는 영화가 없습니다.");
    }
    resolve(data);
  }, 3000);
});

console.log("데이터 요청");
promise
  .then((val) => {
    console.log(val);
    console.log("데이터 받아오기 성공");
  })
  .catch((err) => {
    console.log(err);
  });

// 인자로 전달받은 제목의 영화가 있으면 resolve, 없으면 "찾는 영화가 없습니다." 에러 발생
//      => 3초 뒤에
function getData(title) {
  return new Promise((resolve, reject) => {
    let data = movies.find((movie) => movie.title == title);

    setTimeout(() => {
      if (data) {
        resolve(data);
      }

      reject("찾는 영화가 없습니다.");
    }, 3000);
  });
}

getData("슬램덩크")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/* 
    async/await
        - 함수 앞에다가 async를 붙이면 비동기 처리 함수가 된다.
            => 비동기 코드를 동기 코드처럼 작성할 수 있게 도와준다.
        - 프로미스 앞에 await을 붙이면 resolve될 때까지 기다린 후 다음 코드를 실행한다.
        - try/catct문을 통해서 에러 처리를 할 수 있다.
        - await은 async 함수 내부에서만 사용 가능하다.
        - async 함수는 값을 return 그 값을 resolve 하는 프로미스가 반환된다.
        
*/

async function render(title) {
  try {
    let data = await getData(title);
    console.log("화면에 출력 : ", data);

    return data.title;
  } catch (e) {
    console.log(e);
  }
}

// async 함수의 return값은 Promise가 된다.
render("웅남이").then((title) => title);
