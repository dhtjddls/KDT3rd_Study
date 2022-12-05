import "./App.css";
import Handler_ex from "./ex/Handler_ex";
import ColorBtn from "./ex/ColorBtn_ex";
import Visible from "./ex/Visible";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Handler_ex></Handler_ex>
        <ColorBtn></ColorBtn>
        <Visible></Visible>
      </header>
    </div>
  );
}

export default App;
