import { useState, useEffect } from "react";
// 부모 컴포넌트
const LifeCycle = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h1>함수형 컴포넌트에서 lifecycle 이해하기</h1>
      <MyComponent number={number}></MyComponent>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>Visible</button>
      {visible && <MyComponent number={number}></MyComponent>}
    </>
  );
};

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("O mount");
    return () => {
      console.log("x unmount!");
    };
  }, []);

  useEffect(() => {
    console.log("update!");
  });
  useEffect(() => {
    console.log("textState updated!", text);
  }, [text]);

  return (
    <>
      <p>My Component {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
export default LifeCycle;
