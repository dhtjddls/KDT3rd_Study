import { useState } from "react";

const Handler_ex = () => {
  const [text, setText] = useState("Hello World!");

  const GoodBye = () => {
    setText("Goodbye World!");
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={GoodBye}>Goodbye</button>
    </div>
  );
};

export default Handler_ex;
