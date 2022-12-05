import { useState } from "react";

const Event_ex = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  // 제출
  const submit = () => {
    const newUser = user.concat({ id: id, name: name, title: title });
    setId(id + 1);
    setName("");
    setTitle("");
    setUser(newUser);
  };
  // 삭제
  const DeleteUser = (id) => {
    const result = user.filter((a) => a.id !== id);
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
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      제목:
      <input
        value={title}
        onKeyDown={EnterSubmit}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={submit}>등록</button>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {user.map((a) => {
            return (
              <tr key={a.id} onDoubleClick={() => DeleteUser(a.id)}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Event_ex;
