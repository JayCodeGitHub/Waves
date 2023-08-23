import Library from "./components/library";
import Player from "./components/player";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Waves</h1>
      <audio src="/audio/1.mp3" controls />
      <Library />
      <Player />
    </div>
  );
}

export default App;
