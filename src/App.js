import Lyric from "./components/lyric";
import lyric from "./lyrics/koop-island-blues";
// import Test from "./components/test";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Lyric data={lyric} />
      {/* <Test /> */}
    </div>
  );
}

export default App;
