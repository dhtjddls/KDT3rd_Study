import { useState, useRef } from "react";

const Event_ex = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const [category, setCategory] = useState();
  const [searchWord, setSearchWord] = useState("");
  const nameRef = useRef();
  const titleRef = useRef();
  // 제출
  const submit = () => {
    if (inputVali()) {
      return;
    }
    const newUser = user.concat({ id: id, name: name, title: title });
    setId(id + 1);
    setName("");
    setTitle("");
    setUser(newUser);
  };
  // input 검증
  const inputVali = () => {
    if (nameRef.current.value.trim() === "") {
      setName("");
      nameRef.current.focus();
      return true;
    }
    if (titleRef.current.value.trim() === "") {
      setTitle("");
      titleRef.current.focus();
      return true;
    }
    return false;
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

  const searchGo = (category, searchWord) => {
    if (category === "writor") {
      const newSearchUser = user.filter((a) => a.name.includes(searchWord));
      setSearchUser(newSearchUser);
    } else {
      const newSearchUser = user.filter((a) => a.title.includes(searchWord));
      setSearchUser(newSearchUser);
    }
    setSearchWord("");
  };

  return (
    <div>
      이름:
      <input
        value={name}
        ref={nameRef}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      제목:
      <input
        value={title}
        ref={titleRef}
        onKeyDown={EnterSubmit}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={submit}>등록</button>
      <br />
      <select
        name="options"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="writor">작성자</option>
        <option value="docTitle">제목</option>
      </select>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          placeholder="검색어"
        />
      </label>
      <button onClick={() => searchGo(category, searchWord)}>검색</button>
      <h3>전체 댓글 목록</h3>
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
      <h3>댓글 검색 결과</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {searchUser.map((a) => {
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
