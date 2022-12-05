import { useState } from "react";

const Event_ex = () => {
  const [user, setUser] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // 제출
  const submit = () => {
    const newUser = user.concat({ name: name, email: email });
    setUser(newUser);
  };
  // 삭제
  const DeleteUser = (name) => {
    const result = user.filter((a) => a.name !== name);
    setUser(result);
  };
  // enter key event 함수
  const EnterSubmit = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  return (
    <div>
      이름:
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      이메일:
      <input
        onKeyDown={EnterSubmit}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={submit}>등록</button>
      <br />
      <ul>
        {user.map((a) => {
          return (
            <li onDoubleClick={() => DeleteUser(a.name)}>
              {a.name}: {a.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Event_ex;
