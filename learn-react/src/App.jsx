import { useState } from "react";
import Effect from "./components/Effect";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Effect />}
    </>
  );
}
