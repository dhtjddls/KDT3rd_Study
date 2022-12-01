import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ClassComponent student ={20} name="여러분" />
        <hr />
        <FuncComponent student ={25} name="요 놈 들아" />
        <Button link="https://www.google.com">구글</Button>
        <Button link="https://www.daum.net">다음</Button>
        <Button link="https://www.naver.com">네이버</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
