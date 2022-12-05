import { useRef } from "react";

const RefSample1 = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭시 input focus 기능 구현</p>
      <input type="text" ref={inputRef} placeholder="Enter Something" />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleDisabled}>Disabled</button>
    </>
  );
};

export default RefSample1;
