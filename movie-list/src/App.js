import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState();
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    // input 입력값 alert창 띄우기!

    console.log(name);

    try {
      const res = await fetch("http://localhost:8000/profile", {
        method: "put",
        body: JSON.stringify({
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setProfile(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Reqeust를 보낸다. 원래 Promise지만 await를 통해서 resolve 될 때까지 기다린다.
        const res = await fetch("http://localhost:8000/profile");
        // Response를 JS로 읽을 수 있게 변환한다. 원래 Promise.
        const data = await res.json();
        // 변환이 완료되면 set.
        setProfile(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  if (!profile) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} type="button">
        이름 변경
      </button>
    </div>
  );
}

export default App;
