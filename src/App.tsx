import "./App.css";
import Library from "./components/library";
import Player from "./components/player";

function App() {
  return (
    <div id="Wrapper">
      <h1>Waves</h1>
      <audio src="/audio/1.mp3" controls />
      <Library />
      <Player />
    </div>
  );
}

export default App;
