import { useRef, useState } from "react";

const RefSample2 = () => {
  const id = useRef(1);
  const [num, setNum] = useState(1);
  const plusId = () => {
    id.current += 1;
  };

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1>Ref Sample local variable</h1>
      <h2>Ref : {id.current}</h2>
      <button onClick={plusId}>Plus Ref</button>

      <h2>State : {num}</h2>
      <button onClick={plusNum}>Plus State</button>
    </>
  );
};

export default RefSample2;
