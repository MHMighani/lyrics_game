import Word from "./components/word";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Word value="Hello" hiddenLettersIndex={[1, 2, 3]} />
    </div>
  );
}

export default App;
