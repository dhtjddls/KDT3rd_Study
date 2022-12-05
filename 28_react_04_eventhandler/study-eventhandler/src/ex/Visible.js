import { useState } from "react";

const Visible = () => {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("사라져라!");
  const [display, setDisplay] = useState("block");

  const BtnVisible = () => {
    visible ? setVisible(false) : setVisible(true);
    visible ? setText("보여라!") : setText("사라져라!");
    visible ? setDisplay("none") : setDisplay("block");
  };

  return (
    <div>
      <div className="text" style={{ display: display }}>
        안녕하세요
      </div>
      <button onClick={BtnVisible}>{text}</button>
    </div>
  );
};

export default Visible;
