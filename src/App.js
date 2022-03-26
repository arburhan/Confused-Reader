import logo from './logo.svg';
import './App.css';
import Books from './Component/Books/Books';
import Question from './Component/Question/Question';

function App() {
  return (
    <div className="App">
      <h1>Confused Reader</h1>
      <Books></Books>
      <Question></Question>
    </div>
  );
}

export default App;
