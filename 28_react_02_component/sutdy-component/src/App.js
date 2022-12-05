import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';
import Food from './Food';
import TextProps from './TextProps';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <TextProps text='이건 Text Props 입니당' valid={() => console.log('콘솔 띄우기 성공!')}></TextProps>
      </div>
    </div>
  );
}

export default App;
