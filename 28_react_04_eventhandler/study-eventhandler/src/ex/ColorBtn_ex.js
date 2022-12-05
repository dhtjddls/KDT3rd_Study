import { useState } from "react";

const ColorBtn = () => {
  const [text, setText] = useState("검정색");
  const [color, setColor] = useState("black");

  const Red = () => {
    setColor("red");
    setText("빨간색");
  };

  const Blue = () => {
    setColor("blue");
    setText("파란색");
  };

  return (
    <>
      <p className="text" style={{ color: color }}>
        {text} 글씨
      </p>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>
    </>
  );
};

export default ColorBtn;
